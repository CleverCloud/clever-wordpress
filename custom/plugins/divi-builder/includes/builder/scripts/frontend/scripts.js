// External dependencies
import includes from 'lodash/includes';
import isUndefined from 'lodash/isUndefined';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import set from 'lodash/set';
import forEach from 'lodash/forEach';
import split from 'lodash/split';

// Internal dependencies
import {
  getContentAreaSelector,
} from 'gutenberg/utils/selectors';
import {
  isBuilder,
  isDiviTheme,
  isExtraTheme,
} from '../utils/utils';
import './woocommerce-modules';

const _post_id = et_pb_custom.page_id;

/*! ET frontend-builder-scripts.js */
(function($) {
  const isBlockLayoutPreview     = 'undefined' !== typeof window.ETBlockLayoutModulesScript && $('body').hasClass('et-block-layout-preview');
  const top_window               = isBuilder || isBlockLayoutPreview ? ET_Builder.Frames.top : window;
  const $et_window               = $(window);
  const $fullscreenSectionWindow = isBlockLayoutPreview ? $(top_window) : $(window);
  const $et_top_window           = isBuilder ? top_window.jQuery(top_window) : $(window);
  const isTB                     = $('body').hasClass('et-tb');
  const isBFB                    = $('body').hasClass('et-bfb');
  const isVB                     = isBuilder && ! isBFB;

  const isScrollOnAppWindow = function() {
    if (isBlockLayoutPreview) {
      return false;
    }
    return isVB && ($('html').is('.et-fb-preview--wireframe') || $('html').is('.et-fb-preview--desktop'));
  };

  const isBuilderModeZoom = function() {
    return isBuilder && $('html').is('.et-fb-preview--zoom');
  };

  const isInsideVB = function($node) {
    return $node.closest('#et-fb-app').length > 0;
  };

  const getInsideVB = function($node) {
    return $('#et-fb-app').find($node);
  };

  const getOutsideVB = function($node) {
    if ('string' === typeof $node) {
      $node = $($node);
    }
    return $node.not('#et-fb-app *');
  };

  window.et_load_event_fired             = false;
  window.et_is_transparent_nav           = $('body').hasClass('et_transparent_nav');
  window.et_is_vertical_nav              = $('body').hasClass('et_vertical_nav');
  window.et_is_fixed_nav                 = $('body').hasClass('et_fixed_nav');
  window.et_is_minified_js               = $('body').hasClass('et_minified_js');
  window.et_is_minified_css              = $('body').hasClass('et_minified_css');
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

  // Star-based rating UI.
  // @see: WooCommerce's woocommerce/assets/js/frontend/single-product.js file
  window.et_pb_init_woo_star_rating = function($rating_selector) {
    const $rating_parent  = $rating_selector.closest('div');
    const $existing_stars = $rating_parent.find('p.stars');

    if ($existing_stars.length > 0) {
      $existing_stars.remove();
    }

    $rating_selector.hide().before('<p class="stars">\
				<span>\
					<a class="star-1" href="#">1</a>\
					<a class="star-2" href="#">2</a>\
					<a class="star-3" href="#">3</a>\
					<a class="star-4" href="#">4</a>\
					<a class="star-5" href="#">5</a>\
				</span>\
			</p>');
  };

  window.et_pb_wrap_woo_attribute_fields_in_span = function() {
    // WooCommerce Modules :: Add To Cart
    const $et_variations_forms = $('form.variations_form');

    // $.each() avoids multiple <span>'s when more than one form exists.
    // @see https://github.com/elegantthemes/submodule-builder/pull/7022#discussion_r370703949
    $.each($et_variations_forms, (idx, form) => {
      const $form = $(form);

      const $et_attribute_fields        = $form.find('.variations select');
      const $et_attribute_fields_parent = $form.find('.variations select').parent('td.value');
      const $et_reset_variations        = $form.find('.reset_variations');

      // Checking length makes sure that `<span>` isn't nested in VB.
      if (0 === $et_attribute_fields_parent.length
				|| $et_attribute_fields_parent.attr('data-is-span-added')) {
        return;
      }

      $et_attribute_fields_parent.attr('data-is-span-added', '1');
      $($et_attribute_fields).wrap('<span></span>');
      if (isVB && $et_reset_variations.length > 0) {
        $($et_reset_variations).remove();
      }
    });
  };

  // Calculate fullscreen section size listener. This method was moved from the scope of
  // et_pb_init_modules due to infinity resize event issue.
  let et_calculate_fullscreen_section_size_timeout = false;

  window.et_calculate_fullscreen_section_size = function() {
    $('section.et_pb_fullscreen').each(function() {
      et_calc_fullscreen_section.bind($(this))();
    });

    if (isBuilder) {
      return;
    }

    clearTimeout(et_calculate_fullscreen_section_size_timeout);

    et_calculate_fullscreen_section_size_timeout = setTimeout(() => {
      $fullscreenSectionWindow.off('resize', et_calculate_fullscreen_section_size);
      $fullscreenSectionWindow.off('et-pb-header-height-calculated', et_calculate_fullscreen_section_size);

      $fullscreenSectionWindow.trigger('resize');

      $fullscreenSectionWindow.on('resize', et_calculate_fullscreen_section_size);
      $fullscreenSectionWindow.on('et-pb-header-height-calculated', et_calculate_fullscreen_section_size);
    });
  };

  window.et_pb_init_modules = function() {
    $.et_pb_simple_slider = function(el, options) {
      const settings = $.extend({
        slide: '.et-slide', // slide class
        arrows: '.et-pb-slider-arrows', // arrows container class
        prev_arrow: '.et-pb-arrow-prev', // left arrow class
        next_arrow: '.et-pb-arrow-next', // right arrow class
        controls: '.et-pb-controllers a', // control selector
        carousel_controls: '.et_pb_carousel_item', // carousel control selector
        control_active_class: 'et-pb-active-control', // active control class name
        previous_text: et_pb_custom.previous, // previous arrow text
        next_text: et_pb_custom.next, // next arrow text
        fade_speed: 500, // fade effect speed
        use_arrows: true, // use arrows?
        use_controls: true, // use controls?
        manual_arrows: '', // html code for custom arrows
        append_controls_to: '', // controls are appended to the slider element by default, here you can specify the element it should append to
        controls_below: false,
        controls_class: 'et-pb-controllers', // controls container class name
        slideshow: false, // automattic animation?
        slideshow_speed: 7000, // automattic animation speed
        show_progress_bar: false, // show progress bar if automattic animation is active
        tabs_animation: false,
        use_carousel: false,
        active_slide: 0,
      }, options);

      const $et_slider            = $(el);
      let $et_slide               = $et_slider.closest_descendent(settings.slide);
      const et_slides_number      = $et_slide.length;
      const et_fade_speed         = settings.fade_speed;
      let et_active_slide         = settings.active_slide;
      let $et_slider_arrows;
      let $et_slider_prev;
      let $et_slider_next;
      let $et_slider_controls;
      let $et_slider_carousel_controls;
      let et_slider_timer;
      let controls_html           = '';
      let carousel_html           = '';
      const $progress_bar         = null;
      const progress_timer_count  = 0;
      const $et_pb_container      = $et_slider.find('.et_pb_container');
      const et_pb_container_width = $et_pb_container.width();
      const is_post_slider        = $et_slider.hasClass('et_pb_post_slider');
      const et_slider_breakpoint  = '';
      let stop_slider             = false;

      $et_slider.et_animation_running = false;

      $.data(el, 'et_pb_simple_slider', $et_slider);

      $et_slide.eq(0).addClass('et-pb-active-slide');

      $et_slider.attr('data-active-slide', $et_slide.data('slide-id'));

      if (! settings.tabs_animation) {
        if (! $et_slider.hasClass('et_pb_bg_layout_dark') && ! $et_slider.hasClass('et_pb_bg_layout_light')) {
          $et_slider.addClass(et_get_bg_layout_color($et_slide.eq(0)));
        }
      }
      if (settings.use_arrows && et_slides_number > 1) {
        if ('' == settings.manual_arrows) {
          // Setting style="color:inherit" for Gallery Slider's arrows
          if (settings.hasOwnProperty('slide') && '.et_pb_gallery_item' === settings.slide) {
						  $et_slider.append(`${'<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#" style="color:inherit">' + '<span>'}${settings.previous_text}</span>` + '</a><a class="et-pb-arrow-next" href="#" style="color:inherit">' + `<span>${settings.next_text}</span>` + '</a></div>');
          } else {
            $et_slider.append(`${'<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#" >' + '<span>'}${settings.previous_text}</span>` + '</a><a class="et-pb-arrow-next" href="#">' + `<span>${settings.next_text}</span>` + '</a></div>');
          }
        } else { $et_slider.append(settings.manual_arrows); }

        $et_slider_arrows = $et_slider.find(settings.arrows);
        $et_slider_prev   = $et_slider.find(settings.prev_arrow);
        $et_slider_next   = $et_slider.find(settings.next_arrow);

        $et_slider.on('click.et_pb_simple_slider', settings.next_arrow, () => {
          if ($et_slider.et_animation_running)	return false;

          $et_slider.et_slider_move_to('next');

          return false;
        });

        $et_slider.on('click.et_pb_simple_slider', settings.prev_arrow, () => {
          if ($et_slider.et_animation_running)	return false;

          $et_slider.et_slider_move_to('previous');

          return false;
        });

        // swipe support requires et-jquery-touch-mobile
        $et_slider.on('swipeleft.et_pb_simple_slider', settings.slide, event => {
          // do not switch slide on selecting text in VB
          if ($(event.target).closest('.et-fb-popover-tinymce').length || $(event.target).closest('.et-fb-editable-element').length) {
            return;
          }

          $et_slider.et_slider_move_to('next');
        });
        $et_slider.on('swiperight.et_pb_simple_slider', settings.slide, event => {
          // do not switch slide on selecting text in VB
          if ($(event.target).closest('.et-fb-popover-tinymce').length || $(event.target).closest('.et-fb-editable-element').length) {
            return;
          }

          $et_slider.et_slider_move_to('previous');
        });
      }

      if (settings.use_controls && et_slides_number > 1) {
        for (var i = 1; i <= et_slides_number; i++) {
          controls_html += `<a href="#"${1 == i ? ` class="${settings.control_active_class}"` : ''}>${i}</a>`;
        }

        if ($et_slider.find('video').length > 0) {
          settings.controls_class += ' et-pb-controllers-has-video-tag';
        }

        controls_html =						`<div class="${settings.controls_class}">${
							 controls_html
						 }</div>`;

        if ('' == settings.append_controls_to) $et_slider.append(controls_html);
        else $(settings.append_controls_to).append(controls_html);

        if (settings.controls_below) $et_slider_controls	= $et_slider.parent().find(settings.controls);
        else $et_slider_controls	= $et_slider.find(settings.controls);

        $et_slider_controls.on('click.et_pb_simple_slider', function() {
          if ($et_slider.et_animation_running)	return false;

          $et_slider.et_slider_move_to($(this).index());

          return false;
        });
      }

      if (settings.use_carousel && et_slides_number > 1) {
        for (var i = 1; i <= et_slides_number; i++) {
          const slide_id  = i - 1;
          const image_src = ($et_slide.eq(slide_id).data('image') !== undefined) ? `url(${$et_slide.eq(slide_id).data('image')})` : 'none';
          carousel_html  += `<div class="et_pb_carousel_item ${1 === i ? settings.control_active_class : ''}" data-slide-id="${slide_id}">`
							+ `<div class="et_pb_video_overlay" href="#" style="background-image: ${image_src};">`
								+ '<div class="et_pb_video_overlay_hover"><a href="#" class="et_pb_video_play"></a></div>'
							+ '</div>'
						+ '</div>';
        }

        carousel_html =						`${'<div class="et_pb_carousel">'
						+ '<div class="et_pb_carousel_items">'}${
							 carousel_html
						 }</div>`
						+ '</div>';
        $et_slider.after(carousel_html);

        $et_slider_carousel_controls = $et_slider.siblings('.et_pb_carousel').find(settings.carousel_controls);
        $et_slider_carousel_controls.on('click.et_pb_simple_slider', function() {
          if ($et_slider.et_animation_running)	return false;

          const $this = $(this);
          $et_slider.et_slider_move_to($this.data('slide-id'));

          return false;
        });
      }

      if (settings.slideshow && et_slides_number > 1) {
        $et_slider.on('mouseenter.et_pb_simple_slider', () => {
          if ($et_slider.hasClass('et_slider_auto_ignore_hover')) {
            return;
          }

          $et_slider.addClass('et_slider_hovered');

          if (typeof et_slider_timer !== 'undefined') {
            clearTimeout(et_slider_timer);
          }
        }).on('mouseleave.et_pb_simple_slider', () => {
          if ($et_slider.hasClass('et_slider_auto_ignore_hover')) {
            return;
          }

          $et_slider.removeClass('et_slider_hovered');

          et_slider_auto_rotate();
        });
      }

      et_slider_auto_rotate();

      function et_slider_auto_rotate() {
        if (stop_slider) {
          return;
        }

        // Slider animation can be dynamically paused with et_pb_pause_slider
        // Make sure animation will start when class is removed by checking clas existence every 2 seconds.
        if ($et_slider.hasClass('et_pb_pause_slider')) {
          setTimeout(() => {
            et_slider_auto_rotate();
          }, 2000);

          return;
        }

        if (settings.slideshow && et_slides_number > 1 && ! $et_slider.hasClass('et_slider_hovered')) {
          et_slider_timer = setTimeout(() => {
            $et_slider.et_slider_move_to('next');
          }, settings.slideshow_speed);
        }
      }

      $et_slider.et_slider_destroy = function() {
        // Clear existing timer / auto rotate
        if (typeof et_slider_timer !== 'undefined') {
          clearTimeout(et_slider_timer);
        }

        stop_slider = true;

        // Deregister all own existing events
        $et_slider.off('.et_pb_simple_slider');

        // Removing existing style from slide(s)
        $et_slider.find('.et_pb_slide').css({
          'z-index': '',
          display: '',
          opacity: '',
        });

        // Removing existing classnames from slide(s)
        $et_slider.find('.et-pb-active-slide').removeClass('et-pb-active-slide');
        $et_slider.find('.et-pb-moved-slide').removeClass('et-pb-moved-slide');

        // Removing DOM that was added by slider
        $et_slider.find('.et-pb-slider-arrows, .et-pb-controllers').remove();
        $et_slider.siblings('.et_pb_carousel, .et-pb-controllers').remove();

        // Remove references
        $et_slider.removeData('et_pb_simple_slider');
      };

      function et_stop_video(active_slide) {
        let $et_video; let
          et_video_src;

        // if there is a video in the slide, stop it when switching to another slide
        if (active_slide.has('iframe').length) {
          $et_video    = active_slide.find('iframe');
          et_video_src = $et_video.attr('src');

          $et_video.attr('src', '');
          $et_video.attr('src', et_video_src);
        } else if (active_slide.has('video').length) {
          if (! active_slide.find('.et_pb_section_video_bg').length) {
            $et_video = active_slide.find('video');
            $et_video[0].pause();
          }
        }
      }

      // Remove inline width and height added by mediaelement.js
      function et_fix_slide_video_height() {
        const $this_slider                 = $et_slider;
        const $slide_video_container       = $this_slider.find('.et-pb-active-slide .et_pb_slide_video');
        const slide_video_container_height = parseFloat($slide_video_container.height());
        const slide_wp_video_shortcode     = $this_slider.find('.et_pb_slide_video .wp-video-shortcode');

        slide_wp_video_shortcode.css({ width: '', height: '' });

        if (! isNaN(slide_video_container_height)) {
          $slide_video_container.css('marginTop', `-${slide_video_container_height / 2}px`);
        }
      }

      $et_slider.et_fix_slider_content_images = et_fix_slider_content_images;

      function et_fix_slider_content_images() {
        const $this_slider                 = $et_slider;
        const $slide_image_container       = $this_slider.find('.et-pb-active-slide .et_pb_slide_image');
        const $slide_image                 = $slide_image_container.find('img');
        const $slide_video_container       = $this_slider.find('.et-pb-active-slide .et_pb_slide_video');
        const $slide                       = $slide_image_container.closest('.et_pb_slide');
        const $slider                      = $slide.closest('.et_pb_slider');
        const slide_height                 = parseFloat($slider.innerHeight());
        const image_height                 = parseFloat(slide_height * 0.8);
        let slide_image_container_height   = parseFloat($slide_image_container.height());
        const slide_video_container_height = parseFloat($slide_video_container.height());
        const $et_pb_first_row_first_module = et_get_first_section().children('.et_pb_module:visible').first();
        const $et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module.find( '.et_pb_slide .et_pb_container' );
        const $is_pb_fullwidth_section_first = et_get_first_section().is( '.et_pb_fullwidth_section' );
        let slide_image_container_height_1st_row_1st_module = parseFloat($et_pb_first_row_first_module_slide_container.height());
        const image_height_1st_row_1st_module  = parseFloat(slide_image_container_height_1st_row_1st_module * 0.8);

        if (! isNaN(image_height)) {
          $slide_image_container.find('img').css('maxHeight', `${image_height}px`);

          slide_image_container_height = parseInt($slide_image_container.height());

          if ( window.et_is_transparent_nav && $et_pb_first_row_first_module.is( '.et_pb_slider' ) && $is_pb_fullwidth_section_first ) {
            $slide_image_container.find('img').css('maxHeight', `${image_height_1st_row_1st_module}px`);
            slide_image_container_height = parseInt($slide_image_container.height());
          }
        }

        if (! isNaN(slide_image_container_height) && $slide.hasClass('et_pb_media_alignment_center')) {
          $slide_image_container.css('marginTop', `-${slide_image_container_height / 2}px`);

          // Add load jQuery event only once.
          if (! $slide_image.data('hasLoadEvent')) {
            $slide_image.data('hasLoadEvent', true);

            // It will fix the image position when lazy loading image is enabled.
            $slide_image.on('load', () => {
              slide_image_container_height = parseFloat($slide_image_container.height());
              $slide_image_container.css('marginTop', `-${slide_image_container_height / 2}px`);
            });
          }
        }

        if (! isNaN(slide_video_container_height)) {
          $slide_video_container.css('marginTop', `-${slide_video_container_height / 2}px`);
        }
      }

      function et_get_bg_layout_color($slide) {
        if ($slide.hasClass('et_pb_bg_layout_light')) {
          return 'et_pb_bg_layout_light';
        }

        return 'et_pb_bg_layout_dark';
      }

      // fix the appearance of some modules inside the post slider
      function et_fix_builder_content() {
        if (is_post_slider) {
          setTimeout(() => {
            const $et_pb_circle_counter = $('.et_pb_circle_counter');
            const $et_pb_number_counter = $('.et_pb_number_counter');

            window.et_fix_testimonial_inner_width();

            if ($et_pb_circle_counter.length) {
              window.et_pb_reinit_circle_counters($et_pb_circle_counter);
            }

            if ($et_pb_number_counter.length) {
              window.et_pb_reinit_number_counters($et_pb_number_counter);
            }
            window.et_reinit_waypoint_modules();
          }, 1000);
        }
      }

      if (window.et_load_event_fired) {
        'function' === typeof et_fix_slider_height && et_fix_slider_height($et_slider);
      } else {
        $et_window.on('load', () => {
          'function' === typeof et_fix_slider_height && et_fix_slider_height($et_slider);
        });
      }

      $et_window.on('resize.et_simple_slider', () => {
        et_fix_slider_height($et_slider);
      });

      $et_slider.et_slider_move_to = function(direction) {
        $et_slide           = $et_slider.closest_descendent(settings.slide);
        const $active_slide = $et_slide.eq(et_active_slide);

        $et_slider.et_animation_running = true;

        $et_slider.removeClass('et_slide_transition_to_next et_slide_transition_to_previous').addClass(`et_slide_transition_to_${direction}`);

        $et_slider.find('.et-pb-moved-slide').removeClass('et-pb-moved-slide');

        if ('next' === direction || 'previous' === direction) {
          if ('next' === direction) {
            et_active_slide = (et_active_slide + 1) < et_slides_number ? et_active_slide + 1 : 0;
          } else {
            et_active_slide = (et_active_slide - 1) >= 0 ? et_active_slide - 1 : et_slides_number - 1;
          }
        } else {
          if (et_active_slide === direction) {
            // When video is added, slider needs to be reloaded, so inline styles need to be added again
            $et_slider.find('.et-pb-inactive-slide').css({
              'z-index': '',
              display: '',
              opacity: 0,
            });
            $active_slide.css({ display: 'block', opacity: 1 }).data('slide-status', 'active');
            $et_slider.et_animation_running = false;
            return;
          }

          et_active_slide = direction;
        }

        $et_slider.attr('data-active-slide', $et_slide.eq(et_active_slide).data('slide-id'));

        if (typeof et_slider_timer !== 'undefined') {
          clearTimeout(et_slider_timer);
        }

        const $next_slide	= $et_slide.eq(et_active_slide);

        $et_slider.trigger('slide', { current: $active_slide, next: $next_slide });

        if (typeof $active_slide.find('video')[0] !== 'undefined' && typeof $active_slide.find('video')[0].player !== 'undefined') {
          $active_slide.find('video')[0].player.pause();
        }

        if (typeof $next_slide.find('video')[0] !== 'undefined' && typeof $next_slide.find('video')[0].player !== 'undefined') {
          $next_slide.find('video')[0].player.play();
        }

        const $active_slide_video = $active_slide.find('.et_pb_video_box iframe');

        if ($active_slide_video.length) {
          let active_slide_video_src = $active_slide_video.attr('src');

          // Removes the "autoplay=1" parameter when switching slides
          // by covering three possible cases:

          // "?autoplay=1" at the end of the URL
          active_slide_video_src = active_slide_video_src.replace(/\?autoplay=1$/, '');

          // "?autoplay=1" followed by another parameter
          active_slide_video_src = active_slide_video_src.replace(/\?autoplay=1&(amp;)?/, '?');

          // "&autoplay=1" anywhere in the URL
          active_slide_video_src = active_slide_video_src.replace(/&(amp;)?autoplay=1/, '');

          // Delays the URL update so that the cross-fade animation's smoothness is not affected
          setTimeout(() => {
            $active_slide_video.attr({
              src: active_slide_video_src,
            });
          }, settings.fade_speed);

          // Restores video overlay
          $active_slide_video.parents('.et_pb_video_box').next('.et_pb_video_overlay').css({
            display: 'block',
            opacity: 1,
          });
        }

        $et_slider.trigger('simple_slider_before_move_to', { direction, next_slide: $next_slide });

        $et_slide.each(function() {
          $(this).css('zIndex', 1);
        });

        // add 'slide-status' data attribute so it can be used to determine active slide in Visual Builder
        $active_slide.css('zIndex', 2).removeClass('et-pb-active-slide').addClass('et-pb-moved-slide').data('slide-status', 'inactive');
        $next_slide.css({ display: 'block', opacity: 0 }).addClass('et-pb-active-slide').data('slide-status', 'active');

        et_fix_slide_video_height();
        et_fix_slider_content_images();
        et_fix_builder_content();

        if (settings.use_controls) $et_slider_controls.removeClass(settings.control_active_class).eq(et_active_slide).addClass(settings.control_active_class);

        if (settings.use_carousel && $et_slider_carousel_controls) $et_slider_carousel_controls.removeClass(settings.control_active_class).eq(et_active_slide).addClass(settings.control_active_class);

        if (! settings.tabs_animation) {
          $next_slide.stop(true, true).animate({ opacity: 1 }, et_fade_speed);
          $active_slide.stop(true, true).addClass('et_slide_transition').css({ display: 'list-item', opacity: 1 }).animate({ opacity: 0 }, et_fade_speed, function() {
            const active_slide_layout_bg_color = et_get_bg_layout_color($active_slide);
            const next_slide_layout_bg_color   = et_get_bg_layout_color($next_slide);

            // Builder dynamically updates the slider options, so no need to set `display: none;` because it creates unwanted visual effects.
            if (isBuilder) {
              $(this).removeClass('et_slide_transition');
            } else {
              $(this).css('display', 'none').removeClass('et_slide_transition');
            }

            et_stop_video($active_slide);

            $et_slider
              .removeClass(active_slide_layout_bg_color)
              .addClass(next_slide_layout_bg_color);

            $et_slider.et_animation_running = false;

            if ($et_slider.hasClass('et_pb_gallery') && 'none' === $next_slide.css('maxHeight')) {
              // Add a max-height to active slider to fix content jumping issue in Webkit browsers.
              // @see https://github.com/elegantthemes/Divi/issues/25001
              $next_slide.css('maxHeight', $next_slide.outerHeight());
            }

            $et_slider.trigger('simple_slider_after_move_to', { next_slide: $next_slide });
          });
        } else {
          $next_slide.css({ display: 'none', opacity: 0 });

          $active_slide.addClass('et_slide_transition').css({ display: 'block', opacity: 1 }).animate({ opacity: 0 }, et_fade_speed, function() {
            $(this).css('display', 'none').removeClass('et_slide_transition');

            $next_slide.css({ display: 'block', opacity: 0 }).animate({ opacity: 1 }, et_fade_speed, () => {
              $et_slider.et_animation_running = false;

              $et_slider.trigger('simple_slider_after_move_to', { next_slide: $next_slide });
              $(window).trigger('resize');
            });
          });
        }

        if ($next_slide.find('.et_parallax_bg').length) {
          // reinit parallax on slide change to make sure it displayed correctly
          window.et_pb_parallax_init($next_slide.find('.et_parallax_bg'));
        }

        et_slider_auto_rotate();
      };
    };

    $.fn.et_pb_simple_slider = function(options) {
      return this.each(function() {
        const slider = $.data(this, 'et_pb_simple_slider');
        return slider || new $.et_pb_simple_slider(this, options);
      });
    };

    const et_hash_module_seperator       = '||';
    const et_hash_module_param_seperator = '|';

    function process_et_hashchange(hash) {
      // Bail early when hash is empty
      if (! hash.length) {
        return;
      }

      let modules;
      let module_params;
      let element;

      if ((hash.indexOf(et_hash_module_seperator, 0)) !== - 1) {
        modules = hash.split(et_hash_module_seperator);
        for (let i = 0; i < modules.length; i++) {
          module_params = modules[i].split(et_hash_module_param_seperator);
          element       = module_params[0];
          module_params.shift();
          if (element.length && $(`#${element}`).length) {
            $(`#${element}`).trigger({
              type: 'et_hashchange',
              params: module_params,
            });
          }
        }
      } else {
        module_params = hash.split(et_hash_module_param_seperator);
        element       = module_params[0];
        module_params.shift();
        if (element.length && $(`#${element}`).length) {
          $(`#${element}`).trigger({
            type: 'et_hashchange',
            params: module_params,
          });
        }
      }
    }

    function et_set_hash(module_state_hash) {
      const module_id = module_state_hash.split(et_hash_module_param_seperator)[0];
      if (! $(`#${module_id}`).length) {
        return;
      }

      if (window.location.hash) {
        var hash       = window.location.hash.substring(1); // Puts hash in variable, and removes the # character
        const new_hash = [];

        if ((hash.indexOf(et_hash_module_seperator, 0)) !== - 1) {
          const modules = hash.split(et_hash_module_seperator);
          let in_hash   = false;
          for (let i = 0; i < modules.length; i++) {
            var element = modules[i].split(et_hash_module_param_seperator)[0];
            if (element === module_id) {
              new_hash.push(module_state_hash);
              in_hash = true;
            } else {
              new_hash.push(modules[i]);
            }
          }
          if (! in_hash) {
            new_hash.push(module_state_hash);
          }
        } else {
          const module_params = hash.split(et_hash_module_param_seperator);
          var element         = module_params[0];
          if (element !== module_id) {
            new_hash.push(hash);
          }
          new_hash.push(module_state_hash);
        }

        hash = new_hash.join(et_hash_module_seperator);
      } else {
        hash = module_state_hash;
      }

      const yScroll           = document.body.scrollTop;
      window.location.hash    = hash;
      document.body.scrollTop = yScroll;
    }

    $.et_pb_simple_carousel = function(el, options) {
      const settings = $.extend({
        slide_duration: 500,
      }, options);

      const $et_carousel        = $(el);
      const $carousel_items     = $et_carousel.find('.et_pb_carousel_items');
      const $the_carousel_items = $carousel_items.find('.et_pb_carousel_item');

      $et_carousel.et_animation_running = false;

      $et_carousel.addClass('container-width-change-notify').on('containerWidthChanged', event => {
        set_carousel_columns($et_carousel);
        set_carousel_height($et_carousel);
      });

      $carousel_items.data('items', $the_carousel_items.toArray());
      $et_carousel.data('columns_setting_up', false);

      $carousel_items.prepend(`${'<div class="et-pb-slider-arrows"><a class="et-pb-slider-arrow et-pb-arrow-prev" href="#">' + '<span>'}${et_pb_custom.previous}</span>` + '</a><a class="et-pb-slider-arrow et-pb-arrow-next" href="#">' + `<span>${et_pb_custom.next}</span>` + '</a></div>');

      set_carousel_columns($et_carousel);
      set_carousel_height($et_carousel);

      const $et_carousel_next = $et_carousel.find('.et-pb-arrow-next');
      const $et_carousel_prev = $et_carousel.find('.et-pb-arrow-prev');

      $et_carousel.on('click', '.et-pb-arrow-next', () => {
        if ($et_carousel.et_animation_running) return false;

        $et_carousel.et_carousel_move_to('next');

        return false;
      });

      $et_carousel.on('click', '.et-pb-arrow-prev', () => {
        if ($et_carousel.et_animation_running) return false;

        $et_carousel.et_carousel_move_to('previous');

        return false;
      });

      // swipe support requires et-jquery-touch-mobile
      $et_carousel.on('swipeleft', () => {
        $et_carousel.et_carousel_move_to('next');
      });
      $et_carousel.on('swiperight', () => {
        $et_carousel.et_carousel_move_to('previous');
      });

      function set_carousel_height($the_carousel) {
        const carousel_items_width = $the_carousel_items.width();
        let carousel_items_height  = $the_carousel_items.height();

        // Account for borders when needed
        if ($the_carousel.parent().hasClass('et_pb_with_border')) {
          carousel_items_height = $the_carousel_items.outerHeight();
        }
        $carousel_items.css('height', `${carousel_items_height}px`);
      }

      function set_carousel_columns($the_carousel) {
        let columns            = 3;
        const $carousel_parent = $the_carousel.parents('.et_pb_column:not(".et_pb_specialty_column")');

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
        $carousel_items.removeClass(`columns-${$carousel_items.data('portfolio-columns')}`);
        $carousel_items.addClass(`columns-${columns}`);
        $carousel_items.data('portfolio-columns', columns);

        // kill all previous groups to get ready to re-group
        if ($carousel_items.find('.et-carousel-group').length) {
          $the_carousel_items.appendTo($carousel_items);
          $carousel_items.find('.et-carousel-group').remove();
        }

        // setup the grouping
        const the_carousel_items = $carousel_items.data('items');
        const $carousel_group    = $('<div class="et-carousel-group active">').appendTo($carousel_items);

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
            $(the_carousel_items[x]).addClass(`position_${position}`);
          } else {
            position = $(the_carousel_items[x]).data('position');
            $(the_carousel_items[x]).removeClass(`position_${position}`);
            $(the_carousel_items[x]).data('position', '');
            $(the_carousel_items[x]).hide();
          }
        }

        $the_carousel.data('columns_setting_up', false);
      } /* end set_carousel_columns() */

      $et_carousel.et_carousel_move_to = function(direction) {
        const $active_carousel_group = $carousel_items.find('.et-carousel-group.active');
        const items                  = $carousel_items.data('items');
        const columns                = $carousel_items.data('portfolio-columns');

        $et_carousel.et_animation_running = true;

        var left = 0;
        $active_carousel_group.children().each(function() {
          $(this).css({ position: 'absolute', left: `${left}px` });
          left += $(this).outerWidth(true);
        });

        // Avoid unwanted horizontal scroll on body when carousel is slided
        $('body').addClass('et-pb-is-sliding-carousel');

        // Deterimine number of carousel group item
        const carousel_group_item_size   = $active_carousel_group.find('.et_pb_carousel_item').length;
        let carousel_group_item_progress = 0;

        if ('next' == direction) {
          let $next_carousel_group;
          var current_position   = 1;
          let next_position      = 1;
          var active_items_start = items.indexOf($active_carousel_group.children().first()[0]);
          var active_items_end   = active_items_start + columns;
          const next_items_start = active_items_end;
          const next_items_end   = next_items_start + columns;

          $next_carousel_group = $('<div class="et-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);
          $next_carousel_group.css({ width: `${$active_carousel_group.innerWidth()}px` }).show();

          // this is an endless loop, so it can decide internally when to break out, so that next_position
          // can get filled up, even to the extent of an element having both and current_ and next_ position
          for (let x = 0, total = 0; ; x++, total++) {
            if (total >= active_items_start && total < active_items_end) {
              $(items[x]).addClass(`changing_position current_position current_position_${current_position}`);
              $(items[x]).data('current_position', current_position);
              current_position++;
            }

            if (total >= next_items_start && total < next_items_end) {
              $(items[x]).data('next_position', next_position);
              $(items[x]).addClass(`changing_position next_position next_position_${next_position}`);

              if (! $(items[x]).hasClass('current_position')) {
                $(items[x]).addClass('container_append');
              } else {
                $(items[x]).clone(true).appendTo($active_carousel_group).hide()
                  .addClass('delayed_container_append_dup')
                  .attr('id', `${$(items[x]).attr('id')}-dup`);
                $(items[x]).addClass('delayed_container_append');
              }

              next_position++;
            }

            if (next_position > columns) {
              break;
            }

            if (x >= (items.length - 1)) {
              x = - 1;
            }
          }

          var sorted = $carousel_items.find('.container_append, .delayed_container_append_dup').sort((a, b) => {
            const el_a_position = parseInt($(a).data('next_position'));
            const el_b_position = parseInt($(b).data('next_position'));
            return (el_a_position < el_b_position) ? - 1 : (el_a_position > el_b_position) ? 1 : 0;
          });

          $(sorted).show().appendTo($next_carousel_group);

          var left = 0;
          $next_carousel_group.children().each(function() {
            $(this).css({ position: 'absolute', left: `${left}px` });
            left += $(this).outerWidth(true);
          });

          $active_carousel_group.animate({
            left: '-100%',
          }, {
            duration: settings.slide_duration,
            progress(animation, progress) {
              if (progress > (carousel_group_item_progress / carousel_group_item_size)) {
                carousel_group_item_progress++;

                // Adding classnames on incoming/outcoming carousel item
                $active_carousel_group.find(`.et_pb_carousel_item:nth-child(${carousel_group_item_progress})`).addClass('item-fade-out');
                $next_carousel_group.find(`.et_pb_carousel_item:nth-child(${carousel_group_item_progress})`).addClass('item-fade-in');
              }
            },
            complete() {
              $carousel_items.find('.delayed_container_append').each(function() {
                left = $(`#${$(this).attr('id')}-dup`).css('left');
                $(this).css({ position: 'absolute', left });
                $(this).appendTo($next_carousel_group);
              });

              $active_carousel_group.removeClass('active');
              $active_carousel_group.children().each(function() {
                const position   = $(this).data('position');
                current_position = $(this).data('current_position');
                $(this).removeClass(`position_${position} ` + `changing_position current_position current_position_${current_position}`);
                $(this).data('position', '');
                $(this).data('current_position', '');
                $(this).hide();
                $(this).css({ position: '', left: '' });
                $(this).appendTo($carousel_items);
              });

              // Removing classnames on incoming/outcoming carousel item
              $carousel_items.find('.item-fade-out').removeClass('item-fade-out');
              $next_carousel_group.find('.item-fade-in').removeClass('item-fade-in');

              // Remove horizontal scroll prevention class name on body
              $('body').removeClass('et-pb-is-sliding-carousel');

              $active_carousel_group.remove();
            },
          });

          const next_left = $active_carousel_group.width() + parseInt($the_carousel_items.first().css('marginRight').slice(0, - 2));
          $next_carousel_group.addClass('active').css({ position: 'absolute', top: '0px', left: `${next_left}px` });
          $next_carousel_group.animate({
            left: '0%',
          }, {
            duration: settings.slide_duration,
            complete() {
              $next_carousel_group.removeClass('next').addClass('active').css({ position: '', width: '', top: '', left: '' });

              $next_carousel_group.find('.changing_position').each(function(index) {
                const position   = $(this).data('position');
                current_position = $(this).data('current_position');
                next_position    = $(this).data('next_position');
                $(this).removeClass(`container_append delayed_container_append position_${position} ` + `changing_position current_position current_position_${current_position} next_position next_position_${next_position}`);
                $(this).data('current_position', '');
                $(this).data('next_position', '');
                $(this).data('position', (index + 1));
              });

              $next_carousel_group.children().css({ position: '', left: '' });
              $next_carousel_group.find('.delayed_container_append_dup').remove();

              $et_carousel.et_animation_running = false;
            },
          });
        } else if ('previous' == direction) {
          let $prev_carousel_group;
          var current_position   = columns;
          let prev_position      = columns;
          const columns_span     = columns - 1;
          var active_items_start = items.indexOf($active_carousel_group.children().last()[0]);
          var active_items_end   = active_items_start - columns_span;
          const prev_items_start = active_items_end - 1;
          const prev_items_end   = prev_items_start - columns_span;

          $prev_carousel_group = $('<div class="et-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);
          $prev_carousel_group.css({ left: `-${$active_carousel_group.innerWidth()}px`, width: `${$active_carousel_group.innerWidth()}px` }).show();

          // this is an endless loop, so it can decide internally when to break out, so that next_position
          // can get filled up, even to the extent of an element having both and current_ and next_ position
          for (let x = (items.length - 1), total = (items.length - 1); ; x--, total--) {
            if (total <= active_items_start && total >= active_items_end) {
              $(items[x]).addClass(`changing_position current_position current_position_${current_position}`);
              $(items[x]).data('current_position', current_position);
              current_position--;
            }

            if (total <= prev_items_start && total >= prev_items_end) {
              $(items[x]).data('prev_position', prev_position);
              $(items[x]).addClass(`changing_position prev_position prev_position_${prev_position}`);

              if (! $(items[x]).hasClass('current_position')) {
                $(items[x]).addClass('container_append');
              } else {
                $(items[x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup')
                  .attr('id', `${$(items[x]).attr('id')}-dup`);
                $(items[x]).addClass('delayed_container_append');
              }

              prev_position--;
            }

            if (prev_position <= 0) {
              break;
            }

            if (0 == x) {
              x = items.length;
            }
          }

          var sorted = $carousel_items.find('.container_append, .delayed_container_append_dup').sort((a, b) => {
            const el_a_position = parseInt($(a).data('prev_position'));
            const el_b_position = parseInt($(b).data('prev_position'));
            return (el_a_position < el_b_position) ? - 1 : (el_a_position > el_b_position) ? 1 : 0;
          });

          $(sorted).show().appendTo($prev_carousel_group);

          var left = 0;
          $prev_carousel_group.children().each(function() {
            $(this).css({ position: 'absolute', left: `${left}px` });
            left += $(this).outerWidth(true);
          });

          $active_carousel_group.animate({
            left: '100%',
          }, {
            duration: settings.slide_duration,
            progress(animation, progress) {
              if (progress > (carousel_group_item_progress / carousel_group_item_size)) {
                const group_item_nth = carousel_group_item_size - carousel_group_item_progress;

                // Add fadeIn / fadeOut className to incoming/outcoming carousel item
                $active_carousel_group.find(`.et_pb_carousel_item:nth-child(${group_item_nth})`).addClass('item-fade-out');
                $prev_carousel_group.find(`.et_pb_carousel_item:nth-child(${group_item_nth})`).addClass('item-fade-in');

                carousel_group_item_progress++;
              }
            },
            complete() {
              $carousel_items.find('.delayed_container_append').reverse().each(function() {
                left = $(`#${$(this).attr('id')}-dup`).css('left');
                $(this).css({ position: 'absolute', left });
                $(this).prependTo($prev_carousel_group);
              });

              $active_carousel_group.removeClass('active');
              $active_carousel_group.children().each(function() {
                const position   = $(this).data('position');
                current_position = $(this).data('current_position');
                $(this).removeClass(`position_${position} ` + `changing_position current_position current_position_${current_position}`);
                $(this).data('position', '');
                $(this).data('current_position', '');
                $(this).hide();
                $(this).css({ position: '', left: '' });
                $(this).appendTo($carousel_items);
              });

              // Removing classnames on incoming/outcoming carousel item
              $carousel_items.find('.item-fade-out').removeClass('item-fade-out');
              $prev_carousel_group.find('.item-fade-in').removeClass('item-fade-in');

              // Remove horizontal scroll prevention class name on body
              $('body').removeClass('et-pb-is-sliding-carousel');

              $active_carousel_group.remove();
            },
          });

          const prev_left = (- 1) * $active_carousel_group.width() - parseInt($the_carousel_items.first().css('marginRight').slice(0, - 2));
          $prev_carousel_group.addClass('active').css({ position: 'absolute', top: '0px', left: `${prev_left}px` });
          $prev_carousel_group.animate({
            left: '0%',
          }, {
            duration: settings.slide_duration,
            complete() {
              $prev_carousel_group.removeClass('prev').addClass('active').css({ position: '', width: '', top: '', left: '' });

              $prev_carousel_group.find('.delayed_container_append_dup').remove();

              $prev_carousel_group.find('.changing_position').each(function(index) {
                let position     = $(this).data('position');
                current_position = $(this).data('current_position');
                prev_position = $(this).data('prev_position');
                $(this).removeClass(`container_append delayed_container_append position_${position} ` + `changing_position current_position current_position_${current_position} prev_position prev_position_${prev_position}`);
                $(this).data('current_position', '');
                $(this).data('prev_position', '');
                position = index + 1;
                $(this).data('position', position);
                $(this).addClass(`position_${position}`);
              });

              $prev_carousel_group.children().css({ position: '', left: '' });
              $et_carousel.et_animation_running = false;
            },
          });
        }
      };
    };

    $.fn.et_pb_simple_carousel = function(options) {
      return this.each(function() {
        const carousel = $.data(this, 'et_pb_simple_carousel');
        return carousel || new $.et_pb_simple_carousel(this, options);
      });
    };

    function et_init_audio_modules() {
      if ('undefined' === typeof jQuery.fn.mediaelementplayer) {
        return;
      }

      getOutsideVB('.et_audio_container').each(function() {
        const $this = jQuery(this);

        if ($this.find('.mejs-container').first().length > 0) {
          return;
        }

        $this.find('audio').mediaelementplayer(window._wpmejsSettings);
      });
    }

    $(() => {
      /**
       * Provide event listener for plugins to hook up to.
       */
      $(window).trigger('et_pb_before_init_modules');

      const $et_pb_slider                                 = $('.et_pb_slider');
      const $et_pb_tabs                                   = $('.et_pb_tabs');
      const $et_pb_video_section                          = $('.et_pb_section_video_bg');
      const $et_pb_newsletter_button                      = $('.et_pb_newsletter_button');
      const $et_pb_newsletter_input                       = $('.et_pb_newsletter_field .input');
      const $et_pb_filterable_portfolio                   = $('.et_pb_filterable_portfolio');
      const $et_pb_fullwidth_portfolio                    = $('.et_pb_fullwidth_portfolio');
      const $et_pb_gallery                                = $('.et_pb_gallery');
      const $et_pb_countdown_timer                        = $('.et_pb_countdown_timer');
      const $et_post_gallery                              = $('.et_post_gallery');
      const $et_lightbox_image                            = $('.et_pb_lightbox_image');
      const $et_pb_map                                    = $('.et_pb_map_container');
      const $et_pb_circle_counter                         = $('.et_pb_circle_counter');
      const $et_pb_number_counter                         = $('.et_pb_number_counter');
      const $et_pb_parallax                               = $('.et_parallax_bg');
      const $et_pb_shop                                   = $('.et_pb_shop');
      const $et_pb_post_fullwidth                         = $('.single.et_pb_pagebuilder_layout.et_full_width_page');
      const $et_pb_background_layout_hoverable            = $('[data-background-layout][data-background-layout-hover]');
      const et_is_mobile_device                           = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/) !== null || 'standalone' in window.navigator && ! window.navigator.standalone;
      const et_is_ipad                                    = navigator.userAgent.match(/iPad/);
      const et_is_ie9                                     = navigator.userAgent.match(/MSIE 9.0/) !== null;
      const et_all_rows                                   = $('.et_pb_row');
      const $et_container                                 = window.et_pb_custom && ! window.et_pb_custom.is_builder_plugin_used ? $('body') : et_all_rows;
      let et_container_width                              = $et_container.width();
      const et_is_vertical_fixed_nav                      = $('body').hasClass('et_vertical_fixed');
      const et_is_rtl                                     = $('body').hasClass('rtl');
      const et_hide_nav                                   = $('body').hasClass('et_hide_nav');
      const et_header_style_left                          = $('body').hasClass('et_header_style_left');
      const $top_header                                   = $('#top-header');
      const $main_header                                  = $('#main-header');
      const $main_container_wrapper                       = $('#page-container');
      const $et_transparent_nav                           = $('.et_transparent_nav');
      const $et_pb_first_row                              = $('body.et_pb_pagebuilder_layout .et_pb_section:first-child');
      const $et_main_content_first_row                    = $('#main-content .container:first-child');
      const $et_main_content_first_row_meta_wrapper       = $et_main_content_first_row.find('.et_post_meta_wrapper').first();
      const $et_main_content_first_row_meta_wrapper_title = $et_main_content_first_row_meta_wrapper.find('h1');
      const $et_main_content_first_row_content            = $et_main_content_first_row.find('.entry-content').first();
      const $et_single_post                               = $('body.single-post');
      let etRecalculateOffset                             = false;
      let et_header_height;
      let et_header_modifier;
      let et_header_offset;
      let et_primary_header_top;
      const $et_header_style_split                        = $('.et_header_style_split');
      const $et_top_navigation                            = $('#et-top-navigation');
      const $logo                                         = $('#logo');
      const $et_sticky_image                              = $('.et_pb_image_sticky');
      const $et_pb_counter_amount                         = $('.et_pb_counter_amount');
      let $et_pb_carousel                                 = $('.et_pb_carousel');
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

      window.et_pb_slider_init = function($this_slider) {
        const et_slider_settings = {
          fade_speed: 700,
          slide: ! $this_slider.hasClass('et_pb_gallery') ? '.et_pb_slide' : '.et_pb_gallery_item',
        };

        if ($this_slider.hasClass('et_pb_slider_no_arrows')) et_slider_settings.use_arrows = false;

        if ($this_slider.hasClass('et_pb_slider_no_pagination')) et_slider_settings.use_controls = false;

        if ($this_slider.hasClass('et_slider_auto')) {
          const et_slider_autospeed_class_value = /et_slider_speed_(\d+)/g;

          et_slider_settings.slideshow = true;

          const et_slider_autospeed = et_slider_autospeed_class_value.exec($this_slider.attr('class'));

          et_slider_settings.slideshow_speed = null === et_slider_autospeed ? 10 : et_slider_autospeed[1];
        }

        if ($this_slider.parent().hasClass('et_pb_video_slider')) {
          et_slider_settings.controls_below     = true;
          et_slider_settings.append_controls_to = $this_slider.parent();

          setTimeout(() => {
            $('.et_pb_preload').removeClass('et_pb_preload');
          }, 500);
        }

        if ($this_slider.hasClass('et_pb_slider_carousel')) et_slider_settings.use_carousel = true;

        $this_slider.et_pb_simple_slider(et_slider_settings);
      };

      const $et_top_menu                   = $et_menu_selector;
      const et_parent_menu_longpress_limit = 300;
      let et_parent_menu_longpress_start;
      const et_parent_menu_click           = true;
      const et_menu_hover_triggered        = false;

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

      if ($et_pb_video_section.length || isBuilder) {
        window.et_pb_video_section_init = function($et_pb_video_section) {
          $et_pb_video_section.find('video').mediaelementplayer({
            pauseOtherPlayers: false,
            success(mediaElement, domObject) {
              mediaElement.addEventListener('loadeddata', () => {
                et_pb_resize_section_video_bg($(domObject));
                et_pb_center_video($(domObject).closest('.mejs-video'));
              }, false);

              mediaElement.addEventListener('canplay', () => {
                $(domObject).closest('.et_pb_preload').removeClass('et_pb_preload');
              }, false);
            },
          });
        };

        $et_pb_video_section.length > 0 && et_pb_video_section_init($et_pb_video_section);
      }

      et_init_audio_modules();

      if (! isBlockLayoutPreview && $et_post_gallery.length > 0) {
        // swipe support in magnific popup only if gallery exists
        const magnificPopup = $.magnificPopup.instance;

        $('body').on('swiperight', '.mfp-container', () => {
          magnificPopup.prev();
        });
        $('body').on('swipeleft', '.mfp-container', () => {
          magnificPopup.next();
        });

        $et_post_gallery.each(function() {
          $(this).magnificPopup({
            delegate: '.et_pb_gallery_image a',
            type: 'image',
            removalDelay: 500,
            gallery: {
              enabled: true,
              navigateByImgClick: true,
            },
            mainClass: 'mfp-fade',
            zoom: {
              enabled: window.et_pb_custom && ! window.et_pb_custom.is_builder_plugin_used,
              duration: 500,
              opener(element) {
                return element.find('img');
              },
            },
            autoFocusLast: false,
          });
        });

        // prevent attaching of any further actions on click
        $et_post_gallery.find('a').off('click');
      }

      if (! isBlockLayoutPreview && ($et_lightbox_image.length > 0 || isBuilder)) {
        // prevent attaching of any further actions on click
        $et_lightbox_image.off('click');
        $et_lightbox_image.on('click');

        window.et_pb_image_lightbox_init = function($et_lightbox_image) {
          // Delay the initialization if magnificPopup hasn't finished loading yet.
          if (! $et_lightbox_image.magnificPopup) {
            return jQuery(window).on('load', () => { window.et_pb_image_lightbox_init($et_lightbox_image); });
          }
          $et_lightbox_image.magnificPopup({
            type: 'image',
            removalDelay: 500,
            mainClass: 'mfp-fade',
            zoom: {
              enabled: window.et_pb_custom && ! window.et_pb_custom.is_builder_plugin_used,
              duration: 500,
              opener(element) {
                return element.find('img');
              },
            },
            autoFocusLast: false,
          });
        };

        et_pb_image_lightbox_init($et_lightbox_image);
      }

      if ($et_pb_slider.length || isBuilder) {
        $et_pb_slider.each(function() {
          const $this_slider = $(this);

          et_pb_slider_init($this_slider);
        });
      }

      $et_pb_carousel = $('.et_pb_carousel');
      if ($et_pb_carousel.length || isBuilder) {
        $et_pb_carousel.each(function() {
          const $this_carousel       = $(this);
          const et_carousel_settings = {
            slide_duration: 1000,
          };

          $this_carousel.et_pb_simple_carousel(et_carousel_settings);
        });
      }

      if (grid_containers.length || isBuilder) {
        $(grid_containers).each(function() {
          window.et_pb_set_responsive_grid($(this), '.et_pb_grid_item');
        });
      }

      function fullwidth_portfolio_carousel_slide($arrow) {
        const $the_portfolio         = $arrow.parents('.et_pb_fullwidth_portfolio');
        const $portfolio_items       = $the_portfolio.find('.et_pb_portfolio_items');
        const $the_portfolio_items   = $portfolio_items.find('.et_pb_portfolio_item');
        const $active_carousel_group = $portfolio_items.find('.et_pb_carousel_group.active');
        const slide_duration         = 700;
        const items                  = $portfolio_items.data('items');
        const columns                = $portfolio_items.data('portfolio-columns');
        const item_width             = $active_carousel_group.innerWidth() / columns;
        const original_item_width    = `${100 / columns}%`;

        if ('undefined' === typeof items) {
          return;
        }

        if ($the_portfolio.data('carouseling')) {
          return;
        }

        $the_portfolio.data('carouseling', true);

        $active_carousel_group.children().each(function() {
          $(this).css({ width: `${item_width + 1}px`, 'max-width': `${item_width}px`, position: 'absolute', left: `${(item_width * ($(this).data('position') - 1))}px` });
        });

        if ($arrow.hasClass('et-pb-arrow-next')) {
          let $next_carousel_group;
          var current_position      = 1;
          let next_position         = 1;
          var active_items_start    = items.indexOf($active_carousel_group.children().first()[0]);
          var active_items_end      = active_items_start + columns;
          const next_items_start    = active_items_end;
          const next_items_end      = next_items_start + columns;
          var active_carousel_width = $active_carousel_group.innerWidth();

          $next_carousel_group = $('<div class="et_pb_carousel_group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);
          $next_carousel_group.css({ width: `${active_carousel_width}px`, 'max-width': `${active_carousel_width}px` }).show();

          // this is an endless loop, so it can decide internally when to break out, so that next_position
          // can get filled up, even to the extent of an element having both and current_ and next_ position
          for (let x = 0, total = 0; ; x++, total++) {
            if (total >= active_items_start && total < active_items_end) {
              $(items[x]).addClass(`changing_position current_position current_position_${current_position}`);
              $(items[x]).data('current_position', current_position);
              current_position++;
            }

            if (total >= next_items_start && total < next_items_end) {
              $(items[x]).data('next_position', next_position);
              $(items[x]).addClass(`changing_position next_position next_position_${next_position}`);

              if (! $(items[x]).hasClass('current_position')) {
                $(items[x]).addClass('container_append');
              } else {
                $(items[x]).clone(true).appendTo($active_carousel_group).hide()
                  .addClass('delayed_container_append_dup')
                  .attr('id', `${$(items[x]).attr('id')}-dup`);
                $(items[x]).addClass('delayed_container_append');
              }

              next_position++;
            }

            if (next_position > columns) {
              break;
            }

            if (x >= (items.length - 1)) {
              x = - 1;
            }
          }

          const sorted = $portfolio_items.find('.container_append, .delayed_container_append_dup').sort((a, b) => {
            const el_a_position = parseInt($(a).data('next_position'));
            const el_b_position = parseInt($(b).data('next_position'));
            return (el_a_position < el_b_position) ? - 1 : (el_a_position > el_b_position) ? 1 : 0;
          });

          $(sorted).show().appendTo($next_carousel_group);

          $next_carousel_group.children().each(function() {
            $(this).css({ width: `${item_width}px`, 'max-width': `${item_width}px`, position: 'absolute', left: `${(item_width * ($(this).data('next_position') - 1))}px` });
          });

          $active_carousel_group.animate({
            left: '-100%',
          }, {
            duration: slide_duration,
            complete() {
              $portfolio_items.find('.delayed_container_append').each(function() {
                $(this).css({ width: `${item_width}px`, 'max-width': `${item_width}px`, position: 'absolute', left: `${(item_width * ($(this).data('next_position') - 1))}px` });
                $(this).appendTo($next_carousel_group);
              });

              $active_carousel_group.removeClass('active');
              $active_carousel_group.children().each(function() {
                const position   = $(this).data('position');
                current_position = $(this).data('current_position');
                $(this).removeClass(`position_${position} ` + `changing_position current_position current_position_${current_position}`);
                $(this).data('position', '');
                $(this).data('current_position', '');
                $(this).hide();
                $(this).css({ position: '', width: '', 'max-width': '', left: '' });
                $(this).appendTo($portfolio_items);
              });

              $active_carousel_group.remove();

              et_carousel_auto_rotate($the_portfolio);
            },
          });

          $next_carousel_group.addClass('active').css({ position: 'absolute', top: '0px', left: '100%' });
          $next_carousel_group.animate({
            left: '0%',
          }, {
            duration: slide_duration,
            complete() {
              setTimeout(() => {
                $next_carousel_group.removeClass('next').addClass('active').css({ position: '', width: '', 'max-width': '', top: '', left: '' });

                $next_carousel_group.find('.delayed_container_append_dup').remove();

                $next_carousel_group.find('.changing_position').each(function(index) {
                  const position   = $(this).data('position');
                  current_position = $(this).data('current_position');
                  next_position    = $(this).data('next_position');
                  $(this).removeClass(`container_append delayed_container_append position_${position} ` + `changing_position current_position current_position_${current_position} next_position next_position_${next_position}`);
                  $(this).data('current_position', '');
                  $(this).data('next_position', '');
                  $(this).data('position', (index + 1));
                });

                $portfolio_items.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');
                et_pb_set_responsive_grid($portfolio_items, '.et_pb_portfolio_item:visible');

                $next_carousel_group.children().css({ position: '', width: original_item_width, 'max-width': original_item_width, left: '' });

                $the_portfolio.data('carouseling', false);
              }, 100);
            },
          });
        } else {
          let $prev_carousel_group;
          var current_position      = columns;
          let prev_position         = columns;
          const columns_span        = columns - 1;
          var active_items_start    = items.indexOf($active_carousel_group.children().last()[0]);
          var active_items_end      = active_items_start - columns_span;
          const prev_items_start    = active_items_end - 1;
          const prev_items_end      = prev_items_start - columns_span;
          var active_carousel_width = $active_carousel_group.innerWidth();

          $prev_carousel_group = $('<div class="et_pb_carousel_group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);
          $prev_carousel_group.css({ left: `-${active_carousel_width}px`, width: `${active_carousel_width}px`, 'max-width': `${active_carousel_width}px` }).show();

          // this is an endless loop, so it can decide internally when to break out, so that next_position
          // can get filled up, even to the extent of an element having both and current_ and next_ position
          for (let x = (items.length - 1), total = (items.length - 1); ; x--, total--) {
            if (total <= active_items_start && total >= active_items_end) {
              $(items[x]).addClass(`changing_position current_position current_position_${current_position}`);
              $(items[x]).data('current_position', current_position);
              current_position--;
            }

            if (total <= prev_items_start && total >= prev_items_end) {
              $(items[x]).data('prev_position', prev_position);
              $(items[x]).addClass(`changing_position prev_position prev_position_${prev_position}`);

              if (! $(items[x]).hasClass('current_position')) {
                $(items[x]).addClass('container_append');
              } else {
                $(items[x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup')
                  .attr('id', `${$(items[x]).attr('id')}-dup`);
                $(items[x]).addClass('delayed_container_append');
              }

              prev_position--;
            }

            if (prev_position <= 0) {
              break;
            }

            if (0 == x) {
              x = items.length;
            }
          }

          const sorted = $portfolio_items.find('.container_append, .delayed_container_append_dup').sort((a, b) => {
            const el_a_position = parseInt($(a).data('prev_position'));
            const el_b_position = parseInt($(b).data('prev_position'));
            return (el_a_position < el_b_position) ? - 1 : (el_a_position > el_b_position) ? 1 : 0;
          });

          $(sorted).show().appendTo($prev_carousel_group);

          $prev_carousel_group.children().each(function() {
            $(this).css({ width: `${item_width}px`, 'max-width': `${item_width}px`, position: 'absolute', left: `${(item_width * ($(this).data('prev_position') - 1))}px` });
          });

          $active_carousel_group.animate({
            left: '100%',
          }, {
            duration: slide_duration,
            complete() {
              $portfolio_items.find('.delayed_container_append').reverse().each(function() {
                $(this).css({ width: `${item_width}px`, 'max-width': `${item_width}px`, position: 'absolute', left: `${(item_width * ($(this).data('prev_position') - 1))}px` });
                $(this).prependTo($prev_carousel_group);
              });

              $active_carousel_group.removeClass('active');
              $active_carousel_group.children().each(function() {
                const position   = $(this).data('position');
                current_position = $(this).data('current_position');
                $(this).removeClass(`position_${position} ` + `changing_position current_position current_position_${current_position}`);
                $(this).data('position', '');
                $(this).data('current_position', '');
                $(this).hide();
                $(this).css({ position: '', width: '', 'max-width': '', left: '' });
                $(this).appendTo($portfolio_items);
              });

              $active_carousel_group.remove();
            },
          });

          $prev_carousel_group.addClass('active').css({ position: 'absolute', top: '0px', left: '-100%' });
          $prev_carousel_group.animate({
            left: '0%',
          }, {
            duration: slide_duration,
            complete() {
              setTimeout(() => {
                $prev_carousel_group.removeClass('prev').addClass('active').css({ position: '', width: '', 'max-width': '', top: '', left: '' });

                $prev_carousel_group.find('.delayed_container_append_dup').remove();

                $prev_carousel_group.find('.changing_position').each(function(index) {
                  let position     = $(this).data('position');
                  current_position = $(this).data('current_position');
                  prev_position = $(this).data('prev_position');
                  $(this).removeClass(`container_append delayed_container_append position_${position} ` + `changing_position current_position current_position_${current_position} prev_position prev_position_${prev_position}`);
                  $(this).data('current_position', '');
                  $(this).data('prev_position', '');
                  position = index + 1;
                  $(this).data('position', position);
                  $(this).addClass(`position_${position}`);
                });

                $portfolio_items.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');
                et_pb_set_responsive_grid($portfolio_items, '.et_pb_portfolio_item:visible');

                $prev_carousel_group.children().css({ position: '', width: original_item_width, 'max-width': original_item_width, left: '' });
                $the_portfolio.data('carouseling', false);
              }, 100);
            },
          });
        }
      }

      function set_fullwidth_portfolio_columns($the_portfolio, carousel_mode) {
        let columns;
        const $portfolio_items      = $the_portfolio.find('.et_pb_portfolio_items');
        const portfolio_items_width = $portfolio_items.width();
        const $the_portfolio_items  = $portfolio_items.find('.et_pb_portfolio_item');
        const portfolio_item_count  = $the_portfolio_items.length;

        if ('undefined' === typeof $the_portfolio_items) {
          return;
        }

        // calculate column breakpoints
        if (portfolio_items_width >= 1600) {
          columns = 5;
        } else if (portfolio_items_width >= 1024) {
          columns = 4;
        } else if (portfolio_items_width >= 768) {
          columns = 3;
        } else if (portfolio_items_width >= 480) {
          columns = 2;
        } else {
          columns = 1;
        }

        // set height of items
        const portfolio_item_width  = portfolio_items_width / columns;
        const portfolio_item_height = portfolio_item_width * 0.75;

        if (carousel_mode) {
          $portfolio_items.css({ height: `${portfolio_item_height}px` });
        }

        $the_portfolio_items.css({ height: `${portfolio_item_height}px` });

        if (columns === $portfolio_items.data('portfolio-columns')) {
          return;
        }

        if ($the_portfolio.data('columns_setting_up')) {
          return;
        }

        $the_portfolio.data('columns_setting_up', true);

        const portfolio_item_width_percentage = `${100 / columns}%`;
        $the_portfolio_items.css({ width: portfolio_item_width_percentage, 'max-width': portfolio_item_width_percentage });

        // store last setup column
        $portfolio_items.removeClass(`columns-${$portfolio_items.data('portfolio-columns')}`);
        $portfolio_items.addClass(`columns-${columns}`);
        $portfolio_items.data('portfolio-columns', columns);

        if (! carousel_mode) {
          return $the_portfolio.data('columns_setting_up', false);
        }

        // kill all previous groups to get ready to re-group
        if ($portfolio_items.find('.et_pb_carousel_group').length) {
          $the_portfolio_items.appendTo($portfolio_items);
          $portfolio_items.find('.et_pb_carousel_group').remove();
        }

        // setup the grouping
        const the_portfolio_items = $portfolio_items.data('items');
        const $carousel_group     = $('<div class="et_pb_carousel_group active">').appendTo($portfolio_items);

        if ('undefined' === typeof the_portfolio_items) {
          return;
        }

        $the_portfolio_items.data('position', '');
        if (the_portfolio_items.length <= columns) {
          $portfolio_items.find('.et-pb-slider-arrows').hide();
        } else {
          $portfolio_items.find('.et-pb-slider-arrows').show();
        }

        for (let position = 1, x = 0; x < the_portfolio_items.length; x++, position++) {
          if (x < columns) {
            $(the_portfolio_items[x]).show();
            $(the_portfolio_items[x]).appendTo($carousel_group);
            $(the_portfolio_items[x]).data('position', position);
            $(the_portfolio_items[x]).addClass(`position_${position}`);
          } else {
            position = $(the_portfolio_items[x]).data('position');
            $(the_portfolio_items[x]).removeClass(`position_${position}`);
            $(the_portfolio_items[x]).data('position', '');
            $(the_portfolio_items[x]).hide();
          }
        }

        $the_portfolio.data('columns_setting_up', false);
      }

      function et_carousel_auto_rotate($carousel) {
        if ('on' === $carousel.data('auto-rotate') && $carousel.find('.et_pb_portfolio_item').length > $carousel.find('.et_pb_carousel_group .et_pb_portfolio_item').length && ! $carousel.hasClass('et_carousel_hovered')) {
          const et_carousel_timer = setTimeout(() => {
            fullwidth_portfolio_carousel_slide($carousel.find('.et-pb-arrow-next'));
          }, $carousel.data('auto-rotate-speed'));

          $carousel.data('et_carousel_timer', et_carousel_timer);
        }
      }

      if ($et_pb_fullwidth_portfolio.length || isBuilder) {
        window.et_fullwidth_portfolio_init = function($the_portfolio, $callback) {
          const $portfolio_items = $the_portfolio.find('.et_pb_portfolio_items');

          $portfolio_items.data('items', $portfolio_items.find('.et_pb_portfolio_item').toArray());
          $the_portfolio.data('columns_setting_up', false);

          if ($the_portfolio.hasClass('et_pb_fullwidth_portfolio_carousel')) {
            // add left and right arrows
            $portfolio_items.prepend(`${'<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#">' + '<span>'}${et_pb_custom.previous}</span>` + '</a><a class="et-pb-arrow-next" href="#">' + `<span>${et_pb_custom.next}</span>` + '</a></div>');

            set_fullwidth_portfolio_columns($the_portfolio, true);

            et_carousel_auto_rotate($the_portfolio);

            // swipe support
            $the_portfolio.on('swiperight', function() {
              $(this).find('.et-pb-arrow-prev').trigger('click');
            });
            $the_portfolio.on('swipeleft', function() {
              $(this).find('.et-pb-arrow-next').trigger('click');
            });

            $the_portfolio.on('mouseenter', function() {
              $(this).addClass('et_carousel_hovered');
              if (typeof $(this).data('et_carousel_timer') !== 'undefined') {
                clearInterval($(this).data('et_carousel_timer'));
              }
            }).on('mouseleave', function() {
              $(this).removeClass('et_carousel_hovered');
              et_carousel_auto_rotate($(this));
            });

            $the_portfolio.data('carouseling', false);

            $the_portfolio.on('click', '.et-pb-slider-arrows a', function(e) {
              fullwidth_portfolio_carousel_slide($(this));
              e.preventDefault();
              return false;
            });
          } else {
            // setup fullwidth portfolio grid
            set_fullwidth_portfolio_columns($the_portfolio, false);
          }

          if ('function' === typeof $callback) {
            $callback();
          }
        };

        $et_pb_fullwidth_portfolio.each(function() {
          et_fullwidth_portfolio_init($(this));
        });
      }

      if ($('.et_pb_section_video').length) {
        window._wpmejsSettings.pauseOtherPlayers = false;
      }

      if ($et_pb_filterable_portfolio.length || isBuilder) {
        window.et_pb_filterable_portfolio_init = function($selector) {
          if (typeof $selector !== 'undefined') {
            set_filterable_portfolio_init($selector);
          } else {
            $et_pb_filterable_portfolio.each(function() {
              set_filterable_portfolio_init($(this));
            });
          }
        };

        window.set_filterable_portfolio_init = function($the_portfolio, $callback) {
          const $the_portfolio_items = $the_portfolio.find('.et_pb_portfolio_items');
          const all_portfolio_items  = $the_portfolio_items.clone(); // cache for all the portfolio items

          $the_portfolio.show();
          $the_portfolio.find('.et_pb_portfolio_item').addClass('active');
          $the_portfolio.css('display', 'block');

          window.set_filterable_grid_items($the_portfolio);

          if ('function' === typeof $callback) {
            $callback();
          }

          $the_portfolio.on('click', '.et_pb_portfolio_filter a', function(e) {
            e.preventDefault();
            const category_slug        = $(this).data('category-slug');
            const $the_portfolio       = $(this).parents('.et_pb_filterable_portfolio');
            const $the_portfolio_items = $the_portfolio.find('.et_pb_portfolio_items');

            if ('all' == category_slug) {
              $the_portfolio.find('.et_pb_portfolio_filter a').removeClass('active');
              $the_portfolio.find('.et_pb_portfolio_filter_all a').addClass('active');

              // remove all items from the portfolio items container
              $the_portfolio_items.empty();

              // fill the portfolio items container with cached items from memory
              $the_portfolio_items.append(all_portfolio_items.find('.et_pb_portfolio_item').clone());
              $the_portfolio.find('.et_pb_portfolio_item').addClass('active');
            } else {
              $the_portfolio.find('.et_pb_portfolio_filter_all').removeClass('active');
              $the_portfolio.find('.et_pb_portfolio_filter a').removeClass('active');
              $the_portfolio.find('.et_pb_portfolio_filter_all a').removeClass('active');
              $(this).addClass('active');

              // remove all items from the portfolio items container
              $the_portfolio_items.empty();

              // fill the portfolio items container with cached items from memory
              $the_portfolio_items.append(all_portfolio_items.find(`.et_pb_portfolio_item.project_category_${$(this).data('category-slug')}`).clone());

              $the_portfolio_items.find('.et_pb_portfolio_item').removeClass('active');
              $the_portfolio_items.find(`.et_pb_portfolio_item.project_category_${$(this).data('category-slug')}`).addClass('active').removeClass('inactive');
            }

            window.set_filterable_grid_items($the_portfolio);

            setTimeout(() => {
              set_filterable_portfolio_hash($the_portfolio);
            }, 500);

            $the_portfolio.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');
            et_pb_set_responsive_grid($the_portfolio, '.et_pb_portfolio_item:visible');
          });

          $the_portfolio.on('click', '.et_pb_portofolio_pagination a', function(e) {
            e.preventDefault();

            let to_page                = $(this).data('page');
            const $the_portfolio       = $(this).parents('.et_pb_filterable_portfolio');
            const $the_portfolio_items = $the_portfolio.find('.et_pb_portfolio_items');

            et_pb_smooth_scroll($the_portfolio, false, 800);

            if ($(this).hasClass('page-prev')) {
              to_page = parseInt($(this).parents('ul').find('a.active').data('page')) - 1;
            } else if ($(this).hasClass('page-next')) {
              to_page = parseInt($(this).parents('ul').find('a.active').data('page')) + 1;
            }

            $(this).parents('ul').find('a').removeClass('active');
            $(this).parents('ul').find(`a.page-${to_page}`).addClass('active');

            const current_index = $(this).parents('ul').find(`a.page-${to_page}`).parent()
              .index();
            const total_pages   = $(this).parents('ul').find('li.page').length;

            $(this).parent().nextUntil(`.page-${current_index + 3}`).show();
            $(this).parent().prevUntil(`.page-${current_index - 3}`).show();

            $(this).parents('ul').find('li.page').each(function(i) {
              if (! $(this).hasClass('prev') && ! $(this).hasClass('next')) {
                if (i < (current_index - 3)) {
                  $(this).hide();
                } else if (i > (current_index + 1)) {
                  $(this).hide();
                } else {
                  $(this).show();
                }

                if (total_pages - current_index <= 2 && total_pages - i <= 5) {
                  $(this).show();
                } else if (current_index <= 3 && i <= 4) {
                  $(this).show();
                }
              }
            });

            if (to_page > 1) {
              $(this).parents('ul').find('li.prev').show();
            } else {
              $(this).parents('ul').find('li.prev').hide();
            }

            if ($(this).parents('ul').find('a.active').hasClass('last-page')) {
              $(this).parents('ul').find('li.next').hide();
            } else {
              $(this).parents('ul').find('li.next').show();
            }

            $the_portfolio.find('.et_pb_portfolio_item').hide();
            $the_portfolio.find('.et_pb_portfolio_item').filter(function(index) {
              return $(this).data('page') === to_page;
            }).show();

            window.et_pb_set_responsive_grid($the_portfolio.find('.et_pb_portfolio_items'), '.et_pb_portfolio_item');

            setTimeout(() => {
              set_filterable_portfolio_hash($the_portfolio);
            }, 500);

            $the_portfolio.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');
            et_pb_set_responsive_grid($the_portfolio, '.et_pb_portfolio_item:visible');
          });

          $the_portfolio.on('et_hashchange', event => {
            const { params } = event;
            $the_portfolio   = $(`#${event.target.id}`);

            if (! $the_portfolio.find(`.et_pb_portfolio_filter a[data-category-slug="${params[0]}"]`).hasClass('active')) {
              $the_portfolio.find(`.et_pb_portfolio_filter a[data-category-slug="${params[0]}"]`).trigger('click');
            }

            if (params[1]) {
              setTimeout(() => {
                if (! $the_portfolio.find(`.et_pb_portofolio_pagination a.page-${params[1]}`).hasClass('active')) {
                  $the_portfolio.find(`.et_pb_portofolio_pagination a.page-${params[1]}`).addClass('active').trigger('click');
                }
              }, 300);
            }
          });
        };

        window.set_filterable_grid_items = function($the_portfolio) {
          const active_category = $the_portfolio.find('.et_pb_portfolio_filter > a.active').data('category-slug');
          let $the_portfolio_visible_items;

          window.et_pb_set_responsive_grid($the_portfolio.find('.et_pb_portfolio_items'), '.et_pb_portfolio_item');

          if ('all' === active_category) {
            $the_portfolio_visible_items = $the_portfolio.find('.et_pb_portfolio_item');
          } else {
            $the_portfolio_visible_items = $the_portfolio.find(`.et_pb_portfolio_item.project_category_${active_category}`);
          }

          var visible_grid_items = $the_portfolio_visible_items.length;
          const posts_number     = $the_portfolio.data('posts-number');
          const pages            = 0 === posts_number ? 1 : Math.ceil(visible_grid_items / posts_number);

          window.set_filterable_grid_pages($the_portfolio, pages);

          var visible_grid_items = 0;
          let _page              = 1;
          $the_portfolio.find('.et_pb_portfolio_item').data('page', '');
          $the_portfolio_visible_items.each(function(i) {
            visible_grid_items++;
            if (0 === parseInt(visible_grid_items % posts_number)) {
              $(this).data('page', _page);
              _page++;
            } else {
              $(this).data('page', _page);
            }
          });

          $the_portfolio_visible_items.filter(function() {
            return 1 == $(this).data('page');
          }).show();

          $the_portfolio_visible_items.filter(function() {
            return $(this).data('page') != 1;
          }).hide();
        };

        window.set_filterable_grid_pages = function($the_portfolio, pages) {
          const $pagination = $the_portfolio.find('.et_pb_portofolio_pagination');

          if (! $pagination.length) {
            return;
          }

          $pagination.html('<ul></ul>');
          if (pages <= 1) {
            return;
          }

          const $pagination_list = $pagination.children('ul');
          $pagination_list.append(`<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">${et_pb_custom.prev}</a></li>`);
          for (let page = 1; page <= pages; page++) {
            const first_page_class  = 1 === page ? ' active' : '';
            const last_page_class   = page === pages ? ' last-page' : '';
            const hidden_page_class = page >= 5 ? ' style="display:none;"' : '';
            $pagination_list.append(`<li${hidden_page_class} class="page page-${page}"><a href="#" data-page="${page}" class="page-${page}${first_page_class}${last_page_class}">${page}</a></li>`);
          }
          $pagination_list.append(`<li class="next"><a href="#" data-page="next" class="page-next">${et_pb_custom.next}</a></li>`);
        };

        function set_filterable_portfolio_hash($the_portfolio) {
          if (! $the_portfolio.attr('id')) {
            return;
          }

          let this_portfolio_state = [];
          this_portfolio_state.push($the_portfolio.attr('id'));
          this_portfolio_state.push($the_portfolio.find('.et_pb_portfolio_filter > a.active').data('category-slug'));

          if ($the_portfolio.find('.et_pb_portofolio_pagination a.active').length) {
            this_portfolio_state.push($the_portfolio.find('.et_pb_portofolio_pagination a.active').data('page'));
          } else {
            this_portfolio_state.push(1);
          }

          this_portfolio_state = this_portfolio_state.join(et_hash_module_param_seperator);

          et_set_hash(this_portfolio_state);
        }

        // init portfolio if .on('load') event was fired already, wait for the window load otherwise.
        if (window.et_load_event_fired) {
          et_pb_filterable_portfolio_init();
        } else {
          $(window).on('load', () => {
            et_pb_filterable_portfolio_init();
          }); // End $(window).on('load')
        }
      } /*  end if ( $et_pb_filterable_portfolio.length ) */

      if ($et_pb_gallery.length || isBuilder) {
        window.set_gallery_grid_items = function($the_gallery) {
          const $the_gallery_items_container = $the_gallery.find('.et_pb_gallery_items');
          const $the_gallery_items           = $the_gallery_items_container.find('.et_pb_gallery_item');

          var total_grid_items        = $the_gallery_items.length;
          const posts_number_original = parseInt($the_gallery_items_container.attr('data-per_page'));
          const posts_number          = isNaN(posts_number_original) || 0 === posts_number_original ? 4 : posts_number_original;
          const pages                 = Math.ceil(total_grid_items / posts_number);

          window.et_pb_set_responsive_grid($the_gallery_items_container, '.et_pb_gallery_item');

          set_gallery_grid_pages($the_gallery, pages);

          var total_grid_items = 0;
          let _page            = 1;

          $the_gallery_items.data('page', '');
          $the_gallery_items.each(function(i) {
            total_grid_items++;

            // Do some caching
            const $this = $(this);
            if (0 === parseInt(total_grid_items % posts_number)) {
              $this.data('page', _page);
              _page++;
            } else {
              $this.data('page', _page);
            }
          });

          const visible_items = $the_gallery_items.filter(function() {
            return 1 == $(this).data('page');
          }).show();

          $the_gallery_items.filter(function() {
            return $(this).data('page') != 1;
          }).hide();
        };

        window.set_gallery_grid_pages = function($the_gallery, pages) {
          const $pagination = $the_gallery.find('.et_pb_gallery_pagination');

          if (! $pagination.length) {
            return;
          }

          $pagination.html('<ul></ul>');
          if (pages <= 1) {
            $pagination.hide();
            return;
          }

          const $pagination_list = $pagination.children('ul');
          $pagination_list.append(`<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">${et_pb_custom.prev}</a></li>`);
          for (let page = 1; page <= pages; page++) {
            const first_page_class  = 1 === page ? ' active' : '';
            const last_page_class   = page === pages ? ' last-page' : '';
            const hidden_page_class = page >= 5 ? ' style="display:none;"' : '';
            $pagination_list.append(`<li${hidden_page_class} class="page page-${page}"><a href="#" data-page="${page}" class="page-${page}${first_page_class}${last_page_class}">${page}</a></li>`);
          }
          $pagination_list.append(`<li class="next"><a href="#" data-page="next" class="page-next">${et_pb_custom.next}</a></li>`);
        };

        window.set_gallery_hash = function($the_gallery) {
          if (! $the_gallery.attr('id')) {
            return;
          }

          let this_gallery_state = [];
          this_gallery_state.push($the_gallery.attr('id'));

          if ($the_gallery.find('.et_pb_gallery_pagination a.active').length) {
            this_gallery_state.push($the_gallery.find('.et_pb_gallery_pagination a.active').data('page'));
          } else {
            this_gallery_state.push(1);
          }

          this_gallery_state = this_gallery_state.join(et_hash_module_param_seperator);

          et_set_hash(this_gallery_state);
        };

        window.et_pb_gallery_init = function($the_gallery) {
          if ($the_gallery.hasClass('et_pb_gallery_grid')) {
            $the_gallery.show();
            set_gallery_grid_items($the_gallery);

            $the_gallery.on('et_hashchange', event => {
              const { params } = event;
              $the_gallery     = $(`#${event.target.id}`);
              const page_to    = params[0];

              if ((page_to)) {
                if (! $the_gallery.find(`.et_pb_gallery_pagination a.page-${page_to}`).hasClass('active')) {
                  $the_gallery.find(`.et_pb_gallery_pagination a.page-${page_to}`).addClass('active').trigger('click');
                }
              }
            });
          }
        };

        $et_pb_gallery.each(function() {
          const $the_gallery = $(this);

          et_pb_gallery_init($the_gallery);
        });

        $et_pb_gallery.data('paginating', false);

        window.et_pb_gallery_pagination_nav = function($the_gallery) {
          $the_gallery.on('click', '.et_pb_gallery_pagination a', function(e) {
            e.preventDefault();

            let to_page                        = $(this).data('page');
            const $the_gallery                 = $(this).parents('.et_pb_gallery');
            const $the_gallery_items_container = $the_gallery.find('.et_pb_gallery_items');
            const $the_gallery_items           = $the_gallery_items_container.find('.et_pb_gallery_item');

            if ($the_gallery.data('paginating')) {
              return;
            }

            $the_gallery.data('paginating', true);

            if ($(this).hasClass('page-prev')) {
              to_page = parseInt($(this).parents('ul').find('a.active').data('page')) - 1;
            } else if ($(this).hasClass('page-next')) {
              to_page = parseInt($(this).parents('ul').find('a.active').data('page')) + 1;
            }

            $(this).parents('ul').find('a').removeClass('active');
            $(this).parents('ul').find(`a.page-${to_page}`).addClass('active');

            const current_index = $(this).parents('ul').find(`a.page-${to_page}`).parent()
              .index();
            const total_pages   = $(this).parents('ul').find('li.page').length;

            $(this).parent().nextUntil(`.page-${current_index + 3}`).show();
            $(this).parent().prevUntil(`.page-${current_index - 3}`).show();

            $(this).parents('ul').find('li.page').each(function(i) {
              if (! $(this).hasClass('prev') && ! $(this).hasClass('next')) {
                if (i < (current_index - 3)) {
                  $(this).hide();
                } else if (i > (current_index + 1)) {
                  $(this).hide();
                } else {
                  $(this).show();
                }

                if (total_pages - current_index <= 2 && total_pages - i <= 5) {
                  $(this).show();
                } else if (current_index <= 3 && i <= 4) {
                  $(this).show();
                }
              }
            });

            if (to_page > 1) {
              $(this).parents('ul').find('li.prev').show();
            } else {
              $(this).parents('ul').find('li.prev').hide();
            }

            if ($(this).parents('ul').find('a.active').hasClass('last-page')) {
              $(this).parents('ul').find('li.next').hide();
            } else {
              $(this).parents('ul').find('li.next').show();
            }

            $the_gallery_items.hide();
            const visible_items = $the_gallery_items.filter(function(index) {
              return $(this).data('page') === to_page;
            }).show();

            $the_gallery.data('paginating', false);

            window.et_pb_set_responsive_grid($the_gallery_items_container, '.et_pb_gallery_item');

            setTimeout(() => {
              set_gallery_hash($the_gallery);
            }, 100);
          });
        };
        et_pb_gallery_pagination_nav($et_pb_gallery);

        // Frontend builder's interface wouldn't be able to use $et_pb_gallery as selector
        // due to its react component's nature. Using more global selector works.
        if (isBuilder) {
          et_pb_gallery_pagination_nav($('#et-fb-app'));
        }
      } /*  end if ( $et_pb_gallery.length ) */

      if ($et_pb_counter_amount.length) {
        $et_pb_counter_amount.each(function() {
          window.et_bar_counters_init($(this));
        });
      } /* $et_pb_counter_amount.length */

      window.et_countdown_timer = function(timer) {
        const end_date     = parseInt(timer.attr('data-end-timestamp'));
        const current_date = new Date().getTime() / 1000;
        let seconds_left   = (end_date - current_date);

        let days      = parseInt(seconds_left / 86400);
        days          = days > 0 ? days : 0;
        seconds_left %= 86400;

        let hours = parseInt(seconds_left / 3600);
        hours     = hours > 0 ? hours : 0;

        seconds_left %= 3600;

        let minutes = parseInt(seconds_left / 60);
        minutes     = minutes > 0 ? minutes : 0;

        let seconds = parseInt(seconds_left % 60);
        seconds     = seconds > 0 ? seconds : 0;

        const $days_section    = timer.find('.days > .value').parent('.section');
        const $hours_section   = timer.find('.hours > .value').parent('.section');
        const $minutes_section = timer.find('.minutes > .value').parent('.section');
        const $seconds_section = timer.find('.seconds > .value').parent('.section');


        if (0 == days) {
          if (! $days_section.hasClass('zero')) {
            timer.find('.days > .value').html('000').parent('.section').addClass('zero')
              .next()
              .addClass('zero');
          }
        } else {
          const days_slice = days.toString().length >= 3 ? days.toString().length : 3;
          timer.find('.days > .value').html((`000${days}`).slice(- days_slice));

          if ($days_section.hasClass('zero')) {
            $days_section.removeClass('zero').next().removeClass('zero');
          }
        }

        if (0 === days && 0 === hours) {
          if (! $hours_section.hasClass('zero')) {
            timer.find('.hours > .value').html('00').parent('.section').addClass('zero')
              .next()
              .addClass('zero');
          }
        } else {
          timer.find('.hours > .value').html((`0${hours}`).slice(- 2));

          if ($hours_section.hasClass('zero')) {
            $hours_section.removeClass('zero').next().removeClass('zero');
          }
        }

        if (0 === days && 0 === hours && 0 === minutes) {
          if (! $minutes_section.hasClass('zero')) {
            timer.find('.minutes > .value').html('00').parent('.section').addClass('zero')
              .next()
              .addClass('zero');
          }
        } else {
          timer.find('.minutes > .value').html((`0${minutes}`).slice(- 2));

          if ($minutes_section.hasClass('zero')) {
            $minutes_section.removeClass('zero').next().removeClass('zero');
          }
        }

        if (0 === days && 0 === hours && 0 === minutes && 0 === seconds) {
          if (! $seconds_section.hasClass('zero')) {
            timer.find('.seconds > .value').html('00').parent('.section').addClass('zero');
          }
        } else {
          timer.find('.seconds > .value').html((`0${seconds}`).slice(- 2));

          if ($seconds_section.hasClass('zero')) {
            $seconds_section.removeClass('zero').next().removeClass('zero');
          }
        }
      };

      window.et_countdown_timer_labels = function(timer) {
        if (timer.closest('.et_pb_column_3_8').length || timer.closest('.et_pb_column_1_4').length || timer.children('.et_pb_countdown_timer_container').width() <= 400) {
          timer.find('.days .label').html(timer.find('.days').data('short'));
          timer.find('.hours .label').html(timer.find('.hours').data('short'));
          timer.find('.minutes .label').html(timer.find('.minutes').data('short'));
          timer.find('.seconds .label').html(timer.find('.seconds').data('short'));
        } else {
          timer.find('.days .label').html(timer.find('.days').data('full'));
          timer.find('.hours .label').html(timer.find('.hours').data('full'));
          timer.find('.minutes .label').html(timer.find('.minutes').data('full'));
          timer.find('.seconds .label').html(timer.find('.seconds').data('full'));
        }
      };

      if ($et_pb_countdown_timer.length || isBuilder) {
        window.et_pb_countdown_timer_init = function($et_pb_countdown_timer) {
          $et_pb_countdown_timer.each(function() {
            const timer = $(this);
            et_countdown_timer_labels(timer);
            et_countdown_timer(timer);
            setInterval(() => {
              et_countdown_timer(timer);
            }, 1000);
          });
        };
        et_pb_countdown_timer_init($et_pb_countdown_timer);
      }

      window.et_pb_tabs_init = function($et_pb_tabs_all) {
        const init_hash_for_tab = function($et_pb_tabs) {
          const { hash } = window.location;
          if ('' !== hash) {
            let hash_value       = hash.replace( '#', '' );
            hash_value           = /^tab\-/.test( hash_value ) ? hash_value : `tab-${hash_value}`;
            const $et_pb_hash_el = $et_pb_tabs.find(`.et_pb_tabs_controls li a[href="#${hash_value}"]`);

            if ($et_pb_hash_el.length) {
              $et_pb_hash_el.parent().trigger('click');
            }
          }
        };
        $et_pb_tabs_all.each(function() {
          const $et_pb_tabs    = $(this);
          const $et_pb_tabs_li = $et_pb_tabs.find('.et_pb_tabs_controls li');
          const active_slide   = isTB || isBFB || isVB ? 0 : $et_pb_tabs.find('.et_pb_tab_active').index();

          const slider_options = {
            use_controls: false,
            use_arrows: false,
            slide: '.et_pb_all_tabs > div',
            tabs_animation: true,
          };

          if (0 !== active_slide) {
            slider_options.active_slide = active_slide;
          }

          $et_pb_tabs.et_pb_simple_slider(slider_options).on('et_hashchange', event => {
            const { params } = event;
            const $the_tabs  = $(`#${event.target.id}`);
            const active_tab = params[0];
            if (! $the_tabs.find('.et_pb_tabs_controls li').eq(active_tab).hasClass('et_pb_tab_active')) {
              $the_tabs.find('.et_pb_tabs_controls li').eq(active_tab).trigger('click');
            }
          });

          $et_pb_tabs_li.on('click', function() {
            const $this_el        = $(this);
            const $tabs_container = $this_el.closest('.et_pb_tabs').data('et_pb_simple_slider');

            if ($tabs_container.et_animation_running) return false;

            $this_el.addClass('et_pb_tab_active').siblings().removeClass('et_pb_tab_active');

            $tabs_container.data('et_pb_simple_slider').et_slider_move_to($this_el.index());

            if ($this_el.closest('.et_pb_tabs').attr('id')) {
              let tab_state = [];
              tab_state.push($this_el.closest('.et_pb_tabs').attr('id'));
              tab_state.push($this_el.index());
              tab_state = tab_state.join(et_hash_module_param_seperator);
              et_set_hash(tab_state);
            }

            return false;
          });

          init_hash_for_tab($et_pb_tabs);

          window.et_pb_set_tabs_height();
        });
      };

      if ($et_pb_tabs.length || isBuilder) {
        window.et_pb_tabs_init($et_pb_tabs);
      }

      if ($et_pb_map.length || isBuilder) {
        function et_pb_init_maps() {
          $et_pb_map.each(function() {
            et_pb_map_init($(this));
          });
        }

        window.et_pb_map_init = function($this_map_container) {
          if ('undefined' === typeof google || 'undefined' === typeof google.maps) {
            return;
          }

          const current_mode      = et_pb_get_current_window_mode();
          et_animation_breakpoint = current_mode;
          const suffix            = current_mode !== 'desktop' ? `-${current_mode}` : '';
          const prev_suffix       = 'phone' === current_mode ? '-tablet' : '';
          let grayscale_value     = $this_map_container.attr(`data-grayscale${suffix}`) || 0;
          if (! grayscale_value) {
            grayscale_value = $this_map_container.attr(`data-grayscale${prev_suffix}`) || $this_map_container.attr('data-grayscale') || 0;
          }

          const $this_map        = $this_map_container.children('.et_pb_map');
          let this_map_grayscale = grayscale_value;
          const is_draggable     = (et_is_mobile_device && $this_map.data('mobile-dragging') !== 'off') || ! et_is_mobile_device;
          let infowindow_active;

          if (this_map_grayscale !== 0) {
            this_map_grayscale = `-${this_map_grayscale.toString()}`;
          }

          // Being saved to pass lat and lang of center location.
          const data_center_lat = parseFloat($this_map.attr('data-center-lat')) || 0;
          const data_center_lng = parseFloat($this_map.attr('data-center-lng')) || 0;

          $this_map_container.data('map', new google.maps.Map($this_map[0], {
            zoom: parseInt($this_map.attr('data-zoom')),
            center: new google.maps.LatLng(data_center_lat, data_center_lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: 'on' == $this_map.attr('data-mouse-wheel'),
            draggable: is_draggable,
            panControlOptions: {
              position: $this_map_container.is('.et_beneath_transparent_nav') ? google.maps.ControlPosition.LEFT_BOTTOM : google.maps.ControlPosition.LEFT_TOP,
            },
            zoomControlOptions: {
              position: $this_map_container.is('.et_beneath_transparent_nav') ? google.maps.ControlPosition.LEFT_BOTTOM : google.maps.ControlPosition.LEFT_TOP,
            },
            styles: [{
              stylers: [
                { saturation: parseInt(this_map_grayscale) },
              ],
            }],
          }));

          $this_map_container.find('.et_pb_map_pin').each(function() {
            const $this_marker = $(this);

            const marker = new google.maps.Marker({
              position: new google.maps.LatLng(parseFloat($this_marker.attr('data-lat')), parseFloat($this_marker.attr('data-lng'))),
              map: $this_map_container.data('map'),
              title: $this_marker.attr('data-title'),
              icon: { url: `${et_pb_custom.builder_images_uri}/marker.png`, size: new google.maps.Size(46, 43), anchor: new google.maps.Point(16, 43) },
              shape: { coord: [1, 1, 46, 43], type: 'rect' },
              anchorPoint: new google.maps.Point(0, - 45),
            });

            if ($this_marker.find('.infowindow').length) {
              const infowindow = new google.maps.InfoWindow({
                content: $this_marker.html(),
              });

              google.maps.event.addListener($this_map_container.data('map'), 'click', () => {
                infowindow.close();
              });

              google.maps.event.addListener(marker, 'click', () => {
                if (infowindow_active) {
                  infowindow_active.close();
                }
                infowindow_active = infowindow;

                infowindow.open($this_map_container.data('map'), marker);

                // Trigger mouse hover event for responsive content swap.
                $this_marker.closest('.et_pb_module').trigger('mouseleave');
                setTimeout(() => {
                  $this_marker.closest('.et_pb_module').trigger('mouseenter');
                }, 1);
              });
            }
          });
        };

        if (window.et_load_event_fired) {
          et_pb_init_maps();
        } else if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
          google.maps.event.addDomListener(window, 'load', () => {
            et_pb_init_maps();
          });
        }
      }

      $('.et_pb_shop, .et_pb_wc_upsells, .et_pb_wc_related_products').each(function() {
        let $this_el    = $(this);
        let icon        = isUndefined($this_el.data('icon')) || '' === $this_el.data('icon') ? '' : $this_el.data('icon');
        let icon_tablet = isUndefined($this_el.data('icon-tablet')) || '' === $this_el.data('icon-tablet') ? '' : $this_el.data('icon-tablet');
        let icon_phone  = isUndefined($this_el.data('icon-phone')) || '' === $this_el.data('icon-phone') ? '' : $this_el.data('icon-phone');
        let icon_sticky = isUndefined($this_el.data('icon-sticky')) || '' === $this_el.data('icon-sticky') ? '' : $this_el.data('icon-sticky');
        let $overlay    = $this_el.find('.et_overlay');

        // Handle Extra theme.
        if (! $overlay.length && $this_el.hasClass('et_pb_wc_related_products')) {
          $overlay    = $this_el.find('.et_pb_extra_overlay');
          $this_el    = $overlay.closest('.et_pb_module_inner').parent();
          icon        = isUndefined($this_el.data('icon')) || '' === $this_el.data('icon') ? '' : $this_el.data('icon');
          icon_tablet = isUndefined($this_el.data('icon-tablet')) || '' === $this_el.data('icon-tablet') ? '' : $this_el.data('icon-tablet');
          icon_phone  = isUndefined($this_el.data('icon-phone')) || '' === $this_el.data('icon-phone') ? '' : $this_el.data('icon-phone');
          icon_sticky = isUndefined($this_el.data('icon-sticky')) || '' === $this_el.data('icon-sticky') ? '' : $this_el.data('icon-sticky');
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

      $('.et_pb_wc_cart_totals').each(function() {
        var $this_el = isBuilder
          ? $('.et_pb_module_inner', this)
          : $(this);
        var buttons  = {};

        $.each($this_el.data(), function(value) {
          if (!value.includes('buttonName')) {
            return;
          }
          const buttonName = $this_el.data(value);
          const icon       = $this_el.data(`${buttonName}-icon`) || '';
          const iconTablet = $this_el.data(`${buttonName}-icon-tablet`) || '';
          const iconPhone  = $this_el.data(`${buttonName}-icon-phone`) || '';

          buttons[buttonName] = {
            'icon':        icon,
            'icon-tablet': iconTablet,
            'icon-phone':  iconPhone,
            'class':       $this_el.data('button-class'),
          };
        });

        $.each(buttons, function(index, value) {
          var btn = $this_el.find(`button[name="${index}"]:eq(0)`);
          if (0 === btn.length) {
            btn = $this_el.find(`.${index}`)
          }

          btn.addClass(value.class);
          btn.attr('data-icon', value.icon);
          btn.attr('data-icon-tablet', value['icon-tablet']);
          btn.attr('data-icon-phone', value['icon-phone']);
        });
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

      if ($et_pb_circle_counter.length || isBuilder || $('.et_pb_ajax_pagination_container').length > 0) {
        window.et_pb_circle_counter_init = function($the_counter, animate, custom_mode) {
          if ($the_counter.width() <= 0) {
            return;
          }

          // Update animation breakpoint variable and generate suffix.
          const current_mode      = et_pb_get_current_window_mode();
          et_animation_breakpoint = current_mode;

          // Custom Mode is used to pass custom preview mode such as hover. Current mode is
          // actual preview mode based on current window size.
          let suffix = '';
          if ('undefined' !== typeof custom_mode && '' !== custom_mode) {
            suffix = `-${custom_mode}`;
          } else if (current_mode !== 'desktop') {
            suffix = `-${current_mode}`;
          }

          // Update bar background color based on active mode.
          let bar_color        = $the_counter.data('bar-bg-color');
          const mode_bar_color = $the_counter.data(`bar-bg-color${suffix}`);
          if (typeof mode_bar_color !== 'undefined' && mode_bar_color !== '') {
            bar_color = mode_bar_color;
          }

          // Update bar track color based on active mode.
          let track_color        = $the_counter.data('color') || '#000000';
          const mode_track_color = $the_counter.data(`color${suffix}`);
          if (typeof mode_track_color !== 'undefined' && mode_track_color !== '') {
            track_color = mode_track_color;
          }

          // Update bar track color alpha based on active mode.
          let track_color_alpha        = $the_counter.data('alpha') || '0.1';
          const mode_track_color_alpha = $the_counter.data(`alpha${suffix}`);
          if ('undefined' !== typeof mode_track_color_alpha && '' !== mode_track_color_alpha && ! isNaN(mode_track_color_alpha)) {
            track_color_alpha = mode_track_color_alpha;
          }

          $the_counter.easyPieChart({
            animate: {
              duration: 1800,
              enabled: true,
            },
            size: 0 !== $the_counter.width() ? $the_counter.width() : 10, // set the width to 10 if actual width is 0 to avoid js errors
            barColor: bar_color,
            trackColor: track_color,
            trackAlpha: track_color_alpha,
            scaleColor: false,
            lineWidth: 5,
            onStart() {
              $(this.el).find('.percent p').css({ visibility: 'visible' });
            },
            onStep(from, to, percent) {
              $(this.el).find('.percent-value').text(Math.round(parseInt(percent)));
            },
            onStop(from, to) {
              $(this.el).find('.percent-value').text($(this.el).data('number-value'));
            },
          });
        };

        window.et_pb_reinit_circle_counters = function($et_pb_circle_counter) {
          $et_pb_circle_counter.each(function() {
            let $the_counter = $(this).find('.et_pb_circle_counter_inner');
            window.et_pb_circle_counter_init($the_counter, false);

            // Circle Counter on Hover.
            $the_counter.on('mouseover', event => {
              window.et_pb_circle_counter_update($the_counter, event, 'hover');
            });

            // Circle Counter on "Unhover" as reset of Hover effect.
            $the_counter.on('mouseleave', event => {
              window.et_pb_circle_counter_update($the_counter, event);
            });

            $the_counter.on('containerWidthChanged', (event, custom_mode) => {
              $the_counter = $(event.target);
              $the_counter.find('canvas').remove();
              $the_counter.removeData('easyPieChart');
              window.et_pb_circle_counter_init($the_counter, true, custom_mode);
            });

            // Update circle counter when sticky is started / ended
            const stickyId = $the_counter.attr('data-sticky-id');

            if (stickyId) {
              window.addEventListener('ETBuilderStickyStart', e => {
                if (stickyId === e.detail.stickyId) {
                  window.et_pb_circle_counter_update($the_counter, event, 'sticky');
                }
              });

              window.addEventListener('ETBuilderStickyEnd', e => {
                if (stickyId === e.detail.stickyId) {
                  window.et_pb_circle_counter_update($the_counter, event);
                }
              });
            }
          });
        };
        window.et_pb_reinit_circle_counters($et_pb_circle_counter);
      }

      /**
       * Update circle counter easyPieChart data on custom mode.
       *
       * @since 3.25.3
       *
       * @param {jQuery} $this_counter Circle counter jQuery element.
       * @param {object} event         Event object.
       * @param {string} custom_mode   Custom view mode such as hover/desktop/tablet/phone.
       */
      window.et_pb_circle_counter_update = function($this_counter, event, custom_mode) {
        if (! $this_counter.is(':visible') || 'undefined' === typeof $this_counter.data('easyPieChart')) {
          return;
        }

        // Change custom mode if upon mouse leave, it returns to sticky, not standard state
        if ('mouseleave' === event.type && $this_counter.closest('.et_pb_sticky').length > 0) {
          custom_mode = 'sticky';
        }

        // Check circle attributes value for current event type.
        if ($(event.target).length > 0) {
          if ('mouseover' === event.type || 'mouseleave' === event.type) {
            let has_field_value = false;

            // Check if one of those field value exist.
            const mode_bar_color         = $this_counter.data('bar-bg-color-hover');
            const mode_track_color       = $this_counter.data('color-hover');
            const mode_track_color_alpha = $this_counter.data('alpha-hover');

            if (typeof mode_bar_color !== 'undefined' && mode_bar_color !== '') {
              has_field_value = true;
            } else if (typeof mode_track_color !== 'undefined' && mode_track_color !== '') {
              has_field_value = true;
            } else if (typeof mode_track_color_alpha !== 'undefined' && mode_track_color_alpha !== '') {
              has_field_value = true;
            }

            if (! has_field_value) {
              return;
            }
          }
        }

        // Reinit circle counter for current event.
        let container_param = [];
        if ('undefined' !== typeof custom_mode && '' !== custom_mode) {
          container_param = [custom_mode];
        }
        $this_counter.trigger('containerWidthChanged', container_param);

        // If number text hasn't been printed at all in sticky event, skip disable animation
        // and updating number value data because this will overwrite entire text animation
        // and causing the text not rendered; this happens if the page is not positioned
        // on top document when loaded and already trigger start sticky event
        const isStickyEvent = ['ETBuilderStickyStart', 'ETBuilderStickyEnd'].includes(event.type);

        if (isStickyEvent && '' === $this_counter.find('.percent-value').text()) {
          return;
        }

        // Animation should be disabled here.
        $this_counter.data('easyPieChart').disableAnimation();
        $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
      };

      if ($et_pb_number_counter.length || isBuilder || $('.et_pb_ajax_pagination_container').length > 0) {
        window.et_pb_reinit_number_counters = function($et_pb_number_counter) {
          const is_firefox = $('body').hasClass('gecko');

          function et_format_number(number_value, separator) {
            return number_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
          }

          function et_find_number_separator(element) {
            return element.data('number-separator');
          }

          if ($.fn.fitText) {
            $et_pb_number_counter.find('.percent p').fitText(0.3);
          }

          $et_pb_number_counter.each(function() {
            const $this_counter = $(this);

            $this_counter.easyPieChart({
              animate: {
                duration: 1800,
                enabled: true,
              },
              size: is_firefox ? 1 : 0, // firefox can't print page when it contains 0 sized canvas elements.
              trackColor: false,
              scaleColor: false,
              lineWidth: 0,
              onStart(from, to) {
                $(this.el).addClass('active');
                if (from === to) {
                  $(this.el).find('.percent-value').text(et_format_number($(this.el).data('number-value'), et_find_number_separator($this_counter)));
                }
              },
              onStep(from, to, percent) {
                if (percent != to) $(this.el).find('.percent-value').text(et_format_number(Math.round(parseInt(percent)), et_find_number_separator($this_counter)));
              },
              onStop(from, to) {
                $(this.el).find('.percent-value').text(et_format_number($(this.el).data('number-value'), et_find_number_separator($this_counter)));
              },
            });
          });
        };
        window.et_pb_reinit_number_counters($et_pb_number_counter);
      }

      window.et_apply_parallax = function() {
        if (! $(this).length || 'undefined' === typeof $(this) || 'undefined' === typeof $(this).offset()) {
          return;
        }

        let $parallaxWindow = $et_top_window;
        if (isTB) {
          $parallaxWindow = top_window.jQuery('#et-fb-app');
        } else if (isScrollOnAppWindow()) {
          $parallaxWindow = $(window);
        }

        const $this      = $(this);
        const $parent    = $this.parent();
        let element_top  = isBuilderModeZoom() ? $this.offset().top / 2 : $this.offset().top;
        const window_top = $parallaxWindow.scrollTop();

        if ($parent.hasClass('et_is_animating')) {
          return;
        }

        if (isBlockLayoutPreview) {
          // Preview offset is what is changing on gutenberg due to window scroll
          // happens on `.edit-post-layout__content`
          const blockPreviewId   = `#divi-layout-iframe-${ETBlockLayoutModulesScript.blockId}`;
          const previewOffsetTop = top_window.jQuery(blockPreviewId).offset().top;

          element_top += previewOffsetTop;
        }

        const y_pos = (((window_top + $et_top_window.height()) - element_top) * 0.3);
        let main_position;
        let $parallax_container;

        main_position = `translate(0, ${y_pos}px)`;

        // handle specific parallax container in VB
        if ($this.children('.et_parallax_bg_wrap').length > 0) {
          $parallax_container = $this.children('.et_parallax_bg_wrap').find('.et_parallax_bg');
        } else {
          $parallax_container = $this.children('.et_parallax_bg');
        }

        $parallax_container.css({
          '-webkit-transform': main_position,
          '-moz-transform': main_position,
          '-ms-transform': main_position,
          transform: main_position,
        });
      };

      window.et_parallax_set_height = function() {
        const $this          = $(this);
        const isFullscreen   = isBuilder && $this.parent('.et_pb_fullscreen').length;
        const parallaxHeight = isFullscreen && $et_top_window.height() > $this.innerHeight() ? $et_top_window.height() : $this.innerHeight();
        let bg_height        = ($et_top_window.height() * 0.3 + parallaxHeight);

        // Add BFB metabox to top window offset on parallax image height to avoid parallax displays its
        // background while scrolling because the image height is too short. This is required since BFB
        // tracks parent window scroll event and BFB metabox has offset top to the top window
        if (isBFB) {
          bg_height += top_window.jQuery('#et_pb_layout .inside').offset().top;
        }

        $this.find('.et_parallax_bg').css({ height: `${bg_height}px` });
      };

      // Emulate CSS Parallax (background-attachment: fixed) effect via absolute image positioning
      window.et_apply_builder_css_parallax = function() {
        // This callback is for builder and layout block preview
        if (! isBuilder && ! isBlockLayoutPreview) {
          return;
        }

        const $this_parent   = $(this);
        const $this_parallax = $this_parent.children('.et_parallax_bg');

        // Remove inline styling to avoid unwanted result first
        $this_parallax.css({
          width: '',
          height: '',
          top: '',
          left: '',
          backgroundAttachment: '',
        });

        // Bail if window scroll happens on app window (visual builder desktop mode)
        if (isScrollOnAppWindow() && ! isTB) {
          return;
        }

        let $parallaxWindow         = isTB ? top_window.jQuery('#et-fb-app') : $et_top_window;
        let parallaxWindowScrollTop = $parallaxWindow.scrollTop();
        let backgroundOffset        = isBFB ? top_window.jQuery('#et_pb_layout .inside').offset().top : 0;
        const heightMultiplier      = isBuilderModeZoom() ? 2 : 1;
        const parentOffset          = $this_parent.offset();
        const parentOffsetTop       = isBuilderModeZoom() ? parentOffset.top / 2 : parentOffset.top;

        if (isBlockLayoutPreview) {
          // Important: in gutenberg, scroll doesn't happen on window; it's here instead
          $parallaxWindow = top_window.jQuery(getContentAreaSelector(top_window, true));

          // Background offset is relative to block's preview iframe
          backgroundOffset = top_window.jQuery(`#divi-layout-iframe-${ETBlockLayoutModulesScript.blockId}`).offset().top;

          // Scroll happens on DOM which has fixed positioning. Hence
          parallaxWindowScrollTop = $parallaxWindow.offset().top;
        }

        $this_parallax.css({
          width: `${$(window).width()}px`,
          height: `${$parallaxWindow.innerHeight() * heightMultiplier}px`,
          top: `${(parallaxWindowScrollTop - backgroundOffset) - parentOffsetTop}px`,
          left: `${0 - parentOffset.left}px`,
          backgroundAttachment: 'scroll',
        });
      };

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
        if ('desktop' !== et_pb_get_current_window_mode()) {
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
      const $recaptchaScripts     = document.body.innerHTML.match(/<script [^>]*src="[^"].*google.com\/recaptcha\/api.js\?.*render.*"[^>]*>([\s\S]*?)<\/script>/gmi);
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

      $et_pb_newsletter_button.on('click', function(event) {
        et_pb_submit_newsletter($(this), event);
      });

      $et_pb_newsletter_input.on('keypress', function(event){
        const keyCode = event.which || event.keyCode;
        if (13 === keyCode) {
          const $submit = $(this).closest('form').find('.et_pb_newsletter_button');
          et_pb_submit_newsletter($submit, event);
        }
      });

      $et_pb_newsletter_button
        .closest('.et_pb_newsletter')
        .find('input[type=checkbox]')
        .on('change', function() {
          const $checkbox       = $(this);
          const $checkbox_field = $checkbox.siblings('input[type=text]').first();
          const is_checked      = $checkbox.prop('checked');

          $checkbox_field.val(is_checked ? $checkbox_field.data('checked') : $checkbox_field.data('unchecked'));
        });

      window.et_pb_submit_newsletter = function($submit, event) {
        if ($submit.closest('.et_pb_login_form').length) {
          et_pb_maybe_log_event($submit.closest('.et_pb_newsletter'), 'con_goal');
          return;
        }

        if (typeof event !== 'undefined') {
          event.preventDefault();
        }

        // check if it is a feedburner feed subscription
        if ($('.et_pb_feedburner_form').length > 0) {
          const $feed_name = $('.et_pb_feedburner_form input[name=uri]').val();
          window.open(`https://feedburner.google.com/fb/a/mailverify?uri=${$feed_name}`, 'et-feedburner-subscribe', 'scrollbars=yes,width=550,height=520');
          return true;
        } // otherwise keep things moving

        const $newsletter_container = $submit.closest('.et_pb_newsletter');
        const $name                 = $newsletter_container.find('input[name="et_pb_signup_firstname"]');
        const $lastname             = $newsletter_container.find('input[name="et_pb_signup_lastname"]');
        const $email                = $newsletter_container.find('input[name="et_pb_signup_email"]');
        const list_id               = $newsletter_container.find('input[name="et_pb_signup_list_id"]').val();
        const $error_message        = $newsletter_container.find('.et_pb_newsletter_error').hide();
        const provider              = $newsletter_container.find('input[name="et_pb_signup_provider"]').val();
        const account               = $newsletter_container.find('input[name="et_pb_signup_account_name"]').val();
        const ip_address            = $newsletter_container.find('input[name="et_pb_signup_ip_address"]').val();
        const checksum              = $newsletter_container.find('input[name="et_pb_signup_checksum"]').val();

        const $fields_container = $newsletter_container.find('.et_pb_newsletter_fields');

        const $success_message = $newsletter_container.find('.et_pb_newsletter_success');
        let redirect_url       = $newsletter_container.data('redirect_url');
        const redirect_query   = $newsletter_container.data('redirect_query');
        const custom_fields    = {};
        const hidden_fields    = [];
        let et_message         = '<ul>';
        let et_fields_message  = '';

        const $custom_fields = $fields_container
          .find('input[type=text], .et_pb_checkbox_handle, .et_pb_contact_field[data-type="radio"], textarea, select')
          .filter('.et_pb_signup_custom_field, .et_pb_signup_custom_field *');


        $name.removeClass('et_pb_signup_error');
        $lastname.removeClass('et_pb_signup_error');
        $email.removeClass('et_pb_signup_error');
        $custom_fields.removeClass('et_contact_error');
        $error_message.html('');

        // Validate user input
        let is_valid = true;
        const form   = $submit.closest('.et_pb_newsletter_form form');
        if (form.length > 0 && 'function' === typeof form[0].reportValidity) {
          // Checks HTML5 validation constraints
          is_valid = form[0].reportValidity();
        }

        if ($name.length > 0 && ! $name.val()) {
          $name.addClass('et_pb_signup_error');
          is_valid = false;
        }

        if ($lastname.length > 0 && ! $lastname.val()) {
          $lastname.addClass('et_pb_signup_error');
          is_valid = false;
        }

        if (! et_email_reg_html5.test($email.val())) {
          $email.addClass('et_pb_signup_error');
          is_valid = false;
        }

        if (! is_valid) {
          return;
        }

        $custom_fields.each(function() {
          let $this_el      = $(this);
          let $this_wrapper = false;

          if (['checkbox', 'booleancheckbox'].includes($this_el.data('field_type'))) {
            $this_wrapper = $this_el.parents('.et_pb_contact_field');
            $this_wrapper.removeClass('et_contact_error');
          }

          if ('radio' === $this_el.data('type')) {
            $this_el      = $this_el.find('input[type="radio"]');
            $this_wrapper = $this_el.parents('.et_pb_contact_field');
          }

          let this_id       = $this_el.data('id');
          let this_val      = $this_el.val();
          let this_label    = $this_el.siblings('label').first().text();
          const field_type  = typeof $this_el.data('field_type') !== 'undefined' ? $this_el.data('field_type') : 'text';
          let required_mark = typeof $this_el.data('required_mark') !== 'undefined' ? $this_el.data('required_mark') : 'not_required';
          const original_id = typeof $this_el.data('original_id') !== 'undefined' ? $this_el.data('original_id') : '';
          let unchecked     = false;
          let default_value;

          if (! this_id) {
            this_id = $this_el.data('original_id');
          }

          // radio field properties adjustment
          if ('radio' === field_type) {
            if (0 !== $this_wrapper.find('input[type="radio"]').length) {
              const $firstRadio = $this_wrapper.find('input[type="radio"]').first();

              required_mark = typeof $firstRadio.data('required_mark') !== 'undefined' ? $firstRadio.data('required_mark') : 'not_required';

              this_val = '';

              if ($this_wrapper.find('input[type="radio"]:checked')) {
                this_val = $this_wrapper.find('input[type="radio"]:checked').val();
              }
            }

            this_label = $this_wrapper.find('.et_pb_contact_form_label').text();
            this_id    = $this_el.data('original_id');

            if (! $.isEmptyObject(this_val)) {
              custom_fields[this_id] = this_val;
            }

            if (0 === $this_wrapper.find('input[type="radio"]:checked').length) {
              unchecked = true;
            }

            if (this_val) {
              custom_fields[this_id] = this_val;
            }
          } else if (['checkbox', 'booleancheckbox'].includes(field_type)) {
            this_val = {};

            if (0 !== $this_wrapper.find('input[type="checkbox"]').length) {
              const $checkboxHandle = $this_wrapper.find('.et_pb_checkbox_handle');

              required_mark = typeof $checkboxHandle.data('required_mark') !== 'undefined' ? $checkboxHandle.data('required_mark') : 'not_required';

              if ($this_wrapper.find('input[type="checked"]:checked')) {
                $this_wrapper.find('input[type="checkbox"]:checked').each(function () {
                  if ('booleancheckbox' === field_type) {
                    this_val = $(this).val();
                  } else {
                    var field_id = $(this).data('id');
                    this_val[field_id] = $(this).val();
                  }
                });
              }
            }

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
            this_id = $this_wrapper.attr('data-id');

            if (! $.isEmptyObject(this_val)) {
              custom_fields[this_id] = this_val;
            }

            if (0 === $this_wrapper.find('input[type="checkbox"]:checked').length) {
              unchecked = true;
            }
          } else if ('ontraport' === provider && 'select' === field_type) {
            // Need to pass option ID as a value for dropdown menu in Ontraport
            var $selected_option   = $this_el.find(':selected');
            custom_fields[this_id] = $selected_option.length > 0 ? $selected_option.data('id') : this_val;
          } else {
            custom_fields[this_id] = this_val;
          }

          // Need to send option id to be processed in the custom field processing
          if ('mailchimp' === provider && ['select', 'radio'].indexOf(field_type) > - 1) {
            var $selected_option = 'select' === field_type ? $this_el.find(':selected') : $this_wrapper.find('input[type="radio"]:checked');
            const option_id      = $selected_option.length > 0 ? $selected_option.data('id') : null;
            if (null !== option_id) {
              custom_fields[this_id]            = {};
              custom_fields[this_id][option_id] = this_val;
            }
          }

          // Escape double quotes in label
          this_label = this_label.replace(/"/g, '&quot;');

          // Store the labels of the conditionally hidden fields so that they can be
          // removed later if a custom message pattern is enabled
          if (! $this_el.is(':visible') && 'hidden' !== $this_el.attr('type') && 'radio' !== $this_el.attr('type')) {
            hidden_fields.push(original_id);
            return;
          }

          if (('hidden' === $this_el.attr('type') || 'radio' === $this_el.attr('type')) && ! $this_el.parents('.et_pb_contact_field').is(':visible')) {
            hidden_fields.push(this_id);
            return;
          }

          // add error message for the field if it is required and empty
          if ('required' === required_mark && ('' === this_val || true === unchecked)) {
            if (false === $this_wrapper) {
              $this_el.addClass('et_contact_error');
            } else {
              $this_wrapper.addClass('et_contact_error');
            }

            is_valid = false;

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
            const is_valid_email  = et_email_reg_html5.test(processed_email);

            if ('' !== processed_email && this_label !== processed_email && ! is_valid_email) {
              $this_el.addClass('et_contact_error');
              is_valid = false;

              if (! is_valid_email) {
                et_message += `<li>${et_pb_custom.invalid}</li>`;
              }
            }
          }
        });

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
          $error_message.html(et_message).show();

          // If parent of this contact form uses parallax
          if ($newsletter_container.parents('.et_pb_section_parallax').length) {
            $newsletter_container.parents('.et_pb_section_parallax').each(function() {
              const $parallax_element = $(this);
              const $parallax         = $parallax_element.children('.et_parallax_bg');
              const is_true_parallax  = (! $parallax.hasClass('et_pb_parallax_css'));

              if (is_true_parallax) {
                $et_window.trigger('resize');
              }
            });
          }

          return;
        }

        function get_redirect_query() {
          const query = {};

          if (! redirect_query) {
            return '';
          }

          if ($name.length > 0 && redirect_query.indexOf('name') > - 1) {
            query.first_name = $name.val();
          }

          if ($lastname.length > 0 && redirect_query.indexOf('last_name') > - 1) {
            query.last_name = $lastname.val();
          }

          if (redirect_query.indexOf('email') > - 1) {
            query.email = $email.val();
          }

          if (redirect_query.indexOf('ip_address') > - 1) {
            query.ip_address = $newsletter_container.data('ip_address');
          }

          if (redirect_query.indexOf('css_id') > - 1) {
            query.form_id = $newsletter_container.attr('id');
          }

          return decodeURIComponent($.param(query));
        }

        const tokenDeferred = $.Deferred();
        // Only process through recaptcha if the module has spam protection enabled and the recaptcha core api exists.
        if (recaptchaApi && $newsletter_container.hasClass('et_pb_recaptcha_enabled')) {
          recaptchaApi.interaction(`Divi/Module/EmailOptin/List/${list_id}`).then(token => {
            tokenDeferred.resolve(token);
          });
        } else {
          tokenDeferred.resolve('');
        }

        $.when(tokenDeferred).done(token => {
          $.ajax({
            type: 'POST',
            url: et_pb_custom.ajaxurl,
            dataType: 'json',
            data: {
              action: 'et_pb_submit_subscribe_form',
              et_frontend_nonce: et_pb_custom.et_frontend_nonce,
              et_list_id: list_id,
              et_firstname: $name.val(),
              et_lastname: $lastname.val(),
              et_email: $email.val(),
              et_provider: provider,
              et_account: account,
              et_ip_address: ip_address,
              et_custom_fields: custom_fields,
              et_hidden_fields: hidden_fields,
              token,
              et_checksum: checksum,
            },
            beforeSend() {
              $newsletter_container
                .find('.et_pb_newsletter_button')
                .addClass('et_pb_button_text_loading')
                .find('.et_subscribe_loader')
                .show();
            },
            complete() {
              $newsletter_container
                .find('.et_pb_newsletter_button')
                .removeClass('et_pb_button_text_loading')
                .find('.et_subscribe_loader')
                .hide();
            },
            success(data) {
              if (! data) {
                $error_message.html(et_pb_custom.subscription_failed).show();
                return;
              }

              if (data.error) {
                $error_message.show().append('<h2>').text(data.error);
              }

              if (data.success) {
                if (redirect_url) {
                  et_pb_maybe_log_event($newsletter_container, 'con_goal', () => {
                    const query = get_redirect_query();

                    if (query.length) {
                      if (redirect_url.indexOf('?') > - 1) {
                        redirect_url += '&';
                      } else {
                        redirect_url += '?';
                      }
                    }

                    window.location = redirect_url + query;
                  });
                } else {
                  et_pb_maybe_log_event($newsletter_container, 'con_goal');
                  $newsletter_container.find('.et_pb_newsletter_fields').hide();
                  $success_message.show();
                }
              }
            },
          });
        });
      };

      window.et_fix_testimonial_inner_width = function() {
        const window_width = $(window).width();

        if (window_width > 959) {
          $('.et_pb_testimonial').each(function() {
            if (! $(this).is(':visible')) {
              return;
            }

            const $testimonial       = $(this);
            const $portrait          = $testimonial.find('.et_pb_testimonial_portrait');
            const portrait_width     = $portrait.outerWidth(true) || 0;
            const $testimonial_descr = $testimonial.find('.et_pb_testimonial_description');
            const $outer_column      = $testimonial.closest('.et_pb_column');

            if (portrait_width > 90) {
              $portrait.css('padding-bottom', '0px');
              $portrait.width('90px');
              $portrait.height('90px');
            }

            const testimonial_indent = ! ($outer_column.hasClass('et_pb_column_1_3')
							|| $outer_column.hasClass('et_pb_column_1_4')
							|| $outer_column.hasClass('et_pb_column_1_5')
							|| $outer_column.hasClass('et_pb_column_1_6')
							|| $outer_column.hasClass('et_pb_column_2_5')
							|| $outer_column.hasClass('et_pb_column_3_8')) ? portrait_width : 0;

            $testimonial_descr.css('margin-left', `${testimonial_indent}px`);
          });
        } else if (window_width > 767) {
          $('.et_pb_testimonial').each(function() {
            if (! $(this).is(':visible')) {
              return;
            }

            const $testimonial       = $(this);
            const $portrait          = $testimonial.find('.et_pb_testimonial_portrait');
            const portrait_width     = $portrait.outerWidth(true) || 0;
            const $testimonial_descr = $testimonial.find('.et_pb_testimonial_description');
            const $outer_column      = $testimonial.closest('.et_pb_column');
            const testimonial_indent = ! ($outer_column.hasClass('et_pb_column_1_4')
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
      window.et_fix_testimonial_inner_width();

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
        et_waypoint($video_background_wrapper, {
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
        et_waypoint($video_background_wrapper, {
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

      function et_waypoint($element, options, max_instances) {
        max_instances           = max_instances || $element.data('et_waypoint_max_instances') || 1;
        const current_instances = $element.data('et_waypoint') || [];

        // Custom options.
        const waypointsOptions = get(window, ['et_pb_custom', 'waypoints_options']);
        if (waypointsOptions) {
          // Context.
          const contextSelectors = get(waypointsOptions, 'context', []);
          if (contextSelectors && isArray(contextSelectors)) {
            // Iterate through the list of selectors to find the correct container.
            forEach(contextSelectors, contextSelector => {
              const $contextElement = $element.closest(contextSelector);
              if ($contextElement.length > 0) {
                // Override the context with the new element and break.
                options.context = $contextElement;
                return false;
              }
            });
          }
        }

        if (current_instances.length < max_instances) {
          const new_instances = $element.waypoint(options);

          if (new_instances && new_instances.length > 0) {
            current_instances.push(new_instances[0]);
            $element.data('et_waypoint', current_instances);
          }
        } else {
          // Reinit existing
          for (let i = 0; i < current_instances.length; i++) {
            current_instances[i].context.refresh();
          }
        }
      }

      /**
       * Returns an offset to be used for waypoints.
       *
       * @param  {element} element  The element being passed.
       * @param  {string} fallback String of either pixels or percent.
       * @returns {string}          Returns either the fallback or 'bottom-in-view'.
       */
      function et_get_offset(element, fallback) {
        // cache things so we can test.
        const section_index  = element.parents('.et_pb_section').index();
        const section_length = $('.et_pb_section').length - 1;
        const row_index      = element.parents('.et_pb_row').index();
        const row_length     = element.parents('.et_pb_section').children().length - 1;

        // return bottom-in-view if it is the last element otherwise return the user defined fallback
        if (section_index === section_length && row_index === row_length) {
          return 'bottom-in-view';
        }
        return fallback;
      }

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
        if (et_pb_get_current_window_mode() !== et_animation_breakpoint) {
          et_process_animation_data(false);
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
        if (et_pb_get_current_window_mode() === et_animation_breakpoint) {
          return false;
        }

        $et_pb_map.each(function() {
          const $this_map = $(this);
          const this_map  = $this_map.data('map');

          // Ensure the map exist.
          if ('undefined' === typeof this_map) {
            return;
          }

          const current_mode      = et_pb_get_current_window_mode();
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

      window.et_animate_element = function($elementOriginal) {
        let $element = $elementOriginal;
        if ($element.hasClass('et_had_animation')) {
          return;
        }

        const animation_style            = $element.attr('data-animation-style');
        const animation_repeat           = $element.attr('data-animation-repeat');
        const animation_duration         = $element.attr('data-animation-duration');
        const animation_delay            = $element.attr('data-animation-delay');
        const animation_intensity        = $element.attr('data-animation-intensity');
        const animation_starting_opacity = $element.attr('data-animation-starting-opacity');
        let animation_speed_curve        = $element.attr('data-animation-speed-curve');
        const $buttonWrapper             = $element.parent('.et_pb_button_module_wrapper');
        const isEdge                     = $('body').hasClass('edge');

        // Avoid horizontal scroll bar when section is rolled
        if ($element.is('.et_pb_section') && 'roll' === animation_style) {
          $(`${et_frontend_scripts.builderCssContainerPrefix}, ${et_frontend_scripts.builderCssLayoutPrefix}`).css('overflow-x', 'hidden');
        }

        // Remove all the animation data attributes once the variables have been set
        et_remove_animation_data($element);

        // Opacity can be 0 to 1 so the starting opacity is equal to the percentage number multiplied by 0.01
        const starting_opacity = isNaN(parseInt(animation_starting_opacity)) ? 0 : parseInt(animation_starting_opacity) * 0.01;

        // Check if the animation speed curve is one of the allowed ones and set it to the default one if it is not
        if (- 1 === $.inArray(animation_speed_curve, ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'])) {
          animation_speed_curve = 'ease-in-out';
        }

        if ($buttonWrapper.length > 0) {
          $element.removeClass('et_animated');
          $element = $buttonWrapper;
          $element.addClass('et_animated');
        }

        $element.css({
          'animation-duration': animation_duration,
          'animation-delay': animation_delay,
          opacity: starting_opacity,
          'animation-timing-function': animation_speed_curve,
        });

        if ('slideTop' === animation_style || 'slideBottom' === animation_style) {
          $element.css('left', '0px');
        }

        let intensity_css          = {};
        const intensity_percentage = isNaN(parseInt(animation_intensity)) ? 50 : parseInt(animation_intensity);

        // All the animations that can have intensity
        const intensity_animations = ['slide', 'zoom', 'flip', 'fold', 'roll'];

        let original_animation = false;
        let original_direction = false;

        // Check if current animation can have intensity
        for (let i = 0; i < intensity_animations.length; i++) {
          const animation = intensity_animations[i];

          // As the animation style is a combination of type and direction check if
          // the current animation contains any of the allowed animation types
          if (! animation_style || animation_style.substr(0, animation.length) !== animation) {
            continue;
          }

          // If it does set the original animation to the base animation type
          original_animation = animation;

          // Get the remainder of the animation style and set it as the direction
          original_direction = animation_style.substr(animation.length, animation_style.length);

          // If that is not empty convert it to lower case for better readability's sake
          if ('' !== original_direction) {
            original_direction = original_direction.toLowerCase();
          }

          break;
        }

        if (original_animation !== false && original_direction !== false) {
          intensity_css = et_process_animation_intensity(original_animation, original_direction, intensity_percentage);
        }

        if (! $.isEmptyObject(intensity_css)) {
          // temporarily disable transform transitions to avoid double animation.
          $element.css(isEdge ? $.extend(intensity_css, { transition: 'transform 0s ease-in' }) : intensity_css);
        }

        $element.addClass('et_animated');
        $element.addClass('et_is_animating');
        $element.addClass(animation_style);
        $element.addClass(animation_repeat);

        // Remove the animation after it completes if it is not an infinite one
        if (! animation_repeat) {
          const animation_duration_ms = parseInt(animation_duration);
          const animation_delay_ms    = parseInt(animation_delay);
          setTimeout(() => {
            et_remove_animation($element);
          }, animation_duration_ms + animation_delay_ms);

          if (isEdge && ! $.isEmptyObject(intensity_css)) {
            // re-enable transform transitions after animation is done.
            setTimeout(() => {
              $element.css('transition', '');
            }, animation_duration_ms + animation_delay_ms + 50);
          }
        }
      }

      window.et_process_animation_data = function(waypoints_enabled) {
        if ('undefined' !== typeof et_animation_data && et_animation_data.length > 0) {
          $('body').css('overflow-x', 'hidden');
          $('#page-container').css('overflow-y', 'hidden');

          for (let i = 0; i < et_animation_data.length; i++) {
            const animation_entry = et_animation_data[i];

            if (
              ! animation_entry.class
							|| ! animation_entry.style
							|| ! animation_entry.repeat
							|| ! animation_entry.duration
							|| ! animation_entry.delay
							|| ! animation_entry.intensity
							|| ! animation_entry.starting_opacity
							|| ! animation_entry.speed_curve
            ) {
              continue;
            }

            const $animated = $(`.${animation_entry.class}`);

            // Get current active device.
            const current_mode    = et_pb_get_current_window_mode();
            const is_desktop_view = 'desktop' === current_mode;

            // Update animation breakpoint variable.
            et_animation_breakpoint = current_mode;

            // Generate suffix.
            let suffix = '';
            if (! is_desktop_view) {
              suffix += `_${current_mode}`;
            }

            // Being save and prepare the value.
            const data_style            = ! is_desktop_view && typeof animation_entry[`style${suffix}`] !== 'undefined' ? animation_entry[`style${suffix}`] : animation_entry.style;
            const data_repeat           = ! is_desktop_view && typeof animation_entry[`repeat${suffix}`] !== 'undefined' ? animation_entry[`repeat${suffix}`] : animation_entry.repeat;
            const data_duration         = ! is_desktop_view && typeof animation_entry[`duration${suffix}`] !== 'undefined' ? animation_entry[`duration${suffix}`] : animation_entry.duration;
            const data_delay            = ! is_desktop_view && typeof animation_entry[`delay${suffix}`] !== 'undefined' ? animation_entry[`delay${suffix}`] : animation_entry.delay;
            const data_intensity        = ! is_desktop_view && typeof animation_entry[`intensity${suffix}`] !== 'undefined' ? animation_entry[`intensity${suffix}`] : animation_entry.intensity;
            const data_starting_opacity = ! is_desktop_view && typeof animation_entry[`starting_opacity${suffix}`] !== 'undefined' ? animation_entry[`starting_opacity${suffix}`] : animation_entry.starting_opacity;
            const data_speed_curve      = ! is_desktop_view && typeof animation_entry[`speed_curve${suffix}`] !== 'undefined' ? animation_entry[`speed_curve${suffix}`] : animation_entry.speed_curve;

            $animated.attr({
              'data-animation-style': data_style,
              'data-animation-repeat': 'once' === data_repeat ? '' : 'infinite',
              'data-animation-duration': data_duration,
              'data-animation-delay': data_delay,
              'data-animation-intensity': data_intensity,
              'data-animation-starting-opacity': data_starting_opacity,
              'data-animation-speed-curve': data_speed_curve,
            });

            // Process the waypoints logic if the waypoints are not ignored
            // Otherwise add the animation to the element right away
            if (true === waypoints_enabled) {
              if ($animated.hasClass('et_pb_circle_counter')) {
                et_waypoint($animated, {
                  offset: '100%',
                  handler() {
                    const $this_counter = $(this.element).find('.et_pb_circle_counter_inner');

                    if ($this_counter.data('PieChartHasLoaded') || 'undefined' === typeof $this_counter.data('easyPieChart')) {
                      return;
                    }

                    $this_counter.data('easyPieChart').update($this_counter.data('number-value'));

                    $this_counter.data('PieChartHasLoaded', true);

                    et_animate_element($(this.element));
                  },
                });

                // fallback to 'bottom-in-view' offset, to make sure animation applied when element is on the bottom of page and other offsets are not triggered
                et_waypoint($animated, {
                  offset: 'bottom-in-view',
                  handler() {
                    const $this_counter = $(this.element).find('.et_pb_circle_counter_inner');

                    if ($this_counter.data('PieChartHasLoaded') || 'undefined' === typeof $this_counter.data('easyPieChart')) {
                      return;
                    }

                    $this_counter.data('easyPieChart').update($this_counter.data('number-value'));

                    $this_counter.data('PieChartHasLoaded', true);

                    et_animate_element($(this.element));
                  },
                });
              } else if ($animated.hasClass('et_pb_number_counter')) {
                et_waypoint($animated, {
                  offset: '100%',
                  handler() {
                    $(this.element).data('easyPieChart').update($(this.element).data('number-value'));
                    et_animate_element($(this.element));
                  },
                });

                // fallback to 'bottom-in-view' offset, to make sure animation applied when element is on the bottom of page and other offsets are not triggered
                et_waypoint($animated, {
                  offset: 'bottom-in-view',
                  handler() {
                    $(this.element).data('easyPieChart').update($(this.element).data('number-value'));
                    et_animate_element($(this.element));
                  },
                });
              } else {
                et_waypoint($animated, {
                  offset: '100%',
                  handler() {
                    et_animate_element($(this.element));
                  },
                });
              }
            } else {
              et_animate_element($animated);
            }
          }
        }
      }

      function et_process_animation_intensity(animation, direction, intensity) {
        let intensity_css = {};

        switch (animation) {
          case 'slide':
            switch (direction) {
              case 'top':
                var percentage = intensity * - 2;

                intensity_css = {
                  transform: `translate3d(0, ${percentage}%, 0)`,
                };

                break;

              case 'right':
                var percentage = intensity * 2;

                intensity_css = {
                  transform: `translate3d(${percentage}%, 0, 0)`,
                };

                break;

              case 'bottom':
                var percentage = intensity * 2;

                intensity_css = {
                  transform: `translate3d(0, ${percentage}%, 0)`,
                };

                break;

              case 'left':
                var percentage = intensity * - 2;

                intensity_css = {
                  transform: `translate3d(${percentage}%, 0, 0)`,
                };

                break;

              default:
                var scale = (100 - intensity) * 0.01;

                intensity_css = {
                  transform: `scale3d(${scale}, ${scale}, ${scale})`,
                };
                break;
            }
            break;

          case 'zoom':
            var scale = (100 - intensity) * 0.01;

            switch (direction) {
              case 'top':
                intensity_css = {
                  transform: `scale3d(${scale}, ${scale}, ${scale})`,
                };

                break;

              case 'right':
                intensity_css = {
                  transform: `scale3d(${scale}, ${scale}, ${scale})`,
                };

                break;

              case 'bottom':
                intensity_css = {
                  transform: `scale3d(${scale}, ${scale}, ${scale})`,
                };

                break;

              case 'left':
                intensity_css = {
                  transform: `scale3d(${scale}, ${scale}, ${scale})`,
                };

                break;

              default:
                intensity_css = {
                  transform: `scale3d(${scale}, ${scale}, ${scale})`,
                };
                break;
            }

            break;

          case 'flip':
            switch (direction) {
              case 'right':
                var degree = Math.ceil((90 / 100) * intensity);

                intensity_css = {
								  transform: `perspective(2000px) rotateY(${degree}deg)`,
                };
                break;

              case 'left':
                var degree = Math.ceil((90 / 100) * intensity) * - 1;

                intensity_css = {
								  transform: `perspective(2000px) rotateY(${degree}deg)`,
                };
                break;

              case 'top':
              default:
                var degree = Math.ceil((90 / 100) * intensity);

                intensity_css = {
								  transform: `perspective(2000px) rotateX(${degree}deg)`,
                };
                break;

              case 'bottom':
                var degree = Math.ceil((90 / 100) * intensity) * - 1;

                intensity_css = {
								  transform: `perspective(2000px) rotateX(${degree}deg)`,
                };
                break;
            }

            break;

          case 'fold':
            switch (direction) {
              case 'top':
                var degree = Math.ceil((90 / 100) * intensity) * - 1;

                intensity_css = {
								  transform: `perspective(2000px) rotateX(${degree}deg)`,
                };

                break;
              case 'bottom':
                var degree = Math.ceil((90 / 100) * intensity);

                intensity_css = {
								  transform: `perspective(2000px) rotateX(${degree}deg)`,
                };

                break;

						 	case 'left':
                var degree = Math.ceil((90 / 100) * intensity);

                intensity_css = {
								  transform: `perspective(2000px) rotateY(${degree}deg)`,
                };

                break;
              case 'right':
              default:
                var degree = Math.ceil((90 / 100) * intensity) * - 1;

                intensity_css = {
								  transform: `perspective(2000px) rotateY(${degree}deg)`,
                };

                break;
            }

            break;

          case 'roll':
            switch (direction) {
              case 'right':
              case 'bottom':
                var degree = Math.ceil((360 / 100) * intensity) * - 1;

                intensity_css = {
                  transform: `rotateZ(${degree}deg)`,
                };

                break;
              case 'top':
              case 'left':
                var degree = Math.ceil((360 / 100) * intensity);

                intensity_css = {
                  transform: `rotateZ(${degree}deg)`,
                };

                break;
              default:
                var degree = Math.ceil((360 / 100) * intensity);

                intensity_css = {
                  transform: `rotateZ(${degree}deg)`,
                };

                break;
            }

            break;
        }

        return intensity_css;
      }

      window.et_has_animation_data = function($element) {
        let has_animation = false;

        if ('undefined' !== typeof et_animation_data && et_animation_data.length > 0) {
          for (let i = 0; i < et_animation_data.length; i++) {
            const animation_entry = et_animation_data[i];

            if (! animation_entry.class) {
              continue;
            }

            if ($element.hasClass(animation_entry.class)) {
              has_animation = true;
              break;
            }
          }
        }

        return has_animation;
      }

      window.et_get_animation_classes = function() {
        return [
          'et_animated',
          'et_is_animating',
          'infinite',
          'et-waypoint',
          'fade',
          'fadeTop',
          'fadeRight',
          'fadeBottom',
          'fadeLeft',
          'slide',
          'slideTop',
          'slideRight',
          'slideBottom',
          'slideLeft',
          'bounce',
          'bounceTop',
          'bounceRight',
          'bounceBottom',
          'bounceLeft',
          'zoom',
          'zoomTop',
          'zoomRight',
          'zoomBottom',
          'zoomLeft',
          'flip',
          'flipTop',
          'flipRight',
          'flipBottom',
          'flipLeft',
          'fold',
          'foldTop',
          'foldRight',
          'foldBottom',
          'foldLeft',
          'roll',
          'rollTop',
          'rollRight',
          'rollBottom',
          'rollLeft',
          'transformAnim',
        ];
      }

      window.et_remove_animation = function($element) {
        // Don't remove looping animations, return early.
        if ($element.hasClass('infinite')) {
          return;
        }

        const animation_classes = et_get_animation_classes();

        // Remove attributes which avoid horizontal scroll to appear when section is rolled
        if ($element.is('.et_pb_section') && $element.is('.roll')) {
          $(`${et_frontend_scripts.builderCssContainerPrefix}, ${et_frontend_scripts.builderCssLayoutPrefix}`).css('overflow-x', '');
        }

        $element.removeClass(animation_classes.join(' '));
        $element.css({
          'animation-delay': '',
          'animation-duration': '',
          'animation-timing-function': '',
          opacity: '',
          transform: '',
          left: '',
        });

        // Prevent animation module with no explicit position property to be incorrectly positioned
        // after animation is clomplete and animation classname is removed because animation classname has
        // animation-name property which gives pseudo correct z-index. This class also works as a marker to prevent animating already animated objects.
        $element.addClass('et_had_animation');
      }

      window.et_remove_animation_data = function($element) {
        let attr_name;
        const data_attrs_to_remove = [];

        // Make sure item exists otherwise it may break animation loading on 3rd party post types
        if (isUndefined($element.get(0))) {
          return;
        }

        const data_attrs = $element.get(0).attributes;

        for (let i = 0; i < data_attrs.length; i++) {
          if ('data-animation-' === data_attrs[i].name.substring(0, 15)) {
            data_attrs_to_remove.push(data_attrs[i].name);
          }
        }

        $.each(data_attrs_to_remove, (index, attr_name) => {
          $element.removeAttr(attr_name);
        });
      }

      window.et_reinit_waypoint_modules = et_pb_debounce(() => {
        const $et_pb_circle_counter   = $('.et_pb_circle_counter');
        const $et_pb_number_counter   = $('.et_pb_number_counter');
        const $et_pb_video_background = $('.et_pb_section_video_bg video');

        // if waypoint is available and we are not ignoring them.
        if ($.fn.waypoint && window.et_pb_custom && 'yes' !== window.et_pb_custom.ignore_waypoints && ! isBuilder) {
          et_process_animation_data(true);

          // get all of our waypoint things.
          const modules = $('.et-waypoint');
          modules.each(function() {
            et_waypoint($(this), {
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
            $et_pb_circle_counter.each(function() {
              const $this_counter = $(this).find('.et_pb_circle_counter_inner');
              if (! $this_counter.is(':visible') || et_has_animation_data($this_counter)) {
                return;
              }

              et_waypoint($this_counter, {
                offset: et_get_offset($(this), '100%'),
                handler() {
                  if ($this_counter.data('PieChartHasLoaded') || 'undefined' === typeof $this_counter.data('easyPieChart')) {
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
            $et_pb_number_counter.each(function() {
              const $this_counter = $(this);

              if (et_has_animation_data($this_counter)) {
                return;
              }

              et_waypoint($this_counter, {
                offset: et_get_offset($(this), '100%'),
                handler() {
                  $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
                },
              });
            });
          }

          // Set waypoint for goal module.
          if (! isBuilder) {
            $.each(et_pb_custom.ab_tests, function(index, test) {
              const $et_pb_ab_goal = et_builder_ab_get_goal_node(test.post_id);

              if (0 === $et_pb_ab_goal.length) {
                return true;
              }

              et_waypoint($et_pb_ab_goal, {
                offset: et_get_offset($(this), '80%'),
                handler() {
                  if (et_pb_ab_logged_status[test.post_id].read_goal || ! $et_pb_ab_goal.length || ! $et_pb_ab_goal.visible(true)) {
                    return;
                  }

                  // log the goal_read if goal is still visible after 3 seconds.
                  setTimeout(() => {
                    if ($et_pb_ab_goal.length && $et_pb_ab_goal.visible(true) && ! et_pb_ab_logged_status[test.post_id].read_goal) {
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
          et_process_animation_data(false);
          const animated_class = isBuilder ? 'et-animated--vb' : 'et-animated';

          $('.et-waypoint').addClass(animated_class);

          // While in the builder, trigger all animations instantly as otherwise
          // TB layouts that are displayed but are not the currently edited post
          // will have their animated modules invisible due to .et-waypoint.
          $('.et-waypoint').each(function() {
            et_animate_element($(this));
          });

          if ($et_pb_circle_counter.length) {
            $et_pb_circle_counter.each(function() {
              const $this_counter = $(this).find('.et_pb_circle_counter_inner');

              if (! $this_counter.is(':visible')) {
                return;
              }

              if ($this_counter.data('PieChartHasLoaded') || 'undefined' === typeof $this_counter.data('easyPieChart')) {
                return;
              }

              $this_counter.data('easyPieChart').update($this_counter.data('number-value'));

              $this_counter.data('PieChartHasLoaded', true);
            });
          }

          if ($et_pb_number_counter.length) {
            $et_pb_number_counter.each(function() {
              const $this_counter = $(this);

              $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
            });
          }

          // log the stats without waypoints
          $.each(et_pb_custom.ab_tests, (index, test) => {
            const $et_pb_ab_goal = et_builder_ab_get_goal_node(test.post_id);

            if (0 === $et_pb_ab_goal.length) {
              return true;
            }

            if (et_pb_ab_logged_status[test.post_id].read_goal || ! $et_pb_ab_goal.length || ! $et_pb_ab_goal.visible(true)) {
              return true;
            }

            // log the goal_read if goal is still visible after 3 seconds.
            setTimeout(() => {
              if ($et_pb_ab_goal.length && $et_pb_ab_goal.visible(true) && ! et_pb_ab_logged_status[test.post_id].read_goal) {
                et_pb_ab_update_stats('read_goal', test.post_id, undefined, test.test_id);
              }
            }, 3000);

            et_pb_maybe_log_event($et_pb_ab_goal, 'view_goal');
          });
        } // End checking of waypoints.

        if ($et_pb_video_background.length) {
          $et_pb_video_background.each(function() {
            const $this_video_background = $(this);

            et_pb_video_background_init($this_video_background, this);
          });
        } // End of et_pb_debounce().
      }, 100);

      function et_process_link_options_data() {
        if ('undefined' !== typeof et_link_options_data && et_link_options_data.length > 0) {
          // $.each needs to be used so that the proper values are bound
          // when there are multiple elements with link options enabled
          $.each(et_link_options_data, (index, link_option_entry) => {
            if (
              ! link_option_entry.class
							|| ! link_option_entry.url
							|| ! link_option_entry.target
            ) {
              return;
            }

            const $clickable = $(`.${link_option_entry.class}`);

            $clickable.on('click', event => {
              // If the event target is different from current target a check for elements that should not trigger module link is performed
              if ((event.target !== event.currentTarget && ! et_is_click_exception($(event.target))) || event.target === event.currentTarget) {
                event.stopPropagation();

                let { url } = link_option_entry;
                url = url.replace(/&#91;/g, '[');
                url = url.replace(/&#93;/g, ']');

                if ('_blank' === link_option_entry.target) {
                  window.open(url);

                  return;
                }

                if ('#product_reviews_tab' === url) {
                  const $reviewsTabLink = $('.reviews_tab a');

                  if ($reviewsTabLink.length > 0) {
                    $reviewsTabLink.trigger('click');
                    et_pb_smooth_scroll($reviewsTabLink, undefined, 800);
                    history.pushState(null, '', url);
                  }
                } else if (url && '#' === url[0] && $(url).length) {
                  et_pb_smooth_scroll($(url), undefined, 800);
                  history.pushState(null, '', url);
                } else {
                  window.location = url;
                }
              }
            });

            // Prevent any links inside the element from triggering its (parent) link
            $clickable.on('click', 'a, button', function(event) {
              if (! et_is_click_exception($(this))) {
                event.stopPropagation();
              }
            });
          });
        }
      }

      // There are some classes that have other click handlers attached to them
      // Link options should not be triggered by/or prevent them from working
      function et_is_click_exception($element) {
        let is_exception = false;

        // List of elements that already have click handlers
        const click_exceptions = [
          // Accordion/Toggle
          '.et_pb_toggle_title',

          // Audio Module
          '.mejs-container *',

          // Contact Form Fields
          '.et_pb_contact_field input',
          '.et_pb_contact_field textarea',
          '.et_pb_contact_field_checkbox *',
          '.et_pb_contact_field_radio *',
          '.et_pb_contact_captcha',

          // Tabs
          '.et_pb_tabs_controls a',

          // Woo Image
          '.flex-control-nav *',

          // Menu
          '.et_pb_menu__search-button',
          '.et_pb_menu__close-search-button',
          '.et_pb_menu__search-container *',

          // Fullwidth Header
          '.et_pb_fullwidth_header_scroll *',
        ];

        for (let i = 0; i < click_exceptions.length; i++) {
          if ($element.is(click_exceptions[i])) {
            is_exception = true;
            break;
          }
        }

        return is_exception;
      }

      et_process_link_options_data();

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

              $goal_button.on('click', () => {
                if ($et_pb_ab_goal.hasClass('et_pb_comments_module') && ! et_pb_ab_logged_status[test.post_id].con_goal) {
                  et_pb_set_cookie(365, `et_pb_ab_comment_log_${test.post_id}${test.test_id}=true`);
                  return;
                }

                et_pb_maybe_log_event($et_pb_ab_goal, 'click_goal');
              });
            }
          } else {
            $et_pb_ab_goal.on('click', () => {
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

      /**
       * Get current active device based on window width size.
       *
       * @returns {string} View mode.
       */
      function et_pb_get_current_window_mode() {
        const window_width = $et_window.width();
        let current_mode   = 'desktop';

        if (window_width <= 980 && window_width > 767) {
          current_mode = 'tablet';
        } else if (window_width <= 767) {
          current_mode = 'phone';
        }

        return current_mode;
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

      if (! isBuilder) {
        $fullscreenSectionWindow.on('resize', et_calculate_fullscreen_section_size);
        $fullscreenSectionWindow.on('et-pb-header-height-calculated', et_calculate_fullscreen_section_size);
      }

      window.debounced_et_apply_builder_css_parallax = et_pb_debounce(et_apply_builder_css_parallax, 100);

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

        $this_parent.find('.et-learn-more .heading-more').on('click', () => {
          setTimeout(() => {
            et_parallax_set_height.bind($this_parent)();
          }, 300);
        });
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

        $et_pb_fullwidth_portfolio.each(function() {
          const set_container_height = !! $(this).hasClass('et_pb_fullwidth_portfolio_carousel');
          set_fullwidth_portfolio_columns($(this), set_container_height);
        });

        if (containerWidthChanged || window.et_force_width_container_change) {
          $('.container-width-change-notify').trigger('containerWidthChanged');

          setTimeout(() => {
            $et_pb_filterable_portfolio.each(function() {
              window.set_filterable_grid_items($(this));
            });
            $et_pb_gallery.each(function() {
              if ($(this).hasClass('et_pb_gallery_grid')) {
                set_gallery_grid_items($(this));
              }
            });
          }, 100);

          et_container_width = et_container_actual_width;

          etRecalculateOffset = true;

          const $et_pb_circle_counter = $('.et_pb_circle_counter');
          if ($et_pb_circle_counter.length) {
            $et_pb_circle_counter.each(function() {
              const $this_counter = $(this).find('.et_pb_circle_counter_inner');
              if (! $this_counter.is(':visible')) {
                return;
              }

              // Need to initialize if it has not (e.g visibility set to hidden when the page loaded)
              if ('undefined' === typeof $this_counter.data('easyPieChart')) {
                window.et_pb_circle_counter_init($this_counter);
              }

              // Update animation breakpoint variable and generate suffix.
              const current_mode      = et_pb_get_current_window_mode();
              et_animation_breakpoint = current_mode;
              const suffix            = current_mode !== 'desktop' ? `-${current_mode}` : '';

              // Update bar background color based on active mode.
              const bar_color = $this_counter.data(`bar-bg-color${suffix}`);
              if (typeof bar_color !== 'undefined' && bar_color !== '') {
                $this_counter.data('easyPieChart').options.barColor = bar_color;
              }

              // Update track color based on active mode.
              const track_color = $this_counter.data(`color${suffix}`);
              if (typeof track_color !== 'undefined' && track_color !== '') {
                $this_counter.data('easyPieChart').options.trackColor = track_color;
                $this_counter.trigger('containerWidthChanged');
              }

              // Update track color alpha based on active mode.
              const track_color_alpha = $this_counter.data(`alpha${suffix}`);
              if (typeof track_color_alpha !== 'undefined' && track_color_alpha !== '') {
                $this_counter.data('easyPieChart').options.trackAlpha = track_color_alpha;
                $this_counter.trigger('containerWidthChanged');
              }

              $this_counter.data('easyPieChart').update($this_counter.data('number-value'));
            });
          }
          if ($et_pb_countdown_timer.length) {
            $et_pb_countdown_timer.each(function() {
              const timer = $(this);
              et_countdown_timer_labels(timer);
            });
          }

          // Reset to false
          window.et_force_width_container_change = false;
        }

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

      function fitvids_slider_fullscreen_init() {
        if ($.fn.fitVids) {
          // Default custom and ignore selectors for all modules.
          let customSelector = "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']";
          let ignore         = '';

          // Library lazysizes convert the iframe video src into data:image,
          // so we need to add src data:image on the list. And also, need to
          // ignore if current iframe has .lazyloading class because it's not
          // visible until it's lazy loaded.
          if (! isUndefined(window.lazySizes)) {
            customSelector += ", iframe[src^='data:image']";
            ignore         += '.lazyloading';
          }

          $('.et_pb_slide_video').fitVids();
          $('.et_pb_module').fitVids({ customSelector, ignore });
        }

        et_fix_slider_height();

        // calculate fullscreen section sizes on $( window ).ready to avoid jumping in some cases
        et_calculate_fullscreen_section_size();
      }

      if (isBuilder) {
        $(window).one('et_fb_init_app_after', fitvids_slider_fullscreen_init);
      } else {
        fitvids_slider_fullscreen_init();
      }

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

        // Since modern browsers already support `hashchange` event, we drop jQuery
        // hashchange library usage here and use Javascript hashchange instead.
        if (window.HashChangeEvent) {
          $(window).on('hashchange', () => {
            const hash = window.location.hash.replace(/[^a-zA-Z0-9-_|]/g, '');
            process_et_hashchange(hash);
          });
          $(window).trigger('hashchange');
        }

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
        if (typeof $current_module.find('.et_pb_salvattore_content').attr('data-columns') !== 'undefined') {
          // register grid only if the content is not from cache
          if (! is_cache) {
            salvattore.registerGrid($current_module.find('.et_pb_salvattore_content')[0]);
          }
          salvattore.recreateColumns($current_module.find('.et_pb_salvattore_content')[0]);
          $current_module.find('.et_pb_post').css({ opacity: '1' });
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
            et_pb_slider_init($(this));
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
        $current_module.fitVids({ customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']" });

        $current_module.fadeTo('slow', 1);

        // reinit ET shortcodes.
        if ('function' === typeof window.et_shortcodes_init) {
          window.et_shortcodes_init($current_module);
        }

        // reinit audio players.
        et_init_audio_modules();

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

      window.et_pb_search_init = function($search) {
        // Update animation breakpoint variable and generate suffix.
        const current_mode      = et_pb_get_current_window_mode();
        et_animation_breakpoint = current_mode;

        const $input_field          = $search.find('.et_pb_s');
        const $button               = $search.find('.et_pb_searchsubmit');
        const buttonHeight          = $button.outerHeight();
        const inputHeight           = $input_field.innerHeight();

        // set the relative button position to get its height correctly
        $button.css({ position: 'relative' });

        if (buttonHeight > inputHeight) {
          $input_field.innerHeight(buttonHeight);
        }

        // reset the button position back to default
        $button.css({ position: '' });
      };

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

      if ($('.et_pb_search').length) {
        $('.et_pb_search').each(function() {
          const $search = $(this);

          if ($search.is('.et_pb_search_percentage_custom_margin')) {
            et_pb_search_percentage_custom_margin_fix($search);
          }

          et_pb_search_init($search);
        });
      }

      window.et_pb_comments_init = function($comments_module) {
        const $comments_module_button = $comments_module.find('.comment-reply-link, .submit');

        if ($comments_module_button.length) {
          $comments_module_button.addClass('et_pb_button');

          if (typeof $comments_module.attr('data-icon') !== 'undefined' && $comments_module.attr('data-icon') !== '') {
            $comments_module_button.attr('data-icon', $comments_module.attr('data-icon'));
            $comments_module_button.addClass('et_pb_custom_button_icon');
          }

          if (typeof $comments_module.attr('data-icon-tablet') !== 'undefined' && $comments_module.attr('data-icon-tablet') !== '') {
            $comments_module_button.attr('data-icon-tablet', $comments_module.attr('data-icon-tablet'));
            $comments_module_button.addClass('et_pb_custom_button_icon');
          }

          if (typeof $comments_module.attr('data-icon-phone') !== 'undefined' && $comments_module.attr('data-icon-phone') !== '') {
            $comments_module_button.attr('data-icon-phone', $comments_module.attr('data-icon-phone'));
            $comments_module_button.addClass('et_pb_custom_button_icon');
          }
        }
      };

      // apply required classes for the Reply buttons in Comments Module
      if ($('.et_pb_comments_module').length) {
        $('.et_pb_comments_module').each(function() {
          const $comments_module = $(this);

          et_pb_comments_init($comments_module);
        });
      }

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

      // Play BG video on hover.
      $('.et_pb_section_video_bg_hover').each(function() {
        const $module_video_bg = $(this).closest('.et_pb_section_video_on_hover');
        let isModuleHovered    = false;

        // Play video on hover and set hovered status to avoid duplicate action.
        $module_video_bg.on('mouseover', () => {
          if (isModuleHovered) {
            return;
          }

          $(this).find('.mejs-video video').trigger('play');

          isModuleHovered = true;
        });

        // Reset hovered status to reinitiate the play action later.
        $module_video_bg.on('mouseleave', () => {
          isModuleHovered = false;
        });
      });

      /**
       * Provide event listener for plugins to hook up to.
       */
      $(document).trigger('et_pb_after_init_modules');

      window.et_pb_wrap_woo_attribute_fields_in_span();

      window.et_pb_shop_add_hover_class = function() {
        $('.et_pb_shop').each(function() {
          const $et_pb_shop    = $(this);
          const $et_shop_image = $et_pb_shop.find('.et_shop_image');

          $et_shop_image.on('mouseover', function() {
            const $this          = $(this);
            const $et_li_wrapper = $this.parents().eq(1);

            // Elements
            const $price = $et_li_wrapper.find('.price');
            const $title = $et_li_wrapper.find('.woocommerce-loop-product__title');

            $price.addClass('hover');
            $title.addClass('hover');
          }).on('mouseout', function() {
            const $this          = $(this);
            const $et_li_wrapper = $this.parents().eq(1);

            // Elements
            const $price = $et_li_wrapper.find('.price');
            const $title = $et_li_wrapper.find('.woocommerce-loop-product__title');

            $price.removeClass('hover');
            $title.removeClass('hover');
          });
        });
      };

      et_pb_shop_add_hover_class();
    });

    if (window.et_load_event_fired) {
      et_maybe_register_salvattore_grid();
    } else {
      $(window).on('load', () => {
        et_maybe_register_salvattore_grid();
      });
    }
  };

  function et_get_first_section() {
    return $('.et-l:not(.et-l--footer) .et_pb_section:visible').first();
  }

  /**
   * Salvattore is dependent on CSS to determine the number of columns
   * so if the script gets executed before the CSS is ready it will fail.
   *
   * We can use this function to register the grid on window load when we
   * can assume the CSS is ready.
   *
   * @since 4.14.5
   */
  function et_maybe_register_salvattore_grid() {
    const blog_grid = $('.et_pb_blog_grid');

    if (0 === blog_grid.length) {
      return;
    }

    const salvattore_content = blog_grid.find('.et_pb_salvattore_content');

    const interval = setInterval(function() {
      salvattore_content.each(function() {
        const $this = $(this);
        const this_el = $this[0];
        const content_value = getComputedStyle(this_el, ':before').content;

        // If the 'content' value is NOT 'none', CSS is ready so we can clear.
        if ('none' !== content_value) {
          clearInterval(interval);
        }

        // If .column exists, the grid has already been registered so we can "return", as in "continue" in the loop.
        if ($this.children('.column').length) {
          return;
        }

        // If 'content' value is 'none', CSS is not ready so we can "return", as in "continue" in the loop.
        if ('none' === content_value) {
          return;
        }

        if ($this.children('div').length && !$this.children('div')[0].classList.length) {
          // If the next element is a div, without a class, attempt to recreate the columns.
          salvattore.recreateColumns(this_el);
        } else {
          // Otherwise, register the grid.
          salvattore.registerGrid(this_el);
        }
      });
    }, 100);
  }

  /**
   * Fix unwanted divider spacing (mostly in webkit) when svg image is repeated and the actual
   * svg image dimension width is in decimal.
   *
   * @since 4.0.10
   *
   * @param {object} $divider JQuery object of `.et_pb_top_inside_divider` or
   *   `.et_pb_bottom_inside_divider`.
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

  document.addEventListener('readystatechange', () => {
    // Enable alternative scroll to anchor method only for Divi and Extra.
    if ('complete' === document.readyState && (isDiviTheme || isExtraTheme)) {
      et_pb_fix_scroll_to_anchor_position();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
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
    // Run this on .on('load') event after woocommerce modules are ready and processed.
    if ($('.et_pb_module #rating, .et_pb_module .comment-form-rating').length > 0) {
      $('.et_pb_module #rating, .et_pb_module .comment-form-rating').each(function() {
        window.et_pb_init_woo_star_rating($(this));
      });
    }

    // Apply Custom icons to Woo Module Buttons.
    // All the buttons generated in WooCommerce template and we cannot add custom attributes
    // Therefore we have to use js to add it.
    window.et_pb_init_woo_custom_button_icon = function() {
      if ($('.et_pb_woo_custom_button_icon').length > 0) {
        $('.et_pb_woo_custom_button_icon').each(function() {
          const $thisModule = $(this);
          const btnNames    = $thisModule.attr('data-button-names');

          if (btnNames) {
            const names = split(btnNames, ' ');
            forEach(names, (name) => {
              const $buttonEl        = $thisModule.find(`button[name="${name}"]`);
              const buttonIcon       = $thisModule.attr(`data-${name}-icon`);
              const buttonIconTablet = $thisModule.attr(`data-${name}-icon-tablet`);
              const buttonIconPhone  = $thisModule.attr(`data-${name}-icon-phone`);
              const buttonClassName  = 'et_pb_custom_button_icon et_pb_button';

              $buttonEl.addClass(buttonClassName);

              if (buttonIcon || buttonIconTablet || buttonIconPhone) {
                $buttonEl.attr('data-icon', buttonIcon);
                $buttonEl.attr('data-icon-tablet', buttonIconTablet);
                $buttonEl.attr('data-icon-phone', buttonIconPhone);
              }
            });
          } else {
            const buttonClass      = $thisModule.data('button-class');
            const $buttonEl        = $thisModule.find(`.${buttonClass}`);
            const buttonIcon       = $thisModule.attr('data-button-icon');
            const buttonIconTablet = $thisModule.attr('data-button-icon-tablet');
            const buttonIconPhone  = $thisModule.attr('data-button-icon-phone');
            const buttonClassName  = 'et_pb_custom_button_icon et_pb_button';

            $buttonEl.addClass(buttonClassName);

            if (buttonIcon || buttonIconTablet || buttonIconPhone) {
              $buttonEl.attr('data-icon', buttonIcon);
              $buttonEl.attr('data-icon-tablet', buttonIconTablet);
              $buttonEl.attr('data-icon-phone', buttonIconPhone);
            }
          }
        });
      }
    };

    window.et_pb_init_woo_custom_button_icon();

    $('body').on('updated_checkout', function(event) {
      window.et_pb_init_woo_custom_button_icon();
    });

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

  // Menu module.
  function menuModuleOpenSearch($module) {
    const $menu       = $module.find('.et_pb_menu__wrap').first();
    const $search     = $module.find('.et_pb_menu__search-container').first();
    const $input      = $module.find('.et_pb_menu__search-input').first();
    const $fwMenuLogo = $module.find('.et_pb_row > .et_pb_menu__logo-wrap').first();
    const $menuLogo   = $module.find('.et_pb_menu_inner_container > .et_pb_menu__logo-wrap').first();
    const $logo       = $fwMenuLogo.add($menuLogo);
    const isMobile    = $(window).width() <= 980;

    if ($search.hasClass('et_pb_is_animating')) {
      return;
    }

    // Close the menu if it is open.
    $menu.find('.mobile_nav.opened').removeClass('opened').addClass('closed');
    $menu.find('.et_mobile_menu').hide();

    $menu.removeClass('et_pb_menu__wrap--visible').addClass('et_pb_menu__wrap--hidden');
    $search.removeClass('et_pb_menu__search-container--hidden et_pb_menu__search-container--disabled').addClass('et_pb_menu__search-container--visible et_pb_is_animating');

    // Adjust spacing based on layout and the logo used.
    $search.css('padding-top', '0px');
    if ($module.hasClass('et_pb_menu--style-left_aligned') || $module.hasClass('et_pb_fullwidth_menu--style-left_aligned')) {
      $search.css('padding-left', `${$logo.width()}px`);
    } else {
      const logoHeight = $logo.height();

      $search.css('padding-left', '0px');
      if (isMobile || $module.hasClass('et_pb_menu--style-centered') || $module.hasClass('et_pb_fullwidth_menu--style-centered')) {
        // 30 = logo margin-bottom.
        $search.css('padding-top', `${(logoHeight > 0 ? logoHeight + 30 : 0)}px`);
      }
    }

    $input.css('font-size', $module.find('.et-menu-nav li a').first().css('font-size'));
    setTimeout(() => {
      $input.trigger('focus');
    }, 0);

    setTimeout(() => {
      $menu.addClass('et_pb_no_animation');
      $search.addClass('et_pb_no_animation').removeClass('et_pb_is_animating');
    }, 1000);
  }

  function menuModuleCloseSearch($module) {
    const $menu   = $module.find('.et_pb_menu__wrap').first();
    const $search = $module.find('.et_pb_menu__search-container').first();
    const $input  = $module.find('.et_pb_menu__search-input').first();

    if ($search.hasClass('et_pb_is_animating')) {
      return;
    }

    $menu.removeClass('et_pb_menu__wrap--hidden').addClass('et_pb_menu__wrap--visible');
    $search.removeClass('et_pb_menu__search-container--visible').addClass('et_pb_menu__search-container--hidden et_pb_is_animating');
    $input.trigger('blur');

    setTimeout(() => {
      $search.removeClass('et_pb_is_animating').addClass('et_pb_menu__search-container--disabled');
    }, 1000);
  }

  function menuModuleCloneInlineLogo($module) {
    const $logo = $module.find('.et_pb_menu__logo-wrap').first();

    if (0 === $logo.length) {
      return;
    }

    const $menu = $module.find('.et_pb_menu__menu').first();

    if (0 === $menu.length || $menu.find('.et_pb_menu__logo').length > 0) {
      return;
    }

    const li = window.et_pb_menu_inject_inline_centered_logo($menu.get(0));

    if (null === li) {
      return;
    }

    $(li).empty().append($logo.clone());
  }

  $(document).on('click', '.et_pb_menu__search-button', function() {
    menuModuleOpenSearch($(this).closest('.et_pb_module'));
  });

  $(document).on('click', '.et_pb_menu__close-search-button', function() {
    menuModuleCloseSearch($(this).closest('.et_pb_module'));
  });

  $(document).on('blur', '.et_pb_menu__search-input', function() {
    menuModuleCloseSearch($(this).closest('.et_pb_module'));
  });

  $(() => {
    $('.et_pb_menu--style-inline_centered_logo, .et_pb_fullwidth_menu--style-inline_centered_logo').each(function() {
      menuModuleCloneInlineLogo($(this));
    });

    // The visible iframe is still being processed by lazysizes at the first
    // load, so we need to check those iframes and reload fitVids.
    if (! isUndefined(window.lazySizes)) {
      $(document).on('lazyloaded', e => {
        const $target    = $(e.target);
        const targetName = $target.attr('name');

        // Target fitvid or unassigned iframe to ensure it has the correct source.
        if ($target.is('iframe') && (includes(targetName, 'fitvid') || isUndefined(targetName))) {
          $target.attr('src', $target.attr('data-src'));
          $target.parent().fitVids();
        }
      });
    }
  });

  document.addEventListener('DOMContentLoaded', window.et_pb_reposition_menu_module_dropdowns);
  $(window).on('resize', window.et_pb_reposition_menu_module_dropdowns);

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
        const valueOld = $target.attr(key);

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

          case 'src': {
            if (valueOld !== value) {
              $target.off('load');
              $target.on('load', function () {
                $target.addClass('et_multi_view_image__loaded');
                $target.removeClass('et_multi_view_image__loading');
              });

              $target.addClass('et_multi_view_image__loading');
              $target.removeClass('et_multi_view_image__loaded');

              $target.attr({
                src: value,
                srcset: attrs.srcset || '',
                sizes: attrs.sizes || '',
              });

              if (value) {
                $target.removeClass('et_multi_view_hidden_image');
              } else {
                $target.addClass('et_multi_view_hidden_image');
              }

              updated[key] = value;
            }

            break;
          }

          default: {
            if (valueOld !== value) {
              $target.attr(key, value);

              if (0 === key.indexOf('data-')) {
                $target.data(key.replace('data-', ''), value);
              }

              updated[key] = value;
            }

            break;
          }
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
