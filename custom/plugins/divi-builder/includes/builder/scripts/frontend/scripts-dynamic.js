// External dependencies
import get from 'lodash/get';
import set from 'lodash/set';

// Internal dependencies
import {
  isBuilder,
  isDiviTheme,
  isExtraTheme,
} from '../utils/utils';

/*! ET frontend-builder-scripts.js */
(function($) {
  const isBlockLayoutPreview     = 'undefined' !== typeof window.ETBlockLayoutModulesScript && $('body').hasClass('et-block-layout-preview');
  const top_window               = isBuilder || isBlockLayoutPreview ? ET_Builder.Frames.top : window;
  const $et_window               = $(window);
  const $fullscreenSectionWindow = isBlockLayoutPreview ? $(top_window) : $(window);
  const isTB                     = $('body').hasClass('et-tb');
  const isBFB                    = $('body').hasClass('et-bfb');
  const isVB                     = isBuilder && ! isBFB;

  const isInsideVB = function($node) {
    return $node.closest('#et-fb-app').length > 0;
  };

  window.et_load_event_fired             = false;
  window.et_is_transparent_nav           = $('body').hasClass('et_transparent_nav');
  window.et_is_vertical_nav              = $('body').hasClass('et_vertical_nav');
  window.et_is_fixed_nav                 = $('body').hasClass('et_fixed_nav');
  window.et_force_width_container_change = false;

  jQuery.fn.reverse = [].reverse;

  jQuery.fn.closest_descendent = function(selector) {
    let $found;
    let $current_children = this.children();

    while ($current_children.length) {
      $found = $current_children.filter(selector);
      if ($found.length) {
        break;
      }
      $current_children = $current_children.children();
    }

    return $found;
  };

  $(window).on('et_pb_init_modules', function () {
    $(() => {
      /**
       * Provide event listener for plugins to hook up to.
       */
      $(window).trigger('et_pb_before_init_modules');

      const $et_pb_slider                                 = $('.et_pb_slider');
      const $et_pb_map                                    = $('.et_pb_map_container');
      const $et_pb_parallax                               = $('.et_parallax_bg');
      const $et_pb_background_layout_hoverable            = $('[data-background-layout][data-background-layout-hover]');
      const et_is_mobile_device                           = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/) !== null || 'standalone' in window.navigator && ! window.navigator.standalone;
      const et_is_ipad                                    = navigator.userAgent.match(/iPad/);
      const et_is_ie9                                     = navigator.userAgent.match(/MSIE 9.0/) !== null;
      const et_all_rows                                   = $('.et_pb_row');
      const $et_container                                 = window.et_pb_custom && ! window.et_pb_custom.is_builder_plugin_used ? $('body') : et_all_rows;
      let et_container_width                              = $et_container.width();
      const et_hide_nav                                   = $('body').hasClass('et_hide_nav');
      const $top_header                                   = $('#top-header');
      const $et_main_content_first_row                    = $('#main-content .container:first-child');
      const $et_sticky_image                              = $('.et_pb_image_sticky');
      const $et_pb_counter_amount                         = $('.et_pb_counter_amount');
      const $et_menu_selector                             = window.et_pb_custom && window.et_pb_custom.is_divi_theme_used ? $('ul.nav') : $('.et_pb_fullwidth_menu ul.nav');
      const et_pb_ab_bounce_rate                          = window.et_pb_custom && window.et_pb_custom.ab_bounce_rate * 1000;
      const et_pb_ab_logged_status                        = {};
      let et_animation_breakpoint                         = '';
      const recaptchaApi                                  = get(window, 'etCore.api.spam.recaptcha');

      $.each(et_pb_custom.ab_tests, (index, test) => {
        et_pb_ab_logged_status[test.post_id] = {
          read_page: false,
          read_goal: false,
          view_goal: false,
          click_goal: false,
          con_goal: false,
          con_short: false,
        };
      });

      const grid_containers       = $('.et_pb_grid_item').parent().get();
      const $hover_gutter_modules = $('.et_pb_gutter_hover');

      const $et_top_menu                   = $et_menu_selector;

      // log the conversion if visitor is on Thank You page and comes from the Shop module which is the Goal
      if ($('.et_pb_ab_shop_conversion').length && typeof et_pb_get_cookie_value('et_pb_ab_shop_log') !== 'undefined' && '' !== et_pb_get_cookie_value('et_pb_ab_shop_log')) {
        const shop_log_data = et_pb_get_cookie_value('et_pb_ab_shop_log').split('_');
        const page_id       = shop_log_data[0];
        const subject_id    = shop_log_data[1];
        const test_id       = shop_log_data[2];

        et_pb_ab_update_stats('con_goal', page_id, subject_id, test_id);

        // remove the cookie after conversion is logged
        et_pb_set_cookie(0, 'et_pb_ab_shop_log=true');
      }

      // log the conversion if visitor is on page with tracking shortcode
      if ($('.et_pb_ab_split_track').length) {
        $('.et_pb_ab_split_track').each(function() {
          const tracking_test = $(this).data('test_id');
          const cookies_name  = `et_pb_ab_shortcode_track_${tracking_test}`;

          if (typeof et_pb_get_cookie_value(cookies_name) !== 'undefined' && '' !== et_pb_get_cookie_value(cookies_name)) {
            const track_data = et_pb_get_cookie_value(cookies_name).split('_');
            const page_id    = track_data[0];
            const subject_id = track_data[1];
            const test_id    = track_data[2];

            et_pb_ab_update_stats('con_short', page_id, subject_id, test_id);

            // remove the cookie after conversion is logged
            et_pb_set_cookie(0, `${cookies_name}=true`);
          }
        });
      }

      // Handle gutter hover options
      if ($hover_gutter_modules.length > 0) {
        $hover_gutter_modules.each(function() {
          const $thisEl        = $(this);
          const originalGutter = $thisEl.data('original_gutter');
          const hoverGutter    = $thisEl.data('hover_gutter');

          $thisEl.on('mouseenter', () => {
            $thisEl.removeClass(`et_pb_gutters${originalGutter}`);
            $thisEl.addClass(`et_pb_gutters${hoverGutter}`);
          }).on('mouseleave', () => {
            $thisEl.removeClass(`et_pb_gutters${hoverGutter}`);
            $thisEl.addClass(`et_pb_gutters${originalGutter}`);
          });
        });
      }

      // init AB Testing if enabled
      if (window.et_pb_custom && window.et_pb_custom.is_ab_testing_active) {
        $.each(et_pb_custom.ab_tests, (index, test) => {
          et_pb_init_ab_test(test);
        });
      }

      if (et_all_rows.length) {
        et_all_rows.each(function() {
          const $this_row = $(this);
          let row_class   = '';

          row_class = et_get_column_types($this_row.find('>.et_pb_column'));

          if ('' !== row_class) {
            $this_row.addClass(row_class);
          }

          if ($this_row.find('.et_pb_row_inner').length) {
            $this_row.find('.et_pb_row_inner').each(function() {
              const $this_row_inner = $(this);
              row_class             = et_get_column_types($this_row_inner.find('.et_pb_column'));

              if ('' !== row_class) {
                $this_row_inner.addClass(row_class);
              }
            });
          }

          // Fix z-index for menu modules
          const zIndexIncreaseMax    = $this_row.parents('.et_pb_section.section_has_divider').length ? 6 : 3;
          const zIndexShouldIncrease = isNaN($this_row.css('z-index')) || $this_row.css('z-index') < zIndexIncreaseMax;

          if ($this_row.find('.et_pb_module.et_pb_menu').length && zIndexShouldIncrease) {
            $this_row.css('z-index', zIndexIncreaseMax);
          }
        });
      }

      function et_get_column_types($columns) {
        let row_class = '';

        if ($columns.length) {
          $columns.each(function() {
            const $column             = $(this);
            const column_type         = $column.attr('class').split('et_pb_column_')[1];
            const column_type_clean   = typeof column_type !== 'undefined' ? column_type.split(' ', 1)[0] : '4_4';
            const column_type_updated = column_type_clean.replace('_', '-').trim();

            row_class += `_${column_type_updated}`;
          });

          if ((row_class.indexOf('1-4') !== - 1)
					|| (row_class.indexOf('1-5_1-5') !== - 1)
					|| (row_class.indexOf('1-6_1-6') !== - 1)) {
            switch (row_class) {
              case '_1-4_1-4_1-4_1-4':
                row_class = 'et_pb_row_4col';
                break;
              case '_1-5_1-5_1-5_1-5_1-5':
                row_class = 'et_pb_row_5col';
                break;
              case '_1-6_1-6_1-6_1-6_1-6_1-6':
                row_class = 'et_pb_row_6col';
                break;
              default:
                row_class = `et_pb_row${row_class}`;
            }
          } else {
            row_class = '';
          }
        }
        return row_class;
      }

      window.et_pb_init_nav_menu($et_top_menu);

      $et_sticky_image.each(function() {
        window.et_pb_apply_sticky_image_effect($(this));
      });

      if (et_is_mobile_device) {
        $('.et_pb_section_video_bg').each(function() {
          const $this_el = $(this);

          $this_el.closest('.et_pb_preload').removeClass('et_pb_preload');

          // Only remove when it has opened class.
          if ($this_el.hasClass('opened')) {
            $this_el.remove();
          }
        });

        $('body').addClass('et_mobile_device');

        if (! et_is_ipad) {
          $('body').addClass('et_mobile_device_not_ipad');
        }
      }

      if (et_is_ie9) {
        $('body').addClass('et_ie9');
      }

      if (grid_containers.length || isBuilder) {
        $(grid_containers).each(function() {
          window.et_pb_set_responsive_grid($(this), '.et_pb_grid_item');
        });
      }

      if ($et_pb_counter_amount.length) {
        $et_pb_counter_amount.each(function() {
          window.et_bar_counters_init($(this));
        });
      } /* $et_pb_counter_amount.length */

      $('.et_pb_shop, .et_pb_wc_upsells, .et_pb_wc_related_products').each(function() {
        let $this_el    = $(this);
        let icon        = $this_el.data('icon') || '';
        let icon_tablet = $this_el.data('icon-tablet') || '';
        let icon_phone  = $this_el.data('icon-phone') || '';
        let icon_sticky = $this_el.data('icon-sticky') || '';
        let $overlay    = $this_el.find('.et_overlay');

        // Handle Extra theme.
        if (! $overlay.length && $this_el.hasClass('et_pb_wc_related_products')) {
          $overlay    = $this_el.find('.et_pb_extra_overlay');
          $this_el    = $overlay.closest('.et_pb_module_inner').parent();
          icon        = $this_el.attr('data-icon') || '';
          icon_tablet = $this_el.attr('data-icon-tablet') || '';
          icon_phone  = $this_el.attr('data-icon-phone') || '';
          icon_sticky = $this_el.attr('data-icon-phone') || '';
        }

        // Set data icon and inline icon class.
        if (icon !== '') {
          $overlay.attr('data-icon', icon).addClass('et_pb_inline_icon');
        }

        if (icon_tablet !== '') {
          $overlay.attr('data-icon-tablet', icon_tablet).addClass('et_pb_inline_icon_tablet');
        }

        if (icon_phone !== '') {
          $overlay.attr('data-icon-phone', icon_phone).addClass('et_pb_inline_icon_phone');
        }

        if (icon_sticky !== '') {
          $overlay.attr('data-icon-sticky', icon_sticky).addClass('et_pb_inline_icon_sticky');
        }

        if ($this_el.hasClass('et_pb_shop')) {
          const $shopItems = $this_el.find('li.product');
          const shop_index = $this_el.attr('data-shortcode_index');
          const itemClass  = `et_pb_shop_item_${shop_index}`;

          if ($shopItems.length > 0) {
            $shopItems.each((idx, $item) => {
              $($item).addClass(`${itemClass}_${idx}`);
            });
          }
        }
      });

      $et_pb_background_layout_hoverable.each(function() {
        let $this_el                   = $(this);
        const background_layout        = $this_el.data('background-layout');
        const background_layout_hover  = $this_el.data('background-layout-hover');
        const background_layout_tablet = $this_el.data('background-layout-tablet');
        const background_layout_phone  = $this_el.data('background-layout-phone');

        let $this_el_item; let
          $this_el_parent;

        // Switch the target element for some modules.
        if ($this_el.hasClass('et_pb_button_module_wrapper')) {
          // Button, change the target to main button block.
          $this_el = $this_el.find('> .et_pb_button');
        } else if ($this_el.hasClass('et_pb_gallery')) {
          // Gallery, add gallery item as target element.
          $this_el_item = $this_el.find('.et_pb_gallery_item');
          $this_el      = $this_el.add($this_el_item);
        } else if ($this_el.hasClass('et_pb_post_slider')) {
          // Post Slider, add slide item as target element.
          $this_el_item = $this_el.find('.et_pb_slide');
          $this_el      = $this_el.add($this_el_item);
        } else if ($this_el.hasClass('et_pb_slide')) {
          // Slider, add slider as target element.
          $this_el_parent = $this_el.closest('.et_pb_slider');
          $this_el        = $this_el.add($this_el_parent);
        }

        let layout_class_list      = 'et_pb_bg_layout_light et_pb_bg_layout_dark et_pb_text_color_dark';
        let layout_class           = `et_pb_bg_layout_${background_layout}`;
        let layout_class_hover     = `et_pb_bg_layout_${background_layout_hover}`;
        let text_color_class       = 'light' === background_layout ? 'et_pb_text_color_dark' : '';
        let text_color_class_hover = 'light' === background_layout_hover ? 'et_pb_text_color_dark' : '';

        // Only includes tablet class if it's needed.
        if (background_layout_tablet) {
          layout_class_list      += ' et_pb_bg_layout_light_tablet et_pb_bg_layout_dark_tablet et_pb_text_color_dark_tablet';
          layout_class           += ` et_pb_bg_layout_${background_layout_tablet}_tablet`;
          layout_class_hover     += ` et_pb_bg_layout_${background_layout_hover}_tablet`;
          text_color_class       += 'light' === background_layout_tablet ? ' et_pb_text_color_dark_tablet' : '';
          text_color_class_hover += 'light' === background_layout_hover ? ' et_pb_text_color_dark_tablet' : '';
        }

        // Only includes phone class if it's needed.
        if (background_layout_phone) {
          layout_class_list      += ' et_pb_bg_layout_light_phone et_pb_bg_layout_dark_phone et_pb_text_color_dark_phone';
          layout_class           += ` et_pb_bg_layout_${background_layout_phone}_phone`;
          layout_class_hover     += ` et_pb_bg_layout_${background_layout_hover}_phone`;
          text_color_class       += 'light' === background_layout_phone ? ' et_pb_text_color_dark_phone' : '';
          text_color_class_hover += 'light' === background_layout_hover ? ' et_pb_text_color_dark_phone' : '';
        }

        $this_el.on('mouseenter', () => {
          $this_el.removeClass(layout_class_list);

          $this_el.addClass(layout_class_hover);

          if ($this_el.hasClass('et_pb_audio_module') && '' !== text_color_class_hover) {
            $this_el.addClass(text_color_class_hover);
          }
        });

        $this_el.on('mouseleave', () => {
          $this_el.removeClass(layout_class_list);

          $this_el.addClass(layout_class);

          if ($this_el.hasClass('et_pb_audio_module') && '' !== text_color_class) {
            $this_el.addClass(text_color_class);
          }
        });
      });

      window.et_reinit_waypoint_modules = et_pb_debounce(() => {
        const $et_pb_circle_counter = $('.et_pb_circle_counter');
        const $et_pb_number_counter = $('.et_pb_number_counter');
        const $et_pb_video_background = $('.et_pb_section_video_bg video');

        // if waypoint is available and we are not ignoring them.
        if ($.fn.waypoint && window.et_pb_custom && 'yes'!==window.et_pb_custom.ignore_waypoints && !isBuilder) {
          if ('undefined'!== typeof et_process_animation_data) {
            window.et_process_animation_data(true);
          }

          // get all of our waypoint things.
          const modules = $('.et-waypoint');
          modules.each(function () {
            window.et_waypoint($(this), {
              offset: et_get_offset($(this), '100%'),
              handler() {
                // what actually triggers the animation.
                $(this.element).addClass('et-animated');
              },
            }, 2);
          });

          // Set waypoint for circle counter module.
          if ($et_pb_circle_counter.length) {
            // iterate over each.
            $et_pb_circle_counter.each(function () {
              const $this_counter = $(this).find('.et_pb_circle_counter_inner');
              if (!$this_counter.is(':visible') || et_has_animation_data($this_counter)) {
                return;
              }

              window.et_waypoint($this_counter, {
                offset: window.et_get_offset($(this), '100%'),
                handler() {
                  if ($this_counter.data('PieChartHasLoaded') || 'undefined'=== typeof $this_counter.data('easyPieChart')) {
                    return;
                  }

                  // No need to update animated circle counter as soon as it hits
                  // bottom of the page in layout block preview page since layout
                  // block preview page is being rendered in 100% height inside
                  // Block Editor
                  if (isBlockLayoutPreview) {
                    return;
                  }

                  $this_counter.data('easyPieChart').update($this_counter.data('number-value'));

                  $this_counter.data('PieChartHasLoaded', true);
                },
              }, 2);
            });
          }

          // Set waypoint for number counter module.
          if ($et_pb_number_counter.length) {
            $et_pb_number_counter.each(function () {
              const $this_counter = $(this);

              if (et_has_animation_data($this_counter)) {
                return;
              }

              window.et_waypoint($this_counter, {
                offset: et_get_offset($(this), '100%'),
                handler() {
                  $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
                },
              });
            });
          }
        } else {
          // if no waypoints supported then apply all the animations right away
          if ('undefined'!== typeof et_process_animation_data) {
            window.et_process_animation_data(false);
          }
          const animated_class = isBuilder ? 'et-animated--vb':'et-animated';

          $('.et-waypoint').addClass(animated_class);

          // While in the builder, trigger all animations instantly as otherwise
          // TB layouts that are displayed but are not the currently edited post
          // will have their animated modules invisible due to .et-waypoint.
          $('.et-waypoint').each(function () {
            window.et_animate_element($(this));
          });

          if ($et_pb_circle_counter.length) {
            $et_pb_circle_counter.each(function () {
              const $this_counter = $(this).find('.et_pb_circle_counter_inner');

              if (!$this_counter.is(':visible')) {
                return;
              }

              if ($this_counter.data('PieChartHasLoaded') || 'undefined'=== typeof $this_counter.data('easyPieChart')) {
                return;
              }

              $this_counter.data('easyPieChart').update($this_counter.data('number-value'));

              $this_counter.data('PieChartHasLoaded', true);
            });
          }

          if ($et_pb_number_counter.length) {
            $et_pb_number_counter.each(function () {
              const $this_counter = $(this);

              $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
            });
          }
        } // End checking of waypoints.

        if ($et_pb_video_background.length) {
          $et_pb_video_background.each(function () {
            const $this_video_background = $(this);

            et_pb_video_background_init($this_video_background, this);
          });
        } // End of et_pb_debounce().
      }, 100);

      /**
       * Get current active device based on window width size.
       *
       * @returns {string} View mode.
       */
       window.et_pb_get_current_window_mode = function() {
        const window_width = $et_window.width();
        let current_mode   = 'desktop';
        if (window_width <= 980 && window_width > 479) {
          current_mode = 'tablet';
        } else if (window_width <= 479) {
          current_mode = 'phone';
        }

        return current_mode;
      }

      function et_toggle_animation_callback(initial_toggle_state, $module, $section) {
        if ('closed' === initial_toggle_state) {
          $module.removeClass('et_pb_toggle_close').addClass('et_pb_toggle_open');
        } else {
          $module.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');
        }

        if ($section.hasClass('et_pb_section_parallax') && ! $section.children().hasClass('et_pb_parallax_css')) {
          et_parallax_set_height.bind($section)();
        }
        window.et_reinit_waypoint_modules();
      }

      // Disable hover event when user opening toggle on mobile.
      $('.et_pb_accordion').on('touchstart', e => {
        // Ensure to disable only on mobile.
        if ('desktop' !== window.et_pb_get_current_window_mode()) {
          const $target = $(e.target);

          // Only disable when user click to open the toggle.
          if ($target.hasClass('et_pb_toggle_title') || $target.hasClass('et_fb_toggle_overlay')) {
            e.preventDefault();

            // Trigger click event to open the toggle.
            $target.trigger('click');
          }
        }
      });

      $('body').on('click', '.et_pb_toggle_title, .et_fb_toggle_overlay', function() {
        const $this_heading         = $(this);
        const $module               = $this_heading.closest('.et_pb_toggle');
        const $section              = $module.parents('.et_pb_section');
        const $content              = $module.find('.et_pb_toggle_content');
        const $accordion            = $module.closest('.et_pb_accordion');
        const is_accordion          = $accordion.length;
        const is_accordion_toggling = $accordion.hasClass('et_pb_accordion_toggling');
        const window_offset_top     = $(window).scrollTop();
        let fixed_header_height     = 0;
        const initial_toggle_state  = $module.hasClass('et_pb_toggle_close') ? 'closed' : 'opened';
        let $accordion_active_toggle;
        let module_offset;

        if (is_accordion) {
          if ($module.hasClass('et_pb_toggle_open') || is_accordion_toggling) {
            return false;
          }

          $accordion.addClass('et_pb_accordion_toggling');
          $accordion_active_toggle = $module.siblings('.et_pb_toggle_open');
        }

        if ($content.is(':animated')) {
          return;
        }

        $content.slideToggle(700, () => {
          et_toggle_animation_callback(initial_toggle_state, $module, $section);
        });

        if (is_accordion) {
          const accordionCompleteTogglingCallback = function() {
            $accordion_active_toggle.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');
            $accordion.removeClass('et_pb_accordion_toggling');

            module_offset = $module.offset();

            // Calculate height of fixed nav
            if ($('#wpadminbar').length) {
              fixed_header_height += $('#wpadminbar').height();
            }

            if ($('#top-header').length) {
              fixed_header_height += $('#top-header').height();
            }

            if ($('#main-header').length && ! window.et_is_vertical_nav) {
              fixed_header_height += $('#main-header').height();
            }

            // Compare accordion offset against window's offset and adjust accordingly
            if ((window_offset_top + fixed_header_height) > module_offset.top) {
              $('html, body').animate({
                scrollTop: (module_offset.top - fixed_header_height - 50),
              });
            }
          };

          // slideToggle collapsing mechanism (display:block, sliding, then display: none)
          // doesn't work if the DOM is not "visible" (no height / width at all) which can
          // happen if the accordion item has no content on desktop mode but has in hover
          if ($accordion_active_toggle.find('.et_pb_toggle_content').is(':visible')) {
            $accordion_active_toggle.find('.et_pb_toggle_content').slideToggle(700, accordionCompleteTogglingCallback);
          } else {
            $accordion_active_toggle.find('.et_pb_toggle_content').hide();
            accordionCompleteTogglingCallback();
          }
        }
      });

      // Email Validation
      // Use the regex defined in the HTML5 spec for input[type=email] validation
      // (see https://www.w3.org/TR/2016/REC-html51-20161101/sec-forms.html#email-state-typeemail)
      const et_email_reg_html5 = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      /**
      * Verifies that an email is valid similar to how WordPress `is_email()` method works.
      *
      * Does not grok i18n domains. Not RFC compliant.
      *
      * @param string email      Email address to verify.
      * @return bool Valid true on success, false on failure.
      */
      var et_is_email = function(email) {
        // Test for the minimum length the email can be.
        if (6 > email.length) {
          return false;
        }

        // Test for an @ character after the first position.
        if (false === php_strpos(email, '@', 1)) {
          return false;
        }

        // Split out the local and domain parts.
        var parts = email.split('@', 2);
        var local = parts[0];
        var domain = parts[1];


        // LOCAL PART
        // Test for invalid characters.
        if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(local)) {
          return false;
        }

        // DOMAIN PART
        // Test for sequences of periods.
        if (/\.{2,}/.test(domain)) {
          return false;
        }

        // Test for leading and trailing periods and whitespace.
        if (php_trim(domain, " \t\n\r\0\x0B.") !== domain) {
          return false;
        }


        // Split the domain into subs.
        var subs = domain.split('.');

        // Assume the domain will have at least two subs.
        if (2 > subs.length) {
          return false;
        }

        // Loop through each sub.
        for (var i in subs) {
          var sub = subs[i];
          // Test for leading and trailing hyphens and whitespace.
          if (php_trim(sub, " \t\n\r\0\x0B-") !== sub) {
            return false;
          }

          // Test for invalid characters
          if (!/^[a-z0-9-]+$/i.test(sub)) {
            return false;
          }
        }

        // Congratulations.
        return true;

        // Analog of PHP function `trim` (https://www.php.net/manual/en/function.trim.php) written in JavaScript
        function php_trim(str, charlist) {
          var whitespace = [
            ' ',
            '\n',
            '\r',
            '\t',
            '\f',
            '\x0b',
            '\xa0',
            '\u2000',
            '\u2001',
            '\u2002',
            '\u2003',
            '\u2004',
            '\u2005',
            '\u2006',
            '\u2007',
            '\u2008',
            '\u2009',
            '\u200a',
            '\u200b',
            '\u2028',
            '\u2029',
            '\u3000'
          ].join('');
          var l = 0;
          var i = 0;
          str += '';

          if (charlist) {
            whitespace = (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
          }

          l = str.length
          for (i = 0; i < l; i++) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
              str = str.substring(i);
              break
            }
          }

          l = str.length
          for (i = l - 1; i >= 0; i--) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
              str = str.substring(0, i + 1);
              break
            }
          }

          return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        }

        // Analog of PHP function `strpos` written in JavaScript
        function php_strpos(haystack, needle, offset) {
          var i = (haystack+'').indexOf(needle, (offset || 0));
          return i === -1 ? false : i;
        }
      }

      const $et_contact_container = $('.et_pb_contact_form_container');
      const is_recaptcha_enabled  = ! isBuilder && $('.et_pb_module.et_pb_recaptcha_enabled').length > 0;
      const $recaptchaScripts     = document.body.innerHTML.match(/<script [^>]*src="[^"].*google.com\/recaptcha\/api.js\?render.*"[^>]*>([\s\S]*?)<\/script>/gmi);
      const $diviRecaptchaScript  = $('#et-recaptcha-v3-js');
      const nonDiviRecaptchaFound = $recaptchaScripts && $recaptchaScripts.length > $diviRecaptchaScript.length;

      // Make sure recaptcha badge is visible if recaptcha from 3rd party plugin found or we have module with spam protection on page
      if (! isBuilder && (nonDiviRecaptchaFound || (is_recaptcha_enabled && recaptchaApi && recaptchaApi.isEnabled()))) {
        $('body').addClass('et_pb_recaptcha_enabled');
      }

      if ($et_contact_container.length) {
        $et_contact_container.each(function() {
          const $this_contact_container = $(this);
          const $et_contact_form        = $this_contact_container.find('form');
          const redirect_url            = typeof $this_contact_container.data('redirect_url') !== 'undefined' ? $this_contact_container.data('redirect_url') : '';

          $et_contact_form.find('input[type=checkbox]').on('change', function() {
            const $checkbox       = $(this);
            const $checkbox_field = $checkbox.siblings('input[type=text]').first();
            const is_checked      = $checkbox.prop('checked');

            $checkbox_field.val(is_checked ? $checkbox_field.data('checked') : $checkbox_field.data('unchecked'));
          });

          $et_contact_form.on('submit', function(event) {
            event.preventDefault();

            const $this_contact_form = $(this);

            if (true === $this_contact_form.data('submitted')) {
              // Previously submitted, do not submit again
              return;
            }

            const $this_inputs        = $this_contact_form.find('input[type=text], .et_pb_checkbox_handle, .et_pb_contact_field[data-type="radio"], textarea, select');
            const $captcha_field      = $this_contact_form.find('.et_pb_contact_captcha');
            const $et_contact_message = $this_contact_container.find('.et-pb-contact-message');
            const form_unique_id      = typeof $this_contact_container.data('form_unique_num') !== 'undefined' ? $this_contact_container.data('form_unique_num') : 0;
            let this_et_contact_error = false;
            let et_message            = '';
            let et_fields_message     = '';
            const inputs_list         = [];
            const hidden_fields       = [];
            const tokenDeferred       = $.Deferred();

            // Only process through recaptcha if the module has spam protection enabled and the recaptcha core api exists.
            if (recaptchaApi && $this_contact_container.hasClass('et_pb_recaptcha_enabled')) {
              recaptchaApi.interaction(`Divi/Module/ContactForm/${form_unique_id}`).then(token => {
                tokenDeferred.resolve(token);
              });
            } else {
              tokenDeferred.resolve('');
            }

            $.when(tokenDeferred).done(token => {
              et_message = '<ul>';

              $this_inputs.removeClass('et_contact_error');

              $this_inputs.each(function() {
                let $this_el      = $(this);
                let $this_wrapper = false;

                if ('checkbox' === $this_el.data('field_type')) {
                  $this_wrapper = $this_el.parents('.et_pb_contact_field');
                  $this_wrapper.removeClass('et_contact_error');
                }

                if ('radio' === $this_el.data('type')) {
                  $this_el      = $this_el.find('input[type="radio"]');
                  $this_wrapper = $this_el.parents('.et_pb_contact_field');
                }

                let this_id       = $this_el.attr('id');
                let this_val      = $this_el.val();
                let this_label    = $this_el.siblings('label').first().text();
                let field_type    = typeof $this_el.data('field_type') !== 'undefined' ? $this_el.data('field_type') : 'text';
                let required_mark = typeof $this_el.data('required_mark') !== 'undefined' ? $this_el.data('required_mark') : 'not_required';
                let original_id   = typeof $this_el.data('original_id') !== 'undefined' ? $this_el.data('original_id') : '';
                let unchecked     = false;
                let default_value;

                // radio field properties adjustment
                if ('radio' === field_type) {
                  if (0 !== $this_wrapper.find('input[type="radio"]').length) {
                    field_type = 'radio';

                    const $firstRadio = $this_wrapper.find('input[type="radio"]').first();

                    required_mark = typeof $firstRadio.data('required_mark') !== 'undefined' ? $firstRadio.data('required_mark') : 'not_required';

                    this_val = '';
                    if ($this_wrapper.find('input[type="radio"]:checked')) {
                      this_val = $this_wrapper.find('input[type="radio"]:checked').val();
                    }
                  }

                  this_label  = $this_wrapper.find('.et_pb_contact_form_label').text();
                  this_id     = $this_wrapper.find('input[type="radio"]').first().attr('name');
                  original_id = $this_wrapper.attr('data-id');

                  if (0 === $this_wrapper.find('input[type="radio"]:checked').length) {
                    unchecked = true;
                  }
                }

                // radio field properties adjustment
                if ('checkbox' === field_type) {
                  this_val = '';

                  if (0 !== $this_wrapper.find('input[type="checkbox"]').length) {
                    field_type = 'checkbox';

                    const $checkboxHandle = $this_wrapper.find('.et_pb_checkbox_handle');

                    required_mark = typeof $checkboxHandle.data('required_mark') !== 'undefined' ? $checkboxHandle.data('required_mark') : 'not_required';

                    if ($this_wrapper.find('input[type="checked"]:checked')) {
                      this_val = [];
                      $this_wrapper.find('input[type="checkbox"]:checked').each(function() {
                        this_val.push($(this).val());
                      });

                      this_val = this_val.join(', ');
                    }
                  }

                  $this_wrapper.find('.et_pb_checkbox_handle').val(this_val);

                  this_label = $this_wrapper.find('.et_pb_contact_form_label').text();

                  // In case user did not add field name, try to use label from the checkbox value
                  if (0 === this_label.trim().length) {
                    const $checkboxes = $this_wrapper.find('.et_pb_contact_field_checkbox input[type="checkbox"]');
                    if ($checkboxes.length > 0) {
                      const _checkbox_labels = [];
                      $checkboxes.each(function() {
                        _checkbox_labels.push($(this).val());
                      });
                      this_label = _checkbox_labels.join(', ');

                      // In case user uses an empty checkbox, use the field type for error message instead of default message about captcha
                      if (0 === this_label.trim().length) {
                        this_label = et_pb_custom.wrong_checkbox;
                      }
                    }
                  }
                  this_id     = $this_wrapper.find('.et_pb_checkbox_handle').attr('name');
                  original_id = $this_wrapper.attr('data-id');

                  if (0 === $this_wrapper.find('input[type="checkbox"]:checked').length) {
                    unchecked = true;
                  }
                }

                // Escape double quotes in label
                this_label = this_label.replace(/"/g, '&quot;');


                // Store the labels of the conditionally hidden fields so that they can be
                // removed later if a custom message pattern is enabled
                if (! $this_el.is(':visible') && $this_el.parents('[data-conditional-logic]').length && 'hidden' !== $this_el.attr('type') && 'radio' !== $this_el.attr('type')) {
                  hidden_fields.push(original_id);
                  return;
                }

                if (('hidden' === $this_el.attr('type') || 'radio' === $this_el.attr('type')) && ! $this_el.parents('.et_pb_contact_field').is(':visible')) {
                  hidden_fields.push(original_id);
                  return;
                }

                // add current field data into array of inputs
                if (typeof this_id !== 'undefined') {
                  inputs_list.push({
                    field_id: this_id,
                    original_id,
                    required_mark,
                    field_type,
                    field_label: this_label,
                  });
                }

                // add error message for the field if it is required and empty
                if ('required' === required_mark && ('' === this_val || true === unchecked) && ! $this_el.is('[id^="et_pb_contact_et_number_"]')) {
                  if (false === $this_wrapper) {
                    $this_el.addClass('et_contact_error');
                  } else {
                    $this_wrapper.addClass('et_contact_error');
                  }

                  this_et_contact_error = true;

                  default_value = this_label;

                  if ('' === default_value) {
                    default_value = et_pb_custom.captcha;
                  }

                  et_fields_message += `<li>${default_value}</li>`;
                }

                // add error message if email field is not empty and fails the email validation
                if ('email' === field_type) {
                  // remove trailing/leading spaces and convert email to lowercase
                  const processed_email = this_val.trim().toLowerCase();
                  const is_valid_email  = et_is_email(processed_email);

                  if ('' !== processed_email && this_label !== processed_email && ! is_valid_email) {
                    $this_el.addClass('et_contact_error');
                    this_et_contact_error = true;

                    if (! is_valid_email) {
                      et_message += `<li>${et_pb_custom.invalid}</li>`;
                    }
                  }
                }
              });

              // check the captcha value if required for current form
              if ($captcha_field.length && '' !== $captcha_field.val()) {
                let first_digit  = parseInt($captcha_field.data('first_digit'));
                let second_digit = parseInt($captcha_field.data('second_digit'));

                if (parseInt($captcha_field.val()) !== first_digit + second_digit) {
                  et_message += `<li>${et_pb_custom.wrong_captcha}</li>`;
                  this_et_contact_error = true;

                  // generate new digits for captcha
                  first_digit  = Math.floor((Math.random() * 15) + 1);
                  second_digit = Math.floor((Math.random() * 15) + 1);

                  // set new digits for captcha
                  $captcha_field.data('first_digit', first_digit);
                  $captcha_field.data('second_digit', second_digit);

                  // clear captcha input value
                  $captcha_field.val('');

                  // regenerate captcha on page
                  $this_contact_form.find('.et_pb_contact_captcha_question').empty().append(`${first_digit} + ${second_digit}`);
                }
              }

              if (! this_et_contact_error) {
                // Mark this form as `submitted` to prevent repeated processing.
                $this_contact_form.data('submitted', true);

                const $href     = $this_contact_form.attr('action');
                const form_data = $this_contact_form.serializeArray();

                form_data.push({
                  name: `et_pb_contact_email_fields_${form_unique_id}`,
                  value: JSON.stringify(inputs_list),
                });

                form_data.push({
                  name: 'token',
                  value: token,
                });

                if (hidden_fields.length > 0) {
                  form_data.push({
                    name: `et_pb_contact_email_hidden_fields_${form_unique_id}`,
                    value: JSON.stringify(hidden_fields),
                  });
                }

                $this_contact_container.removeClass('et_animated').removeAttr('style').fadeTo('fast', 0.2, () => {
                  $this_contact_container.load(`${$href} #${$this_contact_container.attr('id')}> *`, form_data, (responseText, textStatus) => {
                    if ('error' === textStatus) {
                      const $message = $(`#${$this_contact_container.attr('id')}`, responseText);

                      if ($message.length > 0) {
                        // The response is an error but we have a form response message so
                        // this is most likely a contact form on a 404 page or similar.
                        // In this case, jQuery will not load the html since it treats
                        // the request as failed so we have to do it manually.
                        $this_contact_container.html($message);
                      }
                    }

                    if (! $(responseText).find('.et_pb_contact_error_text').length) {
                      et_pb_maybe_log_event($this_contact_container, 'con_goal');

                      // redirect if redirect URL is not empty and no errors in contact form
                      if ('' !== redirect_url) {
                        window.location.href = redirect_url;
                      }
                    }

                    $this_contact_container.fadeTo('fast', 1);
                  });
                });
              }

              et_message += '</ul>';

              if ('' !== et_fields_message) {
                if (et_message !== '<ul></ul>') {
                  et_message = `<p class="et_normal_padding">${et_pb_custom.contact_error_message}</p>${et_message}`;
                }

                et_fields_message = `<ul>${et_fields_message}</ul>`;

                et_fields_message = `<p>${et_pb_custom.fill_message}</p>${et_fields_message}`;

                et_message = et_fields_message + et_message;
              }

              if (et_message !== '<ul></ul>') {
                $et_contact_message.html(et_message);

                // If parent of this contact form uses parallax
                if ($this_contact_container.parents('.et_pb_section_parallax').length) {
                  $this_contact_container.parents('.et_pb_section_parallax').each(function() {
                    const $parallax_element = $(this);
                    const $parallax         = $parallax_element.children('.et_parallax_bg');
                    const is_true_parallax  = (! $parallax.hasClass('et_pb_parallax_css'));

                    if (is_true_parallax) {
                      $et_window.trigger('resize');
                    }
                  });
                }
              }
            });
          });
        });
      }

      window.et_pb_play_overlayed_video = function($play_video) {
        const $this        = $play_video;
        const $video_image = $this.closest('.et_pb_video_overlay');
        const $wrapper     = $this.closest('.et_pb_video, .et_main_video_container, .et_pb_video_wrap');
        let $video_iframe  = $wrapper.find('iframe');
        const is_embedded  = $video_iframe.length > 0;
        const is_fb_video  = $wrapper.find('.fb-video').length;
        let video_iframe_src;
        let video_iframe_src_splitted;
        let video_iframe_src_autoplay;

        if (is_embedded) {
          if (is_fb_video && 'undefined' !== typeof $video_iframe[2]) {
            // Facebook uses three http/https/iframe
            $video_iframe = $($video_iframe[2]);
          }

          // Add autoplay parameter to automatically play embedded content when overlay is clicked
          video_iframe_src          = $video_iframe.attr('src');
          video_iframe_src_splitted = video_iframe_src.split('?');

          if (video_iframe_src.indexOf('autoplay=') !== - 1) {
            return;
          }

          if (typeof video_iframe_src_splitted[1] !== 'undefined') {
            video_iframe_src_autoplay = `${video_iframe_src_splitted[0]}?autoplay=1&amp;${video_iframe_src_splitted[1]}`;
          } else {
            video_iframe_src_autoplay = `${video_iframe_src_splitted[0]}?autoplay=1`;
          }

          $video_iframe.attr({
            src: video_iframe_src_autoplay,
          });
        } else {
          $wrapper.find('video').get(0).play();
        }


        $video_image.fadeTo(500, 0, function() {
          const $image = $(this);

          $image.css('display', 'none');
        });
      };

      $('body').on('click', '.et_pb_post .et_pb_video_overlay, .et_pb_video .et_pb_video_overlay, .et_pb_video_wrap .et_pb_video_overlay', function() {
        const $this = $(this);

        et_pb_play_overlayed_video($this);

        return false;
      });

      window.et_pb_resize_section_video_bg = function($video) {
        const $element = typeof $video !== 'undefined' ? $video.closest('.et_pb_section_video_bg') : $('.et_pb_section_video_bg');

        $element.each(function() {
          const $this_el = $(this);

          if (isInsideVB($this_el)) {
            $this_el.removeAttr('data-ratio');
            $this_el.find('video').removeAttr('style');
          }

          const $video    = $this_el.find('video');
          const el_width  = ($video.prop('videoWidth')) || parseInt($video.width());
          const el_height = ($video.prop('videoHeight')) || parseInt($video.height());

          const ratio = el_width / el_height;

          const $video_elements = $this_el.find('.mejs-video, video, object').css('margin', '0px');

          const $container = $this_el.closest('.et_pb_section_video').length
            ? $this_el.closest('.et_pb_section_video')
            : $this_el.closest('.et_pb_slides');

          const body_width = $container.innerWidth();

          const container_height = $container.innerHeight();

          let width; let
            height;

          if ('undefined' === typeof $this_el.attr('data-ratio') && ! isNaN(ratio)) {
            $this_el.attr('data-ratio', ratio);
          }

          if (body_width / container_height < ratio) {
            width  = container_height * ratio;
            height = container_height;
          } else {
            width  = body_width;
            height = body_width / ratio;
          }

          $video_elements.width(width).height(height);

          // need to re-set the values to make it work correctly in Frontend builder
          if (isBuilder) {
            setTimeout(() => {
              $video_elements.width(width).height(height);
            }, 0);
          }
        });
      };

      window.et_pb_center_video = function($video) {
        const $element = typeof $video !== 'undefined' ? $video : $('.et_pb_section_video_bg .mejs-video');

        if (! $element.length) {
          return;
        }

        $element.each(function() {
          const $this_el = $(this);

          et_pb_adjust_video_margin($this_el);

          // need to re-calculate the values in Frontend builder
          if (isInsideVB($this_el)) {
            setTimeout(() => {
              et_pb_adjust_video_margin($this_el);
            }, 0);
          }

          if (typeof $video !== 'undefined') {
            if ($video.closest('.et_pb_slider').length && ! $video.closest('.et_pb_first_video').length) {
              return false;
            }
          }
        });
      };

      window.et_pb_adjust_video_margin = function($el) {
        const $video_width          = $el.width() / 2;
        const $video_width_negative = 0 - $video_width;

        $el.css('margin-left', `${$video_width_negative}px`);
      };

      function et_fix_slider_height($slider) {
        const $this_slider = $slider || $et_pb_slider;

        if (! $this_slider || ! $this_slider.length) {
          return;
        }

        $this_slider.each(function() {
          const $slide_section           = $(this).parent('.et_pb_section');
          const $slides                  = $(this).find('.et_pb_slide');
          const $slide_containers        = $slides.find('.et_pb_container');
          let max_height                 = 0;
          let image_margin               = 0;
          const need_image_margin_top    = $(this).hasClass('et_pb_post_slider_image_top');
          const need_image_margin_bottom = $(this).hasClass('et_pb_post_slider_image_bottom');

          // If this is appears at the first section beneath transparent nav, skip it
          // leave it to et_fix_page_container_position()
          if ($slide_section.is('.et_pb_section_first')) {
            return true;
          }

          $slide_containers.css('height', '');

          // make slides visible to calculate the height correctly
          $slides.addClass('et_pb_temp_slide');

          if ('object' === typeof $(this).data('et_pb_simple_slider')) {
            $(this).data('et_pb_simple_slider').et_fix_slider_content_images();
          }

          $slides.each(function() {
            let height           = parseFloat($(this).innerHeight());
            const $slide_image   = $(this).find('.et_pb_slide_image');
            const adjustedHeight = parseFloat($(this).data('adjustedHeight'));
            const autoTopPadding = isNaN(adjustedHeight) ? 0 : adjustedHeight;

            // reduce the height by autopadding value if slider height was adjusted. This is required in VB.
            height = (autoTopPadding && autoTopPadding < height) ? (height - autoTopPadding) : height;

            if (need_image_margin_top || need_image_margin_bottom) {
              if ($slide_image.length) {
                // get the margin from slides with image
                image_margin  = need_image_margin_top ? parseFloat($slide_image.css('margin-top')) : parseFloat($slide_image.css('margin-bottom'));
                image_margin += 10;
              } else {
                // add class to slides without image to adjust their height accordingly
                $(this).find('.et_pb_container').addClass('et_pb_no_image');
              }
            }

            // mark the slides without content
            if (0 === $(this).find('.et_pb_slide_description').length || 0 === $(this).find('.et_pb_slide_description').html().trim().length) {
              $(this).find('.et_pb_container').addClass('et_pb_empty_slide');
            }

            if (max_height < height) {
              max_height = height;
            }
          });

          if ((max_height + image_margin) < 1) {
            // No slides have any content. It's probably being used with background images only.
            // Reset the height so that it falls back to the default padding for the content.
            $slide_containers.css('height', '');
          } else {
            $slide_containers.css('height', `${max_height + image_margin}px`);
          }

          // remove temp class after getting the slider height
          $slides.removeClass('et_pb_temp_slide');

          // Show the active slide's image (if exists)
          $slides.filter('.et-pb-active-slide')
            .find('.et_pb_slide_image')
            .children('img')
            .addClass('active');
        });
      }
      const debounced_et_fix_slider_height = {};

      // This function can end up being called a lot of times and it's quite expensive in terms of cpu due to
      // recalculating styles. Debouncing it (VB only) for performances reasons.
      window.et_fix_slider_height = ! isBuilder ? et_fix_slider_height : function($slider) {
        const $this_slider = $slider || $et_pb_slider;

        if (! $this_slider || ! $this_slider.length) {
          return;
        }

        // Create a debounced function per slider
        const address = $this_slider.data('address');
        if (! debounced_et_fix_slider_height[address]) {
          debounced_et_fix_slider_height[address] = window.et_pb_debounce(et_fix_slider_height, 100);
        }
        debounced_et_fix_slider_height[address]($slider);
      };

      /**
       * Add conditional class to prevent unwanted dropdown nav.
       */
      function et_fix_nav_direction() {
        const window_width = $(window).width();
        $('.nav li.et-reverse-direction-nav').removeClass('et-reverse-direction-nav');
        $('.nav li li ul').each(function() {
          const $dropdown       = $(this);
          const dropdown_width  = $dropdown.width();
          const dropdown_offset = $dropdown.offset();
          const $parents        = $dropdown.parents('.nav > li');

          if (dropdown_offset.left > (window_width - dropdown_width)) {
            $parents.addClass('et-reverse-direction-nav');
          }
        });
      }
      et_fix_nav_direction();

      et_pb_form_placeholders_init($('.et_pb_comments_module #commentform'));

      $('.et-menu-nav ul.nav').each(function(i) {
        et_duplicate_menu($(this), $(this).closest('.et_pb_module').find('div .mobile_nav'), `mobile_menu${i + 1}`, 'et_mobile_menu');
      });

      $('.et_pb_menu, .et_pb_fullwidth_menu').each(function() {
        const this_menu = $(this);
        const bg_color  = this_menu.data('bg_color');
        if (bg_color) {
          this_menu.find('ul').css({ 'background-color': bg_color });
        }
      });

      window.et_pb_video_background_init = function($this_video_background, this_video_background) {
        const $video_background_wrapper = $this_video_background.closest('.et_pb_section_video_bg');

        // Initializing video values
        let onplaying = false;
        let onpause   = true;

        // On video playing toggle values
        this_video_background.onplaying = function() {
          onplaying = true;
          onpause   = false;
        };

        // On video pause toggle values
        this_video_background.onpause = function() {
          onplaying = false;
          onpause   = true;
        };

        // Entering video's top viewport
        window.et_waypoint($video_background_wrapper, {
          offset: '100%',
          handler(direction) {
            // This has to be placed inside handler to make it works with changing class name in VB
            const is_play_outside_viewport = $video_background_wrapper.hasClass('et_pb_video_play_outside_viewport');

            if ($this_video_background.is(':visible') && 'down' === direction) {
              if (this_video_background.paused && ! onplaying) {
                this_video_background.play();
              }
            } else if ($this_video_background.is(':visible') && 'up' === direction) {
              if (! this_video_background.paused && ! onpause && ! is_play_outside_viewport) {
                this_video_background.pause();
              }
            }
          },
        }, 2);

        // Entering video's bottom viewport
        window.et_waypoint($video_background_wrapper, {
          offset() {
            const video_height = this.element.clientHeight;
            let toggle_offset  = Math.ceil(window.innerHeight / 2);

            if (video_height > toggle_offset) {
              toggle_offset = video_height;
            }

            return toggle_offset * (- 1);
          },
          handler(direction) {
            // This has to be placed inside handler to make it works with changing class name in VB
            const is_play_outside_viewport = $video_background_wrapper.hasClass('et_pb_video_play_outside_viewport');

            if ($this_video_background.is(':visible') && 'up' === direction) {
              if (this_video_background.paused && ! onplaying) {
                this_video_background.play();
              }
            } else if ($this_video_background.is(':visible') && 'down' === direction) {
              if (! this_video_background.paused && ! onpause && ! is_play_outside_viewport) {
                this_video_background.pause();
              }
            }
          },
        }, 2);
      };

      /**
       * Reinit animation styles on window resize.
       *
       * It will check current window mode then compare it with the breakpoint of last rendered
       * animation styles. If it's different, it will recall et_process_animation_data().
       *
       * @since 3.23
       */
      function et_pb_reinit_animation() {
        // If mode is changed, reinit animation data.
        if ('undefined' !== typeof et_process_animation_data && window.et_pb_get_current_window_mode() !== et_animation_breakpoint) {
          window.et_process_animation_data(false);
        }
      }

      /**
       * Update map filters.
       *
       * @since 3.23
       * @since 3.24.1 Prevent reinit maps to update map filters.
       *
       * @param {jQuery} $et_pb_map
       */
      function et_pb_update_maps_filters($et_pb_map) {
        // Ensure to update map filters only on preview mode changes.
        if (window.et_pb_get_current_window_mode() === et_animation_breakpoint) {
          return false;
        }

        $et_pb_map.each(function() {
          const $this_map = $(this);
          const this_map  = $this_map.data('map');

          // Ensure the map exist.
          if ('undefined' === typeof this_map) {
            return;
          }

          const current_mode      = window.et_pb_get_current_window_mode();
          et_animation_breakpoint = current_mode;
          const suffix            = current_mode !== 'desktop' ? `-${current_mode}` : '';
          const prev_suffix       = 'phone' === current_mode ? '-tablet' : '';
          let grayscale_value     = $this_map.attr(`data-grayscale${suffix}`) || 0;
          if (! grayscale_value) {
            grayscale_value = $this_map.attr(`data-grayscale${prev_suffix}`) || $this_map.attr('data-grayscale') || 0;
          }

          // Convert it to negative value as string.
          if (grayscale_value !== 0) {
            grayscale_value = `-${grayscale_value.toString()}`;
          }

          // Apply grayscale value on the saturation.
          this_map.setOptions({
            styles: [{
              stylers: [
                { saturation: parseInt(grayscale_value) },
              ],
            }],
          });
        });
      }

      function et_pb_init_ab_test(test) {
        // Disable AB Testing tracking on VB
        // AB Testing should not record anything on AB Testing
        if (isBuilder) {
          return;
        }

        const $et_pb_ab_goal   = et_builder_ab_get_goal_node(test.post_id);
        const et_ab_subject_id = et_pb_get_subject_id(test.post_id);

        $.each(et_pb_ab_logged_status[test.post_id], key => {
          const cookie_subject = 'click_goal' === key || 'con_short' === key ? '' : et_ab_subject_id;

          et_pb_ab_logged_status[test.post_id][key] = et_pb_check_cookie_value(`et_pb_ab_${key}_${test.post_id}${test.test_id}${cookie_subject}`, 'true');
        });

        // log the page read event if user stays on page long enough and if not logged for current subject
        if (! et_pb_ab_logged_status[test.post_id].read_page) {
          setTimeout(() => {
            et_pb_ab_update_stats('read_page', test.post_id, undefined, test.test_id);
          }, et_pb_ab_bounce_rate);
        }

        // add the cookies for shortcode tracking, if enabled
        if ('on' === et_pb_custom.is_shortcode_tracking && ! et_pb_ab_logged_status[test.post_id].con_short) {
          et_pb_set_cookie(365, `et_pb_ab_shortcode_track_${test.post_id}=${test.post_id}_${et_ab_subject_id}_${test.test_id}`);
        }

        if ($et_pb_ab_goal.length) {
          // if goal is a module and has a button then track the conversions, otherwise track clicks
          if ($et_pb_ab_goal.hasClass('et_pb_module') && ($et_pb_ab_goal.hasClass('et_pb_button') || $et_pb_ab_goal.find('.et_pb_button').length)) {
            // Log con_goal if current goal doesn't require any specific conversion calculation
            if (! $et_pb_ab_goal.hasClass('et_pb_contact_form_container') && ! $et_pb_ab_goal.hasClass('et_pb_newsletter')) {
              const $goal_button = $et_pb_ab_goal.hasClass('et_pb_button') ? $et_pb_ab_goal : $et_pb_ab_goal.find('.et_pb_button');

              if ($et_pb_ab_goal.hasClass('et_pb_comments_module')) {
                const page_url          = window.location.href;
                const comment_submitted = - 1 !== page_url.indexOf('#comment-');
                const log_conversion    = et_pb_check_cookie_value(`et_pb_ab_comment_log_${test.post_id}${test.test_id}`, 'true');

                if (comment_submitted && log_conversion) {
                  et_pb_ab_update_stats('con_goal', test.post_id, undefined, test.test_id);
                  et_pb_set_cookie(0, `et_pb_ab_comment_log_${test.post_id}${test.test_id}=true`);
                }
              }

              $goal_button.click(() => {
                if ($et_pb_ab_goal.hasClass('et_pb_comments_module') && ! et_pb_ab_logged_status[test.post_id].con_goal) {
                  et_pb_set_cookie(365, `et_pb_ab_comment_log_${test.post_id}${test.test_id}=true`);
                  return;
                }

                et_pb_maybe_log_event($et_pb_ab_goal, 'click_goal');
              });
            }
          } else {
            $et_pb_ab_goal.click(() => {
              if ($et_pb_ab_goal.hasClass('et_pb_shop') && ! et_pb_ab_logged_status[test.post_id].con_goal) {
                et_pb_set_cookie(365, `et_pb_ab_shop_log=${test.post_id}_${et_ab_subject_id}_${test.test_id}`);
              }

              et_pb_maybe_log_event($et_pb_ab_goal, 'click_goal');
            });
          }
        }
      }

      function et_pb_maybe_log_event($goal_container, event, callback) {
        // Disable AB Testing tracking on VB
        // AB Testing should not record anything on AB Testing
        if (isBuilder) {
          return;
        }

        const postId    = et_builder_ab_get_test_post_id($goal_container);
        const log_event = 'undefined' === typeof event ? 'con_goal' : event;

        if (! $goal_container.hasClass('et_pb_ab_goal') || et_pb_ab_logged_status[postId][log_event]) {
          if ('undefined' !== typeof callback) {
            callback();
          }

          return;
        }

        // log the event if it's not logged for current user
        et_pb_ab_update_stats(log_event, postId);
      }

      function et_pb_ab_update_stats(record_type, set_page_id, set_subject_id, set_test_id, callback) {
        const page_id        = 'undefined' === typeof set_page_id ? et_pb_custom.page_id : set_page_id;
        const subject_id     = 'undefined' === typeof set_subject_id ? et_pb_get_subject_id(page_id) : set_subject_id;
        const test_id        = 'undefined' === typeof set_test_id ? et_builder_ab_get_test_id(page_id) : set_test_id;
        const stats_data     = JSON.stringify({ test_id: page_id, subject_id, record_type });
        const cookie_subject = 'click_goal' === record_type || 'con_short' === record_type ? '' : subject_id;

        et_pb_set_cookie(365, `et_pb_ab_${record_type}_${page_id}${test_id}${cookie_subject}=true`);

        set(et_pb_ab_logged_status, [page_id, record_type], true);

        $.ajax({
          type: 'POST',
          url: et_pb_custom.ajaxurl,
          data: {
            action: 'et_pb_update_stats_table',
            stats_data_array: stats_data,
            et_ab_log_nonce: et_pb_custom.et_ab_log_nonce,
          },
        }).always(() => {
          if ('undefined' !== typeof callback) {
            callback();
          }
        });
      }

      function et_pb_get_subject_id(postId) {
        const $subject = $(`*[class*=et_pb_ab_subject_id-${postId}_]`);

        // In case no subject found
        if ($subject.length <= 0 || $('html').is('.et_fb_preview_active--wireframe_preview')) {
          return false;
        }

        const subject_classname    = $subject.attr('class');
        const subject_id_raw       = subject_classname.split('et_pb_ab_subject_id-')[1];
        const subject_id_clean     = subject_id_raw.split(' ')[0];
        const subject_id_separated = subject_id_clean.split('_');
        const subject_id           = subject_id_separated[1];

        return subject_id;
      }

      /**
       * Get the goal $node for the given AB test post id.
       *
       * @since 4.0
       *
       * @param {integer} postId
       *
       * @returns {object}
       */
      function et_builder_ab_get_goal_node(postId) {
        return $(`.et_pb_ab_goal_id-${postId}`);
      }

      /**
       * Get the post id from a goal $node.
       *
       * @since 4.0
       *
       * @param {object} $goal
       *
       * @returns {integer}
       */
      function et_builder_ab_get_test_post_id($goal) {
        const className = $goal.attr('class');
        const postId    = parseInt(className.replace(/^.*et_pb_ab_goal_id-(\d+).*$/, '$1'));
        return ! isNaN(postId) ? postId : 0;
      }

      /**
       * Get the test id from a post id.
       *
       * @since 4.0
       *
       * @param {integer} postId
       *
       * @returns {integer}
       */
      function et_builder_ab_get_test_id(postId) {
        for (let i = 0; i < et_pb_custom.ab_tests; i++) {
          if (et_pb_custom.ab_tests[i].post_id === postId) {
            return et_pb_custom.ab_tests[i].test_id;
          }
        }

        return et_pb_custom.unique_test_id;
      }

      function et_pb_set_cookie_expire(days) {
        const ms = days * 24 * 60 * 60 * 1000;

        const date = new Date();
        date.setTime(date.getTime() + ms);

        return `; expires=${date.toUTCString()}`;
      }

      function et_pb_check_cookie_value(cookie_name, value) {
        return et_pb_get_cookie_value(cookie_name) == value;
      }

      function et_pb_get_cookie_value(cookie_name) {
        return et_pb_parse_cookies()[cookie_name];
      }

      function et_pb_parse_cookies() {
        const cookies = document.cookie.split('; ');

        const ret = {};
        for (let i = cookies.length - 1; i >= 0; i--) {
				  const el   = cookies[i].split('=');
				  ret[el[0]] = el[1];
        }
        return ret;
      }

      function et_pb_set_cookie(expire, cookie_content) {
        const cookie_expire = et_pb_set_cookie_expire(expire);
        document.cookie     = `${cookie_content + cookie_expire}; path=/`;
      }

      function et_pb_get_fixed_main_header_height() {
        if (! window.et_is_fixed_nav) {
          return 0;
        }

        const fixed_height_onload = 'undefined' === typeof $('#main-header').attr('data-fixed-height-onload') ? 0 : $('#main-header').attr('data-fixed-height-onload');

        return ! window.et_is_fixed_nav ? 0 : parseFloat(fixed_height_onload);
      }

      const fullscreen_section_width   = {};
      const fullscreen_section_timeout = {};

      window.et_calc_fullscreen_section = function(event, section) {
        const isResizing    = 'object' === typeof event && 'resize' === event.type;
        const $et_window    = $(top_window);
        const $this_section = section || $(this);
        const section_index = $this_section.index('.et_pb_fullscreen');
        const timeout       = isResizing && typeof fullscreen_section_width[section_index] !== 'undefined' && event.target.window_width > fullscreen_section_width[section_index] ? 800 : 0;

        fullscreen_section_width[section_index] = $et_window.width();

        if (typeof fullscreen_section_timeout[section_index] !== 'undefined') {
          clearTimeout(fullscreen_section_timeout[section_index]);
        }

        fullscreen_section_timeout[section_index] = setTimeout(() => {
          const $body                    = $('body');
          const $tb_header               = $('.et-l--header').first();
          const tb_header_height         = $tb_header.length > 0 ? $tb_header.height() : 0;
          const has_section              = $this_section.length;
          const this_section_index       = $this_section.index('.et_pb_fullwidth_header');
          const this_section_offset      = has_section ? $this_section.offset() : {};
          const $header                  = $this_section.children('.et_pb_fullwidth_header_container');
          const $header_content          = $header.children('.header-content-container');
          const $header_image            = $header.children('.header-image-container');
          let sectionHeight              = top_window.innerHeight || $et_window.height();
          const $wpadminbar              = top_window.jQuery('#wpadminbar');
          const has_wpadminbar           = $wpadminbar.length;
          const wpadminbar_height        = has_wpadminbar ? $wpadminbar.height() : 0;
          const $top_header              = $('#top-header');
          const has_top_header           = $top_header.length;
          const top_header_height        = has_top_header ? $top_header.height() : 0;
          const $main_header             = $('#main-header');
          const has_main_header          = $main_header.length;
          let main_header_height         = has_main_header ? $main_header.outerHeight() : 0;
          const fixed_main_header_height = et_pb_get_fixed_main_header_height();
          const is_wp_relative_admin_bar = $et_window.width() < 782;
          const is_desktop_view          = $et_window.width() > 980;
          const is_tablet_view           = $et_window.width() <= 980 && $et_window.width() >= 479;
          const is_phone_view            = $et_window.width() < 479;
          const overall_header_height    = wpadminbar_height + tb_header_height + top_header_height + (window.et_is_vertical_nav && is_desktop_view ? 0 : main_header_height);
          const is_first_module          = 'undefined' !== typeof this_section_offset.top ? this_section_offset.top <= overall_header_height : false;

          const $gbFixedHeader = top_window.jQuery('.edit-post-header');
          const $gbFixedFooter = top_window.jQuery('.edit-post-layout__footer');

          // In case theme stored the onload main-header height as data-attribute
          if ($main_header.attr('data-height-onload')) {
            main_header_height = parseFloat($main_header.attr('data-height-onload'));
          }

          //
          // WP Admin Bar:
          //
          // - Desktop fixed: standard
          // - WP Mobile relative: less than 782px window
          //
          if (has_wpadminbar) {
            if (is_wp_relative_admin_bar) {
              if (is_first_module) {
                sectionHeight -= wpadminbar_height;
              }
            } else {
              sectionHeight -= wpadminbar_height;
            }
          }

          // Gutenberg's floating header UI
          if ($gbFixedHeader.length > 0) {
            sectionHeight -= $gbFixedHeader.outerHeight();
          }

          // Gutenberg's floating footer UI
          if ($gbFixedFooter.length > 0) {
            sectionHeight -= $gbFixedFooter.outerHeight();
          }

          /**
           * Divi Top Header:
           *
           * - Desktop fixed: standard.
           * - Desktop fixed BUT first header's height shouldn't be substracted: hide nav until
           * scroll activated
           * - Desktop relative: fixed nav bar disabled
           * - Desktop relative: vertical nav activated.
           */
          if (has_top_header) {
            if (is_desktop_view) {
              if (et_hide_nav && ! window.et_is_vertical_nav) {
                if (! is_first_module) {
                  sectionHeight -= top_header_height;
                }
              } else if (! window.et_is_fixed_nav || window.et_is_vertical_nav) {
                if (is_first_module) {
                  sectionHeight -= top_header_height;
                }
              } else {
                sectionHeight -= top_header_height;
              }
            }
          }

          /**
           * Divi Main Header:
           *
           * - Desktop fixed: standard. Initial and 'fixed' header might have different height
           * - Desktop relative: fixed nav bar disabled
           * - Desktop fixed BUT height should be ignored: vertical nav activated
           * - Desktop fixed BUT height should be ignored for first header only: main header uses
           * rgba
           * - Desktop fixed BUT first header's height shouldn't be substracted: hide nav until
           * scroll activated
           * - Tablet relative: standard. Including vertical header style
           * - Phone relative: standard. Including vertical header style.
           */
          if (has_main_header) {
            if (is_desktop_view) {
              if (et_hide_nav && ! window.et_is_vertical_nav) {
                if (! is_first_module) {
                  sectionHeight -= fixed_main_header_height;
                }
              } else if (window.et_is_fixed_nav && ! window.et_is_vertical_nav) {
                if (is_first_module) {
                  sectionHeight -= main_header_height;
                } else {
                  sectionHeight -= fixed_main_header_height;
                }
              } else if (! window.et_is_fixed_nav && ! window.et_is_vertical_nav) {
                if (is_first_module) {
                  sectionHeight -= main_header_height;
                }
              }
            } else if (is_first_module) {
              sectionHeight -= main_header_height;
            }
          }

          // If the transparent primary nav + hide nav until scroll is being used,
          // cancel automatic padding-top added by transparent nav mechanism
          if ($body.hasClass('et_transparent_nav') && $body.hasClass('et_hide_nav') && 0 === this_section_index) {
            $this_section.css('padding-top', '');
          }

          // reduce section height by its top border width
          const section_border_top_width = parseInt($this_section.css('borderTopWidth'));
          if (section_border_top_width) {
            sectionHeight -= section_border_top_width;
          }

          // reduce section height by its bottom border width
          const section_border_bottom_width = parseInt($this_section.css('borderBottomWidth'));
          if (section_border_bottom_width) {
            sectionHeight -= section_border_bottom_width;
          }

          // Subtract Theme Builder header layout height from first fullscreen section/header
          // unless the section is inside the TB header itself.
          if (tb_header_height > 0 && 0 === this_section_index && 0 === $this_section.closest($tb_header).length) {
            sectionHeight -= tb_header_height;
          }

          setTimeout(() => {
            $this_section.css('min-height', `${sectionHeight}px`);
            $header.css('min-height', `${sectionHeight}px`);
          }, 100);

          if ($header.hasClass('center') && $header_content.hasClass('bottom') && $header_image.hasClass('bottom')) {
            $header.addClass('bottom-bottom');
          }

          if ($header.hasClass('center') && $header_content.hasClass('center') && $header_image.hasClass('center')) {
            $header.addClass('center-center');
          }

          if ($header.hasClass('center') && $header_content.hasClass('center') && $header_image.hasClass('bottom')) {
            $header.addClass('center-bottom');

            const contentHeight = sectionHeight - $header_image.outerHeight(true);

            if (contentHeight > 0) {
              $header_content.css('min-height', `${contentHeight}px`).css('height', '10px' /* fixes IE11 render */);
            }
          }

          if ($header.hasClass('center') && $header_content.hasClass('bottom') && $header_image.hasClass('center')) {
            $header.addClass('bottom-center');
          }

          if (($header.hasClass('left') || $header.hasClass('right')) && ! $header_content.length && $header_image.length) {
            $header.css('justify-content', 'flex-end');
          }

          if ($header.hasClass('center') && $header_content.hasClass('bottom') && ! $header_image.length) {
            $header_content.find('.header-content').css('margin-bottom', `${80}px`);
          }

          if ($header_content.hasClass('bottom') && $header_image.hasClass('center')) {
            $header_image.find('.header-image').css('margin-bottom', `${80}px`);
            $header_image.css('align-self', 'flex-end');
          }

          // Detect if section height is lower than the content height
          let headerContentHeight = 0;

          if ($header_content.length) {
            headerContentHeight += $header_content.outerHeight();
          }
          if ($header_image.length) {
            headerContentHeight += $header_image.outerHeight();
          }
          if (headerContentHeight > sectionHeight) {
            $this_section.css('min-height', `${headerContentHeight}px`);
            $header.css('min-height', `${headerContentHeight}px`);
          }

          // Justify the section content
          if ($header_image.hasClass('bottom')) {
            if (headerContentHeight < sectionHeight) {
              $this_section.css('min-height', `${headerContentHeight + 80}px`);
              $header.css('min-height', `${headerContentHeight + 80}px`);
            }
            $header.css('justify-content', 'flex-end');
          }
        }, timeout);
      };

      window.et_calculate_fullscreen_section_size = function() {
        $('section.et_pb_fullscreen').each(function() {
          et_calc_fullscreen_section.bind($(this))();
        });

        if (isBuilder) {
          return;
        }

        clearTimeout(et_calc_fullscreen_section.timeout);

        et_calc_fullscreen_section.timeout = setTimeout(() => {
          $fullscreenSectionWindow.off('resize', et_calculate_fullscreen_section_size);
          $fullscreenSectionWindow.off('et-pb-header-height-calculated', et_calculate_fullscreen_section_size);

          $fullscreenSectionWindow.trigger('resize');

          $fullscreenSectionWindow.on('resize', et_calculate_fullscreen_section_size);
          $fullscreenSectionWindow.on('et-pb-header-height-calculated', et_calculate_fullscreen_section_size);
        });

        // 100ms timeout is set to make sure that the fulls screen section size is calculated
        // This allows the posibility that in some specific cases this may not be enought
        // so we may need to review this.
      };

      if (! isBuilder) {
        $fullscreenSectionWindow.on('resize', et_calculate_fullscreen_section_size);
        $fullscreenSectionWindow.on('et-pb-header-height-calculated', et_calculate_fullscreen_section_size);
      }

      window.debounced_et_apply_builder_css_parallax = et_pb_debounce(window.et_apply_builder_css_parallax, 100);

      window.et_pb_parallax_init = function($this_parallax) {
        const $this_parent = $this_parallax.parent();

        if ($this_parallax.hasClass('et_pb_parallax_css')) {
          // Register faux CSS Parallax effect for builder modes with top window scroll
          if ($('body').hasClass('et-fb') || isTB || isBlockLayoutPreview) {
            et_apply_builder_css_parallax.bind($this_parent)();
            if (isTB) {
              top_window.jQuery('#et-fb-app')
                .on('scroll.etCssParallaxBackground', et_apply_builder_css_parallax.bind($this_parent))
                .on('resize.etCssParallaxBackground', window.debounced_et_apply_builder_css_parallax.bind($this_parent));
            } else {
              $(window)
                .on('scroll.etCssParallaxBackground', et_apply_builder_css_parallax.bind($this_parent))
                .on('resize.etCssParallaxBackground', window.debounced_et_apply_builder_css_parallax.bind($this_parent));
            }
          }

          return;
        }

        et_parallax_set_height.bind($this_parent)();
        et_apply_parallax.bind($this_parent)();

        if (isTB) {
          top_window.jQuery('#et-fb-app').on('scroll.etTrueParallaxBackground', et_apply_parallax.bind($this_parent));
        } else {
          $(window).on('scroll.etTrueParallaxBackground', et_apply_parallax.bind($this_parent));
        }
        $(window).on('resize.etTrueParallaxBackground', et_pb_debounce(et_parallax_set_height, 100).bind($this_parent));
        $(window).on('resize.etTrueParallaxBackground', et_pb_debounce(et_apply_parallax, 100).bind($this_parent));

        $this_parent.find('.et-learn-more .heading-more').click(() => {
          setTimeout(() => {
            et_parallax_set_height.bind($this_parent)();
          }, 300);
        });
      };

      window.et_fix_testimonial_inner_width = function () {
        var window_width = $(window).width();

        if (window_width > 959) {
          $('.et_pb_testimonial').each(function () {
            if (!$(this).is(':visible')) {
              return;
            }

            var $testimonial = $(this);
            var $portrait = $testimonial.find('.et_pb_testimonial_portrait');
            var portrait_width = $portrait.outerWidth(true) || 0;
            var $testimonial_descr = $testimonial.find('.et_pb_testimonial_description');
            var $outer_column = $testimonial.closest('.et_pb_column');

            if (portrait_width > 90) {
              $portrait.css('padding-bottom', '0px');
              $portrait.width('90px');
              $portrait.height('90px');
            }

            var testimonial_indent = !($outer_column.hasClass('et_pb_column_1_3')
              || $outer_column.hasClass('et_pb_column_1_4')
              || $outer_column.hasClass('et_pb_column_1_5')
              || $outer_column.hasClass('et_pb_column_1_6')
              || $outer_column.hasClass('et_pb_column_2_5')
              || $outer_column.hasClass('et_pb_column_3_8')) ? portrait_width : 0;

            $testimonial_descr.css('margin-left', `${testimonial_indent}px`);
          });
        } else if (window_width > 767) {
          $('.et_pb_testimonial').each(function () {
            if (!$(this).is(':visible')) {
              return;
            }

            var $testimonial = $(this);
            var $portrait = $testimonial.find('.et_pb_testimonial_portrait');
            var portrait_width = $portrait.outerWidth(true) || 0;
            var $testimonial_descr = $testimonial.find('.et_pb_testimonial_description');
            var $outer_column = $testimonial.closest('.et_pb_column');
            var testimonial_indent = !($outer_column.hasClass('et_pb_column_1_4')
              || $outer_column.hasClass('et_pb_column_1_5')
              || $outer_column.hasClass('et_pb_column_1_6')
              || $outer_column.hasClass('et_pb_column_2_5')
              || $outer_column.hasClass('et_pb_column_3_8')) ? portrait_width : 0;

            $testimonial_descr.css('margin-left', `${testimonial_indent}px`);
          });
        } else {
          $('.et_pb_testimonial_description').removeAttr('style');
        }
      };

      $(window).on('resize', () => {
        const window_width                = $et_window.width();
        const et_container_css_width      = $et_container.css('width');
        const et_container_width_in_pixel = (typeof et_container_css_width !== 'undefined') ? et_container_css_width.substr(- 1, 1) !== '%' : '';
        const et_container_actual_width   = (et_container_width_in_pixel) ? $et_container.width() : (($et_container.width() / 100) * window_width); // $et_container.width() doesn't recognize pixel or percentage unit. It's our duty to understand what it returns and convert it properly
        const containerWidthChanged       = et_container_width !== et_container_actual_width;
        const $dividers                   = $('.et_pb_top_inside_divider, .et_pb_bottom_inside_divider');

        et_pb_resize_section_video_bg();
        et_pb_center_video();
        et_fix_slider_height();
        et_fix_nav_direction();
        et_fix_html_margin();

        window.et_fix_testimonial_inner_width();

        if ($et_pb_counter_amount.length) {
          $et_pb_counter_amount.each(function() {
            window.et_bar_counters_init($(this));
          });
        } /* $et_pb_counter_amount.length */

        // Reinit animation.
        isBuilder && et_pb_reinit_animation();

        // Reupdate maps filters.
        if ($et_pb_map.length || isBuilder) {
          et_pb_update_maps_filters($et_pb_map);
        }

        if (grid_containers.length || isBuilder) {
          $(grid_containers).each(function() {
            window.et_pb_set_responsive_grid($(this), '.et_pb_grid_item');
          });
        }

        // Re-apply module divider fix
        if (! isBuilder && $dividers.length) {
          $dividers.each(function() {
            etFixDividerSpacing($(this));
          });
        }
      });

      window.et_pb_fullwidth_header_scroll = function(event) {
        event.preventDefault();

        const window_width               = $et_window.width();
        const $body                      = $('body');
        const is_wp_relative_admin_bar   = window_width < 782;
        const is_transparent_main_header = $body.hasClass('et_transparent_nav');
        const is_hide_nav                = $body.hasClass('et_hide_nav');
        const is_desktop_view            = window_width > 980;
        const is_tablet_view             = window_width <= 980 && window_width >= 479;
        const is_phone_view              = window_width < 479;
        const $this_section              = $(this).parents('section');
        const this_section_offset        = $this_section.offset();
        const $wpadminbar                = $('#wpadminbar');
        const $main_header               = $('#main-header');
        const wpadminbar_height          = $wpadminbar.length && ! is_wp_relative_admin_bar ? $wpadminbar.height() : 0;
        const top_header_height          = ! $top_header.length || ! window.et_is_fixed_nav || ! is_desktop_view ? 0 : $top_header.height();
        const data_height_onload         = 'undefined' === typeof $main_header.attr('data-height-onload') ? 0 : $main_header.attr('data-height-onload');
        const initial_fixed_difference   = $main_header.height() === et_pb_get_fixed_main_header_height() || ! is_desktop_view || ! window.et_is_fixed_nav || is_transparent_main_header || is_hide_nav ? 0 : et_pb_get_fixed_main_header_height() - parseFloat(data_height_onload);
        let section_bottom               = (this_section_offset.top + $this_section.outerHeight(true) + initial_fixed_difference) - (wpadminbar_height + top_header_height + et_pb_get_fixed_main_header_height());
        const animate_modified           = false;

        if (! isVB && window.et_is_fixed_nav && is_transparent_main_header) {
          // We need to perform an extra adjustment which requires computing header height
          // in "fixed" mode. It can't be done directly on header because it will change
          // its appearance so an invisible clone is used instead.
          const clone = $main_header
            .clone()
            .addClass('et-disabled-animations et-fixed-header')
            .css('visibility', 'hidden')
            .appendTo($body);

          section_bottom += et_pb_get_fixed_main_header_height() - clone.height();
          clone.remove();
        }

        if ($this_section.length) {
          const fullscreen_scroll_duration = 800;

          $('html, body').animate({ scrollTop: section_bottom }, {
            duration: fullscreen_scroll_duration,
          });
        }
      };

      function et_pb_window_load_scripts() {
        et_fix_fullscreen_section();
        et_calculate_fullscreen_section_size();

        $(document).on('click', '.et_pb_fullwidth_header_scroll a', et_pb_fullwidth_header_scroll);

        setTimeout(() => {
          $('.et_pb_preload').removeClass('et_pb_preload');
        }, 500);

        if ($et_pb_parallax.length && ! et_is_mobile_device) {
          $et_pb_parallax.each(function() {
            et_pb_parallax_init($(this));
          });
        }

        window.et_reinit_waypoint_modules();

        if ($('.et_audio_content').length) {
          $(window).trigger('resize');
        }
      }

      if (window.et_load_event_fired) {
        et_pb_window_load_scripts();
      } else {
        $(window).on('load', () => {
          et_pb_window_load_scripts();
        });
      }

      if ($('.et_section_specialty').length) {
        $('.et_section_specialty').each(function() {
          const this_row = $(this).find('.et_pb_row');

          this_row.find('>.et_pb_column:not(.et_pb_specialty_column)').addClass('et_pb_column_single');
        });
      }

      //
      // In particular browser, map + parallax doesn't play well due the use of CSS 3D transform
      //
      if ($('.et_pb_section_parallax').length && $('.et_pb_map').length) {
        $('body').addClass('parallax-map-support');
      }

      /**
       * Add conditional class for search widget in sidebar module.
       */
      if (window.et_pb_custom) {
        $(`.et_pb_widget_area ${window.et_pb_custom.widget_search_selector}`).each(function() {
          const $search_wrap             = $(this);
          const $search_input_submit     = $search_wrap.find('input[type="submit"]');
          const search_input_submit_text = $search_input_submit.attr('value');
          const $search_button           = $search_wrap.find('button');
          const search_button_text       = $search_button.text();
          const has_submit_button        = !! ($search_input_submit.length || $search_button.length);
          const min_column_width         = 150;

          if (! $search_wrap.find('input[type="text"]').length && ! $search_wrap.find('input[type="search"]').length) {
            return;
          }

          // Mark no button state
          if (! has_submit_button) {
            $search_wrap.addClass('et-no-submit-button');
          }

          // Mark narrow state
          if ($search_wrap.width() < 150) {
            $search_wrap.addClass('et-narrow-wrapper');
          }

          // Fixes issue where theme's search button has no text: treat it as non-existent
          if ($search_input_submit.length && ('undefined' === typeof search_input_submit_text || '' === search_input_submit_text)) {
            $search_input_submit.remove();
            $search_wrap.addClass('et-no-submit-button');
          }

          if ($search_button.length && ('undefined' === typeof search_button_text || '' === search_button_text)) {
            $search_button.remove();
            $search_wrap.addClass('et-no-submit-button');
          }
        });
      }

      // get the content of next/prev page via ajax for modules which have the .et_pb_ajax_pagination_container class
      $('body').on('click', '.et_pb_ajax_pagination_container .wp-pagenavi a,.et_pb_ajax_pagination_container .pagination a', function() {
        const this_link            = $(this);
        const href                 = this_link.attr('href');
        const current_href         = window.location.href;
        const module_classes       = this_link.closest('.et_pb_module').attr('class').split(' ');
        let module_class_processed = '';
        let $current_module;
        const animation_classes    = et_get_animation_classes();

        // global variable to store the cached content
        window.et_pb_ajax_pagination_cache = window.et_pb_ajax_pagination_cache || [];

        // construct the selector for current module
        $.each(module_classes, (index, value) => {
          // lazyload and lazyloaded classes are needed for compatibility with EWWW Image Optimizer
          const skip_classes = animation_classes.concat(['et_had_animation', 'lazyload', 'lazyloaded']);

          // skip animation and other 3rd party classes so no wrong href is formed afterwards
          if (skip_classes.includes(value)) {
            return;
          }

          if ('' !== value.trim()) {
            module_class_processed += `.${value}`;
          }
        });

        $current_module = $(module_class_processed);

        // remove module animation to prevent conflicts with the page changing animation
        et_remove_animation($current_module);

        // use cached content if it has beed retrieved already, otherwise retrieve the content via ajax
        if (typeof window.et_pb_ajax_pagination_cache[href + module_class_processed] !== 'undefined') {
          $current_module.fadeTo('slow', 0.2, () => {
            $current_module.find('.et_pb_ajax_pagination_container').replaceWith(window.et_pb_ajax_pagination_cache[href + module_class_processed]);
            et_pb_set_paginated_content($current_module, true);

            if ($('.et_pb_tabs').length) {
              window.et_pb_tabs_init($('.et_pb_tabs'));
            }

            et_pb_apply_box_shadow();
          });
        } else {
          // update cache for currently opened page if not set yet
          if ('undefined' === typeof window.et_pb_ajax_pagination_cache[current_href + module_class_processed]) {
            window.et_pb_ajax_pagination_cache[current_href + module_class_processed] = $current_module.find('.et_pb_ajax_pagination_container');
          }

          $current_module.fadeTo('slow', 0.2, () => {
            const paginate = function(page) {
              const $page = jQuery(page);

              // Find custom style
              const $style = $page.filter('#et-builder-module-design-cached-inline-styles');

              // Make sure it's included in the new content
              const $content = $page.find(`${module_class_processed} .et_pb_ajax_pagination_container`).prepend($style);

              // Remove animations to prevent blocks from not showing
              et_remove_animation($content.find('.et_animated'));

              // Replace current page with new one
              $current_module.find('.et_pb_ajax_pagination_container').replaceWith($content);
              window.et_pb_ajax_pagination_cache[href + module_class_processed] = $content;
              et_pb_set_paginated_content($current_module, false);

              if ($('.et_pb_tabs').length) {
                window.et_pb_tabs_init($('.et_pb_tabs'));
              }

              et_pb_apply_box_shadow();

              // Triggers post-load to initialize 3rd party JavaScript that listens for this event.
              $(document.body).trigger('post-load');
            };

            // Ajax request settings
            const ajaxSettings = {
              url: href,
              success: paginate,
              error(page) {
                if (404 === page.status && jQuery('body.error404').length > 0) {
                  // Special case if a blog module is being displayed on the 404 page.
                  paginate(page.responseText);
                }
              },
            };

            // Layout block preview is essentially blank page where its layout is passed
            // via POST. Pass the next page's layout content by shipping it on the ajax
            // request as POST
            if (isBlockLayoutPreview) {
              ajaxSettings.data   = {
                et_layout_block_layout_content: ETBlockLayoutModulesScript.layoutContent,
              };
              ajaxSettings.method = 'POST';
            }

            jQuery.ajax(ajaxSettings);
          });
        }

        return false;
      });

      function et_pb_apply_box_shadow() {
        setTimeout(() => {
          (window.et_pb_box_shadow_elements || []).map(et_pb_box_shadow_apply_overlay);
        }, 0);
      }

      function et_pb_set_paginated_content($current_module, is_cache) {
        const is_desktop_view       = $(window).width() > 980;
        const is_fixed_nav          = window.et_is_fixed_nav;
        const $wpadminbar           = $('#wpadminbar');
        const has_wpadminbar        = $wpadminbar.length;
        const wpadminbar_height     = has_wpadminbar && is_desktop_view ? $wpadminbar.height() : 0;
        const $top_header           = $('#top-header');
        const has_top_header        = $top_header.length;
        const top_header_height     = has_top_header && is_fixed_nav && is_desktop_view ? $top_header.height() : 0;
        const $main_header          = $('#main-header');
        const has_main_header       = $main_header.length;
        const main_header_height    = has_main_header && is_fixed_nav && is_desktop_view ? $main_header.height() : 0;
        const overall_header_height = wpadminbar_height + top_header_height + main_header_height;
        // Calculate the scroll to element top value based on the element top offset - overall header height - 50.
        // The element should be positioned 50px from the top of the viewport or the header (if fixed).
        const scroll_to_position    = $current_module.offset().top - overall_header_height - 50;

        // Re-apply Salvattore grid to the new content if needed.
        if ($current_module.hasClass("et_pb_salvattore_content") && typeof $current_module.find('.et_pb_salvattore_content').attr('data-columns')!=='undefined') {
          et_init_salvattore($current_module, is_cache)
        }

        // init audio module on new content
        if ($current_module.find('.et_audio_container').length > 0 && typeof wp !== 'undefined' && typeof wp.mediaelement !== 'undefined' && 'function' === typeof wp.mediaelement.initialize) {
          wp.mediaelement.initialize();

          $(window).trigger('resize');
        }

        // load waypoint modules such as counters and animated images
        if ($current_module.find('.et-waypoint, .et_pb_circle_counter, .et_pb_number_counter').length > 0) {
          $current_module.find('.et-waypoint, .et_pb_circle_counter, .et_pb_number_counter').each(function() {
            const $waypoint_module = $(this);

            if ($waypoint_module.hasClass('et_pb_circle_counter')) {
              window.et_pb_reinit_circle_counters($waypoint_module);
            }

            if ($waypoint_module.hasClass('et_pb_number_counter')) {
              window.et_pb_reinit_number_counters($waypoint_module);
            }

            if ($waypoint_module.find('.et_pb_counter_amount').length > 0) {
              $waypoint_module.find('.et_pb_counter_amount').each(function() {
                window.et_bar_counters_init($(this));
              });
            }

            $(this).css({ opacity: '1' });

            window.et_reinit_waypoint_modules();
          });
        }

        /**
         * Init post gallery format.
         */
        if ($current_module.find('.et_pb_slider').length > 0) {
          $current_module.find('.et_pb_slider').each(function() {
            window.et_pb_slider_init($(this));
          });
        }

        /**
         * Init post video format overlay click.
         */
        $current_module.on('click', '.et_pb_video_overlay', function(e) {
          e.preventDefault();
          et_pb_play_overlayed_video($(this));
        });

        // Re-apply fitvids to the new content.
        window.et_init_fitvid_current_module($current_module );

        $current_module.fadeTo('slow', 1);

        // reinit ET shortcodes.
        if ('function' === typeof window.et_shortcodes_init) {
          window.et_shortcodes_init($current_module);
        }

        // reinit audio players.
        window.et_init_audio_modules();

        // scroll to the top of the module
        $('html, body').animate({
          scrollTop: (scroll_to_position),
        });

        // Set classes for gallery and portfolio breakdowns
        const grid_items = $current_module.find('.et_pb_grid_item');
        if (grid_items.length) {
          et_pb_set_responsive_grid($(grid_items.parent().get(0)), '.et_pb_grid_item');
        }
      }

      /**
       * Fix search module which has percentage based custom margin.
       *
       * @param $search
       */
      window.et_pb_search_percentage_custom_margin_fix = function($search) {
        const inputMargin  = $search.find('.et_pb_s').css('margin').split(' ');
        let inputMarginObj = {};

        switch (inputMargin.length) {
          case 4:
            inputMarginObj = {
              top: inputMargin[0],
              right: inputMargin[1],
              bottom: inputMargin[2],
              left: inputMargin[3],
            };
            break;
          case 2:
            inputMarginObj = {
              top: inputMargin[0],
              right: inputMargin[1],
              bottom: inputMargin[0],
              left: inputMargin[1],
            };
            break;
          default:
            inputMarginObj = {
              top: inputMargin[0],
              right: inputMargin[0],
              bottom: inputMargin[0],
              left: inputMargin[0],
            };
            break;
        }

        const inputRight = `${0 - parseFloat(inputMarginObj.left)}px`;

        $search.find('.et_pb_searchsubmit').css({
          top: inputMarginObj.top,
          right: inputRight,
          bottom: inputMarginObj.bottom,
        });
      };

      // Wait the page fully loaded to make sure all the css applied before calculating sizes
      const previousCallback      = document.onreadystatechange || function() {};
      document.onreadystatechange = function() {
        if ('complete' === document.readyState) {
          window.et_fix_pricing_currency_position();
        }

        previousCallback();
      };

      $('.et_pb_contact_form_container, .et_pb_newsletter_custom_fields').each(function() {
        const $form                     = $(this);
        const subjects_selector         = 'input, textarea, select';
        const condition_check           = function() {
          et_conditional_check($form);
        };
        const debounced_condition_check = et_pb_debounce(condition_check, 250);

        // Listen for any field change
        $form.on('change', subjects_selector, condition_check);
        $form.on('keydown', subjects_selector, debounced_condition_check);

        // Conditions may be satisfied on default form state
        et_conditional_check($form);
      });

      function et_conditional_check($form) {
        const $conditionals = $form.find('[data-conditional-logic]');

        // Upon change loop all the fields that have conditional logic
        $conditionals
          .each(function() {
            const $conditional = $(this);

            // jQuery automatically parses the JSON
            const rules    = $conditional.data('conditional-logic');
            const relation = $conditional.data('conditional-relation');

            // Loop all the conditional logic rules
            const matched_rules = [];

            for (let i = 0; i < rules.length; i++) {
              const ruleset    = rules[i];
              const check_id   = ruleset[0];
              let check_type   = ruleset[1];
              var check_value  = ruleset[2];
              const $wrapper   = $form.find(`.et_pb_contact_field[data-id="${check_id}"]`);
              const field_id   = $wrapper.data('id');
              const field_type = $wrapper.data('type');
              var field_value;

              //
              // Check if the field wrapper is actually visible when including it in the rules check.
              // This avoids the scenario with a parent, child and grandchild field where the parent
              // field is changed but the grandchild remains visible, because the child one has the
              // right value, even though it is not visible
              //
              if (! $wrapper.is(':visible')) {
                continue;
              }

              // Get the proper compare value based on the field type
              switch (field_type) {
                case 'input':
                case 'email':
                  field_value = $wrapper.find('input').val();
                  break;
                case 'text':
                  field_value = $wrapper.find('textarea').val();
                  break;
                case 'radio':
                  field_value = $wrapper.find('input:checked').val() || '';
                  break;
                case 'checkbox':
                  //
                  // Conditional logic for checkboxes is a bit trickier since we have multiple values.
                  // To address that we first check if a checked checkbox with the desired value
                  // exists, which is represented by setting `field_value` to true or false.
                  // Next we always set `check_value` to true so we can compare against the
                  // result of the value check.
                  //
                  var $checkbox = $wrapper.find(':checkbox:checked');

                  field_value = false;

                  $checkbox.each(function() {
                    if (check_value === $(this).val()) {
                      field_value = true;

                      return false;
                    }
                  });

                  check_value = true;
                  break;
                case 'select':
                  field_value = $wrapper.find('select').val();
                  break;
              }

              //
              // 'is empty' / 'is not empty' are comparing against an empty value so simply
              // reset the `check_value` and update the condition to 'is' / 'is not'
              //
              if ('is empty' === check_type || 'is not empty' === check_type) {
                check_type  = 'is empty' === check_type ? 'is' : 'is not';
                check_value = '';

                //
                // `field_value` will always be `false` if all the checkboxes are unchecked
                // since it only changes when a checked checkbox matches the `check_value`
                // Because of `check_value` being reset to empty string we do the same
                // to `field_value` (if it is `false`) to cover the 'is empty' case
                //
                if ('checkbox' === field_type && false === field_value) {
                  field_value = '';
                }
              }

              // Need to `stripslashes` value to match with rule value
              if (field_value && 'string' === typeof field_value) {
                field_value = field_value.replace(/\\(.)/g, '$1');
              }

              // Check if the value IS matching (if it has to)
              if ('is' === check_type && field_value !== check_value) {
                continue;
              }

              // Check if the value IS NOT matching (if it has to)
              if ('is not' === check_type && field_value === check_value) {
                continue;
              }

              /**
               * Create the contains/not contains regular expresion
               * Need to escape a character that has special meaning inside a regular expression.
               */
              let containsRegExp = new RegExp(check_value, 'i');

              if ('string' === typeof check_value) {
                containsRegExp = new RegExp(check_value.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');
              }

              // Check if the value IS containing
              if ('contains' === check_type && ! field_value.match(containsRegExp)) {
                continue;
              }

              // Check if the value IS NOT containing
              if ('does not contain' === check_type && field_value.match(containsRegExp)) {
                continue;
              }

              // Prepare the values for the 'is greater than' / 'is less than' check
              const maybeNumericValue       = parseInt(field_value);
              const maybeNumbericCheckValue = parseInt(check_value);

              if (
                ('is greater' === check_type || 'is less' === check_type)
								&& (isNaN(maybeNumericValue) || isNaN(maybeNumbericCheckValue))
              ) {
                continue;
              }

              // Check if the value is greater than
              if ('is greater' === check_type && maybeNumericValue <= maybeNumbericCheckValue) {
                continue;
              }

              // Check if the value is less than
              if ('is less' === check_type && maybeNumericValue >= maybeNumbericCheckValue) {
                continue;
              }

              matched_rules.push(true);
            }

            // Hide all the conditional fields initially
            $conditional.hide();

            //
            // Input fields may have HTML5 pattern validation which must be ignored
            // if the field is not visible. In order for the pattern to not be
            // taken into account the field must have novalidate property and
            // to not be required (or to not have a pattern attribute)
            //
            const $conditional_input  = $conditional.find('input[type="text"]');
            const conditional_pattern = $conditional_input.attr('pattern');

            $conditional_input.attr('novalidate', 'novalidate');
            $conditional_input.attr('data-pattern', conditional_pattern);
            $conditional_input.removeAttr('pattern');

            if ('all' === relation && rules.length === matched_rules.length) {
              $conditional.show();
              $conditional_input.removeAttr('novalidate');
              $conditional_input.attr('pattern', $conditional_input.data('pattern'));
            }

            if ('any' === relation && 0 < matched_rules.length) {
              $conditional.show();
              $conditional_input.removeAttr('novalidate');
              $conditional_input.attr('pattern', $conditional_input.data('pattern'));
            }
          });
      }

      // Adjust z-index for animated menu modules.
      if ('undefined' !== typeof et_animation_data && et_animation_data.length > 0) {
        // Store the maximum z-index that should be applied
        let maxMenuIndex = 0;

        // Increase the maximum z-index by one for each module
        for (let i = 0; i < et_animation_data.length; i++) {
          const animation_entry = et_animation_data[i];

          if (! animation_entry.class) {
            continue;
          }

          const $animationEntry = $(`.${animation_entry.class}`);

          if ($animationEntry.hasClass('et_pb_menu') || $animationEntry.hasClass('et_pb_fullwidth_menu')) {
            maxMenuIndex++;
          }
        }

        const $menus = $('.et_pb_menu, .et_pb_fullwidth_menu');

        $menus.each(function() {
          const $menu = $(this);

          // When the animation ends apply z-index in descending order to each of the animated modules
          $menu.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
            $menu.css('z-index', maxMenuIndex - $menu.index('.et_pb_menu, .et_pb_fullwidth_menu'));
          });
        });
      }

      var $et_pb_carousel = $('.et_pb_carousel');

      $.et_pb_simple_carousel = function (el, options) {
        var settings = $.extend({
          slide_duration: 500,
        }, options);

        var $et_carousel = $(el),
          $carousel_items = $et_carousel.find('.et_pb_carousel_items'),
          $the_carousel_items = $carousel_items.find('.et_pb_carousel_item');

        $et_carousel.et_animation_running = false;

        $et_carousel.addClass('container-width-change-notify').on('containerWidthChanged', function (event) {
          set_carousel_columns($et_carousel);
          set_carousel_height($et_carousel);
        });

        $carousel_items.data('items', $the_carousel_items.toArray());
        $et_carousel.data('columns_setting_up', false);

        $carousel_items.prepend('<div class="et-pb-slider-arrows"><a class="et-pb-slider-arrow et-pb-arrow-prev" href="#">' + '<span>' + et_pb_custom.previous + '</span>' + '</a><a class="et-pb-slider-arrow et-pb-arrow-next" href="#">' + '<span>' + et_pb_custom.next + '</span>' + '</a></div>');

        set_carousel_columns($et_carousel);
        set_carousel_height($et_carousel);

        const $et_carousel_next = $et_carousel.find('.et-pb-arrow-next');
        const $et_carousel_prev = $et_carousel.find('.et-pb-arrow-prev');

        $et_carousel.on('click', '.et-pb-arrow-next', function () {
          if ($et_carousel.et_animation_running) return false;

          $et_carousel.et_carousel_move_to('next');

          return false;
        });

        $et_carousel.on('click', '.et-pb-arrow-prev', function () {
          if ($et_carousel.et_animation_running) return false;

          $et_carousel.et_carousel_move_to('previous');

          return false;
        });

        // swipe support requires et-jquery-touch-mobile
        $et_carousel.on('swipeleft', function () {
          $et_carousel.et_carousel_move_to('next');
        });
        $et_carousel.on('swiperight', function () {
          $et_carousel.et_carousel_move_to('previous');
        });

        function set_carousel_height($the_carousel) {
          var carousel_items_width = $the_carousel_items.width(),
            carousel_items_height = $the_carousel_items.height();

          // Account for borders when needed
          if ($the_carousel.parent().hasClass('et_pb_with_border')) {
            carousel_items_height = $the_carousel_items.outerHeight();
          }
          $carousel_items.css('height', carousel_items_height + 'px');
        }

        function set_carousel_columns($the_carousel) {
          var columns = 3;
          var $carousel_parent = $the_carousel.parents('.et_pb_column:not(".et_pb_specialty_column")');

          if ($carousel_parent.hasClass('et_pb_column_4_4') || $carousel_parent.hasClass('et_pb_column_3_4') || $carousel_parent.hasClass('et_pb_column_2_3')) {
            if ($et_window.width() >= 768) {
              columns = 4;
            }
          } else if ($carousel_parent.hasClass('et_pb_column_1_4')) {
            if ($et_window.width() <= 480 && $et_window.width() >= 980) {
              columns = 2;
            }
          } else if ($carousel_parent.hasClass('et_pb_column_3_5')) {
            columns = 4;
          } else if ($carousel_parent.hasClass('et_pb_column_1_5') || $carousel_parent.hasClass('et_pb_column_1_6')) {
            columns = 2;
          }

          if (columns === $carousel_items.data('portfolio-columns')) {
            return;
          }

          if ($the_carousel.data('columns_setting_up')) {
            return;
          }

          $the_carousel.data('columns_setting_up', true);

          // store last setup column
          $carousel_items.removeClass('columns-' + $carousel_items.data('portfolio-columns'));
          $carousel_items.addClass('columns-' + columns);
          $carousel_items.data('portfolio-columns', columns);

          // kill all previous groups to get ready to re-group
          if ($carousel_items.find('.et-carousel-group').length) {
            $the_carousel_items.appendTo($carousel_items);
            $carousel_items.find('.et-carousel-group').remove();
          }

          // setup the grouping
          var the_carousel_items = $carousel_items.data('items'),
            $carousel_group = $('<div class="et-carousel-group active">').appendTo($carousel_items);

          $the_carousel_items.data('position', '');
          if (the_carousel_items.length <= columns) {
            $carousel_items.find('.et-pb-slider-arrows').hide();
          } else {
            $carousel_items.find('.et-pb-slider-arrows').show();
          }

          for (let position = 1, x = 0; x < the_carousel_items.length; x++, position++) {
            if (x < columns) {
              $(the_carousel_items[x]).show();
              $(the_carousel_items[x]).appendTo($carousel_group);
              $(the_carousel_items[x]).data('position', position);
              $(the_carousel_items[x]).addClass('position_' + position);
            } else {
              position = $(the_carousel_items[x]).data('position');
              $(the_carousel_items[x]).removeClass('position_' + position);
              $(the_carousel_items[x]).data('position', '');
              $(the_carousel_items[x]).hide();
            }
          }

          $the_carousel.data('columns_setting_up', false);

        } /* end set_carousel_columns() */

        $et_carousel.et_carousel_move_to = function (direction) {
          var $active_carousel_group = $carousel_items.find('.et-carousel-group.active'),
            items = $carousel_items.data('items'),
            columns = $carousel_items.data('portfolio-columns');

          $et_carousel.et_animation_running = true;

          var left = 0;
          $active_carousel_group.children().each(function () {
            $(this).css({ position: 'absolute', left: `${left}px` });
            left = left + $(this).outerWidth(true);
          });

          // Avoid unwanted horizontal scroll on body when carousel is slided
          $('body').addClass('et-pb-is-sliding-carousel');

          // Deterimine number of carousel group item
          var carousel_group_item_size = $active_carousel_group.find('.et_pb_carousel_item').length;
          var carousel_group_item_progress = 0;

          if (direction == 'next') {
            var $next_carousel_group,
              current_position = 1,
              next_position = 1,
              active_items_start = items.indexOf($active_carousel_group.children().first()[0]),
              active_items_end = active_items_start + columns,
              next_items_start = active_items_end,
              next_items_end = next_items_start + columns;

            $next_carousel_group = $('<div class="et-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);
            $next_carousel_group.css({ width: `${$active_carousel_group.innerWidth()}px` }).show();

            // this is an endless loop, so it can decide internally when to break out, so that next_position
            // can get filled up, even to the extent of an element having both and current_ and next_ position
            for (let x = 0, total = 0; ; x++, total++) {
              if (total >= active_items_start && total < active_items_end) {
                $(items[x]).addClass('changing_position current_position current_position_' + current_position);
                $(items[x]).data('current_position', current_position);
                current_position++;
              }

              if (total >= next_items_start && total < next_items_end) {
                $(items[x]).data('next_position', next_position);
                $(items[x]).addClass('changing_position next_position next_position_' + next_position);

                if (!$(items[x]).hasClass('current_position')) {
                  $(items[x]).addClass('container_append');
                } else {
                  $(items[x]).clone(true).appendTo($active_carousel_group).hide().addClass('delayed_container_append_dup').attr('id', $(items[x]).attr('id') + '-dup');
                  $(items[x]).addClass('delayed_container_append');
                }

                next_position++;
              }

              if (next_position > columns) {
                break;
              }

              if (x >= (items.length - 1)) {
                x = -1;
              }
            }

            var sorted = $carousel_items.find('.container_append, .delayed_container_append_dup').sort(function (a, b) {
              var el_a_position = parseInt($(a).data('next_position'));
              var el_b_position = parseInt($(b).data('next_position'));
              return (el_a_position < el_b_position) ? -1 : (el_a_position > el_b_position) ? 1 : 0;
            });

            $(sorted).show().appendTo($next_carousel_group);

            var left = 0;
            $next_carousel_group.children().each(function () {
              $(this).css({ position: 'absolute', left: `${left}px` });
              left = left + $(this).outerWidth(true);
            });

            $active_carousel_group.animate({
              left: '-100%'
            }, {
              duration: settings.slide_duration,
              progress: function (animation, progress) {
                if (progress > (carousel_group_item_progress / carousel_group_item_size)) {
                  carousel_group_item_progress++;

                  // Adding classnames on incoming/outcoming carousel item
                  $active_carousel_group.find('.et_pb_carousel_item:nth-child(' + carousel_group_item_progress + ')').addClass('item-fade-out');
                  $next_carousel_group.find('.et_pb_carousel_item:nth-child(' + carousel_group_item_progress + ')').addClass('item-fade-in');
                }
              },
              complete: function () {
                $carousel_items.find('.delayed_container_append').each(function () {
                  left = $('#' + $(this).attr('id') + '-dup').css('left');
                  $(this).css({ 'position': 'absolute', 'left': left });
                  $(this).appendTo($next_carousel_group);
                });

                $active_carousel_group.removeClass('active');
                $active_carousel_group.children().each(function () {
                  let position = $(this).data('position');
                  current_position = $(this).data('current_position');
                  $(this).removeClass('position_' + position + ' ' + 'changing_position current_position current_position_' + current_position);
                  $(this).data('position', '');
                  $(this).data('current_position', '');
                  $(this).hide();
                  $(this).css({ 'position': '', 'left': '' });
                  $(this).appendTo($carousel_items);
                });

                // Removing classnames on incoming/outcoming carousel item
                $carousel_items.find('.item-fade-out').removeClass('item-fade-out');
                $next_carousel_group.find('.item-fade-in').removeClass('item-fade-in');

                // Remove horizontal scroll prevention class name on body
                $('body').removeClass('et-pb-is-sliding-carousel');

                $active_carousel_group.remove();

              }
            });

            const next_left = $active_carousel_group.width() + parseInt($the_carousel_items.first().css('marginRight').slice(0, -2));
            $next_carousel_group.addClass('active').css({ position: 'absolute', top: '0px', left: `${next_left}px` });
            $next_carousel_group.animate({
              left: '0%'
            }, {
              duration: settings.slide_duration,
              complete: function () {
                $next_carousel_group.removeClass('next').addClass('active').css({ 'position': '', 'width': '', 'top': '', 'left': '' });

                $next_carousel_group.find('.changing_position').each(function (index) {
                  let position = $(this).data('position');
                  current_position = $(this).data('current_position');
                  next_position = $(this).data('next_position');
                  $(this).removeClass('container_append delayed_container_append position_' + position + ' ' + 'changing_position current_position current_position_' + current_position + ' next_position next_position_' + next_position);
                  $(this).data('current_position', '');
                  $(this).data('next_position', '');
                  $(this).data('position', (index + 1));
                });

                $next_carousel_group.children().css({ 'position': '', 'left': '' });
                $next_carousel_group.find('.delayed_container_append_dup').remove();

                $et_carousel.et_animation_running = false;
              }
            });

          } else if (direction == 'previous') {
            var $prev_carousel_group,
              current_position = columns,
              prev_position = columns,
              columns_span = columns - 1,
              active_items_start = items.indexOf($active_carousel_group.children().last()[0]),
              active_items_end = active_items_start - columns_span,
              prev_items_start = active_items_end - 1,
              prev_items_end = prev_items_start - columns_span;

            $prev_carousel_group = $('<div class="et-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);
            $prev_carousel_group.css({ left: `-${$active_carousel_group.innerWidth()}px`, width: `${$active_carousel_group.innerWidth()}px` }).show();

            // this is an endless loop, so it can decide internally when to break out, so that next_position
            // can get filled up, even to the extent of an element having both and current_ and next_ position
            for (let x = (items.length - 1), total = (items.length - 1); ; x--, total--) {
              if (total <= active_items_start && total >= active_items_end) {
                $(items[x]).addClass('changing_position current_position current_position_' + current_position);
                $(items[x]).data('current_position', current_position);
                current_position--;
              }

              if (total <= prev_items_start && total >= prev_items_end) {
                $(items[x]).data('prev_position', prev_position);
                $(items[x]).addClass('changing_position prev_position prev_position_' + prev_position);

                if (!$(items[x]).hasClass('current_position')) {
                  $(items[x]).addClass('container_append');
                } else {
                  $(items[x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup').attr('id', $(items[x]).attr('id') + '-dup');
                  $(items[x]).addClass('delayed_container_append');
                }

                prev_position--;
              }

              if (prev_position <= 0) {
                break;
              }

              if (x == 0) {
                x = items.length;
              }
            }

            var sorted = $carousel_items.find('.container_append, .delayed_container_append_dup').sort(function (a, b) {
              var el_a_position = parseInt($(a).data('prev_position'));
              var el_b_position = parseInt($(b).data('prev_position'));
              return (el_a_position < el_b_position) ? -1 : (el_a_position > el_b_position) ? 1 : 0;
            });

            $(sorted).show().appendTo($prev_carousel_group);

            var left = 0;
            $prev_carousel_group.children().each(function () {
              $(this).css({ position: 'absolute', left: `${left}px` });
              left = left + $(this).outerWidth(true);
            });

            $active_carousel_group.animate({
              left: '100%'
            }, {
              duration: settings.slide_duration,
              progress: function (animation, progress) {
                if (progress > (carousel_group_item_progress / carousel_group_item_size)) {

                  var group_item_nth = carousel_group_item_size - carousel_group_item_progress;

                  // Add fadeIn / fadeOut className to incoming/outcoming carousel item
                  $active_carousel_group.find('.et_pb_carousel_item:nth-child(' + group_item_nth + ')').addClass('item-fade-out');
                  $prev_carousel_group.find('.et_pb_carousel_item:nth-child(' + group_item_nth + ')').addClass('item-fade-in');

                  carousel_group_item_progress++;
                }
              },
              complete: function () {
                $carousel_items.find('.delayed_container_append').reverse().each(function () {
                  left = $('#' + $(this).attr('id') + '-dup').css('left');
                  $(this).css({ 'position': 'absolute', 'left': left });
                  $(this).prependTo($prev_carousel_group);
                });

                $active_carousel_group.removeClass('active');
                $active_carousel_group.children().each(function () {
                  let position = $(this).data('position');
                  current_position = $(this).data('current_position');
                  $(this).removeClass('position_' + position + ' ' + 'changing_position current_position current_position_' + current_position);
                  $(this).data('position', '');
                  $(this).data('current_position', '');
                  $(this).hide();
                  $(this).css({ 'position': '', 'left': '' });
                  $(this).appendTo($carousel_items);
                });

                // Removing classnames on incoming/outcoming carousel item
                $carousel_items.find('.item-fade-out').removeClass('item-fade-out');
                $prev_carousel_group.find('.item-fade-in').removeClass('item-fade-in');

                // Remove horizontal scroll prevention class name on body
                $('body').removeClass('et-pb-is-sliding-carousel');

                $active_carousel_group.remove();
              }
            });

            const prev_left = (-1) * $active_carousel_group.width() - parseInt($the_carousel_items.first().css('marginRight').slice(0, -2));
            $prev_carousel_group.addClass('active').css({ position: 'absolute', top: '0px', left: `${prev_left}px` });
            $prev_carousel_group.animate({
              left: '0%'
            }, {
              duration: settings.slide_duration,
              complete: function () {
                $prev_carousel_group.removeClass('prev').addClass('active').css({ 'position': '', 'width': '', 'top': '', 'left': '' });

                $prev_carousel_group.find('.delayed_container_append_dup').remove();

                $prev_carousel_group.find('.changing_position').each(function (index) {
                  let position = $(this).data('position');
                  current_position = $(this).data('current_position');
                  prev_position = $(this).data('prev_position');
                  $(this).removeClass('container_append delayed_container_append position_' + position + ' ' + 'changing_position current_position current_position_' + current_position + ' prev_position prev_position_' + prev_position);
                  $(this).data('current_position', '');
                  $(this).data('prev_position', '');
                  position = index + 1;
                  $(this).data('position', position);
                  $(this).addClass('position_' + position);
                });

                $prev_carousel_group.children().css({ 'position': '', 'left': '' });
                $et_carousel.et_animation_running = false;
              }
            });
          }
        }
      };

      $.fn.et_pb_simple_carousel = function (options) {
        return this.each(function () {
          var carousel = $.data(this, 'et_pb_simple_carousel');
          return carousel ? carousel : new $.et_pb_simple_carousel(this, options);
        });
      };

      if ($et_pb_carousel.length || isBuilder) {
        $et_pb_carousel.each(function () {
          var $this_carousel = $(this),
            et_carousel_settings = {
              slide_duration: 1000
            };

          $this_carousel.et_pb_simple_carousel(et_carousel_settings);
        });
      }

      /**
       * Provide event listener for plugins to hook up to.
       */
      $(document).trigger('et_pb_after_init_modules');
    });
  });

  // Wrapped in a function to prevent `window.et_pb_init_modules is not a function`
  window.et_pb_init_modules = function () {
    $(window).trigger('et_pb_init_modules');
  };

  /**
   * Returns an offset to be used for waypoints.
   *
   * @param  {element} element  The element being passed.
   * @param  {string} fallback String of either pixels or percent.
   * @returns {string}          Returns either the fallback or 'bottom-in-view'.
   */
  window.et_get_offset = function (element, fallback) {
    // cache things so we can test.
    const section_index = element.parents('.et_pb_section').index();
    const section_length = $('.et_pb_section').length - 1;
    const row_index = element.parents('.et_pb_row').index();
    const row_length = element.parents('.et_pb_section').children().length - 1;

    // return bottom-in-view if it is the last element otherwise return the user defined fallback
    if (section_index===section_length && row_index===row_length) {
      return 'bottom-in-view';
    }
    return fallback;
  }

  window.et_reinit_waypoint_ab_test = et_pb_debounce(() => {
    // if waypoint is available and we are not ignoring them.
    if ($.fn.waypoint && window.et_pb_custom && 'yes'!==window.et_pb_custom.ignore_waypoints && !isBuilder) {
      if ('undefined'!== typeof et_process_animation_data) {
        window.et_process_animation_data(true);
      }

      // get all of our waypoint things.
      const modules = $('.et-waypoint');
      modules.each(function () {
        window.et_waypoint($(this), {
          offset: et_get_offset($(this), '100%'),
          handler() {
            // what actually triggers the animation.
            $(this.element).addClass('et-animated');
          },
        }, 2);
      });

      // Set waypoint for goal module.
      if (!isBuilder) {
        $.each(et_pb_custom.ab_tests, function (index, test) {
          const $et_pb_ab_goal = et_builder_ab_get_goal_node(test.post_id);

          if (0===$et_pb_ab_goal.length) {
            return true;
          }

          window.et_waypoint($et_pb_ab_goal, {
            offset: et_get_offset($(this), '80%'),
            handler() {
              if (et_pb_ab_logged_status[test.post_id].read_goal || !$et_pb_ab_goal.length || !$et_pb_ab_goal.visible(true)) {
                return;
              }

              // log the goal_read if goal is still visible after 3 seconds.
              setTimeout(() => {
                if ($et_pb_ab_goal.length && $et_pb_ab_goal.visible(true) && !et_pb_ab_logged_status[test.post_id].read_goal) {
                  et_pb_ab_update_stats('read_goal', test.post_id, undefined, test.test_id);
                }
              }, 3000);

              et_pb_maybe_log_event($et_pb_ab_goal, 'view_goal');
            },
          });
        });
      }
    } else {
      // if no waypoints supported then apply all the animations right away
      if ('undefined'!== typeof et_process_animation_data) {
        window.et_process_animation_data(false);
      }
      const animated_class = isBuilder ? 'et-animated--vb':'et-animated';

      $('.et-waypoint').addClass(animated_class);

      // While in the builder, trigger all animations instantly as otherwise
      // TB layouts that are displayed but are not the currently edited post
      // will have their animated modules invisible due to .et-waypoint.
      $('.et-waypoint').each(function () {
        window.et_animate_element($(this));
      });

      // log the stats without waypoints
      $.each(et_pb_custom.ab_tests, (index, test) => {
        const $et_pb_ab_goal = et_builder_ab_get_goal_node(test.post_id);

        if (0===$et_pb_ab_goal.length) {
          return true;
        }

        if (et_pb_ab_logged_status[test.post_id].read_goal || !$et_pb_ab_goal.length || !$et_pb_ab_goal.visible(true)) {
          return true;
        }

        // log the goal_read if goal is still visible after 3 seconds.
        setTimeout(() => {
          if ($et_pb_ab_goal.length && $et_pb_ab_goal.visible(true) && !et_pb_ab_logged_status[test.post_id].read_goal) {
            et_pb_ab_update_stats('read_goal', test.post_id, undefined, test.test_id);
          }
        }, 3000);

        et_pb_maybe_log_event($et_pb_ab_goal, 'view_goal');
      });
    } // End checking of waypoints.
  }, 100);
  window.et_reinit_waypoint_ab_test();

  /**
   * Fix unwanted divider spacing (mostly in webkit) when svg image is repeated and the actual
   * svg image dimension width is in decimal.
   *
   * @since 4.0.10
   *
   * @param {object} $divider JQuery object of `.et_pb_top_inside_divider` or `.et_pb_bottom_inside_divider`.
   */
  window.etFixDividerSpacing = function($divider) {
    // Clear current inline style first so builder's outputted css is retrieved
    $divider.attr('style', '');

    // Get divider variables
    const backgroundSize = $divider.css('backgroundSize').split(' ');
    const horizontalSize = backgroundSize[0];
    const verticalSize   = backgroundSize[1];
    const hasValidSizes  = 'string' === typeof horizontalSize && 'string' === typeof verticalSize;

    // Is not having default value + using percentage based value
    if (hasValidSizes && '100%' !== horizontalSize && '%' === horizontalSize.substr(- 1, 1)) {
      const dividerWidth     = parseFloat($divider.outerWidth());
      const imageWidth       = (parseFloat(horizontalSize) / 100) * dividerWidth;
      const backgroundSizePx = `${parseInt(imageWidth)}px ${verticalSize}`;

      $divider.css('backgroundSize', backgroundSizePx);
    }
  };

  if (window.et_pb_custom && window.et_pb_custom.is_ab_testing_active && 'yes' === window.et_pb_custom.is_cache_plugin_active) {
    // update the window.et_load_event_fired variable to initiate the scripts properly
    $(window).on('load', () => {
      window.et_load_event_fired = true;
    });

    let pendingRequests = et_pb_custom.ab_tests.length;

    $.each(et_pb_custom.ab_tests, (index, test) => {
      // get the subject id for current visitor and display it
      // this ajax request performed only if AB Testing is enabled and cache plugin active
      $.ajax({
        type: 'POST',
        url: et_pb_custom.ajaxurl,
        dataType: 'json',
        data: {
          action: 'et_pb_ab_get_subject_id',
          et_frontend_nonce: et_pb_custom.et_frontend_nonce,
          et_pb_ab_test_id: test.post_id,
        },
        success(subject_data) {
          if (subject_data) {
            // Append the subject content to appropriate placeholder.
            const $placeholder = $(`.et_pb_subject_placeholder_id_${test.post_id}_${subject_data.id}`);
            $placeholder.after(subject_data.content);
            $placeholder.remove();
          }

          pendingRequests -= 1;

          if (pendingRequests <= 0) {
            // remove all other placeholders from the DOM
            $('.et_pb_subject_placeholder').remove();

            // init all scripts once the subject loaded
            window.et_pb_init_modules();
            $('body').trigger('et_pb_ab_subject_ready');
          }
        },
      });
    });
  } else {
    window.et_pb_init_modules();
  }

  /**
   * Fix anchor scrolling to position.
   *
   * @since 4.6.6
   */
   function et_pb_fix_scroll_to_anchor_position() {
      window.et_location_hash = window.location.hash.replace(/[^a-zA-Z0-9-_#]/g, '');

      if ('' === window.et_location_hash) {
         return;
      }

      // Prevent jump to anchor - Firefox
      window.scrollTo(0, 0);

      const anchoredElement = $(window.et_location_hash);

      if (!anchoredElement.length) {
         return;
      }

      // bypass auto scrolling, if supported
      if ('scrollRestoration' in history) {
         history.scrollRestoration = 'manual';
      } else {
         // Prevent jump to anchor - Other Browsers
         window.et_location_hash_style = anchoredElement.css('display');
         anchoredElement.css('display', 'none');
      }
   }

  document.addEventListener('DOMContentLoaded', () => {
    // Enable alternative scroll to anchor method only for Divi and Extra.
    if (isDiviTheme || isExtraTheme) {
      et_pb_fix_scroll_to_anchor_position();
    }

    // Hover transition are disabled for section dividers to prevent visual glitches while document is loading,
    // we can enable them again now. Also, execute unwanted divider spacing
    $('.et_pb_top_inside_divider.et-no-transition, .et_pb_bottom_inside_divider.et-no-transition').removeClass('et-no-transition').each(function() {
      etFixDividerSpacing($(this));
    });

    // Set a delay just to make sure all modules are ready before we append box shadow container.
    // Similar approach exists on VB custom CSS output.
    setTimeout(() => {
      (window.et_pb_box_shadow_elements || []).map(et_pb_box_shadow_apply_overlay);
    }, 0);
  });

  $(window).on('load', () => {
    const $body = $('body');

    // set load event here because safari sometimes will not run load events registered on et_pb_init_modules.
    window.et_load_event_fired = true;

    // fix Safari letter-spacing bug when styles applied in `head`
    // Trigger styles redraw by changing body display property to differentvalue and reverting it back to original.
    if ($body.hasClass('safari')) {
      const original_display_value  = $body.css('display');
      const different_display_value = 'initial' === original_display_value ? 'block' : 'initial';

      $body.css({ display: different_display_value });

      setTimeout(() => {
        $body.css({ display: original_display_value });
      }, 0);

      // Keep this script here, as it needs to be executed only if the script from above is executed
      // As the script from above somehow affects WooCommerce single product image rendering.
      // https://github.com/elegantthemes/Divi/issues/7454
      if ($body.hasClass('woocommerce-page') && $body.hasClass('single-product')) {
        const $wc = $('.woocommerce div.product div.images.woocommerce-product-gallery');

        if (0 === $wc.length) {
          return;
        }

        // Don't use jQuery to get element opacity, as it may return an outdated value.
        const opacity = parseInt($wc[0].style.opacity);

        if (! opacity) {
          return;
        }

        $wc.css({ opacity: opacity - 0.09 });
        setTimeout(() => {
          $wc.css({ opacity });
        }, 0);
      }
    }

    // Reinit Star Ratings in Woo Modules.
    // Deafuilt Woocommerce scripts do not init Star Ratings correctly
    // if there are more than 1 place with stars on page
    // Run this on .load event after woocommerce modules are ready and processed.
    if ($('.et_pb_module #rating, .et_pb_module .comment-form-rating').length > 0) {
      $('.et_pb_module #rating, .et_pb_module .comment-form-rating').each(function() {
        window.et_pb_init_woo_star_rating($(this));
      });
    }

    // Apply Custom icons to Woo Module Buttons.
    // All the buttons generated in WooCommerce template and we cannot add custom attributes
    // Therefore we have to use js to add it.
    if ($('.et_pb_woo_custom_button_icon').length > 0) {
      $('.et_pb_woo_custom_button_icon').each(function() {
        const $thisModule      = $(this);
        const buttonClass      = $thisModule.data('button-class');
        const $buttonEl        = $thisModule.find(`.${buttonClass}`);
        const buttonIcon       = $thisModule.attr('data-button-icon');
        const buttonIconTablet = $thisModule.attr('data-button-icon-tablet');
        const buttonIconPhone  = $thisModule.attr('data-button-icon-phone');
        const buttonClassName  = 'et_pb_promo_button et_pb_button';

        $buttonEl.addClass(buttonClassName);

        if (buttonIcon || buttonIconTablet || buttonIconPhone) {
          $buttonEl.addClass('et_pb_custom_button_icon');
          $buttonEl.attr('data-icon', buttonIcon);
          $buttonEl.attr('data-icon-tablet', buttonIconTablet);
          $buttonEl.attr('data-icon-phone', buttonIconPhone);
        }
      });
    }

    /**
     * Hide empty WooCommerce Meta module
     * Meta module component is toggled using classname, thus js visibility check to determine
     * whether the module is "empty" (visibility-wise) or not.
     */
    if ($('.et_pb_wc_meta').length > 0) {
      $('.et_pb_wc_meta').each(function() {
        const $thisModule = $(this);

        if ('' === $thisModule.find('.product_meta span:visible').text()) {
          $thisModule.addClass('et_pb_wc_meta_empty');
        }
      });
    }
  });

  // Handle cases where builder modules are not initially visible and produce sizing
  // issues as a result (e.g. slider module inside popups, accordions etc.).
  $(() => {
    if (MutationObserver === undefined) {
      // Bail if MutationObserver is not supported by the user agent.
      return;
    }

    const getSectionParents = function($sections) {
      const filterMethod  = $.uniqueSort !== undefined ? $.uniqueSort : $.unique;
      let $sectionParents = $([]);

      $sections.each(function() {
        $sectionParents = $sectionParents.add($(this).parents());
      });

      // Avoid duplicate section parents.
      return filterMethod($sectionParents.get());
    };

    const getInvisibleNodes = function($sections) {
      return $sections.filter(function() {
        return ! $(this).is(':visible');
      }).length;
    };

    const $sections            = $('.et_pb_section');
    const sectionParents       = getSectionParents($sections);
    let invisibleSections      = getInvisibleNodes($sections);
    const maybeRefreshSections = function() {
      const newInvisibleSections = getInvisibleNodes($sections);
      if (newInvisibleSections < invisibleSections) {
        // Trigger resize if some previously invisible sections have become visible.
        $(window).trigger('resize');
      }
      invisibleSections = newInvisibleSections;
    };
    const observer = new MutationObserver(window.et_pb_debounce(maybeRefreshSections, 200));

    for (let i = 0; i < sectionParents.length; i++) {
      observer.observe(sectionParents[i], {
        childList: true,
        attributes: true,
        attributeFilter: ['class', 'style'],
        attributeOldValue: false,
        characterData: false,
        characterDataOldValue: false,
        subtree: false,
      });
    }
  });

  function et_fix_html_margin() {
    // Calculate admin bar height and apply correct margin to HTML in VB
    if ($('body').is('.et-fb')) {
      const $adminBar = $('#wpadminbar');

      if ($adminBar.length > 0) {
        setTimeout(() => {
          $('#et_fix_html_margin').remove();

          $('<style />', {
            id: 'et_fix_html_margin',
            text: 'html.js.et-fb-top-html { margin-top: 0px !important; }',
          }).appendTo('head');
        }, 0);
      }
    }
  }
  et_fix_html_margin();

  // Muti View Data Handler (Responsive + Hover)
  var et_multi_view = {
    contexts: ['content', 'attrs', 'styles', 'classes', 'visibility'],
    screenMode: undefined,
    windowWidth: undefined,
    init(screenMode, windowWidth) {
      et_multi_view.screenMode = screenMode;
      et_multi_view.windowWidth = windowWidth;

      $('.et_multi_view__hover_selector').removeClass('et_multi_view__hover_selector');


      et_multi_view.getElements().each(function() {
        const $multiView = $(this);

        // Skip for builder element
        if (et_multi_view.isBuilderElement($multiView)) {
          return;
        }

        const data = et_multi_view.getData($multiView);

        if (data.$hoverSelector && data.$hoverSelector.length) {
          data.$hoverSelector.addClass('et_multi_view__hover_selector');
        }

        et_multi_view.normalStateHandler(data);
      });

      if (et_multi_view.isTouchDevice()) {
        window.removeEventListener('touchstart', et_multi_view.touchStateHandler);
        window.addEventListener('touchstart', et_multi_view.touchStateHandler, { passive: false });
      } else {
        $('.et_multi_view__hover_selector').off('mouseenter mouseleave', et_multi_view.hoverStateHandler);
        $('.et_multi_view__hover_selector').on('mouseenter mouseleave', et_multi_view.hoverStateHandler);

        $('#main-header, #main-footer').off('mouseenter', et_multi_view.resetHoverState);
        $('#main-header, #main-footer').on('mouseenter', et_multi_view.resetHoverState);
      }
    },
    normalStateHandler(data) {
      if (! data || et_multi_view.isEmptyObject(data.normalState)) {
        return;
      }

      et_multi_view.callbackHandlerDefault(data.normalState, data.$target, data.$source, data.slug);
    },
    touchStateHandler(event) {
      let $hoverSelector = $(event.target);

      if (! $(event.target).hasClass('et_multi_view__hover_selector')) {
        $hoverSelector = $(event.target).closest('.et_multi_view__hover_selector');
      }

      // Bail early if no hover selector found.
      if (! $hoverSelector || ! $hoverSelector.length) {
        return;
      }

      const $link = $(event.target).is('a') ? $(event.target) : $(event.target).closest('a', $hoverSelector);

      // Bail early if clicked element is a link or child element of link.
      if ($link && $link.length) {
        var linkHref = $link.attr('href');

        if (linkHref !== '#' && linkHref.indexOf('#') === 0 && $(linkHref) && $(linkHref).length) {
          event.preventDefault();

          $('html, body').animate({
            scrollTop: $(linkHref).offset().top
          }, 800);
        }

        return;
      }

      if ($hoverSelector.hasClass('et_multi_view__hovered')) {
        et_multi_view.resetHoverState($hoverSelector, function() {
          if ($hoverSelector.hasClass('et_clickable')) {
            $hoverSelector.trigger('click');
          }
        });
      } else {
        et_multi_view.setHoverState($hoverSelector, function() {
          if ($hoverSelector.hasClass('et_clickable')) {
            $hoverSelector.trigger('click');
          }
        });
      }
    },
    hoverStateHandler(event) {
      let $hoverSelector = $(event.target);

      if (! $(event.target).hasClass('et_multi_view__hover_selector')) {
        $hoverSelector = $(event.target).closest('.et_multi_view__hover_selector');
      }

      if ('mouseenter' === event.type && ! $hoverSelector.hasClass('et_multi_view__hovered')) {
        et_multi_view.setHoverState($hoverSelector);
      } else if ('mouseleave' === event.type && $hoverSelector.hasClass('et_multi_view__hovered')) {
        et_multi_view.resetHoverState($hoverSelector);
      }
    },
    setHoverState($hoverSelector, callback) {
      et_multi_view.resetHoverState();

      const datas = [];

      if ($hoverSelector.data('etMultiView')) {
        datas.push(et_multi_view.getData($hoverSelector));
      }

      $hoverSelector.find('[data-et-multi-view]').each(function() {
        const $multiView = $(this);

        // Skip for builder element
        if (et_multi_view.isBuilderElement($multiView)) {
          return;
        }

        datas.push(et_multi_view.getData($multiView));
      });

      for (let index = 0; index < datas.length; index++) {
        const data = datas[index];

        if (data && ! et_multi_view.isEmptyObject(data.normalState) && ! et_multi_view.isEmptyObject(data.hoverState)) {
          et_multi_view.callbackHandlerDefault(data.hoverState, data.$target, data.$source, data.slug);
        }
      }

      $hoverSelector.addClass('et_multi_view__hovered');

      if ('function' === typeof callback) {
        callback();
      }
    },
    resetHoverState($hoverSelector, callback) {
      const datas = [];

      if ($hoverSelector && $hoverSelector.length) {
        if ($hoverSelector.data('etMultiView')) {
          datas.push(et_multi_view.getData($hoverSelector));
        }

        $hoverSelector.find('[data-et-multi-view]').each(function() {
          const $multiView = $(this);

          // Skip for builder element
          if (et_multi_view.isBuilderElement($multiView)) {
            return;
          }

          datas.push(et_multi_view.getData($multiView));
        });
      } else {
        et_multi_view.getElements().each(function() {
          const $multiView = $(this);

          // Skip for builder element
          if (et_multi_view.isBuilderElement($multiView)) {
            return;
          }

          datas.push(et_multi_view.getData($multiView));
        });
      }

      for (let index = 0; index < datas.length; index++) {
        const data = datas[index];

        if (data && ! et_multi_view.isEmptyObject(data.normalState) && ! et_multi_view.isEmptyObject(data.hoverState)) {
          et_multi_view.callbackHandlerDefault(data.normalState, data.$target, data.$source, data.slug);
        }
      }

      $('.et_multi_view__hover_selector').removeClass('et_multi_view__hovered');

      if ('function' === typeof callback) {
        callback();
      }
    },
    getData($source) {
      if (! $source || ! $source.length) {
        return false;
      }

      const screenMode = et_multi_view.getScreenMode();
      let data         = $source.data('etMultiView');

      if (! data) {
        return false;
      }

      if ('string' === typeof data) {
        data = et_multi_view.tryParseJSON(data);
      }

      if (! data || ! data.schema || ! data.slug) {
        return false;
      }

      const $target = data.target ? $(data.target) : $source;

      if (! $target || ! $target.length) {
        return false;
      }

      const normalState = {};
      const hoverState  = {};

      for (let i = 0; i < et_multi_view.contexts.length; i++) {
        const context = et_multi_view.contexts[i];

        // Set context data.
        if (data.schema && data.schema.hasOwnProperty(context)) {
          // Set normal state context data.
          if (data.schema[context].hasOwnProperty(screenMode)) {
            normalState[context] = data.schema[context][screenMode];
          } else if ('tablet' === screenMode && data.schema[context].hasOwnProperty('desktop')) {
            normalState[context] = data.schema[context].desktop;
          } else if ('phone' === screenMode && data.schema[context].hasOwnProperty('tablet')) {
            normalState[context] = data.schema[context].tablet;
          } else if ('phone' === screenMode && data.schema[context].hasOwnProperty('desktop')) {
            normalState[context] = data.schema[context].desktop;
          }

          // Set hover state context data.
          if (data.schema[context].hasOwnProperty('hover')) {
            hoverState[context] = data.schema[context].hover;
          }
        }
      }

      let $hoverSelector = data.hover_selector ? $(data.hover_selector) : false;

      if (! $hoverSelector || ! $hoverSelector.length) {
        $hoverSelector = $source.hasClass('.et_pb_module') ? $source : $source.closest('.et_pb_module');
      }

      return {
        normalState,
        hoverState,
        $target,
        $source,
        $hoverSelector,
        slug: data.slug,
        screenMode,
      };
    },
    callbackHandlerDefault(data, $target, $source, slug) {
      if (slug) {
        const callbackHandlerCustom = et_multi_view.getCallbackHandlerCustom(slug);

        if (callbackHandlerCustom && 'function' === typeof callbackHandlerCustom) {
          return callbackHandlerCustom(data, $target, $source, slug);
        }
      }

      const updated = {};

      if (data.hasOwnProperty('content')) {
        updated.content = et_multi_view.updateContent(data.content, $target, $source);
      }

      if (data.hasOwnProperty('attrs')) {
        updated.attrs = et_multi_view.updateAttrs(data.attrs, $target, $source);
      }

      if (data.hasOwnProperty('styles')) {
        updated.styles = et_multi_view.updateStyles(data.styles, $target, $source);
      }

      if (data.hasOwnProperty('classes')) {
        updated.classes = et_multi_view.updateClasses(data.classes, $target, $source);
      }

      if (data.hasOwnProperty('visibility')) {
        updated.visibility = et_multi_view.updateVisibility(data.visibility, $target, $source);
      }

      return et_multi_view.isEmptyObject(updated) ? false : updated;
    },
    callbackHandlerCounter(data, $target, $source) {
      const updated = et_multi_view.callbackHandlerDefault(data, $target, $source);

      if (updated && updated.attrs && updated.attrs.hasOwnProperty('data-width')) {
        window.et_bar_counters_init($target);
      }
    },
    callbackHandlerNumberCounter(data, $target, $source) {
      if ($target.hasClass('title')) {
        return et_multi_view.callbackHandlerDefault(data, $target, $source);
      }

      const attrs = data.attrs || false;

      if (! attrs) {
        return;
      }

      if (attrs.hasOwnProperty('data-percent-sign')) {
        et_multi_view.updateContent(attrs['data-percent-sign'], $target.find('.percent-sign'), $source);
      }

      if (attrs.hasOwnProperty('data-number-value')) {
        const $the_counter    = $target.closest('.et_pb_number_counter');
        const numberValue     = attrs['data-number-value'] || 50;
        const numberSeparator = attrs['data-number-separator'] || '';

        const updated = et_multi_view.updateAttrs({
          'data-number-value': numberValue,
          'data-number-separator': numberSeparator,
        }, $the_counter, $source);

        if (updated && $the_counter.data('easyPieChart')) {
          $the_counter.data('easyPieChart').update(numberValue);
        }
      }
    },
    callbackHandlerCircleCounter(data, $target, $source) {
      if (! $target.hasClass('et_pb_circle_counter_inner')) {
        return et_multi_view.callbackHandlerDefault(data, $target, $source);
      }

      const attrs = data.attrs || false;

      if (! attrs) {
        return;
      }

      if (attrs.hasOwnProperty('data-percent-sign')) {
        et_multi_view.updateContent(attrs['data-percent-sign'], $target.find('.percent-sign'), $source);
      }

      if (attrs.hasOwnProperty('data-number-value')) {
        const $the_counter = $target.closest('.et_pb_circle_counter_inner');
        const numberValue  = attrs['data-number-value'];

        const attrsUpdated = et_multi_view.updateAttrs({
          'data-number-value': numberValue,
        }, $the_counter, $source);

        if (attrsUpdated && $the_counter.data('easyPieChart')) {
          window.et_pb_circle_counter_init($the_counter);
          $the_counter.data('easyPieChart').update(numberValue);
        }
      }
    },
    callbackHandlerSlider(data, $target, $source) {
      const updated = et_multi_view.callbackHandlerDefault(data, $target, $source);

      if ($target.hasClass('et_pb_module') && updated && updated.classes) {
        if (updated.classes.add && updated.classes.add.indexOf('et_pb_slider_no_arrows') !== - 1) {
          $target.find('.et-pb-slider-arrows').addClass('et_multi_view_hidden');
        }

        if (updated.classes.remove && updated.classes.remove.indexOf('et_pb_slider_no_arrows') !== - 1) {
          $target.find('.et-pb-slider-arrows').removeClass('et_multi_view_hidden');
        }

        if (updated.classes.add && updated.classes.add.indexOf('et_pb_slider_no_pagination') !== - 1) {
          $target.find('.et-pb-controllers').addClass('et_multi_view_hidden');
        }

        if (updated.classes.remove && updated.classes.remove.indexOf('et_pb_slider_no_pagination') !== - 1) {
          $target.find('.et-pb-controllers').removeClass('et_multi_view_hidden');
        }
      }
    },
    callbackHandlerPostSlider(data, $target, $source) {
      const updated = et_multi_view.callbackHandlerDefault(data, $target, $source);

      if ($target.hasClass('et_pb_module') && updated && updated.classes) {
        if (updated.classes.add && updated.classes.add.indexOf('et_pb_slider_no_arrows') !== - 1) {
          $target.find('.et-pb-slider-arrows').addClass('et_multi_view_hidden');
        }

        if (updated.classes.remove && updated.classes.remove.indexOf('et_pb_slider_no_arrows') !== - 1) {
          $target.find('.et-pb-slider-arrows').removeClass('et_multi_view_hidden');
        }

        if (updated.classes.add && updated.classes.add.indexOf('et_pb_slider_no_pagination') !== - 1) {
          $target.find('.et-pb-controllers').addClass('et_multi_view_hidden');
        }

        if (updated.classes.remove && updated.classes.remove.indexOf('et_pb_slider_no_pagination') !== - 1) {
          $target.find('.et-pb-controllers').removeClass('et_multi_view_hidden');
        }
      }
    },
    callbackHandlerVideoSlider(data, $target, $source) {
      const updated = et_multi_view.callbackHandlerDefault(data, $target, $source);

      if ($target.hasClass('et_pb_slider') && updated && updated.classes) {
        if (updated.classes.add && updated.classes.add.indexOf('et_pb_slider_no_arrows') !== - 1) {
          $target.find('.et-pb-slider-arrows').addClass('et_multi_view_hidden');
        }

        if (updated.classes.remove && updated.classes.remove.indexOf('et_pb_slider_no_arrows') !== - 1) {
          $target.find('.et-pb-slider-arrows').removeClass('et_multi_view_hidden');
        }

        const isInitSlider = function() {
          if (updated.classes.add && updated.classes.add.indexOf('et_pb_slider_dots') !== - 1) {
            return 'et_pb_slider_dots';
          }

          if (updated.classes.add && updated.classes.add.indexOf('et_pb_slider_carousel') !== - 1) {
            return 'et_pb_slider_carousel';
          }

          return false;
        };

        const sliderControl = isInitSlider();

        if (sliderControl) {
          const sliderApi = $target.data('et_pb_simple_slider');

          if ('object' === typeof sliderApi) {
            sliderApi.et_slider_destroy();
          }

          et_pb_slider_init($target);

          if ('et_pb_slider_carousel' === sliderControl) {
            $target.siblings('.et_pb_carousel').et_pb_simple_carousel({
              slide_duration: 1000,
            });
          }
        }
      }
    },
    callbackHandlerSliderItem(data, $target, $source) {
      if (! $target.hasClass('et_pb_slide_video') && ! $target.is('img')) {
        return et_multi_view.callbackHandlerDefault(data, $target, $source);
      }

      if ($target.hasClass('et_pb_slide_video')) {
        const $contentNew = data && data.content ? $(data.content) : false;
        const $contentOld = $target.html().indexOf('fluid-width-video-wrapper') !== - 1
          ? $($target.find('.fluid-width-video-wrapper').html())
          : $($target.html());

        if (! $contentNew || ! $contentOld) {
          return;
        }
        var updated = false;

        if ($contentNew.hasClass('wp-video') && $contentOld.hasClass('wp-video')) {
          const isVideoNeedUpdate = function() {
            if ($contentNew.find('source').length !== $contentOld.find('source').length) {
              return true;
            }

            let isDifferentAttr = false;

            $contentNew.find('source').each(function(index) {
              const $contentOldSource = $contentOld.find('source').eq(index);

              if ($(this).attr('src') !== $contentOldSource.attr('src')) {
                isDifferentAttr = true;
              }
            });

            return isDifferentAttr;
          };

          if (isVideoNeedUpdate()) {
            updated = et_multi_view.callbackHandlerDefault(data, $target, $source);
          }
        } else if ($contentNew.is('iframe') && $contentOld.is('iframe') && $contentNew.attr('src') !== $contentOld.attr('src')) {
          updated = et_multi_view.callbackHandlerDefault(data, $target, $source);
        } else if (($contentNew.hasClass('wp-video') && $contentOld.is('iframe')) || ($contentNew.is('iframe') && $contentOld.hasClass('wp-video'))) {
          updated = et_multi_view.callbackHandlerDefault(data, $target, $source);
        }

        if (updated && updated.content) {
          if ($contentNew.is('iframe')) {
            $target.closest('.et_pb_module').fitVids();
          } else {
            const videoWidth          = $contentNew.find('video').attr('width');
            const videoHeight         = $contentNew.find('video').attr('height');
            const videContainerWidth  = $target.width();
            const videContainerHeight = (videContainerWidth / videoWidth) * videoHeight;

            $target.find('video').mediaelementplayer({
              videoWidth: parseInt(videContainerWidth),
              videoHeight: parseInt(videContainerHeight),
              autosizeProgress: false,
              success(mediaElement, domObject) {
                const $domObject     = $(domObject);
                const videoMarginTop = (videContainerHeight - $domObject.height()) + $(mediaElement).height();

                $domObject.css('margin-top', `${videoMarginTop}px`);
              },
            });
          }
        }
      } else if ($target.is('img')) {
        var updated = et_multi_view.callbackHandlerDefault(data, $target, $source);

        if (updated && updated.attrs && updated.attrs.src) {
          const $slider = $target.closest('.et_pb_module');

          $target.css('visibility', 'hidden');

          et_fix_slider_height($slider);

          setTimeout(() => {
            et_fix_slider_height($slider);
            $target.css('visibility', 'visible');
          }, 100);
        }
      }
    },
    callbackHandlerVideo(data, $target, $source) {
      if ($target.hasClass('et_pb_video_overlay')) {
        return et_multi_view.callbackHandlerDefault(data, $target, $source);
      }

      let updated = false;

      const $contentNew = data && data.content ? $(data.content) : false;
      const $contentOld = $target.html().indexOf('fluid-width-video-wrapper') !== - 1
        ? $($target.find('.fluid-width-video-wrapper').html())
        : $($target.html());

      if (! $contentNew || ! $contentOld) {
        return;
      }

      if ($contentNew.is('video') && $contentOld.is('video')) {
        const isVideoNeedUpdate = function() {
          if ($contentNew.find('source').length !== $contentOld.find('source').length) {
            return true;
          }

          let isDifferentAttr = false;

          $contentNew.find('source').each(function(index) {
            const $contentOldSource = $contentOld.find('source').eq(index);

            if ($(this).attr('src') !== $contentOldSource.attr('src')) {
              isDifferentAttr = true;
            }
          });

          return isDifferentAttr;
        };

        if (isVideoNeedUpdate()) {
          updated = et_multi_view.callbackHandlerDefault(data, $target, $source);
        }
      } else if ($contentNew.is('iframe') && $contentOld.is('iframe') && $contentNew.attr('src') !== $contentOld.attr('src')) {
        updated = et_multi_view.callbackHandlerDefault(data, $target, $source);
      } else if (($contentNew.is('video') && $contentOld.is('iframe')) || ($contentNew.is('iframe') && $contentOld.is('video'))) {
        updated = et_multi_view.callbackHandlerDefault(data, $target, $source);
      }

      if (updated && updated.content) {
        if ($contentNew.is('iframe') && $.fn.fitVids) {
          $target.fitVids();
        }
      }

      return updated;
    },
    callbackHandlerBlog(data, $target, $source) {
      const updated      = et_multi_view.callbackHandlerDefault(data, $target, $source);
      const classesAdded = et_multi_view.getObjectValue(updated, 'classes.add');

      if (classesAdded && classesAdded.indexOf('et_pb_blog_show_content') !== - 1) {
        et_reinit_waypoint_modules();
      }
    },
    callbackHandlerWooCommerceBreadcrumb(data, $target, $source) {
      if (data.content) {
        return et_multi_view.callbackHandlerDefault(data, $target, $source);
      }
      if (data.attrs && data.attrs.hasOwnProperty('href')) {
        const hrefValue = data.attrs.href;
        return et_multi_view.updateAttrs({ href: hrefValue }, $target, $source);
      }
    },
    callbackHandlerWooCommerceTabs(data, $target, $source) {
      const updated = et_multi_view.callbackHandlerDefault(data, $target, $source);

      if (updated && updated.attrs && updated.attrs.hasOwnProperty('data-include_tabs')) {
        // Show only the enabled Tabs i.e. Hide all tabs and show as required.
        $target.find('li').hide();
        $target.find('li').removeClass('et_pb_tab_active');

        const tabClasses   = [];
        const include_tabs = updated.attrs['data-include_tabs'].split('|');
        include_tabs.forEach(elem => {
          if ('' === elem.trim()) {
            return;
          }
          tabClasses.push(`${elem}_tab`);
        });

        tabClasses.forEach((elemClass, idx) => {
          if (0 === idx) {
            $(`.${elemClass}`).addClass('et_pb_tab_active');
          }
          $(`.${elemClass}`).show();
        });
      }
    },
    getCallbackHandlerCustom(slug) {
      switch (slug) {
        case 'et_pb_counter':
          return et_multi_view.callbackHandlerCounter;

        case 'et_pb_number_counter':
          return et_multi_view.callbackHandlerNumberCounter;

        case 'et_pb_circle_counter':
          return et_multi_view.callbackHandlerCircleCounter;

        case 'et_pb_slider':
        case 'et_pb_fullwidth_slider':
          return et_multi_view.callbackHandlerSlider;

        case 'et_pb_post_slider':
        case 'et_pb_fullwidth_post_slider':
          return et_multi_view.callbackHandlerPostSlider;

        case 'et_pb_video_slider':
          return et_multi_view.callbackHandlerVideoSlider;

        case 'et_pb_slide':
          return et_multi_view.callbackHandlerSliderItem;

        case 'et_pb_video':
          return et_multi_view.callbackHandlerVideo;

        case 'et_pb_blog':
          return et_multi_view.callbackHandlerBlog;

        case 'et_pb_wc_breadcrumb':
          return et_multi_view.callbackHandlerWooCommerceBreadcrumb;
        case 'et_pb_wc_tabs':
          return et_multi_view.callbackHandlerWooCommerceTabs;

        default:
          return false;
      }
    },
    updateContent(content, $target, $source) {
      if ('undefined' === typeof content) {
        return false;
      }

      const $targetTemp = $('<' + ($target.get(0).tagName || 'div') + '>').html(content);

      if ($target.html() === $targetTemp.html()) {
        return false;
      }

      $target.empty().html(content);

      if (! $source.hasClass('et_multi_view_swapped')) {
        $source.addClass('et_multi_view_swapped');
      }

      return true;
    },
    updateAttrs(attrs, $target, $source) {
      if (! attrs) {
        return false;
      }

      const updated = {};

      $.each(attrs, (key, value) => {
        switch (key) {
          case 'class':
            // Do nothing, use classes data contexts and updateClasses method instead.
            break;

          case 'style':
            // Do nothing, use styles data contexts and updateStyles method instead.
            break;

          case 'srcset':
          case 'sizes':
            // Do nothing, will handle these attributes along with src attribute.
            break;

          default:
            if ($target.attr(key) !== value) {
              $target.attr(key, value);

              if (0 === key.indexOf('data-')) {
                $target.data(key.replace('data-', ''), value);
              }

              if ('src' === key) {
                if (value) {
                  $target.removeClass('et_multi_view_hidden_image');

                  if (attrs.srcset && attrs.sizes) {
                    $target.attr('srcset', attrs.srcset);
                    $target.attr('sizes', attrs.sizes);
                  } else {
                    $target.removeAttr('srcset');
                    $target.removeAttr('sizes');
                  }
                } else {
                  $target.addClass('et_multi_view_hidden_image');

                  $target.removeAttr('srcset');
                  $target.removeAttr('sizes');
                }
              }

              updated[key] = value;
            }
            break;
        }
      });

      if (et_multi_view.isEmptyObject(updated)) {
        return false;
      }

      if (! $source.hasClass('et_multi_view_swapped')) {
        $source.addClass('et_multi_view_swapped');
      }

      return updated;
    },
    updateStyles(styles, $target, $source) {
      if (! styles) {
        return false;
      }

      const updated = {};

      $.each(styles, (key, value) => {
        if ($target.css(key) !== value) {
          $target.css(key, value);
          updated[key] = value;
        }
      });

      if (et_multi_view.isEmptyObject(updated)) {
        return false;
      }

      if (! $source.hasClass('et_multi_view_swapped')) {
        $source.addClass('et_multi_view_swapped');
      }

      return updated;
    },
    updateClasses(classes, $target, $source) {
      if (! classes) {
        return false;
      }

      const updated = {};

      // Add CSS class
      if (classes.add) {
        for (var i = 0; i < classes.add.length; i++) {
          if (! $target.hasClass(classes.add[i])) {
            $target.addClass(classes.add[i]);

            if (! updated.hasOwnProperty('add')) {
              updated.add = [];
            }
            updated.add.push(classes.add[i]);
          }
        }
      }

      // Remove CSS class
      if (classes.remove) {
        for (var i = 0; i < classes.remove.length; i++) {
          if ($target.hasClass(classes.remove[i])) {
            $target.removeClass(classes.remove[i]);

            if (! updated.hasOwnProperty('remove')) {
              updated.remove = [];
            }
            updated.remove.push(classes.remove[i]);
          }
        }
      }

      if (et_multi_view.isEmptyObject(updated)) {
        return false;
      }

      if (! $source.hasClass('et_multi_view_swapped')) {
        $source.addClass('et_multi_view_swapped');
      }

      return updated;
    },
    updateVisibility(isVisible, $target, $source) {
      const updated = {};

      if (isVisible && $target.hasClass('et_multi_view_hidden')) {
        $target.removeClass('et_multi_view_hidden');
        updated.isVisible = true;
      }

      if (! isVisible && ! $target.hasClass('et_multi_view_hidden')) {
        $target.addClass('et_multi_view_hidden');
        updated.isHidden = true;
      }

      if (et_multi_view.isEmptyObject(updated)) {
        return false;
      }

      if (! $source.hasClass('et_multi_view_swapped')) {
        $source.addClass('et_multi_view_swapped');
      }

      return updated;
    },
    isEmptyObject(obj) {
      if (! obj) {
        return true;
      }

      let isEmpty = true;

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          isEmpty = false;
        }
      }

      return isEmpty;
    },
    getObjectValue(object, path, defaultValue) {
      try {
        let value   = $.extend({}, object);
        const paths = path.split('.');

        for (let i = 0; i < paths.length; ++i) {
          value = value[paths[i]];
        }

        return value;
      } catch (error) {
        return defaultValue;
      }
    },
    tryParseJSON(string) {
      try {
        return JSON.parse(string);
      } catch (e) {
        return false;
      }
    },
    getScreenMode() {
      if (isBuilder && et_multi_view.screenMode) {
        return et_multi_view.screenMode;
      }

      const windowWidth = et_multi_view.getWindowWidth();

      if (windowWidth > 980) {
        return 'desktop';
      }

      if (windowWidth > 767) {
        return 'tablet';
      }

      return 'phone';
    },
    getWindowWidth() {
      if (et_multi_view.windowWidth) {
        return et_multi_view.windowWidth;
      }

      if (isBuilder) {
        return $('.et-core-frame').width();
      }

      return $(window).width();
    },
    getElements() {
      if (isBuilder) {
        return $('.et-core-frame').contents().find('[data-et-multi-view]');
      }

      return $('[data-et-multi-view]');
    },
    isBuilderElement($element) {
      return $element.closest('#et-fb-app').length > 0;
    },
    isTouchDevice() {
      return 'ontouchstart' in window || navigator.msMaxTouchPoints;
    },
  };

  function etMultiViewBootstrap() {
    if (isBuilder) {
      $(window).on('et_fb_preview_mode_changed', (event, screenMode) => {
        // Just a gimmick to make the event parameter used.
        if ('et_fb_preview_mode_changed' !== event.type) {
          return;
        }

        et_multi_view.init(screenMode);
      });
    } else {
      $(() => {
        et_multi_view.init();
      });

      $(window).on('orientationchange', e => {
        et_multi_view.init();
      });

      let et_multi_view_window_resize_timer = null;

      $(window).on('resize', event => {
        // Bail early when the resize event is triggered programmatically.
        if (! event.originalEvent || ! event.originalEvent.isTrusted) {
          return;
        }

        clearTimeout(et_multi_view_window_resize_timer);

        et_multi_view_window_resize_timer = setTimeout(() => {
          et_multi_view.init(undefined, $(window).width());
        }, 200);
      });
    }
  }

  etMultiViewBootstrap();

  if (isBuilder) {
    $(() => {
      $(document).on('submit', '.et-fb-root-ancestor-sibling form', event => {
        event.preventDefault();
      });

      $(document).on('click', '.et-fb-root-ancestor-sibling a, .et-fb-root-ancestor-sibling button, .et-fb-root-ancestor-sibling input[type="submit"]', event => {
        event.preventDefault();
      });
    });
  }

  // Initialize and render the WooCommerce Reviews rating stars
  // This needed for product reviews dynamic content
  // @see https://github.com/woocommerce/woocommerce/blob/master/assets/js/frontend/single-product.js#L47
  window.etInitWooReviewsRatingStars = function() {
    $('select[name="rating"]').each(function() {
      $(this).prev('.stars').remove();
      $(this)
        .hide()
        .before('<p class="stars">\
						<span>\
							<a class="star-1" href="#">1</a>\
							<a class="star-2" href="#">2</a>\
							<a class="star-3" href="#">3</a>\
							<a class="star-4" href="#">4</a>\
							<a class="star-5" href="#">5</a>\
						</span>\
					</p>');
    });
  };
})(jQuery);
