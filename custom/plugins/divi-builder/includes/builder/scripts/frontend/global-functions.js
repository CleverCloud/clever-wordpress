// Internal Dependencies
import { top_window } from '@core/admin/js/frame-helpers';
import { isBuilder } from '../utils/utils';
import { getClosestStickyModuleOffsetTop, isTargetStickyState } from '../utils/sticky';


(function($) {
  const isBlockLayoutPreview = $('body').hasClass('et-block-layout-preview');

  const $tbHeader = $('.et-l--header').first();
  let tbHeaderAllFixedSectionHeight = 0;

  // Modification of underscore's _.debounce()
  // Underscore.js 1.8.3
  // http://underscorejs.org
  // (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  // Underscore may be freely distributed under the MIT license.
  window.et_pb_debounce = function(func, wait, immediate) {
    let timeout; let args; let context; let timestamp; let
      result;

    const now = Date.now || new Date().getTime();

    var later = function() {
      const last = now - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (! immediate) {
          result = func.apply(context, args);
          if (! timeout) context = args = null;
        }
      }
    };

    return function() {
      context       = this;
      args          = arguments;
      timestamp     = now;
      const callNow = immediate && ! timeout;
      if (! timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result  = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  if ($tbHeader.length) {
      const $tbHeaderSections = $tbHeader.find('.et_builder_inner_content').children('.et_pb_section--fixed');

      // Get the most tall header fixed section height
      const et_pb_header_most_lengthy_fixed_section_height = et_pb_debounce(e => {
          tbHeaderAllFixedSectionHeight = 0;

          $.each($tbHeaderSections, function(index, section) {
              let $sectionHeight = $(section).outerHeight(true);

              tbHeaderAllFixedSectionHeight += $sectionHeight;

              // If section's top offset is negative, subtract it from tbHeaderAllFixedSectionHeights,
              // but don't let tbHeaderAllFixedSectionHeight be less than 0.
              let sectionOffset = $(section).offset();
              let topOffset     = sectionOffset.top;

              if (topOffset < 0 && Math.abs(topOffset) > tbHeaderAllFixedSectionHeight) {
                tbHeaderAllFixedSectionHeight = 0;
              } else if (topOffset < 0) {
                tbHeaderAllFixedSectionHeight += topOffset;
              }
            });
      }, 300);

      $(window).on('resize', et_pb_header_most_lengthy_fixed_section_height);
  }

  window.et_pb_smooth_scroll = function($target, $top_section, speed, easing) {
    const targetOffsetTop    = $target.offset().top;
    const $window_width      = $(window).width();
    let $menu_offset         = 0;
    let $scroll_position     = 0;
    let $menuLeft            = '';
    let $menuRight           = '';
    let $fixedHeaderSection  = $tbHeader.find('.et_pb_section');

    // If the target is in sticky state there should be no scroll so we can bail early.
    if (isTargetStickyState($target)) {
      return;
    }

    if ($('body').hasClass('et_fixed_nav') && $window_width > 980) {
      const topHeaderHeight = $('#top-header').outerHeight() || 0;
      const mainHeaderHeight = $('#main-header').outerHeight() || 0;
      $menu_offset = topHeaderHeight + mainHeaderHeight - 1;
    } else {
      $menu_offset = 0;
    }

    if ($('#wpadminbar').length && $window_width > 600) {
      const wpAdminBarHeight = $('#wpadminbar').outerHeight() || 0;
      $menu_offset += wpAdminBarHeight;
    }

    if ($tbHeader.length) {
      // attach targeted section just under header (if) fixed section
      if ($fixedHeaderSection.hasClass('et_pb_section--fixed')) {
        $menuLeft  = Math.ceil(parseFloat($fixedHeaderSection.css('left')));
        $menuRight = Math.ceil(parseFloat($fixedHeaderSection.css('right')));
        if ($window_width < 980) {
          $menu_offset += 90;
        }
      }

      if (0 === $menuLeft + $menuRight) {
        $menu_offset += tbHeaderAllFixedSectionHeight;
      }
    }

    // Calculate offset that needs to be added due to the existence of sticky module(s).
    // This avoids smooth scroll to stop beneath sticky module.
    const closestStickyOffsetTop = getClosestStickyModuleOffsetTop($target);

    if (closestStickyOffsetTop) {
      $menu_offset += closestStickyOffsetTop;
    }

    // fix sidenav scroll to top
    if ($top_section) {
      $scroll_position = 0;
    } else {
      $scroll_position = Math.round(targetOffsetTop) - $menu_offset;
    }

    // set swing (animate's scrollTop default) as default value
    if ('undefined' === typeof easing) {
      easing = 'swing';
    }

    $('html, body').animate({ scrollTop: $scroll_position }, speed, easing);
  };

  window.et_pb_form_placeholders_init = function($form) {
    $form.find('input:text, input[type="email"], input[type="url"], textarea').each((index, domEle) => {
      const $et_current_input    = jQuery(domEle);
      const $et_comment_label    = $et_current_input.siblings('label');
      let et_comment_label_value = $et_current_input.siblings('label').text();
      if ($et_comment_label.length) {
        $et_comment_label.hide();
        if ($et_current_input.siblings('span.required')) {
          et_comment_label_value += $et_current_input.siblings('span.required').text();
          $et_current_input.siblings('span.required').hide();
        }
        $et_current_input.val(et_comment_label_value);
      }
    }).on('focus', function() {
      let et_label_text = jQuery(this).siblings('label').text();
      if (jQuery(this).siblings('span.required').length) et_label_text += jQuery(this).siblings('span.required').text();
      if (jQuery(this).val() === et_label_text) jQuery(this).val('');
    }).on('blur', function() {
      let et_label_text = jQuery(this).siblings('label').text();
      if (jQuery(this).siblings('span.required').length) et_label_text += jQuery(this).siblings('span.required').text();
      if ('' === jQuery(this).val()) jQuery(this).val(et_label_text);
    });
  };

  window.et_duplicate_menu = function(menu, append_to, menu_id, menu_class, menu_click_event) {
    append_to.each(function() {
      const $this_menu = $(this);
      let $cloned_nav;

      // Bail early if menu has already been duplicated.
      if ($this_menu.find(`#${menu_id}`).length) {
        return;
      }

      // make this function work with existing menus, without cloning
      if ('' !== menu) {
        menu.clone().attr('id', menu_id).removeClass().attr('class', menu_class)
          .appendTo($this_menu);
      }

      $cloned_nav = $this_menu.find('> ul');
      $cloned_nav.find('.menu_slide').remove();
      $cloned_nav.find('.et_pb_menu__logo-slot').remove();
      $cloned_nav.find('li').first().addClass('et_first_mobile_item');

      $cloned_nav.find('a').on('click', function() {
        $(this).parents('.et_mobile_menu').siblings('.mobile_menu_bar').trigger('click');
      });

      if ('no_click_event' !== menu_click_event) {
        if (isBuilder) {
          $this_menu.off('click');
        }

        const $this_menu_section        = $this_menu.closest('.et_pb_section');
        const $this_menu_row            = $this_menu.closest('.et_pb_row');
        const $this_menu_sec_has_radius = $this_menu_section.css('border-radius') !== '0px';
        const $this_menu_row_has_radius = $this_menu_row.css('border-radius') !== '0px';

        $this_menu.on('click', '.mobile_menu_bar', function() {
          // Close all other open menus.
          $('.mobile_nav.opened .mobile_menu_bar').not($(this)).trigger('click');

          if ($this_menu.hasClass('closed')) {
            $this_menu.removeClass('closed').addClass('opened');

            if ($this_menu_sec_has_radius || $this_menu_row_has_radius) {
              $this_menu_section.css('overflow', 'visible');
              $this_menu_row.css('overflow', 'visible');
            }

            $cloned_nav.stop().slideDown(500);
          } else {
            $this_menu.removeClass('opened').addClass('closed');
            $cloned_nav.stop().slideUp(500);

            if ($this_menu_sec_has_radius || $this_menu_row_has_radius) {
              setTimeout(() => {
                $this_menu_section.css('overflow', 'hidden');
                $this_menu_row.css('overflow', 'hidden');
              }, 500);
            }
          }
          return false;
        });
      }
    });

    $('#mobile_menu .centered-inline-logo-wrap').remove();
  };

  // remove placeholder text before form submission
  window.et_pb_remove_placeholder_text = function($form) {
    $form.find('input:text, textarea').each((index, domEle) => {
      const $et_current_input = jQuery(domEle);
      const $et_label         = $et_current_input.siblings('label');
      const et_label_value    = $et_current_input.siblings('label').text();

      if ($et_label.length && $et_label.is(':hidden')) {
        if ($et_label.text() == $et_current_input.val()) $et_current_input.val('');
      }
    });
  };

  window.et_fix_fullscreen_section = function() {
    const $et_window = isBlockLayoutPreview ? $(top_window) : $(window);

    $('section.et_pb_fullscreen').each(function() {
      const $this_section = $(this);

      et_calc_fullscreen_section.bind($this_section);

      $et_window.on('resize', et_calc_fullscreen_section.bind($this_section));
    });
  };

  window.et_bar_counters_init = function($bar_item) {
    if (! $bar_item.length) {
      return;
    }

    $bar_item.css({
      width: `${parseFloat($bar_item.attr('data-width'))}%`,
    });
  };

  window.et_fix_pricing_currency_position = function($pricing_table) {
    setTimeout(() => {
      const $all_pricing_tables = typeof $pricing_table !== 'undefined' ? $pricing_table : $('.et_pb_pricing_table');

      if (! $all_pricing_tables.length) {
        return;
      }

      $all_pricing_tables.each(function() {
        const $this_table      = $(this);
        const $price_container = $this_table.find('.et_pb_et_price');
        const $currency        = $price_container.length ? $price_container.find('.et_pb_dollar_sign') : false;
        const $price           = $price_container.length ? $price_container.find('.et_pb_sum') : false;

        if (! $currency || ! $price) {
          return;
        }

        // adjust the margin of currency sign to make sure it doesn't overflow the price
        $currency.css({ marginLeft: `${- $currency.width()}px` });
      });
    }, 1);
  };

  window.et_pb_set_responsive_grid = function($grid_items_container, single_item_selector) {
    setTimeout(() => {
      const container_width  = $grid_items_container.innerWidth();
      const $grid_items      = $grid_items_container.find(single_item_selector);
      const item_width       = $grid_items.outerWidth(true);
      const last_item_margin = item_width - $grid_items.outerWidth();
      const columns_count    = Math.round((container_width + last_item_margin) / item_width);
      let counter            = 1;
      let first_in_row       = 1;
      let $first_in_last_row = $();

      $grid_items.removeClass('last_in_row first_in_row on_last_row');
      $grid_items.filter(':visible').each(function() {
        const $this_element = $(this);

        if (! $this_element.hasClass('inactive')) {
          if (first_in_row === counter) {
            $this_element.addClass('first_in_row');
            $first_in_last_row = $this_element;
          } else if (0 === counter % columns_count) {
            $this_element.addClass('last_in_row');
            first_in_row = counter + 1;
          }
          counter++;
        }
      });
      if ($first_in_last_row.length) {
        const $module = $first_in_last_row.parents('.et_pb_module');

        // set margin bottom to 0 if the gallery is the last module on the column
        if ($module.is(':last-child')) {
          const column = $first_in_last_row.parents('.et_pb_column')[0];
          $(column).find('.et_pb_grid_item').removeClass('on_last_row');

          // keep gutter margin if gallery has pagination
          let pagination = $module.find('.et_pb_gallery_pagination');
          if (0 === pagination.length) {
            pagination = $module.find('.et_pb_portofolio_pagination');
          }
          if (0 === pagination.length || (pagination.length > 0 && ! pagination.is(':visible'))) {
            if (columns_count > 1) {
              $first_in_last_row.addClass('on_last_row');
            }

            $first_in_last_row.nextAll().addClass('on_last_row');
          }
        }
      }
    }, 1); // need this timeout to make sure all the css applied before calculating sizes
  };

  window.et_pb_set_tabs_height = function($tabs_module) {
    if ('undefined' === typeof $tabs_module) {
      $tabs_module = $('.et_pb_tabs');
    }

    if (! $tabs_module.length) {
      return;
    }

    $tabs_module.each(function() {
      const $tab_controls      = $(this).find('.et_pb_tabs_controls');
      const $all_tabs          = $tab_controls.find('li');
      let max_height           = 0;
      const small_columns      = '.et_pb_column_1_3, .et_pb_column_1_4, .et_pb_column_3_8';
      const in_small_column    = $(this).parents(small_columns).length > 0;
      const on_small_screen    = parseFloat($(window).width()) < 768;
      const vertically_stacked = in_small_column || on_small_screen;

      if (vertically_stacked) {
        $(this).addClass('et_pb_tabs_vertically_stacked');
      }

      // determine the height of the tallest tab
      if ($all_tabs.length) {
        // remove the height attribute if it was added to calculate the height correctly
        $tab_controls.children('li').removeAttr('style');

        $all_tabs.each(function() {
          const tab_height = $(this).outerHeight();

          if (vertically_stacked) {
            return;
          }

          if (tab_height > max_height) {
            max_height = tab_height;
          }
        });
      }

      if (0 !== max_height) {
        // set the height of tabs container based on the height of the tallest tab
        $tab_controls.children('li').css('height', `${max_height}px`);
      }
    });
  };

  window.et_pb_box_shadow_apply_overlay = function(el) {
    const pointerEventsSupport = document.body.style.pointerEvents !== undefined

            // For some reasons IE 10 tells that supports pointer-events, but it doesn't
            && (document.documentMode === undefined || document.documentMode >= 11);

    if (pointerEventsSupport) {
      $(el).each(function() {
        if (! $(this).children('.box-shadow-overlay').length) {
          $(this)
            .addClass('has-box-shadow-overlay')
            .prepend('<div class="box-shadow-overlay"></div>');
        }
      });
    } else {
      $(el).addClass('.et-box-shadow-no-overlay');
    }
  };

  window.et_pb_init_nav_menu = function($et_menus) {
    $et_menus.each(function() {
      const $et_menu = $(this);

      // don't attach event handlers several times to the same menu
      if ($et_menu.data('et-is-menu-ready')) {
        return;
      }

      $et_menu.find('li').on('mouseenter', function() {
        window.et_pb_toggle_nav_menu($(this), 'open');
      }).on('mouseleave', function() {
        // close the open menu immediatly on mouseleave event.
        window.et_pb_toggle_nav_menu($(this), 'close', 0);
      });

      // close all opened menus on touch outside the menu
      $('body').on('touchend', event => {
        if ($(event.target).closest('ul.nav, ul.menu').length < 1 && $('.et-hover').length > 0) {
          window.et_pb_toggle_nav_menu($('.et-hover'), 'close');
        }
      });

      // Dropdown menu adjustment for touch screen
      $et_menu.find('li.menu-item-has-children').on('touchend', function(event) {
        const $closest_li = $(event.target).closest('.menu-item');

        // no need special processing if parent li doesn't have hidden child elements
        if (! $closest_li.hasClass('menu-item-has-children')) {
          return;
        }

        const $this_el            = $(this);
        const is_mega_menu_opened = $closest_li.closest('.mega-menu-parent.et-touch-hover').length > 0;

        // open submenu on 1st tap
        // open link on second tap
        if ($this_el.hasClass('et-touch-hover') || is_mega_menu_opened) {
          const href = $this_el.find('>a').attr('href');

          if (typeof href !== 'undefined') { // if parent link is not empty then open the link
            window.location = $this_el.find('>a').attr('href');
          }
        } else {
          const $opened_menu          = $(event.target);
          const $already_opened_menus = $opened_menu.closest('.menu-item').siblings('.et-touch-hover');

          // close the menu before opening new one
          if ($opened_menu.closest('.et-touch-hover').length < 1) {
            window.et_pb_toggle_nav_menu($('.et-hover'), 'close', 0);
          }

          $this_el.addClass('et-touch-hover');

          if ($already_opened_menus.length > 0) {
            const $submenus_in_already_opened = $already_opened_menus.find('.et-touch-hover');

            // close already opened submenus to avoid overlaps
            window.et_pb_toggle_nav_menu($already_opened_menus, 'close');
            window.et_pb_toggle_nav_menu($submenus_in_already_opened, 'close');
          }

          // open new submenu
          window.et_pb_toggle_nav_menu($this_el, 'open');
        }

        event.preventDefault();
        event.stopPropagation();
      });

      $et_menu.find('li.mega-menu').each(function() {
        const $li_mega_menu           = $(this);
        const $li_mega_menu_item      = $li_mega_menu.children('ul').children('li');
        const li_mega_menu_item_count = $li_mega_menu_item.length;

        if (li_mega_menu_item_count < 4) {
          $li_mega_menu.addClass(`mega-menu-parent mega-menu-parent-${li_mega_menu_item_count}`);
        }
      });

      // mark the menu as ready
      $et_menu.data('et-is-menu-ready', 'ready');
    });
  };

  window.et_pb_toggle_nav_menu = function($element, state, delay) {
    if ('open' === state) {
      if (! $element.closest('li.mega-menu').length || $element.hasClass('mega-menu')) {
        $element.addClass('et-show-dropdown');
        $element.removeClass('et-hover').addClass('et-hover');
      }
    } else {
      const closeDelay = typeof delay !== 'undefined' ? delay : 200;
      $element.removeClass('et-show-dropdown');
      $element.removeClass('et-touch-hover');

      setTimeout(() => {
        if (! $element.hasClass('et-show-dropdown')) {
          $element.removeClass('et-hover');
        }
      }, closeDelay);
    }
  };

  window.et_pb_apply_sticky_image_effect = function($sticky_image_el) {
    const $row                = $sticky_image_el.closest('.et_pb_row');
    const $section            = $row.closest('.et_pb_section');
    const $column             = $sticky_image_el.closest('.et_pb_column');
    const sticky_class        = 'et_pb_section_sticky';
    const sticky_mobile_class = 'et_pb_section_sticky_mobile';
    const $lastRowInSection   = $section.children('.et_pb_row').last();
    const $lastColumnInRow    = $row.children('.et_pb_column').last();
    const $lastModuleInColumn = $column.children('.et_pb_module').last();

    // If it is not in the last row, continue
    if (! $row.is($lastRowInSection)) {
      return true;
    }

    $lastRowInSection.addClass('et-last-child');

    // Make sure sticky image is the last element in the column
    if (! $sticky_image_el.is($lastModuleInColumn)) {
      return true;
    }

    // If it is in the last row, find the parent section and attach new class to it
    if (! $section.hasClass(sticky_class)) {
      $section.addClass(sticky_class);
    }

    $column.addClass('et_pb_row_sticky');

    if (! $section.hasClass(sticky_mobile_class) && $column.is($lastColumnInRow)) {
      $section.addClass(sticky_mobile_class);
    }
  };

  /**
   * Inject a <li> element in the middle of a menu for the purposes of the menu module's
   * inline centered logo style.
   *
   * @since 4.0
   *
   * @param {object} menu
   *
   * @returns {object|null}
   */
  window.et_pb_menu_inject_inline_centered_logo = function(menu) {
    const $listItems = $(menu).find('nav > ul > li');
    const index      = Math.round($listItems.length / 2);
    const li         = window.et_pb_menu_inject_item(menu, index, true);

    if (li) {
      $(li).addClass('et_pb_menu__logo-slot');
    }

    return li;
  };

  /**
   * Inject a <li> element at the start of a menu for the purposes of the menu module's
   * additional icons.
   *
   * @since 4.0
   *
   * @param {object} menu
   * @param {number} index
   * @param {boolean} fromTheBeginning
   *
   * @returns {object|null}
   */
  window.et_pb_menu_inject_item = function(menu, index, fromTheBeginning) {
    fromTheBeginning = undefined === fromTheBeginning ? true : fromTheBeginning;
    index            = Math.max(index, 0);
    const $list      = $(menu).find('nav > ul').first();

    if (0 === $list.length) {
      return null;
    }

    const $listItems = $list.find('> li');
    const $li        = $('<li></li>');

    if (0 === $listItems.length) {
      $list.append($li);
    } else {
      let action   = fromTheBeginning ? 'before' : 'after';
      let $sibling = fromTheBeginning
        ? $listItems.eq(index)
        : $listItems.eq(($listItems.length - 1) - index);

      if (0 === $sibling.length) {
        action   = fromTheBeginning ? 'after' : 'before';
        $sibling = fromTheBeginning ? $listItems.last() : $listItems.first();
      }

      $sibling[action]($li);
    }

    return $li.get(0);
  };

  /**
   * Reposition menu module dropdowns.
   * This is necessary due to mega menus relying on an upper wrapper's width but
   * still needing to be position relative to their parent li.
   *
   * @since 4.0
   *
   * @returns {void}
   */
  window.et_pb_reposition_menu_module_dropdowns = et_pb_debounce(menus => {
    const $menus = menus ? $(menus) : $('.et_pb_menu, .et_pb_fullwidth_menu');

    $menus.each(function() {
      const $row = $(this).find('.et_pb_row').first();

      if (0 === $row.length) {
        return true; // = continue.
      }

      const offset      = $row.offset().top;
      const moduleClass = $(this).attr('class').replace(/^.*?(et_pb(?:_fullwidth)?_menu_\d+[^\s]*).*$/i, '$1');
      const isUpwards   = $(this).find('.et_pb_menu__menu ul').first().hasClass('upwards');
      const selector    = '.et_pb_menu__menu > nav > ul > li.mega-menu.menu-item-has-children';
      let css           = '';

      $(this).find(selector).each(function() {
        const $li      = $(this);
        const liId     = $li.attr('class').replace(/^.*?(menu-item-\d+).*$/i, '$1');
        const selector = `.${moduleClass} li.${liId} > .sub-menu`;

        if (isUpwards) {
          // Offset by 1px to ensure smooth mouse hover.
          var linkOffset = Math.floor(offset + $row.outerHeight() - $li.offset().top) - 1;

          css += `${selector}{ bottom: ${linkOffset.toString()}px !important; }`;
        } else {
          // Offset by 1px to ensure smooth mouse hover.
          var linkOffset = Math.floor($li.offset().top + $li.outerHeight() - offset) - 1;

          css += `${selector}{ top: ${linkOffset.toString()}px !important; }`;
        }
      });

      let $style = $(`style.et-menu-style-${moduleClass}`).first();

      if (0 === $style.length) {
        $style = $('<style></style>');
        $style.addClass('et-menu-style');
        $style.addClass(`et-menu-style-${moduleClass}`);
        $style.appendTo($('head'));
      }

      const oldCss = $style.html();

      if (css !== oldCss) {
        $style.html(css);
      }
    });
  }, 200);
})(jQuery);
