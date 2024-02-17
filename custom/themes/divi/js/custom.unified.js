/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/custom.unified.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/admin/js/frame-helpers.js":
/*!****************************************!*\
  !*** ./core/admin/js/frame-helpers.js ***!
  \****************************************/
/*! exports provided: top_window, is_iframe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top_window", function() { return top_window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_iframe", function() { return is_iframe; });
/*                    ,-,-
                     / / |
   ,-'             _/ / /
  (-_          _,-' `Z_/
   "#:      ,-'_,-.    \  _
    #'    _(_-'_()\     \" |
  ,--_,--'                 |
 / ""                      L-'\
 \,--^---v--v-._        /   \ |
   \_________________,-'      |
                    \
                     \
                      \
 NOTE: The code in this file will be executed multiple times! */
var top_window = window;
var is_iframe = false;
var top;

try {
  // Have to access top window's prop (document) to trigger same-origin DOMException
  // so we can catch it and act accordingly.
  top = window.top.document ? window.top : false;
} catch (e) {
  // Can't access top, it means we're inside a different domain iframe.
  top = false;
}

if (top && top.__Cypress__) {
  if (window.parent === top) {
    top_window = window;
    is_iframe = false;
  } else {
    top_window = window.parent;
    is_iframe = true;
  }
} else if (top) {
  top_window = top;
  is_iframe = top !== window.self;
}



/***/ }),

/***/ "./epanel/.webpack/scripts.js":
/*!************************************!*\
  !*** ./epanel/.webpack/scripts.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shortcodes_js_et_shortcodes_frontend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shortcodes/js/et_shortcodes_frontend.js */ "./epanel/shortcodes/js/et_shortcodes_frontend.js");
/* harmony import */ var _shortcodes_js_et_shortcodes_frontend_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shortcodes_js_et_shortcodes_frontend_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./epanel/shortcodes/js/et_shortcodes_frontend.js":
/*!********************************************************!*\
  !*** ./epanel/shortcodes/js/et_shortcodes_frontend.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ET et_shortcodes_frontend.js */
// et_switcher plugin v2.2
(function ($) {
  $.fn.et_shortcodes_switcher = function (options) {
    var defaults = {
      slides: '>div',
      activeClass: 'active',
      linksNav: '',
      findParent: true,
      //use parent elements to define active states
      lengthElement: 'li',
      //parent element, used only if findParent is set to true
      useArrows: false,
      arrowLeft: 'a#prev-arrow',
      arrowRight: 'a#next-arrow',
      auto: false,
      autoSpeed: 5000,
      slidePadding: '',
      pauseOnHover: true,
      fx: 'fade',
      sliderType: ''
    };
    var options = $.extend(defaults, options);
    return this.each(function () {
      var slidesContainer = jQuery(this).parent().css('position', 'relative'),
          $slides = jQuery(this).css({
        'overflow': 'hidden',
        'position': 'relative'
      }),
          $slides_wrapper_box = slidesContainer.find('.et-tabs-content-wrapper'),
          $slides_wrapper = $slides_wrapper_box.parent(),
          $slide = $slides.find('.et-tabs-content-wrapper' + options.slides),
          slidesNum = $slide.length,
          zIndex = slidesNum,
          currentPosition = 1,
          slideHeight = 0,
          $activeSlide,
          $nextSlide,
          slides_wrapper_width = $slides_wrapper.width(),
          $et_shortcodes_mobile_nav,
          $et_shortcodes_mobile_controls;

      if (options.fx === 'slide') {
        $slides_wrapper_box.width((slidesNum + 2) * 200 + '%');
        $slide.css({
          'width': slides_wrapper_width + 'px',
          'visibility': 'visible'
        });
        $slides_wrapper_box.append($slide.first().clone().removeClass().addClass('et_slidecontent_cloned'));
        $slides_wrapper_box.prepend($slide.last().clone().removeClass().addClass('et_slidecontent_cloned'));
        $slides_wrapper_box.css('left', -slides_wrapper_width + 'px');
      }

      $slide.first().css({
        'display': 'block'
      }).addClass('et_shortcode_slide_active');

      if ('' !== options.slidePadding) {
        var slidePaddingOption = 'number' === typeof options.slidePadding ? options.slidePadding + 'px' : options.slidePadding;
        $slide.css('padding', slidePaddingOption);
      }

      if (options.linksNav != '') {
        var linkSwitcher = jQuery(options.linksNav);
        var linkSwitcherTab = '';
        if (options.findParent) linkSwitcherTab = linkSwitcher.parent();else linkSwitcherTab = linkSwitcher;
        if (!linkSwitcherTab.filter('.active').length) linkSwitcherTab.first().addClass('active');
        linkSwitcher.on('click', function () {
          var targetElement, orderNum;
          if (options.findParent) targetElement = jQuery(this).parent();else targetElement = jQuery(this);
          orderNum = targetElement.prevAll(options.lengthElement).length + 1;
          if (orderNum > currentPosition) gotoSlide(orderNum, 1);else gotoSlide(orderNum, -1);
          return false;
        });
      }

      if (options.useArrows) {
        var $right_arrow = jQuery(options.arrowRight),
            $left_arrow = jQuery(options.arrowLeft);
        $right_arrow.on('click', function () {
          et_shortcodes_go_to_next_slide();
          return false;
        });
        $left_arrow.on('click', function () {
          et_shortcodes_go_to_previous_slide();
          return false;
        });
      }

      function changeTab() {
        if (linkSwitcherTab != '') {
          linkSwitcherTab.siblings().removeClass('active');
          linkSwitcherTab.eq(currentPosition - 1).addClass('active');
        }
      }

      function gotoSlide(slideNumber, dir) {
        if ($slide.filter(':animated').length) return;
        $activeSlide = $slide.parent().find('.et_slidecontent').eq(currentPosition - 1);
        if (currentPosition === slideNumber) return;
        $activeSlide.removeClass('et_shortcode_slide_active');
        $nextSlide = $slide.parent().find('.et_slidecontent').eq(slideNumber - 1).addClass('et_shortcode_slide_active');

        if ((currentPosition > slideNumber || currentPosition === 1) && dir === -1) {
          if (options.fx === 'slide') slideBack(500);
          if (options.fx === 'fade') slideFade(500);
        } else {
          if (options.fx === 'slide') slideForward(500);
          if (options.fx === 'fade') slideFade(500);
        }

        currentPosition = $nextSlide.prevAll('.et_slidecontent').length + 1;
        if (options.linksNav != '') changeTab();

        if (options.sliderType === 'images' || options.sliderType === 'simple') {
          $et_shortcodes_mobile_controls.find('li').removeClass('et_shortcodes_active_control');
          $et_shortcodes_mobile_controls.find('li').eq(currentPosition - 1).addClass('et_shortcodes_active_control');
        }

        return false;
      }

      if (options.auto) {
        auto_rotate();
        var pauseSlider = false;
      }

      if (options.pauseOnHover) {
        slidesContainer.on('mouseenter', function () {
          pauseSlider = true;
        }).on('mouseleave', function () {
          pauseSlider = false;
        });
      }

      function auto_rotate() {
        interval_shortcodes = setInterval(function () {
          if (!pauseSlider) {
            if (currentPosition === slidesNum) gotoSlide(1, 1);else gotoSlide(currentPosition + 1, 1);
            if (options.linksNav != '') changeTab();
          }
        }, options.autoSpeed);
      }

      function slideFade(speed) {
        $activeSlide.css({
          'display': 'none',
          'opacity': '0'
        });
        $nextSlide.css({
          'opacity': '0',
          'display': 'block'
        }).animate({
          opacity: 1
        }, 700);
      }

      function slideForward(speed) {
        var next_slide_order = $nextSlide.prevAll('.et_slidecontent').length + 1,
            go_to_first_slide = false;

        if ($activeSlide.next('.et_slidecontent_cloned').length) {
          next_slide_order = $activeSlide.prevAll().length + 1;
          go_to_first_slide = true;
        }

        $slides_wrapper_box.animate({
          left: -($slides_wrapper.width() * next_slide_order)
        }, 500, function () {
          if (go_to_first_slide) {
            $slides_wrapper_box.css('left', -$slides_wrapper.width() + 'px');
          }
        });
      }

      function slideBack(speed) {
        var next_slide_order = $nextSlide.prevAll('.et_slidecontent').length + 1,
            go_to_last_slide = false;

        if ($activeSlide.prev('.et_slidecontent_cloned').length) {
          next_slide_order = 0;
          go_to_last_slide = true;
        }

        $slides_wrapper_box.animate({
          left: -($slides_wrapper.width() * next_slide_order)
        }, 500, function () {
          if (go_to_last_slide) {
            $slides_wrapper_box.css('left', -($slides_wrapper.width() * slidesNum) + 'px');
          }
        });
      }

      if (options.fx === 'slide') {
        $(window).on('resize', function () {
          $slides_wrapper_box.find('>div').css({
            'width': $slides_wrapper.width() + 'px'
          });
          $slides_wrapper_box.css('left', -($slides_wrapper.width() * currentPosition) + 'px');
        });
      }

      et_generate_mobile_nav();

      function et_generate_mobile_nav() {
        var et_shortcodes_slides_num = slidesContainer.find('.et_slidecontent').length,
            et_shortcodes_controllers_html = '';

        if (et_shortcodes_slides_num > 1 && (options.sliderType === 'images' || options.sliderType === 'simple')) {
          slidesContainer.append('<div class="et_shortcodes_controller_nav">' + '<ul class="et_shortcodes_controls"></ul>' + '<ul class="et_shortcodes_controls_arrows"><li><a href="#" class="et_sc_nav_next">' + et_shortcodes_strings.next + '<span></span></a></li><li><a href="#" class="et_sc_nav_prev">' + et_shortcodes_strings.previous + '<span></span></a></li></ul>' + '</div>');
          $et_shortcodes_mobile_controls = slidesContainer.find('.et_shortcodes_controls');

          for (var i = 0; i < et_shortcodes_slides_num; i++) {
            et_shortcodes_controllers_html += '<li><a href="#"></a></li>';
          }

          $et_shortcodes_mobile_controls.prepend(et_shortcodes_controllers_html);
          $et_shortcodes_mobile_controls.find('li').first().addClass('et_shortcodes_active_control');
          $et_shortcodes_mobile_controls.find('a').on('click', function () {
            var $this_control = $(this),
                $this_control_li = $this_control.parent('li'),
                this_order = $this_control_li.prevAll().length + 1;
            if (this_order == currentPosition) return false;
            if (this_order > currentPosition) gotoSlide(this_order, 1);else gotoSlide(this_order, -1);
            return false;
          });
          $et_shortcodes_mobile_nav = slidesContainer.find('.et_shortcodes_controls_arrows');
          $et_shortcodes_mobile_nav.find('a').on('click', function () {
            var $this_link = jQuery(this),
                et_active_slide_order;
            if ($this_link.hasClass('et_sc_nav_next')) et_shortcodes_go_to_next_slide();
            if ($this_link.hasClass('et_sc_nav_prev')) et_shortcodes_go_to_previous_slide();
            $et_shortcodes_mobile_controls.find('li').removeClass('et_shortcodes_active_control');
            et_active_slide_order = currentPosition - 1;
            $et_shortcodes_mobile_controls.find('li').eq(et_active_slide_order).addClass('et_shortcodes_active_control');
            return false;
          });
        } else if (options.sliderType !== 'images' && options.sliderType !== 'simple') {
          slidesContainer.prepend('<ul class="et_shortcodes_mobile_nav"><li><a href="#" class="et_sc_nav_next">' + et_shortcodes_strings.next + '<span></span></a></li><li><a href="#" class="et_sc_nav_prev">' + et_shortcodes_strings.previous + '<span></span></a></li></ul>');
          $et_shortcodes_mobile_nav = slidesContainer.find('.et_shortcodes_mobile_nav');
          $et_shortcodes_mobile_nav.find('a').on('click', function () {
            var $this_link = jQuery(this);
            if ($this_link.hasClass('et_sc_nav_next')) et_shortcodes_go_to_next_slide();
            if ($this_link.hasClass('et_sc_nav_prev')) et_shortcodes_go_to_previous_slide();
            return false;
          });
        }
      }

      function et_shortcodes_go_to_next_slide() {
        if (currentPosition === slidesNum) gotoSlide(1, 1);else gotoSlide(currentPosition + 1, 1);
        if (options.linksNav != '') changeTab();
      }

      function et_shortcodes_go_to_previous_slide() {
        if (currentPosition === 1) gotoSlide(slidesNum, -1);else gotoSlide(currentPosition - 1, -1);
        if (options.linksNav != '') changeTab();
      }
    });
  };

  window.et_shortcodes_init = function ($container) {
    var $processed_container = typeof $container !== 'undefined' ? $container : $('body');
    var $et_pricing_table_button = $processed_container.find('.pricing-table a.icon-button');
    $et_tooltip = $processed_container.find('.et-tooltip');
    $et_tooltip.on('mouseover mouseout', function (event) {
      if (event.type == 'mouseover') {
        $(this).find('.et-tooltip-box').stop(true, true).animate({
          opacity: 'show',
          bottom: '25px'
        }, 300);
      } else {
        $(this).find('.et-tooltip-box').delay(200).animate({
          opacity: 'hide',
          bottom: '35px'
        }, 300);
      }
    }); // learn more

    $et_learn_more = $processed_container.find('.et-learn-more .heading-more');
    $et_learn_more.on('click', function () {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
      } else {
        $(this).addClass('open');
      }

      $(this).parent('.et-learn-more').find('.learn-more-content').animate({
        opacity: 'toggle',
        height: 'toggle'
      }, 300);
    });
    $processed_container.find('.et-learn-more').not('.et-open').find('.learn-more-content').css({
      'visibility': 'visible',
      'display': 'none'
    });
    $et_pricing_table_button.each(function () {
      var $this_button = $(this),
          this_button_width = $this_button.width(),
          this_button_innerwidth = $this_button.innerWidth();
      $this_button.css({
        width: this_button_width + 'px',
        'marginLeft': '-' + this_button_innerwidth / 2 + 'px',
        'visibility': 'visible'
      });
    });
    var $et_shortcodes_tabs = $processed_container.find('.et-tabs-container, .tabs-left, .et-simple-slider, .et-image-slider');
    $et_shortcodes_tabs.each(function (i) {
      var et_shortcodes_tab_class = $(this).attr('class'),
          et_shortcodes_tab_autospeed_class_value = /et_sliderauto_speed_(\d+)/g,
          et_shortcodes_tab_autospeed = et_shortcodes_tab_autospeed_class_value.exec(et_shortcodes_tab_class),
          et_shortcodes_tab_auto_class_value = /et_sliderauto_(\w+)/g,
          et_shortcodes_tab_auto = et_shortcodes_tab_auto_class_value.exec(et_shortcodes_tab_class),
          et_shortcodes_tab_type_class_value = /et_slidertype_(\w+)/g,
          et_shortcodes_tab_type = et_shortcodes_tab_type_class_value.exec(et_shortcodes_tab_class),
          et_shortcodes_tab_fx_class_value = /et_sliderfx_(\w+)/g,
          et_shortcodes_tab_fx = et_shortcodes_tab_fx_class_value.exec(et_shortcodes_tab_class),
          et_shortcodes_tab_apply_to_element = '.et-tabs-content',
          et_shortcodes_tab_settings = {};
      et_shortcodes_tab_settings.linksNav = $(this).find('.et-tabs-control li a');
      et_shortcodes_tab_settings.findParent = true;
      et_shortcodes_tab_settings.fx = et_shortcodes_tab_fx[1];
      et_shortcodes_tab_settings.auto = 'false' === et_shortcodes_tab_auto[1] ? false : true;
      et_shortcodes_tab_settings.autoSpeed = et_shortcodes_tab_autospeed[1];

      if ('simple' === et_shortcodes_tab_type[1]) {
        et_shortcodes_tab_settings = {};
        et_shortcodes_tab_settings.fx = et_shortcodes_tab_fx[1];
        et_shortcodes_tab_settings.auto = 'false' === et_shortcodes_tab_auto[1] ? false : true;
        et_shortcodes_tab_settings.autoSpeed = et_shortcodes_tab_autospeed[1];
        et_shortcodes_tab_settings.sliderType = 'simple';
        et_shortcodes_tab_apply_to_element = '.et-simple-slides';
      } else if ('images' === et_shortcodes_tab_type[1]) {
        et_shortcodes_tab_settings.sliderType = 'images';
        et_shortcodes_tab_settings.linksNav = '#' + $(this).attr('id') + ' .controllers a.switch';
        et_shortcodes_tab_settings.findParent = false;
        et_shortcodes_tab_settings.lengthElement = '#' + $(this).attr('id') + ' a.switch';
        et_shortcodes_tab_apply_to_element = '.et-image-slides';
      }

      $(this).find(et_shortcodes_tab_apply_to_element).et_shortcodes_switcher(et_shortcodes_tab_settings);
    });
  };
})(jQuery); // end et_switcher plugin v2
/////// Shortcodes Javascript ///////


jQuery(function ($) {
  window.et_shortcodes_init();
});

/***/ }),

/***/ "./includes/builder/.webpack/scripts.js":
/*!**********************************************!*\
  !*** ./includes/builder/.webpack/scripts.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_ext_waypoints_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/ext/waypoints.min.js */ "./includes/builder/scripts/ext/waypoints.min.js");
/* harmony import */ var _scripts_ext_waypoints_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_ext_waypoints_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_builder_build_frontend_builder_global_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frontend-builder/build/frontend-builder-global-functions.js */ "./includes/builder/frontend-builder/build/frontend-builder-global-functions.js");
/* harmony import */ var _frontend_builder_build_frontend_builder_global_functions_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_frontend_builder_build_frontend_builder_global_functions_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_builder_build_frontend_builder_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontend-builder/build/frontend-builder-scripts.js */ "./includes/builder/frontend-builder/build/frontend-builder-scripts.js");
/* harmony import */ var _frontend_builder_build_frontend_builder_scripts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_frontend_builder_build_frontend_builder_scripts_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./includes/builder/frontend-builder/build/frontend-builder-global-functions.js":
/*!**************************************************************************************!*\
  !*** ./includes/builder/frontend-builder/build/frontend-builder-global-functions.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(window,
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "http://0.0.0.0:31495/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "../scripts/frontend/global-functions.js");
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "../../../core/admin/js/frame-helpers.js":
  /*!*********************************************************************************************************!*\
    !*** /Users/slava/Local Sites/dividev/app/public/wp-content/themes/Divi/core/admin/js/frame-helpers.js ***!
    \*********************************************************************************************************/

  /*! no static exports found */

  /***/
  function coreAdminJsFrameHelpersJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.top_window = exports.is_iframe = void 0;
    /*                    ,-,-
                         / / |
       ,-'             _/ / /
      (-_          _,-' `Z_/
       "#:      ,-'_,-.    \  _
        #'    _(_-'_()\     \" |
      ,--_,--'                 |
     / ""                      L-'\
     \,--^---v--v-._        /   \ |
       \_________________,-'      |
                        \
                         \
                          \
     NOTE: The code in this file will be executed multiple times! */

    var top_window = window;
    exports.top_window = top_window;
    var is_iframe = false;
    exports.is_iframe = is_iframe;
    var top;

    try {
      // Have to access top window's prop (document) to trigger same-origin DOMException
      // so we can catch it and act accordingly.
      top = window.top.document ? window.top : false;
    } catch (e) {
      // Can't access top, it means we're inside a different domain iframe.
      top = false;
    }

    if (top && top.__Cypress__) {
      if (window.parent === top) {
        exports.top_window = top_window = window;
        exports.is_iframe = is_iframe = false;
      } else {
        exports.top_window = top_window = window.parent;
        exports.is_iframe = is_iframe = true;
      }
    } else if (top) {
      exports.top_window = top_window = top;
      exports.is_iframe = is_iframe = top !== window.self;
    }
    /***/

  },

  /***/
  "../scripts/frontend/global-functions.js":
  /*!***********************************************!*\
    !*** ../scripts/frontend/global-functions.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function scriptsFrontendGlobalFunctionsJs(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */

    (function (jQuery) {
      var _frameHelpers = __webpack_require__(
      /*! @core/admin/js/frame-helpers */
      "../../../core/admin/js/frame-helpers.js");

      var _utils = __webpack_require__(
      /*! ../utils/utils */
      "../scripts/utils/utils.js");

      var _sticky = __webpack_require__(
      /*! ../utils/sticky */
      "../scripts/utils/sticky.js"); // Internal Dependencies


      (function ($) {
        var isBlockLayoutPreview = $('body').hasClass('et-block-layout-preview');
        var $tbHeader = $('.et-l--header').first();
        var tbHeaderAllFixedSectionHeight = 0; // Modification of underscore's _.debounce()
        // Underscore.js 1.8.3
        // http://underscorejs.org
        // (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
        // Underscore may be freely distributed under the MIT license.

        window.et_pb_debounce = function (func, wait, immediate) {
          var timeout;
          var args;
          var context;
          var timestamp;
          var result;
          var now = Date.now || new Date().getTime();

          var later = function later() {
            var last = now - timestamp;

            if (last < wait && last >= 0) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;

              if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
              }
            }
          };

          return function () {
            context = this;
            args = arguments;
            timestamp = now;
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);

            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }

            return result;
          };
        };

        if ($tbHeader.length) {
          var $tbHeaderSections = $tbHeader.find('.et_builder_inner_content').children('.et_pb_section--fixed'); // Get the most tall header fixed section height

          var et_pb_header_most_lengthy_fixed_section_height = et_pb_debounce(function (e) {
            tbHeaderAllFixedSectionHeight = 0;
            $.each($tbHeaderSections, function (index, section) {
              var $sectionHeight = $(section).outerHeight(true);
              tbHeaderAllFixedSectionHeight += $sectionHeight;
            });
          }, 300);
          $(window).on('resize', et_pb_header_most_lengthy_fixed_section_height);
        }

        window.et_pb_smooth_scroll = function ($target, $top_section, speed, easing) {
          var targetOffsetTop = $target.offset().top;
          var $window_width = $(window).width();
          var $menu_offset = 0;
          var $scroll_position = 0;
          var $menuLeft = '';
          var $menuRight = '';
          var $fixedHeaderSection = $tbHeader.find('.et_pb_section'); // If the target is in sticky state there should be no scroll so we can bail early.

          if ((0, _sticky.isTargetStickyState)($target)) {
            return;
          }

          if ($('body').hasClass('et_fixed_nav') && $window_width > 980) {
            var topHeaderHeight = $('#top-header').outerHeight() || 0;
            var mainHeaderHeight = $('#main-header').outerHeight() || 0;
            $menu_offset = topHeaderHeight + mainHeaderHeight - 1;
          } else {
            $menu_offset = 0;
          }

          if ($('#wpadminbar').length && $window_width > 600) {
            var wpAdminBarHeight = $('#wpadminbar').outerHeight() || 0;
            $menu_offset += wpAdminBarHeight;
          }

          if ($tbHeader.length) {
            // attach targeted section just under header (if) fixed section
            if ($fixedHeaderSection.hasClass('et_pb_section--fixed')) {
              $menuLeft = Math.ceil(parseFloat($fixedHeaderSection.css('left')));
              $menuRight = Math.ceil(parseFloat($fixedHeaderSection.css('right')));

              if ($window_width < 980) {
                $menu_offset += 90;
              }
            }

            if (0 === $menuLeft + $menuRight) {
              $menu_offset += tbHeaderAllFixedSectionHeight;
            }
          } // Calculate offset that needs to be added due to the existence of sticky module(s).
          // This avoids smooth scroll to stop beneath sticky module.


          var closestStickyOffsetTop = (0, _sticky.getClosestStickyModuleOffsetTop)($target);

          if (closestStickyOffsetTop) {
            $menu_offset += closestStickyOffsetTop;
          } // fix sidenav scroll to top


          if ($top_section) {
            $scroll_position = 0;
          } else {
            $scroll_position = Math.round(targetOffsetTop) - $menu_offset;
          } // set swing (animate's scrollTop default) as default value


          if ('undefined' === typeof easing) {
            easing = 'swing';
          }

          $('html, body').animate({
            scrollTop: $scroll_position
          }, speed, easing);
        };

        window.et_pb_form_placeholders_init = function ($form) {
          $form.find('input:text, input[type="email"], input[type="url"], textarea').each(function (index, domEle) {
            var $et_current_input = jQuery(domEle);
            var $et_comment_label = $et_current_input.siblings('label');
            var et_comment_label_value = $et_current_input.siblings('label').text();

            if ($et_comment_label.length) {
              $et_comment_label.hide();

              if ($et_current_input.siblings('span.required')) {
                et_comment_label_value += $et_current_input.siblings('span.required').text();
                $et_current_input.siblings('span.required').hide();
              }

              $et_current_input.val(et_comment_label_value);
            }
          }).on('focus', function () {
            var et_label_text = jQuery(this).siblings('label').text();
            if (jQuery(this).siblings('span.required').length) et_label_text += jQuery(this).siblings('span.required').text();
            if (jQuery(this).val() === et_label_text) jQuery(this).val('');
          }).on('blur', function () {
            var et_label_text = jQuery(this).siblings('label').text();
            if (jQuery(this).siblings('span.required').length) et_label_text += jQuery(this).siblings('span.required').text();
            if ('' === jQuery(this).val()) jQuery(this).val(et_label_text);
          });
        };

        window.et_duplicate_menu = function (menu, append_to, menu_id, menu_class, menu_click_event) {
          append_to.each(function () {
            var $this_menu = $(this);
            var $cloned_nav; // Bail early if menu has already been duplicated.

            if ($this_menu.find("#".concat(menu_id)).length) {
              return;
            } // make this function work with existing menus, without cloning


            if ('' !== menu) {
              menu.clone().attr('id', menu_id).removeClass().attr('class', menu_class).appendTo($this_menu);
            }

            $cloned_nav = $this_menu.find('> ul');
            $cloned_nav.find('.menu_slide').remove();
            $cloned_nav.find('.et_pb_menu__logo-slot').remove();
            $cloned_nav.find('li').first().addClass('et_first_mobile_item');
            $cloned_nav.find('a').on('click', function () {
              $(this).parents('.et_mobile_menu').siblings('.mobile_menu_bar').trigger('click');
            });

            if ('no_click_event' !== menu_click_event) {
              if (_utils.isBuilder) {
                $this_menu.off('click');
              }

              var $this_menu_section = $this_menu.closest('.et_pb_section');
              var $this_menu_row = $this_menu.closest('.et_pb_row');
              var $this_menu_sec_has_radius = $this_menu_section.css('border-radius') !== '0px';
              var $this_menu_row_has_radius = $this_menu_row.css('border-radius') !== '0px';
              $this_menu.on('click', '.mobile_menu_bar', function () {
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
                    setTimeout(function () {
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
        }; // remove placeholder text before form submission


        window.et_pb_remove_placeholder_text = function ($form) {
          $form.find('input:text, textarea').each(function (index, domEle) {
            var $et_current_input = jQuery(domEle);
            var $et_label = $et_current_input.siblings('label');
            var et_label_value = $et_current_input.siblings('label').text();

            if ($et_label.length && $et_label.is(':hidden')) {
              if ($et_label.text() == $et_current_input.val()) $et_current_input.val('');
            }
          });
        };

        window.et_fix_fullscreen_section = function () {
          var $et_window = isBlockLayoutPreview ? $(_frameHelpers.top_window) : $(window);
          $('section.et_pb_fullscreen').each(function () {
            var $this_section = $(this);
            et_calc_fullscreen_section.bind($this_section);
            $et_window.on('resize', et_calc_fullscreen_section.bind($this_section));
          });
        };

        window.et_bar_counters_init = function ($bar_item) {
          if (!$bar_item.length) {
            return;
          }

          $bar_item.css({
            width: "".concat(parseFloat($bar_item.attr('data-width')), "%")
          });
        };

        window.et_fix_pricing_currency_position = function ($pricing_table) {
          setTimeout(function () {
            var $all_pricing_tables = typeof $pricing_table !== 'undefined' ? $pricing_table : $('.et_pb_pricing_table');

            if (!$all_pricing_tables.length) {
              return;
            }

            $all_pricing_tables.each(function () {
              var $this_table = $(this);
              var $price_container = $this_table.find('.et_pb_et_price');
              var $currency = $price_container.length ? $price_container.find('.et_pb_dollar_sign') : false;
              var $price = $price_container.length ? $price_container.find('.et_pb_sum') : false;

              if (!$currency || !$price) {
                return;
              } // adjust the margin of currency sign to make sure it doesn't overflow the price


              $currency.css({
                marginLeft: "".concat(-$currency.width(), "px")
              });
            });
          }, 1);
        };

        window.et_pb_set_responsive_grid = function ($grid_items_container, single_item_selector) {
          setTimeout(function () {
            var container_width = $grid_items_container.innerWidth();
            var $grid_items = $grid_items_container.find(single_item_selector);
            var item_width = $grid_items.outerWidth(true);
            var last_item_margin = item_width - $grid_items.outerWidth();
            var columns_count = Math.round((container_width + last_item_margin) / item_width);
            var counter = 1;
            var first_in_row = 1;
            var $first_in_last_row = $();
            $grid_items.removeClass('last_in_row first_in_row on_last_row');
            $grid_items.filter(':visible').each(function () {
              var $this_element = $(this);

              if (!$this_element.hasClass('inactive')) {
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
              var $module = $first_in_last_row.parents('.et_pb_module'); // set margin bottom to 0 if the gallery is the last module on the column

              if ($module.is(':last-child')) {
                var column = $first_in_last_row.parents('.et_pb_column')[0];
                $(column).find('.et_pb_grid_item').removeClass('on_last_row'); // keep gutter margin if gallery has pagination

                var pagination = $module.find('.et_pb_gallery_pagination');

                if (0 === pagination.length) {
                  pagination = $module.find('.et_pb_portofolio_pagination');
                }

                if (0 === pagination.length || pagination.length > 0 && !pagination.is(':visible')) {
                  if (columns_count > 1) {
                    $first_in_last_row.addClass('on_last_row');
                  }

                  $first_in_last_row.nextAll().addClass('on_last_row');
                }
              }
            }
          }, 1); // need this timeout to make sure all the css applied before calculating sizes
        };

        window.et_pb_set_tabs_height = function ($tabs_module) {
          if ('undefined' === typeof $tabs_module) {
            $tabs_module = $('.et_pb_tabs');
          }

          if (!$tabs_module.length) {
            return;
          }

          $tabs_module.each(function () {
            var $tab_controls = $(this).find('.et_pb_tabs_controls');
            var $all_tabs = $tab_controls.find('li');
            var max_height = 0;
            var small_columns = '.et_pb_column_1_3, .et_pb_column_1_4, .et_pb_column_3_8';
            var in_small_column = $(this).parents(small_columns).length > 0;
            var on_small_screen = parseFloat($(window).width()) < 768;
            var vertically_stacked = in_small_column || on_small_screen;

            if (vertically_stacked) {
              $(this).addClass('et_pb_tabs_vertically_stacked');
            } // determine the height of the tallest tab


            if ($all_tabs.length) {
              // remove the height attribute if it was added to calculate the height correctly
              $tab_controls.children('li').removeAttr('style');
              $all_tabs.each(function () {
                var tab_height = $(this).outerHeight();

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
              $tab_controls.children('li').css('height', "".concat(max_height, "px"));
            }
          });
        };

        window.et_pb_box_shadow_apply_overlay = function (el) {
          var pointerEventsSupport = document.body.style.pointerEvents !== undefined // For some reasons IE 10 tells that supports pointer-events, but it doesn't
          && (document.documentMode === undefined || document.documentMode >= 11);

          if (pointerEventsSupport) {
            $(el).each(function () {
              if (!$(this).children('.box-shadow-overlay').length) {
                $(this).addClass('has-box-shadow-overlay').prepend('<div class="box-shadow-overlay"></div>');
              }
            });
          } else {
            $(el).addClass('.et-box-shadow-no-overlay');
          }
        };

        window.et_pb_init_nav_menu = function ($et_menus) {
          $et_menus.each(function () {
            var $et_menu = $(this); // don't attach event handlers several times to the same menu

            if ($et_menu.data('et-is-menu-ready')) {
              return;
            }

            $et_menu.find('li').on('mouseenter', function () {
              window.et_pb_toggle_nav_menu($(this), 'open');
            }).on('mouseleave', function () {
              window.et_pb_toggle_nav_menu($(this), 'close');
            }); // close all opened menus on touch outside the menu

            $('body').on('touchend', function (event) {
              if ($(event.target).closest('ul.nav, ul.menu').length < 1 && $('.et-hover').length > 0) {
                window.et_pb_toggle_nav_menu($('.et-hover'), 'close');
              }
            }); // Dropdown menu adjustment for touch screen

            $et_menu.find('li.menu-item-has-children').on('touchend', function (event) {
              var $closest_li = $(event.target).closest('.menu-item'); // no need special processing if parent li doesn't have hidden child elements

              if (!$closest_li.hasClass('menu-item-has-children')) {
                return;
              }

              var $this_el = $(this);
              var is_mega_menu_opened = $closest_li.closest('.mega-menu-parent.et-touch-hover').length > 0; // open submenu on 1st tap
              // open link on second tap

              if ($this_el.hasClass('et-touch-hover') || is_mega_menu_opened) {
                var href = $this_el.find('>a').attr('href');

                if (typeof href !== 'undefined') {
                  // if parent link is not empty then open the link
                  window.location = $this_el.find('>a').attr('href');
                }
              } else {
                var $opened_menu = $(event.target);
                var $already_opened_menus = $opened_menu.closest('.menu-item').siblings('.et-touch-hover'); // close the menu before opening new one

                if ($opened_menu.closest('.et-touch-hover').length < 1) {
                  window.et_pb_toggle_nav_menu($('.et-hover'), 'close', 0);
                }

                $this_el.addClass('et-touch-hover');

                if ($already_opened_menus.length > 0) {
                  var $submenus_in_already_opened = $already_opened_menus.find('.et-touch-hover'); // close already opened submenus to avoid overlaps

                  window.et_pb_toggle_nav_menu($already_opened_menus, 'close');
                  window.et_pb_toggle_nav_menu($submenus_in_already_opened, 'close');
                } // open new submenu


                window.et_pb_toggle_nav_menu($this_el, 'open');
              }

              event.preventDefault();
              event.stopPropagation();
            });
            $et_menu.find('li.mega-menu').each(function () {
              var $li_mega_menu = $(this);
              var $li_mega_menu_item = $li_mega_menu.children('ul').children('li');
              var li_mega_menu_item_count = $li_mega_menu_item.length;

              if (li_mega_menu_item_count < 4) {
                $li_mega_menu.addClass("mega-menu-parent mega-menu-parent-".concat(li_mega_menu_item_count));
              }
            }); // mark the menu as ready

            $et_menu.data('et-is-menu-ready', 'ready');
          });
        };

        window.et_pb_toggle_nav_menu = function ($element, state, delay) {
          if ('open' === state) {
            if (!$element.closest('li.mega-menu').length || $element.hasClass('mega-menu')) {
              $element.addClass('et-show-dropdown');
              $element.removeClass('et-hover').addClass('et-hover');
            }
          } else {
            var closeDelay = typeof delay !== 'undefined' ? delay : 200;
            $element.removeClass('et-show-dropdown');
            $element.removeClass('et-touch-hover');
            setTimeout(function () {
              if (!$element.hasClass('et-show-dropdown')) {
                $element.removeClass('et-hover');
              }
            }, closeDelay);
          }
        };

        window.et_pb_apply_sticky_image_effect = function ($sticky_image_el) {
          var $row = $sticky_image_el.closest('.et_pb_row');
          var $section = $row.closest('.et_pb_section');
          var $column = $sticky_image_el.closest('.et_pb_column');
          var sticky_class = 'et_pb_section_sticky';
          var sticky_mobile_class = 'et_pb_section_sticky_mobile';
          var $lastRowInSection = $section.children('.et_pb_row').last();
          var $lastColumnInRow = $row.children('.et_pb_column').last();
          var $lastModuleInColumn = $column.children('.et_pb_module').last(); // If it is not in the last row, continue

          if (!$row.is($lastRowInSection)) {
            return true;
          }

          $lastRowInSection.addClass('et-last-child'); // Make sure sticky image is the last element in the column

          if (!$sticky_image_el.is($lastModuleInColumn)) {
            return true;
          } // If it is in the last row, find the parent section and attach new class to it


          if (!$section.hasClass(sticky_class)) {
            $section.addClass(sticky_class);
          }

          $column.addClass('et_pb_row_sticky');

          if (!$section.hasClass(sticky_mobile_class) && $column.is($lastColumnInRow)) {
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


        window.et_pb_menu_inject_inline_centered_logo = function (menu) {
          var $listItems = $(menu).find('nav > ul > li');
          var index = Math.round($listItems.length / 2);
          var li = window.et_pb_menu_inject_item(menu, index, true);

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


        window.et_pb_menu_inject_item = function (menu, index, fromTheBeginning) {
          fromTheBeginning = undefined === fromTheBeginning ? true : fromTheBeginning;
          index = Math.max(index, 0);
          var $list = $(menu).find('nav > ul').first();

          if (0 === $list.length) {
            return null;
          }

          var $listItems = $list.find('> li');
          var $li = $('<li></li>');

          if (0 === $listItems.length) {
            $list.append($li);
          } else {
            var action = fromTheBeginning ? 'before' : 'after';
            var $sibling = fromTheBeginning ? $listItems.eq(index) : $listItems.eq($listItems.length - 1 - index);

            if (0 === $sibling.length) {
              action = fromTheBeginning ? 'after' : 'before';
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


        window.et_pb_reposition_menu_module_dropdowns = et_pb_debounce(function (menus) {
          var $menus = menus ? $(menus) : $('.et_pb_menu, .et_pb_fullwidth_menu');
          $menus.each(function () {
            var $row = $(this).find('.et_pb_row').first();

            if (0 === $row.length) {
              return true; // = continue.
            }

            var offset = $row.offset().top;
            var moduleClass = $(this).attr('class').replace(/^.*?(et_pb(?:_fullwidth)?_menu_\d+[^\s]*).*$/i, '$1');
            var isUpwards = $(this).find('.et_pb_menu__menu ul').first().hasClass('upwards');
            var selector = '.et_pb_menu__menu > nav > ul > li.mega-menu.menu-item-has-children';
            var css = '';
            $(this).find(selector).each(function () {
              var $li = $(this);
              var liId = $li.attr('class').replace(/^.*?(menu-item-\d+).*$/i, '$1');
              var selector = ".".concat(moduleClass, " li.").concat(liId, " > .sub-menu");

              if (isUpwards) {
                // Offset by 1px to ensure smooth mouse hover.
                var linkOffset = Math.floor(offset + $row.outerHeight() - $li.offset().top) - 1;
                css += "".concat(selector, "{ bottom: ").concat(linkOffset.toString(), "px !important; }");
              } else {
                // Offset by 1px to ensure smooth mouse hover.
                var linkOffset = Math.floor($li.offset().top + $li.outerHeight() - offset) - 1;
                css += "".concat(selector, "{ top: ").concat(linkOffset.toString(), "px !important; }");
              }
            });
            var $style = $("style.et-menu-style-".concat(moduleClass)).first();

            if (0 === $style.length) {
              $style = $('<style></style>');
              $style.addClass('et-menu-style');
              $style.addClass("et-menu-style-".concat(moduleClass));
              $style.appendTo($('head'));
            }

            var oldCss = $style.html();

            if (css !== oldCss) {
              $style.html(css);
            }
          });
        }, 200);
      })(jQuery);
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! jquery */
    "jquery"));
    /***/
  },

  /***/
  "../scripts/utils/sticky.js":
  /*!**********************************!*\
    !*** ../scripts/utils/sticky.js ***!
    \**********************************/

  /*! no static exports found */

  /***/
  function scriptsUtilsStickyJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.trimTransitionValue = exports.isTargetStickyState = exports.getStickyStyles = exports.getLimitSelector = exports.getLimit = exports.getClosestStickyModuleOffsetTop = exports.filterInvalidModules = void 0;

    var _filter = _interopRequireDefault(__webpack_require__(
    /*! lodash/filter */
    "./node_modules/lodash/filter.js"));

    var _forEach = _interopRequireDefault(__webpack_require__(
    /*! lodash/forEach */
    "./node_modules/lodash/forEach.js"));

    var _get = _interopRequireDefault(__webpack_require__(
    /*! lodash/get */
    "./node_modules/lodash/get.js"));

    var _head = _interopRequireDefault(__webpack_require__(
    /*! lodash/head */
    "./node_modules/lodash/head.js"));

    var _includes = _interopRequireDefault(__webpack_require__(
    /*! lodash/includes */
    "./node_modules/lodash/includes.js"));

    var _isEmpty = _interopRequireDefault(__webpack_require__(
    /*! lodash/isEmpty */
    "./node_modules/lodash/isEmpty.js"));

    var _isString = _interopRequireDefault(__webpack_require__(
    /*! lodash/isString */
    "./node_modules/lodash/isString.js"));

    var _jquery = _interopRequireDefault(__webpack_require__(
    /*! jquery */
    "jquery"));

    var _utils = __webpack_require__(
    /*! ./utils */
    "../scripts/utils/utils.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }
    /**
     * Get top / bottom limit attributes.
     *
     * @since 4.6.0
     * @param {object} $selector
     * @param limit
     * @param {string}
     * @returns {object}
     * @returns {string} Object.limit.
     * @returns {number} Object.height.
     * @returns {number} Object.width.
     * @return {object} object.offsets
     * @return {number} object.offsets.top
     * @return {number} object.offsets.right
     * @return {number} object.offsets.bottom
     * @return {number} object.offsets.left
     */


    var getLimit = function getLimit($selector, limit) {
      // @todo update valid limits based on selector
      var validLimits = ['body', 'section', 'row', 'column'];

      if (!(0, _includes.default)(validLimits, limit)) {
        return false;
      } // Limit selector


      var $limitSelector = getLimitSelector($selector, limit);

      if (!$limitSelector) {
        return false;
      }

      var height = $limitSelector.outerHeight();
      var width = $limitSelector.outerWidth();
      return {
        limit: limit,
        height: height,
        width: width,
        offsets: (0, _utils.getOffsets)($limitSelector, width, height)
      };
    };
    /**
     * Get top / bottom limit selector based on given name.
     *
     * @since 4.6.0
     *
     * @param {object} $selector
     * @param {string} limit
     *
     * @returns {bool|object}
     */


    exports.getLimit = getLimit;

    var getLimitSelector = function getLimitSelector($selector, limit) {
      var parentSelector = false;

      switch (limit) {
        case 'body':
          parentSelector = '.et_builder_inner_content';
          break;

        case 'section':
          parentSelector = '.et_pb_section';
          break;

        case 'row':
          parentSelector = '.et_pb_row';
          break;

        case 'column':
          parentSelector = '.et_pb_column';
          break;

        default:
          break;
      }

      return parentSelector ? $selector.closest(parentSelector) : false;
    };
    /**
     * Filter invalid sticky modules
     * 1. Sticky module inside another sticky module.
     *
     * @param {object} modules
     * @param {object} currentModules
     *
     * @since 4.6.0
     */


    exports.getLimitSelector = getLimitSelector;

    var filterInvalidModules = function filterInvalidModules(modules) {
      var currentModules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var filteredModules = {};
      (0, _forEach.default)(modules, function (module, key) {
        // If current sticky module is inside another sticky module, ignore current module
        if ((0, _jquery.default)(module.selector).parents('.et_pb_sticky_module').length > 0) {
          return;
        } // Repopulate the module list


        if (!(0, _isEmpty.default)(currentModules) && currentModules[key]) {
          // Keep props that isn't available on incoming modules intact
          filteredModules[key] = _objectSpread(_objectSpread({}, currentModules[key]), module);
        } else {
          filteredModules[key] = module;
        }
      });
      return filteredModules;
    };
    /**
     * Get sticky style of given module by cloning, adding sticky state classname, appending DOM,
     * retrieving value, then immediately the cloned DOM. This is needed for property that is most
     * likely to be affected by transition if the sticky value is retrieved on the fly, thus it needs
     * to be retrieved ahead its time by this approach.
     *
     * @since 4.6.0
     *
     * @param {string} id
     * @param {object} $module
     * @param {object} $placeholder
     *
     * @returns {object}
     */


    exports.filterInvalidModules = filterInvalidModules;

    var getStickyStyles = function getStickyStyles(id, $module, $placeholder) {
      // Sticky state classname to be added; these will make cloned module to have fixed position and
      // make sticky style take effect
      var stickyStyleClassname = 'et_pb_sticky et_pb_sticky_style_dom'; // Cloned the module add sticky state classname; set the opacity to 0 and remove the transition
      // so the dimension can be immediately retrieved

      var $stickyStyleDom = $module.clone().addClass(stickyStyleClassname).attr({
        'data-sticky-style-dom-id': id,
        // Remove inline styles so on-page styles works. Especially needed if module is in sticky state
        style: ''
      }).css({
        opacity: 0,
        transition: 'none',
        animation: 'none'
      }); // Cloned module might contain image. However the image might take more than a milisecond to be
      // loaded on the cloned module after the module is appended to the layout EVEN IF the image on
      // the $module has been loaded. This might load to inaccurate sticky style calculation. To avoid
      // it, recreate the image by getting actual width and height then recreate the image using SVG

      $stickyStyleDom.find('img').each(function (index) {
        var $img = (0, _jquery.default)(this);
        var $measuredImg = $module.find('img').eq(index);
        var measuredWidth = (0, _get.default)($measuredImg, [0, 'naturalWidth'], $module.find('img').eq(index).outerWidth());
        var measuredHeight = (0, _get.default)($measuredImg, [0, 'naturalHeight'], $module.find('img').eq(index).outerHeight());
        $img.attr({
          // Remove scrse to force DOM to use src
          scrset: '',
          // Recreate svg to use image's actual width so the image reacts appropriately when sticky
          // style modifies image dimension (eg image has 100% and padding in sticky style is larger;
          // this will resulting in image being smaller because the wrapper dimension is smaller)
          src: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(measuredWidth, "\" height=\"").concat(measuredHeight, "\"><rect width=\"").concat(measuredWidth, "\" height=\"").concat(measuredHeight, "\" /></svg>")
        });
      }); // Append the cloned DOM

      $module.after($stickyStyleDom); // Get inline margin style value that is substraction of sticky style - style due to position
      // relative to fixed change

      var getMarginStyle = function getMarginStyle(corner) {
        var marginPropName = "margin".concat(corner);
        var $normalModule = $module.hasClass('et_pb_sticky') ? $placeholder : $module;
        return parseFloat($stickyStyleDom.css(marginPropName)) - parseFloat($normalModule.css(marginPropName));
      }; // Measure sticky style DOM properties


      var styles = {
        height: $stickyStyleDom.outerHeight(),
        width: $stickyStyleDom.outerWidth(),
        marginRight: getMarginStyle('Right'),
        marginLeft: getMarginStyle('Left'),
        padding: $stickyStyleDom.css('padding')
      }; // Immediately remove the cloned DOM

      (0, _jquery.default)(".et_pb_sticky_style_dom[data-sticky-style-dom-id=\"".concat(id, "\"]")).remove();
      return styles;
    };
    /**
     * Remove given property's transition from transition property's value. To make some properties
     * (eg. Width, top, left) transition smoothly when entering / leaving sticky state, its property
     * and transition need to be removed then re-added 50ms later. This is mostly happened because the
     * module positioning changed from relative to fixed when entering/leaving sticky state.
     *
     * @since 4.6.0
     *
     * @param {string} transitionValue
     * @param {Array} trimmedProperties
     *
     * @returns {string}
     */


    exports.getStickyStyles = getStickyStyles;

    var trimTransitionValue = function trimTransitionValue(transitionValue, trimmedProperties) {
      // Make sure that transitionValue is string. Otherwise split will throw error
      if (!(0, _isString.default)(transitionValue)) {
        transitionValue = '';
      }

      var transitions = transitionValue.split(', ');
      var trimmedValue = (0, _filter.default)(transitions, function (transition) {
        return !(0, _includes.default)(trimmedProperties, (0, _head.default)(transition.split(' ')));
      });
      return (0, _isEmpty.default)(trimmedValue) ? 'none' : trimmedValue.join(', ');
    };
    /**
     * Calculate automatic offset that should be given based on sum of heights of all sticky modules
     * that are currently in sticky state when window reaches $target's offset.
     *
     * @since 4.6.0
     *
     * @param {object} $target
     *
     * @returns {number}
     */


    exports.trimTransitionValue = trimTransitionValue;

    var getClosestStickyModuleOffsetTop = function getClosestStickyModuleOffsetTop($target) {
      var offset = $target.offset();
      offset.right = offset.left + $target.outerWidth();
      var closestStickyElement = null;
      var closestStickyOffsetTop = 0; // Get all sticky module data from store. NOTE: this util might be used on various output build
      // so it needs to get sticky store value via global object instead of importing it

      var stickyModules = (0, _get.default)(window.ET_FE, 'stores.sticky.modules', {}); // Loop sticky module data to get the closest sticky module to given y offset. Sticky module
      // already has map of valid modules it needs to consider as automatic offset due to
      // adjacent-column situation.
      // @see https://github.com/elegantthemes/Divi/issues/19432

      (0, _forEach.default)(stickyModules, function (stickyModule) {
        // Ignore sticky module if it is stuck to bottom
        if (!(0, _includes.default)(['top_bottom', 'top'], stickyModule.position)) {
          return;
        } // Ignore if $target is sticky module (that sticks to top; stuck to bottom check above has
        // made sure of it) - otherwise the auto-generate offset will subtract the element's offset
        // and causing the scroll never reaches $target location.
        // @see https://github.com/elegantthemes/Divi/issues/23240


        if ($target.is((0, _get.default)(stickyModule, 'selector'))) {
          return;
        } // Ignore if sticky module's right edge doesn't collide with target's left edge


        if ((0, _get.default)(stickyModule, 'offsets.right', 0) < offset.left) {
          return;
        } // Ignore if sticky module's left edge doesn't collide with target's right edge


        if ((0, _get.default)(stickyModule, 'offsets.left', 0) > offset.right) {
          return;
        } // Ignore sticky module if it is located below given y offset


        if ((0, _get.default)(stickyModule, 'offsets.top', 0) > offset.top) {
          return;
        } // Ignore sticky module if its bottom limit is higher than given y offset


        var bottomLimitBottom = (0, _get.default)(stickyModule, 'bottomLimitSettings.offsets.bottom');

        if (bottomLimitBottom && bottomLimitBottom < offset.top) {
          return;
        }

        closestStickyElement = stickyModule;
      }); // Once closest sticky module to given y offset has been found, loop its topOffsetModules, get
      // each module's heightSticky and return the sum of their heights

      if ((0, _get.default)(closestStickyElement, 'topOffsetModules', false)) {
        (0, _forEach.default)((0, _get.default)(closestStickyElement, 'topOffsetModules', []), function (stickyId) {
          // Get sticky module's height on sticky state; fallback to height just to be safe
          var stickyModuleHeight = (0, _get.default)(stickyModules, [stickyId, 'heightSticky'], (0, _get.default)(stickyModules, [stickyId, 'height'], 0)); // Sum up top offset module's height

          closestStickyOffsetTop += stickyModuleHeight;
        }); // Get closest-to-y-offset's sticky module's height on sticky state;

        var closestStickyElementHeight = (0, _get.default)(stickyModules, [closestStickyElement.id, 'heightSticky'], (0, _get.default)(stickyModules, [closestStickyElement.id, 'height'], 0)); // Sum up top offset module's height

        closestStickyOffsetTop += closestStickyElementHeight;
      }

      return closestStickyOffsetTop;
    };
    /**
     * Determine if the target is in sticky state.
     *
     * @since 4.9.5
     *
     * @param {object} $target
     *
     * @returns {bool}
     */


    exports.getClosestStickyModuleOffsetTop = getClosestStickyModuleOffsetTop;

    var isTargetStickyState = function isTargetStickyState($target) {
      var stickyModules = (0, _get.default)(window.ET_FE, 'stores.sticky.modules', {});
      var isStickyState = false;
      (0, _forEach.default)(stickyModules, function (stickyModule) {
        var isTarget = $target.is((0, _get.default)(stickyModule, 'selector'));
        var isSticky = stickyModule.isSticky,
            isPaused = stickyModule.isPaused; // If the target is in sticky state and not paused, set isStickyState to true and exit iteration.
        // Elements can have a sticky limit (ex: section) in which case they can be sticky but paused.

        if (isTarget && isSticky && !isPaused) {
          isStickyState = true;
          return false; // Exit iteration.
        }
      });
      return isStickyState;
    };

    exports.isTargetStickyState = isTargetStickyState;
    /***/
  },

  /***/
  "../scripts/utils/utils.js":
  /*!*********************************!*\
    !*** ../scripts/utils/utils.js ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function scriptsUtilsUtilsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setImportantInlineValue = exports.registerFrontendComponent = exports.maybeIncreaseEmitterMaxListeners = exports.maybeDecreaseEmitterMaxListeners = exports.isVB = exports.isTB = exports.isLBP = exports.isLBB = exports.isFE = exports.isExtraTheme = exports.isDiviTheme = exports.isBuilderType = exports.isBuilder = exports.isBlockEditor = exports.isBFB = exports.is = exports.getOffsets = void 0;

    var _includes = _interopRequireDefault(__webpack_require__(
    /*! lodash/includes */
    "./node_modules/lodash/includes.js"));

    var _get = _interopRequireDefault(__webpack_require__(
    /*! lodash/get */
    "./node_modules/lodash/get.js"));

    var _jquery = _interopRequireDefault(__webpack_require__(
    /*! jquery */
    "jquery"));

    var _frameHelpers = __webpack_require__(
    /*! @core/admin/js/frame-helpers */
    "../../../core/admin/js/frame-helpers.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }
    /**
     * Check current page's builder Type.
     *
     * @since 4.6.0
     *
     * @param {string} builderType Fe|vb|bfb|tb|lbb|lbp.
     *
     * @returns {bool}
     */


    var isBuilderType = function isBuilderType(builderType) {
      return builderType === window.et_builder_utils_params.builderType;
    };
    /**
     * Return condition value.
     *
     * @since 4.6.0
     *
     * @param {string} conditionName
     *
     * @returns {bool}
     */


    exports.isBuilderType = isBuilderType;

    var is = function is(conditionName) {
      return window.et_builder_utils_params.condition[conditionName];
    };
    /**
     * Is current page Frontend.
     *
     * @since 4.6.0
     *
     * @type {bool}
     */


    exports.is = is;
    var isFE = isBuilderType('fe');
    /**
     * Is current page Visual Builder.
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isFE = isFE;
    var isVB = isBuilderType('vb');
    /**
     * Is current page BFB / New Builder Experience.
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isVB = isVB;
    var isBFB = isBuilderType('bfb');
    /**
     * Is current page Theme Builder.
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isBFB = isBFB;
    var isTB = isBuilderType('tb');
    /**
     * Is current page Layout Block Builder.
     *
     * @type {bool}
     */

    exports.isTB = isTB;
    var isLBB = isBuilderType('lbb');
    /**
     * Is current page uses Divi Theme.
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isLBB = isLBB;
    var isDiviTheme = is('diviTheme');
    /**
     * Is current page uses Extra Theme.
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isDiviTheme = isDiviTheme;
    var isExtraTheme = is('extraTheme');
    /**
     * Is current page Layout Block Preview.
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isExtraTheme = isExtraTheme;
    var isLBP = isBuilderType('lbp');
    /**
     * Check if current window is block editor window (gutenberg editing page).
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isLBP = isLBP;
    var isBlockEditor = 0 < (0, _jquery.default)(_frameHelpers.top_window.document).find('.edit-post-layout__content').length;
    /**
     * Check if current window is builder window (VB, BFB, TB, LBB).
     *
     * @since 4.6.0
     *
     * @type {bool}
     */

    exports.isBlockEditor = isBlockEditor;
    var isBuilder = (0, _includes.default)(['vb', 'bfb', 'tb', 'lbb'], window.et_builder_utils_params.builderType);
    /**
     * Get offsets value of all sides.
     *
     * @since 4.6.0
     *
     * @param {object} $selector JQuery selector instance.
     * @param {number} height
     * @param {number} width
     *
     * @returns {object}
     */

    exports.isBuilder = isBuilder;

    var getOffsets = function getOffsets($selector) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0; // Return previously saved offset if sticky tab is active; retrieving actual offset contain risk
      // of incorrect offsets if sticky horizontal / vertical offset of relative position is modified.

      var isStickyTabActive = isBuilder && $selector.hasClass('et_pb_sticky') && 'fixed' !== $selector.css('position');
      var cachedOffsets = $selector.data('et-offsets');
      var cachedDevice = $selector.data('et-offsets-device');
      var currentDevice = (0, _get.default)(window.ET_FE, 'stores.window.breakpoint', ''); // Only return cachedOffsets if sticky tab is active and cachedOffsets is not undefined and
      // cachedDevice equal to currentDevice.

      if (isStickyTabActive && cachedOffsets !== undefined && cachedDevice === currentDevice) {
        return cachedOffsets;
      } // Get top & left offsets


      var offsets = $selector.offset(); // If no offsets found, return empty object

      if ('undefined' === typeof offsets) {
        return {};
      } // FE sets the flag for sticky module which uses transform as classname on module wrapper while
      // VB, BFB, TB, and LB sets the flag on CSS output's <style> element because it can't modify
      // its parent. This compromises avoids the needs to extract transform rendering logic


      var hasTransform = isBuilder ? $selector.children('.et-fb-custom-css-output[data-sticky-has-transform="on"]').length > 0 : $selector.hasClass('et_pb_sticky--has-transform');
      var top = 'undefined' === typeof offsets.top ? 0 : offsets.top;
      var left = 'undefined' === typeof offsets.left ? 0 : offsets.left; // If module is sticky module that uses transform, its offset calculation needs to be adjusted
      // because transform tends to modify the positioning of the module

      if (hasTransform) {
        // Calculate offset (relative to selector's parent) AFTER it is affected by transform
        // NOTE: Can't use jQuery's position() because it considers margin-left `auto` which causes issue
        // on row thus this manually calculate the difference between element and its parent's offset
        // @see https://github.com/jquery/jquery/blob/1.12-stable/src/offset.js#L149-L155
        var parentOffsets = $selector.parent().offset();
        var transformedPosition = {
          top: offsets.top - parentOffsets.top,
          left: offsets.left - parentOffsets.left
        }; // Calculate offset (relative to selector's parent) BEFORE it is affected by transform

        var preTransformedPosition = {
          top: $selector[0].offsetTop,
          left: $selector[0].offsetLeft
        }; // Update offset's top value

        top += preTransformedPosition.top - transformedPosition.top;
        offsets.top = top; // Update offset's left value

        left += preTransformedPosition.left - transformedPosition.left;
        offsets.left = left;
      } // Manually calculate right & bottom offsets


      offsets.right = left + width;
      offsets.bottom = top + height; // Save copy of the offset on element's .data() in case of scenario where retrieving actual
      // offset value will lead to incorrect offset value (eg. sticky tab active with position offset)

      $selector.data('et-offsets', offsets); // Add current device to cache

      if ('' !== currentDevice) {
        $selector.data('et-offsets-device', offsets);
      }

      return offsets;
    };
    /**
     * Increase EventEmitter's max listeners if lister count is about to surpass the max listeners limit
     * IMPORTANT: Need to be placed BEFORE `.on()`.
     *
     * @since 4.6.0
     * @param {EventEmitter} emitter
     * @param eventName
     * @param {string} EventName
     */


    exports.getOffsets = getOffsets;

    var maybeIncreaseEmitterMaxListeners = function maybeIncreaseEmitterMaxListeners(emitter, eventName) {
      var currentCount = emitter.listenerCount(eventName);
      var maxListeners = emitter.getMaxListeners();

      if (currentCount === maxListeners) {
        emitter.setMaxListeners(maxListeners + 1);
      }
    };
    /**
     * Decrease EventEmitter's max listeners if listener count is less than max listener limit and above
     * 10 (default max listener limit). If listener count is less than 10, max listener limit will
     * remain at 10
     * IMPORTANT: Need to be placed AFTER `.removeListener()`.
     *
     * @since 4.6.0
     *
     * @param {EventEmitter} emitter
     * @param {string} eventName
     */


    exports.maybeIncreaseEmitterMaxListeners = maybeIncreaseEmitterMaxListeners;

    var maybeDecreaseEmitterMaxListeners = function maybeDecreaseEmitterMaxListeners(emitter, eventName) {
      var currentCount = emitter.listenerCount(eventName);
      var maxListeners = emitter.getMaxListeners();

      if (maxListeners > 10) {
        emitter.setMaxListeners(currentCount);
      }
    };
    /**
     * Expose frontend (FE) component via global object so it can be accessed and reused externally
     * Note: window.ET_Builder is for builder app's component; window.ET_FE is for frontend component.
     *
     * @since 4.6.0
     *
     * @param {string} type
     * @param {string} name
     * @param {mixed} component
     */


    exports.maybeDecreaseEmitterMaxListeners = maybeDecreaseEmitterMaxListeners;

    var registerFrontendComponent = function registerFrontendComponent(type, name, component) {
      // Make sure that ET_FE is available
      if ('undefined' === typeof window.ET_FE) {
        window.ET_FE = {};
      }

      if ('object' !== _typeof(window.ET_FE[type])) {
        window.ET_FE[type] = {};
      }

      window.ET_FE[type][name] = component;
    };
    /**
     * Set inline style with !important tag. JQuery's .css() can't set value with `!important` tag so
     * here it is.
     *
     * @since 4.6.2
     *
     * @param {object} $element
     * @param {string} cssProp
     * @param {string} value
     */


    exports.registerFrontendComponent = registerFrontendComponent;

    var setImportantInlineValue = function setImportantInlineValue($element, cssProp, value) {
      // Remove prop from current inline style in case the prop is already exist
      $element.css(cssProp, ''); // Get current inline style

      var inlineStyle = $element.attr('style'); // Re-insert inline style + property with important tag

      $element.attr('style', "".concat(inlineStyle, " ").concat(cssProp, ": ").concat(value, " !important;"));
    };

    exports.setImportantInlineValue = setImportantInlineValue;
    /***/
  },

  /***/
  "./node_modules/lodash/_DataView.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_DataView.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_DataViewJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var DataView = getNative(root, 'DataView');
    module.exports = DataView;
    /***/
  },

  /***/
  "./node_modules/lodash/_Hash.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/_Hash.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_HashJs(module, exports, __webpack_require__) {
    var hashClear = __webpack_require__(
    /*! ./_hashClear */
    "./node_modules/lodash/_hashClear.js"),
        hashDelete = __webpack_require__(
    /*! ./_hashDelete */
    "./node_modules/lodash/_hashDelete.js"),
        hashGet = __webpack_require__(
    /*! ./_hashGet */
    "./node_modules/lodash/_hashGet.js"),
        hashHas = __webpack_require__(
    /*! ./_hashHas */
    "./node_modules/lodash/_hashHas.js"),
        hashSet = __webpack_require__(
    /*! ./_hashSet */
    "./node_modules/lodash/_hashSet.js");
    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    } // Add methods to `Hash`.


    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
    /***/
  },

  /***/
  "./node_modules/lodash/_ListCache.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_ListCache.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_ListCacheJs(module, exports, __webpack_require__) {
    var listCacheClear = __webpack_require__(
    /*! ./_listCacheClear */
    "./node_modules/lodash/_listCacheClear.js"),
        listCacheDelete = __webpack_require__(
    /*! ./_listCacheDelete */
    "./node_modules/lodash/_listCacheDelete.js"),
        listCacheGet = __webpack_require__(
    /*! ./_listCacheGet */
    "./node_modules/lodash/_listCacheGet.js"),
        listCacheHas = __webpack_require__(
    /*! ./_listCacheHas */
    "./node_modules/lodash/_listCacheHas.js"),
        listCacheSet = __webpack_require__(
    /*! ./_listCacheSet */
    "./node_modules/lodash/_listCacheSet.js");
    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    } // Add methods to `ListCache`.


    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
    /***/
  },

  /***/
  "./node_modules/lodash/_Map.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/_Map.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_MapJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var Map = getNative(root, 'Map');
    module.exports = Map;
    /***/
  },

  /***/
  "./node_modules/lodash/_MapCache.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_MapCache.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_MapCacheJs(module, exports, __webpack_require__) {
    var mapCacheClear = __webpack_require__(
    /*! ./_mapCacheClear */
    "./node_modules/lodash/_mapCacheClear.js"),
        mapCacheDelete = __webpack_require__(
    /*! ./_mapCacheDelete */
    "./node_modules/lodash/_mapCacheDelete.js"),
        mapCacheGet = __webpack_require__(
    /*! ./_mapCacheGet */
    "./node_modules/lodash/_mapCacheGet.js"),
        mapCacheHas = __webpack_require__(
    /*! ./_mapCacheHas */
    "./node_modules/lodash/_mapCacheHas.js"),
        mapCacheSet = __webpack_require__(
    /*! ./_mapCacheSet */
    "./node_modules/lodash/_mapCacheSet.js");
    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    } // Add methods to `MapCache`.


    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
    /***/
  },

  /***/
  "./node_modules/lodash/_Promise.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_Promise.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_PromiseJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var Promise = getNative(root, 'Promise');
    module.exports = Promise;
    /***/
  },

  /***/
  "./node_modules/lodash/_Set.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/_Set.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_SetJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var Set = getNative(root, 'Set');
    module.exports = Set;
    /***/
  },

  /***/
  "./node_modules/lodash/_SetCache.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_SetCache.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_SetCacheJs(module, exports, __webpack_require__) {
    var MapCache = __webpack_require__(
    /*! ./_MapCache */
    "./node_modules/lodash/_MapCache.js"),
        setCacheAdd = __webpack_require__(
    /*! ./_setCacheAdd */
    "./node_modules/lodash/_setCacheAdd.js"),
        setCacheHas = __webpack_require__(
    /*! ./_setCacheHas */
    "./node_modules/lodash/_setCacheHas.js");
    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */


    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();

      while (++index < length) {
        this.add(values[index]);
      }
    } // Add methods to `SetCache`.


    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
    /***/
  },

  /***/
  "./node_modules/lodash/_Stack.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_Stack.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_StackJs(module, exports, __webpack_require__) {
    var ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js"),
        stackClear = __webpack_require__(
    /*! ./_stackClear */
    "./node_modules/lodash/_stackClear.js"),
        stackDelete = __webpack_require__(
    /*! ./_stackDelete */
    "./node_modules/lodash/_stackDelete.js"),
        stackGet = __webpack_require__(
    /*! ./_stackGet */
    "./node_modules/lodash/_stackGet.js"),
        stackHas = __webpack_require__(
    /*! ./_stackHas */
    "./node_modules/lodash/_stackHas.js"),
        stackSet = __webpack_require__(
    /*! ./_stackSet */
    "./node_modules/lodash/_stackSet.js");
    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */


    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    } // Add methods to `Stack`.


    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
    /***/
  },

  /***/
  "./node_modules/lodash/_Symbol.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/_Symbol.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_SymbolJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /** Built-in value references. */


    var _Symbol = root.Symbol;
    module.exports = _Symbol;
    /***/
  },

  /***/
  "./node_modules/lodash/_Uint8Array.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_Uint8Array.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_Uint8ArrayJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /** Built-in value references. */


    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
    /***/
  },

  /***/
  "./node_modules/lodash/_WeakMap.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_WeakMap.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_WeakMapJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js"),
        root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /* Built-in method references that are verified to be native. */


    var WeakMap = getNative(root, 'WeakMap');
    module.exports = WeakMap;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayEach.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_arrayEach.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayEachJs(module, exports) {
    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }

      return array;
    }

    module.exports = arrayEach;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayFilter.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_arrayFilter.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayFilterJs(module, exports) {
    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];

        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }

      return result;
    }

    module.exports = arrayFilter;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayLikeKeys.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayLikeKeysJs(module, exports, __webpack_require__) {
    var baseTimes = __webpack_require__(
    /*! ./_baseTimes */
    "./node_modules/lodash/_baseTimes.js"),
        isArguments = __webpack_require__(
    /*! ./isArguments */
    "./node_modules/lodash/isArguments.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isBuffer = __webpack_require__(
    /*! ./isBuffer */
    "./node_modules/lodash/isBuffer.js"),
        isIndex = __webpack_require__(
    /*! ./_isIndex */
    "./node_modules/lodash/_isIndex.js"),
        isTypedArray = __webpack_require__(
    /*! ./isTypedArray */
    "./node_modules/lodash/isTypedArray.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */

    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }

      return result;
    }

    module.exports = arrayLikeKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayMap.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_arrayMap.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayMapJs(module, exports) {
    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }

      return result;
    }

    module.exports = arrayMap;
    /***/
  },

  /***/
  "./node_modules/lodash/_arrayPush.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_arrayPush.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arrayPushJs(module, exports) {
    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }

      return array;
    }

    module.exports = arrayPush;
    /***/
  },

  /***/
  "./node_modules/lodash/_arraySome.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_arraySome.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_arraySomeJs(module, exports) {
    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }

      return false;
    }

    module.exports = arraySome;
    /***/
  },

  /***/
  "./node_modules/lodash/_assocIndexOf.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_assocIndexOf.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_assocIndexOfJs(module, exports, __webpack_require__) {
    var eq = __webpack_require__(
    /*! ./eq */
    "./node_modules/lodash/eq.js");
    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */


    function assocIndexOf(array, key) {
      var length = array.length;

      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }

      return -1;
    }

    module.exports = assocIndexOf;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseEach.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_baseEach.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseEachJs(module, exports, __webpack_require__) {
    var baseForOwn = __webpack_require__(
    /*! ./_baseForOwn */
    "./node_modules/lodash/_baseForOwn.js"),
        createBaseEach = __webpack_require__(
    /*! ./_createBaseEach */
    "./node_modules/lodash/_createBaseEach.js");
    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */


    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseFilter.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseFilter.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseFilterJs(module, exports, __webpack_require__) {
    var baseEach = __webpack_require__(
    /*! ./_baseEach */
    "./node_modules/lodash/_baseEach.js");
    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */


    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function (value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    module.exports = baseFilter;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseFindIndex.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_baseFindIndex.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseFindIndexJs(module, exports) {
    /**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length,
          index = fromIndex + (fromRight ? 1 : -1);

      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }

      return -1;
    }

    module.exports = baseFindIndex;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseFor.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_baseFor.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseForJs(module, exports, __webpack_require__) {
    var createBaseFor = __webpack_require__(
    /*! ./_createBaseFor */
    "./node_modules/lodash/_createBaseFor.js");
    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */


    var baseFor = createBaseFor();
    module.exports = baseFor;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseForOwn.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseForOwn.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseForOwnJs(module, exports, __webpack_require__) {
    var baseFor = __webpack_require__(
    /*! ./_baseFor */
    "./node_modules/lodash/_baseFor.js"),
        keys = __webpack_require__(
    /*! ./keys */
    "./node_modules/lodash/keys.js");
    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */


    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    module.exports = baseForOwn;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseGet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_baseGet.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseGetJs(module, exports, __webpack_require__) {
    var castPath = __webpack_require__(
    /*! ./_castPath */
    "./node_modules/lodash/_castPath.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */


    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }

      return index && index == length ? object : undefined;
    }

    module.exports = baseGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseGetAllKeys.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseGetAllKeysJs(module, exports, __webpack_require__) {
    var arrayPush = __webpack_require__(
    /*! ./_arrayPush */
    "./node_modules/lodash/_arrayPush.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js");
    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    module.exports = baseGetAllKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseGetTag.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseGetTag.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseGetTagJs(module, exports, __webpack_require__) {
    var _Symbol2 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js"),
        getRawTag = __webpack_require__(
    /*! ./_getRawTag */
    "./node_modules/lodash/_getRawTag.js"),
        objectToString = __webpack_require__(
    /*! ./_objectToString */
    "./node_modules/lodash/_objectToString.js");
    /** `Object#toString` result references. */


    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';
    /** Built-in value references. */

    var symToStringTag = _Symbol2 ? _Symbol2.toStringTag : undefined;
    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }

      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }

    module.exports = baseGetTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseHasIn.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseHasIn.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseHasInJs(module, exports) {
    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    module.exports = baseHasIn;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIndexOf.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseIndexOf.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIndexOfJs(module, exports, __webpack_require__) {
    var baseFindIndex = __webpack_require__(
    /*! ./_baseFindIndex */
    "./node_modules/lodash/_baseFindIndex.js"),
        baseIsNaN = __webpack_require__(
    /*! ./_baseIsNaN */
    "./node_modules/lodash/_baseIsNaN.js"),
        strictIndexOf = __webpack_require__(
    /*! ./_strictIndexOf */
    "./node_modules/lodash/_strictIndexOf.js");
    /**
     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */


    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }

    module.exports = baseIndexOf;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsArguments.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_baseIsArguments.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsArgumentsJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var argsTag = '[object Arguments]';
    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */

    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    module.exports = baseIsArguments;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsEqual.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseIsEqual.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsEqualJs(module, exports, __webpack_require__) {
    var baseIsEqualDeep = __webpack_require__(
    /*! ./_baseIsEqualDeep */
    "./node_modules/lodash/_baseIsEqualDeep.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */


    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }

      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }

      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    module.exports = baseIsEqual;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsEqualDeep.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsEqualDeepJs(module, exports, __webpack_require__) {
    var Stack = __webpack_require__(
    /*! ./_Stack */
    "./node_modules/lodash/_Stack.js"),
        equalArrays = __webpack_require__(
    /*! ./_equalArrays */
    "./node_modules/lodash/_equalArrays.js"),
        equalByTag = __webpack_require__(
    /*! ./_equalByTag */
    "./node_modules/lodash/_equalByTag.js"),
        equalObjects = __webpack_require__(
    /*! ./_equalObjects */
    "./node_modules/lodash/_equalObjects.js"),
        getTag = __webpack_require__(
    /*! ./_getTag */
    "./node_modules/lodash/_getTag.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isBuffer = __webpack_require__(
    /*! ./isBuffer */
    "./node_modules/lodash/isBuffer.js"),
        isTypedArray = __webpack_require__(
    /*! ./isTypedArray */
    "./node_modules/lodash/isTypedArray.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1;
    /** `Object#toString` result references. */

    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        objectTag = '[object Object]';
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }

        objIsArr = true;
        objIsObj = false;
      }

      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }

      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }

      if (!isSameTag) {
        return false;
      }

      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    module.exports = baseIsEqualDeep;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsMatch.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseIsMatch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsMatchJs(module, exports, __webpack_require__) {
    var Stack = __webpack_require__(
    /*! ./_Stack */
    "./node_modules/lodash/_Stack.js"),
        baseIsEqual = __webpack_require__(
    /*! ./_baseIsEqual */
    "./node_modules/lodash/_baseIsEqual.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */

    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }

      object = Object(object);

      while (index--) {
        var data = matchData[index];

        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }

      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();

          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }

          if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }

      return true;
    }

    module.exports = baseIsMatch;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsNaN.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseIsNaN.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsNaNJs(module, exports) {
    /**
     * The base implementation of `_.isNaN` without support for number objects.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     */
    function baseIsNaN(value) {
      return value !== value;
    }

    module.exports = baseIsNaN;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsNative.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseIsNative.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsNativeJs(module, exports, __webpack_require__) {
    var isFunction = __webpack_require__(
    /*! ./isFunction */
    "./node_modules/lodash/isFunction.js"),
        isMasked = __webpack_require__(
    /*! ./_isMasked */
    "./node_modules/lodash/_isMasked.js"),
        isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js"),
        toSource = __webpack_require__(
    /*! ./_toSource */
    "./node_modules/lodash/_toSource.js");
    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */


    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    /** Used to detect host constructors (Safari). */

    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used for built-in method references. */

    var funcProto = Function.prototype,
        objectProto = Object.prototype;
    /** Used to resolve the decompiled source of functions. */

    var funcToString = funcProto.toString;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /** Used to detect if a method is native. */

    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */

    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }

      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    module.exports = baseIsNative;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIsTypedArray.js":
  /*!**************************************************!*\
    !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIsTypedArrayJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isLength = __webpack_require__(
    /*! ./isLength */
    "./node_modules/lodash/isLength.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
    /** Used to identify `toStringTag` values of typed arrays. */

    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */

    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    module.exports = baseIsTypedArray;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseIteratee.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseIteratee.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseIterateeJs(module, exports, __webpack_require__) {
    var baseMatches = __webpack_require__(
    /*! ./_baseMatches */
    "./node_modules/lodash/_baseMatches.js"),
        baseMatchesProperty = __webpack_require__(
    /*! ./_baseMatchesProperty */
    "./node_modules/lodash/_baseMatchesProperty.js"),
        identity = __webpack_require__(
    /*! ./identity */
    "./node_modules/lodash/identity.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        property = __webpack_require__(
    /*! ./property */
    "./node_modules/lodash/property.js");
    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */


    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }

      if (value == null) {
        return identity;
      }

      if (_typeof2(value) == 'object') {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }

      return property(value);
    }

    module.exports = baseIteratee;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseKeys.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_baseKeys.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseKeysJs(module, exports, __webpack_require__) {
    var isPrototype = __webpack_require__(
    /*! ./_isPrototype */
    "./node_modules/lodash/_isPrototype.js"),
        nativeKeys = __webpack_require__(
    /*! ./_nativeKeys */
    "./node_modules/lodash/_nativeKeys.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */

    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }

      var result = [];

      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }

      return result;
    }

    module.exports = baseKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseMatches.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseMatches.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseMatchesJs(module, exports, __webpack_require__) {
    var baseIsMatch = __webpack_require__(
    /*! ./_baseIsMatch */
    "./node_modules/lodash/_baseIsMatch.js"),
        getMatchData = __webpack_require__(
    /*! ./_getMatchData */
    "./node_modules/lodash/_getMatchData.js"),
        matchesStrictComparable = __webpack_require__(
    /*! ./_matchesStrictComparable */
    "./node_modules/lodash/_matchesStrictComparable.js");
    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */


    function baseMatches(source) {
      var matchData = getMatchData(source);

      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }

      return function (object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    module.exports = baseMatches;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseMatchesProperty.js":
  /*!*****************************************************!*\
    !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseMatchesPropertyJs(module, exports, __webpack_require__) {
    var baseIsEqual = __webpack_require__(
    /*! ./_baseIsEqual */
    "./node_modules/lodash/_baseIsEqual.js"),
        get = __webpack_require__(
    /*! ./get */
    "./node_modules/lodash/get.js"),
        hasIn = __webpack_require__(
    /*! ./hasIn */
    "./node_modules/lodash/hasIn.js"),
        isKey = __webpack_require__(
    /*! ./_isKey */
    "./node_modules/lodash/_isKey.js"),
        isStrictComparable = __webpack_require__(
    /*! ./_isStrictComparable */
    "./node_modules/lodash/_isStrictComparable.js"),
        matchesStrictComparable = __webpack_require__(
    /*! ./_matchesStrictComparable */
    "./node_modules/lodash/_matchesStrictComparable.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */

    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }

      return function (object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    module.exports = baseMatchesProperty;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseProperty.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseProperty.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_basePropertyJs(module, exports) {
    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function baseProperty(key) {
      return function (object) {
        return object == null ? undefined : object[key];
      };
    }

    module.exports = baseProperty;
    /***/
  },

  /***/
  "./node_modules/lodash/_basePropertyDeep.js":
  /*!**************************************************!*\
    !*** ./node_modules/lodash/_basePropertyDeep.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_basePropertyDeepJs(module, exports, __webpack_require__) {
    var baseGet = __webpack_require__(
    /*! ./_baseGet */
    "./node_modules/lodash/_baseGet.js");
    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */


    function basePropertyDeep(path) {
      return function (object) {
        return baseGet(object, path);
      };
    }

    module.exports = basePropertyDeep;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseTimes.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseTimes.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseTimesJs(module, exports) {
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }

      return result;
    }

    module.exports = baseTimes;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseToString.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseToString.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseToStringJs(module, exports, __webpack_require__) {
    var _Symbol3 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js"),
        arrayMap = __webpack_require__(
    /*! ./_arrayMap */
    "./node_modules/lodash/_arrayMap.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used as references for various `Number` constants. */


    var INFINITY = 1 / 0;
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = _Symbol3 ? _Symbol3.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;
    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */

    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }

      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }

      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }

      var result = value + '';
      return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    module.exports = baseToString;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseTrim.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_baseTrim.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseTrimJs(module, exports, __webpack_require__) {
    var trimmedEndIndex = __webpack_require__(
    /*! ./_trimmedEndIndex */
    "./node_modules/lodash/_trimmedEndIndex.js");
    /** Used to match leading whitespace. */


    var reTrimStart = /^\s+/;
    /**
     * The base implementation of `_.trim`.
     *
     * @private
     * @param {string} string The string to trim.
     * @returns {string} Returns the trimmed string.
     */

    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
    }

    module.exports = baseTrim;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseUnary.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseUnary.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseUnaryJs(module, exports) {
    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
      return function (value) {
        return func(value);
      };
    }

    module.exports = baseUnary;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseValues.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseValues.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseValuesJs(module, exports, __webpack_require__) {
    var arrayMap = __webpack_require__(
    /*! ./_arrayMap */
    "./node_modules/lodash/_arrayMap.js");
    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */


    function baseValues(object, props) {
      return arrayMap(props, function (key) {
        return object[key];
      });
    }

    module.exports = baseValues;
    /***/
  },

  /***/
  "./node_modules/lodash/_cacheHas.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_cacheHas.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_cacheHasJs(module, exports) {
    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
      return cache.has(key);
    }

    module.exports = cacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_castFunction.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_castFunction.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_castFunctionJs(module, exports, __webpack_require__) {
    var identity = __webpack_require__(
    /*! ./identity */
    "./node_modules/lodash/identity.js");
    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */


    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    module.exports = castFunction;
    /***/
  },

  /***/
  "./node_modules/lodash/_castPath.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_castPath.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_castPathJs(module, exports, __webpack_require__) {
    var isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isKey = __webpack_require__(
    /*! ./_isKey */
    "./node_modules/lodash/_isKey.js"),
        stringToPath = __webpack_require__(
    /*! ./_stringToPath */
    "./node_modules/lodash/_stringToPath.js"),
        toString = __webpack_require__(
    /*! ./toString */
    "./node_modules/lodash/toString.js");
    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */


    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }

      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    module.exports = castPath;
    /***/
  },

  /***/
  "./node_modules/lodash/_coreJsData.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_coreJsData.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_coreJsDataJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /** Used to detect overreaching core-js shims. */


    var coreJsData = root['__core-js_shared__'];
    module.exports = coreJsData;
    /***/
  },

  /***/
  "./node_modules/lodash/_createBaseEach.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_createBaseEach.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_createBaseEachJs(module, exports, __webpack_require__) {
    var isArrayLike = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/lodash/isArrayLike.js");
    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */


    function createBaseEach(eachFunc, fromRight) {
      return function (collection, iteratee) {
        if (collection == null) {
          return collection;
        }

        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }

        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }

        return collection;
      };
    }

    module.exports = createBaseEach;
    /***/
  },

  /***/
  "./node_modules/lodash/_createBaseFor.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_createBaseFor.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_createBaseForJs(module, exports) {
    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function (object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];

          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }

        return object;
      };
    }

    module.exports = createBaseFor;
    /***/
  },

  /***/
  "./node_modules/lodash/_equalArrays.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_equalArrays.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_equalArraysJs(module, exports, __webpack_require__) {
    var SetCache = __webpack_require__(
    /*! ./_SetCache */
    "./node_modules/lodash/_SetCache.js"),
        arraySome = __webpack_require__(
    /*! ./_arraySome */
    "./node_modules/lodash/_arraySome.js"),
        cacheHas = __webpack_require__(
    /*! ./_cacheHas */
    "./node_modules/lodash/_cacheHas.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */

    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      } // Check that cyclic values are equal.


      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);

      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }

      var index = -1,
          result = true,
          seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
      stack.set(array, other);
      stack.set(other, array); // Ignore non-index properties.

      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }

        if (compared !== undefined) {
          if (compared) {
            continue;
          }

          result = false;
          break;
        } // Recursively compare arrays (susceptible to call stack limits).


        if (seen) {
          if (!arraySome(other, function (othValue, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }

      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    module.exports = equalArrays;
    /***/
  },

  /***/
  "./node_modules/lodash/_equalByTag.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_equalByTag.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_equalByTagJs(module, exports, __webpack_require__) {
    var _Symbol4 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js"),
        Uint8Array = __webpack_require__(
    /*! ./_Uint8Array */
    "./node_modules/lodash/_Uint8Array.js"),
        eq = __webpack_require__(
    /*! ./eq */
    "./node_modules/lodash/eq.js"),
        equalArrays = __webpack_require__(
    /*! ./_equalArrays */
    "./node_modules/lodash/_equalArrays.js"),
        mapToArray = __webpack_require__(
    /*! ./_mapToArray */
    "./node_modules/lodash/_mapToArray.js"),
        setToArray = __webpack_require__(
    /*! ./_setToArray */
    "./node_modules/lodash/_setToArray.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    /** `Object#toString` result references. */

    var boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]';
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = _Symbol4 ? _Symbol4.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }

          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }

          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == other + '';

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          } // Assume cyclic values are equal.


          var stacked = stack.get(object);

          if (stacked) {
            return stacked == other;
          }

          bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }

      }

      return false;
    }

    module.exports = equalByTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_equalObjects.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_equalObjects.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_equalObjectsJs(module, exports, __webpack_require__) {
    var getAllKeys = __webpack_require__(
    /*! ./_getAllKeys */
    "./node_modules/lodash/_getAllKeys.js");
    /** Used to compose bitmasks for value comparisons. */


    var COMPARE_PARTIAL_FLAG = 1;
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */

    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }

      var index = objLength;

      while (index--) {
        var key = objProps[index];

        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      } // Check that cyclic values are equal.


      var objStacked = stack.get(object);
      var othStacked = stack.get(other);

      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }

      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;

      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        } // Recursively compare objects (susceptible to call stack limits).


        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }

        skipCtor || (skipCtor = key == 'constructor');
      }

      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }

      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    module.exports = equalObjects;
    /***/
  },

  /***/
  "./node_modules/lodash/_freeGlobal.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_freeGlobal.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_freeGlobalJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global) {
      /** Detect free variable `global` from Node.js. */
      var freeGlobal = _typeof2(global) == 'object' && global && global.Object === Object && global;
      module.exports = freeGlobal;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/lodash/_getAllKeys.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getAllKeys.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getAllKeysJs(module, exports, __webpack_require__) {
    var baseGetAllKeys = __webpack_require__(
    /*! ./_baseGetAllKeys */
    "./node_modules/lodash/_baseGetAllKeys.js"),
        getSymbols = __webpack_require__(
    /*! ./_getSymbols */
    "./node_modules/lodash/_getSymbols.js"),
        keys = __webpack_require__(
    /*! ./keys */
    "./node_modules/lodash/keys.js");
    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    module.exports = getAllKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_getMapData.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getMapData.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getMapDataJs(module, exports, __webpack_require__) {
    var isKeyable = __webpack_require__(
    /*! ./_isKeyable */
    "./node_modules/lodash/_isKeyable.js");
    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */


    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }

    module.exports = getMapData;
    /***/
  },

  /***/
  "./node_modules/lodash/_getMatchData.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_getMatchData.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getMatchDataJs(module, exports, __webpack_require__) {
    var isStrictComparable = __webpack_require__(
    /*! ./_isStrictComparable */
    "./node_modules/lodash/_isStrictComparable.js"),
        keys = __webpack_require__(
    /*! ./keys */
    "./node_modules/lodash/keys.js");
    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */


    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }

      return result;
    }

    module.exports = getMatchData;
    /***/
  },

  /***/
  "./node_modules/lodash/_getNative.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_getNative.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getNativeJs(module, exports, __webpack_require__) {
    var baseIsNative = __webpack_require__(
    /*! ./_baseIsNative */
    "./node_modules/lodash/_baseIsNative.js"),
        getValue = __webpack_require__(
    /*! ./_getValue */
    "./node_modules/lodash/_getValue.js");
    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */


    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    module.exports = getNative;
    /***/
  },

  /***/
  "./node_modules/lodash/_getRawTag.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_getRawTag.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getRawTagJs(module, exports, __webpack_require__) {
    var _Symbol5 = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString = objectProto.toString;
    /** Built-in value references. */

    var symToStringTag = _Symbol5 ? _Symbol5.toStringTag : undefined;
    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */

    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);

      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }

      return result;
    }

    module.exports = getRawTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_getSymbols.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getSymbols.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getSymbolsJs(module, exports, __webpack_require__) {
    var arrayFilter = __webpack_require__(
    /*! ./_arrayFilter */
    "./node_modules/lodash/_arrayFilter.js"),
        stubArray = __webpack_require__(
    /*! ./stubArray */
    "./node_modules/lodash/stubArray.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Built-in value references. */

    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeGetSymbols = Object.getOwnPropertySymbols;
    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */

    var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
      if (object == null) {
        return [];
      }

      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function (symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
    /***/
  },

  /***/
  "./node_modules/lodash/_getTag.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/_getTag.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getTagJs(module, exports, __webpack_require__) {
    var DataView = __webpack_require__(
    /*! ./_DataView */
    "./node_modules/lodash/_DataView.js"),
        Map = __webpack_require__(
    /*! ./_Map */
    "./node_modules/lodash/_Map.js"),
        Promise = __webpack_require__(
    /*! ./_Promise */
    "./node_modules/lodash/_Promise.js"),
        Set = __webpack_require__(
    /*! ./_Set */
    "./node_modules/lodash/_Set.js"),
        WeakMap = __webpack_require__(
    /*! ./_WeakMap */
    "./node_modules/lodash/_WeakMap.js"),
        baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        toSource = __webpack_require__(
    /*! ./_toSource */
    "./node_modules/lodash/_toSource.js");
    /** `Object#toString` result references. */


    var mapTag = '[object Map]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        setTag = '[object Set]',
        weakMapTag = '[object WeakMap]';
    var dataViewTag = '[object DataView]';
    /** Used to detect maps, sets, and weakmaps. */

    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);
    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;

            case mapCtorString:
              return mapTag;

            case promiseCtorString:
              return promiseTag;

            case setCtorString:
              return setTag;

            case weakMapCtorString:
              return weakMapTag;
          }
        }

        return result;
      };
    }

    module.exports = getTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_getValue.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_getValue.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getValueJs(module, exports) {
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }

    module.exports = getValue;
    /***/
  },

  /***/
  "./node_modules/lodash/_hasPath.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hasPath.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hasPathJs(module, exports, __webpack_require__) {
    var castPath = __webpack_require__(
    /*! ./_castPath */
    "./node_modules/lodash/_castPath.js"),
        isArguments = __webpack_require__(
    /*! ./isArguments */
    "./node_modules/lodash/isArguments.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isIndex = __webpack_require__(
    /*! ./_isIndex */
    "./node_modules/lodash/_isIndex.js"),
        isLength = __webpack_require__(
    /*! ./isLength */
    "./node_modules/lodash/isLength.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */


    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);

        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }

        object = object[key];
      }

      if (result || ++index != length) {
        return result;
      }

      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }

    module.exports = hasPath;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashClear.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_hashClear.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashClearJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */


    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    module.exports = hashClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashDelete.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_hashDelete.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashDeleteJs(module, exports) {
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    module.exports = hashDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashGet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashGet.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashGetJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /** Used to stand-in for `undefined` hash values. */


    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */

    function hashGet(key) {
      var data = this.__data__;

      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }

      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    module.exports = hashGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashHas.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashHas.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashHasJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */

    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }

    module.exports = hashHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_hashSet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashSet.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_hashSetJs(module, exports, __webpack_require__) {
    var nativeCreate = __webpack_require__(
    /*! ./_nativeCreate */
    "./node_modules/lodash/_nativeCreate.js");
    /** Used to stand-in for `undefined` hash values. */


    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */

    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
      return this;
    }

    module.exports = hashSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_isIndex.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_isIndex.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isIndexJs(module, exports) {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;
    /** Used to detect unsigned integer values. */

    var reIsUint = /^(?:0|[1-9]\d*)$/;
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */

    function isIndex(value, length) {
      var type = _typeof2(value);

      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }

    module.exports = isIndex;
    /***/
  },

  /***/
  "./node_modules/lodash/_isKey.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_isKey.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isKeyJs(module, exports, __webpack_require__) {
    var isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used to match property names within property paths. */


    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;
    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */

    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }

      var type = _typeof2(value);

      if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
        return true;
      }

      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }

    module.exports = isKey;
    /***/
  },

  /***/
  "./node_modules/lodash/_isKeyable.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_isKeyable.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isKeyableJs(module, exports) {
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = _typeof2(value);

      return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }

    module.exports = isKeyable;
    /***/
  },

  /***/
  "./node_modules/lodash/_isMasked.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_isMasked.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isMaskedJs(module, exports, __webpack_require__) {
    var coreJsData = __webpack_require__(
    /*! ./_coreJsData */
    "./node_modules/lodash/_coreJsData.js");
    /** Used to detect methods masquerading as native. */


    var maskSrcKey = function () {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */


    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }

    module.exports = isMasked;
    /***/
  },

  /***/
  "./node_modules/lodash/_isPrototype.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_isPrototype.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isPrototypeJs(module, exports) {
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */

    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
      return value === proto;
    }

    module.exports = isPrototype;
    /***/
  },

  /***/
  "./node_modules/lodash/_isStrictComparable.js":
  /*!****************************************************!*\
    !*** ./node_modules/lodash/_isStrictComparable.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_isStrictComparableJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js");
    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */


    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    module.exports = isStrictComparable;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheClear.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_listCacheClear.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheClearJs(module, exports) {
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    module.exports = listCacheClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheDelete.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_listCacheDelete.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheDeleteJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /** Used for built-in method references. */


    var arrayProto = Array.prototype;
    /** Built-in value references. */

    var splice = arrayProto.splice;
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */

    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }

      var lastIndex = data.length - 1;

      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }

      --this.size;
      return true;
    }

    module.exports = listCacheDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheGet.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheGet.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheGetJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);
      return index < 0 ? undefined : data[index][1];
    }

    module.exports = listCacheGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheHas.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheHas.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheHasJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    module.exports = listCacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_listCacheSet.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheSet.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_listCacheSetJs(module, exports, __webpack_require__) {
    var assocIndexOf = __webpack_require__(
    /*! ./_assocIndexOf */
    "./node_modules/lodash/_assocIndexOf.js");
    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */


    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }

      return this;
    }

    module.exports = listCacheSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheClear.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_mapCacheClear.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheClearJs(module, exports, __webpack_require__) {
    var Hash = __webpack_require__(
    /*! ./_Hash */
    "./node_modules/lodash/_Hash.js"),
        ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js"),
        Map = __webpack_require__(
    /*! ./_Map */
    "./node_modules/lodash/_Map.js");
    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */


    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash(),
        'map': new (Map || ListCache)(),
        'string': new Hash()
      };
    }

    module.exports = mapCacheClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheDelete.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_mapCacheDelete.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheDeleteJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    module.exports = mapCacheDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheGet.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheGet.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheGetJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    module.exports = mapCacheGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheHas.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheHas.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheHasJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    module.exports = mapCacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapCacheSet.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheSet.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapCacheSetJs(module, exports, __webpack_require__) {
    var getMapData = __webpack_require__(
    /*! ./_getMapData */
    "./node_modules/lodash/_getMapData.js");
    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */


    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    module.exports = mapCacheSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_mapToArray.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_mapToArray.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_mapToArrayJs(module, exports) {
    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);
      map.forEach(function (value, key) {
        result[++index] = [key, value];
      });
      return result;
    }

    module.exports = mapToArray;
    /***/
  },

  /***/
  "./node_modules/lodash/_matchesStrictComparable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_matchesStrictComparableJs(module, exports) {
    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function (object) {
        if (object == null) {
          return false;
        }

        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
      };
    }

    module.exports = matchesStrictComparable;
    /***/
  },

  /***/
  "./node_modules/lodash/_memoizeCapped.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_memoizeCapped.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_memoizeCappedJs(module, exports, __webpack_require__) {
    var memoize = __webpack_require__(
    /*! ./memoize */
    "./node_modules/lodash/memoize.js");
    /** Used as the maximum memoize cache size. */


    var MAX_MEMOIZE_SIZE = 500;
    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */

    function memoizeCapped(func) {
      var result = memoize(func, function (key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }

        return key;
      });
      var cache = result.cache;
      return result;
    }

    module.exports = memoizeCapped;
    /***/
  },

  /***/
  "./node_modules/lodash/_nativeCreate.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_nativeCreate.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_nativeCreateJs(module, exports, __webpack_require__) {
    var getNative = __webpack_require__(
    /*! ./_getNative */
    "./node_modules/lodash/_getNative.js");
    /* Built-in method references that are verified to be native. */


    var nativeCreate = getNative(Object, 'create');
    module.exports = nativeCreate;
    /***/
  },

  /***/
  "./node_modules/lodash/_nativeKeys.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_nativeKeys.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_nativeKeysJs(module, exports, __webpack_require__) {
    var overArg = __webpack_require__(
    /*! ./_overArg */
    "./node_modules/lodash/_overArg.js");
    /* Built-in method references for those with the same name as other `lodash` methods. */


    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
    /***/
  },

  /***/
  "./node_modules/lodash/_nodeUtil.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_nodeUtil.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_nodeUtilJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var freeGlobal = __webpack_require__(
      /*! ./_freeGlobal */
      "./node_modules/lodash/_freeGlobal.js");
      /** Detect free variable `exports`. */


      var freeExports =  true && exports && !exports.nodeType && exports;
      /** Detect free variable `module`. */

      var freeModule = freeExports && _typeof2(module) == 'object' && module && !module.nodeType && module;
      /** Detect the popular CommonJS extension `module.exports`. */

      var moduleExports = freeModule && freeModule.exports === freeExports;
      /** Detect free variable `process` from Node.js. */

      var freeProcess = moduleExports && freeGlobal.process;
      /** Used to access faster Node.js helpers. */

      var nodeUtil = function () {
        try {
          // Use `util.types` for Node.js 10+.
          var types = freeModule && freeModule.require && freeModule.require('util').types;

          if (types) {
            return types;
          } // Legacy `process.binding('util')` for Node.js < 10.


          return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {}
      }();

      module.exports = nodeUtil;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/lodash/_objectToString.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_objectToString.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_objectToStringJs(module, exports) {
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString = objectProto.toString;
    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */

    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    module.exports = objectToString;
    /***/
  },

  /***/
  "./node_modules/lodash/_overArg.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_overArg.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_overArgJs(module, exports) {
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg));
      };
    }

    module.exports = overArg;
    /***/
  },

  /***/
  "./node_modules/lodash/_root.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/_root.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_rootJs(module, exports, __webpack_require__) {
    var freeGlobal = __webpack_require__(
    /*! ./_freeGlobal */
    "./node_modules/lodash/_freeGlobal.js");
    /** Detect free variable `self`. */


    var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof2(self)) == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();
    module.exports = root;
    /***/
  },

  /***/
  "./node_modules/lodash/_setCacheAdd.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_setCacheAdd.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_setCacheAddJs(module, exports) {
    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */

    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);

      return this;
    }

    module.exports = setCacheAdd;
    /***/
  },

  /***/
  "./node_modules/lodash/_setCacheHas.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_setCacheHas.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_setCacheHasJs(module, exports) {
    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    module.exports = setCacheHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_setToArray.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_setToArray.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_setToArrayJs(module, exports) {
    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);
      set.forEach(function (value) {
        result[++index] = value;
      });
      return result;
    }

    module.exports = setToArray;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackClear.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_stackClear.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackClearJs(module, exports, __webpack_require__) {
    var ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js");
    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */


    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }

    module.exports = stackClear;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackDelete.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_stackDelete.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackDeleteJs(module, exports) {
    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);
      this.size = data.size;
      return result;
    }

    module.exports = stackDelete;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackGet.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackGet.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackGetJs(module, exports) {
    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    module.exports = stackGet;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackHas.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackHas.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackHasJs(module, exports) {
    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    module.exports = stackHas;
    /***/
  },

  /***/
  "./node_modules/lodash/_stackSet.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackSet.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stackSetJs(module, exports, __webpack_require__) {
    var ListCache = __webpack_require__(
    /*! ./_ListCache */
    "./node_modules/lodash/_ListCache.js"),
        Map = __webpack_require__(
    /*! ./_Map */
    "./node_modules/lodash/_Map.js"),
        MapCache = __webpack_require__(
    /*! ./_MapCache */
    "./node_modules/lodash/_MapCache.js");
    /** Used as the size to enable large array optimizations. */


    var LARGE_ARRAY_SIZE = 200;
    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */

    function stackSet(key, value) {
      var data = this.__data__;

      if (data instanceof ListCache) {
        var pairs = data.__data__;

        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }

        data = this.__data__ = new MapCache(pairs);
      }

      data.set(key, value);
      this.size = data.size;
      return this;
    }

    module.exports = stackSet;
    /***/
  },

  /***/
  "./node_modules/lodash/_strictIndexOf.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_strictIndexOf.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_strictIndexOfJs(module, exports) {
    /**
     * A specialized version of `_.indexOf` which performs strict equality
     * comparisons of values, i.e. `===`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1,
          length = array.length;

      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }

      return -1;
    }

    module.exports = strictIndexOf;
    /***/
  },

  /***/
  "./node_modules/lodash/_stringToPath.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_stringToPath.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_stringToPathJs(module, exports, __webpack_require__) {
    var memoizeCapped = __webpack_require__(
    /*! ./_memoizeCapped */
    "./node_modules/lodash/_memoizeCapped.js");
    /** Used to match property names within property paths. */


    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    /** Used to match backslashes in property paths. */

    var reEscapeChar = /\\(\\)?/g;
    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */

    var stringToPath = memoizeCapped(function (string) {
      var result = [];

      if (string.charCodeAt(0) === 46
      /* . */
      ) {
          result.push('');
        }

      string.replace(rePropName, function (match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
    /***/
  },

  /***/
  "./node_modules/lodash/_toKey.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_toKey.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_toKeyJs(module, exports, __webpack_require__) {
    var isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used as references for various `Number` constants. */


    var INFINITY = 1 / 0;
    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */

    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }

      var result = value + '';
      return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    module.exports = toKey;
    /***/
  },

  /***/
  "./node_modules/lodash/_toSource.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_toSource.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_toSourceJs(module, exports) {
    /** Used for built-in method references. */
    var funcProto = Function.prototype;
    /** Used to resolve the decompiled source of functions. */

    var funcToString = funcProto.toString;
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */

    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}

        try {
          return func + '';
        } catch (e) {}
      }

      return '';
    }

    module.exports = toSource;
    /***/
  },

  /***/
  "./node_modules/lodash/_trimmedEndIndex.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_trimmedEndIndexJs(module, exports) {
    /** Used to match a single whitespace character. */
    var reWhitespace = /\s/;
    /**
     * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
     * character of `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the index of the last non-whitespace character.
     */

    function trimmedEndIndex(string) {
      var index = string.length;

      while (index-- && reWhitespace.test(string.charAt(index))) {}

      return index;
    }

    module.exports = trimmedEndIndex;
    /***/
  },

  /***/
  "./node_modules/lodash/eq.js":
  /*!***********************************!*\
    !*** ./node_modules/lodash/eq.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashEqJs(module, exports) {
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }

    module.exports = eq;
    /***/
  },

  /***/
  "./node_modules/lodash/filter.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/filter.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashFilterJs(module, exports, __webpack_require__) {
    var arrayFilter = __webpack_require__(
    /*! ./_arrayFilter */
    "./node_modules/lodash/_arrayFilter.js"),
        baseFilter = __webpack_require__(
    /*! ./_baseFilter */
    "./node_modules/lodash/_baseFilter.js"),
        baseIteratee = __webpack_require__(
    /*! ./_baseIteratee */
    "./node_modules/lodash/_baseIteratee.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js");
    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */


    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }

    module.exports = filter;
    /***/
  },

  /***/
  "./node_modules/lodash/forEach.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/forEach.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashForEachJs(module, exports, __webpack_require__) {
    var arrayEach = __webpack_require__(
    /*! ./_arrayEach */
    "./node_modules/lodash/_arrayEach.js"),
        baseEach = __webpack_require__(
    /*! ./_baseEach */
    "./node_modules/lodash/_baseEach.js"),
        castFunction = __webpack_require__(
    /*! ./_castFunction */
    "./node_modules/lodash/_castFunction.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js");
    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */


    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, castFunction(iteratee));
    }

    module.exports = forEach;
    /***/
  },

  /***/
  "./node_modules/lodash/get.js":
  /*!************************************!*\
    !*** ./node_modules/lodash/get.js ***!
    \************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashGetJs(module, exports, __webpack_require__) {
    var baseGet = __webpack_require__(
    /*! ./_baseGet */
    "./node_modules/lodash/_baseGet.js");
    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */


    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    module.exports = get;
    /***/
  },

  /***/
  "./node_modules/lodash/hasIn.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/hasIn.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashHasInJs(module, exports, __webpack_require__) {
    var baseHasIn = __webpack_require__(
    /*! ./_baseHasIn */
    "./node_modules/lodash/_baseHasIn.js"),
        hasPath = __webpack_require__(
    /*! ./_hasPath */
    "./node_modules/lodash/_hasPath.js");
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */


    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    module.exports = hasIn;
    /***/
  },

  /***/
  "./node_modules/lodash/head.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/head.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashHeadJs(module, exports) {
    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return array && array.length ? array[0] : undefined;
    }

    module.exports = head;
    /***/
  },

  /***/
  "./node_modules/lodash/identity.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/identity.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIdentityJs(module, exports) {
    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    module.exports = identity;
    /***/
  },

  /***/
  "./node_modules/lodash/includes.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/includes.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIncludesJs(module, exports, __webpack_require__) {
    var baseIndexOf = __webpack_require__(
    /*! ./_baseIndexOf */
    "./node_modules/lodash/_baseIndexOf.js"),
        isArrayLike = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/lodash/isArrayLike.js"),
        isString = __webpack_require__(
    /*! ./isString */
    "./node_modules/lodash/isString.js"),
        toInteger = __webpack_require__(
    /*! ./toInteger */
    "./node_modules/lodash/toInteger.js"),
        values = __webpack_require__(
    /*! ./values */
    "./node_modules/lodash/values.js");
    /* Built-in method references for those with the same name as other `lodash` methods. */


    var nativeMax = Math.max;
    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */

    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
      var length = collection.length;

      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }

      return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
    }

    module.exports = includes;
    /***/
  },

  /***/
  "./node_modules/lodash/isArguments.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/isArguments.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsArgumentsJs(module, exports, __webpack_require__) {
    var baseIsArguments = __webpack_require__(
    /*! ./_baseIsArguments */
    "./node_modules/lodash/_baseIsArguments.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /** Built-in value references. */

    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */

    var isArguments = baseIsArguments(function () {
      return arguments;
    }()) ? baseIsArguments : function (value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
    };
    module.exports = isArguments;
    /***/
  },

  /***/
  "./node_modules/lodash/isArray.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/isArray.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsArrayJs(module, exports) {
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;
    module.exports = isArray;
    /***/
  },

  /***/
  "./node_modules/lodash/isArrayLike.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/isArrayLike.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsArrayLikeJs(module, exports, __webpack_require__) {
    var isFunction = __webpack_require__(
    /*! ./isFunction */
    "./node_modules/lodash/isFunction.js"),
        isLength = __webpack_require__(
    /*! ./isLength */
    "./node_modules/lodash/isLength.js");
    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */


    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    module.exports = isArrayLike;
    /***/
  },

  /***/
  "./node_modules/lodash/isBuffer.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isBuffer.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsBufferJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var root = __webpack_require__(
      /*! ./_root */
      "./node_modules/lodash/_root.js"),
          stubFalse = __webpack_require__(
      /*! ./stubFalse */
      "./node_modules/lodash/stubFalse.js");
      /** Detect free variable `exports`. */


      var freeExports =  true && exports && !exports.nodeType && exports;
      /** Detect free variable `module`. */

      var freeModule = freeExports && _typeof2(module) == 'object' && module && !module.nodeType && module;
      /** Detect the popular CommonJS extension `module.exports`. */

      var moduleExports = freeModule && freeModule.exports === freeExports;
      /** Built-in value references. */

      var Buffer = moduleExports ? root.Buffer : undefined;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
      /**
       * Checks if `value` is a buffer.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
       * @example
       *
       * _.isBuffer(new Buffer(2));
       * // => true
       *
       * _.isBuffer(new Uint8Array(2));
       * // => false
       */

      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/lodash/isEmpty.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/isEmpty.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsEmptyJs(module, exports, __webpack_require__) {
    var baseKeys = __webpack_require__(
    /*! ./_baseKeys */
    "./node_modules/lodash/_baseKeys.js"),
        getTag = __webpack_require__(
    /*! ./_getTag */
    "./node_modules/lodash/_getTag.js"),
        isArguments = __webpack_require__(
    /*! ./isArguments */
    "./node_modules/lodash/isArguments.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isArrayLike = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/lodash/isArrayLike.js"),
        isBuffer = __webpack_require__(
    /*! ./isBuffer */
    "./node_modules/lodash/isBuffer.js"),
        isPrototype = __webpack_require__(
    /*! ./_isPrototype */
    "./node_modules/lodash/_isPrototype.js"),
        isTypedArray = __webpack_require__(
    /*! ./isTypedArray */
    "./node_modules/lodash/isTypedArray.js");
    /** `Object#toString` result references. */


    var mapTag = '[object Map]',
        setTag = '[object Set]';
    /** Used for built-in method references. */

    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */

    function isEmpty(value) {
      if (value == null) {
        return true;
      }

      if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }

      var tag = getTag(value);

      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }

      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }

      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }

      return true;
    }

    module.exports = isEmpty;
    /***/
  },

  /***/
  "./node_modules/lodash/isFunction.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/isFunction.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsFunctionJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js");
    /** `Object#toString` result references. */


    var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */

    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      } // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.


      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    module.exports = isFunction;
    /***/
  },

  /***/
  "./node_modules/lodash/isLength.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isLength.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsLengthJs(module, exports) {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */

    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    module.exports = isLength;
    /***/
  },

  /***/
  "./node_modules/lodash/isObject.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isObject.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsObjectJs(module, exports) {
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = _typeof2(value);

      return value != null && (type == 'object' || type == 'function');
    }

    module.exports = isObject;
    /***/
  },

  /***/
  "./node_modules/lodash/isObjectLike.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/isObjectLike.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsObjectLikeJs(module, exports) {
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && _typeof2(value) == 'object';
    }

    module.exports = isObjectLike;
    /***/
  },

  /***/
  "./node_modules/lodash/isString.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isString.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsStringJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isArray = __webpack_require__(
    /*! ./isArray */
    "./node_modules/lodash/isArray.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var stringTag = '[object String]';
    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */

    function isString(value) {
      return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }

    module.exports = isString;
    /***/
  },

  /***/
  "./node_modules/lodash/isSymbol.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isSymbol.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsSymbolJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var symbolTag = '[object Symbol]';
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */

    function isSymbol(value) {
      return _typeof2(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }

    module.exports = isSymbol;
    /***/
  },

  /***/
  "./node_modules/lodash/isTypedArray.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/isTypedArray.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsTypedArrayJs(module, exports, __webpack_require__) {
    var baseIsTypedArray = __webpack_require__(
    /*! ./_baseIsTypedArray */
    "./node_modules/lodash/_baseIsTypedArray.js"),
        baseUnary = __webpack_require__(
    /*! ./_baseUnary */
    "./node_modules/lodash/_baseUnary.js"),
        nodeUtil = __webpack_require__(
    /*! ./_nodeUtil */
    "./node_modules/lodash/_nodeUtil.js");
    /* Node.js helper references. */


    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */

    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
    /***/
  },

  /***/
  "./node_modules/lodash/keys.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/keys.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashKeysJs(module, exports, __webpack_require__) {
    var arrayLikeKeys = __webpack_require__(
    /*! ./_arrayLikeKeys */
    "./node_modules/lodash/_arrayLikeKeys.js"),
        baseKeys = __webpack_require__(
    /*! ./_baseKeys */
    "./node_modules/lodash/_baseKeys.js"),
        isArrayLike = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/lodash/isArrayLike.js");
    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */


    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    module.exports = keys;
    /***/
  },

  /***/
  "./node_modules/lodash/memoize.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/memoize.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashMemoizeJs(module, exports, __webpack_require__) {
    var MapCache = __webpack_require__(
    /*! ./_MapCache */
    "./node_modules/lodash/_MapCache.js");
    /** Error message constants. */


    var FUNC_ERROR_TEXT = 'Expected a function';
    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */

    function memoize(func, resolver) {
      if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      var memoized = function memoized() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }

        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };

      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    } // Expose `MapCache`.


    memoize.Cache = MapCache;
    module.exports = memoize;
    /***/
  },

  /***/
  "./node_modules/lodash/property.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/property.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashPropertyJs(module, exports, __webpack_require__) {
    var baseProperty = __webpack_require__(
    /*! ./_baseProperty */
    "./node_modules/lodash/_baseProperty.js"),
        basePropertyDeep = __webpack_require__(
    /*! ./_basePropertyDeep */
    "./node_modules/lodash/_basePropertyDeep.js"),
        isKey = __webpack_require__(
    /*! ./_isKey */
    "./node_modules/lodash/_isKey.js"),
        toKey = __webpack_require__(
    /*! ./_toKey */
    "./node_modules/lodash/_toKey.js");
    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */


    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    module.exports = property;
    /***/
  },

  /***/
  "./node_modules/lodash/stubArray.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/stubArray.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashStubArrayJs(module, exports) {
    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    module.exports = stubArray;
    /***/
  },

  /***/
  "./node_modules/lodash/stubFalse.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/stubFalse.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashStubFalseJs(module, exports) {
    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    module.exports = stubFalse;
    /***/
  },

  /***/
  "./node_modules/lodash/toFinite.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/toFinite.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashToFiniteJs(module, exports, __webpack_require__) {
    var toNumber = __webpack_require__(
    /*! ./toNumber */
    "./node_modules/lodash/toNumber.js");
    /** Used as references for various `Number` constants. */


    var INFINITY = 1 / 0,
        MAX_INTEGER = 1.7976931348623157e+308;
    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */

    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }

      value = toNumber(value);

      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }

      return value === value ? value : 0;
    }

    module.exports = toFinite;
    /***/
  },

  /***/
  "./node_modules/lodash/toInteger.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/toInteger.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashToIntegerJs(module, exports, __webpack_require__) {
    var toFinite = __webpack_require__(
    /*! ./toFinite */
    "./node_modules/lodash/toFinite.js");
    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */


    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }

    module.exports = toInteger;
    /***/
  },

  /***/
  "./node_modules/lodash/toNumber.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/toNumber.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashToNumberJs(module, exports, __webpack_require__) {
    var baseTrim = __webpack_require__(
    /*! ./_baseTrim */
    "./node_modules/lodash/_baseTrim.js"),
        isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js"),
        isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used as references for various `Number` constants. */


    var NAN = 0 / 0;
    /** Used to detect bad signed hexadecimal string values. */

    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */

    var reIsBinary = /^0b[01]+$/i;
    /** Used to detect octal string values. */

    var reIsOctal = /^0o[0-7]+$/i;
    /** Built-in method references without a dependency on `root`. */

    var freeParseInt = parseInt;
    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */

    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol(value)) {
        return NAN;
      }

      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
      }

      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }

      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }

    module.exports = toNumber;
    /***/
  },

  /***/
  "./node_modules/lodash/toString.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/toString.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashToStringJs(module, exports, __webpack_require__) {
    var baseToString = __webpack_require__(
    /*! ./_baseToString */
    "./node_modules/lodash/_baseToString.js");
    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */


    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    module.exports = toString;
    /***/
  },

  /***/
  "./node_modules/lodash/values.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/values.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashValuesJs(module, exports, __webpack_require__) {
    var baseValues = __webpack_require__(
    /*! ./_baseValues */
    "./node_modules/lodash/_baseValues.js"),
        keys = __webpack_require__(
    /*! ./keys */
    "./node_modules/lodash/keys.js");
    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */


    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    module.exports = values;
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if ((typeof window === "undefined" ? "undefined" : _typeof2(window)) === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinModuleJs(module, exports) {
    module.exports = function (module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function () {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "jquery":
  /*!*************************!*\
    !*** external "jQuery" ***!
    \*************************/

  /*! no static exports found */

  /***/
  function jquery(module, exports) {
    (function () {
      module.exports = window["jQuery"];
    })();
    /***/

  }
  /******/

}));

/***/ }),

/***/ "./includes/builder/frontend-builder/build/frontend-builder-scripts.js":
/*!*****************************************************************************!*\
  !*** ./includes/builder/frontend-builder/build/frontend-builder-scripts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof2(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}(function(e,a){for(var i in a){e[i]=a[i];}})(window,/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof2(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="http://0.0.0.0:31495/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s="../scripts/frontend/scripts.js");/******/}(/************************************************************************/ /******/{/***/"../../../core/admin/js/frame-helpers.js":/*!*********************************************************************************************************!*\
  !*** /Users/slava/Local Sites/dividev/app/public/wp-content/themes/Divi/core/admin/js/frame-helpers.js ***!
  \*********************************************************************************************************/ /*! no static exports found */ /***/function coreAdminJsFrameHelpersJs(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.top_window=exports.is_iframe=void 0;/*                    ,-,-
                     / / |
   ,-'             _/ / /
  (-_          _,-' `Z_/
   "#:      ,-'_,-.    \  _
    #'    _(_-'_()\     \" |
  ,--_,--'                 |
 / ""                      L-'\
 \,--^---v--v-._        /   \ |
   \_________________,-'      |
                    \
                     \
                      \
 NOTE: The code in this file will be executed multiple times! */var top_window=window;exports.top_window=top_window;var is_iframe=false;exports.is_iframe=is_iframe;var top;try{// Have to access top window's prop (document) to trigger same-origin DOMException
// so we can catch it and act accordingly.
top=window.top.document?window.top:false;}catch(e){// Can't access top, it means we're inside a different domain iframe.
top=false;}if(top&&top.__Cypress__){if(window.parent===top){exports.top_window=top_window=window;exports.is_iframe=is_iframe=false;}else{exports.top_window=top_window=window.parent;exports.is_iframe=is_iframe=true;}}else if(top){exports.top_window=top_window=top;exports.is_iframe=is_iframe=top!==window.self;}/***/},/***/"../scripts/frontend/scripts.js":/*!**************************************!*\
  !*** ../scripts/frontend/scripts.js ***!
  \**************************************/ /*! no static exports found */ /***/function scriptsFrontendScriptsJs(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(jQuery){var _includes=_interopRequireDefault(__webpack_require__(/*! lodash/includes */"./node_modules/lodash/includes.js"));var _isUndefined=_interopRequireDefault(__webpack_require__(/*! lodash/isUndefined */"./node_modules/lodash/isUndefined.js"));var _get=_interopRequireDefault(__webpack_require__(/*! lodash/get */"./node_modules/lodash/get.js"));var _selectors=__webpack_require__(/*! gutenberg/utils/selectors */"./gutenberg/utils/selectors.js");var _utils=__webpack_require__(/*! ../utils/utils */"../scripts/utils/utils.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var _post_id=et_pb_custom.page_id;/*! ET frontend-builder-scripts.js */(function($){var isBlockLayoutPreview='undefined'!==typeof window.ETBlockLayoutModulesScript&&$('body').hasClass('et-block-layout-preview');var top_window=_utils.isBuilder||isBlockLayoutPreview?ET_Builder.Frames.top:window;var $et_window=$(window);var $fullscreenSectionWindow=isBlockLayoutPreview?$(top_window):$(window);var $et_top_window=_utils.isBuilder?top_window.jQuery(top_window):$(window);var isTB=$('body').hasClass('et-tb');var isBFB=$('body').hasClass('et-bfb');var isVB=_utils.isBuilder&&!isBFB;var isScrollOnAppWindow=function isScrollOnAppWindow(){if(isBlockLayoutPreview){return false;}return isVB&&($('html').is('.et-fb-preview--wireframe')||$('html').is('.et-fb-preview--desktop'));};var isBuilderModeZoom=function isBuilderModeZoom(){return _utils.isBuilder&&$('html').is('.et-fb-preview--zoom');};var isInsideVB=function isInsideVB($node){return $node.closest('#et-fb-app').length>0;};var getInsideVB=function getInsideVB($node){return $('#et-fb-app').find($node);};var getOutsideVB=function getOutsideVB($node){if('string'===typeof $node){$node=$($node);}return $node.not('#et-fb-app *');};window.et_load_event_fired=false;window.et_is_transparent_nav=$('body').hasClass('et_transparent_nav');window.et_is_vertical_nav=$('body').hasClass('et_vertical_nav');window.et_is_fixed_nav=$('body').hasClass('et_fixed_nav');window.et_is_minified_js=$('body').hasClass('et_minified_js');window.et_is_minified_css=$('body').hasClass('et_minified_css');window.et_force_width_container_change=false;jQuery.fn.reverse=[].reverse;jQuery.fn.closest_descendent=function(selector){var $found;var $current_children=this.children();while($current_children.length){$found=$current_children.filter(selector);if($found.length){break;}$current_children=$current_children.children();}return $found;};// Star-based rating UI.
// @see: WooCommerce's woocommerce/assets/js/frontend/single-product.js file
window.et_pb_init_woo_star_rating=function($rating_selector){var $rating_parent=$rating_selector.closest('div');var $existing_stars=$rating_parent.find('p.stars');if($existing_stars.length>0){$existing_stars.remove();}$rating_selector.hide().before('<p class="stars">\
				<span>\
					<a class="star-1" href="#">1</a>\
					<a class="star-2" href="#">2</a>\
					<a class="star-3" href="#">3</a>\
					<a class="star-4" href="#">4</a>\
					<a class="star-5" href="#">5</a>\
				</span>\
			</p>');};window.et_pb_wrap_woo_attribute_fields_in_span=function(){// WooCommerce Modules :: Add To Cart
var $et_variations_forms=$('form.variations_form');// $.each() avoids multiple <span>'s when more than one form exists.
// @see https://github.com/elegantthemes/submodule-builder/pull/7022#discussion_r370703949
$.each($et_variations_forms,function(idx,form){var $form=$(form);var $et_attribute_fields=$form.find('.variations select');var $et_attribute_fields_parent=$form.find('.variations select').parent('td.value');var $et_reset_variations=$form.find('.reset_variations');// Checking length makes sure that `<span>` isn't nested in VB.
if(0===$et_attribute_fields_parent.length||$et_attribute_fields_parent.attr('data-is-span-added')){return;}$et_attribute_fields_parent.attr('data-is-span-added','1');$($et_attribute_fields).wrap('<span></span>');if(isVB&&$et_reset_variations.length>0){$($et_reset_variations).remove();}});};window.et_pb_init_modules=function(){$.et_pb_simple_slider=function(el,options){var settings=$.extend({slide:'.et-slide',// slide class
arrows:'.et-pb-slider-arrows',// arrows container class
prev_arrow:'.et-pb-arrow-prev',// left arrow class
next_arrow:'.et-pb-arrow-next',// right arrow class
controls:'.et-pb-controllers a',// control selector
carousel_controls:'.et_pb_carousel_item',// carousel control selector
control_active_class:'et-pb-active-control',// active control class name
previous_text:et_pb_custom.previous,// previous arrow text
next_text:et_pb_custom.next,// next arrow text
fade_speed:500,// fade effect speed
use_arrows:true,// use arrows?
use_controls:true,// use controls?
manual_arrows:'',// html code for custom arrows
append_controls_to:'',// controls are appended to the slider element by default, here you can specify the element it should append to
controls_below:false,controls_class:'et-pb-controllers',// controls container class name
slideshow:false,// automattic animation?
slideshow_speed:7000,// automattic animation speed
show_progress_bar:false,// show progress bar if automattic animation is active
tabs_animation:false,use_carousel:false,active_slide:0},options);var $et_slider=$(el);var $et_slide=$et_slider.closest_descendent(settings.slide);var et_slides_number=$et_slide.length;var et_fade_speed=settings.fade_speed;var et_active_slide=settings.active_slide;var $et_slider_arrows;var $et_slider_prev;var $et_slider_next;var $et_slider_controls;var $et_slider_carousel_controls;var et_slider_timer;var controls_html='';var carousel_html='';var $progress_bar=null;var progress_timer_count=0;var $et_pb_container=$et_slider.find('.et_pb_container');var et_pb_container_width=$et_pb_container.width();var is_post_slider=$et_slider.hasClass('et_pb_post_slider');var et_slider_breakpoint='';var stop_slider=false;$et_slider.et_animation_running=false;$.data(el,'et_pb_simple_slider',$et_slider);$et_slide.eq(0).addClass('et-pb-active-slide');$et_slider.attr('data-active-slide',$et_slide.data('slide-id'));if(!settings.tabs_animation){if(!$et_slider.hasClass('et_pb_bg_layout_dark')&&!$et_slider.hasClass('et_pb_bg_layout_light')){$et_slider.addClass(et_get_bg_layout_color($et_slide.eq(0)));}}if(settings.use_arrows&&et_slides_number>1){if(''==settings.manual_arrows){// Setting style="color:inherit" for Gallery Slider's arrows
if(settings.hasOwnProperty('slide')&&'.et_pb_gallery_item'===settings.slide){$et_slider.append("".concat('<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#" style="color:inherit">'+'<span>').concat(settings.previous_text,"</span>")+'</a><a class="et-pb-arrow-next" href="#" style="color:inherit">'+"<span>".concat(settings.next_text,"</span>")+'</a></div>');}else{$et_slider.append("".concat('<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#" >'+'<span>').concat(settings.previous_text,"</span>")+'</a><a class="et-pb-arrow-next" href="#">'+"<span>".concat(settings.next_text,"</span>")+'</a></div>');}}else{$et_slider.append(settings.manual_arrows);}$et_slider_arrows=$et_slider.find(settings.arrows);$et_slider_prev=$et_slider.find(settings.prev_arrow);$et_slider_next=$et_slider.find(settings.next_arrow);$et_slider.on('click.et_pb_simple_slider',settings.next_arrow,function(){if($et_slider.et_animation_running)return false;$et_slider.et_slider_move_to('next');return false;});$et_slider.on('click.et_pb_simple_slider',settings.prev_arrow,function(){if($et_slider.et_animation_running)return false;$et_slider.et_slider_move_to('previous');return false;});// swipe support requires et-jquery-touch-mobile
$et_slider.on('swipeleft.et_pb_simple_slider',settings.slide,function(event){// do not switch slide on selecting text in VB
if($(event.target).closest('.et-fb-popover-tinymce').length||$(event.target).closest('.et-fb-editable-element').length){return;}$et_slider.et_slider_move_to('next');});$et_slider.on('swiperight.et_pb_simple_slider',settings.slide,function(event){// do not switch slide on selecting text in VB
if($(event.target).closest('.et-fb-popover-tinymce').length||$(event.target).closest('.et-fb-editable-element').length){return;}$et_slider.et_slider_move_to('previous');});}if(settings.use_controls&&et_slides_number>1){for(var i=1;i<=et_slides_number;i++){controls_html+="<a href=\"#\"".concat(1==i?" class=\"".concat(settings.control_active_class,"\""):'',">").concat(i,"</a>");}if($et_slider.find('video').length>0){settings.controls_class+=' et-pb-controllers-has-video-tag';}controls_html="<div class=\"".concat(settings.controls_class,"\">").concat(controls_html,"</div>");if(''==settings.append_controls_to)$et_slider.append(controls_html);else $(settings.append_controls_to).append(controls_html);if(settings.controls_below)$et_slider_controls=$et_slider.parent().find(settings.controls);else $et_slider_controls=$et_slider.find(settings.controls);$et_slider_controls.on('click.et_pb_simple_slider',function(){if($et_slider.et_animation_running)return false;$et_slider.et_slider_move_to($(this).index());return false;});}if(settings.use_carousel&&et_slides_number>1){for(var i=1;i<=et_slides_number;i++){var slide_id=i-1;var image_src=$et_slide.eq(slide_id).data('image')!==undefined?"url(".concat($et_slide.eq(slide_id).data('image'),")"):'none';carousel_html+="<div class=\"et_pb_carousel_item ".concat(1===i?settings.control_active_class:'',"\" data-slide-id=\"").concat(slide_id,"\">")+"<div class=\"et_pb_video_overlay\" href=\"#\" style=\"background-image: ".concat(image_src,";\">")+'<div class="et_pb_video_overlay_hover"><a href="#" class="et_pb_video_play"></a></div>'+'</div>'+'</div>';}carousel_html="".concat('<div class="et_pb_carousel">'+'<div class="et_pb_carousel_items">').concat(carousel_html,"</div>")+'</div>';$et_slider.after(carousel_html);$et_slider_carousel_controls=$et_slider.siblings('.et_pb_carousel').find(settings.carousel_controls);$et_slider_carousel_controls.on('click.et_pb_simple_slider',function(){if($et_slider.et_animation_running)return false;var $this=$(this);$et_slider.et_slider_move_to($this.data('slide-id'));return false;});}if(settings.slideshow&&et_slides_number>1){$et_slider.on('mouseenter.et_pb_simple_slider',function(){if($et_slider.hasClass('et_slider_auto_ignore_hover')){return;}$et_slider.addClass('et_slider_hovered');if(typeof et_slider_timer!=='undefined'){clearTimeout(et_slider_timer);}}).on('mouseleave.et_pb_simple_slider',function(){if($et_slider.hasClass('et_slider_auto_ignore_hover')){return;}$et_slider.removeClass('et_slider_hovered');et_slider_auto_rotate();});}et_slider_auto_rotate();function et_slider_auto_rotate(){if(stop_slider){return;}// Slider animation can be dynamically paused with et_pb_pause_slider
// Make sure animation will start when class is removed by checking clas existence every 2 seconds.
if($et_slider.hasClass('et_pb_pause_slider')){setTimeout(function(){et_slider_auto_rotate();},2000);return;}if(settings.slideshow&&et_slides_number>1&&!$et_slider.hasClass('et_slider_hovered')){et_slider_timer=setTimeout(function(){$et_slider.et_slider_move_to('next');},settings.slideshow_speed);}}$et_slider.et_slider_destroy=function(){// Clear existing timer / auto rotate
if(typeof et_slider_timer!=='undefined'){clearTimeout(et_slider_timer);}stop_slider=true;// Deregister all own existing events
$et_slider.off('.et_pb_simple_slider');// Removing existing style from slide(s)
$et_slider.find('.et_pb_slide').css({'z-index':'',display:'',opacity:''});// Removing existing classnames from slide(s)
$et_slider.find('.et-pb-active-slide').removeClass('et-pb-active-slide');$et_slider.find('.et-pb-moved-slide').removeClass('et-pb-moved-slide');// Removing DOM that was added by slider
$et_slider.find('.et-pb-slider-arrows, .et-pb-controllers').remove();$et_slider.siblings('.et_pb_carousel, .et-pb-controllers').remove();// Remove references
$et_slider.removeData('et_pb_simple_slider');};function et_stop_video(active_slide){var $et_video;var et_video_src;// if there is a video in the slide, stop it when switching to another slide
if(active_slide.has('iframe').length){$et_video=active_slide.find('iframe');et_video_src=$et_video.attr('src');$et_video.attr('src','');$et_video.attr('src',et_video_src);}else if(active_slide.has('video').length){if(!active_slide.find('.et_pb_section_video_bg').length){$et_video=active_slide.find('video');$et_video[0].pause();}}}// Remove inline width and height added by mediaelement.js
function et_fix_slide_video_height(){var $this_slider=$et_slider;var $slide_video_container=$this_slider.find('.et-pb-active-slide .et_pb_slide_video');var slide_video_container_height=parseFloat($slide_video_container.height());var slide_wp_video_shortcode=$this_slider.find('.et_pb_slide_video .wp-video-shortcode');slide_wp_video_shortcode.css({width:'',height:''});if(!isNaN(slide_video_container_height)){$slide_video_container.css('marginTop',"-".concat(slide_video_container_height/2,"px"));}}$et_slider.et_fix_slider_content_images=et_fix_slider_content_images;function et_fix_slider_content_images(){var $this_slider=$et_slider;var $slide_image_container=$this_slider.find('.et-pb-active-slide .et_pb_slide_image');var $slide_image=$slide_image_container.find('img');var $slide_video_container=$this_slider.find('.et-pb-active-slide .et_pb_slide_video');var $slide=$slide_image_container.closest('.et_pb_slide');var $slider=$slide.closest('.et_pb_slider');var slide_height=parseFloat($slider.innerHeight());var image_height=parseFloat(slide_height*0.8);var slide_image_container_height=parseFloat($slide_image_container.height());var slide_video_container_height=parseFloat($slide_video_container.height());if(!isNaN(image_height)){$slide_image_container.find('img').css('maxHeight',"".concat(image_height,"px"));slide_image_container_height=parseInt($slide_image_container.height());}if(!isNaN(slide_image_container_height)&&$slide.hasClass('et_pb_media_alignment_center')){$slide_image_container.css('marginTop',"-".concat(slide_image_container_height/2,"px"));// Add load jQuery event only once.
if(!$slide_image.data('hasLoadEvent')){$slide_image.data('hasLoadEvent',true);// It will fix the image position when lazy loading image is enabled.
$slide_image.on('load',function(){slide_image_container_height=parseFloat($slide_image_container.height());$slide_image_container.css('marginTop',"-".concat(slide_image_container_height/2,"px"));});}}if(!isNaN(slide_video_container_height)){$slide_video_container.css('marginTop',"-".concat(slide_video_container_height/2,"px"));}}function et_get_bg_layout_color($slide){if($slide.hasClass('et_pb_bg_layout_light')){return'et_pb_bg_layout_light';}return'et_pb_bg_layout_dark';}// fix the appearance of some modules inside the post slider
function et_fix_builder_content(){if(is_post_slider){setTimeout(function(){var $et_pb_circle_counter=$('.et_pb_circle_counter');var $et_pb_number_counter=$('.et_pb_number_counter');window.et_fix_testimonial_inner_width();if($et_pb_circle_counter.length){window.et_pb_reinit_circle_counters($et_pb_circle_counter);}if($et_pb_number_counter.length){window.et_pb_reinit_number_counters($et_pb_number_counter);}window.et_reinit_waypoint_modules();},1000);}}if(window.et_load_event_fired){'function'===typeof et_fix_slider_height&&et_fix_slider_height($et_slider);}else{$et_window.on('load',function(){'function'===typeof et_fix_slider_height&&et_fix_slider_height($et_slider);});}$et_window.on('resize.et_simple_slider',function(){et_fix_slider_height($et_slider);});$et_slider.et_slider_move_to=function(direction){$et_slide=$et_slider.closest_descendent(settings.slide);var $active_slide=$et_slide.eq(et_active_slide);$et_slider.et_animation_running=true;$et_slider.removeClass('et_slide_transition_to_next et_slide_transition_to_previous').addClass("et_slide_transition_to_".concat(direction));$et_slider.find('.et-pb-moved-slide').removeClass('et-pb-moved-slide');if('next'===direction||'previous'===direction){if('next'===direction){et_active_slide=et_active_slide+1<et_slides_number?et_active_slide+1:0;}else{et_active_slide=et_active_slide-1>=0?et_active_slide-1:et_slides_number-1;}}else{if(et_active_slide===direction){// When video is added, slider needs to be reloaded, so inline styles need to be added again
$et_slider.find('.et-pb-inactive-slide').css({'z-index':'',display:'',opacity:0});$active_slide.css({display:'block',opacity:1}).data('slide-status','active');$et_slider.et_animation_running=false;return;}et_active_slide=direction;}$et_slider.attr('data-active-slide',$et_slide.eq(et_active_slide).data('slide-id'));if(typeof et_slider_timer!=='undefined'){clearTimeout(et_slider_timer);}var $next_slide=$et_slide.eq(et_active_slide);$et_slider.trigger('slide',{current:$active_slide,next:$next_slide});if(typeof $active_slide.find('video')[0]!=='undefined'&&typeof $active_slide.find('video')[0].player!=='undefined'){$active_slide.find('video')[0].player.pause();}if(typeof $next_slide.find('video')[0]!=='undefined'&&typeof $next_slide.find('video')[0].player!=='undefined'){$next_slide.find('video')[0].player.play();}var $active_slide_video=$active_slide.find('.et_pb_video_box iframe');if($active_slide_video.length){var active_slide_video_src=$active_slide_video.attr('src');// Removes the "autoplay=1" parameter when switching slides
// by covering three possible cases:
// "?autoplay=1" at the end of the URL
active_slide_video_src=active_slide_video_src.replace(/\?autoplay=1$/,'');// "?autoplay=1" followed by another parameter
active_slide_video_src=active_slide_video_src.replace(/\?autoplay=1&(amp;)?/,'?');// "&autoplay=1" anywhere in the URL
active_slide_video_src=active_slide_video_src.replace(/&(amp;)?autoplay=1/,'');// Delays the URL update so that the cross-fade animation's smoothness is not affected
setTimeout(function(){$active_slide_video.attr({src:active_slide_video_src});},settings.fade_speed);// Restores video overlay
$active_slide_video.parents('.et_pb_video_box').next('.et_pb_video_overlay').css({display:'block',opacity:1});}$et_slider.trigger('simple_slider_before_move_to',{direction:direction,next_slide:$next_slide});$et_slide.each(function(){$(this).css('zIndex',1);});// add 'slide-status' data attribute so it can be used to determine active slide in Visual Builder
$active_slide.css('zIndex',2).removeClass('et-pb-active-slide').addClass('et-pb-moved-slide').data('slide-status','inactive');$next_slide.css({display:'block',opacity:0}).addClass('et-pb-active-slide').data('slide-status','active');et_fix_slide_video_height();et_fix_slider_content_images();et_fix_builder_content();if(settings.use_controls)$et_slider_controls.removeClass(settings.control_active_class).eq(et_active_slide).addClass(settings.control_active_class);if(settings.use_carousel&&$et_slider_carousel_controls)$et_slider_carousel_controls.removeClass(settings.control_active_class).eq(et_active_slide).addClass(settings.control_active_class);if(!settings.tabs_animation){$next_slide.animate({opacity:1},et_fade_speed);$active_slide.addClass('et_slide_transition').css({display:'list-item',opacity:1}).animate({opacity:0},et_fade_speed,function(){var active_slide_layout_bg_color=et_get_bg_layout_color($active_slide);var next_slide_layout_bg_color=et_get_bg_layout_color($next_slide);// Builder dynamically updates the slider options, so no need to set `display: none;` because it creates unwanted visual effects.
if(_utils.isBuilder){$(this).removeClass('et_slide_transition');}else{$(this).css('display','none').removeClass('et_slide_transition');}et_stop_video($active_slide);$et_slider.removeClass(active_slide_layout_bg_color).addClass(next_slide_layout_bg_color);$et_slider.et_animation_running=false;$et_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});});}else{$next_slide.css({display:'none',opacity:0});$active_slide.addClass('et_slide_transition').css({display:'block',opacity:1}).animate({opacity:0},et_fade_speed,function(){$(this).css('display','none').removeClass('et_slide_transition');$next_slide.css({display:'block',opacity:0}).animate({opacity:1},et_fade_speed,function(){$et_slider.et_animation_running=false;$et_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});$(window).trigger('resize');});});}if($next_slide.find('.et_parallax_bg').length){// reinit parallax on slide change to make sure it displayed correctly
window.et_pb_parallax_init($next_slide.find('.et_parallax_bg'));}et_slider_auto_rotate();};};$.fn.et_pb_simple_slider=function(options){return this.each(function(){var slider=$.data(this,'et_pb_simple_slider');return slider||new $.et_pb_simple_slider(this,options);});};var et_hash_module_seperator='||';var et_hash_module_param_seperator='|';function process_et_hashchange(hash){// Bail early when hash is empty
if(!hash.length){return;}var modules;var module_params;var element;if(hash.indexOf(et_hash_module_seperator,0)!==-1){modules=hash.split(et_hash_module_seperator);for(var i=0;i<modules.length;i++){module_params=modules[i].split(et_hash_module_param_seperator);element=module_params[0];module_params.shift();if(element.length&&$("#".concat(element)).length){$("#".concat(element)).trigger({type:'et_hashchange',params:module_params});}}}else{module_params=hash.split(et_hash_module_param_seperator);element=module_params[0];module_params.shift();if(element.length&&$("#".concat(element)).length){$("#".concat(element)).trigger({type:'et_hashchange',params:module_params});}}}function et_set_hash(module_state_hash){var module_id=module_state_hash.split(et_hash_module_param_seperator)[0];if(!$("#".concat(module_id)).length){return;}if(window.location.hash){var hash=window.location.hash.substring(1);// Puts hash in variable, and removes the # character
var new_hash=[];if(hash.indexOf(et_hash_module_seperator,0)!==-1){var modules=hash.split(et_hash_module_seperator);var in_hash=false;for(var i=0;i<modules.length;i++){var element=modules[i].split(et_hash_module_param_seperator)[0];if(element===module_id){new_hash.push(module_state_hash);in_hash=true;}else{new_hash.push(modules[i]);}}if(!in_hash){new_hash.push(module_state_hash);}}else{var module_params=hash.split(et_hash_module_param_seperator);var element=module_params[0];if(element!==module_id){new_hash.push(hash);}new_hash.push(module_state_hash);}hash=new_hash.join(et_hash_module_seperator);}else{hash=module_state_hash;}var yScroll=document.body.scrollTop;window.location.hash=hash;document.body.scrollTop=yScroll;}$.et_pb_simple_carousel=function(el,options){var settings=$.extend({slide_duration:500},options);var $et_carousel=$(el);var $carousel_items=$et_carousel.find('.et_pb_carousel_items');var $the_carousel_items=$carousel_items.find('.et_pb_carousel_item');$et_carousel.et_animation_running=false;$et_carousel.addClass('container-width-change-notify').on('containerWidthChanged',function(event){set_carousel_columns($et_carousel);set_carousel_height($et_carousel);});$carousel_items.data('items',$the_carousel_items.toArray());$et_carousel.data('columns_setting_up',false);$carousel_items.prepend("".concat('<div class="et-pb-slider-arrows"><a class="et-pb-slider-arrow et-pb-arrow-prev" href="#">'+'<span>').concat(et_pb_custom.previous,"</span>")+'</a><a class="et-pb-slider-arrow et-pb-arrow-next" href="#">'+"<span>".concat(et_pb_custom.next,"</span>")+'</a></div>');set_carousel_columns($et_carousel);set_carousel_height($et_carousel);var $et_carousel_next=$et_carousel.find('.et-pb-arrow-next');var $et_carousel_prev=$et_carousel.find('.et-pb-arrow-prev');$et_carousel.on('click','.et-pb-arrow-next',function(){if($et_carousel.et_animation_running)return false;$et_carousel.et_carousel_move_to('next');return false;});$et_carousel.on('click','.et-pb-arrow-prev',function(){if($et_carousel.et_animation_running)return false;$et_carousel.et_carousel_move_to('previous');return false;});// swipe support requires et-jquery-touch-mobile
$et_carousel.on('swipeleft',function(){$et_carousel.et_carousel_move_to('next');});$et_carousel.on('swiperight',function(){$et_carousel.et_carousel_move_to('previous');});function set_carousel_height($the_carousel){var carousel_items_width=$the_carousel_items.width();var carousel_items_height=$the_carousel_items.height();// Account for borders when needed
if($the_carousel.parent().hasClass('et_pb_with_border')){carousel_items_height=$the_carousel_items.outerHeight();}$carousel_items.css('height',"".concat(carousel_items_height,"px"));}function set_carousel_columns($the_carousel){var columns=3;var $carousel_parent=$the_carousel.parents('.et_pb_column:not(".et_pb_specialty_column")');if($carousel_parent.hasClass('et_pb_column_4_4')||$carousel_parent.hasClass('et_pb_column_3_4')||$carousel_parent.hasClass('et_pb_column_2_3')){if($et_window.width()>=768){columns=4;}}else if($carousel_parent.hasClass('et_pb_column_1_4')){if($et_window.width()<=480&&$et_window.width()>=980){columns=2;}}else if($carousel_parent.hasClass('et_pb_column_3_5')){columns=4;}else if($carousel_parent.hasClass('et_pb_column_1_5')||$carousel_parent.hasClass('et_pb_column_1_6')){columns=2;}if(columns===$carousel_items.data('portfolio-columns')){return;}if($the_carousel.data('columns_setting_up')){return;}$the_carousel.data('columns_setting_up',true);// store last setup column
$carousel_items.removeClass("columns-".concat($carousel_items.data('portfolio-columns')));$carousel_items.addClass("columns-".concat(columns));$carousel_items.data('portfolio-columns',columns);// kill all previous groups to get ready to re-group
if($carousel_items.find('.et-carousel-group').length){$the_carousel_items.appendTo($carousel_items);$carousel_items.find('.et-carousel-group').remove();}// setup the grouping
var the_carousel_items=$carousel_items.data('items');var $carousel_group=$('<div class="et-carousel-group active">').appendTo($carousel_items);$the_carousel_items.data('position','');if(the_carousel_items.length<=columns){$carousel_items.find('.et-pb-slider-arrows').hide();}else{$carousel_items.find('.et-pb-slider-arrows').show();}for(var position=1,x=0;x<the_carousel_items.length;x++,position++){if(x<columns){$(the_carousel_items[x]).show();$(the_carousel_items[x]).appendTo($carousel_group);$(the_carousel_items[x]).data('position',position);$(the_carousel_items[x]).addClass("position_".concat(position));}else{position=$(the_carousel_items[x]).data('position');$(the_carousel_items[x]).removeClass("position_".concat(position));$(the_carousel_items[x]).data('position','');$(the_carousel_items[x]).hide();}}$the_carousel.data('columns_setting_up',false);}/* end set_carousel_columns() */$et_carousel.et_carousel_move_to=function(direction){var $active_carousel_group=$carousel_items.find('.et-carousel-group.active');var items=$carousel_items.data('items');var columns=$carousel_items.data('portfolio-columns');$et_carousel.et_animation_running=true;var left=0;$active_carousel_group.children().each(function(){$(this).css({position:'absolute',left:"".concat(left,"px")});left+=$(this).outerWidth(true);});// Avoid unwanted horizontal scroll on body when carousel is slided
$('body').addClass('et-pb-is-sliding-carousel');// Deterimine number of carousel group item
var carousel_group_item_size=$active_carousel_group.find('.et_pb_carousel_item').length;var carousel_group_item_progress=0;if('next'==direction){var $next_carousel_group;var current_position=1;var next_position=1;var active_items_start=items.indexOf($active_carousel_group.children().first()[0]);var active_items_end=active_items_start+columns;var next_items_start=active_items_end;var next_items_end=next_items_start+columns;$next_carousel_group=$('<div class="et-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);$next_carousel_group.css({width:"".concat($active_carousel_group.innerWidth(),"px")}).show();// this is an endless loop, so it can decide internally when to break out, so that next_position
// can get filled up, even to the extent of an element having both and current_ and next_ position
for(var x=0,total=0;;x++,total++){if(total>=active_items_start&&total<active_items_end){$(items[x]).addClass("changing_position current_position current_position_".concat(current_position));$(items[x]).data('current_position',current_position);current_position++;}if(total>=next_items_start&&total<next_items_end){$(items[x]).data('next_position',next_position);$(items[x]).addClass("changing_position next_position next_position_".concat(next_position));if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).hide().addClass('delayed_container_append_dup').attr('id',"".concat($(items[x]).attr('id'),"-dup"));$(items[x]).addClass('delayed_container_append');}next_position++;}if(next_position>columns){break;}if(x>=items.length-1){x=-1;}}var sorted=$carousel_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('next_position'));var el_b_position=parseInt($(b).data('next_position'));return el_a_position<el_b_position?-1:el_a_position>el_b_position?1:0;});$(sorted).show().appendTo($next_carousel_group);var left=0;$next_carousel_group.children().each(function(){$(this).css({position:'absolute',left:"".concat(left,"px")});left+=$(this).outerWidth(true);});$active_carousel_group.animate({left:'-100%'},{duration:settings.slide_duration,progress:function progress(animation,_progress){if(_progress>carousel_group_item_progress/carousel_group_item_size){carousel_group_item_progress++;// Adding classnames on incoming/outcoming carousel item
$active_carousel_group.find(".et_pb_carousel_item:nth-child(".concat(carousel_group_item_progress,")")).addClass('item-fade-out');$next_carousel_group.find(".et_pb_carousel_item:nth-child(".concat(carousel_group_item_progress,")")).addClass('item-fade-in');}},complete:function complete(){$carousel_items.find('.delayed_container_append').each(function(){left=$("#".concat($(this).attr('id'),"-dup")).css('left');$(this).css({position:'absolute',left:left});$(this).appendTo($next_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){var position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass("position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position));$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({position:'',left:''});$(this).appendTo($carousel_items);});// Removing classnames on incoming/outcoming carousel item
$carousel_items.find('.item-fade-out').removeClass('item-fade-out');$next_carousel_group.find('.item-fade-in').removeClass('item-fade-in');// Remove horizontal scroll prevention class name on body
$('body').removeClass('et-pb-is-sliding-carousel');$active_carousel_group.remove();}});var next_left=$active_carousel_group.width()+parseInt($the_carousel_items.first().css('marginRight').slice(0,-2));$next_carousel_group.addClass('active').css({position:'absolute',top:'0px',left:"".concat(next_left,"px")});$next_carousel_group.animate({left:'0%'},{duration:settings.slide_duration,complete:function complete(){$next_carousel_group.removeClass('next').addClass('active').css({position:'',width:'',top:'',left:''});$next_carousel_group.find('.changing_position').each(function(index){var position=$(this).data('position');current_position=$(this).data('current_position');next_position=$(this).data('next_position');$(this).removeClass("container_append delayed_container_append position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position," next_position next_position_").concat(next_position));$(this).data('current_position','');$(this).data('next_position','');$(this).data('position',index+1);});$next_carousel_group.children().css({position:'',left:''});$next_carousel_group.find('.delayed_container_append_dup').remove();$et_carousel.et_animation_running=false;}});}else if('previous'==direction){var $prev_carousel_group;var current_position=columns;var prev_position=columns;var columns_span=columns-1;var active_items_start=items.indexOf($active_carousel_group.children().last()[0]);var active_items_end=active_items_start-columns_span;var prev_items_start=active_items_end-1;var prev_items_end=prev_items_start-columns_span;$prev_carousel_group=$('<div class="et-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);$prev_carousel_group.css({left:"-".concat($active_carousel_group.innerWidth(),"px"),width:"".concat($active_carousel_group.innerWidth(),"px")}).show();// this is an endless loop, so it can decide internally when to break out, so that next_position
// can get filled up, even to the extent of an element having both and current_ and next_ position
for(var _x=items.length-1,_total=items.length-1;;_x--,_total--){if(_total<=active_items_start&&_total>=active_items_end){$(items[_x]).addClass("changing_position current_position current_position_".concat(current_position));$(items[_x]).data('current_position',current_position);current_position--;}if(_total<=prev_items_start&&_total>=prev_items_end){$(items[_x]).data('prev_position',prev_position);$(items[_x]).addClass("changing_position prev_position prev_position_".concat(prev_position));if(!$(items[_x]).hasClass('current_position')){$(items[_x]).addClass('container_append');}else{$(items[_x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup').attr('id',"".concat($(items[_x]).attr('id'),"-dup"));$(items[_x]).addClass('delayed_container_append');}prev_position--;}if(prev_position<=0){break;}if(0==_x){_x=items.length;}}var sorted=$carousel_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('prev_position'));var el_b_position=parseInt($(b).data('prev_position'));return el_a_position<el_b_position?-1:el_a_position>el_b_position?1:0;});$(sorted).show().appendTo($prev_carousel_group);var left=0;$prev_carousel_group.children().each(function(){$(this).css({position:'absolute',left:"".concat(left,"px")});left+=$(this).outerWidth(true);});$active_carousel_group.animate({left:'100%'},{duration:settings.slide_duration,progress:function progress(animation,_progress2){if(_progress2>carousel_group_item_progress/carousel_group_item_size){var group_item_nth=carousel_group_item_size-carousel_group_item_progress;// Add fadeIn / fadeOut className to incoming/outcoming carousel item
$active_carousel_group.find(".et_pb_carousel_item:nth-child(".concat(group_item_nth,")")).addClass('item-fade-out');$prev_carousel_group.find(".et_pb_carousel_item:nth-child(".concat(group_item_nth,")")).addClass('item-fade-in');carousel_group_item_progress++;}},complete:function complete(){$carousel_items.find('.delayed_container_append').reverse().each(function(){left=$("#".concat($(this).attr('id'),"-dup")).css('left');$(this).css({position:'absolute',left:left});$(this).prependTo($prev_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){var position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass("position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position));$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({position:'',left:''});$(this).appendTo($carousel_items);});// Removing classnames on incoming/outcoming carousel item
$carousel_items.find('.item-fade-out').removeClass('item-fade-out');$prev_carousel_group.find('.item-fade-in').removeClass('item-fade-in');// Remove horizontal scroll prevention class name on body
$('body').removeClass('et-pb-is-sliding-carousel');$active_carousel_group.remove();}});var prev_left=-1*$active_carousel_group.width()-parseInt($the_carousel_items.first().css('marginRight').slice(0,-2));$prev_carousel_group.addClass('active').css({position:'absolute',top:'0px',left:"".concat(prev_left,"px")});$prev_carousel_group.animate({left:'0%'},{duration:settings.slide_duration,complete:function complete(){$prev_carousel_group.removeClass('prev').addClass('active').css({position:'',width:'',top:'',left:''});$prev_carousel_group.find('.delayed_container_append_dup').remove();$prev_carousel_group.find('.changing_position').each(function(index){var position=$(this).data('position');current_position=$(this).data('current_position');prev_position=$(this).data('prev_position');$(this).removeClass("container_append delayed_container_append position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position," prev_position prev_position_").concat(prev_position));$(this).data('current_position','');$(this).data('prev_position','');position=index+1;$(this).data('position',position);$(this).addClass("position_".concat(position));});$prev_carousel_group.children().css({position:'',left:''});$et_carousel.et_animation_running=false;}});}};};$.fn.et_pb_simple_carousel=function(options){return this.each(function(){var carousel=$.data(this,'et_pb_simple_carousel');return carousel||new $.et_pb_simple_carousel(this,options);});};function et_init_audio_modules(){if('undefined'===typeof jQuery.fn.mediaelementplayer){return;}getOutsideVB('.et_audio_container').each(function(){var $this=jQuery(this);if($this.find('.mejs-container').first().length>0){return;}$this.find('audio').mediaelementplayer(window._wpmejsSettings);});}$(function(){/**
       * Provide event listener for plugins to hook up to.
       */$(window).trigger('et_pb_before_init_modules');var $et_pb_slider=$('.et_pb_slider');var $et_pb_tabs=$('.et_pb_tabs');var $et_pb_video_section=$('.et_pb_section_video_bg');var $et_pb_newsletter_button=$('.et_pb_newsletter_button');var $et_pb_newsletter_input=$('.et_pb_newsletter_field .input');var $et_pb_filterable_portfolio=$('.et_pb_filterable_portfolio');var $et_pb_fullwidth_portfolio=$('.et_pb_fullwidth_portfolio');var $et_pb_gallery=$('.et_pb_gallery');var $et_pb_countdown_timer=$('.et_pb_countdown_timer');var $et_post_gallery=$('.et_post_gallery');var $et_lightbox_image=$('.et_pb_lightbox_image');var $et_pb_map=$('.et_pb_map_container');var $et_pb_circle_counter=$('.et_pb_circle_counter');var $et_pb_number_counter=$('.et_pb_number_counter');var $et_pb_parallax=$('.et_parallax_bg');var $et_pb_shop=$('.et_pb_shop');var $et_pb_post_fullwidth=$('.single.et_pb_pagebuilder_layout.et_full_width_page');var $et_pb_background_layout_hoverable=$('[data-background-layout][data-background-layout-hover]');var et_is_mobile_device=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)!==null||'standalone'in window.navigator&&!window.navigator.standalone;var et_is_ipad=navigator.userAgent.match(/iPad/);var et_is_ie9=navigator.userAgent.match(/MSIE 9.0/)!==null;var et_all_rows=$('.et_pb_row');var $et_container=window.et_pb_custom&&!window.et_pb_custom.is_builder_plugin_used?$('body'):et_all_rows;var et_container_width=$et_container.width();var et_is_vertical_fixed_nav=$('body').hasClass('et_vertical_fixed');var et_is_rtl=$('body').hasClass('rtl');var et_hide_nav=$('body').hasClass('et_hide_nav');var et_header_style_left=$('body').hasClass('et_header_style_left');var $top_header=$('#top-header');var $main_header=$('#main-header');var $main_container_wrapper=$('#page-container');var $et_transparent_nav=$('.et_transparent_nav');var $et_pb_first_row=$('body.et_pb_pagebuilder_layout .et_pb_section:first-child');var $et_main_content_first_row=$('#main-content .container:first-child');var $et_main_content_first_row_meta_wrapper=$et_main_content_first_row.find('.et_post_meta_wrapper').first();var $et_main_content_first_row_meta_wrapper_title=$et_main_content_first_row_meta_wrapper.find('h1');var $et_main_content_first_row_content=$et_main_content_first_row.find('.entry-content').first();var $et_single_post=$('body.single-post');var etRecalculateOffset=false;var et_header_height;var et_header_modifier;var et_header_offset;var et_primary_header_top;var $et_header_style_split=$('.et_header_style_split');var $et_top_navigation=$('#et-top-navigation');var $logo=$('#logo');var $et_sticky_image=$('.et_pb_image_sticky');var $et_pb_counter_amount=$('.et_pb_counter_amount');var $et_pb_carousel=$('.et_pb_carousel');var $et_menu_selector=window.et_pb_custom&&window.et_pb_custom.is_divi_theme_used?$('ul.nav'):$('.et_pb_fullwidth_menu ul.nav');var et_pb_ab_bounce_rate=window.et_pb_custom&&window.et_pb_custom.ab_bounce_rate*1000;var et_pb_ab_logged_status={};var et_animation_breakpoint='';var recaptchaApi=(0,_get.default)(window,'etCore.api.spam.recaptcha');$.each(et_pb_custom.ab_tests,function(index,test){et_pb_ab_logged_status[test.post_id]={read_page:false,read_goal:false,view_goal:false,click_goal:false,con_goal:false,con_short:false};});var grid_containers=$('.et_pb_grid_item').parent().get();var $hover_gutter_modules=$('.et_pb_gutter_hover');window.et_pb_slider_init=function($this_slider){var et_slider_settings={fade_speed:700,slide:!$this_slider.hasClass('et_pb_gallery')?'.et_pb_slide':'.et_pb_gallery_item'};if($this_slider.hasClass('et_pb_slider_no_arrows'))et_slider_settings.use_arrows=false;if($this_slider.hasClass('et_pb_slider_no_pagination'))et_slider_settings.use_controls=false;if($this_slider.hasClass('et_slider_auto')){var et_slider_autospeed_class_value=/et_slider_speed_(\d+)/g;et_slider_settings.slideshow=true;var et_slider_autospeed=et_slider_autospeed_class_value.exec($this_slider.attr('class'));et_slider_settings.slideshow_speed=null===et_slider_autospeed?10:et_slider_autospeed[1];}if($this_slider.parent().hasClass('et_pb_video_slider')){et_slider_settings.controls_below=true;et_slider_settings.append_controls_to=$this_slider.parent();setTimeout(function(){$('.et_pb_preload').removeClass('et_pb_preload');},500);}if($this_slider.hasClass('et_pb_slider_carousel'))et_slider_settings.use_carousel=true;$this_slider.et_pb_simple_slider(et_slider_settings);};var $et_top_menu=$et_menu_selector;var et_parent_menu_longpress_limit=300;var et_parent_menu_longpress_start;var et_parent_menu_click=true;var et_menu_hover_triggered=false;// log the conversion if visitor is on Thank You page and comes from the Shop module which is the Goal
if($('.et_pb_ab_shop_conversion').length&&typeof et_pb_get_cookie_value('et_pb_ab_shop_log')!=='undefined'&&''!==et_pb_get_cookie_value('et_pb_ab_shop_log')){var shop_log_data=et_pb_get_cookie_value('et_pb_ab_shop_log').split('_');var page_id=shop_log_data[0];var subject_id=shop_log_data[1];var test_id=shop_log_data[2];et_pb_ab_update_stats('con_goal',page_id,subject_id,test_id);// remove the cookie after conversion is logged
et_pb_set_cookie(0,'et_pb_ab_shop_log=true');}// log the conversion if visitor is on page with tracking shortcode
if($('.et_pb_ab_split_track').length){$('.et_pb_ab_split_track').each(function(){var tracking_test=$(this).data('test_id');var cookies_name="et_pb_ab_shortcode_track_".concat(tracking_test);if(typeof et_pb_get_cookie_value(cookies_name)!=='undefined'&&''!==et_pb_get_cookie_value(cookies_name)){var track_data=et_pb_get_cookie_value(cookies_name).split('_');var _page_id=track_data[0];var _subject_id=track_data[1];var _test_id=track_data[2];et_pb_ab_update_stats('con_short',_page_id,_subject_id,_test_id);// remove the cookie after conversion is logged
et_pb_set_cookie(0,"".concat(cookies_name,"=true"));}});}// Handle gutter hover options
if($hover_gutter_modules.length>0){$hover_gutter_modules.each(function(){var $thisEl=$(this);var originalGutter=$thisEl.data('original_gutter');var hoverGutter=$thisEl.data('hover_gutter');$thisEl.on('mouseenter',function(){$thisEl.removeClass("et_pb_gutters".concat(originalGutter));$thisEl.addClass("et_pb_gutters".concat(hoverGutter));}).on('mouseleave',function(){$thisEl.removeClass("et_pb_gutters".concat(hoverGutter));$thisEl.addClass("et_pb_gutters".concat(originalGutter));});});}// init AB Testing if enabled
if(window.et_pb_custom&&window.et_pb_custom.is_ab_testing_active){$.each(et_pb_custom.ab_tests,function(index,test){et_pb_init_ab_test(test);});}if(et_all_rows.length){et_all_rows.each(function(){var $this_row=$(this);var row_class='';row_class=et_get_column_types($this_row.find('>.et_pb_column'));if(''!==row_class){$this_row.addClass(row_class);}if($this_row.find('.et_pb_row_inner').length){$this_row.find('.et_pb_row_inner').each(function(){var $this_row_inner=$(this);row_class=et_get_column_types($this_row_inner.find('.et_pb_column'));if(''!==row_class){$this_row_inner.addClass(row_class);}});}// Fix z-index for menu modules
var zIndexIncreaseMax=$this_row.parents('.et_pb_section.section_has_divider').length?6:3;var zIndexShouldIncrease=isNaN($this_row.css('z-index'))||$this_row.css('z-index')<zIndexIncreaseMax;if($this_row.find('.et_pb_module.et_pb_menu').length&&zIndexShouldIncrease){$this_row.css('z-index',zIndexIncreaseMax);}});}function et_get_column_types($columns){var row_class='';if($columns.length){$columns.each(function(){var $column=$(this);var column_type=$column.attr('class').split('et_pb_column_')[1];var column_type_clean=typeof column_type!=='undefined'?column_type.split(' ',1)[0]:'4_4';var column_type_updated=column_type_clean.replace('_','-').trim();row_class+="_".concat(column_type_updated);});if(row_class.indexOf('1-4')!==-1||row_class.indexOf('1-5_1-5')!==-1||row_class.indexOf('1-6_1-6')!==-1){switch(row_class){case'_1-4_1-4_1-4_1-4':row_class='et_pb_row_4col';break;case'_1-5_1-5_1-5_1-5_1-5':row_class='et_pb_row_5col';break;case'_1-6_1-6_1-6_1-6_1-6_1-6':row_class='et_pb_row_6col';break;default:row_class="et_pb_row".concat(row_class);}}else{row_class='';}}return row_class;}window.et_pb_init_nav_menu($et_top_menu);$et_sticky_image.each(function(){window.et_pb_apply_sticky_image_effect($(this));});if(et_is_mobile_device){$('.et_pb_section_video_bg').each(function(){var $this_el=$(this);$this_el.closest('.et_pb_preload').removeClass('et_pb_preload');// Only remove when it has opened class.
if($this_el.hasClass('opened')){$this_el.remove();}});$('body').addClass('et_mobile_device');if(!et_is_ipad){$('body').addClass('et_mobile_device_not_ipad');}}if(et_is_ie9){$('body').addClass('et_ie9');}if($et_pb_video_section.length||_utils.isBuilder){window.et_pb_video_section_init=function($et_pb_video_section){$et_pb_video_section.find('video').mediaelementplayer({pauseOtherPlayers:false,success:function success(mediaElement,domObject){mediaElement.addEventListener('loadeddata',function(){et_pb_resize_section_video_bg($(domObject));et_pb_center_video($(domObject).closest('.mejs-video'));},false);mediaElement.addEventListener('canplay',function(){$(domObject).closest('.et_pb_preload').removeClass('et_pb_preload');},false);}});};$et_pb_video_section.length>0&&et_pb_video_section_init($et_pb_video_section);}et_init_audio_modules();if(!isBlockLayoutPreview&&$et_post_gallery.length>0){// swipe support in magnific popup only if gallery exists
var magnificPopup=$.magnificPopup.instance;$('body').on('swiperight','.mfp-container',function(){magnificPopup.prev();});$('body').on('swipeleft','.mfp-container',function(){magnificPopup.next();});$et_post_gallery.each(function(){$(this).magnificPopup({delegate:'.et_pb_gallery_image a',type:'image',removalDelay:500,gallery:{enabled:true,navigateByImgClick:true},mainClass:'mfp-fade',zoom:{enabled:window.et_pb_custom&&!window.et_pb_custom.is_builder_plugin_used,duration:500,opener:function opener(element){return element.find('img');}},autoFocusLast:false});});// prevent attaching of any further actions on click
$et_post_gallery.find('a').off('click');}if(!isBlockLayoutPreview&&($et_lightbox_image.length>0||_utils.isBuilder)){// prevent attaching of any further actions on click
$et_lightbox_image.off('click');$et_lightbox_image.on('click');window.et_pb_image_lightbox_init=function($et_lightbox_image){// Delay the initialization if magnificPopup hasn't finished loading yet.
if(!$et_lightbox_image.magnificPopup){return jQuery(window).on('load',function(){window.et_pb_image_lightbox_init($et_lightbox_image);});}$et_lightbox_image.magnificPopup({type:'image',removalDelay:500,mainClass:'mfp-fade',zoom:{enabled:window.et_pb_custom&&!window.et_pb_custom.is_builder_plugin_used,duration:500,opener:function opener(element){return element.find('img');}},autoFocusLast:false});};et_pb_image_lightbox_init($et_lightbox_image);}if($et_pb_slider.length||_utils.isBuilder){$et_pb_slider.each(function(){var $this_slider=$(this);et_pb_slider_init($this_slider);});}$et_pb_carousel=$('.et_pb_carousel');if($et_pb_carousel.length||_utils.isBuilder){$et_pb_carousel.each(function(){var $this_carousel=$(this);var et_carousel_settings={slide_duration:1000};$this_carousel.et_pb_simple_carousel(et_carousel_settings);});}if(grid_containers.length||_utils.isBuilder){$(grid_containers).each(function(){window.et_pb_set_responsive_grid($(this),'.et_pb_grid_item');});}function fullwidth_portfolio_carousel_slide($arrow){var $the_portfolio=$arrow.parents('.et_pb_fullwidth_portfolio');var $portfolio_items=$the_portfolio.find('.et_pb_portfolio_items');var $the_portfolio_items=$portfolio_items.find('.et_pb_portfolio_item');var $active_carousel_group=$portfolio_items.find('.et_pb_carousel_group.active');var slide_duration=700;var items=$portfolio_items.data('items');var columns=$portfolio_items.data('portfolio-columns');var item_width=$active_carousel_group.innerWidth()/columns;var original_item_width="".concat(100/columns,"%");if('undefined'===typeof items){return;}if($the_portfolio.data('carouseling')){return;}$the_portfolio.data('carouseling',true);$active_carousel_group.children().each(function(){$(this).css({width:"".concat(item_width+1,"px"),'max-width':"".concat(item_width,"px"),position:'absolute',left:"".concat(item_width*($(this).data('position')-1),"px")});});if($arrow.hasClass('et-pb-arrow-next')){var $next_carousel_group;var current_position=1;var next_position=1;var active_items_start=items.indexOf($active_carousel_group.children().first()[0]);var active_items_end=active_items_start+columns;var next_items_start=active_items_end;var next_items_end=next_items_start+columns;var active_carousel_width=$active_carousel_group.innerWidth();$next_carousel_group=$('<div class="et_pb_carousel_group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);$next_carousel_group.css({width:"".concat(active_carousel_width,"px"),'max-width':"".concat(active_carousel_width,"px")}).show();// this is an endless loop, so it can decide internally when to break out, so that next_position
// can get filled up, even to the extent of an element having both and current_ and next_ position
for(var x=0,total=0;;x++,total++){if(total>=active_items_start&&total<active_items_end){$(items[x]).addClass("changing_position current_position current_position_".concat(current_position));$(items[x]).data('current_position',current_position);current_position++;}if(total>=next_items_start&&total<next_items_end){$(items[x]).data('next_position',next_position);$(items[x]).addClass("changing_position next_position next_position_".concat(next_position));if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).hide().addClass('delayed_container_append_dup').attr('id',"".concat($(items[x]).attr('id'),"-dup"));$(items[x]).addClass('delayed_container_append');}next_position++;}if(next_position>columns){break;}if(x>=items.length-1){x=-1;}}var sorted=$portfolio_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('next_position'));var el_b_position=parseInt($(b).data('next_position'));return el_a_position<el_b_position?-1:el_a_position>el_b_position?1:0;});$(sorted).show().appendTo($next_carousel_group);$next_carousel_group.children().each(function(){$(this).css({width:"".concat(item_width,"px"),'max-width':"".concat(item_width,"px"),position:'absolute',left:"".concat(item_width*($(this).data('next_position')-1),"px")});});$active_carousel_group.animate({left:'-100%'},{duration:slide_duration,complete:function complete(){$portfolio_items.find('.delayed_container_append').each(function(){$(this).css({width:"".concat(item_width,"px"),'max-width':"".concat(item_width,"px"),position:'absolute',left:"".concat(item_width*($(this).data('next_position')-1),"px")});$(this).appendTo($next_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){var position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass("position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position));$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({position:'',width:'','max-width':'',left:''});$(this).appendTo($portfolio_items);});$active_carousel_group.remove();et_carousel_auto_rotate($the_portfolio);}});$next_carousel_group.addClass('active').css({position:'absolute',top:'0px',left:'100%'});$next_carousel_group.animate({left:'0%'},{duration:slide_duration,complete:function complete(){setTimeout(function(){$next_carousel_group.removeClass('next').addClass('active').css({position:'',width:'','max-width':'',top:'',left:''});$next_carousel_group.find('.delayed_container_append_dup').remove();$next_carousel_group.find('.changing_position').each(function(index){var position=$(this).data('position');current_position=$(this).data('current_position');next_position=$(this).data('next_position');$(this).removeClass("container_append delayed_container_append position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position," next_position next_position_").concat(next_position));$(this).data('current_position','');$(this).data('next_position','');$(this).data('position',index+1);});$portfolio_items.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');et_pb_set_responsive_grid($portfolio_items,'.et_pb_portfolio_item:visible');$next_carousel_group.children().css({position:'',width:original_item_width,'max-width':original_item_width,left:''});$the_portfolio.data('carouseling',false);},100);}});}else{var $prev_carousel_group;var current_position=columns;var prev_position=columns;var columns_span=columns-1;var active_items_start=items.indexOf($active_carousel_group.children().last()[0]);var active_items_end=active_items_start-columns_span;var prev_items_start=active_items_end-1;var prev_items_end=prev_items_start-columns_span;var active_carousel_width=$active_carousel_group.innerWidth();$prev_carousel_group=$('<div class="et_pb_carousel_group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);$prev_carousel_group.css({left:"-".concat(active_carousel_width,"px"),width:"".concat(active_carousel_width,"px"),'max-width':"".concat(active_carousel_width,"px")}).show();// this is an endless loop, so it can decide internally when to break out, so that next_position
// can get filled up, even to the extent of an element having both and current_ and next_ position
for(var _x2=items.length-1,_total2=items.length-1;;_x2--,_total2--){if(_total2<=active_items_start&&_total2>=active_items_end){$(items[_x2]).addClass("changing_position current_position current_position_".concat(current_position));$(items[_x2]).data('current_position',current_position);current_position--;}if(_total2<=prev_items_start&&_total2>=prev_items_end){$(items[_x2]).data('prev_position',prev_position);$(items[_x2]).addClass("changing_position prev_position prev_position_".concat(prev_position));if(!$(items[_x2]).hasClass('current_position')){$(items[_x2]).addClass('container_append');}else{$(items[_x2]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup').attr('id',"".concat($(items[_x2]).attr('id'),"-dup"));$(items[_x2]).addClass('delayed_container_append');}prev_position--;}if(prev_position<=0){break;}if(0==_x2){_x2=items.length;}}var _sorted=$portfolio_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('prev_position'));var el_b_position=parseInt($(b).data('prev_position'));return el_a_position<el_b_position?-1:el_a_position>el_b_position?1:0;});$(_sorted).show().appendTo($prev_carousel_group);$prev_carousel_group.children().each(function(){$(this).css({width:"".concat(item_width,"px"),'max-width':"".concat(item_width,"px"),position:'absolute',left:"".concat(item_width*($(this).data('prev_position')-1),"px")});});$active_carousel_group.animate({left:'100%'},{duration:slide_duration,complete:function complete(){$portfolio_items.find('.delayed_container_append').reverse().each(function(){$(this).css({width:"".concat(item_width,"px"),'max-width':"".concat(item_width,"px"),position:'absolute',left:"".concat(item_width*($(this).data('prev_position')-1),"px")});$(this).prependTo($prev_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){var position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass("position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position));$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({position:'',width:'','max-width':'',left:''});$(this).appendTo($portfolio_items);});$active_carousel_group.remove();}});$prev_carousel_group.addClass('active').css({position:'absolute',top:'0px',left:'-100%'});$prev_carousel_group.animate({left:'0%'},{duration:slide_duration,complete:function complete(){setTimeout(function(){$prev_carousel_group.removeClass('prev').addClass('active').css({position:'',width:'','max-width':'',top:'',left:''});$prev_carousel_group.find('.delayed_container_append_dup').remove();$prev_carousel_group.find('.changing_position').each(function(index){var position=$(this).data('position');current_position=$(this).data('current_position');prev_position=$(this).data('prev_position');$(this).removeClass("container_append delayed_container_append position_".concat(position," ")+"changing_position current_position current_position_".concat(current_position," prev_position prev_position_").concat(prev_position));$(this).data('current_position','');$(this).data('prev_position','');position=index+1;$(this).data('position',position);$(this).addClass("position_".concat(position));});$portfolio_items.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');et_pb_set_responsive_grid($portfolio_items,'.et_pb_portfolio_item:visible');$prev_carousel_group.children().css({position:'',width:original_item_width,'max-width':original_item_width,left:''});$the_portfolio.data('carouseling',false);},100);}});}}function set_fullwidth_portfolio_columns($the_portfolio,carousel_mode){var columns;var $portfolio_items=$the_portfolio.find('.et_pb_portfolio_items');var portfolio_items_width=$portfolio_items.width();var $the_portfolio_items=$portfolio_items.find('.et_pb_portfolio_item');var portfolio_item_count=$the_portfolio_items.length;if('undefined'===typeof $the_portfolio_items){return;}// calculate column breakpoints
if(portfolio_items_width>=1600){columns=5;}else if(portfolio_items_width>=1024){columns=4;}else if(portfolio_items_width>=768){columns=3;}else if(portfolio_items_width>=480){columns=2;}else{columns=1;}// set height of items
var portfolio_item_width=portfolio_items_width/columns;var portfolio_item_height=portfolio_item_width*0.75;if(carousel_mode){$portfolio_items.css({height:"".concat(portfolio_item_height,"px")});}$the_portfolio_items.css({height:"".concat(portfolio_item_height,"px")});if(columns===$portfolio_items.data('portfolio-columns')){return;}if($the_portfolio.data('columns_setting_up')){return;}$the_portfolio.data('columns_setting_up',true);var portfolio_item_width_percentage="".concat(100/columns,"%");$the_portfolio_items.css({width:portfolio_item_width_percentage,'max-width':portfolio_item_width_percentage});// store last setup column
$portfolio_items.removeClass("columns-".concat($portfolio_items.data('portfolio-columns')));$portfolio_items.addClass("columns-".concat(columns));$portfolio_items.data('portfolio-columns',columns);if(!carousel_mode){return $the_portfolio.data('columns_setting_up',false);}// kill all previous groups to get ready to re-group
if($portfolio_items.find('.et_pb_carousel_group').length){$the_portfolio_items.appendTo($portfolio_items);$portfolio_items.find('.et_pb_carousel_group').remove();}// setup the grouping
var the_portfolio_items=$portfolio_items.data('items');var $carousel_group=$('<div class="et_pb_carousel_group active">').appendTo($portfolio_items);if('undefined'===typeof the_portfolio_items){return;}$the_portfolio_items.data('position','');if(the_portfolio_items.length<=columns){$portfolio_items.find('.et-pb-slider-arrows').hide();}else{$portfolio_items.find('.et-pb-slider-arrows').show();}for(var position=1,x=0;x<the_portfolio_items.length;x++,position++){if(x<columns){$(the_portfolio_items[x]).show();$(the_portfolio_items[x]).appendTo($carousel_group);$(the_portfolio_items[x]).data('position',position);$(the_portfolio_items[x]).addClass("position_".concat(position));}else{position=$(the_portfolio_items[x]).data('position');$(the_portfolio_items[x]).removeClass("position_".concat(position));$(the_portfolio_items[x]).data('position','');$(the_portfolio_items[x]).hide();}}$the_portfolio.data('columns_setting_up',false);}function et_carousel_auto_rotate($carousel){if('on'===$carousel.data('auto-rotate')&&$carousel.find('.et_pb_portfolio_item').length>$carousel.find('.et_pb_carousel_group .et_pb_portfolio_item').length&&!$carousel.hasClass('et_carousel_hovered')){var et_carousel_timer=setTimeout(function(){fullwidth_portfolio_carousel_slide($carousel.find('.et-pb-arrow-next'));},$carousel.data('auto-rotate-speed'));$carousel.data('et_carousel_timer',et_carousel_timer);}}if($et_pb_fullwidth_portfolio.length||_utils.isBuilder){window.et_fullwidth_portfolio_init=function($the_portfolio,$callback){var $portfolio_items=$the_portfolio.find('.et_pb_portfolio_items');$portfolio_items.data('items',$portfolio_items.find('.et_pb_portfolio_item').toArray());$the_portfolio.data('columns_setting_up',false);if($the_portfolio.hasClass('et_pb_fullwidth_portfolio_carousel')){// add left and right arrows
$portfolio_items.prepend("".concat('<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#">'+'<span>').concat(et_pb_custom.previous,"</span>")+'</a><a class="et-pb-arrow-next" href="#">'+"<span>".concat(et_pb_custom.next,"</span>")+'</a></div>');set_fullwidth_portfolio_columns($the_portfolio,true);et_carousel_auto_rotate($the_portfolio);// swipe support
$the_portfolio.on('swiperight',function(){$(this).find('.et-pb-arrow-prev').trigger('click');});$the_portfolio.on('swipeleft',function(){$(this).find('.et-pb-arrow-next').trigger('click');});$the_portfolio.on('mouseenter',function(){$(this).addClass('et_carousel_hovered');if(typeof $(this).data('et_carousel_timer')!=='undefined'){clearInterval($(this).data('et_carousel_timer'));}}).on('mouseleave',function(){$(this).removeClass('et_carousel_hovered');et_carousel_auto_rotate($(this));});$the_portfolio.data('carouseling',false);$the_portfolio.on('click','.et-pb-slider-arrows a',function(e){fullwidth_portfolio_carousel_slide($(this));e.preventDefault();return false;});}else{// setup fullwidth portfolio grid
set_fullwidth_portfolio_columns($the_portfolio,false);}if('function'===typeof $callback){$callback();}};$et_pb_fullwidth_portfolio.each(function(){et_fullwidth_portfolio_init($(this));});}if($('.et_pb_section_video').length){window._wpmejsSettings.pauseOtherPlayers=false;}if($et_pb_filterable_portfolio.length||_utils.isBuilder){var set_filterable_portfolio_hash=function set_filterable_portfolio_hash($the_portfolio){if(!$the_portfolio.attr('id')){return;}var this_portfolio_state=[];this_portfolio_state.push($the_portfolio.attr('id'));this_portfolio_state.push($the_portfolio.find('.et_pb_portfolio_filter > a.active').data('category-slug'));if($the_portfolio.find('.et_pb_portofolio_pagination a.active').length){this_portfolio_state.push($the_portfolio.find('.et_pb_portofolio_pagination a.active').data('page'));}else{this_portfolio_state.push(1);}this_portfolio_state=this_portfolio_state.join(et_hash_module_param_seperator);et_set_hash(this_portfolio_state);};// init portfolio if .on('load') event was fired already, wait for the window load otherwise.
window.et_pb_filterable_portfolio_init=function($selector){if(typeof $selector!=='undefined'){set_filterable_portfolio_init($selector);}else{$et_pb_filterable_portfolio.each(function(){set_filterable_portfolio_init($(this));});}};window.set_filterable_portfolio_init=function($the_portfolio,$callback){var $the_portfolio_items=$the_portfolio.find('.et_pb_portfolio_items');var all_portfolio_items=$the_portfolio_items.clone();// cache for all the portfolio items
$the_portfolio.show();$the_portfolio.find('.et_pb_portfolio_item').addClass('active');$the_portfolio.css('display','block');window.set_filterable_grid_items($the_portfolio);if('function'===typeof $callback){$callback();}$the_portfolio.on('click','.et_pb_portfolio_filter a',function(e){e.preventDefault();var category_slug=$(this).data('category-slug');var $the_portfolio=$(this).parents('.et_pb_filterable_portfolio');var $the_portfolio_items=$the_portfolio.find('.et_pb_portfolio_items');if('all'==category_slug){$the_portfolio.find('.et_pb_portfolio_filter a').removeClass('active');$the_portfolio.find('.et_pb_portfolio_filter_all a').addClass('active');// remove all items from the portfolio items container
$the_portfolio_items.empty();// fill the portfolio items container with cached items from memory
$the_portfolio_items.append(all_portfolio_items.find('.et_pb_portfolio_item').clone());$the_portfolio.find('.et_pb_portfolio_item').addClass('active');}else{$the_portfolio.find('.et_pb_portfolio_filter_all').removeClass('active');$the_portfolio.find('.et_pb_portfolio_filter a').removeClass('active');$the_portfolio.find('.et_pb_portfolio_filter_all a').removeClass('active');$(this).addClass('active');// remove all items from the portfolio items container
$the_portfolio_items.empty();// fill the portfolio items container with cached items from memory
$the_portfolio_items.append(all_portfolio_items.find(".et_pb_portfolio_item.project_category_".concat($(this).data('category-slug'))).clone());$the_portfolio_items.find('.et_pb_portfolio_item').removeClass('active');$the_portfolio_items.find(".et_pb_portfolio_item.project_category_".concat($(this).data('category-slug'))).addClass('active').removeClass('inactive');}window.set_filterable_grid_items($the_portfolio);setTimeout(function(){set_filterable_portfolio_hash($the_portfolio);},500);$the_portfolio.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');et_pb_set_responsive_grid($the_portfolio,'.et_pb_portfolio_item:visible');});$the_portfolio.on('click','.et_pb_portofolio_pagination a',function(e){e.preventDefault();var to_page=$(this).data('page');var $the_portfolio=$(this).parents('.et_pb_filterable_portfolio');var $the_portfolio_items=$the_portfolio.find('.et_pb_portfolio_items');et_pb_smooth_scroll($the_portfolio,false,800);if($(this).hasClass('page-prev')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))-1;}else if($(this).hasClass('page-next')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))+1;}$(this).parents('ul').find('a').removeClass('active');$(this).parents('ul').find("a.page-".concat(to_page)).addClass('active');var current_index=$(this).parents('ul').find("a.page-".concat(to_page)).parent().index();var total_pages=$(this).parents('ul').find('li.page').length;$(this).parent().nextUntil(".page-".concat(current_index+3)).show();$(this).parent().prevUntil(".page-".concat(current_index-3)).show();$(this).parents('ul').find('li.page').each(function(i){if(!$(this).hasClass('prev')&&!$(this).hasClass('next')){if(i<current_index-3){$(this).hide();}else if(i>current_index+1){$(this).hide();}else{$(this).show();}if(total_pages-current_index<=2&&total_pages-i<=5){$(this).show();}else if(current_index<=3&&i<=4){$(this).show();}}});if(to_page>1){$(this).parents('ul').find('li.prev').show();}else{$(this).parents('ul').find('li.prev').hide();}if($(this).parents('ul').find('a.active').hasClass('last-page')){$(this).parents('ul').find('li.next').hide();}else{$(this).parents('ul').find('li.next').show();}$the_portfolio.find('.et_pb_portfolio_item').hide();$the_portfolio.find('.et_pb_portfolio_item').filter(function(index){return $(this).data('page')===to_page;}).show();window.et_pb_set_responsive_grid($the_portfolio.find('.et_pb_portfolio_items'),'.et_pb_portfolio_item');setTimeout(function(){set_filterable_portfolio_hash($the_portfolio);},500);$the_portfolio.find('.et_pb_portfolio_item').removeClass('first_in_row last_in_row');et_pb_set_responsive_grid($the_portfolio,'.et_pb_portfolio_item:visible');});$(this).on('et_hashchange',function(event){var params=event.params;$the_portfolio=$("#".concat(event.target.id));if(!$the_portfolio.find(".et_pb_portfolio_filter a[data-category-slug=\"".concat(params[0],"\"]")).hasClass('active')){$the_portfolio.find(".et_pb_portfolio_filter a[data-category-slug=\"".concat(params[0],"\"]")).trigger('click');}if(params[1]){setTimeout(function(){if(!$the_portfolio.find(".et_pb_portofolio_pagination a.page-".concat(params[1])).hasClass('active')){$the_portfolio.find(".et_pb_portofolio_pagination a.page-".concat(params[1])).addClass('active').trigger('click');}},300);}});};window.set_filterable_grid_items=function($the_portfolio){var active_category=$the_portfolio.find('.et_pb_portfolio_filter > a.active').data('category-slug');var $the_portfolio_visible_items;window.et_pb_set_responsive_grid($the_portfolio.find('.et_pb_portfolio_items'),'.et_pb_portfolio_item');if('all'===active_category){$the_portfolio_visible_items=$the_portfolio.find('.et_pb_portfolio_item');}else{$the_portfolio_visible_items=$the_portfolio.find(".et_pb_portfolio_item.project_category_".concat(active_category));}var visible_grid_items=$the_portfolio_visible_items.length;var posts_number=$the_portfolio.data('posts-number');var pages=0===posts_number?1:Math.ceil(visible_grid_items/posts_number);window.set_filterable_grid_pages($the_portfolio,pages);var visible_grid_items=0;var _page=1;$the_portfolio.find('.et_pb_portfolio_item').data('page','');$the_portfolio_visible_items.each(function(i){visible_grid_items++;if(0===parseInt(visible_grid_items%posts_number)){$(this).data('page',_page);_page++;}else{$(this).data('page',_page);}});$the_portfolio_visible_items.filter(function(){return 1==$(this).data('page');}).show();$the_portfolio_visible_items.filter(function(){return $(this).data('page')!=1;}).hide();};window.set_filterable_grid_pages=function($the_portfolio,pages){var $pagination=$the_portfolio.find('.et_pb_portofolio_pagination');if(!$pagination.length){return;}$pagination.html('<ul></ul>');if(pages<=1){return;}var $pagination_list=$pagination.children('ul');$pagination_list.append("<li class=\"prev\" style=\"display:none;\"><a href=\"#\" data-page=\"prev\" class=\"page-prev\">".concat(et_pb_custom.prev,"</a></li>"));for(var page=1;page<=pages;page++){var first_page_class=1===page?' active':'';var last_page_class=page===pages?' last-page':'';var hidden_page_class=page>=5?' style="display:none;"':'';$pagination_list.append("<li".concat(hidden_page_class," class=\"page page-").concat(page,"\"><a href=\"#\" data-page=\"").concat(page,"\" class=\"page-").concat(page).concat(first_page_class).concat(last_page_class,"\">").concat(page,"</a></li>"));}$pagination_list.append("<li class=\"next\"><a href=\"#\" data-page=\"next\" class=\"page-next\">".concat(et_pb_custom.next,"</a></li>"));};if(window.et_load_event_fired){et_pb_filterable_portfolio_init();}else{$(window).on('load',function(){et_pb_filterable_portfolio_init();});// End $(window).on('load')
}}/*  end if ( $et_pb_filterable_portfolio.length ) */if($et_pb_gallery.length||_utils.isBuilder){window.set_gallery_grid_items=function($the_gallery){var $the_gallery_items_container=$the_gallery.find('.et_pb_gallery_items');var $the_gallery_items=$the_gallery_items_container.find('.et_pb_gallery_item');var total_grid_items=$the_gallery_items.length;var posts_number_original=parseInt($the_gallery_items_container.attr('data-per_page'));var posts_number=isNaN(posts_number_original)||0===posts_number_original?4:posts_number_original;var pages=Math.ceil(total_grid_items/posts_number);window.et_pb_set_responsive_grid($the_gallery_items_container,'.et_pb_gallery_item');set_gallery_grid_pages($the_gallery,pages);var total_grid_items=0;var _page=1;$the_gallery_items.data('page','');$the_gallery_items.each(function(i){total_grid_items++;// Do some caching
var $this=$(this);if(0===parseInt(total_grid_items%posts_number)){$this.data('page',_page);_page++;}else{$this.data('page',_page);}});var visible_items=$the_gallery_items.filter(function(){return 1==$(this).data('page');}).show();$the_gallery_items.filter(function(){return $(this).data('page')!=1;}).hide();};window.set_gallery_grid_pages=function($the_gallery,pages){var $pagination=$the_gallery.find('.et_pb_gallery_pagination');if(!$pagination.length){return;}$pagination.html('<ul></ul>');if(pages<=1){$pagination.hide();return;}var $pagination_list=$pagination.children('ul');$pagination_list.append("<li class=\"prev\" style=\"display:none;\"><a href=\"#\" data-page=\"prev\" class=\"page-prev\">".concat(et_pb_custom.prev,"</a></li>"));for(var page=1;page<=pages;page++){var first_page_class=1===page?' active':'';var last_page_class=page===pages?' last-page':'';var hidden_page_class=page>=5?' style="display:none;"':'';$pagination_list.append("<li".concat(hidden_page_class," class=\"page page-").concat(page,"\"><a href=\"#\" data-page=\"").concat(page,"\" class=\"page-").concat(page).concat(first_page_class).concat(last_page_class,"\">").concat(page,"</a></li>"));}$pagination_list.append("<li class=\"next\"><a href=\"#\" data-page=\"next\" class=\"page-next\">".concat(et_pb_custom.next,"</a></li>"));};window.set_gallery_hash=function($the_gallery){if(!$the_gallery.attr('id')){return;}var this_gallery_state=[];this_gallery_state.push($the_gallery.attr('id'));if($the_gallery.find('.et_pb_gallery_pagination a.active').length){this_gallery_state.push($the_gallery.find('.et_pb_gallery_pagination a.active').data('page'));}else{this_gallery_state.push(1);}this_gallery_state=this_gallery_state.join(et_hash_module_param_seperator);et_set_hash(this_gallery_state);};window.et_pb_gallery_init=function($the_gallery){if($the_gallery.hasClass('et_pb_gallery_grid')){$the_gallery.show();set_gallery_grid_items($the_gallery);$the_gallery.on('et_hashchange',function(event){var params=event.params;$the_gallery=$("#".concat(event.target.id));var page_to=params[0];if(page_to){if(!$the_gallery.find(".et_pb_gallery_pagination a.page-".concat(page_to)).hasClass('active')){$the_gallery.find(".et_pb_gallery_pagination a.page-".concat(page_to)).addClass('active').trigger('click');}}});}};$et_pb_gallery.each(function(){var $the_gallery=$(this);et_pb_gallery_init($the_gallery);});$et_pb_gallery.data('paginating',false);window.et_pb_gallery_pagination_nav=function($the_gallery){$the_gallery.on('click','.et_pb_gallery_pagination a',function(e){e.preventDefault();var to_page=$(this).data('page');var $the_gallery=$(this).parents('.et_pb_gallery');var $the_gallery_items_container=$the_gallery.find('.et_pb_gallery_items');var $the_gallery_items=$the_gallery_items_container.find('.et_pb_gallery_item');if($the_gallery.data('paginating')){return;}$the_gallery.data('paginating',true);if($(this).hasClass('page-prev')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))-1;}else if($(this).hasClass('page-next')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))+1;}$(this).parents('ul').find('a').removeClass('active');$(this).parents('ul').find("a.page-".concat(to_page)).addClass('active');var current_index=$(this).parents('ul').find("a.page-".concat(to_page)).parent().index();var total_pages=$(this).parents('ul').find('li.page').length;$(this).parent().nextUntil(".page-".concat(current_index+3)).show();$(this).parent().prevUntil(".page-".concat(current_index-3)).show();$(this).parents('ul').find('li.page').each(function(i){if(!$(this).hasClass('prev')&&!$(this).hasClass('next')){if(i<current_index-3){$(this).hide();}else if(i>current_index+1){$(this).hide();}else{$(this).show();}if(total_pages-current_index<=2&&total_pages-i<=5){$(this).show();}else if(current_index<=3&&i<=4){$(this).show();}}});if(to_page>1){$(this).parents('ul').find('li.prev').show();}else{$(this).parents('ul').find('li.prev').hide();}if($(this).parents('ul').find('a.active').hasClass('last-page')){$(this).parents('ul').find('li.next').hide();}else{$(this).parents('ul').find('li.next').show();}$the_gallery_items.hide();var visible_items=$the_gallery_items.filter(function(index){return $(this).data('page')===to_page;}).show();$the_gallery.data('paginating',false);window.et_pb_set_responsive_grid($the_gallery_items_container,'.et_pb_gallery_item');setTimeout(function(){set_gallery_hash($the_gallery);},100);});};et_pb_gallery_pagination_nav($et_pb_gallery);// Frontend builder's interface wouldn't be able to use $et_pb_gallery as selector
// due to its react component's nature. Using more global selector works.
if(_utils.isBuilder){et_pb_gallery_pagination_nav($('#et-fb-app'));}}/*  end if ( $et_pb_gallery.length ) */if($et_pb_counter_amount.length){$et_pb_counter_amount.each(function(){window.et_bar_counters_init($(this));});}/* $et_pb_counter_amount.length */window.et_countdown_timer=function(timer){var end_date=parseInt(timer.attr('data-end-timestamp'));var current_date=new Date().getTime()/1000;var seconds_left=end_date-current_date;var days=parseInt(seconds_left/86400);days=days>0?days:0;seconds_left%=86400;var hours=parseInt(seconds_left/3600);hours=hours>0?hours:0;seconds_left%=3600;var minutes=parseInt(seconds_left/60);minutes=minutes>0?minutes:0;var seconds=parseInt(seconds_left%60);seconds=seconds>0?seconds:0;var $days_section=timer.find('.days > .value').parent('.section');var $hours_section=timer.find('.hours > .value').parent('.section');var $minutes_section=timer.find('.minutes > .value').parent('.section');var $seconds_section=timer.find('.seconds > .value').parent('.section');if(0==days){if(!$days_section.hasClass('zero')){timer.find('.days > .value').html('000').parent('.section').addClass('zero').next().addClass('zero');}}else{var days_slice=days.toString().length>=3?days.toString().length:3;timer.find('.days > .value').html("000".concat(days).slice(-days_slice));if($days_section.hasClass('zero')){$days_section.removeClass('zero').next().removeClass('zero');}}if(0===days&&0===hours){if(!$hours_section.hasClass('zero')){timer.find('.hours > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');}}else{timer.find('.hours > .value').html("0".concat(hours).slice(-2));if($hours_section.hasClass('zero')){$hours_section.removeClass('zero').next().removeClass('zero');}}if(0===days&&0===hours&&0===minutes){if(!$minutes_section.hasClass('zero')){timer.find('.minutes > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');}}else{timer.find('.minutes > .value').html("0".concat(minutes).slice(-2));if($minutes_section.hasClass('zero')){$minutes_section.removeClass('zero').next().removeClass('zero');}}if(0===days&&0===hours&&0===minutes&&0===seconds){if(!$seconds_section.hasClass('zero')){timer.find('.seconds > .value').html('00').parent('.section').addClass('zero');}}else{timer.find('.seconds > .value').html("0".concat(seconds).slice(-2));if($seconds_section.hasClass('zero')){$seconds_section.removeClass('zero').next().removeClass('zero');}}};window.et_countdown_timer_labels=function(timer){if(timer.closest('.et_pb_column_3_8').length||timer.closest('.et_pb_column_1_4').length||timer.children('.et_pb_countdown_timer_container').width()<=400){timer.find('.days .label').html(timer.find('.days').data('short'));timer.find('.hours .label').html(timer.find('.hours').data('short'));timer.find('.minutes .label').html(timer.find('.minutes').data('short'));timer.find('.seconds .label').html(timer.find('.seconds').data('short'));}else{timer.find('.days .label').html(timer.find('.days').data('full'));timer.find('.hours .label').html(timer.find('.hours').data('full'));timer.find('.minutes .label').html(timer.find('.minutes').data('full'));timer.find('.seconds .label').html(timer.find('.seconds').data('full'));}};if($et_pb_countdown_timer.length||_utils.isBuilder){window.et_pb_countdown_timer_init=function($et_pb_countdown_timer){$et_pb_countdown_timer.each(function(){var timer=$(this);et_countdown_timer_labels(timer);et_countdown_timer(timer);setInterval(function(){et_countdown_timer(timer);},1000);});};et_pb_countdown_timer_init($et_pb_countdown_timer);}window.et_pb_tabs_init=function($et_pb_tabs_all){var init_hash_for_tab=function init_hash_for_tab($et_pb_tabs){var hash=window.location.hash;if(''!==hash){var hash_value=hash.replace('#','');hash_value=/^tab\-/.test(hash_value)?hash_value:"tab-".concat(hash_value);var $et_pb_hash_el=$et_pb_tabs.find(".et_pb_tabs_controls li a[href=\"#".concat(hash_value,"\"]"));if($et_pb_hash_el.length){$et_pb_hash_el.parent().trigger('click');}}};$et_pb_tabs_all.each(function(){var $et_pb_tabs=$(this);var $et_pb_tabs_li=$et_pb_tabs.find('.et_pb_tabs_controls li');var active_slide=isTB||isBFB||isVB?0:$et_pb_tabs.find('.et_pb_tab_active').index();var slider_options={use_controls:false,use_arrows:false,slide:'.et_pb_all_tabs > div',tabs_animation:true};if(0!==active_slide){slider_options.active_slide=active_slide;}$et_pb_tabs.et_pb_simple_slider(slider_options).on('et_hashchange',function(event){var params=event.params;var $the_tabs=$("#".concat(event.target.id));var active_tab=params[0];if(!$the_tabs.find('.et_pb_tabs_controls li').eq(active_tab).hasClass('et_pb_tab_active')){$the_tabs.find('.et_pb_tabs_controls li').eq(active_tab).trigger('click');}});$et_pb_tabs_li.on('click',function(){var $this_el=$(this);var $tabs_container=$this_el.closest('.et_pb_tabs').data('et_pb_simple_slider');if($tabs_container.et_animation_running)return false;$this_el.addClass('et_pb_tab_active').siblings().removeClass('et_pb_tab_active');$tabs_container.data('et_pb_simple_slider').et_slider_move_to($this_el.index());if($this_el.closest('.et_pb_tabs').attr('id')){var tab_state=[];tab_state.push($this_el.closest('.et_pb_tabs').attr('id'));tab_state.push($this_el.index());tab_state=tab_state.join(et_hash_module_param_seperator);et_set_hash(tab_state);}return false;});init_hash_for_tab($et_pb_tabs);window.et_pb_set_tabs_height();});};if($et_pb_tabs.length||_utils.isBuilder){window.et_pb_tabs_init($et_pb_tabs);}if($et_pb_map.length||_utils.isBuilder){var et_pb_init_maps=function et_pb_init_maps(){$et_pb_map.each(function(){et_pb_map_init($(this));});};window.et_pb_map_init=function($this_map_container){if('undefined'===typeof google||'undefined'===typeof google.maps){return;}var current_mode=et_pb_get_current_window_mode();et_animation_breakpoint=current_mode;var suffix=current_mode!=='desktop'?"-".concat(current_mode):'';var prev_suffix='phone'===current_mode?'-tablet':'';var grayscale_value=$this_map_container.attr("data-grayscale".concat(suffix))||0;if(!grayscale_value){grayscale_value=$this_map_container.attr("data-grayscale".concat(prev_suffix))||$this_map_container.attr('data-grayscale')||0;}var $this_map=$this_map_container.children('.et_pb_map');var this_map_grayscale=grayscale_value;var is_draggable=et_is_mobile_device&&$this_map.data('mobile-dragging')!=='off'||!et_is_mobile_device;var infowindow_active;if(this_map_grayscale!==0){this_map_grayscale="-".concat(this_map_grayscale.toString());}// Being saved to pass lat and lang of center location.
var data_center_lat=parseFloat($this_map.attr('data-center-lat'))||0;var data_center_lng=parseFloat($this_map.attr('data-center-lng'))||0;$this_map_container.data('map',new google.maps.Map($this_map[0],{zoom:parseInt($this_map.attr('data-zoom')),center:new google.maps.LatLng(data_center_lat,data_center_lng),mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:'on'==$this_map.attr('data-mouse-wheel'),draggable:is_draggable,panControlOptions:{position:$this_map_container.is('.et_beneath_transparent_nav')?google.maps.ControlPosition.LEFT_BOTTOM:google.maps.ControlPosition.LEFT_TOP},zoomControlOptions:{position:$this_map_container.is('.et_beneath_transparent_nav')?google.maps.ControlPosition.LEFT_BOTTOM:google.maps.ControlPosition.LEFT_TOP},styles:[{stylers:[{saturation:parseInt(this_map_grayscale)}]}]}));$this_map_container.find('.et_pb_map_pin').each(function(){var $this_marker=$(this);var marker=new google.maps.Marker({position:new google.maps.LatLng(parseFloat($this_marker.attr('data-lat')),parseFloat($this_marker.attr('data-lng'))),map:$this_map_container.data('map'),title:$this_marker.attr('data-title'),icon:{url:"".concat(et_pb_custom.builder_images_uri,"/marker.png"),size:new google.maps.Size(46,43),anchor:new google.maps.Point(16,43)},shape:{coord:[1,1,46,43],type:'rect'},anchorPoint:new google.maps.Point(0,-45)});if($this_marker.find('.infowindow').length){var infowindow=new google.maps.InfoWindow({content:$this_marker.html()});google.maps.event.addListener($this_map_container.data('map'),'click',function(){infowindow.close();});google.maps.event.addListener(marker,'click',function(){if(infowindow_active){infowindow_active.close();}infowindow_active=infowindow;infowindow.open($this_map_container.data('map'),marker);// Trigger mouse hover event for responsive content swap.
$this_marker.closest('.et_pb_module').trigger('mouseleave');setTimeout(function(){$this_marker.closest('.et_pb_module').trigger('mouseenter');},1);});}});};if(window.et_load_event_fired){et_pb_init_maps();}else if(typeof google!=='undefined'&&typeof google.maps!=='undefined'){google.maps.event.addDomListener(window,'load',function(){et_pb_init_maps();});}}$('.et_pb_shop, .et_pb_wc_upsells, .et_pb_wc_related_products').each(function(){var $this_el=$(this);var icon=(0,_isUndefined.default)($this_el.data('icon'))||''===$this_el.data('icon')?'':$this_el.data('icon');var icon_tablet=(0,_isUndefined.default)($this_el.data('icon-tablet'))||''===$this_el.data('icon-tablet')?'':$this_el.data('icon-tablet');var icon_phone=(0,_isUndefined.default)($this_el.data('icon-phone'))||''===$this_el.data('icon-phone')?'':$this_el.data('icon-phone');var icon_sticky=(0,_isUndefined.default)($this_el.data('icon-sticky'))||''===$this_el.data('icon-sticky')?'':$this_el.data('icon-sticky');var $overlay=$this_el.find('.et_overlay');// Handle Extra theme.
if(!$overlay.length&&$this_el.hasClass('et_pb_wc_related_products')){$overlay=$this_el.find('.et_pb_extra_overlay');$this_el=$overlay.closest('.et_pb_module_inner').parent();icon=(0,_isUndefined.default)($this_el.data('icon'))||''===$this_el.data('icon')?'':$this_el.data('icon');icon_tablet=(0,_isUndefined.default)($this_el.data('icon-tablet'))||''===$this_el.data('icon-tablet')?'':$this_el.data('icon-tablet');icon_phone=(0,_isUndefined.default)($this_el.data('icon-phone'))||''===$this_el.data('icon-phone')?'':$this_el.data('icon-phone');icon_sticky=(0,_isUndefined.default)($this_el.data('icon-sticky'))||''===$this_el.data('icon-sticky')?'':$this_el.data('icon-sticky');}// Set data icon and inline icon class.
if(icon!==''){$overlay.attr('data-icon',icon).addClass('et_pb_inline_icon');}if(icon_tablet!==''){$overlay.attr('data-icon-tablet',icon_tablet).addClass('et_pb_inline_icon_tablet');}if(icon_phone!==''){$overlay.attr('data-icon-phone',icon_phone).addClass('et_pb_inline_icon_phone');}if(icon_sticky!==''){$overlay.attr('data-icon-sticky',icon_sticky).addClass('et_pb_inline_icon_sticky');}if($this_el.hasClass('et_pb_shop')){var $shopItems=$this_el.find('li.product');var shop_index=$this_el.attr('data-shortcode_index');var itemClass="et_pb_shop_item_".concat(shop_index);if($shopItems.length>0){$shopItems.each(function(idx,$item){$($item).addClass("".concat(itemClass,"_").concat(idx));});}}});$et_pb_background_layout_hoverable.each(function(){var $this_el=$(this);var background_layout=$this_el.data('background-layout');var background_layout_hover=$this_el.data('background-layout-hover');var background_layout_tablet=$this_el.data('background-layout-tablet');var background_layout_phone=$this_el.data('background-layout-phone');var $this_el_item;var $this_el_parent;// Switch the target element for some modules.
if($this_el.hasClass('et_pb_button_module_wrapper')){// Button, change the target to main button block.
$this_el=$this_el.find('> .et_pb_button');}else if($this_el.hasClass('et_pb_gallery')){// Gallery, add gallery item as target element.
$this_el_item=$this_el.find('.et_pb_gallery_item');$this_el=$this_el.add($this_el_item);}else if($this_el.hasClass('et_pb_post_slider')){// Post Slider, add slide item as target element.
$this_el_item=$this_el.find('.et_pb_slide');$this_el=$this_el.add($this_el_item);}else if($this_el.hasClass('et_pb_slide')){// Slider, add slider as target element.
$this_el_parent=$this_el.closest('.et_pb_slider');$this_el=$this_el.add($this_el_parent);}var layout_class_list='et_pb_bg_layout_light et_pb_bg_layout_dark et_pb_text_color_dark';var layout_class="et_pb_bg_layout_".concat(background_layout);var layout_class_hover="et_pb_bg_layout_".concat(background_layout_hover);var text_color_class='light'===background_layout?'et_pb_text_color_dark':'';var text_color_class_hover='light'===background_layout_hover?'et_pb_text_color_dark':'';// Only includes tablet class if it's needed.
if(background_layout_tablet){layout_class_list+=' et_pb_bg_layout_light_tablet et_pb_bg_layout_dark_tablet et_pb_text_color_dark_tablet';layout_class+=" et_pb_bg_layout_".concat(background_layout_tablet,"_tablet");layout_class_hover+=" et_pb_bg_layout_".concat(background_layout_hover,"_tablet");text_color_class+='light'===background_layout_tablet?' et_pb_text_color_dark_tablet':'';text_color_class_hover+='light'===background_layout_hover?' et_pb_text_color_dark_tablet':'';}// Only includes phone class if it's needed.
if(background_layout_phone){layout_class_list+=' et_pb_bg_layout_light_phone et_pb_bg_layout_dark_phone et_pb_text_color_dark_phone';layout_class+=" et_pb_bg_layout_".concat(background_layout_phone,"_phone");layout_class_hover+=" et_pb_bg_layout_".concat(background_layout_hover,"_phone");text_color_class+='light'===background_layout_phone?' et_pb_text_color_dark_phone':'';text_color_class_hover+='light'===background_layout_hover?' et_pb_text_color_dark_phone':'';}$this_el.on('mouseenter',function(){$this_el.removeClass(layout_class_list);$this_el.addClass(layout_class_hover);if($this_el.hasClass('et_pb_audio_module')&&''!==text_color_class_hover){$this_el.addClass(text_color_class_hover);}});$this_el.on('mouseleave',function(){$this_el.removeClass(layout_class_list);$this_el.addClass(layout_class);if($this_el.hasClass('et_pb_audio_module')&&''!==text_color_class){$this_el.addClass(text_color_class);}});});if($et_pb_circle_counter.length||_utils.isBuilder||$('.et_pb_ajax_pagination_container').length>0){window.et_pb_circle_counter_init=function($the_counter,animate,custom_mode){if($the_counter.width()<=0){return;}// Update animation breakpoint variable and generate suffix.
var current_mode=et_pb_get_current_window_mode();et_animation_breakpoint=current_mode;// Custom Mode is used to pass custom preview mode such as hover. Current mode is
// actual preview mode based on current window size.
var suffix='';if('undefined'!==typeof custom_mode&&''!==custom_mode){suffix="-".concat(custom_mode);}else if(current_mode!=='desktop'){suffix="-".concat(current_mode);}// Update bar background color based on active mode.
var bar_color=$the_counter.data('bar-bg-color');var mode_bar_color=$the_counter.data("bar-bg-color".concat(suffix));if(typeof mode_bar_color!=='undefined'&&mode_bar_color!==''){bar_color=mode_bar_color;}// Update bar track color based on active mode.
var track_color=$the_counter.data('color')||'#000000';var mode_track_color=$the_counter.data("color".concat(suffix));if(typeof mode_track_color!=='undefined'&&mode_track_color!==''){track_color=mode_track_color;}// Update bar track color alpha based on active mode.
var track_color_alpha=$the_counter.data('alpha')||'0.1';var mode_track_color_alpha=$the_counter.data("alpha".concat(suffix));if('undefined'!==typeof mode_track_color_alpha&&''!==mode_track_color_alpha&&!isNaN(mode_track_color_alpha)){track_color_alpha=mode_track_color_alpha;}$the_counter.easyPieChart({animate:{duration:1800,enabled:true},size:0!==$the_counter.width()?$the_counter.width():10,// set the width to 10 if actual width is 0 to avoid js errors
barColor:bar_color,trackColor:track_color,trackAlpha:track_color_alpha,scaleColor:false,lineWidth:5,onStart:function onStart(){$(this.el).find('.percent p').css({visibility:'visible'});},onStep:function onStep(from,to,percent){$(this.el).find('.percent-value').text(Math.round(parseInt(percent)));},onStop:function onStop(from,to){$(this.el).find('.percent-value').text($(this.el).data('number-value'));}});};window.et_pb_reinit_circle_counters=function($et_pb_circle_counter){$et_pb_circle_counter.each(function(){var $the_counter=$(this).find('.et_pb_circle_counter_inner');window.et_pb_circle_counter_init($the_counter,false);// Circle Counter on Hover.
$the_counter.on('mouseover',function(event){window.et_pb_circle_counter_update($the_counter,event,'hover');});// Circle Counter on "Unhover" as reset of Hover effect.
$the_counter.on('mouseleave',function(event){window.et_pb_circle_counter_update($the_counter,event);});$the_counter.on('containerWidthChanged',function(event,custom_mode){$the_counter=$(event.target);$the_counter.find('canvas').remove();$the_counter.removeData('easyPieChart');window.et_pb_circle_counter_init($the_counter,true,custom_mode);});// Update circle counter when sticky is started / ended
var stickyId=$the_counter.attr('data-sticky-id');if(stickyId){window.addEventListener('ETBuilderStickyStart',function(e){if(stickyId===e.detail.stickyId){window.et_pb_circle_counter_update($the_counter,event,'sticky');}});window.addEventListener('ETBuilderStickyEnd',function(e){if(stickyId===e.detail.stickyId){window.et_pb_circle_counter_update($the_counter,event);}});}});};window.et_pb_reinit_circle_counters($et_pb_circle_counter);}/**
       * Update circle counter easyPieChart data on custom mode.
       *
       * @since 3.25.3
       *
       * @param {jQuery} $this_counter Circle counter jQuery element.
       * @param {object} event         Event object.
       * @param {string} custom_mode   Custom view mode such as hover/desktop/tablet/phone.
       */window.et_pb_circle_counter_update=function($this_counter,event,custom_mode){if(!$this_counter.is(':visible')||'undefined'===typeof $this_counter.data('easyPieChart')){return;}// Change custom mode if upon mouse leave, it returns to sticky, not standard state
if('mouseleave'===event.type&&$this_counter.closest('.et_pb_sticky').length>0){custom_mode='sticky';}// Check circle attributes value for current event type.
if($(event.target).length>0){if('mouseover'===event.type||'mouseleave'===event.type){var has_field_value=false;// Check if one of those field value exist.
var mode_bar_color=$this_counter.data('bar-bg-color-hover');var mode_track_color=$this_counter.data('color-hover');var mode_track_color_alpha=$this_counter.data('alpha-hover');if(typeof mode_bar_color!=='undefined'&&mode_bar_color!==''){has_field_value=true;}else if(typeof mode_track_color!=='undefined'&&mode_track_color!==''){has_field_value=true;}else if(typeof mode_track_color_alpha!=='undefined'&&mode_track_color_alpha!==''){has_field_value=true;}if(!has_field_value){return;}}}// Reinit circle counter for current event.
var container_param=[];if('undefined'!==typeof custom_mode&&''!==custom_mode){container_param=[custom_mode];}$this_counter.trigger('containerWidthChanged',container_param);// If number text hasn't been printed at all in sticky event, skip disable animation
// and updating number value data because this will overwrite entire text animation
// and causing the text not rendered; this happens if the page is not positioned
// on top document when loaded and already trigger start sticky event
var isStickyEvent=['ETBuilderStickyStart','ETBuilderStickyEnd'].includes(event.type);if(isStickyEvent&&''===$this_counter.find('.percent-value').text()){return;}// Animation should be disabled here.
$this_counter.data('easyPieChart').disableAnimation();$this_counter.data('easyPieChart').update($this_counter.data('number-value'));};if($et_pb_number_counter.length||_utils.isBuilder||$('.et_pb_ajax_pagination_container').length>0){window.et_pb_reinit_number_counters=function($et_pb_number_counter){var is_firefox=$('body').hasClass('gecko');function et_format_number(number_value,separator){return number_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,separator);}if($.fn.fitText){$et_pb_number_counter.find('.percent p').fitText(0.3);}$et_pb_number_counter.each(function(){var $this_counter=$(this);var separator=$this_counter.data('number-separator');$this_counter.easyPieChart({animate:{duration:1800,enabled:true},size:is_firefox?1:0,// firefox can't print page when it contains 0 sized canvas elements.
trackColor:false,scaleColor:false,lineWidth:0,onStart:function onStart(from,to){$(this.el).addClass('active');if(from===to){$(this.el).find('.percent-value').text(et_format_number($(this.el).data('number-value'),separator));}},onStep:function onStep(from,to,percent){if(percent!=to)$(this.el).find('.percent-value').text(et_format_number(Math.round(parseInt(percent)),separator));},onStop:function onStop(from,to){$(this.el).find('.percent-value').text(et_format_number($(this.el).data('number-value'),separator));}});});};window.et_pb_reinit_number_counters($et_pb_number_counter);}window.et_apply_parallax=function(){if(!$(this).length||'undefined'===typeof $(this)||'undefined'===typeof $(this).offset()){return;}var $parallaxWindow=$et_top_window;if(isTB){$parallaxWindow=top_window.jQuery('#et-fb-app');}else if(isScrollOnAppWindow()){$parallaxWindow=$(window);}var $this=$(this);var $parent=$this.parent();var element_top=isBuilderModeZoom()?$this.offset().top/2:$this.offset().top;var window_top=$parallaxWindow.scrollTop();if($parent.hasClass('et_is_animating')){return;}if(isBlockLayoutPreview){// Preview offset is what is changing on gutenberg due to window scroll
// happens on `.edit-post-layout__content`
var blockPreviewId="#divi-layout-iframe-".concat(ETBlockLayoutModulesScript.blockId);var previewOffsetTop=top_window.jQuery(blockPreviewId).offset().top;element_top+=previewOffsetTop;}var y_pos=(window_top+$et_top_window.height()-element_top)*0.3;var main_position;var $parallax_container;main_position="translate(0, ".concat(y_pos,"px)");// handle specific parallax container in VB
if($this.children('.et_parallax_bg_wrap').length>0){$parallax_container=$this.children('.et_parallax_bg_wrap').find('.et_parallax_bg');}else{$parallax_container=$this.children('.et_parallax_bg');}$parallax_container.css({'-webkit-transform':main_position,'-moz-transform':main_position,'-ms-transform':main_position,transform:main_position});};window.et_parallax_set_height=function(){var $this=$(this);var isFullscreen=_utils.isBuilder&&$this.parent('.et_pb_fullscreen').length;var parallaxHeight=isFullscreen&&$et_top_window.height()>$this.innerHeight()?$et_top_window.height():$this.innerHeight();var bg_height=$et_top_window.height()*0.3+parallaxHeight;// Add BFB metabox to top window offset on parallax image height to avoid parallax displays its
// background while scrolling because the image height is too short. This is required since BFB
// tracks parent window scroll event and BFB metabox has offset top to the top window
if(isBFB){bg_height+=top_window.jQuery('#et_pb_layout .inside').offset().top;}$this.find('.et_parallax_bg').css({height:"".concat(bg_height,"px")});};// Emulate CSS Parallax (background-attachment: fixed) effect via absolute image positioning
window.et_apply_builder_css_parallax=function(){// This callback is for builder and layout block preview
if(!_utils.isBuilder&&!isBlockLayoutPreview){return;}var $this_parent=$(this);var $this_parallax=$this_parent.children('.et_parallax_bg');// Remove inline styling to avoid unwanted result first
$this_parallax.css({width:'',height:'',top:'',left:'',backgroundAttachment:''});// Bail if window scroll happens on app window (visual builder desktop mode)
if(isScrollOnAppWindow()&&!isTB){return;}var $parallaxWindow=isTB?top_window.jQuery('#et-fb-app'):$et_top_window;var parallaxWindowScrollTop=$parallaxWindow.scrollTop();var backgroundOffset=isBFB?top_window.jQuery('#et_pb_layout .inside').offset().top:0;var heightMultiplier=isBuilderModeZoom()?2:1;var parentOffset=$this_parent.offset();var parentOffsetTop=isBuilderModeZoom()?parentOffset.top/2:parentOffset.top;if(isBlockLayoutPreview){// Important: in gutenberg, scroll doesn't happen on window; it's here instead
$parallaxWindow=top_window.jQuery((0,_selectors.getContentAreaSelector)(top_window,true));// Background offset is relative to block's preview iframe
backgroundOffset=top_window.jQuery("#divi-layout-iframe-".concat(ETBlockLayoutModulesScript.blockId)).offset().top;// Scroll happens on DOM which has fixed positioning. Hence
parallaxWindowScrollTop=$parallaxWindow.offset().top;}$this_parallax.css({width:"".concat($(window).width(),"px"),height:"".concat($parallaxWindow.innerHeight()*heightMultiplier,"px"),top:"".concat(parallaxWindowScrollTop-backgroundOffset-parentOffsetTop,"px"),left:"".concat(0-parentOffset.left,"px"),backgroundAttachment:'scroll'});};function et_toggle_animation_callback(initial_toggle_state,$module,$section){if('closed'===initial_toggle_state){$module.removeClass('et_pb_toggle_close').addClass('et_pb_toggle_open');}else{$module.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');}if($section.hasClass('et_pb_section_parallax')&&!$section.children().hasClass('et_pb_parallax_css')){et_parallax_set_height.bind($section)();}window.et_reinit_waypoint_modules();}// Disable hover event when user opening toggle on mobile.
$('.et_pb_accordion').on('touchstart',function(e){// Ensure to disable only on mobile.
if('desktop'!==et_pb_get_current_window_mode()){var $target=$(e.target);// Only disable when user click to open the toggle.
if($target.hasClass('et_pb_toggle_title')||$target.hasClass('et_fb_toggle_overlay')){e.preventDefault();// Trigger click event to open the toggle.
$target.trigger('click');}}});$('body').on('click','.et_pb_toggle_title, .et_fb_toggle_overlay',function(){var $this_heading=$(this);var $module=$this_heading.closest('.et_pb_toggle');var $section=$module.parents('.et_pb_section');var $content=$module.find('.et_pb_toggle_content');var $accordion=$module.closest('.et_pb_accordion');var is_accordion=$accordion.length;var is_accordion_toggling=$accordion.hasClass('et_pb_accordion_toggling');var window_offset_top=$(window).scrollTop();var fixed_header_height=0;var initial_toggle_state=$module.hasClass('et_pb_toggle_close')?'closed':'opened';var $accordion_active_toggle;var module_offset;if(is_accordion){if($module.hasClass('et_pb_toggle_open')||is_accordion_toggling){return false;}$accordion.addClass('et_pb_accordion_toggling');$accordion_active_toggle=$module.siblings('.et_pb_toggle_open');}if($content.is(':animated')){return;}$content.slideToggle(700,function(){et_toggle_animation_callback(initial_toggle_state,$module,$section);});if(is_accordion){var accordionCompleteTogglingCallback=function accordionCompleteTogglingCallback(){$accordion_active_toggle.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');$accordion.removeClass('et_pb_accordion_toggling');module_offset=$module.offset();// Calculate height of fixed nav
if($('#wpadminbar').length){fixed_header_height+=$('#wpadminbar').height();}if($('#top-header').length){fixed_header_height+=$('#top-header').height();}if($('#main-header').length&&!window.et_is_vertical_nav){fixed_header_height+=$('#main-header').height();}// Compare accordion offset against window's offset and adjust accordingly
if(window_offset_top+fixed_header_height>module_offset.top){$('html, body').animate({scrollTop:module_offset.top-fixed_header_height-50});}};// slideToggle collapsing mechanism (display:block, sliding, then display: none)
// doesn't work if the DOM is not "visible" (no height / width at all) which can
// happen if the accordion item has no content on desktop mode but has in hover
if($accordion_active_toggle.find('.et_pb_toggle_content').is(':visible')){$accordion_active_toggle.find('.et_pb_toggle_content').slideToggle(700,accordionCompleteTogglingCallback);}else{$accordion_active_toggle.find('.et_pb_toggle_content').hide();accordionCompleteTogglingCallback();}}});// Email Validation
// Use the regex defined in the HTML5 spec for input[type=email] validation
// (see https://www.w3.org/TR/2016/REC-html51-20161101/sec-forms.html#email-state-typeemail)
var et_email_reg_html5=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;/**
      * Verifies that an email is valid similar to how WordPress `is_email()` method works.
      *
      * Does not grok i18n domains. Not RFC compliant.
      *
      * @param string email      Email address to verify.
      * @return bool Valid true on success, false on failure.
      */var et_is_email=function et_is_email(email){// Test for the minimum length the email can be.
if(6>email.length){return false;}// Test for an @ character after the first position.
if(false===php_strpos(email,'@',1)){return false;}// Split out the local and domain parts.
var parts=email.split('@',2);var local=parts[0];var domain=parts[1];// LOCAL PART
// Test for invalid characters.
if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(local)){return false;}// DOMAIN PART
// Test for sequences of periods.
if(/\.{2,}/.test(domain)){return false;}// Test for leading and trailing periods and whitespace.
if(php_trim(domain," \t\n\r\0\x0B.")!==domain){return false;}// Split the domain into subs.
var subs=domain.split('.');// Assume the domain will have at least two subs.
if(2>subs.length){return false;}// Loop through each sub.
for(var i in subs){var sub=subs[i];// Test for leading and trailing hyphens and whitespace.
if(php_trim(sub," \t\n\r\0\x0B-")!==sub){return false;}// Test for invalid characters
if(!/^[a-z0-9-]+$/i.test(sub)){return false;}}// Congratulations.
return true;// Analog of PHP function `trim` (https://www.php.net/manual/en/function.trim.php) written in JavaScript
function php_trim(str,charlist){var whitespace=[' ','\n','\r','\t','\f','\x0b','\xa0',"\u2000","\u2001","\u2002","\u2003","\u2004","\u2005","\u2006","\u2007","\u2008","\u2009","\u200A","\u200B","\u2028","\u2029","\u3000"].join('');var l=0;var i=0;str+='';if(charlist){whitespace=(charlist+'').replace(/([[\]().?/*{}+$^:])/g,'$1');}l=str.length;for(i=0;i<l;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}l=str.length;for(i=l-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}return whitespace.indexOf(str.charAt(0))===-1?str:'';}// Analog of PHP function `strpos` written in JavaScript
function php_strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,offset||0);return i===-1?false:i;}};var $et_contact_container=$('.et_pb_contact_form_container');var is_recaptcha_enabled=!_utils.isBuilder&&$('.et_pb_module.et_pb_recaptcha_enabled').length>0;var $recaptchaScripts=document.body.innerHTML.match(/<script [^>]*src="[^"].*google.com\/recaptcha\/api.js\?render.*"[^>]*>([\s\S]*?)<\/script>/gmi);var $diviRecaptchaScript=$('#et-recaptcha-v3-js');var nonDiviRecaptchaFound=$recaptchaScripts&&$recaptchaScripts.length>$diviRecaptchaScript.length;// Make sure recaptcha badge is visible if recaptcha from 3rd party plugin found or we have module with spam protection on page
if(!_utils.isBuilder&&(nonDiviRecaptchaFound||is_recaptcha_enabled&&recaptchaApi&&recaptchaApi.isEnabled())){$('body').addClass('et_pb_recaptcha_enabled');}if($et_contact_container.length){$et_contact_container.each(function(){var $this_contact_container=$(this);var $et_contact_form=$this_contact_container.find('form');var redirect_url=typeof $this_contact_container.data('redirect_url')!=='undefined'?$this_contact_container.data('redirect_url'):'';$et_contact_form.find('input[type=checkbox]').on('change',function(){var $checkbox=$(this);var $checkbox_field=$checkbox.siblings('input[type=text]').first();var is_checked=$checkbox.prop('checked');$checkbox_field.val(is_checked?$checkbox_field.data('checked'):$checkbox_field.data('unchecked'));});$et_contact_form.on('submit',function(event){event.preventDefault();var $this_contact_form=$(this);if(true===$this_contact_form.data('submitted')){// Previously submitted, do not submit again
return;}var $this_inputs=$this_contact_form.find('input[type=text], .et_pb_checkbox_handle, .et_pb_contact_field[data-type="radio"], textarea, select');var $captcha_field=$this_contact_form.find('.et_pb_contact_captcha');var $et_contact_message=$this_contact_container.find('.et-pb-contact-message');var form_unique_id=typeof $this_contact_container.data('form_unique_num')!=='undefined'?$this_contact_container.data('form_unique_num'):0;var this_et_contact_error=false;var et_message='';var et_fields_message='';var inputs_list=[];var hidden_fields=[];var tokenDeferred=$.Deferred();// Only process through recaptcha if the module has spam protection enabled and the recaptcha core api exists.
if(recaptchaApi&&$this_contact_container.hasClass('et_pb_recaptcha_enabled')){recaptchaApi.interaction("Divi/Module/ContactForm/".concat(form_unique_id)).then(function(token){tokenDeferred.resolve(token);});}else{tokenDeferred.resolve('');}$.when(tokenDeferred).done(function(token){et_message='<ul>';$this_inputs.removeClass('et_contact_error');$this_inputs.each(function(){var $this_el=$(this);var $this_wrapper=false;if('checkbox'===$this_el.data('field_type')){$this_wrapper=$this_el.parents('.et_pb_contact_field');$this_wrapper.removeClass('et_contact_error');}if('radio'===$this_el.data('type')){$this_el=$this_el.find('input[type="radio"]');$this_wrapper=$this_el.parents('.et_pb_contact_field');}var this_id=$this_el.attr('id');var this_val=$this_el.val();var this_label=$this_el.siblings('label').first().text();var field_type=typeof $this_el.data('field_type')!=='undefined'?$this_el.data('field_type'):'text';var required_mark=typeof $this_el.data('required_mark')!=='undefined'?$this_el.data('required_mark'):'not_required';var original_id=typeof $this_el.data('original_id')!=='undefined'?$this_el.data('original_id'):'';var unchecked=false;var default_value;// radio field properties adjustment
if('radio'===field_type){if(0!==$this_wrapper.find('input[type="radio"]').length){field_type='radio';var $firstRadio=$this_wrapper.find('input[type="radio"]').first();required_mark=typeof $firstRadio.data('required_mark')!=='undefined'?$firstRadio.data('required_mark'):'not_required';this_val='';if($this_wrapper.find('input[type="radio"]:checked')){this_val=$this_wrapper.find('input[type="radio"]:checked').val();}}this_label=$this_wrapper.find('.et_pb_contact_form_label').text();this_id=$this_wrapper.find('input[type="radio"]').first().attr('name');original_id=$this_wrapper.attr('data-id');if(0===$this_wrapper.find('input[type="radio"]:checked').length){unchecked=true;}}// radio field properties adjustment
if('checkbox'===field_type){this_val='';if(0!==$this_wrapper.find('input[type="checkbox"]').length){field_type='checkbox';var $checkboxHandle=$this_wrapper.find('.et_pb_checkbox_handle');required_mark=typeof $checkboxHandle.data('required_mark')!=='undefined'?$checkboxHandle.data('required_mark'):'not_required';if($this_wrapper.find('input[type="checked"]:checked')){this_val=[];$this_wrapper.find('input[type="checkbox"]:checked').each(function(){this_val.push($(this).val());});this_val=this_val.join(', ');}}$this_wrapper.find('.et_pb_checkbox_handle').val(this_val);this_label=$this_wrapper.find('.et_pb_contact_form_label').text();// In case user did not add field name, try to use label from the checkbox value
if(0===this_label.trim().length){var $checkboxes=$this_wrapper.find('.et_pb_contact_field_checkbox input[type="checkbox"]');if($checkboxes.length>0){var _checkbox_labels=[];$checkboxes.each(function(){_checkbox_labels.push($(this).val());});this_label=_checkbox_labels.join(', ');// In case user uses an empty checkbox, use the field type for error message instead of default message about captcha
if(0===this_label.trim().length){this_label=et_pb_custom.wrong_checkbox;}}}this_id=$this_wrapper.find('.et_pb_checkbox_handle').attr('name');original_id=$this_wrapper.attr('data-id');if(0===$this_wrapper.find('input[type="checkbox"]:checked').length){unchecked=true;}}// Escape double quotes in label
this_label=this_label.replace(/"/g,'&quot;');// Store the labels of the conditionally hidden fields so that they can be
// removed later if a custom message pattern is enabled
if(!$this_el.is(':visible')&&$this_el.parents('[data-conditional-logic]').length&&'hidden'!==$this_el.attr('type')&&'radio'!==$this_el.attr('type')){hidden_fields.push(original_id);return;}if(('hidden'===$this_el.attr('type')||'radio'===$this_el.attr('type'))&&!$this_el.parents('.et_pb_contact_field').is(':visible')){hidden_fields.push(original_id);return;}// add current field data into array of inputs
if(typeof this_id!=='undefined'){inputs_list.push({field_id:this_id,original_id:original_id,required_mark:required_mark,field_type:field_type,field_label:this_label});}// add error message for the field if it is required and empty
if('required'===required_mark&&(''===this_val||true===unchecked)&&!$this_el.is('[id^="et_pb_contact_et_number_"]')){if(false===$this_wrapper){$this_el.addClass('et_contact_error');}else{$this_wrapper.addClass('et_contact_error');}this_et_contact_error=true;default_value=this_label;if(''===default_value){default_value=et_pb_custom.captcha;}et_fields_message+="<li>".concat(default_value,"</li>");}// add error message if email field is not empty and fails the email validation
if('email'===field_type){// remove trailing/leading spaces and convert email to lowercase
var processed_email=this_val.trim().toLowerCase();var is_valid_email=et_is_email(processed_email);if(''!==processed_email&&this_label!==processed_email&&!is_valid_email){$this_el.addClass('et_contact_error');this_et_contact_error=true;if(!is_valid_email){et_message+="<li>".concat(et_pb_custom.invalid,"</li>");}}}});// check the captcha value if required for current form
if($captcha_field.length&&''!==$captcha_field.val()){var first_digit=parseInt($captcha_field.data('first_digit'));var second_digit=parseInt($captcha_field.data('second_digit'));if(parseInt($captcha_field.val())!==first_digit+second_digit){et_message+="<li>".concat(et_pb_custom.wrong_captcha,"</li>");this_et_contact_error=true;// generate new digits for captcha
first_digit=Math.floor(Math.random()*15+1);second_digit=Math.floor(Math.random()*15+1);// set new digits for captcha
$captcha_field.data('first_digit',first_digit);$captcha_field.data('second_digit',second_digit);// clear captcha input value
$captcha_field.val('');// regenerate captcha on page
$this_contact_form.find('.et_pb_contact_captcha_question').empty().append("".concat(first_digit," + ").concat(second_digit));}}if(!this_et_contact_error){// Mark this form as `submitted` to prevent repeated processing.
$this_contact_form.data('submitted',true);var $href=$this_contact_form.attr('action');var form_data=$this_contact_form.serializeArray();form_data.push({name:"et_pb_contact_email_fields_".concat(form_unique_id),value:JSON.stringify(inputs_list)});form_data.push({name:'token',value:token});if(hidden_fields.length>0){form_data.push({name:"et_pb_contact_email_hidden_fields_".concat(form_unique_id),value:JSON.stringify(hidden_fields)});}$this_contact_container.removeClass('et_animated').removeAttr('style').fadeTo('fast',0.2,function(){$this_contact_container.load("".concat($href," #").concat($this_contact_container.attr('id'),"> *"),form_data,function(responseText,textStatus){if('error'===textStatus){var $message=$("#".concat($this_contact_container.attr('id')),responseText);if($message.length>0){// The response is an error but we have a form response message so
// this is most likely a contact form on a 404 page or similar.
// In this case, jQuery will not load the html since it treats
// the request as failed so we have to do it manually.
$this_contact_container.html($message);}}if(!$(responseText).find('.et_pb_contact_error_text').length){et_pb_maybe_log_event($this_contact_container,'con_goal');// redirect if redirect URL is not empty and no errors in contact form
if(''!==redirect_url){window.location.href=redirect_url;}}$this_contact_container.fadeTo('fast',1);});});}et_message+='</ul>';if(''!==et_fields_message){if(et_message!=='<ul></ul>'){et_message="<p class=\"et_normal_padding\">".concat(et_pb_custom.contact_error_message,"</p>").concat(et_message);}et_fields_message="<ul>".concat(et_fields_message,"</ul>");et_fields_message="<p>".concat(et_pb_custom.fill_message,"</p>").concat(et_fields_message);et_message=et_fields_message+et_message;}if(et_message!=='<ul></ul>'){$et_contact_message.html(et_message);// If parent of this contact form uses parallax
if($this_contact_container.parents('.et_pb_section_parallax').length){$this_contact_container.parents('.et_pb_section_parallax').each(function(){var $parallax_element=$(this);var $parallax=$parallax_element.children('.et_parallax_bg');var is_true_parallax=!$parallax.hasClass('et_pb_parallax_css');if(is_true_parallax){$et_window.trigger('resize');}});}}});});});}window.et_pb_play_overlayed_video=function($play_video){var $this=$play_video;var $video_image=$this.closest('.et_pb_video_overlay');var $wrapper=$this.closest('.et_pb_video, .et_main_video_container, .et_pb_video_wrap');var $video_iframe=$wrapper.find('iframe');var is_embedded=$video_iframe.length>0;var is_fb_video=$wrapper.find('.fb-video').length;var video_iframe_src;var video_iframe_src_splitted;var video_iframe_src_autoplay;if(is_embedded){if(is_fb_video&&'undefined'!==typeof $video_iframe[2]){// Facebook uses three http/https/iframe
$video_iframe=$($video_iframe[2]);}// Add autoplay parameter to automatically play embedded content when overlay is clicked
video_iframe_src=$video_iframe.attr('src');video_iframe_src_splitted=video_iframe_src.split('?');if(video_iframe_src.indexOf('autoplay=')!==-1){return;}if(typeof video_iframe_src_splitted[1]!=='undefined'){video_iframe_src_autoplay="".concat(video_iframe_src_splitted[0],"?autoplay=1&amp;").concat(video_iframe_src_splitted[1]);}else{video_iframe_src_autoplay="".concat(video_iframe_src_splitted[0],"?autoplay=1");}$video_iframe.attr({src:video_iframe_src_autoplay});}else{$wrapper.find('video').get(0).play();}$video_image.fadeTo(500,0,function(){var $image=$(this);$image.css('display','none');});};$('.et_pb_post .et_pb_video_overlay, .et_pb_video .et_pb_video_overlay, .et_pb_video_wrap .et_pb_video_overlay').on('click',function(){var $this=$(this);et_pb_play_overlayed_video($this);return false;});window.et_pb_resize_section_video_bg=function($video){var $element=typeof $video!=='undefined'?$video.closest('.et_pb_section_video_bg'):$('.et_pb_section_video_bg');$element.each(function(){var $this_el=$(this);if(isInsideVB($this_el)){$this_el.removeAttr('data-ratio');$this_el.find('video').removeAttr('style');}var $video=$this_el.find('video');var el_width=$video.prop('videoWidth')||parseInt($video.width());var el_height=$video.prop('videoHeight')||parseInt($video.height());var ratio=el_width/el_height;var $video_elements=$this_el.find('.mejs-video, video, object').css('margin','0px');var $container=$this_el.closest('.et_pb_section_video').length?$this_el.closest('.et_pb_section_video'):$this_el.closest('.et_pb_slides');var body_width=$container.innerWidth();var container_height=$container.innerHeight();var width;var height;if('undefined'===typeof $this_el.attr('data-ratio')&&!isNaN(ratio)){$this_el.attr('data-ratio',ratio);}if(body_width/container_height<ratio){width=container_height*ratio;height=container_height;}else{width=body_width;height=body_width/ratio;}$video_elements.width(width).height(height);// need to re-set the values to make it work correctly in Frontend builder
if(_utils.isBuilder){setTimeout(function(){$video_elements.width(width).height(height);},0);}});};window.et_pb_center_video=function($video){var $element=typeof $video!=='undefined'?$video:$('.et_pb_section_video_bg .mejs-video');if(!$element.length){return;}$element.each(function(){var $this_el=$(this);et_pb_adjust_video_margin($this_el);// need to re-calculate the values in Frontend builder
if(isInsideVB($this_el)){setTimeout(function(){et_pb_adjust_video_margin($this_el);},0);}if(typeof $video!=='undefined'){if($video.closest('.et_pb_slider').length&&!$video.closest('.et_pb_first_video').length){return false;}}});};window.et_pb_adjust_video_margin=function($el){var $video_width=$el.width()/2;var $video_width_negative=0-$video_width;$el.css('margin-left',"".concat($video_width_negative,"px"));};function et_fix_slider_height($slider){var $this_slider=$slider||$et_pb_slider;if(!$this_slider||!$this_slider.length){return;}$this_slider.each(function(){var $slide_section=$(this).parent('.et_pb_section');var $slides=$(this).find('.et_pb_slide');var $slide_containers=$slides.find('.et_pb_container');var max_height=0;var image_margin=0;var need_image_margin_top=$(this).hasClass('et_pb_post_slider_image_top');var need_image_margin_bottom=$(this).hasClass('et_pb_post_slider_image_bottom');// If this is appears at the first section beneath transparent nav, skip it
// leave it to et_fix_page_container_position()
if($slide_section.is('.et_pb_section_first')){return true;}$slide_containers.css('height','');// make slides visible to calculate the height correctly
$slides.addClass('et_pb_temp_slide');if('object'===_typeof($(this).data('et_pb_simple_slider'))){$(this).data('et_pb_simple_slider').et_fix_slider_content_images();}$slides.each(function(){var height=parseFloat($(this).innerHeight());var $slide_image=$(this).find('.et_pb_slide_image');var adjustedHeight=parseFloat($(this).data('adjustedHeight'));var autoTopPadding=isNaN(adjustedHeight)?0:adjustedHeight;// reduce the height by autopadding value if slider height was adjusted. This is required in VB.
height=autoTopPadding&&autoTopPadding<height?height-autoTopPadding:height;if(need_image_margin_top||need_image_margin_bottom){if($slide_image.length){// get the margin from slides with image
image_margin=need_image_margin_top?parseFloat($slide_image.css('margin-top')):parseFloat($slide_image.css('margin-bottom'));image_margin+=10;}else{// add class to slides without image to adjust their height accordingly
$(this).find('.et_pb_container').addClass('et_pb_no_image');}}// mark the slides without content
if(0===$(this).find('.et_pb_slide_description').length||0===$(this).find('.et_pb_slide_description').html().trim().length){$(this).find('.et_pb_container').addClass('et_pb_empty_slide');}if(max_height<height){max_height=height;}});if(max_height+image_margin<1){// No slides have any content. It's probably being used with background images only.
// Reset the height so that it falls back to the default padding for the content.
$slide_containers.css('height','');}else{$slide_containers.css('height',"".concat(max_height+image_margin,"px"));}// remove temp class after getting the slider height
$slides.removeClass('et_pb_temp_slide');// Show the active slide's image (if exists)
$slides.filter('.et-pb-active-slide').find('.et_pb_slide_image').children('img').addClass('active');});}var debounced_et_fix_slider_height={};// This function can end up being called a lot of times and it's quite expensive in terms of cpu due to
// recalculating styles. Debouncing it (VB only) for performances reasons.
window.et_fix_slider_height=!_utils.isBuilder?et_fix_slider_height:function($slider){var $this_slider=$slider||$et_pb_slider;if(!$this_slider||!$this_slider.length){return;}// Create a debounced function per slider
var address=$this_slider.data('address');if(!debounced_et_fix_slider_height[address]){debounced_et_fix_slider_height[address]=window.et_pb_debounce(et_fix_slider_height,100);}debounced_et_fix_slider_height[address]($slider);};/**
       * Add conditional class to prevent unwanted dropdown nav.
       */function et_fix_nav_direction(){var window_width=$(window).width();$('.nav li.et-reverse-direction-nav').removeClass('et-reverse-direction-nav');$('.nav li li ul').each(function(){var $dropdown=$(this);var dropdown_width=$dropdown.width();var dropdown_offset=$dropdown.offset();var $parents=$dropdown.parents('.nav > li');if(dropdown_offset.left>window_width-dropdown_width){$parents.addClass('et-reverse-direction-nav');}});}et_fix_nav_direction();et_pb_form_placeholders_init($('.et_pb_comments_module #commentform'));$('.et-menu-nav ul.nav').each(function(i){et_duplicate_menu($(this),$(this).closest('.et_pb_module').find('div .mobile_nav'),"mobile_menu".concat(i+1),'et_mobile_menu');});$('.et_pb_menu, .et_pb_fullwidth_menu').each(function(){var this_menu=$(this);var bg_color=this_menu.data('bg_color');if(bg_color){this_menu.find('ul').css({'background-color':bg_color});}});$et_pb_newsletter_button.on('click',function(event){et_pb_submit_newsletter($(this),event);});$et_pb_newsletter_input.on('keypress',function(event){var keyCode=event.which||event.keyCode;if(13===keyCode){var $submit=$(this).closest('form').find('.et_pb_newsletter_button');et_pb_submit_newsletter($submit,event);}});$et_pb_newsletter_button.closest('.et_pb_newsletter').find('input[type=checkbox]').on('change',function(){var $checkbox=$(this);var $checkbox_field=$checkbox.siblings('input[type=text]').first();var is_checked=$checkbox.prop('checked');$checkbox_field.val(is_checked?$checkbox_field.data('checked'):$checkbox_field.data('unchecked'));});window.et_pb_submit_newsletter=function($submit,event){if($submit.closest('.et_pb_login_form').length){et_pb_maybe_log_event($submit.closest('.et_pb_newsletter'),'con_goal');return;}if(typeof event!=='undefined'){event.preventDefault();}// check if it is a feedburner feed subscription
if($('.et_pb_feedburner_form').length>0){var $feed_name=$('.et_pb_feedburner_form input[name=uri]').val();window.open("https://feedburner.google.com/fb/a/mailverify?uri=".concat($feed_name),'et-feedburner-subscribe','scrollbars=yes,width=550,height=520');return true;}// otherwise keep things moving
var $newsletter_container=$submit.closest('.et_pb_newsletter');var $name=$newsletter_container.find('input[name="et_pb_signup_firstname"]');var $lastname=$newsletter_container.find('input[name="et_pb_signup_lastname"]');var $email=$newsletter_container.find('input[name="et_pb_signup_email"]');var list_id=$newsletter_container.find('input[name="et_pb_signup_list_id"]').val();var $error_message=$newsletter_container.find('.et_pb_newsletter_error').hide();var provider=$newsletter_container.find('input[name="et_pb_signup_provider"]').val();var account=$newsletter_container.find('input[name="et_pb_signup_account_name"]').val();var ip_address=$newsletter_container.find('input[name="et_pb_signup_ip_address"]').val();var checksum=$newsletter_container.find('input[name="et_pb_signup_checksum"]').val();var $fields_container=$newsletter_container.find('.et_pb_newsletter_fields');var $success_message=$newsletter_container.find('.et_pb_newsletter_success');var redirect_url=$newsletter_container.data('redirect_url');var redirect_query=$newsletter_container.data('redirect_query');var custom_fields={};var hidden_fields=[];var et_message='<ul>';var et_fields_message='';var $custom_fields=$fields_container.find('input[type=text], .et_pb_checkbox_handle, .et_pb_contact_field[data-type="radio"], textarea, select').filter('.et_pb_signup_custom_field, .et_pb_signup_custom_field *');$name.removeClass('et_pb_signup_error');$lastname.removeClass('et_pb_signup_error');$email.removeClass('et_pb_signup_error');$custom_fields.removeClass('et_contact_error');$error_message.html('');// Validate user input
var is_valid=true;var form=$submit.closest('.et_pb_newsletter_form form');if(form.length>0&&'function'===typeof form[0].reportValidity){// Checks HTML5 validation constraints
is_valid=form[0].reportValidity();}if($name.length>0&&!$name.val()){$name.addClass('et_pb_signup_error');is_valid=false;}if($lastname.length>0&&!$lastname.val()){$lastname.addClass('et_pb_signup_error');is_valid=false;}if(!et_email_reg_html5.test($email.val())){$email.addClass('et_pb_signup_error');is_valid=false;}if(!is_valid){return;}$custom_fields.each(function(){var $this_el=$(this);var $this_wrapper=false;if(['checkbox','booleancheckbox'].includes($this_el.data('field_type'))){$this_wrapper=$this_el.parents('.et_pb_contact_field');$this_wrapper.removeClass('et_contact_error');}if('radio'===$this_el.data('type')){$this_el=$this_el.find('input[type="radio"]');$this_wrapper=$this_el.parents('.et_pb_contact_field');}var this_id=$this_el.data('id');var this_val=$this_el.val();var this_label=$this_el.siblings('label').first().text();var field_type=typeof $this_el.data('field_type')!=='undefined'?$this_el.data('field_type'):'text';var required_mark=typeof $this_el.data('required_mark')!=='undefined'?$this_el.data('required_mark'):'not_required';var original_id=typeof $this_el.data('original_id')!=='undefined'?$this_el.data('original_id'):'';var unchecked=false;var default_value;if(!this_id){this_id=$this_el.data('original_id');}// radio field properties adjustment
if('radio'===field_type){if(0!==$this_wrapper.find('input[type="radio"]').length){var $firstRadio=$this_wrapper.find('input[type="radio"]').first();required_mark=typeof $firstRadio.data('required_mark')!=='undefined'?$firstRadio.data('required_mark'):'not_required';this_val='';if($this_wrapper.find('input[type="radio"]:checked')){this_val=$this_wrapper.find('input[type="radio"]:checked').val();}}this_label=$this_wrapper.find('.et_pb_contact_form_label').text();this_id=$this_el.data('original_id');if(!$.isEmptyObject(this_val)){custom_fields[this_id]=this_val;}if(0===$this_wrapper.find('input[type="radio"]:checked').length){unchecked=true;}if(this_val){custom_fields[this_id]=this_val;}}else if(['checkbox','booleancheckbox'].includes(field_type)){this_val={};if(0!==$this_wrapper.find('input[type="checkbox"]').length){var $checkboxHandle=$this_wrapper.find('.et_pb_checkbox_handle');required_mark=typeof $checkboxHandle.data('required_mark')!=='undefined'?$checkboxHandle.data('required_mark'):'not_required';if($this_wrapper.find('input[type="checked"]:checked')){$this_wrapper.find('input[type="checkbox"]:checked').each(function(){if('booleancheckbox'===field_type){this_val=$(this).val();}else{var field_id=$(this).data('id');this_val[field_id]=$(this).val();}});}}this_label=$this_wrapper.find('.et_pb_contact_form_label').text();// In case user did not add field name, try to use label from the checkbox value
if(0===this_label.trim().length){var $checkboxes=$this_wrapper.find('.et_pb_contact_field_checkbox input[type="checkbox"]');if($checkboxes.length>0){var _checkbox_labels=[];$checkboxes.each(function(){_checkbox_labels.push($(this).val());});this_label=_checkbox_labels.join(', ');// In case user uses an empty checkbox, use the field type for error message instead of default message about captcha
if(0===this_label.trim().length){this_label=et_pb_custom.wrong_checkbox;}}}this_id=$this_wrapper.attr('data-id');if(!$.isEmptyObject(this_val)){custom_fields[this_id]=this_val;}if(0===$this_wrapper.find('input[type="checkbox"]:checked').length){unchecked=true;}}else if('ontraport'===provider&&'select'===field_type){// Need to pass option ID as a value for dropdown menu in Ontraport
var $selected_option=$this_el.find(':selected');custom_fields[this_id]=$selected_option.length>0?$selected_option.data('id'):this_val;}else{custom_fields[this_id]=this_val;}// Need to send option id to be processed in the custom field processing
if('mailchimp'===provider&&['select','radio'].indexOf(field_type)>-1){var $selected_option='select'===field_type?$this_el.find(':selected'):$this_wrapper.find('input[type="radio"]:checked');var option_id=$selected_option.length>0?$selected_option.data('id'):null;if(null!==option_id){custom_fields[this_id]={};custom_fields[this_id][option_id]=this_val;}}// Escape double quotes in label
this_label=this_label.replace(/"/g,'&quot;');// Store the labels of the conditionally hidden fields so that they can be
// removed later if a custom message pattern is enabled
if(!$this_el.is(':visible')&&'hidden'!==$this_el.attr('type')&&'radio'!==$this_el.attr('type')){hidden_fields.push(original_id);return;}if(('hidden'===$this_el.attr('type')||'radio'===$this_el.attr('type'))&&!$this_el.parents('.et_pb_contact_field').is(':visible')){hidden_fields.push(this_id);return;}// add error message for the field if it is required and empty
if('required'===required_mark&&(''===this_val||true===unchecked)){if(false===$this_wrapper){$this_el.addClass('et_contact_error');}else{$this_wrapper.addClass('et_contact_error');}is_valid=false;default_value=this_label;if(''===default_value){default_value=et_pb_custom.captcha;}et_fields_message+="<li>".concat(default_value,"</li>");}// add error message if email field is not empty and fails the email validation
if('email'===field_type){// remove trailing/leading spaces and convert email to lowercase
var processed_email=this_val.trim().toLowerCase();var is_valid_email=et_email_reg_html5.test(processed_email);if(''!==processed_email&&this_label!==processed_email&&!is_valid_email){$this_el.addClass('et_contact_error');is_valid=false;if(!is_valid_email){et_message+="<li>".concat(et_pb_custom.invalid,"</li>");}}}});et_message+='</ul>';if(''!==et_fields_message){if(et_message!=='<ul></ul>'){et_message="<p class=\"et_normal_padding\">".concat(et_pb_custom.contact_error_message,"</p>").concat(et_message);}et_fields_message="<ul>".concat(et_fields_message,"</ul>");et_fields_message="<p>".concat(et_pb_custom.fill_message,"</p>").concat(et_fields_message);et_message=et_fields_message+et_message;}if(et_message!=='<ul></ul>'){$error_message.html(et_message).show();// If parent of this contact form uses parallax
if($newsletter_container.parents('.et_pb_section_parallax').length){$newsletter_container.parents('.et_pb_section_parallax').each(function(){var $parallax_element=$(this);var $parallax=$parallax_element.children('.et_parallax_bg');var is_true_parallax=!$parallax.hasClass('et_pb_parallax_css');if(is_true_parallax){$et_window.trigger('resize');}});}return;}function get_redirect_query(){var query={};if(!redirect_query){return'';}if($name.length>0&&redirect_query.indexOf('name')>-1){query.first_name=$name.val();}if($lastname.length>0&&redirect_query.indexOf('last_name')>-1){query.last_name=$lastname.val();}if(redirect_query.indexOf('email')>-1){query.email=$email.val();}if(redirect_query.indexOf('ip_address')>-1){query.ip_address=$newsletter_container.data('ip_address');}if(redirect_query.indexOf('css_id')>-1){query.form_id=$newsletter_container.attr('id');}return decodeURIComponent($.param(query));}var tokenDeferred=$.Deferred();// Only process through recaptcha if the module has spam protection enabled and the recaptcha core api exists.
if(recaptchaApi&&$newsletter_container.hasClass('et_pb_recaptcha_enabled')){recaptchaApi.interaction("Divi/Module/EmailOptin/List/".concat(list_id)).then(function(token){tokenDeferred.resolve(token);});}else{tokenDeferred.resolve('');}$.when(tokenDeferred).done(function(token){$.ajax({type:'POST',url:et_pb_custom.ajaxurl,dataType:'json',data:{action:'et_pb_submit_subscribe_form',et_frontend_nonce:et_pb_custom.et_frontend_nonce,et_list_id:list_id,et_firstname:$name.val(),et_lastname:$lastname.val(),et_email:$email.val(),et_provider:provider,et_account:account,et_ip_address:ip_address,et_custom_fields:custom_fields,et_hidden_fields:hidden_fields,token:token,et_checksum:checksum},beforeSend:function beforeSend(){$newsletter_container.find('.et_pb_newsletter_button').addClass('et_pb_button_text_loading').find('.et_subscribe_loader').show();},complete:function complete(){$newsletter_container.find('.et_pb_newsletter_button').removeClass('et_pb_button_text_loading').find('.et_subscribe_loader').hide();},success:function success(data){if(!data){$error_message.html(et_pb_custom.subscription_failed).show();return;}if(data.error){$error_message.show().append('<h2>').text(data.error);}if(data.success){if(redirect_url){et_pb_maybe_log_event($newsletter_container,'con_goal',function(){var query=get_redirect_query();if(query.length){if(redirect_url.indexOf('?')>-1){redirect_url+='&';}else{redirect_url+='?';}}window.location=redirect_url+query;});}else{et_pb_maybe_log_event($newsletter_container,'con_goal');$newsletter_container.find('.et_pb_newsletter_fields').hide();$success_message.show();}}}});});};window.et_fix_testimonial_inner_width=function(){var window_width=$(window).width();if(window_width>959){$('.et_pb_testimonial').each(function(){if(!$(this).is(':visible')){return;}var $testimonial=$(this);var $portrait=$testimonial.find('.et_pb_testimonial_portrait');var portrait_width=$portrait.outerWidth(true)||0;var $testimonial_descr=$testimonial.find('.et_pb_testimonial_description');var $outer_column=$testimonial.closest('.et_pb_column');if(portrait_width>90){$portrait.css('padding-bottom','0px');$portrait.width('90px');$portrait.height('90px');}var testimonial_indent=!($outer_column.hasClass('et_pb_column_1_3')||$outer_column.hasClass('et_pb_column_1_4')||$outer_column.hasClass('et_pb_column_1_5')||$outer_column.hasClass('et_pb_column_1_6')||$outer_column.hasClass('et_pb_column_2_5')||$outer_column.hasClass('et_pb_column_3_8'))?portrait_width:0;$testimonial_descr.css('margin-left',"".concat(testimonial_indent,"px"));});}else if(window_width>767){$('.et_pb_testimonial').each(function(){if(!$(this).is(':visible')){return;}var $testimonial=$(this);var $portrait=$testimonial.find('.et_pb_testimonial_portrait');var portrait_width=$portrait.outerWidth(true)||0;var $testimonial_descr=$testimonial.find('.et_pb_testimonial_description');var $outer_column=$testimonial.closest('.et_pb_column');var testimonial_indent=!($outer_column.hasClass('et_pb_column_1_4')||$outer_column.hasClass('et_pb_column_1_5')||$outer_column.hasClass('et_pb_column_1_6')||$outer_column.hasClass('et_pb_column_2_5')||$outer_column.hasClass('et_pb_column_3_8'))?portrait_width:0;$testimonial_descr.css('margin-left',"".concat(testimonial_indent,"px"));});}else{$('.et_pb_testimonial_description').removeAttr('style');}};window.et_fix_testimonial_inner_width();window.et_pb_video_background_init=function($this_video_background,this_video_background){var $video_background_wrapper=$this_video_background.closest('.et_pb_section_video_bg');// Initializing video values
var onplaying=false;var onpause=true;// On video playing toggle values
this_video_background.onplaying=function(){onplaying=true;onpause=false;};// On video pause toggle values
this_video_background.onpause=function(){onplaying=false;onpause=true;};// Entering video's top viewport
et_waypoint($video_background_wrapper,{offset:'100%',handler:function handler(direction){// This has to be placed inside handler to make it works with changing class name in VB
var is_play_outside_viewport=$video_background_wrapper.hasClass('et_pb_video_play_outside_viewport');if($this_video_background.is(':visible')&&'down'===direction){if(this_video_background.paused&&!onplaying){this_video_background.play();}}else if($this_video_background.is(':visible')&&'up'===direction){if(!this_video_background.paused&&!onpause&&!is_play_outside_viewport){this_video_background.pause();}}}},2);// Entering video's bottom viewport
et_waypoint($video_background_wrapper,{offset:function offset(){var video_height=this.element.clientHeight;var toggle_offset=Math.ceil(window.innerHeight/2);if(video_height>toggle_offset){toggle_offset=video_height;}return toggle_offset*-1;},handler:function handler(direction){// This has to be placed inside handler to make it works with changing class name in VB
var is_play_outside_viewport=$video_background_wrapper.hasClass('et_pb_video_play_outside_viewport');if($this_video_background.is(':visible')&&'up'===direction){if(this_video_background.paused&&!onplaying){this_video_background.play();}}else if($this_video_background.is(':visible')&&'down'===direction){if(!this_video_background.paused&&!onpause&&!is_play_outside_viewport){this_video_background.pause();}}}},2);};function et_waypoint($element,options,max_instances){max_instances=max_instances||$element.data('et_waypoint_max_instances')||1;var current_instances=$element.data('et_waypoint')||[];if(current_instances.length<max_instances){var new_instances=$element.waypoint(options);if(new_instances&&new_instances.length>0){current_instances.push(new_instances[0]);$element.data('et_waypoint',current_instances);}}else{// Reinit existing
for(var i=0;i<current_instances.length;i++){current_instances[i].context.refresh();}}}/**
       * Returns an offset to be used for waypoints.
       *
       * @param  {element} element  The element being passed.
       * @param  {string} fallback String of either pixels or percent.
       * @returns {string}          Returns either the fallback or 'bottom-in-view'.
       */function et_get_offset(element,fallback){// cache things so we can test.
var section_index=element.parents('.et_pb_section').index();var section_length=$('.et_pb_section').length-1;var row_index=element.parents('.et_pb_row').index();var row_length=element.parents('.et_pb_section').children().length-1;// return bottom-in-view if it is the last element otherwise return the user defined fallback
if(section_index===section_length&&row_index===row_length){return'bottom-in-view';}return fallback;}/**
       * Reinit animation styles on window resize.
       *
       * It will check current window mode then compare it with the breakpoint of last rendered
       * animation styles. If it's different, it will recall et_process_animation_data().
       *
       * @since 3.23
       */function et_pb_reinit_animation(){// If mode is changed, reinit animation data.
if(et_pb_get_current_window_mode()!==et_animation_breakpoint){et_process_animation_data(false);}}/**
       * Update map filters.
       *
       * @since 3.23
       * @since 3.24.1 Prevent reinit maps to update map filters.
       *
       * @param {jQuery} $et_pb_map
       */function et_pb_update_maps_filters($et_pb_map){// Ensure to update map filters only on preview mode changes.
if(et_pb_get_current_window_mode()===et_animation_breakpoint){return false;}$et_pb_map.each(function(){var $this_map=$(this);var this_map=$this_map.data('map');// Ensure the map exist.
if('undefined'===typeof this_map){return;}var current_mode=et_pb_get_current_window_mode();et_animation_breakpoint=current_mode;var suffix=current_mode!=='desktop'?"-".concat(current_mode):'';var prev_suffix='phone'===current_mode?'-tablet':'';var grayscale_value=$this_map.attr("data-grayscale".concat(suffix))||0;if(!grayscale_value){grayscale_value=$this_map.attr("data-grayscale".concat(prev_suffix))||$this_map.attr('data-grayscale')||0;}// Convert it to negative value as string.
if(grayscale_value!==0){grayscale_value="-".concat(grayscale_value.toString());}// Apply grayscale value on the saturation.
this_map.setOptions({styles:[{stylers:[{saturation:parseInt(grayscale_value)}]}]});});}function et_animate_element($elementOriginal){var $element=$elementOriginal;if($element.hasClass('et_had_animation')){return;}var animation_style=$element.attr('data-animation-style');var animation_repeat=$element.attr('data-animation-repeat');var animation_duration=$element.attr('data-animation-duration');var animation_delay=$element.attr('data-animation-delay');var animation_intensity=$element.attr('data-animation-intensity');var animation_starting_opacity=$element.attr('data-animation-starting-opacity');var animation_speed_curve=$element.attr('data-animation-speed-curve');var $buttonWrapper=$element.parent('.et_pb_button_module_wrapper');var isEdge=$('body').hasClass('edge');// Avoid horizontal scroll bar when section is rolled
if($element.is('.et_pb_section')&&'roll'===animation_style){$("".concat(et_frontend_scripts.builderCssContainerPrefix,", ").concat(et_frontend_scripts.builderCssLayoutPrefix)).css('overflow-x','hidden');}// Remove all the animation data attributes once the variables have been set
et_remove_animation_data($element);// Opacity can be 0 to 1 so the starting opacity is equal to the percentage number multiplied by 0.01
var starting_opacity=isNaN(parseInt(animation_starting_opacity))?0:parseInt(animation_starting_opacity)*0.01;// Check if the animation speed curve is one of the allowed ones and set it to the default one if it is not
if(-1===$.inArray(animation_speed_curve,['linear','ease','ease-in','ease-out','ease-in-out'])){animation_speed_curve='ease-in-out';}if($buttonWrapper.length>0){$element.removeClass('et_animated');$element=$buttonWrapper;$element.addClass('et_animated');}$element.css({'animation-duration':animation_duration,'animation-delay':animation_delay,opacity:starting_opacity,'animation-timing-function':animation_speed_curve});if('slideTop'===animation_style||'slideBottom'===animation_style){$element.css('left','0px');}var intensity_css={};var intensity_percentage=isNaN(parseInt(animation_intensity))?50:parseInt(animation_intensity);// All the animations that can have intensity
var intensity_animations=['slide','zoom','flip','fold','roll'];var original_animation=false;var original_direction=false;// Check if current animation can have intensity
for(var i=0;i<intensity_animations.length;i++){var animation=intensity_animations[i];// As the animation style is a combination of type and direction check if
// the current animation contains any of the allowed animation types
if(!animation_style||animation_style.substr(0,animation.length)!==animation){continue;}// If it does set the original animation to the base animation type
original_animation=animation;// Get the remainder of the animation style and set it as the direction
original_direction=animation_style.substr(animation.length,animation_style.length);// If that is not empty convert it to lower case for better readability's sake
if(''!==original_direction){original_direction=original_direction.toLowerCase();}break;}if(original_animation!==false&&original_direction!==false){intensity_css=et_process_animation_intensity(original_animation,original_direction,intensity_percentage);}if(!$.isEmptyObject(intensity_css)){// temporarily disable transform transitions to avoid double animation.
$element.css(isEdge?$.extend(intensity_css,{transition:'transform 0s ease-in'}):intensity_css);}$element.addClass('et_animated');$element.addClass('et_is_animating');$element.addClass(animation_style);$element.addClass(animation_repeat);// Remove the animation after it completes if it is not an infinite one
if(!animation_repeat){var animation_duration_ms=parseInt(animation_duration);var animation_delay_ms=parseInt(animation_delay);setTimeout(function(){et_remove_animation($element);},animation_duration_ms+animation_delay_ms);if(isEdge&&!$.isEmptyObject(intensity_css)){// re-enable transform transitions after animation is done.
setTimeout(function(){$element.css('transition','');},animation_duration_ms+animation_delay_ms+50);}}}function et_process_animation_data(waypoints_enabled){if('undefined'!==typeof et_animation_data&&et_animation_data.length>0){$('body').css('overflow-x','hidden');$('#page-container').css('overflow-y','hidden');for(var i=0;i<et_animation_data.length;i++){var animation_entry=et_animation_data[i];if(!animation_entry.class||!animation_entry.style||!animation_entry.repeat||!animation_entry.duration||!animation_entry.delay||!animation_entry.intensity||!animation_entry.starting_opacity||!animation_entry.speed_curve){continue;}var $animated=$(".".concat(animation_entry.class));// Get current active device.
var current_mode=et_pb_get_current_window_mode();var is_desktop_view='desktop'===current_mode;// Update animation breakpoint variable.
et_animation_breakpoint=current_mode;// Generate suffix.
var suffix='';if(!is_desktop_view){suffix+="_".concat(current_mode);}// Being save and prepare the value.
var data_style=!is_desktop_view&&typeof animation_entry["style".concat(suffix)]!=='undefined'?animation_entry["style".concat(suffix)]:animation_entry.style;var data_repeat=!is_desktop_view&&typeof animation_entry["repeat".concat(suffix)]!=='undefined'?animation_entry["repeat".concat(suffix)]:animation_entry.repeat;var data_duration=!is_desktop_view&&typeof animation_entry["duration".concat(suffix)]!=='undefined'?animation_entry["duration".concat(suffix)]:animation_entry.duration;var data_delay=!is_desktop_view&&typeof animation_entry["delay".concat(suffix)]!=='undefined'?animation_entry["delay".concat(suffix)]:animation_entry.delay;var data_intensity=!is_desktop_view&&typeof animation_entry["intensity".concat(suffix)]!=='undefined'?animation_entry["intensity".concat(suffix)]:animation_entry.intensity;var data_starting_opacity=!is_desktop_view&&typeof animation_entry["starting_opacity".concat(suffix)]!=='undefined'?animation_entry["starting_opacity".concat(suffix)]:animation_entry.starting_opacity;var data_speed_curve=!is_desktop_view&&typeof animation_entry["speed_curve".concat(suffix)]!=='undefined'?animation_entry["speed_curve".concat(suffix)]:animation_entry.speed_curve;$animated.attr({'data-animation-style':data_style,'data-animation-repeat':'once'===data_repeat?'':'infinite','data-animation-duration':data_duration,'data-animation-delay':data_delay,'data-animation-intensity':data_intensity,'data-animation-starting-opacity':data_starting_opacity,'data-animation-speed-curve':data_speed_curve});// Process the waypoints logic if the waypoints are not ignored
// Otherwise add the animation to the element right away
if(true===waypoints_enabled){if($animated.hasClass('et_pb_circle_counter')){et_waypoint($animated,{offset:'100%',handler:function handler(){var $this_counter=$(this.element).find('.et_pb_circle_counter_inner');if($this_counter.data('PieChartHasLoaded')||'undefined'===typeof $this_counter.data('easyPieChart')){return;}$this_counter.data('easyPieChart').update($this_counter.data('number-value'));$this_counter.data('PieChartHasLoaded',true);et_animate_element($(this.element));}});// fallback to 'bottom-in-view' offset, to make sure animation applied when element is on the bottom of page and other offsets are not triggered
et_waypoint($animated,{offset:'bottom-in-view',handler:function handler(){var $this_counter=$(this.element).find('.et_pb_circle_counter_inner');if($this_counter.data('PieChartHasLoaded')||'undefined'===typeof $this_counter.data('easyPieChart')){return;}$this_counter.data('easyPieChart').update($this_counter.data('number-value'));$this_counter.data('PieChartHasLoaded',true);et_animate_element($(this.element));}});}else if($animated.hasClass('et_pb_number_counter')){et_waypoint($animated,{offset:'100%',handler:function handler(){$(this.element).data('easyPieChart').update($(this.element).data('number-value'));et_animate_element($(this.element));}});// fallback to 'bottom-in-view' offset, to make sure animation applied when element is on the bottom of page and other offsets are not triggered
et_waypoint($animated,{offset:'bottom-in-view',handler:function handler(){$(this.element).data('easyPieChart').update($(this.element).data('number-value'));et_animate_element($(this.element));}});}else{et_waypoint($animated,{offset:'100%',handler:function handler(){et_animate_element($(this.element));}});}}else{et_animate_element($animated);}}}}function et_process_animation_intensity(animation,direction,intensity){var intensity_css={};switch(animation){case'slide':switch(direction){case'top':var percentage=intensity*-2;intensity_css={transform:"translate3d(0, ".concat(percentage,"%, 0)")};break;case'right':var percentage=intensity*2;intensity_css={transform:"translate3d(".concat(percentage,"%, 0, 0)")};break;case'bottom':var percentage=intensity*2;intensity_css={transform:"translate3d(0, ".concat(percentage,"%, 0)")};break;case'left':var percentage=intensity*-2;intensity_css={transform:"translate3d(".concat(percentage,"%, 0, 0)")};break;default:var scale=(100-intensity)*0.01;intensity_css={transform:"scale3d(".concat(scale,", ").concat(scale,", ").concat(scale,")")};break;}break;case'zoom':var scale=(100-intensity)*0.01;switch(direction){case'top':intensity_css={transform:"scale3d(".concat(scale,", ").concat(scale,", ").concat(scale,")")};break;case'right':intensity_css={transform:"scale3d(".concat(scale,", ").concat(scale,", ").concat(scale,")")};break;case'bottom':intensity_css={transform:"scale3d(".concat(scale,", ").concat(scale,", ").concat(scale,")")};break;case'left':intensity_css={transform:"scale3d(".concat(scale,", ").concat(scale,", ").concat(scale,")")};break;default:intensity_css={transform:"scale3d(".concat(scale,", ").concat(scale,", ").concat(scale,")")};break;}break;case'flip':switch(direction){case'right':var degree=Math.ceil(90/100*intensity);intensity_css={transform:"perspective(2000px) rotateY(".concat(degree,"deg)")};break;case'left':var degree=Math.ceil(90/100*intensity)*-1;intensity_css={transform:"perspective(2000px) rotateY(".concat(degree,"deg)")};break;case'top':default:var degree=Math.ceil(90/100*intensity);intensity_css={transform:"perspective(2000px) rotateX(".concat(degree,"deg)")};break;case'bottom':var degree=Math.ceil(90/100*intensity)*-1;intensity_css={transform:"perspective(2000px) rotateX(".concat(degree,"deg)")};break;}break;case'fold':switch(direction){case'top':var degree=Math.ceil(90/100*intensity)*-1;intensity_css={transform:"perspective(2000px) rotateX(".concat(degree,"deg)")};break;case'bottom':var degree=Math.ceil(90/100*intensity);intensity_css={transform:"perspective(2000px) rotateX(".concat(degree,"deg)")};break;case'left':var degree=Math.ceil(90/100*intensity);intensity_css={transform:"perspective(2000px) rotateY(".concat(degree,"deg)")};break;case'right':default:var degree=Math.ceil(90/100*intensity)*-1;intensity_css={transform:"perspective(2000px) rotateY(".concat(degree,"deg)")};break;}break;case'roll':switch(direction){case'right':case'bottom':var degree=Math.ceil(360/100*intensity)*-1;intensity_css={transform:"rotateZ(".concat(degree,"deg)")};break;case'top':case'left':var degree=Math.ceil(360/100*intensity);intensity_css={transform:"rotateZ(".concat(degree,"deg)")};break;default:var degree=Math.ceil(360/100*intensity);intensity_css={transform:"rotateZ(".concat(degree,"deg)")};break;}break;}return intensity_css;}function et_has_animation_data($element){var has_animation=false;if('undefined'!==typeof et_animation_data&&et_animation_data.length>0){for(var i=0;i<et_animation_data.length;i++){var animation_entry=et_animation_data[i];if(!animation_entry.class){continue;}if($element.hasClass(animation_entry.class)){has_animation=true;break;}}}return has_animation;}function et_get_animation_classes(){return['et_animated','et_is_animating','infinite','et-waypoint','fade','fadeTop','fadeRight','fadeBottom','fadeLeft','slide','slideTop','slideRight','slideBottom','slideLeft','bounce','bounceTop','bounceRight','bounceBottom','bounceLeft','zoom','zoomTop','zoomRight','zoomBottom','zoomLeft','flip','flipTop','flipRight','flipBottom','flipLeft','fold','foldTop','foldRight','foldBottom','foldLeft','roll','rollTop','rollRight','rollBottom','rollLeft','transformAnim'];}function et_remove_animation($element){// Don't remove looping animations, return early.
if($element.hasClass('infinite')){return;}var animation_classes=et_get_animation_classes();// Remove attributes which avoid horizontal scroll to appear when section is rolled
if($element.is('.et_pb_section')&&$element.is('.roll')){$("".concat(et_frontend_scripts.builderCssContainerPrefix,", ").concat(et_frontend_scripts.builderCssLayoutPrefix)).css('overflow-x','');}$element.removeClass(animation_classes.join(' '));$element.css({'animation-delay':'','animation-duration':'','animation-timing-function':'',opacity:'',transform:'',left:''});// Prevent animation module with no explicit position property to be incorrectly positioned
// after animation is clomplete and animation classname is removed because animation classname has
// animation-name property which gives pseudo correct z-index. This class also works as a marker to prevent animating already animated objects.
$element.addClass('et_had_animation');}function et_remove_animation_data($element){var attr_name;var data_attrs_to_remove=[];var data_attrs=$element.get(0).attributes;for(var i=0;i<data_attrs.length;i++){if('data-animation-'===data_attrs[i].name.substring(0,15)){data_attrs_to_remove.push(data_attrs[i].name);}}$.each(data_attrs_to_remove,function(index,attr_name){$element.removeAttr(attr_name);});}window.et_reinit_waypoint_modules=et_pb_debounce(function(){var $et_pb_circle_counter=$('.et_pb_circle_counter');var $et_pb_number_counter=$('.et_pb_number_counter');var $et_pb_video_background=$('.et_pb_section_video_bg video');// if waypoint is available and we are not ignoring them.
if($.fn.waypoint&&window.et_pb_custom&&'yes'!==window.et_pb_custom.ignore_waypoints&&!_utils.isBuilder){et_process_animation_data(true);// get all of our waypoint things.
var modules=$('.et-waypoint');modules.each(function(){et_waypoint($(this),{offset:et_get_offset($(this),'100%'),handler:function handler(){// what actually triggers the animation.
$(this.element).addClass('et-animated');}},2);});// Set waypoint for circle counter module.
if($et_pb_circle_counter.length){// iterate over each.
$et_pb_circle_counter.each(function(){var $this_counter=$(this).find('.et_pb_circle_counter_inner');if(!$this_counter.is(':visible')||et_has_animation_data($this_counter)){return;}et_waypoint($this_counter,{offset:et_get_offset($(this),'100%'),handler:function handler(){if($this_counter.data('PieChartHasLoaded')||'undefined'===typeof $this_counter.data('easyPieChart')){return;}// No need to update animated circle counter as soon as it hits
// bottom of the page in layout block preview page since layout
// block preview page is being rendered in 100% height inside
// Block Editor
if(isBlockLayoutPreview){return;}$this_counter.data('easyPieChart').update($this_counter.data('number-value'));$this_counter.data('PieChartHasLoaded',true);}},2);});}// Set waypoint for number counter module.
if($et_pb_number_counter.length){$et_pb_number_counter.each(function(){var $this_counter=$(this);if(et_has_animation_data($this_counter)){return;}et_waypoint($this_counter,{offset:et_get_offset($(this),'100%'),handler:function handler(){$this_counter.data('easyPieChart').update($this_counter.data('number-value'));}});});}// Set waypoint for goal module.
if(!_utils.isBuilder){$.each(et_pb_custom.ab_tests,function(index,test){var $et_pb_ab_goal=et_builder_ab_get_goal_node(test.post_id);if(0===$et_pb_ab_goal.length){return true;}et_waypoint($et_pb_ab_goal,{offset:et_get_offset($(this),'80%'),handler:function handler(){if(et_pb_ab_logged_status[test.post_id].read_goal||!$et_pb_ab_goal.length||!$et_pb_ab_goal.visible(true)){return;}// log the goal_read if goal is still visible after 3 seconds.
setTimeout(function(){if($et_pb_ab_goal.length&&$et_pb_ab_goal.visible(true)&&!et_pb_ab_logged_status[test.post_id].read_goal){et_pb_ab_update_stats('read_goal',test.post_id,undefined,test.test_id);}},3000);et_pb_maybe_log_event($et_pb_ab_goal,'view_goal');}});});}}else{// if no waypoints supported then apply all the animations right away
et_process_animation_data(false);var animated_class=_utils.isBuilder?'et-animated--vb':'et-animated';$('.et-waypoint').addClass(animated_class);// While in the builder, trigger all animations instantly as otherwise
// TB layouts that are displayed but are not the currently edited post
// will have their animated modules invisible due to .et-waypoint.
$('.et-waypoint').each(function(){et_animate_element($(this));});if($et_pb_circle_counter.length){$et_pb_circle_counter.each(function(){var $this_counter=$(this).find('.et_pb_circle_counter_inner');if(!$this_counter.is(':visible')){return;}if($this_counter.data('PieChartHasLoaded')||'undefined'===typeof $this_counter.data('easyPieChart')){return;}$this_counter.data('easyPieChart').update($this_counter.data('number-value'));$this_counter.data('PieChartHasLoaded',true);});}if($et_pb_number_counter.length){$et_pb_number_counter.each(function(){var $this_counter=$(this);$this_counter.data('easyPieChart').update($this_counter.data('number-value'));});}// log the stats without waypoints
$.each(et_pb_custom.ab_tests,function(index,test){var $et_pb_ab_goal=et_builder_ab_get_goal_node(test.post_id);if(0===$et_pb_ab_goal.length){return true;}if(et_pb_ab_logged_status[test.post_id].read_goal||!$et_pb_ab_goal.length||!$et_pb_ab_goal.visible(true)){return true;}// log the goal_read if goal is still visible after 3 seconds.
setTimeout(function(){if($et_pb_ab_goal.length&&$et_pb_ab_goal.visible(true)&&!et_pb_ab_logged_status[test.post_id].read_goal){et_pb_ab_update_stats('read_goal',test.post_id,undefined,test.test_id);}},3000);et_pb_maybe_log_event($et_pb_ab_goal,'view_goal');});}// End checking of waypoints.
if($et_pb_video_background.length){$et_pb_video_background.each(function(){var $this_video_background=$(this);et_pb_video_background_init($this_video_background,this);});}// End of et_pb_debounce().
},100);function et_process_link_options_data(){if('undefined'!==typeof et_link_options_data&&et_link_options_data.length>0){// $.each needs to be used so that the proper values are bound
// when there are multiple elements with link options enabled
$.each(et_link_options_data,function(index,link_option_entry){if(!link_option_entry.class||!link_option_entry.url||!link_option_entry.target){return;}var $clickable=$(".".concat(link_option_entry.class));$clickable.on('click',function(event){// If the event target is different from current target a check for elements that should not trigger module link is performed
if(event.target!==event.currentTarget&&!et_is_click_exception($(event.target))||event.target===event.currentTarget){event.stopPropagation();var url=link_option_entry.url;url=url.replace(/&#91;/g,'[');url=url.replace(/&#93;/g,']');if('_blank'===link_option_entry.target){window.open(url);return;}if('#product_reviews_tab'===url){var $reviewsTabLink=$('.reviews_tab a');if($reviewsTabLink.length>0){$reviewsTabLink.trigger('click');et_pb_smooth_scroll($reviewsTabLink,undefined,800);history.pushState(null,'',url);}}else if(url&&'#'===url[0]&&$(url).length){et_pb_smooth_scroll($(url),undefined,800);history.pushState(null,'',url);}else{window.location=url;}}});// Prevent any links inside the element from triggering its (parent) link
$clickable.on('click','a, button',function(event){if(!et_is_click_exception($(this))){event.stopPropagation();}});});}}// There are some classes that have other click handlers attached to them
// Link options should not be triggered by/or prevent them from working
function et_is_click_exception($element){var is_exception=false;// List of elements that already have click handlers
var click_exceptions=[// Accordion/Toggle
'.et_pb_toggle_title',// Audio Module
'.mejs-container *',// Contact Form Fields
'.et_pb_contact_field input','.et_pb_contact_field textarea','.et_pb_contact_field_checkbox *','.et_pb_contact_field_radio *','.et_pb_contact_captcha',// Tabs
'.et_pb_tabs_controls a',// Woo Image
'.flex-control-nav *',// Menu
'.et_pb_menu__search-button','.et_pb_menu__close-search-button','.et_pb_menu__search-container *',// Fullwidth Header
'.et_pb_fullwidth_header_scroll *'];for(var i=0;i<click_exceptions.length;i++){if($element.is(click_exceptions[i])){is_exception=true;break;}}return is_exception;}et_process_link_options_data();function et_pb_init_ab_test(test){// Disable AB Testing tracking on VB
// AB Testing should not record anything on AB Testing
if(_utils.isBuilder){return;}var $et_pb_ab_goal=et_builder_ab_get_goal_node(test.post_id);var et_ab_subject_id=et_pb_get_subject_id(test.post_id);$.each(et_pb_ab_logged_status[test.post_id],function(key){var cookie_subject='click_goal'===key||'con_short'===key?'':et_ab_subject_id;et_pb_ab_logged_status[test.post_id][key]=et_pb_check_cookie_value("et_pb_ab_".concat(key,"_").concat(test.post_id).concat(test.test_id).concat(cookie_subject),'true');});// log the page read event if user stays on page long enough and if not logged for current subject
if(!et_pb_ab_logged_status[test.post_id].read_page){setTimeout(function(){et_pb_ab_update_stats('read_page',test.post_id,undefined,test.test_id);},et_pb_ab_bounce_rate);}// add the cookies for shortcode tracking, if enabled
if('on'===et_pb_custom.is_shortcode_tracking&&!et_pb_ab_logged_status[test.post_id].con_short){et_pb_set_cookie(365,"et_pb_ab_shortcode_track_".concat(test.post_id,"=").concat(test.post_id,"_").concat(et_ab_subject_id,"_").concat(test.test_id));}if($et_pb_ab_goal.length){// if goal is a module and has a button then track the conversions, otherwise track clicks
if($et_pb_ab_goal.hasClass('et_pb_module')&&($et_pb_ab_goal.hasClass('et_pb_button')||$et_pb_ab_goal.find('.et_pb_button').length)){// Log con_goal if current goal doesn't require any specific conversion calculation
if(!$et_pb_ab_goal.hasClass('et_pb_contact_form_container')&&!$et_pb_ab_goal.hasClass('et_pb_newsletter')){var $goal_button=$et_pb_ab_goal.hasClass('et_pb_button')?$et_pb_ab_goal:$et_pb_ab_goal.find('.et_pb_button');if($et_pb_ab_goal.hasClass('et_pb_comments_module')){var page_url=window.location.href;var comment_submitted=-1!==page_url.indexOf('#comment-');var log_conversion=et_pb_check_cookie_value("et_pb_ab_comment_log_".concat(test.post_id).concat(test.test_id),'true');if(comment_submitted&&log_conversion){et_pb_ab_update_stats('con_goal',test.post_id,undefined,test.test_id);et_pb_set_cookie(0,"et_pb_ab_comment_log_".concat(test.post_id).concat(test.test_id,"=true"));}}$goal_button.on('click',function(){if($et_pb_ab_goal.hasClass('et_pb_comments_module')&&!et_pb_ab_logged_status[test.post_id].con_goal){et_pb_set_cookie(365,"et_pb_ab_comment_log_".concat(test.post_id).concat(test.test_id,"=true"));return;}et_pb_maybe_log_event($et_pb_ab_goal,'click_goal');});}}else{$et_pb_ab_goal.on('click',function(){if($et_pb_ab_goal.hasClass('et_pb_shop')&&!et_pb_ab_logged_status[test.post_id].con_goal){et_pb_set_cookie(365,"et_pb_ab_shop_log=".concat(test.post_id,"_").concat(et_ab_subject_id,"_").concat(test.test_id));}et_pb_maybe_log_event($et_pb_ab_goal,'click_goal');});}}}function et_pb_maybe_log_event($goal_container,event,callback){// Disable AB Testing tracking on VB
// AB Testing should not record anything on AB Testing
if(_utils.isBuilder){return;}var postId=et_builder_ab_get_test_post_id($goal_container);var log_event='undefined'===typeof event?'con_goal':event;if(!$goal_container.hasClass('et_pb_ab_goal')||et_pb_ab_logged_status[postId][log_event]){if('undefined'!==typeof callback){callback();}return;}// log the event if it's not logged for current user
et_pb_ab_update_stats(log_event,postId);}function et_pb_ab_update_stats(record_type,set_page_id,set_subject_id,set_test_id,callback){var page_id='undefined'===typeof set_page_id?et_pb_custom.page_id:set_page_id;var subject_id='undefined'===typeof set_subject_id?et_pb_get_subject_id(page_id):set_subject_id;var test_id='undefined'===typeof set_test_id?et_builder_ab_get_test_id(page_id):set_test_id;var stats_data=JSON.stringify({test_id:page_id,subject_id:subject_id,record_type:record_type});var cookie_subject='click_goal'===record_type||'con_short'===record_type?'':subject_id;et_pb_set_cookie(365,"et_pb_ab_".concat(record_type,"_").concat(page_id).concat(test_id).concat(cookie_subject,"=true"));et_pb_ab_logged_status[page_id][record_type]=true;$.ajax({type:'POST',url:et_pb_custom.ajaxurl,data:{action:'et_pb_update_stats_table',stats_data_array:stats_data,et_ab_log_nonce:et_pb_custom.et_ab_log_nonce}}).always(function(){if('undefined'!==typeof callback){callback();}});}function et_pb_get_subject_id(postId){var $subject=$("*[class*=et_pb_ab_subject_id-".concat(postId,"_]"));// In case no subject found
if($subject.length<=0||$('html').is('.et_fb_preview_active--wireframe_preview')){return false;}var subject_classname=$subject.attr('class');var subject_id_raw=subject_classname.split('et_pb_ab_subject_id-')[1];var subject_id_clean=subject_id_raw.split(' ')[0];var subject_id_separated=subject_id_clean.split('_');var subject_id=subject_id_separated[1];return subject_id;}/**
       * Get the goal $node for the given AB test post id.
       *
       * @since 4.0
       *
       * @param {integer} postId
       *
       * @returns {object}
       */function et_builder_ab_get_goal_node(postId){return $(".et_pb_ab_goal_id-".concat(postId));}/**
       * Get the post id from a goal $node.
       *
       * @since 4.0
       *
       * @param {object} $goal
       *
       * @returns {integer}
       */function et_builder_ab_get_test_post_id($goal){var className=$goal.attr('class');var postId=parseInt(className.replace(/^.*et_pb_ab_goal_id-(\d+).*$/,'$1'));return!isNaN(postId)?postId:0;}/**
       * Get the test id from a post id.
       *
       * @since 4.0
       *
       * @param {integer} postId
       *
       * @returns {integer}
       */function et_builder_ab_get_test_id(postId){for(var i=0;i<et_pb_custom.ab_tests;i++){if(et_pb_custom.ab_tests[i].post_id===postId){return et_pb_custom.ab_tests[i].test_id;}}return et_pb_custom.unique_test_id;}/**
       * Get current active device based on window width size.
       *
       * @returns {string} View mode.
       */function et_pb_get_current_window_mode(){var window_width=$et_window.width();var current_mode='desktop';if(window_width<=980&&window_width>767){current_mode='tablet';}else if(window_width<=767){current_mode='phone';}return current_mode;}function et_pb_set_cookie_expire(days){var ms=days*24*60*60*1000;var date=new Date();date.setTime(date.getTime()+ms);return"; expires=".concat(date.toUTCString());}function et_pb_check_cookie_value(cookie_name,value){return et_pb_get_cookie_value(cookie_name)==value;}function et_pb_get_cookie_value(cookie_name){return et_pb_parse_cookies()[cookie_name];}function et_pb_parse_cookies(){var cookies=document.cookie.split('; ');var ret={};for(var i=cookies.length-1;i>=0;i--){var el=cookies[i].split('=');ret[el[0]]=el[1];}return ret;}function et_pb_set_cookie(expire,cookie_content){var cookie_expire=et_pb_set_cookie_expire(expire);document.cookie="".concat(cookie_content+cookie_expire,"; path=/");}function et_pb_get_fixed_main_header_height(){if(!window.et_is_fixed_nav){return 0;}var fixed_height_onload='undefined'===typeof $('#main-header').attr('data-fixed-height-onload')?0:$('#main-header').attr('data-fixed-height-onload');return!window.et_is_fixed_nav?0:parseFloat(fixed_height_onload);}var fullscreen_section_width={};var fullscreen_section_timeout={};window.et_calc_fullscreen_section=function(event,section){var isResizing='object'===_typeof(event)&&'resize'===event.type;var $et_window=$(top_window);var $this_section=section||$(this);var section_index=$this_section.index('.et_pb_fullscreen');var timeout=isResizing&&typeof fullscreen_section_width[section_index]!=='undefined'&&event.target.window_width>fullscreen_section_width[section_index]?800:0;fullscreen_section_width[section_index]=$et_window.width();if(typeof fullscreen_section_timeout[section_index]!=='undefined'){clearTimeout(fullscreen_section_timeout[section_index]);}fullscreen_section_timeout[section_index]=setTimeout(function(){var $body=$('body');var $tb_header=$('.et-l--header').first();var tb_header_height=$tb_header.length>0?$tb_header.height():0;var has_section=$this_section.length;var this_section_index=$this_section.index('.et_pb_fullwidth_header');var this_section_offset=has_section?$this_section.offset():{};var $header=$this_section.children('.et_pb_fullwidth_header_container');var $header_content=$header.children('.header-content-container');var $header_image=$header.children('.header-image-container');var sectionHeight=top_window.innerHeight||$et_window.height();var $wpadminbar=top_window.jQuery('#wpadminbar');var has_wpadminbar=$wpadminbar.length;var wpadminbar_height=has_wpadminbar?$wpadminbar.height():0;var $top_header=$('#top-header');var has_top_header=$top_header.length;var top_header_height=has_top_header?$top_header.height():0;var $main_header=$('#main-header');var has_main_header=$main_header.length;var main_header_height=has_main_header?$main_header.outerHeight():0;var fixed_main_header_height=et_pb_get_fixed_main_header_height();var is_wp_relative_admin_bar=$et_window.width()<782;var is_desktop_view=$et_window.width()>980;var is_tablet_view=$et_window.width()<=980&&$et_window.width()>=479;var is_phone_view=$et_window.width()<479;var overall_header_height=wpadminbar_height+tb_header_height+top_header_height+(window.et_is_vertical_nav&&is_desktop_view?0:main_header_height);var is_first_module='undefined'!==typeof this_section_offset.top?this_section_offset.top<=overall_header_height:false;var $gbFixedHeader=top_window.jQuery('.edit-post-header');var $gbFixedFooter=top_window.jQuery('.edit-post-layout__footer');// In case theme stored the onload main-header height as data-attribute
if($main_header.attr('data-height-onload')){main_header_height=parseFloat($main_header.attr('data-height-onload'));}//
// WP Admin Bar:
//
// - Desktop fixed: standard
// - WP Mobile relative: less than 782px window
//
if(has_wpadminbar){if(is_wp_relative_admin_bar){if(is_first_module){sectionHeight-=wpadminbar_height;}}else{sectionHeight-=wpadminbar_height;}}// Gutenberg's floating header UI
if($gbFixedHeader.length>0){sectionHeight-=$gbFixedHeader.outerHeight();}// Gutenberg's floating footer UI
if($gbFixedFooter.length>0){sectionHeight-=$gbFixedFooter.outerHeight();}/**
           * Divi Top Header:
           *
           * - Desktop fixed: standard.
           * - Desktop fixed BUT first header's height shouldn't be substracted: hide nav until
           * scroll activated
           * - Desktop relative: fixed nav bar disabled
           * - Desktop relative: vertical nav activated.
           */if(has_top_header){if(is_desktop_view){if(et_hide_nav&&!window.et_is_vertical_nav){if(!is_first_module){sectionHeight-=top_header_height;}}else if(!window.et_is_fixed_nav||window.et_is_vertical_nav){if(is_first_module){sectionHeight-=top_header_height;}}else{sectionHeight-=top_header_height;}}}/**
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
           */if(has_main_header){if(is_desktop_view){if(et_hide_nav&&!window.et_is_vertical_nav){if(!is_first_module){sectionHeight-=fixed_main_header_height;}}else if(window.et_is_fixed_nav&&!window.et_is_vertical_nav){if(is_first_module){sectionHeight-=main_header_height;}else{sectionHeight-=fixed_main_header_height;}}else if(!window.et_is_fixed_nav&&!window.et_is_vertical_nav){if(is_first_module){sectionHeight-=main_header_height;}}}else if(is_first_module){sectionHeight-=main_header_height;}}// If the transparent primary nav + hide nav until scroll is being used,
// cancel automatic padding-top added by transparent nav mechanism
if($body.hasClass('et_transparent_nav')&&$body.hasClass('et_hide_nav')&&0===this_section_index){$this_section.css('padding-top','');}// reduce section height by its top border width
var section_border_top_width=parseInt($this_section.css('borderTopWidth'));if(section_border_top_width){sectionHeight-=section_border_top_width;}// reduce section height by its bottom border width
var section_border_bottom_width=parseInt($this_section.css('borderBottomWidth'));if(section_border_bottom_width){sectionHeight-=section_border_bottom_width;}// Subtract Theme Builder header layout height from first fullscreen section/header
// unless the section is inside the TB header itself.
if(tb_header_height>0&&0===this_section_index&&0===$this_section.closest($tb_header).length){sectionHeight-=tb_header_height;}setTimeout(function(){$this_section.css('min-height',"".concat(sectionHeight,"px"));$header.css('min-height',"".concat(sectionHeight,"px"));},100);if($header.hasClass('center')&&$header_content.hasClass('bottom')&&$header_image.hasClass('bottom')){$header.addClass('bottom-bottom');}if($header.hasClass('center')&&$header_content.hasClass('center')&&$header_image.hasClass('center')){$header.addClass('center-center');}if($header.hasClass('center')&&$header_content.hasClass('center')&&$header_image.hasClass('bottom')){$header.addClass('center-bottom');var contentHeight=sectionHeight-$header_image.outerHeight(true);if(contentHeight>0){$header_content.css('min-height',"".concat(contentHeight,"px")).css('height','10px'/* fixes IE11 render */);}}if($header.hasClass('center')&&$header_content.hasClass('bottom')&&$header_image.hasClass('center')){$header.addClass('bottom-center');}if(($header.hasClass('left')||$header.hasClass('right'))&&!$header_content.length&&$header_image.length){$header.css('justify-content','flex-end');}if($header.hasClass('center')&&$header_content.hasClass('bottom')&&!$header_image.length){$header_content.find('.header-content').css('margin-bottom',"".concat(80,"px"));}if($header_content.hasClass('bottom')&&$header_image.hasClass('center')){$header_image.find('.header-image').css('margin-bottom',"".concat(80,"px"));$header_image.css('align-self','flex-end');}// Detect if section height is lower than the content height
var headerContentHeight=0;if($header_content.length){headerContentHeight+=$header_content.outerHeight();}if($header_image.length){headerContentHeight+=$header_image.outerHeight();}if(headerContentHeight>sectionHeight){$this_section.css('min-height',"".concat(headerContentHeight,"px"));$header.css('min-height',"".concat(headerContentHeight,"px"));}// Justify the section content
if($header_image.hasClass('bottom')){if(headerContentHeight<sectionHeight){$this_section.css('min-height',"".concat(headerContentHeight+80,"px"));$header.css('min-height',"".concat(headerContentHeight+80,"px"));}$header.css('justify-content','flex-end');}},timeout);};window.et_calculate_fullscreen_section_size=function(){$('section.et_pb_fullscreen').each(function(){et_calc_fullscreen_section.bind($(this))();});if(_utils.isBuilder){return;}clearTimeout(et_calc_fullscreen_section.timeout);et_calc_fullscreen_section.timeout=setTimeout(function(){$fullscreenSectionWindow.off('resize',et_calculate_fullscreen_section_size);$fullscreenSectionWindow.off('et-pb-header-height-calculated',et_calculate_fullscreen_section_size);$fullscreenSectionWindow.trigger('resize');$fullscreenSectionWindow.on('resize',et_calculate_fullscreen_section_size);$fullscreenSectionWindow.on('et-pb-header-height-calculated',et_calculate_fullscreen_section_size);});// 100ms timeout is set to make sure that the fulls screen section size is calculated
// This allows the posibility that in some specific cases this may not be enought
// so we may need to review this.
};if(!_utils.isBuilder){$fullscreenSectionWindow.on('resize',et_calculate_fullscreen_section_size);$fullscreenSectionWindow.on('et-pb-header-height-calculated',et_calculate_fullscreen_section_size);}window.debounced_et_apply_builder_css_parallax=et_pb_debounce(et_apply_builder_css_parallax,100);window.et_pb_parallax_init=function($this_parallax){var $this_parent=$this_parallax.parent();if($this_parallax.hasClass('et_pb_parallax_css')){// Register faux CSS Parallax effect for builder modes with top window scroll
if($('body').hasClass('et-fb')||isTB||isBlockLayoutPreview){et_apply_builder_css_parallax.bind($this_parent)();if(isTB){top_window.jQuery('#et-fb-app').on('scroll.etCssParallaxBackground',et_apply_builder_css_parallax.bind($this_parent)).on('resize.etCssParallaxBackground',window.debounced_et_apply_builder_css_parallax.bind($this_parent));}else{$(window).on('scroll.etCssParallaxBackground',et_apply_builder_css_parallax.bind($this_parent)).on('resize.etCssParallaxBackground',window.debounced_et_apply_builder_css_parallax.bind($this_parent));}}return;}et_parallax_set_height.bind($this_parent)();et_apply_parallax.bind($this_parent)();if(isTB){top_window.jQuery('#et-fb-app').on('scroll.etTrueParallaxBackground',et_apply_parallax.bind($this_parent));}else{$(window).on('scroll.etTrueParallaxBackground',et_apply_parallax.bind($this_parent));}$(window).on('resize.etTrueParallaxBackground',et_pb_debounce(et_parallax_set_height,100).bind($this_parent));$(window).on('resize.etTrueParallaxBackground',et_pb_debounce(et_apply_parallax,100).bind($this_parent));$this_parent.find('.et-learn-more .heading-more').on('click',function(){setTimeout(function(){et_parallax_set_height.bind($this_parent)();},300);});};$(window).on('resize',function(){var window_width=$et_window.width();var et_container_css_width=$et_container.css('width');var et_container_width_in_pixel=typeof et_container_css_width!=='undefined'?et_container_css_width.substr(-1,1)!=='%':'';var et_container_actual_width=et_container_width_in_pixel?$et_container.width():$et_container.width()/100*window_width;// $et_container.width() doesn't recognize pixel or percentage unit. It's our duty to understand what it returns and convert it properly
var containerWidthChanged=et_container_width!==et_container_actual_width;var $dividers=$('.et_pb_top_inside_divider, .et_pb_bottom_inside_divider');et_pb_resize_section_video_bg();et_pb_center_video();et_fix_slider_height();et_fix_nav_direction();et_fix_html_margin();$et_pb_fullwidth_portfolio.each(function(){var set_container_height=!!$(this).hasClass('et_pb_fullwidth_portfolio_carousel');set_fullwidth_portfolio_columns($(this),set_container_height);});if(containerWidthChanged||window.et_force_width_container_change){$('.container-width-change-notify').trigger('containerWidthChanged');setTimeout(function(){$et_pb_filterable_portfolio.each(function(){window.set_filterable_grid_items($(this));});$et_pb_gallery.each(function(){if($(this).hasClass('et_pb_gallery_grid')){set_gallery_grid_items($(this));}});},100);et_container_width=et_container_actual_width;etRecalculateOffset=true;var _$et_pb_circle_counter=$('.et_pb_circle_counter');if(_$et_pb_circle_counter.length){_$et_pb_circle_counter.each(function(){var $this_counter=$(this).find('.et_pb_circle_counter_inner');if(!$this_counter.is(':visible')){return;}// Need to initialize if it has not (e.g visibility set to hidden when the page loaded)
if('undefined'===typeof $this_counter.data('easyPieChart')){window.et_pb_circle_counter_init($this_counter);}// Update animation breakpoint variable and generate suffix.
var current_mode=et_pb_get_current_window_mode();et_animation_breakpoint=current_mode;var suffix=current_mode!=='desktop'?"-".concat(current_mode):'';// Update bar background color based on active mode.
var bar_color=$this_counter.data("bar-bg-color".concat(suffix));if(typeof bar_color!=='undefined'&&bar_color!==''){$this_counter.data('easyPieChart').options.barColor=bar_color;}// Update track color based on active mode.
var track_color=$this_counter.data("color".concat(suffix));if(typeof track_color!=='undefined'&&track_color!==''){$this_counter.data('easyPieChart').options.trackColor=track_color;$this_counter.trigger('containerWidthChanged');}// Update track color alpha based on active mode.
var track_color_alpha=$this_counter.data("alpha".concat(suffix));if(typeof track_color_alpha!=='undefined'&&track_color_alpha!==''){$this_counter.data('easyPieChart').options.trackAlpha=track_color_alpha;$this_counter.trigger('containerWidthChanged');}$this_counter.data('easyPieChart').update($this_counter.data('number-value'));});}if($et_pb_countdown_timer.length){$et_pb_countdown_timer.each(function(){var timer=$(this);et_countdown_timer_labels(timer);});}// Reset to false
window.et_force_width_container_change=false;}window.et_fix_testimonial_inner_width();if($et_pb_counter_amount.length){$et_pb_counter_amount.each(function(){window.et_bar_counters_init($(this));});}/* $et_pb_counter_amount.length */ // Reinit animation.
_utils.isBuilder&&et_pb_reinit_animation();// Reupdate maps filters.
if($et_pb_map.length||_utils.isBuilder){et_pb_update_maps_filters($et_pb_map);}if(grid_containers.length||_utils.isBuilder){$(grid_containers).each(function(){window.et_pb_set_responsive_grid($(this),'.et_pb_grid_item');});}// Re-apply module divider fix
if(!_utils.isBuilder&&$dividers.length){$dividers.each(function(){etFixDividerSpacing($(this));});}});function fitvids_slider_fullscreen_init(){if($.fn.fitVids){// Default custom and ignore selectors for all modules.
var customSelector="iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']";var ignore='';// Library lazysizes convert the iframe video src into data:image,
// so we need to add src data:image on the list. And also, need to
// ignore if current iframe has .lazyloading class because it's not
// visible until it's lazy loaded.
if(!(0,_isUndefined.default)(window.lazySizes)){customSelector+=", iframe[src^='data:image']";ignore+='.lazyloading';}$('.et_pb_slide_video').fitVids();$('.et_pb_module').fitVids({customSelector:customSelector,ignore:ignore});}et_fix_slider_height();// calculate fullscreen section sizes on $( window ).ready to avoid jumping in some cases
et_calculate_fullscreen_section_size();}if(_utils.isBuilder){$(window).one('et_fb_init_app_after',fitvids_slider_fullscreen_init);}else{fitvids_slider_fullscreen_init();}window.et_pb_fullwidth_header_scroll=function(event){event.preventDefault();var window_width=$et_window.width();var $body=$('body');var is_wp_relative_admin_bar=window_width<782;var is_transparent_main_header=$body.hasClass('et_transparent_nav');var is_hide_nav=$body.hasClass('et_hide_nav');var is_desktop_view=window_width>980;var is_tablet_view=window_width<=980&&window_width>=479;var is_phone_view=window_width<479;var $this_section=$(this).parents('section');var this_section_offset=$this_section.offset();var $wpadminbar=$('#wpadminbar');var $main_header=$('#main-header');var wpadminbar_height=$wpadminbar.length&&!is_wp_relative_admin_bar?$wpadminbar.height():0;var top_header_height=!$top_header.length||!window.et_is_fixed_nav||!is_desktop_view?0:$top_header.height();var data_height_onload='undefined'===typeof $main_header.attr('data-height-onload')?0:$main_header.attr('data-height-onload');var initial_fixed_difference=$main_header.height()===et_pb_get_fixed_main_header_height()||!is_desktop_view||!window.et_is_fixed_nav||is_transparent_main_header||is_hide_nav?0:et_pb_get_fixed_main_header_height()-parseFloat(data_height_onload);var section_bottom=this_section_offset.top+$this_section.outerHeight(true)+initial_fixed_difference-(wpadminbar_height+top_header_height+et_pb_get_fixed_main_header_height());var animate_modified=false;if(!isVB&&window.et_is_fixed_nav&&is_transparent_main_header){// We need to perform an extra adjustment which requires computing header height
// in "fixed" mode. It can't be done directly on header because it will change
// its appearance so an invisible clone is used instead.
var clone=$main_header.clone().addClass('et-disabled-animations et-fixed-header').css('visibility','hidden').appendTo($body);section_bottom+=et_pb_get_fixed_main_header_height()-clone.height();clone.remove();}if($this_section.length){var fullscreen_scroll_duration=800;$('html, body').animate({scrollTop:section_bottom},{duration:fullscreen_scroll_duration});}};function et_pb_window_load_scripts(){et_fix_fullscreen_section();et_calculate_fullscreen_section_size();$(document).on('click','.et_pb_fullwidth_header_scroll a',et_pb_fullwidth_header_scroll);setTimeout(function(){$('.et_pb_preload').removeClass('et_pb_preload');},500);if($.fn.hashchange){$(window).hashchange(function(){var hash=window.location.hash.replace(/[^a-zA-Z0-9-_|]/g,'');process_et_hashchange(hash);});$(window).hashchange();}if($et_pb_parallax.length&&!et_is_mobile_device){$et_pb_parallax.each(function(){et_pb_parallax_init($(this));});}window.et_reinit_waypoint_modules();if($('.et_audio_content').length){$(window).trigger('resize');}}if(window.et_load_event_fired){et_pb_window_load_scripts();}else{$(window).on('load',function(){et_pb_window_load_scripts();});}if($('.et_section_specialty').length){$('.et_section_specialty').each(function(){var this_row=$(this).find('.et_pb_row');this_row.find('>.et_pb_column:not(.et_pb_specialty_column)').addClass('et_pb_column_single');});}//
// In particular browser, map + parallax doesn't play well due the use of CSS 3D transform
//
if($('.et_pb_section_parallax').length&&$('.et_pb_map').length){$('body').addClass('parallax-map-support');}/**
       * Add conditional class for search widget in sidebar module.
       */if(window.et_pb_custom){$(".et_pb_widget_area ".concat(window.et_pb_custom.widget_search_selector)).each(function(){var $search_wrap=$(this);var $search_input_submit=$search_wrap.find('input[type="submit"]');var search_input_submit_text=$search_input_submit.attr('value');var $search_button=$search_wrap.find('button');var search_button_text=$search_button.text();var has_submit_button=!!($search_input_submit.length||$search_button.length);var min_column_width=150;if(!$search_wrap.find('input[type="text"]').length&&!$search_wrap.find('input[type="search"]').length){return;}// Mark no button state
if(!has_submit_button){$search_wrap.addClass('et-no-submit-button');}// Mark narrow state
if($search_wrap.width()<150){$search_wrap.addClass('et-narrow-wrapper');}// Fixes issue where theme's search button has no text: treat it as non-existent
if($search_input_submit.length&&('undefined'===typeof search_input_submit_text||''===search_input_submit_text)){$search_input_submit.remove();$search_wrap.addClass('et-no-submit-button');}if($search_button.length&&('undefined'===typeof search_button_text||''===search_button_text)){$search_button.remove();$search_wrap.addClass('et-no-submit-button');}});}// get the content of next/prev page via ajax for modules which have the .et_pb_ajax_pagination_container class
$('body').on('click','.et_pb_ajax_pagination_container .wp-pagenavi a,.et_pb_ajax_pagination_container .pagination a',function(){var this_link=$(this);var href=this_link.attr('href');var current_href=window.location.href;var module_classes=this_link.closest('.et_pb_module').attr('class').split(' ');var module_class_processed='';var $current_module;var animation_classes=et_get_animation_classes();// global variable to store the cached content
window.et_pb_ajax_pagination_cache=window.et_pb_ajax_pagination_cache||[];// construct the selector for current module
$.each(module_classes,function(index,value){// lazyload and lazyloaded classes are needed for compatibility with EWWW Image Optimizer
var skip_classes=animation_classes.concat(['et_had_animation','lazyload','lazyloaded']);// skip animation and other 3rd party classes so no wrong href is formed afterwards
if(skip_classes.includes(value)){return;}if(''!==value.trim()){module_class_processed+=".".concat(value);}});$current_module=$(module_class_processed);// remove module animation to prevent conflicts with the page changing animation
et_remove_animation($current_module);// use cached content if it has beed retrieved already, otherwise retrieve the content via ajax
if(typeof window.et_pb_ajax_pagination_cache[href+module_class_processed]!=='undefined'){$current_module.fadeTo('slow',0.2,function(){$current_module.find('.et_pb_ajax_pagination_container').replaceWith(window.et_pb_ajax_pagination_cache[href+module_class_processed]);et_pb_set_paginated_content($current_module,true);if($('.et_pb_tabs').length){window.et_pb_tabs_init($('.et_pb_tabs'));}});}else{// update cache for currently opened page if not set yet
if('undefined'===typeof window.et_pb_ajax_pagination_cache[current_href+module_class_processed]){window.et_pb_ajax_pagination_cache[current_href+module_class_processed]=$current_module.find('.et_pb_ajax_pagination_container');}$current_module.fadeTo('slow',0.2,function(){var paginate=function paginate(page){var $page=jQuery(page);// Find custom style
var $style=$page.filter('#et-builder-module-design-cached-inline-styles');// Make sure it's included in the new content
var $content=$page.find("".concat(module_class_processed," .et_pb_ajax_pagination_container")).prepend($style);// Remove animations to prevent blocks from not showing
et_remove_animation($content.find('.et_animated'));// Replace current page with new one
$current_module.find('.et_pb_ajax_pagination_container').replaceWith($content);window.et_pb_ajax_pagination_cache[href+module_class_processed]=$content;et_pb_set_paginated_content($current_module,false);if($('.et_pb_tabs').length){window.et_pb_tabs_init($('.et_pb_tabs'));}// Triggers post-load to initialize 3rd party JavaScript that listens for this event.
$(document.body).trigger('post-load');};// Ajax request settings
var ajaxSettings={url:href,success:paginate,error:function error(page){if(404===page.status&&jQuery('body.error404').length>0){// Special case if a blog module is being displayed on the 404 page.
paginate(page.responseText);}}};// Layout block preview is essentially blank page where its layout is passed
// via POST. Pass the next page's layout content by shipping it on the ajax
// request as POST
if(isBlockLayoutPreview){ajaxSettings.data={et_layout_block_layout_content:ETBlockLayoutModulesScript.layoutContent};ajaxSettings.method='POST';}jQuery.ajax(ajaxSettings);});}return false;});function et_pb_set_paginated_content($current_module,is_cache){var is_desktop_view=$(window).width()>980;var is_fixed_nav=window.et_is_fixed_nav;var $wpadminbar=$('#wpadminbar');var has_wpadminbar=$wpadminbar.length;var wpadminbar_height=has_wpadminbar&&is_desktop_view?$wpadminbar.height():0;var $top_header=$('#top-header');var has_top_header=$top_header.length;var top_header_height=has_top_header&&is_fixed_nav&&is_desktop_view?$top_header.height():0;var $main_header=$('#main-header');var has_main_header=$main_header.length;var main_header_height=has_main_header&&is_fixed_nav&&is_desktop_view?$main_header.height():0;var overall_header_height=wpadminbar_height+top_header_height+main_header_height;// Calculate the scroll to element top value based on the element top offset - overall header height - 50.
// The element should be positioned 50px from the top of the viewport or the header (if fixed).
var scroll_to_position=$current_module.offset().top-overall_header_height-50;// Re-apply Salvattore grid to the new content if needed.
if(typeof $current_module.find('.et_pb_salvattore_content').attr('data-columns')!=='undefined'){// register grid only if the content is not from cache
if(!is_cache){salvattore.registerGrid($current_module.find('.et_pb_salvattore_content')[0]);}salvattore.recreateColumns($current_module.find('.et_pb_salvattore_content')[0]);$current_module.find('.et_pb_post').css({opacity:'1'});}// init audio module on new content
if($current_module.find('.et_audio_container').length>0&&typeof wp!=='undefined'&&typeof wp.mediaelement!=='undefined'&&'function'===typeof wp.mediaelement.initialize){wp.mediaelement.initialize();$(window).trigger('resize');}// load waypoint modules such as counters and animated images
if($current_module.find('.et-waypoint, .et_pb_circle_counter, .et_pb_number_counter').length>0){$current_module.find('.et-waypoint, .et_pb_circle_counter, .et_pb_number_counter').each(function(){var $waypoint_module=$(this);if($waypoint_module.hasClass('et_pb_circle_counter')){window.et_pb_reinit_circle_counters($waypoint_module);}if($waypoint_module.hasClass('et_pb_number_counter')){window.et_pb_reinit_number_counters($waypoint_module);}if($waypoint_module.find('.et_pb_counter_amount').length>0){$waypoint_module.find('.et_pb_counter_amount').each(function(){window.et_bar_counters_init($(this));});}$(this).css({opacity:'1'});window.et_reinit_waypoint_modules();});}/**
         * Init post gallery format.
         */if($current_module.find('.et_pb_slider').length>0){$current_module.find('.et_pb_slider').each(function(){et_pb_slider_init($(this));});}/**
         * Init post video format overlay click.
         */$current_module.on('click','.et_pb_video_overlay',function(e){e.preventDefault();et_pb_play_overlayed_video($(this));});// Re-apply fitvids to the new content.
$current_module.fitVids({customSelector:"iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"});$current_module.fadeTo('slow',1);// reinit ET shortcodes.
if('function'===typeof window.et_shortcodes_init){window.et_shortcodes_init($current_module);}// reinit audio players.
et_init_audio_modules();// scroll to the top of the module
$('html, body').animate({scrollTop:scroll_to_position});// Set classes for gallery and portfolio breakdowns
var grid_items=$current_module.find('.et_pb_grid_item');if(grid_items.length){et_pb_set_responsive_grid($(grid_items.parent().get(0)),'.et_pb_grid_item');}}window.et_pb_search_init=function($search){// Update animation breakpoint variable and generate suffix.
var current_mode=et_pb_get_current_window_mode();et_animation_breakpoint=current_mode;var suffix=current_mode!=='desktop'?"-".concat(current_mode):'';var $input_field=$search.find('.et_pb_s');var $button=$search.find('.et_pb_searchsubmit');var input_padding=$search.hasClass("et_pb_text_align_right".concat(suffix))?'paddingLeft':'paddingRight';var reverse_input_padding='paddingLeft'===input_padding?'paddingRight':'paddingLeft';var disabled_button=$search.hasClass('et_pb_hide_search_button');var buttonHeight=$button.outerHeight();var buttonWidth=$button.outerWidth();var inputHeight=$input_field.innerHeight();// set the relative button position to get its height correctly
$button.css({position:'relative'});if(buttonHeight>inputHeight){$input_field.innerHeight(buttonHeight);}if(!disabled_button){// Reset reverse input padding.
$input_field.css(reverse_input_padding,'');$input_field.css(input_padding,"".concat(buttonWidth+10,"px"));}// reset the button position back to default
$button.css({position:''});};/**
       * Fix search module which has percentage based custom margin.
       *
       * @param $search
       */window.et_pb_search_percentage_custom_margin_fix=function($search){var inputMargin=$search.find('.et_pb_s').css('margin').split(' ');var inputMarginObj={};switch(inputMargin.length){case 4:inputMarginObj={top:inputMargin[0],right:inputMargin[1],bottom:inputMargin[2],left:inputMargin[3]};break;case 2:inputMarginObj={top:inputMargin[0],right:inputMargin[1],bottom:inputMargin[0],left:inputMargin[1]};break;default:inputMarginObj={top:inputMargin[0],right:inputMargin[0],bottom:inputMargin[0],left:inputMargin[0]};break;}var inputRight="".concat(0-parseFloat(inputMarginObj.left),"px");$search.find('.et_pb_searchsubmit').css({top:inputMarginObj.top,right:inputRight,bottom:inputMarginObj.bottom});};if($('.et_pb_search').length){$('.et_pb_search').each(function(){var $search=$(this);if($search.is('.et_pb_search_percentage_custom_margin')){et_pb_search_percentage_custom_margin_fix($search);}et_pb_search_init($search);});}window.et_pb_comments_init=function($comments_module){var $comments_module_button=$comments_module.find('.comment-reply-link, .submit');if($comments_module_button.length){$comments_module_button.addClass('et_pb_button');if(typeof $comments_module.attr('data-icon')!=='undefined'&&$comments_module.attr('data-icon')!==''){$comments_module_button.attr('data-icon',$comments_module.attr('data-icon'));$comments_module_button.addClass('et_pb_custom_button_icon');}if(typeof $comments_module.attr('data-icon-tablet')!=='undefined'&&$comments_module.attr('data-icon-tablet')!==''){$comments_module_button.attr('data-icon-tablet',$comments_module.attr('data-icon-tablet'));$comments_module_button.addClass('et_pb_custom_button_icon');}if(typeof $comments_module.attr('data-icon-phone')!=='undefined'&&$comments_module.attr('data-icon-phone')!==''){$comments_module_button.attr('data-icon-phone',$comments_module.attr('data-icon-phone'));$comments_module_button.addClass('et_pb_custom_button_icon');}}};// apply required classes for the Reply buttons in Comments Module
if($('.et_pb_comments_module').length){$('.et_pb_comments_module').each(function(){var $comments_module=$(this);et_pb_comments_init($comments_module);});}// Wait the page fully loaded to make sure all the css applied before calculating sizes
var previousCallback=document.onreadystatechange||function(){};document.onreadystatechange=function(){if('complete'===document.readyState){window.et_fix_pricing_currency_position();}previousCallback();};$('.et_pb_contact_form_container, .et_pb_newsletter_custom_fields').each(function(){var $form=$(this);var subjects_selector='input, textarea, select';var condition_check=function condition_check(){et_conditional_check($form);};var debounced_condition_check=et_pb_debounce(condition_check,250);// Listen for any field change
$form.on('change',subjects_selector,condition_check);$form.on('keydown',subjects_selector,debounced_condition_check);// Conditions may be satisfied on default form state
et_conditional_check($form);});function et_conditional_check($form){var $conditionals=$form.find('[data-conditional-logic]');// Upon change loop all the fields that have conditional logic
$conditionals.each(function(){var $conditional=$(this);// jQuery automatically parses the JSON
var rules=$conditional.data('conditional-logic');var relation=$conditional.data('conditional-relation');// Loop all the conditional logic rules
var matched_rules=[];for(var i=0;i<rules.length;i++){var ruleset=rules[i];var check_id=ruleset[0];var check_type=ruleset[1];var check_value=ruleset[2];var $wrapper=$form.find(".et_pb_contact_field[data-id=\"".concat(check_id,"\"]"));var field_id=$wrapper.data('id');var field_type=$wrapper.data('type');var field_value;//
// Check if the field wrapper is actually visible when including it in the rules check.
// This avoids the scenario with a parent, child and grandchild field where the parent
// field is changed but the grandchild remains visible, because the child one has the
// right value, even though it is not visible
//
if(!$wrapper.is(':visible')){continue;}// Get the proper compare value based on the field type
switch(field_type){case'input':case'email':field_value=$wrapper.find('input').val();break;case'text':field_value=$wrapper.find('textarea').val();break;case'radio':field_value=$wrapper.find('input:checked').val()||'';break;case'checkbox'://
// Conditional logic for checkboxes is a bit trickier since we have multiple values.
// To address that we first check if a checked checkbox with the desired value
// exists, which is represented by setting `field_value` to true or false.
// Next we always set `check_value` to true so we can compare against the
// result of the value check.
//
var $checkbox=$wrapper.find(':checkbox:checked');field_value=false;$checkbox.each(function(){if(check_value===$(this).val()){field_value=true;return false;}});check_value=true;break;case'select':field_value=$wrapper.find('select').val();break;}//
// 'is empty' / 'is not empty' are comparing against an empty value so simply
// reset the `check_value` and update the condition to 'is' / 'is not'
//
if('is empty'===check_type||'is not empty'===check_type){check_type='is empty'===check_type?'is':'is not';check_value='';//
// `field_value` will always be `false` if all the checkboxes are unchecked
// since it only changes when a checked checkbox matches the `check_value`
// Because of `check_value` being reset to empty string we do the same
// to `field_value` (if it is `false`) to cover the 'is empty' case
//
if('checkbox'===field_type&&false===field_value){field_value='';}}// Need to `stripslashes` value to match with rule value
if(field_value&&'string'===typeof field_value){field_value=field_value.replace(/\\(.)/g,'$1');}// Check if the value IS matching (if it has to)
if('is'===check_type&&field_value!==check_value){continue;}// Check if the value IS NOT matching (if it has to)
if('is not'===check_type&&field_value===check_value){continue;}/**
             * Create the contains/not contains regular expresion
             * Need to escape a character that has special meaning inside a regular expression.
             */var containsRegExp=new RegExp(check_value,'i');if('string'===typeof check_value){containsRegExp=new RegExp(check_value.replace(/[\\^$*+?.()|[\]{}]/g,'\\$&'),'i');}// Check if the value IS containing
if('contains'===check_type&&!field_value.match(containsRegExp)){continue;}// Check if the value IS NOT containing
if('does not contain'===check_type&&field_value.match(containsRegExp)){continue;}// Prepare the values for the 'is greater than' / 'is less than' check
var maybeNumericValue=parseInt(field_value);var maybeNumbericCheckValue=parseInt(check_value);if(('is greater'===check_type||'is less'===check_type)&&(isNaN(maybeNumericValue)||isNaN(maybeNumbericCheckValue))){continue;}// Check if the value is greater than
if('is greater'===check_type&&maybeNumericValue<=maybeNumbericCheckValue){continue;}// Check if the value is less than
if('is less'===check_type&&maybeNumericValue>=maybeNumbericCheckValue){continue;}matched_rules.push(true);}// Hide all the conditional fields initially
$conditional.hide();//
// Input fields may have HTML5 pattern validation which must be ignored
// if the field is not visible. In order for the pattern to not be
// taken into account the field must have novalidate property and
// to not be required (or to not have a pattern attribute)
//
var $conditional_input=$conditional.find('input[type="text"]');var conditional_pattern=$conditional_input.attr('pattern');$conditional_input.attr('novalidate','novalidate');$conditional_input.attr('data-pattern',conditional_pattern);$conditional_input.removeAttr('pattern');if('all'===relation&&rules.length===matched_rules.length){$conditional.show();$conditional_input.removeAttr('novalidate');$conditional_input.attr('pattern',$conditional_input.data('pattern'));}if('any'===relation&&0<matched_rules.length){$conditional.show();$conditional_input.removeAttr('novalidate');$conditional_input.attr('pattern',$conditional_input.data('pattern'));}});}// Adjust z-index for animated menu modules.
if('undefined'!==typeof et_animation_data&&et_animation_data.length>0){// Store the maximum z-index that should be applied
var maxMenuIndex=0;// Increase the maximum z-index by one for each module
for(var i=0;i<et_animation_data.length;i++){var animation_entry=et_animation_data[i];if(!animation_entry.class){continue;}var $animationEntry=$(".".concat(animation_entry.class));if($animationEntry.hasClass('et_pb_menu')||$animationEntry.hasClass('et_pb_fullwidth_menu')){maxMenuIndex++;}}var $menus=$('.et_pb_menu, .et_pb_fullwidth_menu');$menus.each(function(){var $menu=$(this);// When the animation ends apply z-index in descending order to each of the animated modules
$menu.on('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(){$menu.css('z-index',maxMenuIndex-$menu.index('.et_pb_menu, .et_pb_fullwidth_menu'));});});}/**
       * Provide event listener for plugins to hook up to.
       */$(document).trigger('et_pb_after_init_modules');window.et_pb_wrap_woo_attribute_fields_in_span();window.et_pb_shop_add_hover_class=function(){$('.et_pb_shop').each(function(){var $et_pb_shop=$(this);var $et_shop_image=$et_pb_shop.find('.et_shop_image');$et_shop_image.on('mouseover',function(){var $this=$(this);var $et_li_wrapper=$this.parents().eq(1);// Elements
var $price=$et_li_wrapper.find('.price');var $title=$et_li_wrapper.find('.woocommerce-loop-product__title');$price.addClass('hover');$title.addClass('hover');}).on('mouseout',function(){var $this=$(this);var $et_li_wrapper=$this.parents().eq(1);// Elements
var $price=$et_li_wrapper.find('.price');var $title=$et_li_wrapper.find('.woocommerce-loop-product__title');$price.removeClass('hover');$title.removeClass('hover');});});};et_pb_shop_add_hover_class();});};/**
   * Fix unwanted divider spacing (mostly in webkit) when svg image is repeated and the actual
   * svg image dimension width is in decimal.
   *
   * @since 4.0.10
   *
   * @param {object} $divider JQuery object of `.et_pb_top_inside_divider` or `.et_pb_bottom_inside_divider`.
   */window.etFixDividerSpacing=function($divider){// Clear current inline style first so builder's outputted css is retrieved
$divider.attr('style','');// Get divider variables
var backgroundSize=$divider.css('backgroundSize').split(' ');var horizontalSize=backgroundSize[0];var verticalSize=backgroundSize[1];var hasValidSizes='string'===typeof horizontalSize&&'string'===typeof verticalSize;// Is not having default value + using percentage based value
if(hasValidSizes&&'100%'!==horizontalSize&&'%'===horizontalSize.substr(-1,1)){var dividerWidth=parseFloat($divider.outerWidth());var imageWidth=parseFloat(horizontalSize)/100*dividerWidth;var backgroundSizePx="".concat(parseInt(imageWidth),"px ").concat(verticalSize);$divider.css('backgroundSize',backgroundSizePx);}};if(window.et_pb_custom&&window.et_pb_custom.is_ab_testing_active&&'yes'===window.et_pb_custom.is_cache_plugin_active){// update the window.et_load_event_fired variable to initiate the scripts properly
$(window).on('load',function(){window.et_load_event_fired=true;});var pendingRequests=et_pb_custom.ab_tests.length;$.each(et_pb_custom.ab_tests,function(index,test){// get the subject id for current visitor and display it
// this ajax request performed only if AB Testing is enabled and cache plugin active
$.ajax({type:'POST',url:et_pb_custom.ajaxurl,dataType:'json',data:{action:'et_pb_ab_get_subject_id',et_frontend_nonce:et_pb_custom.et_frontend_nonce,et_pb_ab_test_id:test.post_id},success:function success(subject_data){if(subject_data){// Append the subject content to appropriate placeholder.
var $placeholder=$(".et_pb_subject_placeholder_id_".concat(test.post_id,"_").concat(subject_data.id));$placeholder.after(subject_data.content);$placeholder.remove();}pendingRequests-=1;if(pendingRequests<=0){// remove all other placeholders from the DOM
$('.et_pb_subject_placeholder').remove();// init all scripts once the subject loaded
window.et_pb_init_modules();$('body').trigger('et_pb_ab_subject_ready');}}});});}else{window.et_pb_init_modules();}/**
   * Fix anchor scrolling to position.
   *
   * @since 4.6.6
   */function et_pb_fix_scroll_to_anchor_position(){window.et_location_hash=window.location.hash.replace(/[^a-zA-Z0-9-_#]/g,'');if(''===window.et_location_hash){return;}// Prevent jump to anchor - Firefox
window.scrollTo(0,0);var anchoredElement=$(window.et_location_hash);if(!anchoredElement.length){return;}// bypass auto scrolling, if supported
if('scrollRestoration'in history){history.scrollRestoration='manual';}else{// Prevent jump to anchor - Other Browsers
window.et_location_hash_style=anchoredElement.css('display');anchoredElement.css('display','none');}}document.addEventListener('DOMContentLoaded',function(){// Enable alternative scroll to anchor method only for Divi and Extra.
if(_utils.isDiviTheme||_utils.isExtraTheme){et_pb_fix_scroll_to_anchor_position();}// Hover transition are disabled for section dividers to prevent visual glitches while document is loading,
// we can enable them again now. Also, execute unwanted divider spacing
$('.et_pb_top_inside_divider.et-no-transition, .et_pb_bottom_inside_divider.et-no-transition').removeClass('et-no-transition').each(function(){etFixDividerSpacing($(this));});// Set a delay just to make sure all modules are ready before we append box shadow container.
// Similar approach exists on VB custom CSS output.
setTimeout(function(){(window.et_pb_box_shadow_elements||[]).map(et_pb_box_shadow_apply_overlay);},0);});$(window).on('load',function(){var $body=$('body');// set load event here because safari sometimes will not run load events registered on et_pb_init_modules.
window.et_load_event_fired=true;// fix Safari letter-spacing bug when styles applied in `head`
// Trigger styles redraw by changing body display property to differentvalue and reverting it back to original.
if($body.hasClass('safari')){var original_display_value=$body.css('display');var different_display_value='initial'===original_display_value?'block':'initial';$body.css({display:different_display_value});setTimeout(function(){$body.css({display:original_display_value});},0);// Keep this script here, as it needs to be executed only if the script from above is executed
// As the script from above somehow affects WooCommerce single product image rendering.
// https://github.com/elegantthemes/Divi/issues/7454
if($body.hasClass('woocommerce-page')&&$body.hasClass('single-product')){var $wc=$('.woocommerce div.product div.images.woocommerce-product-gallery');if(0===$wc.length){return;}// Don't use jQuery to get element opacity, as it may return an outdated value.
var opacity=parseInt($wc[0].style.opacity);if(!opacity){return;}$wc.css({opacity:opacity-0.09});setTimeout(function(){$wc.css({opacity:opacity});},0);}}// Reinit Star Ratings in Woo Modules.
// Deafuilt Woocommerce scripts do not init Star Ratings correctly
// if there are more than 1 place with stars on page
// Run this on .on('load') event after woocommerce modules are ready and processed.
if($('.et_pb_module #rating, .et_pb_module .comment-form-rating').length>0){$('.et_pb_module #rating, .et_pb_module .comment-form-rating').each(function(){window.et_pb_init_woo_star_rating($(this));});}// Apply Custom icons to Woo Module Buttons.
// All the buttons generated in WooCommerce template and we cannot add custom attributes
// Therefore we have to use js to add it.
if($('.et_pb_woo_custom_button_icon').length>0){$('.et_pb_woo_custom_button_icon').each(function(){var $thisModule=$(this);var buttonClass=$thisModule.data('button-class');var $buttonEl=$thisModule.find(".".concat(buttonClass));var buttonIcon=$thisModule.attr('data-button-icon');var buttonIconTablet=$thisModule.attr('data-button-icon-tablet');var buttonIconPhone=$thisModule.attr('data-button-icon-phone');var buttonClassName='et_pb_promo_button et_pb_button';$buttonEl.addClass(buttonClassName);if(buttonIcon||buttonIconTablet||buttonIconPhone){$buttonEl.addClass('et_pb_custom_button_icon');$buttonEl.attr('data-icon',buttonIcon);$buttonEl.attr('data-icon-tablet',buttonIconTablet);$buttonEl.attr('data-icon-phone',buttonIconPhone);}});}/**
     * Hide empty WooCommerce Meta module
     * Meta module component is toggled using classname, thus js visibility check to determine
     * whether the module is "empty" (visibility-wise) or not.
     */if($('.et_pb_wc_meta').length>0){$('.et_pb_wc_meta').each(function(){var $thisModule=$(this);if(''===$thisModule.find('.product_meta span:visible').text()){$thisModule.addClass('et_pb_wc_meta_empty');}});}});// Handle cases where builder modules are not initially visible and produce sizing
// issues as a result (e.g. slider module inside popups, accordions etc.).
$(function(){if(MutationObserver===undefined){// Bail if MutationObserver is not supported by the user agent.
return;}var getSectionParents=function getSectionParents($sections){var filterMethod=$.uniqueSort!==undefined?$.uniqueSort:$.unique;var $sectionParents=$([]);$sections.each(function(){$sectionParents=$sectionParents.add($(this).parents());});// Avoid duplicate section parents.
return filterMethod($sectionParents.get());};var getInvisibleNodes=function getInvisibleNodes($sections){return $sections.filter(function(){return!$(this).is(':visible');}).length;};var $sections=$('.et_pb_section');var sectionParents=getSectionParents($sections);var invisibleSections=getInvisibleNodes($sections);var maybeRefreshSections=function maybeRefreshSections(){var newInvisibleSections=getInvisibleNodes($sections);if(newInvisibleSections<invisibleSections){// Trigger resize if some previously invisible sections have become visible.
$(window).trigger('resize');}invisibleSections=newInvisibleSections;};var observer=new MutationObserver(window.et_pb_debounce(maybeRefreshSections,200));for(var i=0;i<sectionParents.length;i++){observer.observe(sectionParents[i],{childList:true,attributes:true,attributeFilter:['class','style'],attributeOldValue:false,characterData:false,characterDataOldValue:false,subtree:false});}});function et_fix_html_margin(){// Calculate admin bar height and apply correct margin to HTML in VB
if($('body').is('.et-fb')){var $adminBar=$('#wpadminbar');if($adminBar.length>0){setTimeout(function(){$('#et_fix_html_margin').remove();$('<style />',{id:'et_fix_html_margin',text:'html.js.et-fb-top-html { margin-top: 0px !important; }'}).appendTo('head');},0);}}}et_fix_html_margin();// Menu module.
function menuModuleOpenSearch($module){var $menu=$module.find('.et_pb_menu__wrap').first();var $search=$module.find('.et_pb_menu__search-container').first();var $input=$module.find('.et_pb_menu__search-input').first();var $fwMenuLogo=$module.find('.et_pb_row > .et_pb_menu__logo-wrap').first();var $menuLogo=$module.find('.et_pb_menu_inner_container > .et_pb_menu__logo-wrap').first();var $logo=$fwMenuLogo.add($menuLogo);var isMobile=$(window).width()<=980;if($search.hasClass('et_pb_is_animating')){return;}// Close the menu if it is open.
$menu.find('.mobile_nav.opened').removeClass('opened').addClass('closed');$menu.find('.et_mobile_menu').hide();$menu.removeClass('et_pb_menu__wrap--visible').addClass('et_pb_menu__wrap--hidden');$search.removeClass('et_pb_menu__search-container--hidden et_pb_menu__search-container--disabled').addClass('et_pb_menu__search-container--visible et_pb_is_animating');// Adjust spacing based on layout and the logo used.
$search.css('padding-top','0px');if($module.hasClass('et_pb_menu--style-left_aligned')||$module.hasClass('et_pb_fullwidth_menu--style-left_aligned')){$search.css('padding-left',"".concat($logo.width(),"px"));}else{var logoHeight=$logo.height();$search.css('padding-left','0px');if(isMobile||$module.hasClass('et_pb_menu--style-centered')||$module.hasClass('et_pb_fullwidth_menu--style-centered')){// 30 = logo margin-bottom.
$search.css('padding-top',"".concat(logoHeight>0?logoHeight+30:0,"px"));}}$input.css('font-size',$module.find('.et-menu-nav li a').first().css('font-size'));setTimeout(function(){$input.trigger('focus');},0);setTimeout(function(){$menu.addClass('et_pb_no_animation');$search.addClass('et_pb_no_animation').removeClass('et_pb_is_animating');},1000);}function menuModuleCloseSearch($module){var $menu=$module.find('.et_pb_menu__wrap').first();var $search=$module.find('.et_pb_menu__search-container').first();var $input=$module.find('.et_pb_menu__search-input').first();if($search.hasClass('et_pb_is_animating')){return;}$menu.removeClass('et_pb_menu__wrap--hidden').addClass('et_pb_menu__wrap--visible');$search.removeClass('et_pb_menu__search-container--visible').addClass('et_pb_menu__search-container--hidden et_pb_is_animating');$input.trigger('blur');setTimeout(function(){$search.removeClass('et_pb_is_animating').addClass('et_pb_menu__search-container--disabled');},1000);}function menuModuleCloneInlineLogo($module){var $logo=$module.find('.et_pb_menu__logo-wrap').first();if(0===$logo.length){return;}var $menu=$module.find('.et_pb_menu__menu').first();if(0===$menu.length||$menu.find('.et_pb_menu__logo').length>0){return;}var li=window.et_pb_menu_inject_inline_centered_logo($menu.get(0));if(null===li){return;}$(li).empty().append($logo.clone());}$(document).on('click','.et_pb_menu__search-button',function(){menuModuleOpenSearch($(this).closest('.et_pb_module'));});$(document).on('click','.et_pb_menu__close-search-button',function(){menuModuleCloseSearch($(this).closest('.et_pb_module'));});$(document).on('blur','.et_pb_menu__search-input',function(){menuModuleCloseSearch($(this).closest('.et_pb_module'));});$(function(){$('.et_pb_menu--style-inline_centered_logo, .et_pb_fullwidth_menu--style-inline_centered_logo').each(function(){menuModuleCloneInlineLogo($(this));});// The visible iframe is still being processed by lazysizes at the first
// load, so we need to check those iframes and reload fitVids.
if(!(0,_isUndefined.default)(window.lazySizes)){$(document).on('lazyloaded',function(e){var $target=$(e.target);var targetName=$target.attr('name');// Target fitvid or unassigned iframe to ensure it has the correct source.
if($target.is('iframe')&&((0,_includes.default)(targetName,'fitvid')||(0,_isUndefined.default)(targetName))){$target.attr('src',$target.attr('data-src'));$target.parent().fitVids();}});}});document.addEventListener('DOMContentLoaded',window.et_pb_reposition_menu_module_dropdowns);$(window).on('resize',window.et_pb_reposition_menu_module_dropdowns);// Muti View Data Handler (Responsive + Hover)
var et_multi_view={contexts:['content','attrs','styles','classes','visibility'],screenMode:undefined,windowWidth:undefined,init:function init(screenMode,windowWidth){et_multi_view.screenMode=screenMode;et_multi_view.windowWidth=windowWidth;$('.et_multi_view__hover_selector').removeClass('et_multi_view__hover_selector');et_multi_view.getElements().each(function(){var $multiView=$(this);// Skip for builder element
if(et_multi_view.isBuilderElement($multiView)){return;}var data=et_multi_view.getData($multiView);if(data.$hoverSelector&&data.$hoverSelector.length){data.$hoverSelector.addClass('et_multi_view__hover_selector');}et_multi_view.normalStateHandler(data);});if(et_multi_view.isTouchDevice()){window.removeEventListener('touchstart',et_multi_view.touchStateHandler);window.addEventListener('touchstart',et_multi_view.touchStateHandler,{passive:false});}else{$('.et_multi_view__hover_selector').off('mouseenter mouseleave',et_multi_view.hoverStateHandler);$('.et_multi_view__hover_selector').on('mouseenter mouseleave',et_multi_view.hoverStateHandler);$('#main-header, #main-footer').off('mouseenter',et_multi_view.resetHoverState);$('#main-header, #main-footer').on('mouseenter',et_multi_view.resetHoverState);}},normalStateHandler:function normalStateHandler(data){if(!data||et_multi_view.isEmptyObject(data.normalState)){return;}et_multi_view.callbackHandlerDefault(data.normalState,data.$target,data.$source,data.slug);},touchStateHandler:function touchStateHandler(event){var $hoverSelector=$(event.target);if(!$(event.target).hasClass('et_multi_view__hover_selector')){$hoverSelector=$(event.target).closest('.et_multi_view__hover_selector');}// Bail early if no hover selector found.
if(!$hoverSelector||!$hoverSelector.length){return;}var $link=$(event.target).is('a')?$(event.target):$(event.target).closest('a',$hoverSelector);// Bail early if clicked element is a link or child element of link.
if($link&&$link.length){var linkHref=$link.attr('href');if(linkHref!=='#'&&linkHref.indexOf('#')===0&&$(linkHref)&&$(linkHref).length){event.preventDefault();$('html, body').animate({scrollTop:$(linkHref).offset().top},800);}return;}if($hoverSelector.hasClass('et_multi_view__hovered')){et_multi_view.resetHoverState($hoverSelector,function(){if($hoverSelector.hasClass('et_clickable')){$hoverSelector.trigger('click');}});}else{et_multi_view.setHoverState($hoverSelector,function(){if($hoverSelector.hasClass('et_clickable')){$hoverSelector.trigger('click');}});}},hoverStateHandler:function hoverStateHandler(event){var $hoverSelector=$(event.target);if(!$(event.target).hasClass('et_multi_view__hover_selector')){$hoverSelector=$(event.target).closest('.et_multi_view__hover_selector');}if('mouseenter'===event.type&&!$hoverSelector.hasClass('et_multi_view__hovered')){et_multi_view.setHoverState($hoverSelector);}else if('mouseleave'===event.type&&$hoverSelector.hasClass('et_multi_view__hovered')){et_multi_view.resetHoverState($hoverSelector);}},setHoverState:function setHoverState($hoverSelector,callback){et_multi_view.resetHoverState();var datas=[];if($hoverSelector.data('etMultiView')){datas.push(et_multi_view.getData($hoverSelector));}$hoverSelector.find('[data-et-multi-view]').each(function(){var $multiView=$(this);// Skip for builder element
if(et_multi_view.isBuilderElement($multiView)){return;}datas.push(et_multi_view.getData($multiView));});for(var index=0;index<datas.length;index++){var data=datas[index];if(data&&!et_multi_view.isEmptyObject(data.normalState)&&!et_multi_view.isEmptyObject(data.hoverState)){et_multi_view.callbackHandlerDefault(data.hoverState,data.$target,data.$source,data.slug);}}$hoverSelector.addClass('et_multi_view__hovered');if('function'===typeof callback){callback();}},resetHoverState:function resetHoverState($hoverSelector,callback){var datas=[];if($hoverSelector&&$hoverSelector.length){if($hoverSelector.data('etMultiView')){datas.push(et_multi_view.getData($hoverSelector));}$hoverSelector.find('[data-et-multi-view]').each(function(){var $multiView=$(this);// Skip for builder element
if(et_multi_view.isBuilderElement($multiView)){return;}datas.push(et_multi_view.getData($multiView));});}else{et_multi_view.getElements().each(function(){var $multiView=$(this);// Skip for builder element
if(et_multi_view.isBuilderElement($multiView)){return;}datas.push(et_multi_view.getData($multiView));});}for(var index=0;index<datas.length;index++){var data=datas[index];if(data&&!et_multi_view.isEmptyObject(data.normalState)&&!et_multi_view.isEmptyObject(data.hoverState)){et_multi_view.callbackHandlerDefault(data.normalState,data.$target,data.$source,data.slug);}}$('.et_multi_view__hover_selector').removeClass('et_multi_view__hovered');if('function'===typeof callback){callback();}},getData:function getData($source){if(!$source||!$source.length){return false;}var screenMode=et_multi_view.getScreenMode();var data=$source.data('etMultiView');if(!data){return false;}if('string'===typeof data){data=et_multi_view.tryParseJSON(data);}if(!data||!data.schema||!data.slug){return false;}var $target=data.target?$(data.target):$source;if(!$target||!$target.length){return false;}var normalState={};var hoverState={};for(var i=0;i<et_multi_view.contexts.length;i++){var context=et_multi_view.contexts[i];// Set context data.
if(data.schema&&data.schema.hasOwnProperty(context)){// Set normal state context data.
if(data.schema[context].hasOwnProperty(screenMode)){normalState[context]=data.schema[context][screenMode];}else if('tablet'===screenMode&&data.schema[context].hasOwnProperty('desktop')){normalState[context]=data.schema[context].desktop;}else if('phone'===screenMode&&data.schema[context].hasOwnProperty('tablet')){normalState[context]=data.schema[context].tablet;}else if('phone'===screenMode&&data.schema[context].hasOwnProperty('desktop')){normalState[context]=data.schema[context].desktop;}// Set hover state context data.
if(data.schema[context].hasOwnProperty('hover')){hoverState[context]=data.schema[context].hover;}}}var $hoverSelector=data.hover_selector?$(data.hover_selector):false;if(!$hoverSelector||!$hoverSelector.length){$hoverSelector=$source.hasClass('.et_pb_module')?$source:$source.closest('.et_pb_module');}return{normalState:normalState,hoverState:hoverState,$target:$target,$source:$source,$hoverSelector:$hoverSelector,slug:data.slug,screenMode:screenMode};},callbackHandlerDefault:function callbackHandlerDefault(data,$target,$source,slug){if(slug){var callbackHandlerCustom=et_multi_view.getCallbackHandlerCustom(slug);if(callbackHandlerCustom&&'function'===typeof callbackHandlerCustom){return callbackHandlerCustom(data,$target,$source,slug);}}var updated={};if(data.hasOwnProperty('content')){updated.content=et_multi_view.updateContent(data.content,$target,$source);}if(data.hasOwnProperty('attrs')){updated.attrs=et_multi_view.updateAttrs(data.attrs,$target,$source);}if(data.hasOwnProperty('styles')){updated.styles=et_multi_view.updateStyles(data.styles,$target,$source);}if(data.hasOwnProperty('classes')){updated.classes=et_multi_view.updateClasses(data.classes,$target,$source);}if(data.hasOwnProperty('visibility')){updated.visibility=et_multi_view.updateVisibility(data.visibility,$target,$source);}return et_multi_view.isEmptyObject(updated)?false:updated;},callbackHandlerCounter:function callbackHandlerCounter(data,$target,$source){var updated=et_multi_view.callbackHandlerDefault(data,$target,$source);if(updated&&updated.attrs&&updated.attrs.hasOwnProperty('data-width')){window.et_bar_counters_init($target);}},callbackHandlerNumberCounter:function callbackHandlerNumberCounter(data,$target,$source){if($target.hasClass('title')){return et_multi_view.callbackHandlerDefault(data,$target,$source);}var attrs=data.attrs||false;if(!attrs){return;}if(attrs.hasOwnProperty('data-percent-sign')){et_multi_view.updateContent(attrs['data-percent-sign'],$target.find('.percent-sign'),$source);}if(attrs.hasOwnProperty('data-number-value')){var $the_counter=$target.closest('.et_pb_number_counter');var numberValue=attrs['data-number-value']||50;var numberSeparator=attrs['data-number-separator']||'';var updated=et_multi_view.updateAttrs({'data-number-value':numberValue,'data-number-separator':numberSeparator},$the_counter,$source);if(updated&&$the_counter.data('easyPieChart')){$the_counter.data('easyPieChart').update(numberValue);}}},callbackHandlerCircleCounter:function callbackHandlerCircleCounter(data,$target,$source){if(!$target.hasClass('et_pb_circle_counter_inner')){return et_multi_view.callbackHandlerDefault(data,$target,$source);}var attrs=data.attrs||false;if(!attrs){return;}if(attrs.hasOwnProperty('data-percent-sign')){et_multi_view.updateContent(attrs['data-percent-sign'],$target.find('.percent-sign'),$source);}if(attrs.hasOwnProperty('data-number-value')){var $the_counter=$target.closest('.et_pb_circle_counter_inner');var numberValue=attrs['data-number-value'];var attrsUpdated=et_multi_view.updateAttrs({'data-number-value':numberValue},$the_counter,$source);if(attrsUpdated&&$the_counter.data('easyPieChart')){window.et_pb_circle_counter_init($the_counter);$the_counter.data('easyPieChart').update(numberValue);}}},callbackHandlerSlider:function callbackHandlerSlider(data,$target,$source){var updated=et_multi_view.callbackHandlerDefault(data,$target,$source);if($target.hasClass('et_pb_module')&&updated&&updated.classes){if(updated.classes.add&&updated.classes.add.indexOf('et_pb_slider_no_arrows')!==-1){$target.find('.et-pb-slider-arrows').addClass('et_multi_view_hidden');}if(updated.classes.remove&&updated.classes.remove.indexOf('et_pb_slider_no_arrows')!==-1){$target.find('.et-pb-slider-arrows').removeClass('et_multi_view_hidden');}if(updated.classes.add&&updated.classes.add.indexOf('et_pb_slider_no_pagination')!==-1){$target.find('.et-pb-controllers').addClass('et_multi_view_hidden');}if(updated.classes.remove&&updated.classes.remove.indexOf('et_pb_slider_no_pagination')!==-1){$target.find('.et-pb-controllers').removeClass('et_multi_view_hidden');}}},callbackHandlerPostSlider:function callbackHandlerPostSlider(data,$target,$source){var updated=et_multi_view.callbackHandlerDefault(data,$target,$source);if($target.hasClass('et_pb_module')&&updated&&updated.classes){if(updated.classes.add&&updated.classes.add.indexOf('et_pb_slider_no_arrows')!==-1){$target.find('.et-pb-slider-arrows').addClass('et_multi_view_hidden');}if(updated.classes.remove&&updated.classes.remove.indexOf('et_pb_slider_no_arrows')!==-1){$target.find('.et-pb-slider-arrows').removeClass('et_multi_view_hidden');}if(updated.classes.add&&updated.classes.add.indexOf('et_pb_slider_no_pagination')!==-1){$target.find('.et-pb-controllers').addClass('et_multi_view_hidden');}if(updated.classes.remove&&updated.classes.remove.indexOf('et_pb_slider_no_pagination')!==-1){$target.find('.et-pb-controllers').removeClass('et_multi_view_hidden');}}},callbackHandlerVideoSlider:function callbackHandlerVideoSlider(data,$target,$source){var updated=et_multi_view.callbackHandlerDefault(data,$target,$source);if($target.hasClass('et_pb_slider')&&updated&&updated.classes){if(updated.classes.add&&updated.classes.add.indexOf('et_pb_slider_no_arrows')!==-1){$target.find('.et-pb-slider-arrows').addClass('et_multi_view_hidden');}if(updated.classes.remove&&updated.classes.remove.indexOf('et_pb_slider_no_arrows')!==-1){$target.find('.et-pb-slider-arrows').removeClass('et_multi_view_hidden');}var isInitSlider=function isInitSlider(){if(updated.classes.add&&updated.classes.add.indexOf('et_pb_slider_dots')!==-1){return'et_pb_slider_dots';}if(updated.classes.add&&updated.classes.add.indexOf('et_pb_slider_carousel')!==-1){return'et_pb_slider_carousel';}return false;};var sliderControl=isInitSlider();if(sliderControl){var sliderApi=$target.data('et_pb_simple_slider');if('object'===_typeof(sliderApi)){sliderApi.et_slider_destroy();}et_pb_slider_init($target);if('et_pb_slider_carousel'===sliderControl){$target.siblings('.et_pb_carousel').et_pb_simple_carousel({slide_duration:1000});}}}},callbackHandlerSliderItem:function callbackHandlerSliderItem(data,$target,$source){if(!$target.hasClass('et_pb_slide_video')&&!$target.is('img')){return et_multi_view.callbackHandlerDefault(data,$target,$source);}if($target.hasClass('et_pb_slide_video')){var $contentNew=data&&data.content?$(data.content):false;var $contentOld=$target.html().indexOf('fluid-width-video-wrapper')!==-1?$($target.find('.fluid-width-video-wrapper').html()):$($target.html());if(!$contentNew||!$contentOld){return;}var updated=false;if($contentNew.hasClass('wp-video')&&$contentOld.hasClass('wp-video')){var isVideoNeedUpdate=function isVideoNeedUpdate(){if($contentNew.find('source').length!==$contentOld.find('source').length){return true;}var isDifferentAttr=false;$contentNew.find('source').each(function(index){var $contentOldSource=$contentOld.find('source').eq(index);if($(this).attr('src')!==$contentOldSource.attr('src')){isDifferentAttr=true;}});return isDifferentAttr;};if(isVideoNeedUpdate()){updated=et_multi_view.callbackHandlerDefault(data,$target,$source);}}else if($contentNew.is('iframe')&&$contentOld.is('iframe')&&$contentNew.attr('src')!==$contentOld.attr('src')){updated=et_multi_view.callbackHandlerDefault(data,$target,$source);}else if($contentNew.hasClass('wp-video')&&$contentOld.is('iframe')||$contentNew.is('iframe')&&$contentOld.hasClass('wp-video')){updated=et_multi_view.callbackHandlerDefault(data,$target,$source);}if(updated&&updated.content){if($contentNew.is('iframe')){$target.closest('.et_pb_module').fitVids();}else{var videoWidth=$contentNew.find('video').attr('width');var videoHeight=$contentNew.find('video').attr('height');var videContainerWidth=$target.width();var videContainerHeight=videContainerWidth/videoWidth*videoHeight;$target.find('video').mediaelementplayer({videoWidth:parseInt(videContainerWidth),videoHeight:parseInt(videContainerHeight),autosizeProgress:false,success:function success(mediaElement,domObject){var $domObject=$(domObject);var videoMarginTop=videContainerHeight-$domObject.height()+$(mediaElement).height();$domObject.css('margin-top',"".concat(videoMarginTop,"px"));}});}}}else if($target.is('img')){var updated=et_multi_view.callbackHandlerDefault(data,$target,$source);if(updated&&updated.attrs&&updated.attrs.src){var $slider=$target.closest('.et_pb_module');$target.css('visibility','hidden');et_fix_slider_height($slider);setTimeout(function(){et_fix_slider_height($slider);$target.css('visibility','visible');},100);}}},callbackHandlerVideo:function callbackHandlerVideo(data,$target,$source){if($target.hasClass('et_pb_video_overlay')){return et_multi_view.callbackHandlerDefault(data,$target,$source);}var updated=false;var $contentNew=data&&data.content?$(data.content):false;var $contentOld=$target.html().indexOf('fluid-width-video-wrapper')!==-1?$($target.find('.fluid-width-video-wrapper').html()):$($target.html());if(!$contentNew||!$contentOld){return;}if($contentNew.is('video')&&$contentOld.is('video')){var isVideoNeedUpdate=function isVideoNeedUpdate(){if($contentNew.find('source').length!==$contentOld.find('source').length){return true;}var isDifferentAttr=false;$contentNew.find('source').each(function(index){var $contentOldSource=$contentOld.find('source').eq(index);if($(this).attr('src')!==$contentOldSource.attr('src')){isDifferentAttr=true;}});return isDifferentAttr;};if(isVideoNeedUpdate()){updated=et_multi_view.callbackHandlerDefault(data,$target,$source);}}else if($contentNew.is('iframe')&&$contentOld.is('iframe')&&$contentNew.attr('src')!==$contentOld.attr('src')){updated=et_multi_view.callbackHandlerDefault(data,$target,$source);}else if($contentNew.is('video')&&$contentOld.is('iframe')||$contentNew.is('iframe')&&$contentOld.is('video')){updated=et_multi_view.callbackHandlerDefault(data,$target,$source);}if(updated&&updated.content){if($contentNew.is('iframe')&&$.fn.fitVids){$target.fitVids();}}return updated;},callbackHandlerBlog:function callbackHandlerBlog(data,$target,$source){var updated=et_multi_view.callbackHandlerDefault(data,$target,$source);var classesAdded=et_multi_view.getObjectValue(updated,'classes.add');if(classesAdded&&classesAdded.indexOf('et_pb_blog_show_content')!==-1){et_reinit_waypoint_modules();}},callbackHandlerWooCommerceBreadcrumb:function callbackHandlerWooCommerceBreadcrumb(data,$target,$source){if(data.content){return et_multi_view.callbackHandlerDefault(data,$target,$source);}if(data.attrs&&data.attrs.hasOwnProperty('href')){var hrefValue=data.attrs.href;return et_multi_view.updateAttrs({href:hrefValue},$target,$source);}},callbackHandlerWooCommerceTabs:function callbackHandlerWooCommerceTabs(data,$target,$source){var updated=et_multi_view.callbackHandlerDefault(data,$target,$source);if(updated&&updated.attrs&&updated.attrs.hasOwnProperty('data-include_tabs')){// Show only the enabled Tabs i.e. Hide all tabs and show as required.
$target.find('li').hide();$target.find('li').removeClass('et_pb_tab_active');var tabClasses=[];var include_tabs=updated.attrs['data-include_tabs'].split('|');include_tabs.forEach(function(elem){if(''===elem.trim()){return;}tabClasses.push("".concat(elem,"_tab"));});tabClasses.forEach(function(elemClass,idx){if(0===idx){$(".".concat(elemClass)).addClass('et_pb_tab_active');}$(".".concat(elemClass)).show();});}},getCallbackHandlerCustom:function getCallbackHandlerCustom(slug){switch(slug){case'et_pb_counter':return et_multi_view.callbackHandlerCounter;case'et_pb_number_counter':return et_multi_view.callbackHandlerNumberCounter;case'et_pb_circle_counter':return et_multi_view.callbackHandlerCircleCounter;case'et_pb_slider':case'et_pb_fullwidth_slider':return et_multi_view.callbackHandlerSlider;case'et_pb_post_slider':case'et_pb_fullwidth_post_slider':return et_multi_view.callbackHandlerPostSlider;case'et_pb_video_slider':return et_multi_view.callbackHandlerVideoSlider;case'et_pb_slide':return et_multi_view.callbackHandlerSliderItem;case'et_pb_video':return et_multi_view.callbackHandlerVideo;case'et_pb_blog':return et_multi_view.callbackHandlerBlog;case'et_pb_wc_breadcrumb':return et_multi_view.callbackHandlerWooCommerceBreadcrumb;case'et_pb_wc_tabs':return et_multi_view.callbackHandlerWooCommerceTabs;default:return false;}},updateContent:function updateContent(content,$target,$source){if('undefined'===typeof content){return false;}var $targetTemp=$('<'+($target.get(0).tagName||'div')+'>').html(content);if($target.html()===$targetTemp.html()){return false;}$target.empty().html(content);if(!$source.hasClass('et_multi_view_swapped')){$source.addClass('et_multi_view_swapped');}return true;},updateAttrs:function updateAttrs(attrs,$target,$source){if(!attrs){return false;}var updated={};$.each(attrs,function(key,value){var valueOld=$target.attr(key);switch(key){case'class':// Do nothing, use classes data contexts and updateClasses method instead.
break;case'style':// Do nothing, use styles data contexts and updateStyles method instead.
break;case'srcset':case'sizes':// Do nothing, will handle these attributes along with src attribute.
break;case'src':{if(valueOld!==value){$target.off('load');$target.on('load',function(){$target.addClass('et_multi_view_image__loaded');$target.removeClass('et_multi_view_image__loading');});$target.addClass('et_multi_view_image__loading');$target.removeClass('et_multi_view_image__loaded');$target.attr({src:value,srcset:attrs.srcset||'',sizes:attrs.sizes||''});if(value){$target.removeClass('et_multi_view_hidden_image');}else{$target.addClass('et_multi_view_hidden_image');}updated[key]=value;}break;}default:{if(valueOld!==value){$target.attr(key,value);if(0===key.indexOf('data-')){$target.data(key.replace('data-',''),value);}updated[key]=value;}break;}}});if(et_multi_view.isEmptyObject(updated)){return false;}if(!$source.hasClass('et_multi_view_swapped')){$source.addClass('et_multi_view_swapped');}return updated;},updateStyles:function updateStyles(styles,$target,$source){if(!styles){return false;}var updated={};$.each(styles,function(key,value){if($target.css(key)!==value){$target.css(key,value);updated[key]=value;}});if(et_multi_view.isEmptyObject(updated)){return false;}if(!$source.hasClass('et_multi_view_swapped')){$source.addClass('et_multi_view_swapped');}return updated;},updateClasses:function updateClasses(classes,$target,$source){if(!classes){return false;}var updated={};// Add CSS class
if(classes.add){for(var i=0;i<classes.add.length;i++){if(!$target.hasClass(classes.add[i])){$target.addClass(classes.add[i]);if(!updated.hasOwnProperty('add')){updated.add=[];}updated.add.push(classes.add[i]);}}}// Remove CSS class
if(classes.remove){for(var i=0;i<classes.remove.length;i++){if($target.hasClass(classes.remove[i])){$target.removeClass(classes.remove[i]);if(!updated.hasOwnProperty('remove')){updated.remove=[];}updated.remove.push(classes.remove[i]);}}}if(et_multi_view.isEmptyObject(updated)){return false;}if(!$source.hasClass('et_multi_view_swapped')){$source.addClass('et_multi_view_swapped');}return updated;},updateVisibility:function updateVisibility(isVisible,$target,$source){var updated={};if(isVisible&&$target.hasClass('et_multi_view_hidden')){$target.removeClass('et_multi_view_hidden');updated.isVisible=true;}if(!isVisible&&!$target.hasClass('et_multi_view_hidden')){$target.addClass('et_multi_view_hidden');updated.isHidden=true;}if(et_multi_view.isEmptyObject(updated)){return false;}if(!$source.hasClass('et_multi_view_swapped')){$source.addClass('et_multi_view_swapped');}return updated;},isEmptyObject:function isEmptyObject(obj){if(!obj){return true;}var isEmpty=true;for(var key in obj){if(obj.hasOwnProperty(key)){isEmpty=false;}}return isEmpty;},getObjectValue:function getObjectValue(object,path,defaultValue){try{var value=$.extend({},object);var paths=path.split('.');for(var i=0;i<paths.length;++i){value=value[paths[i]];}return value;}catch(error){return defaultValue;}},tryParseJSON:function tryParseJSON(string){try{return JSON.parse(string);}catch(e){return false;}},getScreenMode:function getScreenMode(){if(_utils.isBuilder&&et_multi_view.screenMode){return et_multi_view.screenMode;}var windowWidth=et_multi_view.getWindowWidth();if(windowWidth>980){return'desktop';}if(windowWidth>767){return'tablet';}return'phone';},getWindowWidth:function getWindowWidth(){if(et_multi_view.windowWidth){return et_multi_view.windowWidth;}if(_utils.isBuilder){return $('.et-core-frame').width();}return $(window).width();},getElements:function getElements(){if(_utils.isBuilder){return $('.et-core-frame').contents().find('[data-et-multi-view]');}return $('[data-et-multi-view]');},isBuilderElement:function isBuilderElement($element){return $element.closest('#et-fb-app').length>0;},isTouchDevice:function isTouchDevice(){return'ontouchstart'in window||navigator.msMaxTouchPoints;}};function etMultiViewBootstrap(){if(_utils.isBuilder){$(window).on('et_fb_preview_mode_changed',function(event,screenMode){// Just a gimmick to make the event parameter used.
if('et_fb_preview_mode_changed'!==event.type){return;}et_multi_view.init(screenMode);});}else{$(function(){et_multi_view.init();});$(window).on('orientationchange',function(e){et_multi_view.init();});var et_multi_view_window_resize_timer=null;$(window).on('resize',function(event){// Bail early when the resize event is triggered programmatically.
if(!event.originalEvent||!event.originalEvent.isTrusted){return;}clearTimeout(et_multi_view_window_resize_timer);et_multi_view_window_resize_timer=setTimeout(function(){et_multi_view.init(undefined,$(window).width());},200);});}}etMultiViewBootstrap();if(_utils.isBuilder){$(function(){$(document).on('submit','.et-fb-root-ancestor-sibling form',function(event){event.preventDefault();});$(document).on('click','.et-fb-root-ancestor-sibling a, .et-fb-root-ancestor-sibling button, .et-fb-root-ancestor-sibling input[type="submit"]',function(event){event.preventDefault();});});}// Initialize and render the WooCommerce Reviews rating stars
// This needed for product reviews dynamic content
// @see https://github.com/woocommerce/woocommerce/blob/master/assets/js/frontend/single-product.js#L47
window.etInitWooReviewsRatingStars=function(){$('select[name="rating"]').each(function(){$(this).prev('.stars').remove();$(this).hide().before('<p class="stars">\
						<span>\
							<a class="star-1" href="#">1</a>\
							<a class="star-2" href="#">2</a>\
							<a class="star-3" href="#">3</a>\
							<a class="star-4" href="#">4</a>\
							<a class="star-5" href="#">5</a>\
						</span>\
					</p>');});};})(jQuery);/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! jquery */"jquery"));/***/},/***/"../scripts/utils/utils.js":/*!*********************************!*\
  !*** ../scripts/utils/utils.js ***!
  \*********************************/ /*! no static exports found */ /***/function scriptsUtilsUtilsJs(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.setImportantInlineValue=exports.registerFrontendComponent=exports.maybeIncreaseEmitterMaxListeners=exports.maybeDecreaseEmitterMaxListeners=exports.isVB=exports.isTB=exports.isLBP=exports.isLBB=exports.isFE=exports.isExtraTheme=exports.isDiviTheme=exports.isBuilderType=exports.isBuilder=exports.isBlockEditor=exports.isBFB=exports.is=exports.getOffsets=void 0;var _includes=_interopRequireDefault(__webpack_require__(/*! lodash/includes */"./node_modules/lodash/includes.js"));var _get=_interopRequireDefault(__webpack_require__(/*! lodash/get */"./node_modules/lodash/get.js"));var _jquery=_interopRequireDefault(__webpack_require__(/*! jquery */"jquery"));var _frameHelpers=__webpack_require__(/*! @core/admin/js/frame-helpers */"../../../core/admin/js/frame-helpers.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * Check current page's builder Type.
 *
 * @since 4.6.0
 *
 * @param {string} builderType Fe|vb|bfb|tb|lbb|lbp.
 *
 * @returns {bool}
 */var isBuilderType=function isBuilderType(builderType){return builderType===window.et_builder_utils_params.builderType;};/**
 * Return condition value.
 *
 * @since 4.6.0
 *
 * @param {string} conditionName
 *
 * @returns {bool}
 */exports.isBuilderType=isBuilderType;var is=function is(conditionName){return window.et_builder_utils_params.condition[conditionName];};/**
 * Is current page Frontend.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.is=is;var isFE=isBuilderType('fe');/**
 * Is current page Visual Builder.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isFE=isFE;var isVB=isBuilderType('vb');/**
 * Is current page BFB / New Builder Experience.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isVB=isVB;var isBFB=isBuilderType('bfb');/**
 * Is current page Theme Builder.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isBFB=isBFB;var isTB=isBuilderType('tb');/**
 * Is current page Layout Block Builder.
 *
 * @type {bool}
 */exports.isTB=isTB;var isLBB=isBuilderType('lbb');/**
 * Is current page uses Divi Theme.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isLBB=isLBB;var isDiviTheme=is('diviTheme');/**
 * Is current page uses Extra Theme.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isDiviTheme=isDiviTheme;var isExtraTheme=is('extraTheme');/**
 * Is current page Layout Block Preview.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isExtraTheme=isExtraTheme;var isLBP=isBuilderType('lbp');/**
 * Check if current window is block editor window (gutenberg editing page).
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isLBP=isLBP;var isBlockEditor=0<(0,_jquery.default)(_frameHelpers.top_window.document).find('.edit-post-layout__content').length;/**
 * Check if current window is builder window (VB, BFB, TB, LBB).
 *
 * @since 4.6.0
 *
 * @type {bool}
 */exports.isBlockEditor=isBlockEditor;var isBuilder=(0,_includes.default)(['vb','bfb','tb','lbb'],window.et_builder_utils_params.builderType);/**
 * Get offsets value of all sides.
 *
 * @since 4.6.0
 *
 * @param {object} $selector JQuery selector instance.
 * @param {number} height
 * @param {number} width
 *
 * @returns {object}
 */exports.isBuilder=isBuilder;var getOffsets=function getOffsets($selector){var width=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var height=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;// Return previously saved offset if sticky tab is active; retrieving actual offset contain risk
// of incorrect offsets if sticky horizontal / vertical offset of relative position is modified.
var isStickyTabActive=isBuilder&&$selector.hasClass('et_pb_sticky')&&'fixed'!==$selector.css('position');var cachedOffsets=$selector.data('et-offsets');var cachedDevice=$selector.data('et-offsets-device');var currentDevice=(0,_get.default)(window.ET_FE,'stores.window.breakpoint','');// Only return cachedOffsets if sticky tab is active and cachedOffsets is not undefined and
// cachedDevice equal to currentDevice.
if(isStickyTabActive&&cachedOffsets!==undefined&&cachedDevice===currentDevice){return cachedOffsets;}// Get top & left offsets
var offsets=$selector.offset();// If no offsets found, return empty object
if('undefined'===typeof offsets){return{};}// FE sets the flag for sticky module which uses transform as classname on module wrapper while
// VB, BFB, TB, and LB sets the flag on CSS output's <style> element because it can't modify
// its parent. This compromises avoids the needs to extract transform rendering logic
var hasTransform=isBuilder?$selector.children('.et-fb-custom-css-output[data-sticky-has-transform="on"]').length>0:$selector.hasClass('et_pb_sticky--has-transform');var top='undefined'===typeof offsets.top?0:offsets.top;var left='undefined'===typeof offsets.left?0:offsets.left;// If module is sticky module that uses transform, its offset calculation needs to be adjusted
// because transform tends to modify the positioning of the module
if(hasTransform){// Calculate offset (relative to selector's parent) AFTER it is affected by transform
// NOTE: Can't use jQuery's position() because it considers margin-left `auto` which causes issue
// on row thus this manually calculate the difference between element and its parent's offset
// @see https://github.com/jquery/jquery/blob/1.12-stable/src/offset.js#L149-L155
var parentOffsets=$selector.parent().offset();var transformedPosition={top:offsets.top-parentOffsets.top,left:offsets.left-parentOffsets.left};// Calculate offset (relative to selector's parent) BEFORE it is affected by transform
var preTransformedPosition={top:$selector[0].offsetTop,left:$selector[0].offsetLeft};// Update offset's top value
top+=preTransformedPosition.top-transformedPosition.top;offsets.top=top;// Update offset's left value
left+=preTransformedPosition.left-transformedPosition.left;offsets.left=left;}// Manually calculate right & bottom offsets
offsets.right=left+width;offsets.bottom=top+height;// Save copy of the offset on element's .data() in case of scenario where retrieving actual
// offset value will lead to incorrect offset value (eg. sticky tab active with position offset)
$selector.data('et-offsets',offsets);// Add current device to cache
if(''!==currentDevice){$selector.data('et-offsets-device',offsets);}return offsets;};/**
 * Increase EventEmitter's max listeners if lister count is about to surpass the max listeners limit
 * IMPORTANT: Need to be placed BEFORE `.on()`.
 *
 * @since 4.6.0
 * @param {EventEmitter} emitter
 * @param eventName
 * @param {string} EventName
 */exports.getOffsets=getOffsets;var maybeIncreaseEmitterMaxListeners=function maybeIncreaseEmitterMaxListeners(emitter,eventName){var currentCount=emitter.listenerCount(eventName);var maxListeners=emitter.getMaxListeners();if(currentCount===maxListeners){emitter.setMaxListeners(maxListeners+1);}};/**
 * Decrease EventEmitter's max listeners if listener count is less than max listener limit and above
 * 10 (default max listener limit). If listener count is less than 10, max listener limit will
 * remain at 10
 * IMPORTANT: Need to be placed AFTER `.removeListener()`.
 *
 * @since 4.6.0
 *
 * @param {EventEmitter} emitter
 * @param {string} eventName
 */exports.maybeIncreaseEmitterMaxListeners=maybeIncreaseEmitterMaxListeners;var maybeDecreaseEmitterMaxListeners=function maybeDecreaseEmitterMaxListeners(emitter,eventName){var currentCount=emitter.listenerCount(eventName);var maxListeners=emitter.getMaxListeners();if(maxListeners>10){emitter.setMaxListeners(currentCount);}};/**
 * Expose frontend (FE) component via global object so it can be accessed and reused externally
 * Note: window.ET_Builder is for builder app's component; window.ET_FE is for frontend component.
 *
 * @since 4.6.0
 *
 * @param {string} type
 * @param {string} name
 * @param {mixed} component
 */exports.maybeDecreaseEmitterMaxListeners=maybeDecreaseEmitterMaxListeners;var registerFrontendComponent=function registerFrontendComponent(type,name,component){// Make sure that ET_FE is available
if('undefined'===typeof window.ET_FE){window.ET_FE={};}if('object'!==_typeof(window.ET_FE[type])){window.ET_FE[type]={};}window.ET_FE[type][name]=component;};/**
 * Set inline style with !important tag. JQuery's .css() can't set value with `!important` tag so
 * here it is.
 *
 * @since 4.6.2
 *
 * @param {object} $element
 * @param {string} cssProp
 * @param {string} value
 */exports.registerFrontendComponent=registerFrontendComponent;var setImportantInlineValue=function setImportantInlineValue($element,cssProp,value){// Remove prop from current inline style in case the prop is already exist
$element.css(cssProp,'');// Get current inline style
var inlineStyle=$element.attr('style');// Re-insert inline style + property with important tag
$element.attr('style',"".concat(inlineStyle," ").concat(cssProp,": ").concat(value," !important;"));};exports.setImportantInlineValue=setImportantInlineValue;/***/},/***/"./gutenberg/utils/selectors.js":/*!**************************************!*\
  !*** ./gutenberg/utils/selectors.js ***!
  \**************************************/ /*! no static exports found */ /***/function gutenbergUtilsSelectorsJs(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getTemplateEditorIframe=exports.getMotionEffectTrackerContainer=exports.getEditorWritingFlowSelector=exports.getEditorInserterMenuSelector=exports.getContentAreaSelectorList=exports.getContentAreaSelectorByVersion=exports.getContentAreaSelector=void 0;var _map2=_interopRequireDefault(__webpack_require__(/*! lodash/map */"./node_modules/lodash/map.js"));var _isNull2=_interopRequireDefault(__webpack_require__(/*! lodash/isNull */"./node_modules/lodash/isNull.js"));var _isArray2=_interopRequireDefault(__webpack_require__(/*! lodash/isArray */"./node_modules/lodash/isArray.js"));var _includes2=_interopRequireDefault(__webpack_require__(/*! lodash/includes */"./node_modules/lodash/includes.js"));var _get2=_interopRequireDefault(__webpack_require__(/*! lodash/get */"./node_modules/lodash/get.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * Get content area selectors list.
 *
 * The key is not just WordPress version number. It's the time when this selector is
 * introduced/used. For example: 5.2 means the selector is introduce on WP 5.2 and it's
 * still used until WP 5.4 released. We can't use WP version directly because there is
 * a chance that Gutenberg plugin overrides Gutenberg on WP core. So, we need to check
 * DOM existence to get the correct condition.
 *
 * @since 4.5.2
 *
 * @returns {object}
 */var getContentAreaSelectorList=function getContentAreaSelectorList(){return{5.5:'interface-interface-skeleton__content',5.4:'block-editor-editor-skeleton__content',5.3:'edit-post-layout__content',5.2:'edit-post-layout__content','gutenberg-7.1':'edit-post-editor-regions__content'};};/**
 * Get content area selector by WP version.
 *
 * It can accept multiple versions (array) as version parameter and return multiple
 * selectors (string array) at the same time.
 *
 * @since 4.5.2
 *
 * @param {string | Array} version
 * @param {boolean} isDotIncluded
 *
 * @returns {string}
 */exports.getContentAreaSelectorList=getContentAreaSelectorList;var getContentAreaSelectorByVersion=function getContentAreaSelectorByVersion(version,isDotIncluded){if((0,_isArray2.default)(version)){return(0,_map2.default)(version,function(versionValue){return getContentAreaSelectorByVersion(versionValue,isDotIncluded);});}var dotSelector=isDotIncluded?'.':'';var mainSelector=(0,_get2.default)(getContentAreaSelectorList(),version,'');return"".concat(dotSelector).concat(mainSelector);};/**
 * Get correct selector for Gutenberg's content area window
 * This tends to change on major release.
 *
 * @since 4.5.2 Use getContentAreaSelectorList() as the selectors list source.
 *
 * @param {window} gbWindow
 * @param {bool}   includeClassDot
 *
 * @returns {string}
 */exports.getContentAreaSelectorByVersion=getContentAreaSelectorByVersion;var getContentAreaSelector=function getContentAreaSelector(gbWindow){var includeClassDot=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var prefix=includeClassDot?'.':'';var selector='';if(!(0,_isNull2.default)(gbWindow.document.querySelector(getContentAreaSelectorByVersion('5.5',true)))){// WordPress' v5.5-beta1 forward
selector=getContentAreaSelectorByVersion('5.5');}else if(!(0,_isNull2.default)(gbWindow.document.querySelector(getContentAreaSelectorByVersion('5.4',true)))){// WordPress' v5.4-beta1 forward
selector=getContentAreaSelectorByVersion('5.4');}else if(!(0,_isNull2.default)(gbWindow.document.querySelector(getContentAreaSelectorByVersion('gutenberg-7.1',true)))){// Gutenberg plugin (v7.1.x)
selector=getContentAreaSelectorByVersion('gutenberg-7.1');}else{// WordPress' v5.2 - v5.3.x. Layout Block doesn't support WP 5.1 below
selector=getContentAreaSelectorByVersion('5.2');}return prefix+selector;};/**
 * Get Editor Writing Flow (wrapper which contains module on current editor) selector.
 *
 * @since 4.6.0
 *
 * @param {window} gbWindow
 * @param {bool}   includeClassDot
 *
 * @returns {string}
 */exports.getContentAreaSelector=getContentAreaSelector;var getEditorWritingFlowSelector=function getEditorWritingFlowSelector(){var gbWindow=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;var includeClassDot=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var prefix=includeClassDot?'.':'';// The selector is currently valid on v5.4 below. However this might change on next
// version of Gutenberg so better wrap it here and now
var selector='block-editor-writing-flow';return prefix+selector;};/**
 * Get correct selector for Gutenberg's editor inserter menu
 * This tends to change on major release.
 *
 * @since 4.4.2
 *
 * @param {window} gbWindow
 * @param {bool} includeClassDot
 */exports.getEditorWritingFlowSelector=getEditorWritingFlowSelector;var getEditorInserterMenuSelector=function getEditorInserterMenuSelector(gbWindow){var includeClassDot=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var contentAreaSelector=getContentAreaSelector(gbWindow,false);var prefix=includeClassDot?'.':'';var selector='';if((0,_includes2.default)(getContentAreaSelectorByVersion(['5.4','5.5']),contentAreaSelector)){// WordPress' v5.4-beta1 forward
selector='block-editor-inserter__menu';}else{// WordPress' v5.2 - v5.3.x. Layout Block doesn't support WP 5.1 below
selector='editor-inserter__menu';}return prefix+selector;};/**
 * Get correct selector for placing motion effect's tracker container.
 *
 * @param {window} gbWindow
 * @param {bool} includeClassDot
 */exports.getEditorInserterMenuSelector=getEditorInserterMenuSelector;var getMotionEffectTrackerContainer=function getMotionEffectTrackerContainer(gbWindow){var includeClassDot=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var contentAreaSelector=getContentAreaSelector(gbWindow,false);var prefix=includeClassDot?'.':'';var selector='';if('block-editor-editor-skeleton__content'===contentAreaSelector){// WordPress' v5.4-beta1 forward
selector='block-editor-writing-flow';}else{// WordPress' v5.2 - v5.3.x. Layout Block doesn't support WP 5.1 below
selector=contentAreaSelector;}return prefix+selector;};/**
 * Get template editor iframe.
 *
 * @since 4.9.8
 *
 * @param {window} gbWindow
 */exports.getMotionEffectTrackerContainer=getMotionEffectTrackerContainer;var getTemplateEditorIframe=function getTemplateEditorIframe(gbWindow){return gbWindow.jQuery('iframe[name="editor-canvas"]').contents();};exports.getTemplateEditorIframe=getTemplateEditorIframe;/***/},/***/"./node_modules/lodash/_DataView.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_DataViewJs(module,exports,__webpack_require__){var getNative=__webpack_require__(/*! ./_getNative */"./node_modules/lodash/_getNative.js"),root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;/***/},/***/"./node_modules/lodash/_Hash.js":/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/ /*! no static exports found */ /***/function node_modulesLodash_HashJs(module,exports,__webpack_require__){var hashClear=__webpack_require__(/*! ./_hashClear */"./node_modules/lodash/_hashClear.js"),hashDelete=__webpack_require__(/*! ./_hashDelete */"./node_modules/lodash/_hashDelete.js"),hashGet=__webpack_require__(/*! ./_hashGet */"./node_modules/lodash/_hashGet.js"),hashHas=__webpack_require__(/*! ./_hashHas */"./node_modules/lodash/_hashHas.js"),hashSet=__webpack_require__(/*! ./_hashSet */"./node_modules/lodash/_hashSet.js");/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;/***/},/***/"./node_modules/lodash/_ListCache.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_ListCacheJs(module,exports,__webpack_require__){var listCacheClear=__webpack_require__(/*! ./_listCacheClear */"./node_modules/lodash/_listCacheClear.js"),listCacheDelete=__webpack_require__(/*! ./_listCacheDelete */"./node_modules/lodash/_listCacheDelete.js"),listCacheGet=__webpack_require__(/*! ./_listCacheGet */"./node_modules/lodash/_listCacheGet.js"),listCacheHas=__webpack_require__(/*! ./_listCacheHas */"./node_modules/lodash/_listCacheHas.js"),listCacheSet=__webpack_require__(/*! ./_listCacheSet */"./node_modules/lodash/_listCacheSet.js");/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;/***/},/***/"./node_modules/lodash/_Map.js":/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/ /*! no static exports found */ /***/function node_modulesLodash_MapJs(module,exports,__webpack_require__){var getNative=__webpack_require__(/*! ./_getNative */"./node_modules/lodash/_getNative.js"),root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;/***/},/***/"./node_modules/lodash/_MapCache.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_MapCacheJs(module,exports,__webpack_require__){var mapCacheClear=__webpack_require__(/*! ./_mapCacheClear */"./node_modules/lodash/_mapCacheClear.js"),mapCacheDelete=__webpack_require__(/*! ./_mapCacheDelete */"./node_modules/lodash/_mapCacheDelete.js"),mapCacheGet=__webpack_require__(/*! ./_mapCacheGet */"./node_modules/lodash/_mapCacheGet.js"),mapCacheHas=__webpack_require__(/*! ./_mapCacheHas */"./node_modules/lodash/_mapCacheHas.js"),mapCacheSet=__webpack_require__(/*! ./_mapCacheSet */"./node_modules/lodash/_mapCacheSet.js");/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;/***/},/***/"./node_modules/lodash/_Promise.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_PromiseJs(module,exports,__webpack_require__){var getNative=__webpack_require__(/*! ./_getNative */"./node_modules/lodash/_getNative.js"),root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;/***/},/***/"./node_modules/lodash/_Set.js":/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/ /*! no static exports found */ /***/function node_modulesLodash_SetJs(module,exports,__webpack_require__){var getNative=__webpack_require__(/*! ./_getNative */"./node_modules/lodash/_getNative.js"),root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;/***/},/***/"./node_modules/lodash/_SetCache.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_SetCacheJs(module,exports,__webpack_require__){var MapCache=__webpack_require__(/*! ./_MapCache */"./node_modules/lodash/_MapCache.js"),setCacheAdd=__webpack_require__(/*! ./_setCacheAdd */"./node_modules/lodash/_setCacheAdd.js"),setCacheHas=__webpack_require__(/*! ./_setCacheHas */"./node_modules/lodash/_setCacheHas.js");/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;/***/},/***/"./node_modules/lodash/_Stack.js":/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/ /*! no static exports found */ /***/function node_modulesLodash_StackJs(module,exports,__webpack_require__){var ListCache=__webpack_require__(/*! ./_ListCache */"./node_modules/lodash/_ListCache.js"),stackClear=__webpack_require__(/*! ./_stackClear */"./node_modules/lodash/_stackClear.js"),stackDelete=__webpack_require__(/*! ./_stackDelete */"./node_modules/lodash/_stackDelete.js"),stackGet=__webpack_require__(/*! ./_stackGet */"./node_modules/lodash/_stackGet.js"),stackHas=__webpack_require__(/*! ./_stackHas */"./node_modules/lodash/_stackHas.js"),stackSet=__webpack_require__(/*! ./_stackSet */"./node_modules/lodash/_stackSet.js");/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;/***/},/***/"./node_modules/lodash/_Symbol.js":/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/ /*! no static exports found */ /***/function node_modulesLodash_SymbolJs(module,exports,__webpack_require__){var root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/** Built-in value references. */var _Symbol=root.Symbol;module.exports=_Symbol;/***/},/***/"./node_modules/lodash/_Uint8Array.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_Uint8ArrayJs(module,exports,__webpack_require__){var root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;/***/},/***/"./node_modules/lodash/_WeakMap.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_WeakMapJs(module,exports,__webpack_require__){var getNative=__webpack_require__(/*! ./_getNative */"./node_modules/lodash/_getNative.js"),root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;/***/},/***/"./node_modules/lodash/_arrayFilter.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_arrayFilterJs(module,exports){/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}module.exports=arrayFilter;/***/},/***/"./node_modules/lodash/_arrayLikeKeys.js":/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/ /*! no static exports found */ /***/function node_modulesLodash_arrayLikeKeysJs(module,exports,__webpack_require__){var baseTimes=__webpack_require__(/*! ./_baseTimes */"./node_modules/lodash/_baseTimes.js"),isArguments=__webpack_require__(/*! ./isArguments */"./node_modules/lodash/isArguments.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),isBuffer=__webpack_require__(/*! ./isBuffer */"./node_modules/lodash/isBuffer.js"),isIndex=__webpack_require__(/*! ./_isIndex */"./node_modules/lodash/_isIndex.js"),isTypedArray=__webpack_require__(/*! ./isTypedArray */"./node_modules/lodash/isTypedArray.js");/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}module.exports=arrayLikeKeys;/***/},/***/"./node_modules/lodash/_arrayMap.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_arrayMapJs(module,exports){/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}module.exports=arrayMap;/***/},/***/"./node_modules/lodash/_arrayPush.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_arrayPushJs(module,exports){/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;/***/},/***/"./node_modules/lodash/_arraySome.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_arraySomeJs(module,exports){/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}module.exports=arraySome;/***/},/***/"./node_modules/lodash/_assocIndexOf.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_assocIndexOfJs(module,exports,__webpack_require__){var eq=__webpack_require__(/*! ./eq */"./node_modules/lodash/eq.js");/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;/***/},/***/"./node_modules/lodash/_baseEach.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseEachJs(module,exports,__webpack_require__){var baseForOwn=__webpack_require__(/*! ./_baseForOwn */"./node_modules/lodash/_baseForOwn.js"),createBaseEach=__webpack_require__(/*! ./_createBaseEach */"./node_modules/lodash/_createBaseEach.js");/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */var baseEach=createBaseEach(baseForOwn);module.exports=baseEach;/***/},/***/"./node_modules/lodash/_baseFindIndex.js":/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseFindIndexJs(module,exports){/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}module.exports=baseFindIndex;/***/},/***/"./node_modules/lodash/_baseFor.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseForJs(module,exports,__webpack_require__){var createBaseFor=__webpack_require__(/*! ./_createBaseFor */"./node_modules/lodash/_createBaseFor.js");/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var baseFor=createBaseFor();module.exports=baseFor;/***/},/***/"./node_modules/lodash/_baseForOwn.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseForOwnJs(module,exports,__webpack_require__){var baseFor=__webpack_require__(/*! ./_baseFor */"./node_modules/lodash/_baseFor.js"),keys=__webpack_require__(/*! ./keys */"./node_modules/lodash/keys.js");/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}module.exports=baseForOwn;/***/},/***/"./node_modules/lodash/_baseGet.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseGetJs(module,exports,__webpack_require__){var castPath=__webpack_require__(/*! ./_castPath */"./node_modules/lodash/_castPath.js"),toKey=__webpack_require__(/*! ./_toKey */"./node_modules/lodash/_toKey.js");/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}module.exports=baseGet;/***/},/***/"./node_modules/lodash/_baseGetAllKeys.js":/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseGetAllKeysJs(module,exports,__webpack_require__){var arrayPush=__webpack_require__(/*! ./_arrayPush */"./node_modules/lodash/_arrayPush.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js");/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}module.exports=baseGetAllKeys;/***/},/***/"./node_modules/lodash/_baseGetTag.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseGetTagJs(module,exports,__webpack_require__){var _Symbol2=__webpack_require__(/*! ./_Symbol */"./node_modules/lodash/_Symbol.js"),getRawTag=__webpack_require__(/*! ./_getRawTag */"./node_modules/lodash/_getRawTag.js"),objectToString=__webpack_require__(/*! ./_objectToString */"./node_modules/lodash/_objectToString.js");/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=_Symbol2?_Symbol2.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;/***/},/***/"./node_modules/lodash/_baseHasIn.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseHasInJs(module,exports){/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}module.exports=baseHasIn;/***/},/***/"./node_modules/lodash/_baseIndexOf.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIndexOfJs(module,exports,__webpack_require__){var baseFindIndex=__webpack_require__(/*! ./_baseFindIndex */"./node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__(/*! ./_baseIsNaN */"./node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__(/*! ./_strictIndexOf */"./node_modules/lodash/_strictIndexOf.js");/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}module.exports=baseIndexOf;/***/},/***/"./node_modules/lodash/_baseIsArguments.js":/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIsArgumentsJs(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(/*! ./_baseGetTag */"./node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__(/*! ./isObjectLike */"./node_modules/lodash/isObjectLike.js");/** `Object#toString` result references. */var argsTag='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}module.exports=baseIsArguments;/***/},/***/"./node_modules/lodash/_baseIsEqual.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIsEqualJs(module,exports,__webpack_require__){var baseIsEqualDeep=__webpack_require__(/*! ./_baseIsEqualDeep */"./node_modules/lodash/_baseIsEqualDeep.js"),isObjectLike=__webpack_require__(/*! ./isObjectLike */"./node_modules/lodash/isObjectLike.js");/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}module.exports=baseIsEqual;/***/},/***/"./node_modules/lodash/_baseIsEqualDeep.js":/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIsEqualDeepJs(module,exports,__webpack_require__){var Stack=__webpack_require__(/*! ./_Stack */"./node_modules/lodash/_Stack.js"),equalArrays=__webpack_require__(/*! ./_equalArrays */"./node_modules/lodash/_equalArrays.js"),equalByTag=__webpack_require__(/*! ./_equalByTag */"./node_modules/lodash/_equalByTag.js"),equalObjects=__webpack_require__(/*! ./_equalObjects */"./node_modules/lodash/_equalObjects.js"),getTag=__webpack_require__(/*! ./_getTag */"./node_modules/lodash/_getTag.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),isBuffer=__webpack_require__(/*! ./isBuffer */"./node_modules/lodash/isBuffer.js"),isTypedArray=__webpack_require__(/*! ./isTypedArray */"./node_modules/lodash/isTypedArray.js");/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}module.exports=baseIsEqualDeep;/***/},/***/"./node_modules/lodash/_baseIsMatch.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIsMatchJs(module,exports,__webpack_require__){var Stack=__webpack_require__(/*! ./_Stack */"./node_modules/lodash/_Stack.js"),baseIsEqual=__webpack_require__(/*! ./_baseIsEqual */"./node_modules/lodash/_baseIsEqual.js");/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}module.exports=baseIsMatch;/***/},/***/"./node_modules/lodash/_baseIsNaN.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIsNaNJs(module,exports){/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(value){return value!==value;}module.exports=baseIsNaN;/***/},/***/"./node_modules/lodash/_baseIsNative.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIsNativeJs(module,exports,__webpack_require__){var isFunction=__webpack_require__(/*! ./isFunction */"./node_modules/lodash/isFunction.js"),isMasked=__webpack_require__(/*! ./_isMasked */"./node_modules/lodash/_isMasked.js"),isObject=__webpack_require__(/*! ./isObject */"./node_modules/lodash/isObject.js"),toSource=__webpack_require__(/*! ./_toSource */"./node_modules/lodash/_toSource.js");/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;/***/},/***/"./node_modules/lodash/_baseIsTypedArray.js":/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIsTypedArrayJs(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(/*! ./_baseGetTag */"./node_modules/lodash/_baseGetTag.js"),isLength=__webpack_require__(/*! ./isLength */"./node_modules/lodash/isLength.js"),isObjectLike=__webpack_require__(/*! ./isObjectLike */"./node_modules/lodash/isObjectLike.js");/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}module.exports=baseIsTypedArray;/***/},/***/"./node_modules/lodash/_baseIteratee.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseIterateeJs(module,exports,__webpack_require__){var baseMatches=__webpack_require__(/*! ./_baseMatches */"./node_modules/lodash/_baseMatches.js"),baseMatchesProperty=__webpack_require__(/*! ./_baseMatchesProperty */"./node_modules/lodash/_baseMatchesProperty.js"),identity=__webpack_require__(/*! ./identity */"./node_modules/lodash/identity.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),property=__webpack_require__(/*! ./property */"./node_modules/lodash/property.js");/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(_typeof2(value)=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}module.exports=baseIteratee;/***/},/***/"./node_modules/lodash/_baseKeys.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseKeysJs(module,exports,__webpack_require__){var isPrototype=__webpack_require__(/*! ./_isPrototype */"./node_modules/lodash/_isPrototype.js"),nativeKeys=__webpack_require__(/*! ./_nativeKeys */"./node_modules/lodash/_nativeKeys.js");/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}module.exports=baseKeys;/***/},/***/"./node_modules/lodash/_baseMap.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseMapJs(module,exports,__webpack_require__){var baseEach=__webpack_require__(/*! ./_baseEach */"./node_modules/lodash/_baseEach.js"),isArrayLike=__webpack_require__(/*! ./isArrayLike */"./node_modules/lodash/isArrayLike.js");/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}module.exports=baseMap;/***/},/***/"./node_modules/lodash/_baseMatches.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseMatchesJs(module,exports,__webpack_require__){var baseIsMatch=__webpack_require__(/*! ./_baseIsMatch */"./node_modules/lodash/_baseIsMatch.js"),getMatchData=__webpack_require__(/*! ./_getMatchData */"./node_modules/lodash/_getMatchData.js"),matchesStrictComparable=__webpack_require__(/*! ./_matchesStrictComparable */"./node_modules/lodash/_matchesStrictComparable.js");/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}module.exports=baseMatches;/***/},/***/"./node_modules/lodash/_baseMatchesProperty.js":/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseMatchesPropertyJs(module,exports,__webpack_require__){var baseIsEqual=__webpack_require__(/*! ./_baseIsEqual */"./node_modules/lodash/_baseIsEqual.js"),get=__webpack_require__(/*! ./get */"./node_modules/lodash/get.js"),hasIn=__webpack_require__(/*! ./hasIn */"./node_modules/lodash/hasIn.js"),isKey=__webpack_require__(/*! ./_isKey */"./node_modules/lodash/_isKey.js"),isStrictComparable=__webpack_require__(/*! ./_isStrictComparable */"./node_modules/lodash/_isStrictComparable.js"),matchesStrictComparable=__webpack_require__(/*! ./_matchesStrictComparable */"./node_modules/lodash/_matchesStrictComparable.js"),toKey=__webpack_require__(/*! ./_toKey */"./node_modules/lodash/_toKey.js");/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}module.exports=baseMatchesProperty;/***/},/***/"./node_modules/lodash/_baseProperty.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_basePropertyJs(module,exports){/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}module.exports=baseProperty;/***/},/***/"./node_modules/lodash/_basePropertyDeep.js":/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/ /*! no static exports found */ /***/function node_modulesLodash_basePropertyDeepJs(module,exports,__webpack_require__){var baseGet=__webpack_require__(/*! ./_baseGet */"./node_modules/lodash/_baseGet.js");/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}module.exports=basePropertyDeep;/***/},/***/"./node_modules/lodash/_baseTimes.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseTimesJs(module,exports){/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;/***/},/***/"./node_modules/lodash/_baseToString.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseToStringJs(module,exports,__webpack_require__){var _Symbol3=__webpack_require__(/*! ./_Symbol */"./node_modules/lodash/_Symbol.js"),arrayMap=__webpack_require__(/*! ./_arrayMap */"./node_modules/lodash/_arrayMap.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),isSymbol=__webpack_require__(/*! ./isSymbol */"./node_modules/lodash/isSymbol.js");/** Used as references for various `Number` constants. */var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol3?_Symbol3.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=baseToString;/***/},/***/"./node_modules/lodash/_baseTrim.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseTrimJs(module,exports,__webpack_require__){var trimmedEndIndex=__webpack_require__(/*! ./_trimmedEndIndex */"./node_modules/lodash/_trimmedEndIndex.js");/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}module.exports=baseTrim;/***/},/***/"./node_modules/lodash/_baseUnary.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseUnaryJs(module,exports){/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;/***/},/***/"./node_modules/lodash/_baseValues.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_baseValuesJs(module,exports,__webpack_require__){var arrayMap=__webpack_require__(/*! ./_arrayMap */"./node_modules/lodash/_arrayMap.js");/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}module.exports=baseValues;/***/},/***/"./node_modules/lodash/_cacheHas.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_cacheHasJs(module,exports){/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;/***/},/***/"./node_modules/lodash/_castPath.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_castPathJs(module,exports,__webpack_require__){var isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),isKey=__webpack_require__(/*! ./_isKey */"./node_modules/lodash/_isKey.js"),stringToPath=__webpack_require__(/*! ./_stringToPath */"./node_modules/lodash/_stringToPath.js"),toString=__webpack_require__(/*! ./toString */"./node_modules/lodash/toString.js");/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}module.exports=castPath;/***/},/***/"./node_modules/lodash/_coreJsData.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_coreJsDataJs(module,exports,__webpack_require__){var root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js");/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;/***/},/***/"./node_modules/lodash/_createBaseEach.js":/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/ /*! no static exports found */ /***/function node_modulesLodash_createBaseEachJs(module,exports,__webpack_require__){var isArrayLike=__webpack_require__(/*! ./isArrayLike */"./node_modules/lodash/isArrayLike.js");/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}module.exports=createBaseEach;/***/},/***/"./node_modules/lodash/_createBaseFor.js":/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/ /*! no static exports found */ /***/function node_modulesLodash_createBaseForJs(module,exports){/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}module.exports=createBaseFor;/***/},/***/"./node_modules/lodash/_equalArrays.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_equalArraysJs(module,exports,__webpack_require__){var SetCache=__webpack_require__(/*! ./_SetCache */"./node_modules/lodash/_SetCache.js"),arraySome=__webpack_require__(/*! ./_arraySome */"./node_modules/lodash/_arraySome.js"),cacheHas=__webpack_require__(/*! ./_cacheHas */"./node_modules/lodash/_cacheHas.js");/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}module.exports=equalArrays;/***/},/***/"./node_modules/lodash/_equalByTag.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_equalByTagJs(module,exports,__webpack_require__){var _Symbol4=__webpack_require__(/*! ./_Symbol */"./node_modules/lodash/_Symbol.js"),Uint8Array=__webpack_require__(/*! ./_Uint8Array */"./node_modules/lodash/_Uint8Array.js"),eq=__webpack_require__(/*! ./eq */"./node_modules/lodash/eq.js"),equalArrays=__webpack_require__(/*! ./_equalArrays */"./node_modules/lodash/_equalArrays.js"),mapToArray=__webpack_require__(/*! ./_mapToArray */"./node_modules/lodash/_mapToArray.js"),setToArray=__webpack_require__(/*! ./_setToArray */"./node_modules/lodash/_setToArray.js");/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol4?_Symbol4.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}module.exports=equalByTag;/***/},/***/"./node_modules/lodash/_equalObjects.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_equalObjectsJs(module,exports,__webpack_require__){var getAllKeys=__webpack_require__(/*! ./_getAllKeys */"./node_modules/lodash/_getAllKeys.js");/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}module.exports=equalObjects;/***/},/***/"./node_modules/lodash/_freeGlobal.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_freeGlobalJs(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof2(global)=='object'&&global&&global.Object===Object&&global;module.exports=freeGlobal;/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"));/***/},/***/"./node_modules/lodash/_getAllKeys.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_getAllKeysJs(module,exports,__webpack_require__){var baseGetAllKeys=__webpack_require__(/*! ./_baseGetAllKeys */"./node_modules/lodash/_baseGetAllKeys.js"),getSymbols=__webpack_require__(/*! ./_getSymbols */"./node_modules/lodash/_getSymbols.js"),keys=__webpack_require__(/*! ./keys */"./node_modules/lodash/keys.js");/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}module.exports=getAllKeys;/***/},/***/"./node_modules/lodash/_getMapData.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_getMapDataJs(module,exports,__webpack_require__){var isKeyable=__webpack_require__(/*! ./_isKeyable */"./node_modules/lodash/_isKeyable.js");/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;/***/},/***/"./node_modules/lodash/_getMatchData.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_getMatchDataJs(module,exports,__webpack_require__){var isStrictComparable=__webpack_require__(/*! ./_isStrictComparable */"./node_modules/lodash/_isStrictComparable.js"),keys=__webpack_require__(/*! ./keys */"./node_modules/lodash/keys.js");/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}module.exports=getMatchData;/***/},/***/"./node_modules/lodash/_getNative.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_getNativeJs(module,exports,__webpack_require__){var baseIsNative=__webpack_require__(/*! ./_baseIsNative */"./node_modules/lodash/_baseIsNative.js"),getValue=__webpack_require__(/*! ./_getValue */"./node_modules/lodash/_getValue.js");/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;/***/},/***/"./node_modules/lodash/_getRawTag.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_getRawTagJs(module,exports,__webpack_require__){var _Symbol5=__webpack_require__(/*! ./_Symbol */"./node_modules/lodash/_Symbol.js");/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=_Symbol5?_Symbol5.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;/***/},/***/"./node_modules/lodash/_getSymbols.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_getSymbolsJs(module,exports,__webpack_require__){var arrayFilter=__webpack_require__(/*! ./_arrayFilter */"./node_modules/lodash/_arrayFilter.js"),stubArray=__webpack_require__(/*! ./stubArray */"./node_modules/lodash/stubArray.js");/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};module.exports=getSymbols;/***/},/***/"./node_modules/lodash/_getTag.js":/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/ /*! no static exports found */ /***/function node_modulesLodash_getTagJs(module,exports,__webpack_require__){var DataView=__webpack_require__(/*! ./_DataView */"./node_modules/lodash/_DataView.js"),Map=__webpack_require__(/*! ./_Map */"./node_modules/lodash/_Map.js"),Promise=__webpack_require__(/*! ./_Promise */"./node_modules/lodash/_Promise.js"),Set=__webpack_require__(/*! ./_Set */"./node_modules/lodash/_Set.js"),WeakMap=__webpack_require__(/*! ./_WeakMap */"./node_modules/lodash/_WeakMap.js"),baseGetTag=__webpack_require__(/*! ./_baseGetTag */"./node_modules/lodash/_baseGetTag.js"),toSource=__webpack_require__(/*! ./_toSource */"./node_modules/lodash/_toSource.js");/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;/***/},/***/"./node_modules/lodash/_getValue.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_getValueJs(module,exports){/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;/***/},/***/"./node_modules/lodash/_hasPath.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_hasPathJs(module,exports,__webpack_require__){var castPath=__webpack_require__(/*! ./_castPath */"./node_modules/lodash/_castPath.js"),isArguments=__webpack_require__(/*! ./isArguments */"./node_modules/lodash/isArguments.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),isIndex=__webpack_require__(/*! ./_isIndex */"./node_modules/lodash/_isIndex.js"),isLength=__webpack_require__(/*! ./isLength */"./node_modules/lodash/isLength.js"),toKey=__webpack_require__(/*! ./_toKey */"./node_modules/lodash/_toKey.js");/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}module.exports=hasPath;/***/},/***/"./node_modules/lodash/_hashClear.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_hashClearJs(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(/*! ./_nativeCreate */"./node_modules/lodash/_nativeCreate.js");/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}module.exports=hashClear;/***/},/***/"./node_modules/lodash/_hashDelete.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_hashDeleteJs(module,exports){/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}module.exports=hashDelete;/***/},/***/"./node_modules/lodash/_hashGet.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_hashGetJs(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(/*! ./_nativeCreate */"./node_modules/lodash/_nativeCreate.js");/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;/***/},/***/"./node_modules/lodash/_hashHas.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_hashHasJs(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(/*! ./_nativeCreate */"./node_modules/lodash/_nativeCreate.js");/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;/***/},/***/"./node_modules/lodash/_hashSet.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_hashSetJs(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(/*! ./_nativeCreate */"./node_modules/lodash/_nativeCreate.js");/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;/***/},/***/"./node_modules/lodash/_isIndex.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_isIndexJs(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=_typeof2(value);length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;/***/},/***/"./node_modules/lodash/_isKey.js":/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/ /*! no static exports found */ /***/function node_modulesLodash_isKeyJs(module,exports,__webpack_require__){var isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),isSymbol=__webpack_require__(/*! ./isSymbol */"./node_modules/lodash/isSymbol.js");/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=_typeof2(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}module.exports=isKey;/***/},/***/"./node_modules/lodash/_isKeyable.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodash_isKeyableJs(module,exports){/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=_typeof2(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;/***/},/***/"./node_modules/lodash/_isMasked.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_isMaskedJs(module,exports,__webpack_require__){var coreJsData=__webpack_require__(/*! ./_coreJsData */"./node_modules/lodash/_coreJsData.js");/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;/***/},/***/"./node_modules/lodash/_isPrototype.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_isPrototypeJs(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;/***/},/***/"./node_modules/lodash/_isStrictComparable.js":/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/ /*! no static exports found */ /***/function node_modulesLodash_isStrictComparableJs(module,exports,__webpack_require__){var isObject=__webpack_require__(/*! ./isObject */"./node_modules/lodash/isObject.js");/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}module.exports=isStrictComparable;/***/},/***/"./node_modules/lodash/_listCacheClear.js":/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/ /*! no static exports found */ /***/function node_modulesLodash_listCacheClearJs(module,exports){/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}module.exports=listCacheClear;/***/},/***/"./node_modules/lodash/_listCacheDelete.js":/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/ /*! no static exports found */ /***/function node_modulesLodash_listCacheDeleteJs(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(/*! ./_assocIndexOf */"./node_modules/lodash/_assocIndexOf.js");/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}module.exports=listCacheDelete;/***/},/***/"./node_modules/lodash/_listCacheGet.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_listCacheGetJs(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(/*! ./_assocIndexOf */"./node_modules/lodash/_assocIndexOf.js");/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;/***/},/***/"./node_modules/lodash/_listCacheHas.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_listCacheHasJs(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(/*! ./_assocIndexOf */"./node_modules/lodash/_assocIndexOf.js");/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;/***/},/***/"./node_modules/lodash/_listCacheSet.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_listCacheSetJs(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(/*! ./_assocIndexOf */"./node_modules/lodash/_assocIndexOf.js");/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;/***/},/***/"./node_modules/lodash/_mapCacheClear.js":/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/ /*! no static exports found */ /***/function node_modulesLodash_mapCacheClearJs(module,exports,__webpack_require__){var Hash=__webpack_require__(/*! ./_Hash */"./node_modules/lodash/_Hash.js"),ListCache=__webpack_require__(/*! ./_ListCache */"./node_modules/lodash/_ListCache.js"),Map=__webpack_require__(/*! ./_Map */"./node_modules/lodash/_Map.js");/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;/***/},/***/"./node_modules/lodash/_mapCacheDelete.js":/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/ /*! no static exports found */ /***/function node_modulesLodash_mapCacheDeleteJs(module,exports,__webpack_require__){var getMapData=__webpack_require__(/*! ./_getMapData */"./node_modules/lodash/_getMapData.js");/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}module.exports=mapCacheDelete;/***/},/***/"./node_modules/lodash/_mapCacheGet.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_mapCacheGetJs(module,exports,__webpack_require__){var getMapData=__webpack_require__(/*! ./_getMapData */"./node_modules/lodash/_getMapData.js");/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;/***/},/***/"./node_modules/lodash/_mapCacheHas.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_mapCacheHasJs(module,exports,__webpack_require__){var getMapData=__webpack_require__(/*! ./_getMapData */"./node_modules/lodash/_getMapData.js");/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;/***/},/***/"./node_modules/lodash/_mapCacheSet.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_mapCacheSetJs(module,exports,__webpack_require__){var getMapData=__webpack_require__(/*! ./_getMapData */"./node_modules/lodash/_getMapData.js");/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}module.exports=mapCacheSet;/***/},/***/"./node_modules/lodash/_mapToArray.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_mapToArrayJs(module,exports){/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}module.exports=mapToArray;/***/},/***/"./node_modules/lodash/_matchesStrictComparable.js":/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/ /*! no static exports found */ /***/function node_modulesLodash_matchesStrictComparableJs(module,exports){/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}module.exports=matchesStrictComparable;/***/},/***/"./node_modules/lodash/_memoizeCapped.js":/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/ /*! no static exports found */ /***/function node_modulesLodash_memoizeCappedJs(module,exports,__webpack_require__){var memoize=__webpack_require__(/*! ./memoize */"./node_modules/lodash/memoize.js");/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}module.exports=memoizeCapped;/***/},/***/"./node_modules/lodash/_nativeCreate.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_nativeCreateJs(module,exports,__webpack_require__){var getNative=__webpack_require__(/*! ./_getNative */"./node_modules/lodash/_getNative.js");/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;/***/},/***/"./node_modules/lodash/_nativeKeys.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_nativeKeysJs(module,exports,__webpack_require__){var overArg=__webpack_require__(/*! ./_overArg */"./node_modules/lodash/_overArg.js");/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;/***/},/***/"./node_modules/lodash/_nodeUtil.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_nodeUtilJs(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var freeGlobal=__webpack_require__(/*! ./_freeGlobal */"./node_modules/lodash/_freeGlobal.js");/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&_typeof2(module)=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();module.exports=nodeUtil;/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(module));/***/},/***/"./node_modules/lodash/_objectToString.js":/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/ /*! no static exports found */ /***/function node_modulesLodash_objectToStringJs(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;/***/},/***/"./node_modules/lodash/_overArg.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodash_overArgJs(module,exports){/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}module.exports=overArg;/***/},/***/"./node_modules/lodash/_root.js":/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/ /*! no static exports found */ /***/function node_modulesLodash_rootJs(module,exports,__webpack_require__){var freeGlobal=__webpack_require__(/*! ./_freeGlobal */"./node_modules/lodash/_freeGlobal.js");/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof2(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;/***/},/***/"./node_modules/lodash/_setCacheAdd.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_setCacheAddJs(module,exports){/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;/***/},/***/"./node_modules/lodash/_setCacheHas.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_setCacheHasJs(module,exports){/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;/***/},/***/"./node_modules/lodash/_setToArray.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_setToArrayJs(module,exports){/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;/***/},/***/"./node_modules/lodash/_stackClear.js":/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodash_stackClearJs(module,exports,__webpack_require__){var ListCache=__webpack_require__(/*! ./_ListCache */"./node_modules/lodash/_ListCache.js");/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}module.exports=stackClear;/***/},/***/"./node_modules/lodash/_stackDelete.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodash_stackDeleteJs(module,exports){/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}module.exports=stackDelete;/***/},/***/"./node_modules/lodash/_stackGet.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_stackGetJs(module,exports){/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;/***/},/***/"./node_modules/lodash/_stackHas.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_stackHasJs(module,exports){/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;/***/},/***/"./node_modules/lodash/_stackSet.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_stackSetJs(module,exports,__webpack_require__){var ListCache=__webpack_require__(/*! ./_ListCache */"./node_modules/lodash/_ListCache.js"),Map=__webpack_require__(/*! ./_Map */"./node_modules/lodash/_Map.js"),MapCache=__webpack_require__(/*! ./_MapCache */"./node_modules/lodash/_MapCache.js");/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}module.exports=stackSet;/***/},/***/"./node_modules/lodash/_strictIndexOf.js":/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/ /*! no static exports found */ /***/function node_modulesLodash_strictIndexOfJs(module,exports){/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}module.exports=strictIndexOf;/***/},/***/"./node_modules/lodash/_stringToPath.js":/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/ /*! no static exports found */ /***/function node_modulesLodash_stringToPathJs(module,exports,__webpack_require__){var memoizeCapped=__webpack_require__(/*! ./_memoizeCapped */"./node_modules/lodash/_memoizeCapped.js");/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});module.exports=stringToPath;/***/},/***/"./node_modules/lodash/_toKey.js":/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/ /*! no static exports found */ /***/function node_modulesLodash_toKeyJs(module,exports,__webpack_require__){var isSymbol=__webpack_require__(/*! ./isSymbol */"./node_modules/lodash/isSymbol.js");/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=toKey;/***/},/***/"./node_modules/lodash/_toSource.js":/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodash_toSourceJs(module,exports){/** Used for built-in method references. */var funcProto=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;/***/},/***/"./node_modules/lodash/_trimmedEndIndex.js":/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/ /*! no static exports found */ /***/function node_modulesLodash_trimmedEndIndexJs(module,exports){/** Used to match a single whitespace character. */var reWhitespace=/\s/;/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}module.exports=trimmedEndIndex;/***/},/***/"./node_modules/lodash/eq.js":/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/ /*! no static exports found */ /***/function node_modulesLodashEqJs(module,exports){/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;/***/},/***/"./node_modules/lodash/get.js":/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/ /*! no static exports found */ /***/function node_modulesLodashGetJs(module,exports,__webpack_require__){var baseGet=__webpack_require__(/*! ./_baseGet */"./node_modules/lodash/_baseGet.js");/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}module.exports=get;/***/},/***/"./node_modules/lodash/hasIn.js":/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/ /*! no static exports found */ /***/function node_modulesLodashHasInJs(module,exports,__webpack_require__){var baseHasIn=__webpack_require__(/*! ./_baseHasIn */"./node_modules/lodash/_baseHasIn.js"),hasPath=__webpack_require__(/*! ./_hasPath */"./node_modules/lodash/_hasPath.js");/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}module.exports=hasIn;/***/},/***/"./node_modules/lodash/identity.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashIdentityJs(module,exports){/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}module.exports=identity;/***/},/***/"./node_modules/lodash/includes.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/includes.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashIncludesJs(module,exports,__webpack_require__){var baseIndexOf=__webpack_require__(/*! ./_baseIndexOf */"./node_modules/lodash/_baseIndexOf.js"),isArrayLike=__webpack_require__(/*! ./isArrayLike */"./node_modules/lodash/isArrayLike.js"),isString=__webpack_require__(/*! ./isString */"./node_modules/lodash/isString.js"),toInteger=__webpack_require__(/*! ./toInteger */"./node_modules/lodash/toInteger.js"),values=__webpack_require__(/*! ./values */"./node_modules/lodash/values.js");/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}module.exports=includes;/***/},/***/"./node_modules/lodash/isArguments.js":/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodashIsArgumentsJs(module,exports,__webpack_require__){var baseIsArguments=__webpack_require__(/*! ./_baseIsArguments */"./node_modules/lodash/_baseIsArguments.js"),isObjectLike=__webpack_require__(/*! ./isObjectLike */"./node_modules/lodash/isObjectLike.js");/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};module.exports=isArguments;/***/},/***/"./node_modules/lodash/isArray.js":/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/ /*! no static exports found */ /***/function node_modulesLodashIsArrayJs(module,exports){/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;module.exports=isArray;/***/},/***/"./node_modules/lodash/isArrayLike.js":/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodashIsArrayLikeJs(module,exports,__webpack_require__){var isFunction=__webpack_require__(/*! ./isFunction */"./node_modules/lodash/isFunction.js"),isLength=__webpack_require__(/*! ./isLength */"./node_modules/lodash/isLength.js");/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}module.exports=isArrayLike;/***/},/***/"./node_modules/lodash/isBuffer.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashIsBufferJs(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var root=__webpack_require__(/*! ./_root */"./node_modules/lodash/_root.js"),stubFalse=__webpack_require__(/*! ./stubFalse */"./node_modules/lodash/stubFalse.js");/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&_typeof2(module)=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(module));/***/},/***/"./node_modules/lodash/isFunction.js":/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesLodashIsFunctionJs(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(/*! ./_baseGetTag */"./node_modules/lodash/_baseGetTag.js"),isObject=__webpack_require__(/*! ./isObject */"./node_modules/lodash/isObject.js");/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}module.exports=isFunction;/***/},/***/"./node_modules/lodash/isLength.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashIsLengthJs(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;/***/},/***/"./node_modules/lodash/isNull.js":/*!***************************************!*\
  !*** ./node_modules/lodash/isNull.js ***!
  \***************************************/ /*! no static exports found */ /***/function node_modulesLodashIsNullJs(module,exports){/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */function isNull(value){return value===null;}module.exports=isNull;/***/},/***/"./node_modules/lodash/isObject.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashIsObjectJs(module,exports){/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=_typeof2(value);return value!=null&&(type=='object'||type=='function');}module.exports=isObject;/***/},/***/"./node_modules/lodash/isObjectLike.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodashIsObjectLikeJs(module,exports){/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&_typeof2(value)=='object';}module.exports=isObjectLike;/***/},/***/"./node_modules/lodash/isString.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashIsStringJs(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(/*! ./_baseGetTag */"./node_modules/lodash/_baseGetTag.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js"),isObjectLike=__webpack_require__(/*! ./isObjectLike */"./node_modules/lodash/isObjectLike.js");/** `Object#toString` result references. */var stringTag='[object String]';/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}module.exports=isString;/***/},/***/"./node_modules/lodash/isSymbol.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashIsSymbolJs(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(/*! ./_baseGetTag */"./node_modules/lodash/_baseGetTag.js"),isObjectLike=__webpack_require__(/*! ./isObjectLike */"./node_modules/lodash/isObjectLike.js");/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return _typeof2(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}module.exports=isSymbol;/***/},/***/"./node_modules/lodash/isTypedArray.js":/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/ /*! no static exports found */ /***/function node_modulesLodashIsTypedArrayJs(module,exports,__webpack_require__){var baseIsTypedArray=__webpack_require__(/*! ./_baseIsTypedArray */"./node_modules/lodash/_baseIsTypedArray.js"),baseUnary=__webpack_require__(/*! ./_baseUnary */"./node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__(/*! ./_nodeUtil */"./node_modules/lodash/_nodeUtil.js");/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;/***/},/***/"./node_modules/lodash/isUndefined.js":/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/ /*! no static exports found */ /***/function node_modulesLodashIsUndefinedJs(module,exports){/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */function isUndefined(value){return value===undefined;}module.exports=isUndefined;/***/},/***/"./node_modules/lodash/keys.js":/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/ /*! no static exports found */ /***/function node_modulesLodashKeysJs(module,exports,__webpack_require__){var arrayLikeKeys=__webpack_require__(/*! ./_arrayLikeKeys */"./node_modules/lodash/_arrayLikeKeys.js"),baseKeys=__webpack_require__(/*! ./_baseKeys */"./node_modules/lodash/_baseKeys.js"),isArrayLike=__webpack_require__(/*! ./isArrayLike */"./node_modules/lodash/isArrayLike.js");/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}module.exports=keys;/***/},/***/"./node_modules/lodash/map.js":/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/ /*! no static exports found */ /***/function node_modulesLodashMapJs(module,exports,__webpack_require__){var arrayMap=__webpack_require__(/*! ./_arrayMap */"./node_modules/lodash/_arrayMap.js"),baseIteratee=__webpack_require__(/*! ./_baseIteratee */"./node_modules/lodash/_baseIteratee.js"),baseMap=__webpack_require__(/*! ./_baseMap */"./node_modules/lodash/_baseMap.js"),isArray=__webpack_require__(/*! ./isArray */"./node_modules/lodash/isArray.js");/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,baseIteratee(iteratee,3));}module.exports=map;/***/},/***/"./node_modules/lodash/memoize.js":/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/ /*! no static exports found */ /***/function node_modulesLodashMemoizeJs(module,exports,__webpack_require__){var MapCache=__webpack_require__(/*! ./_MapCache */"./node_modules/lodash/_MapCache.js");/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;module.exports=memoize;/***/},/***/"./node_modules/lodash/property.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashPropertyJs(module,exports,__webpack_require__){var baseProperty=__webpack_require__(/*! ./_baseProperty */"./node_modules/lodash/_baseProperty.js"),basePropertyDeep=__webpack_require__(/*! ./_basePropertyDeep */"./node_modules/lodash/_basePropertyDeep.js"),isKey=__webpack_require__(/*! ./_isKey */"./node_modules/lodash/_isKey.js"),toKey=__webpack_require__(/*! ./_toKey */"./node_modules/lodash/_toKey.js");/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}module.exports=property;/***/},/***/"./node_modules/lodash/stubArray.js":/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodashStubArrayJs(module,exports){/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}module.exports=stubArray;/***/},/***/"./node_modules/lodash/stubFalse.js":/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodashStubFalseJs(module,exports){/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=stubFalse;/***/},/***/"./node_modules/lodash/toFinite.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashToFiniteJs(module,exports,__webpack_require__){var toNumber=__webpack_require__(/*! ./toNumber */"./node_modules/lodash/toNumber.js");/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}module.exports=toFinite;/***/},/***/"./node_modules/lodash/toInteger.js":/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/ /*! no static exports found */ /***/function node_modulesLodashToIntegerJs(module,exports,__webpack_require__){var toFinite=__webpack_require__(/*! ./toFinite */"./node_modules/lodash/toFinite.js");/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}module.exports=toInteger;/***/},/***/"./node_modules/lodash/toNumber.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashToNumberJs(module,exports,__webpack_require__){var baseTrim=__webpack_require__(/*! ./_baseTrim */"./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__(/*! ./isObject */"./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__(/*! ./isSymbol */"./node_modules/lodash/isSymbol.js");/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;/***/},/***/"./node_modules/lodash/toString.js":/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/ /*! no static exports found */ /***/function node_modulesLodashToStringJs(module,exports,__webpack_require__){var baseToString=__webpack_require__(/*! ./_baseToString */"./node_modules/lodash/_baseToString.js");/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?'':baseToString(value);}module.exports=toString;/***/},/***/"./node_modules/lodash/values.js":/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/ /*! no static exports found */ /***/function node_modulesLodashValuesJs(module,exports,__webpack_require__){var baseValues=__webpack_require__(/*! ./_baseValues */"./node_modules/lodash/_baseValues.js"),keys=__webpack_require__(/*! ./keys */"./node_modules/lodash/keys.js");/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */function values(object){return object==null?[]:baseValues(object,keys(object));}module.exports=values;/***/},/***/"./node_modules/webpack/buildin/global.js":/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/ /*! no static exports found */ /***/function node_modulesWebpackBuildinGlobalJs(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||new Function("return this")();}catch(e){// This works if the window reference is available
if((typeof window==="undefined"?"undefined":_typeof2(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/***/"./node_modules/webpack/buildin/module.js":/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/ /*! no static exports found */ /***/function node_modulesWebpackBuildinModuleJs(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:true,get:function get(){return module.l;}});Object.defineProperty(module,"id",{enumerable:true,get:function get(){return module.i;}});module.webpackPolyfill=1;}return module;};/***/},/***/"jquery":/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/ /*! no static exports found */ /***/function jquery(module,exports){(function(){module.exports=window["jQuery"];})();/***/}/******/}));

/***/ }),

/***/ "./includes/builder/node_modules/lodash/_Hash.js":
/*!*******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_Hash.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./includes/builder/node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./includes/builder/node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./includes/builder/node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./includes/builder/node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./includes/builder/node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_ListCache.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_ListCache.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./includes/builder/node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./includes/builder/node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./includes/builder/node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./includes/builder/node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./includes/builder/node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_Map.js":
/*!******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_Map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./includes/builder/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_MapCache.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_MapCache.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./includes/builder/node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./includes/builder/node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./includes/builder/node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./includes/builder/node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./includes/builder/node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_Symbol.js":
/*!*********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_Symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_arrayLikeKeys.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_arrayLikeKeys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./includes/builder/node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./includes/builder/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./includes/builder/node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./includes/builder/node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./includes/builder/node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_arrayMap.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_arrayMap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_assocIndexOf.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_assocIndexOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./includes/builder/node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseFindIndex.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseFindIndex.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseGet.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseGet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./includes/builder/node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./includes/builder/node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseGetTag.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseGetTag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./includes/builder/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./includes/builder/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./includes/builder/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIndexOf.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIndexOf.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./includes/builder/node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./includes/builder/node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./includes/builder/node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsArguments.js":
/*!******************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsArguments.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsNaN.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsNaN.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsNative.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsNative.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./includes/builder/node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./includes/builder/node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./includes/builder/node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./includes/builder/node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsTypedArray.js":
/*!*******************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsTypedArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./includes/builder/node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseKeys.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseKeys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./includes/builder/node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./includes/builder/node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseTimes.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseTimes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseToString.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseToString.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./includes/builder/node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./includes/builder/node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseTrim.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseTrim.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./includes/builder/node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseUnary.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseUnary.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseValues.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseValues.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./includes/builder/node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_castPath.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_castPath.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./includes/builder/node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./includes/builder/node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./includes/builder/node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_coreJsData.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_coreJsData.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_freeGlobal.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_freeGlobal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getMapData.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getMapData.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./includes/builder/node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getNative.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getNative.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./includes/builder/node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./includes/builder/node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getRawTag.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getRawTag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./includes/builder/node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getValue.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashClear.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashClear.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashDelete.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashDelete.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashGet.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashGet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashHas.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashHas.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashSet.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashSet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isIndex.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isIndex.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isKey.js":
/*!********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isKey.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isKeyable.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isKeyable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isMasked.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isMasked.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./includes/builder/node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isPrototype.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isPrototype.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheClear.js":
/*!*****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheClear.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheDelete.js":
/*!******************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheDelete.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheGet.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheGet.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheHas.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheHas.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheSet.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheSet.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheClear.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheClear.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./includes/builder/node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./includes/builder/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./includes/builder/node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheDelete.js":
/*!*****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheDelete.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheGet.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheGet.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheHas.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheHas.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheSet.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheSet.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_memoizeCapped.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_memoizeCapped.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./includes/builder/node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_nativeCreate.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_nativeCreate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./includes/builder/node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_nativeKeys.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_nativeKeys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./includes/builder/node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_nodeUtil.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_nodeUtil.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./includes/builder/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./includes/builder/node_modules/lodash/_objectToString.js":
/*!*****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_objectToString.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_overArg.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_overArg.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_root.js":
/*!*******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_root.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./includes/builder/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_strictIndexOf.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_strictIndexOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_stringToPath.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_stringToPath.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./includes/builder/node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_toKey.js":
/*!********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_toKey.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_toSource.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_toSource.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_trimmedEndIndex.js":
/*!******************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_trimmedEndIndex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/eq.js":
/*!****************************************************!*\
  !*** ./includes/builder/node_modules/lodash/eq.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/get.js":
/*!*****************************************************!*\
  !*** ./includes/builder/node_modules/lodash/get.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./includes/builder/node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/includes.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./includes/builder/node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./includes/builder/node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./includes/builder/node_modules/lodash/isString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./includes/builder/node_modules/lodash/toInteger.js"),
    values = __webpack_require__(/*! ./values */ "./includes/builder/node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isArguments.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isArguments.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./includes/builder/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isArray.js":
/*!*********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isArray.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isArrayLike.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isArrayLike.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./includes/builder/node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./includes/builder/node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isBuffer.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isBuffer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./includes/builder/node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./includes/builder/node_modules/lodash/isFunction.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isFunction.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./includes/builder/node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isLength.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isLength.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isObject.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isObject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isObjectLike.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isObjectLike.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isString.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isString.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isSymbol.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isSymbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isTypedArray.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isTypedArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./includes/builder/node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./includes/builder/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./includes/builder/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/keys.js":
/*!******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./includes/builder/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./includes/builder/node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./includes/builder/node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/memoize.js":
/*!*********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/memoize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./includes/builder/node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/stubFalse.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/stubFalse.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toFinite.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toFinite.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./includes/builder/node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toInteger.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toInteger.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./includes/builder/node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toNumber.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toNumber.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./includes/builder/node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./includes/builder/node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toString.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toString.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./includes/builder/node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/values.js":
/*!********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/values.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./includes/builder/node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./includes/builder/node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./includes/builder/scripts/ext/waypoints.min.js":
/*!*******************************************************!*\
  !*** ./includes/builder/scripts/ext/waypoints.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
* Waypoints - 4.0.0
* Copyright © 2011-2015 Caleb Troughton
* Licensed under the MIT license.
* https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*
* Modified to adapt the latest jQuery version (v3 above) included on WordPress 5.6:
* - (2020-12-15) - jQuery isFunction method is deprecated.
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return "function"==typeof arguments[0]&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/***/ }),

/***/ "./includes/builder/scripts/utils/utils.js":
/*!*************************************************!*\
  !*** ./includes/builder/scripts/utils/utils.js ***!
  \*************************************************/
/*! exports provided: isBuilderType, is, isFE, isVB, isBFB, isTB, isLBB, isDiviTheme, isExtraTheme, isLBP, isBlockEditor, isBuilder, getOffsets, maybeIncreaseEmitterMaxListeners, maybeDecreaseEmitterMaxListeners, registerFrontendComponent, setImportantInlineValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuilderType", function() { return isBuilderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFE", function() { return isFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVB", function() { return isVB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBFB", function() { return isBFB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTB", function() { return isTB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLBB", function() { return isLBB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDiviTheme", function() { return isDiviTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtraTheme", function() { return isExtraTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLBP", function() { return isLBP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockEditor", function() { return isBlockEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuilder", function() { return isBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsets", function() { return getOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeIncreaseEmitterMaxListeners", function() { return maybeIncreaseEmitterMaxListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDecreaseEmitterMaxListeners", function() { return maybeDecreaseEmitterMaxListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFrontendComponent", function() { return registerFrontendComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImportantInlineValue", function() { return setImportantInlineValue; });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./includes/builder/node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./includes/builder/node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_admin_js_frame_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/admin/js/frame-helpers */ "./core/admin/js/frame-helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * IMPORTANT: Keep external dependencies as low as possible since this utils might be
 * imported by various frontend scripts; need to keep frontend script size low.
 */
// External dependencies


 // Internal dependencies


/**
 * Check current page's builder Type.
 *
 * @since 4.6.0
 *
 * @param {string} builderType Fe|vb|bfb|tb|lbb|lbp.
 *
 * @returns {bool}
 */

var isBuilderType = function isBuilderType(builderType) {
  return builderType === window.et_builder_utils_params.builderType;
};
/**
 * Return condition value.
 *
 * @since 4.6.0
 *
 * @param {string} conditionName
 *
 * @returns {bool}
 */

var is = function is(conditionName) {
  return window.et_builder_utils_params.condition[conditionName];
};
/**
 * Is current page Frontend.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isFE = isBuilderType('fe');
/**
 * Is current page Visual Builder.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isVB = isBuilderType('vb');
/**
 * Is current page BFB / New Builder Experience.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isBFB = isBuilderType('bfb');
/**
 * Is current page Theme Builder.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isTB = isBuilderType('tb');
/**
 * Is current page Layout Block Builder.
 *
 * @type {bool}
 */

var isLBB = isBuilderType('lbb');
/**
 * Is current page uses Divi Theme.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isDiviTheme = is('diviTheme');
/**
 * Is current page uses Extra Theme.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isExtraTheme = is('extraTheme');
/**
 * Is current page Layout Block Preview.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isLBP = isBuilderType('lbp');
/**
 * Check if current window is block editor window (gutenberg editing page).
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isBlockEditor = 0 < jquery__WEBPACK_IMPORTED_MODULE_2___default()(_core_admin_js_frame_helpers__WEBPACK_IMPORTED_MODULE_3__["top_window"].document).find('.edit-post-layout__content').length;
/**
 * Check if current window is builder window (VB, BFB, TB, LBB).
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isBuilder = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(['vb', 'bfb', 'tb', 'lbb'], window.et_builder_utils_params.builderType);
/**
 * Get offsets value of all sides.
 *
 * @since 4.6.0
 *
 * @param {object} $selector JQuery selector instance.
 * @param {number} height
 * @param {number} width
 *
 * @returns {object}
 */

var getOffsets = function getOffsets($selector) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // Return previously saved offset if sticky tab is active; retrieving actual offset contain risk
  // of incorrect offsets if sticky horizontal / vertical offset of relative position is modified.
  var isStickyTabActive = isBuilder && $selector.hasClass('et_pb_sticky') && 'fixed' !== $selector.css('position');
  var cachedOffsets = $selector.data('et-offsets');
  var cachedDevice = $selector.data('et-offsets-device');
  var currentDevice = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(window.ET_FE, 'stores.window.breakpoint', ''); // Only return cachedOffsets if sticky tab is active and cachedOffsets is not undefined and
  // cachedDevice equal to currentDevice.

  if (isStickyTabActive && cachedOffsets !== undefined && cachedDevice === currentDevice) {
    return cachedOffsets;
  } // Get top & left offsets


  var offsets = $selector.offset(); // If no offsets found, return empty object

  if ('undefined' === typeof offsets) {
    return {};
  } // FE sets the flag for sticky module which uses transform as classname on module wrapper while
  // VB, BFB, TB, and LB sets the flag on CSS output's <style> element because it can't modify
  // its parent. This compromises avoids the needs to extract transform rendering logic


  var hasTransform = isBuilder ? $selector.children('.et-fb-custom-css-output[data-sticky-has-transform="on"]').length > 0 : $selector.hasClass('et_pb_sticky--has-transform');
  var top = 'undefined' === typeof offsets.top ? 0 : offsets.top;
  var left = 'undefined' === typeof offsets.left ? 0 : offsets.left; // If module is sticky module that uses transform, its offset calculation needs to be adjusted
  // because transform tends to modify the positioning of the module

  if (hasTransform) {
    // Calculate offset (relative to selector's parent) AFTER it is affected by transform
    // NOTE: Can't use jQuery's position() because it considers margin-left `auto` which causes issue
    // on row thus this manually calculate the difference between element and its parent's offset
    // @see https://github.com/jquery/jquery/blob/1.12-stable/src/offset.js#L149-L155
    var parentOffsets = $selector.parent().offset();
    var transformedPosition = {
      top: offsets.top - parentOffsets.top,
      left: offsets.left - parentOffsets.left
    }; // Calculate offset (relative to selector's parent) BEFORE it is affected by transform

    var preTransformedPosition = {
      top: $selector[0].offsetTop,
      left: $selector[0].offsetLeft
    }; // Update offset's top value

    top += preTransformedPosition.top - transformedPosition.top;
    offsets.top = top; // Update offset's left value

    left += preTransformedPosition.left - transformedPosition.left;
    offsets.left = left;
  } // Manually calculate right & bottom offsets


  offsets.right = left + width;
  offsets.bottom = top + height; // Save copy of the offset on element's .data() in case of scenario where retrieving actual
  // offset value will lead to incorrect offset value (eg. sticky tab active with position offset)

  $selector.data('et-offsets', offsets); // Add current device to cache

  if ('' !== currentDevice) {
    $selector.data('et-offsets-device', offsets);
  }

  return offsets;
};
/**
 * Increase EventEmitter's max listeners if lister count is about to surpass the max listeners limit
 * IMPORTANT: Need to be placed BEFORE `.on()`.
 *
 * @since 4.6.0
 * @param {EventEmitter} emitter
 * @param eventName
 * @param {string} EventName
 */

var maybeIncreaseEmitterMaxListeners = function maybeIncreaseEmitterMaxListeners(emitter, eventName) {
  var currentCount = emitter.listenerCount(eventName);
  var maxListeners = emitter.getMaxListeners();

  if (currentCount === maxListeners) {
    emitter.setMaxListeners(maxListeners + 1);
  }
};
/**
 * Decrease EventEmitter's max listeners if listener count is less than max listener limit and above
 * 10 (default max listener limit). If listener count is less than 10, max listener limit will
 * remain at 10
 * IMPORTANT: Need to be placed AFTER `.removeListener()`.
 *
 * @since 4.6.0
 *
 * @param {EventEmitter} emitter
 * @param {string} eventName
 */

var maybeDecreaseEmitterMaxListeners = function maybeDecreaseEmitterMaxListeners(emitter, eventName) {
  var currentCount = emitter.listenerCount(eventName);
  var maxListeners = emitter.getMaxListeners();

  if (maxListeners > 10) {
    emitter.setMaxListeners(currentCount);
  }
};
/**
 * Expose frontend (FE) component via global object so it can be accessed and reused externally
 * Note: window.ET_Builder is for builder app's component; window.ET_FE is for frontend component.
 *
 * @since 4.6.0
 *
 * @param {string} type
 * @param {string} name
 * @param {mixed} component
 */

var registerFrontendComponent = function registerFrontendComponent(type, name, component) {
  // Make sure that ET_FE is available
  if ('undefined' === typeof window.ET_FE) {
    window.ET_FE = {};
  }

  if ('object' !== _typeof(window.ET_FE[type])) {
    window.ET_FE[type] = {};
  }

  window.ET_FE[type][name] = component;
};
/**
 * Set inline style with !important tag. JQuery's .css() can't set value with `!important` tag so
 * here it is.
 *
 * @since 4.6.2
 *
 * @param {object} $element
 * @param {string} cssProp
 * @param {string} value
 */

var setImportantInlineValue = function setImportantInlineValue($element, cssProp, value) {
  // Remove prop from current inline style in case the prop is already exist
  $element.css(cssProp, ''); // Get current inline style

  var inlineStyle = $element.attr('style'); // Re-insert inline style + property with important tag

  $element.attr('style', "".concat(inlineStyle, " ").concat(cssProp, ": ").concat(value, " !important;"));
};

/***/ }),

/***/ "./js/src/custom.js":
/*!**************************!*\
  !*** ./js/src/custom.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! builder/scripts/utils/utils */ "./includes/builder/scripts/utils/utils.js");
// Internal dependencies

/*! ET custom.js */

(function ($) {
  window.et_calculating_scroll_position = false;
  window.et_side_nav_links_initialized = false;
  var top_window = builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] ? ET_Builder.Frames.top : window;

  function et_get_first_section() {
    return $('.et-l:not(.et-l--footer) .et_pb_section:visible').first();
  }

  function et_get_first_module() {
    return $('.et-l .et_pb_module:visible').first();
  }

  var $et_pb_post_fullwidth = $('.single.et_pb_pagebuilder_layout.et_full_width_page'),
      et_is_mobile_device = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/),
      et_is_ipad = navigator.userAgent.match(/iPad/),
      $et_container = $('.container'),
      et_container_width = $et_container.width(),
      et_is_fixed_nav = $('body').hasClass('et_fixed_nav') || $('body').hasClass('et_vertical_fixed'),
      et_is_vertical_fixed_nav = $('body').hasClass('et_vertical_fixed'),
      et_is_rtl = $('body').hasClass('rtl'),
      et_hide_nav = $('body').hasClass('et_hide_nav'),
      et_header_style_left = $('body').hasClass('et_header_style_left'),
      $top_header = $('#top-header'),
      $main_header = $('#main-header'),
      $main_container_wrapper = $('#page-container'),
      $et_main_content_first_row = $('#main-content .container:first-child'),
      $et_main_content_first_row_meta_wrapper = $et_main_content_first_row.find('.et_post_meta_wrapper').first(),
      $et_main_content_first_row_meta_wrapper_title = $et_main_content_first_row_meta_wrapper.find('h1.entry-title'),
      $et_main_content_first_row_content = $et_main_content_first_row.find('.entry-content').first(),
      $et_single_post = $('body.single'),
      $et_window = $(window),
      etRecalculateOffset = false,
      et_header_height = 0,
      et_header_modifier,
      et_header_offset,
      et_primary_header_top,
      $et_header_style_split = $('.et_header_style_split'),
      $et_top_navigation = $('#et-top-navigation'),
      $logo = $('#logo'),
      $et_pb_first_row = et_get_first_section(),
      et_is_touch_device = 'ontouchstart' in window || navigator.maxTouchPoints,
      $et_top_cart = $('#et-secondary-menu a.et-cart-info'); // Modification of underscore's _.debounce()
  // Underscore.js 1.8.3
  // http://underscorejs.org
  // (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  // Underscore may be freely distributed under the MIT license.

  function et_debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    var now = Date.now || new Date().getTime();

    var later = function later() {
      var last = now - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;

        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function () {
      context = this;
      args = arguments;
      timestamp = now;
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  }

  ;

  function et_preload_image(src, callback) {
    var img = new Image();
    img.onLoad = callback;
    img.onload = callback;
    img.src = src;
  } // We need to check first to see if we are on a woocommerce single product.


  if ($(".woocommerce .woocommerce-product-gallery").length > 0) {
    // get the gallery container.
    var gal = $(".woocommerce-product-gallery")[0]; // let's replace the data attribute since Salvatorre reconfigures
    // data-columns on the resize event.

    var newstr = gal.outerHTML.replace('data-columns', 'data-cols'); // finally we re-insert.

    gal.outerHTML = newstr;
  } // update the cart item on the secondary menu.


  if ($et_top_cart.length > 0 && $('.shop_table.cart').length > 0) {
    $(document.body).on('updated_wc_div', function () {
      var new_total = 0;
      var new_text;
      $('.shop_table.cart').find('.product-quantity input').each(function () {
        new_total = new_total + parseInt($(this).val());
      });

      if (new_total === 1) {
        new_text = DIVI.item_count;
      } else {
        new_text = DIVI.items_count;
      }

      new_text = new_text.replace('%d', new_total);
      $et_top_cart.find('span').text(new_text);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var $et_top_menu = $('ul.nav, ul.menu'),
        $et_search_icon = $('#et_search_icon'),
        et_parent_menu_longpress_limit = 300,
        et_parent_menu_longpress_start,
        et_parent_menu_click = true,
        is_customize_preview = $('body').hasClass('et_is_customize_preview');
    window.et_pb_init_nav_menu($et_top_menu);

    function et_header_menu_split() {
      var $logo_container = $('#main-header > .container > .logo_container'),
          $logo_container_splitted = $('.centered-inline-logo-wrap > .logo_container'),
          et_top_navigation_li_size = $et_top_navigation.children('nav').children('ul').children('li').length,
          et_top_navigation_li_break_index = Math.round(et_top_navigation_li_size / 2) - 1,
          window_width = window.innerWidth || $et_window.width();

      if (window_width > 980 && $logo_container.length && $('body').hasClass('et_header_style_split')) {
        $('<li class="centered-inline-logo-wrap"></li>').insertAfter($et_top_navigation.find('nav > ul >li:nth(' + et_top_navigation_li_break_index + ')'));
        $logo_container.appendTo($et_top_navigation.find('.centered-inline-logo-wrap'));
      }

      if (window_width <= 980 && $logo_container_splitted.length) {
        $logo_container_splitted.prependTo('#main-header > .container');
        $('#main-header .centered-inline-logo-wrap').remove();
      }
    }

    function et_set_right_vertical_menu() {
      var $body = $('body');

      if ($body.hasClass('et_boxed_layout') && $body.hasClass('et_vertical_fixed') && $body.hasClass('et_vertical_right')) {
        var header_offset = parseFloat($('#page-container').css('margin-right'));
        header_offset += parseFloat($('#et-main-area').css('margin-right')) - 225;
        header_offset = 0 > header_offset ? 0 : header_offset;
        $('#main-header').addClass('et_vertical_menu_set').css({
          'left': '',
          'right': header_offset + 'px'
        });
      }
    }

    if ($et_header_style_split.length && !window.et_is_vertical_nav || is_customize_preview) {
      et_header_menu_split();
      $(window).on('resize', function () {
        et_header_menu_split();
      });
    }

    if (window.et_is_vertical_nav) {
      if ($('#main-header').height() < $('#et-top-navigation').height()) {
        $('#main-header').height($('#et-top-navigation').height() + $('#logo').height() + 100);
      }

      et_set_right_vertical_menu();
    }

    window.et_calculate_header_values = function () {
      var $top_header = $('#top-header'),
          secondary_nav_height = $top_header.length && $top_header.is(':visible') ? parseInt($top_header.innerHeight()) : 0,
          admin_bar_height = $('#wpadminbar').length ? parseInt($('#wpadminbar').innerHeight()) : 0,
          $slide_menu_container = $('.et_header_style_slide .et_slide_in_menu_container'),
          is_rtl = $('body').hasClass('rtl');
      et_header_height = parseInt($('#main-header').length ? $('#main-header').innerHeight() : 0) + secondary_nav_height;
      et_header_modifier = et_header_height <= 90 ? et_header_height - 29 : et_header_height - 56;
      et_header_offset = et_header_modifier + admin_bar_height;
      et_primary_header_top = secondary_nav_height + admin_bar_height;

      if ($slide_menu_container.length && !$('body').hasClass('et_pb_slide_menu_active')) {
        if (is_rtl) {
          $slide_menu_container.css({
            left: '-' + parseInt($slide_menu_container.innerWidth()) + 'px',
            'display': 'none'
          });
        } else {
          $slide_menu_container.css({
            right: '-' + parseInt($slide_menu_container.innerWidth()) + 'px',
            'display': 'none'
          });
        }

        if ($('body').hasClass('et_boxed_layout')) {
          if (is_rtl) {
            var page_container_margin = $main_container_wrapper.css('margin-right');
            $main_header.css({
              right: page_container_margin
            });
          } else {
            var page_container_margin = $main_container_wrapper.css('margin-left');
            $main_header.css({
              left: page_container_margin
            });
          }
        }
      }
    };

    var $comment_form = $('#commentform');
    et_pb_form_placeholders_init($comment_form);
    $comment_form.on('submit', function () {
      et_pb_remove_placeholder_text($comment_form);
    });
    et_duplicate_menu($('#et-top-navigation ul.nav'), $('#et-top-navigation .mobile_nav'), 'mobile_menu', 'et_mobile_menu');
    et_duplicate_menu('', $('.et_pb_fullscreen_nav_container'), 'mobile_menu_slide', 'et_mobile_menu', 'no_click_event'); // Handle `Disable top tier dropdown menu links` Theme Option.

    if ($('ul.et_disable_top_tier').length) {
      var $disbaled_top_tier_links = $("ul.et_disable_top_tier > li > ul").prev('a');
      $disbaled_top_tier_links.attr('href', '#');
      $disbaled_top_tier_links.on('click', function (e) {
        e.preventDefault();
      }); // Handle top tier links in cloned mobile menu

      var $disbaled_top_tier_links_mobile = $("ul#mobile_menu > li > ul").prev('a');
      $disbaled_top_tier_links_mobile.attr('href', '#');
      $disbaled_top_tier_links_mobile.on('click', function (e) {
        e.preventDefault();
      });
    }

    if ($('#et-secondary-nav').length) {
      $('#et-top-navigation #mobile_menu').append($('#et-secondary-nav').clone().html());
    } // adding arrows for the slide/fullscreen menus


    if ($('.et_slide_in_menu_container').length) {
      var $item_with_sub = $('.et_slide_in_menu_container').find('.menu-item-has-children > a'); // add arrows for each menu item which has submenu

      if ($item_with_sub.length) {
        $item_with_sub.append('<span class="et_mobile_menu_arrow"></span>');
      }
    }

    function et_change_primary_nav_position(delay) {
      setTimeout(function () {
        var etPrimaryHeaderTop = 0;
        var $body = $('body');
        var $wpadminbar = builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] ? top_window.jQuery('#wpadminbar') : $('#wpadminbar');
        var $topHTML = top_window.jQuery('html');
        var $topHeader = $('#top-header');
        var isPreviewMode = $topHTML.is('.et-fb-preview--zoom:not(.et-fb-preview--desktop)');
        isPreviewMode = isPreviewMode || $topHTML.is('.et-fb-preview--tablet');
        isPreviewMode = isPreviewMode || $topHTML.is('.et-fb-preview--phone');

        if ($wpadminbar.length && !Number.isNaN($wpadminbar.innerHeight())) {
          var adminbarHeight = parseFloat($wpadminbar.innerHeight()); // Adjust admin bar height for builder's preview mode
          // since admin bar is rendered on top window in these modes.

          etPrimaryHeaderTop += builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] && isPreviewMode ? 0 : adminbarHeight;
        }

        if ($topHeader.length && $topHeader.is(':visible')) {
          etPrimaryHeaderTop += $topHeader.innerHeight();
        }

        var isFixedNav = $body.hasClass('et_fixed_nav');
        var isAbsolutePrimaryNav = !isFixedNav && $body.hasClass('et_transparent_nav') && $body.hasClass('et_secondary_nav_enabled');

        if (!window.et_is_vertical_nav && (isFixedNav || isAbsolutePrimaryNav)) {
          $('#main-header').css('top', etPrimaryHeaderTop + 'px');
        }
      }, delay);
    }

    window.et_change_primary_nav_position = et_change_primary_nav_position;

    function et_hide_nav_transform() {
      var $body = $('body'),
          $body_height = $(document).height(),
          $viewport_height = $(window).height() + et_header_height + 200; // Do nothing when Vertical Navigation is Enabled

      if ($body.hasClass('et_vertical_nav')) {
        return;
      }

      if ($body.hasClass('et_hide_nav') || $body.hasClass('et_hide_nav_disabled') && $body.hasClass('et_fixed_nav')) {
        if ($body_height > $viewport_height) {
          if ($body.hasClass('et_hide_nav_disabled')) {
            $body.addClass('et_hide_nav');
            $body.removeClass('et_hide_nav_disabled');
          }

          $('#main-header').css('transform', 'translateY(-' + et_header_height + 'px)');
          $('#top-header').css('transform', 'translateY(-' + et_header_height + 'px)');
        } else {
          $('#main-header').css({
            'transform': 'translateY(0)',
            'opacity': '1'
          });
          $('#top-header').css({
            'transform': 'translateY(0)',
            'opacity': '1'
          });
          $body.removeClass('et_hide_nav');
          $body.addClass('et_hide_nav_disabled');
        } // Run fix page container again, needed when body height is not tall enough and
        // adjustment has been aded


        et_fix_page_container_position();
      }
    } // Saving current styling for the next resize cycle


    function et_save_initial_page_container_style($selector, property) {
      var styling = {};
      styling[property] = $selector.css(property);
      $selector.attr({
        'data-fix-page-container': 'on'
      }).data({
        'fix_page_container_style': styling
      });
    }

    function et_page_load_scroll_to_anchor() {
      var location_hash = window.et_location_hash.replace(/(\|)/g, "\\$1");

      if ($(location_hash).length === 0) {
        return;
      }

      var $map_container = $(location_hash + ' .et_pb_map_container');
      var $map = $map_container.children('.et_pb_map');
      var $target = $(location_hash); // Make the target element visible again

      if ('undefined' !== typeof window.et_location_hash_style) {
        $target.css('display', window.et_location_hash_style);
      }

      var distance = 'undefined' !== typeof $target.offset().top ? $target.offset().top : 0;
      var speed = distance > 4000 ? 1600 : 800;

      if ($map_container.length) {
        google.maps.event.trigger($map[0], 'resize');
      } // Workaround for reviews tab in woo tabs.


      if ($target.parents().hasClass('commentlist')) {
        $('.reviews_tab').trigger('click').animate({
          scrollTop: $target.offset().top
        }, 700);
      } // Allow the header sizing functions enough time to finish before scrolling the page


      setTimeout(function () {
        et_pb_smooth_scroll($target, false, speed, 'swing'); // During the page scroll animation, the header's height might change.
        // Do the scroll animation again to ensure its accuracy.

        setTimeout(function () {
          et_pb_smooth_scroll($target, false, 150, 'linear');
        }, speed + 25);
      }, 700);
    } // Retrieving padding/margin value based on formatted saved padding/margin strings


    function et_get_saved_padding_margin_value(saved_value, order) {
      if (typeof saved_value === 'undefined') {
        return false;
      }

      var values = saved_value.split('|');
      return typeof values[order] !== 'undefined' ? values[order] : false;
    }

    function et_fix_page_container_position() {
      var et_window_width = parseInt($et_window.width()),
          $top_header = $('#top-header'),
          $et_pb_first_row = et_get_first_section(),
          secondary_nav_height = $top_header.length && $top_header.is(':visible') ? parseInt($top_header.innerHeight()) : 0,
          main_header_fixed_height = 0,
          header_height,
          et_pb_first_row_padding_top;
      var $mainHeaderClone = $main_header.clone().addClass('et-disabled-animations main-header-clone').css({
        opacity: '0px',
        position: 'fixed',
        top: 'auto',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }).appendTo($('body')); // Replace previous resize cycle's adjustment

      if (!$('body').hasClass('et-bfb')) {
        $('*[data-fix-page-container="on"]').each(function () {
          var $adjusted_element = $(this),
              styling = $adjusted_element.data();

          if (styling && styling.fix_page_container_style) {
            // Reapply previous styling
            $adjusted_element.css(styling.fix_page_container_style);
          }
        });
      } // Set data-height-onload for header if the page is loaded on large screen
      // If the page is loaded from small screen, rely on data-height-onload printed on the markup,
      // prevent window resizing issue from small to large
      // ignore data-height-loaded in VB to make sure it calculated correctly.


      if (et_window_width > 980 && (!$main_header.attr('data-height-loaded') || $('body').is('.et-fb'))) {
        var mainHeaderHeight = 0;

        if ($main_header.hasClass('et-fixed-header')) {
          $mainHeaderClone.removeClass('et-fixed-header');
          mainHeaderHeight = $mainHeaderClone.height();
          $mainHeaderClone.addClass('et-fixed-header');
        } else {
          mainHeaderHeight = $main_header.height();
        }

        $main_header.attr({
          'data-height-onload': parseInt(mainHeaderHeight),
          'data-height-loaded': true
        });
      } // Use on page load calculation for large screen. Use on the fly calculation for small screen (980px below)


      if (et_window_width <= 980) {
        header_height = parseInt($main_header.length ? $main_header.innerHeight() : 0) + secondary_nav_height - ($('body').hasClass('et-fb') ? 0 : 1); // If transparent is detected, #main-content .container's padding-top needs to be added to header_height
        // And NOT a pagebuilder page

        if (window.et_is_transparent_nav && !$et_pb_first_row.length) {
          header_height += 58;
        }
      } else {
        // Get header height from header attribute
        header_height = parseInt($main_header.attr('data-height-onload')) + secondary_nav_height; // Non page builder page needs to be added by #main-content .container's fixed height

        if (window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_main_content_first_row.length) {
          header_height += 58;
        } // Calculate fixed header height by cloning, emulating, and calculating its height


        main_header_fixed_height = $mainHeaderClone.height();
      }

      if (et_hide_nav) {
        var topNavHeightDiff = parseInt($et_top_navigation.data('height')) - parseInt($et_top_navigation.data('fixed-height'));
        main_header_fixed_height = parseInt($main_header.data('height-onload')) - topNavHeightDiff;
      } // Saved fixed main header height calculation


      $main_header.attr({
        'data-fixed-height-onload': main_header_fixed_height
      });
      var $wooCommerceNotice = $('.et_fixed_nav.et_transparent_nav.et-db.et_full_width_page #left-area > .woocommerce-notices-wrapper');

      if ($wooCommerceNotice.length > 0 && 'yes' !== $wooCommerceNotice.attr('data-position-set')) {
        var wooNoticeMargin = main_header_fixed_height;

        if (0 === wooNoticeMargin && $main_header.attr('data-height-onload')) {
          wooNoticeMargin = $main_header.attr('data-height-onload');
        }

        $wooCommerceNotice.css('marginTop', parseFloat(wooNoticeMargin) + 'px');
        $wooCommerceNotice.animate({
          'opacity': '1'
        });
        $wooCommerceNotice.attr('data-position-set', 'yes');
      } // Specific adjustment required for transparent nav + not vertical nav + (not hidden nav
      // OR hidden nav but document height is shorter than "viewport" height)
      // NOTES:
      // 1. hidden nav: nav is initially hidden then appears as the window is scrolled)
      // 2. in hidden nav, nav is displayed as window is scrolled. If document height is
      //    shorter than viewport, vertical scroll doesn't exist and nav is directly rendered.
      //    Thus, transparent nav adjustment need to be applied if body is shorter than window
      // 3. Hidden nav only works on desktop breakpoint. Nav is always displayed on tablet
      //    and smaller breakpoints
      // 4. "viewport" height calculation needs to be identical with viewport calculation used
      //    at `et_hide_nav_transform()` to make sure that when nav is displayed due to short
      //    document height, the padding gets added


      var bodyHeight = $(document).height();
      var viewportHeight = $(window).height() + et_header_height + 200;
      var isBodyShorterThanViewport = viewportHeight > bodyHeight;
      var isDesktop = parseInt($(window).width()) > 980;
      var isHideNavDesktop = isDesktop && et_hide_nav;

      if (window.et_is_transparent_nav && !window.et_is_vertical_nav && (!isHideNavDesktop || isBodyShorterThanViewport)) {
        if (!$('body').hasClass('et-bfb')) {
          // Add class for first row for custom section padding purpose
          $et_pb_first_row.addClass('et_pb_section_first');
        } // List of conditionals


        var is_pb = $et_pb_first_row.length,
            is_post_pb = is_pb && $et_single_post.length,
            is_post_pb_full_layout_has_title = $et_pb_post_fullwidth.length && $et_main_content_first_row_meta_wrapper_title.length,
            is_post_pb_full_layout_no_title = $et_pb_post_fullwidth.length && 0 === $et_main_content_first_row_meta_wrapper_title.length,
            is_post_with_tb_body = is_post_pb && $('.et-l--body').length,
            is_pb_fullwidth_section_first = $et_pb_first_row.is('.et_pb_fullwidth_section'),
            is_no_pb_mobile = et_window_width <= 980 && $et_main_content_first_row.length,
            isProject = $('body').hasClass('single-project');

        if (!is_post_with_tb_body && is_post_pb && !(is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first) && !isProject) {
          /* Desktop / Mobile + Single Post */

          /*
           * EXCEPT for fullwidth layout + fullwidth section ( at the first row ).
           * It is basically the same as page + fullwidth section with few quirk.
           * Instead of duplicating the conditional for each module, it'll be simpler to negate
           * fullwidth layout + fullwidth section in is_post_pb and rely it to is_pb_fullwidth_section_first
           */
          // Remove main content's inline padding to styling to prevent looping padding-top calculation
          $et_main_content_first_row.css({
            'paddingTop': ''
          });

          if (et_window_width < 980) {
            header_height += 40;
          }

          if (is_pb_fullwidth_section_first) {
            // If the first section is fullwidth, restore the padding-top modified area at first section
            $et_pb_first_row.css({
              'paddingTop': '0px'
            });
          }

          if (is_post_pb_full_layout_has_title) {
            // Add header height to post meta wrapper as padding top
            $et_main_content_first_row_meta_wrapper.css({
              'paddingTop': header_height + 'px'
            });
          } else if (is_post_pb_full_layout_no_title) {
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_pb_first_row, 'paddingTop'); // Reset any inline padding-top.

            $et_pb_first_row.css({
              paddingTop: ''
            });
            $et_pb_first_row.css({
              // Ignore the extra 58px added to header height previously.
              'paddingTop': 'calc(' + (header_height - 58) + 'px + ' + $et_pb_first_row.css('paddingTop') + ')'
            });
          } else {
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_main_content_first_row, 'paddingTop'); // Add header height to first row content as padding top

            $et_main_content_first_row.css({
              'paddingTop': header_height + 'px'
            });
          }
        } else if (is_pb_fullwidth_section_first) {
          /* Desktop / Mobile + Pagebuilder + Fullwidth Section */
          var $et_pb_first_row_first_module = $et_pb_first_row.children('.et_pb_module:visible').first(); // Quirks: If this is post with fullwidth layout + no title + fullwidth section at first row,
          // Remove the added height at line 2656

          if (is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first && et_window_width > 980) {
            header_height = header_height - 58;
          }

          if ($et_pb_first_row_first_module.is('.et_pb_slider')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth slider */
            var $et_pb_first_row_first_module_slide_image = $et_pb_first_row_first_module.find('.et_pb_slide_image'),
                $et_pb_first_row_first_module_slide = $et_pb_first_row_first_module.find('.et_pb_slide'),
                $et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module.find('.et_pb_slide .et_pb_container'),
                et_pb_slide_image_margin_top = 0 - parseInt($et_pb_first_row_first_module_slide_image.height()) / 2,
                et_pb_slide_container_height = 0,
                $et_pb_first_row_first_module_slider_arrow = $et_pb_first_row_first_module.find('.et-pb-slider-arrows a'),
                et_pb_first_row_slider_arrow_height = $et_pb_first_row_first_module_slider_arrow.height(); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slide, 'paddingTop'); // Adding padding top to each slide so the transparency become useful

            $et_pb_first_row_first_module_slide.css({
              'paddingTop': header_height + 'px'
            }); // delete container's min-height

            $et_pb_first_row_first_module_slide_container.css({
              'min-height': ''
            }); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slide_image, 'marginTop'); // Adjusting slider's image, considering additional top padding of slideshow

            $et_pb_first_row_first_module_slide_image.css({
              'marginTop': et_pb_slide_image_margin_top + 'px'
            }); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slider_arrow, 'marginTop'); // Adjusting slider's arrow, considering additional top padding of slideshow

            $et_pb_first_row_first_module_slider_arrow.css({
              'marginTop': header_height / 2 - et_pb_first_row_slider_arrow_height / 2 + 'px'
            }); // Looping the slide and get the highest height of slide

            var et_pb_first_row_slide_container_height_new = 0;
            $et_pb_first_row_first_module.find('.et_pb_slide').each(function () {
              var $et_pb_first_row_first_module_slide_item = $(this),
                  $et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module_slide_item.find('.et_pb_container'); // Make sure that the slide is visible to calculate correct height

              $et_pb_first_row_first_module_slide_item.show(); // Remove existing inline css to make sure that it calculates the height

              $et_pb_first_row_first_module_slide_container.css({
                'min-height': ''
              });
              var et_pb_first_row_slide_container_height = $et_pb_first_row_first_module_slide_container.innerHeight();

              if (et_pb_first_row_slide_container_height_new < et_pb_first_row_slide_container_height) {
                et_pb_first_row_slide_container_height_new = et_pb_first_row_slide_container_height;
              } // Hide the slide back if it isn't active slide


              if ($et_pb_first_row_first_module_slide_item.is(':not(".et-pb-active-slide")')) {
                $et_pb_first_row_first_module_slide_item.hide();
              }
            }); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slide_container, 'min-height'); // Setting appropriate min-height, considering additional top padding of slideshow

            $et_pb_first_row_first_module_slide_container.css({
              'min-height': et_pb_first_row_slide_container_height_new + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_fullwidth_header')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth header */
            // Remove existing inline stylesheet to prevent looping padding
            $et_pb_first_row_first_module.removeAttr('style'); // Get paddingTop from stylesheet

            var et_pb_first_row_first_module_fullwidth_header_padding_top = parseInt($et_pb_first_row_first_module.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module, 'paddingTop'); // Implement stylesheet's padding-top + header_height

            $et_pb_first_row_first_module.css({
              'paddingTop': header_height + et_pb_first_row_first_module_fullwidth_header_padding_top + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_fullwidth_portfolio')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Portfolio */
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_pb_first_row_first_module, 'paddingTop');
            $et_pb_first_row_first_module.css({
              'paddingTop': header_height + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_map_container')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Map */
            var $et_pb_first_row_map = $et_pb_first_row_first_module.find('.et_pb_map'); // Remove existing inline height to prevent looping height calculation

            $et_pb_first_row_map.css({
              'height': ''
            }); // Implement map height + header height

            $et_pb_first_row_first_module.find('.et_pb_map').css({
              'height': header_height + parseInt($et_pb_first_row_map.css('height')) + 'px'
            }); // Adding specific class to mark the map as first row section element

            $et_pb_first_row_first_module.addClass('et_beneath_transparent_nav');
          } else if ($et_pb_first_row_first_module.is('.et_pb_menu') || $et_pb_first_row_first_module.is('.et_pb_fullwidth_menu')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Menu */
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_pb_first_row_first_module, 'marginTop');
            $et_pb_first_row_first_module.css({
              'marginTop': header_height + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_fullwidth_code')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth code */
            var $et_pb_first_row_first_module_code = $et_pb_first_row_first_module;
            $et_pb_first_row_first_module_code.css({
              'paddingTop': ''
            });
            var et_pb_first_row_first_module_code_padding_top = parseInt($et_pb_first_row_first_module_code.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_code, 'paddingTop');
            $et_pb_first_row_first_module_code.css({
              'paddingTop': header_height + et_pb_first_row_first_module_code_padding_top + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_post_title')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Post Title */
            var $et_pb_first_row_first_module_title = $et_pb_first_row_first_module; // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_title, 'paddingTop');
            $et_pb_first_row_first_module.css({
              'paddingTop': header_height + 50 + 'px'
            });
          } else if (!$et_pb_first_row_first_module.length) {
            // Get current padding top
            et_pb_first_row_padding_top = parseFloat($et_pb_first_row.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row, 'paddingTop'); // Keep the state of previous cycle. The padding top is reset to the first
            // cycle by default (padding-top: 0px) so if previous cycle didn't hide the
            // nav, automatically add the additional padding top

            if (!$et_pb_first_row.data('is_hide_nav')) {
              $et_pb_first_row.css({
                'paddingTop': et_pb_first_row_padding_top + header_height + 'px'
              });
            } // Use timeout to avoid flickering padding top when window is resized vertically
            // and hidden nav is transitioned to visible nav, vice versa.


            clearTimeout(window.et_fallback_transparent_adjustment_timeout);
            window.et_fallback_transparent_adjustment_timeout = setTimeout(function () {
              // Hidden nav can be decided by the existance of et_hide_nav class AND
              // the css transform attribute value because the visibility of nav is
              // modified by CSS transition
              var is_hide_nav = $('body').hasClass('et_hide_nav') && $('#main-header').css('transform') !== 'matrix(1, 0, 0, 1, 0, 0)'; // Add / remove additional top padding accordingly

              if (is_hide_nav) {
                $et_pb_first_row.css({
                  'paddingTop': ''
                });
              } else {
                $et_pb_first_row.css({
                  'paddingTop': et_pb_first_row_padding_top + header_height + 'px'
                });
              } // Save current nav state for next cycle assessment


              $et_pb_first_row.data('is_hide_nav', is_hide_nav);
            }, 300);
          }
        } else if (is_pb) {
          /* Desktop / Mobile + Pagebuilder + Regular section */
          // Remove first row's inline padding top styling to prevent looping padding-top calculation
          $et_pb_first_row.css({
            'paddingTop': ''
          }); // Get saved custom padding from data-* attributes. Builder automatically adds
          // saved custom paddings to data-* attributes on first section

          var saved_custom_padding = $et_pb_first_row.attr('data-padding'),
              saved_custom_padding_top = et_get_saved_padding_margin_value(saved_custom_padding, 0),
              saved_custom_padding_tablet = $et_pb_first_row.attr('data-padding-tablet'),
              saved_custom_padding_tablet_top = et_get_saved_padding_margin_value(saved_custom_padding_tablet, 0),
              saved_custom_padding_phone = $et_pb_first_row.attr('data-padding-phone'),
              saved_custom_padding_phone_top = et_get_saved_padding_margin_value(saved_custom_padding_phone, 0),
              applied_saved_custom_padding;

          if (saved_custom_padding_top || saved_custom_padding_tablet_top || saved_custom_padding_phone_top) {
            // Applies padding top to first section to automatically convert saved unit into px
            if (et_window_width > 980 && saved_custom_padding_top) {
              $et_pb_first_row.css({
                paddingTop: 'number' === typeof saved_custom_padding_top ? saved_custom_padding_top + 'px' : saved_custom_padding_top
              });
            } else if (et_window_width > 767 && saved_custom_padding_tablet_top) {
              $et_pb_first_row.css({
                paddingTop: 'number' === typeof saved_custom_padding_tablet_top ? saved_custom_padding_tablet_top + 'px' : saved_custom_padding_tablet_top
              });
            } else if (saved_custom_padding_phone_top) {
              $et_pb_first_row.css({
                paddingTop: 'number' === typeof saved_custom_padding_phone_top ? saved_custom_padding_phone_top + 'px' : saved_custom_padding_phone_top
              });
            } // Get converted custom padding top value


            applied_saved_custom_padding = parseInt($et_pb_first_row.css('paddingTop')); // Implemented saved & converted padding top + header height

            $et_pb_first_row.css({
              paddingTop: header_height + applied_saved_custom_padding + 'px'
            });
          } else {
            // Pagebuilder ignores #main-content .container's fixed height and uses its row's padding
            // Anticipate the use of custom section padding.
            et_pb_first_row_padding_top = header_height + parseInt($et_pb_first_row.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row, 'paddingTop'); // Implementing padding-top + header_height

            $et_pb_first_row.css({
              'paddingTop': et_pb_first_row_padding_top + 'px'
            });
          }
        } else if (is_no_pb_mobile) {
          // Mobile + not pagebuilder
          $et_main_content_first_row.css({
            'paddingTop': header_height + 'px'
          });
        } else {
          $('#main-content .container:first-child').css({
            'paddingTop': header_height + 'px'
          });
        } // Set #page-container's padding-top to zero after inline styling first row's content has been added


        if (!$('#et_fix_page_container_position').length) {
          $('<style />', {
            'id': 'et_fix_page_container_position',
            'text': '#page-container{ padding-top: 0 !important;}'
          }).appendTo('head');
        } // If the first visible (visibility is significant for for cached split test) section/row/module has
        // parallax background, trigger parallax height resize so the parallax location is correctly rendered
        // due to addition of first section/row/module margin-top/padding-top which is needed for transparent
        // primary nav


        var $firstSection = $('.et_pb_section:visible').first();
        var $firstRow = $firstSection.find('.et_pb_row:visible').first();
        var $firstModule = $firstSection.find('.et_pb_module:visible').first();
        var firstSectionHasParallax = $firstSection.hasClass('et_pb_section_parallax');
        var firstRowHasParallax = $firstRow.hasClass('et_pb_section_parallax');
        var firstModuleHasParallax = $firstModule.hasClass('et_pb_section_parallax');

        if (firstSectionHasParallax || firstRowHasParallax || firstModuleHasParallax) {
          $(window).trigger('resize.etTrueParallaxBackground');
        }
      } else if (et_is_fixed_nav) {
        $main_container_wrapper.css('paddingTop', header_height + 'px');
      }

      $mainHeaderClone.remove();
      et_change_primary_nav_position(0);
      $(document).trigger('et-pb-header-height-calculated');
    }

    window.et_fix_page_container_position = et_fix_page_container_position; // Save container width on page load for reference

    $et_container.data('previous-width', parseInt($et_container.width()));
    var update_page_container_position = et_debounce(function () {
      et_fix_page_container_position();

      if (typeof et_fix_fullscreen_section === 'function') {
        et_fix_fullscreen_section();
      }
    }, 200);
    $(window).on('resize', function () {
      var window_width = parseInt($et_window.width()),
          has_container = $et_container.length > 0,
          et_container_previous_width = !has_container ? 0 : parseInt($et_container.data('previous-width')) || 0,
          et_container_css_width = $et_container.css('width'),
          et_container_width_in_pixel = typeof et_container_css_width !== 'undefined' ? et_container_css_width.substr(-1, 1) !== '%' : '',
          et_container_actual_width = !has_container ? 0 : et_container_width_in_pixel ? parseInt($et_container.width()) : parseInt((parseInt($et_container.width()) / 100).toFixed(0)) * window_width,
          // $et_container.width() doesn't recognize pixel or percentage unit. It's our duty to understand what it returns and convert it properly
      containerWidthChanged = $et_container.length && et_container_previous_width !== et_container_actual_width,
          $slide_menu_container = $('.et_slide_in_menu_container'),
          $adminbar = builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] ? top_window.jQuery('#wpadminbar') : $('#wpadminbar'),
          is_rtl = $('body').hasClass('rtl'),
          page_container_margin;

      if (et_is_fixed_nav && containerWidthChanged) {
        update_page_container_position(); // Update container width data for future resizing reference

        $et_container.data('previous-width', et_container_actual_width);
      }

      if (et_hide_nav) {
        et_hide_nav_transform();
      } // Update header and primary adjustment when transitioning across breakpoints or inside visual builder


      if ($adminbar.length && et_is_fixed_nav && window_width >= 740 && window_width <= 782 || builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"]) {
        et_calculate_header_values();
        et_change_primary_nav_position(0);
      }

      et_set_search_form_css();

      if ($slide_menu_container.length && !$('body').hasClass('et_pb_slide_menu_active')) {
        if (is_rtl) {
          $slide_menu_container.css({
            left: '-' + parseInt($slide_menu_container.innerWidth()) + 'px',
            right: 'unset'
          });
        } else {
          $slide_menu_container.css({
            right: '-' + parseInt($slide_menu_container.innerWidth()) + 'px'
          });
        }

        if ($('body').hasClass('et_boxed_layout') && et_is_fixed_nav) {
          if (is_rtl) {
            page_container_margin = $main_container_wrapper.css('margin-right');
            $main_header.css({
              right: page_container_margin
            });
          } else {
            page_container_margin = $main_container_wrapper.css('margin-left');
            $main_header.css({
              left: page_container_margin
            });
          }
        }
      }

      if ($slide_menu_container.length && $('body').hasClass('et_pb_slide_menu_active')) {
        if ($('body').hasClass('et_boxed_layout')) {
          var left_position;
          page_container_margin = parseFloat($main_container_wrapper.css('margin-left'));
          $main_container_wrapper.css({
            left: '-' + (parseInt($slide_menu_container.innerWidth()) - page_container_margin) + 'px'
          });

          if (et_is_fixed_nav) {
            left_position = 0 > parseInt($slide_menu_container.innerWidth()) - page_container_margin * 2 ? Math.abs($slide_menu_container.innerWidth() - page_container_margin * 2) : '-' + ($slide_menu_container.innerWidth() - page_container_margin * 2);

            if (left_position < parseInt($slide_menu_container.innerWidth())) {
              $main_header.css({
                left: left_position + 'px'
              });
            }
          }
        } else {
          if (is_rtl) {
            $('#page-container, .et_fixed_nav #main-header').css({
              right: '-' + parseInt($slide_menu_container.innerWidth()) + 'px'
            });
          } else {
            $('#page-container, .et_fixed_nav #main-header').css({
              left: '-' + parseInt($slide_menu_container.innerWidth()) + 'px'
            });
          }
        }
      } // adjust the padding in fullscreen menu


      if ($slide_menu_container.length && $('body').hasClass('et_header_style_fullscreen')) {
        var top_bar_height = parseInt($slide_menu_container.find('.et_slide_menu_top').innerHeight());
        $slide_menu_container.css({
          'padding-top': top_bar_height + 20 + 'px'
        });
      }

      et_set_right_vertical_menu();
    });

    if (builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] && jQuery('.et_header_style_fullscreen .et_slide_in_menu_container').length > 0) {
      jQuery(window).on('resize', et_pb_resize_fullscreen_menu);
    }

    $(function () {
      if ($.fn.fitVids) {
        $('#main-content').fitVids({
          customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"
        });
      }
    });

    function et_all_elements_loaded() {
      if (et_is_fixed_nav) {
        et_calculate_header_values();
      } // Run container position calculation with 0 timeout to make sure all elements are ready for proper calculation.


      setTimeout(function () {
        et_fix_page_container_position();
      }, 0); // Minified JS is ordered differently to avoid jquery-migrate to cause js error.
      // This might cause hiccup on some specific configuration (ie. parallax of first module on transparent nav)
      // Triggerring resize, in most case, re-calculate the UI correctly

      if (window.et_is_minified_js && window.et_is_transparent_nav && !window.et_is_vertical_nav) {
        $(window).trigger('resize');
      }

      if (window.hasOwnProperty('et_location_hash') && '' !== window.et_location_hash) {
        // Handle the page scroll that we prevented earlier in the <head>
        et_page_load_scroll_to_anchor();
      }

      if (et_header_style_left && !window.et_is_vertical_nav) {
        var $logo_width = parseInt($('#logo').width());

        if (et_is_rtl) {
          $et_top_navigation.css('padding-right', $logo_width + 30 + 'px');
        } else {
          $et_top_navigation.css('padding-left', $logo_width + 30 + 'px');
        }
      }

      if ($('p.demo_store').length && $('p.demo_store').is(':visible')) {
        $('#footer-bottom').css('margin-bottom', $('p.demo_store').innerHeight() + 'px');
        $('.woocommerce-store-notice__dismiss-link').on('click', function () {
          $('#footer-bottom').css('margin-bottom', '');
        });
      }

      if ($.fn.waypoint) {
        var $waypoint_selector;

        if (et_is_vertical_fixed_nav) {
          $waypoint_selector = $('#main-content');
          $waypoint_selector.waypoint({
            handler: function handler(direction) {
              et_fix_logo_transition();

              if (direction === 'down') {
                $('#main-header').addClass('et-fixed-header');
              } else {
                $('#main-header').removeClass('et-fixed-header');
              }
            }
          });
        }

        if (et_is_fixed_nav) {
          // Changing waypoint selector to first section's row / module when transparent
          // nav is used only valid if the first section position is on offset top = 0
          // (or 32 when admin bar exist) to avoid `et-fixed-nav` classname being added
          // too late when the window is scrolled too way down
          var firstRowOffsetTop = $et_pb_first_row.length > 0 ? $et_pb_first_row.offset().top : 0;
          var maxFirstRowOffsetTop = $('#wpadminbar').length ? $('#wpadminbar').height() : 0;
          var isFirstRowOnTop = firstRowOffsetTop <= maxFirstRowOffsetTop;

          if (isFirstRowOnTop && window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_pb_first_row.length) {
            // Fullscreen section at the first row requires specific adjustment
            if ($et_pb_first_row.is('.et_pb_fullwidth_section')) {
              $waypoint_selector = $et_pb_first_row.children('.et_pb_module:visible').first();
            } else {
              $waypoint_selector = $et_pb_first_row.find('.et_pb_row:visible').first();
            } // Fallback for a less likely but possible scenario: a) fullwidth section
            // has no module OR b) other section has no row. When this happened,
            // the safest option is look for the first visible module and use it
            // as waypoint selector


            if (!$waypoint_selector.length) {
              $waypoint_selector = et_get_first_module();
            }
          } else if (isFirstRowOnTop && window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_main_content_first_row.length) {
            $waypoint_selector = $('#content-area');
          } else {
            $waypoint_selector = $('#main-content');
          } // Disabled section/row/module can cause waypoint to trigger 'down' event during its setup even if
          // no scrolling happened, which would result in 'et-fixed-header' class being prematurely added.
          // Since this only happens when page is loaded, we add an extra check that is no longer needed
          // as soon as waypoint initialization is finished.


          var checkIfScrolled = true;
          setTimeout(function () {
            checkIfScrolled = false;
          }, 0);
          $waypoint_selector.waypoint({
            offset: function offset() {
              if (etRecalculateOffset) {
                setTimeout(function () {
                  et_calculate_header_values();
                }, 200);
                etRecalculateOffset = false;
              }

              if (et_hide_nav) {
                return et_header_offset - et_header_height - 200;
              } else {
                // Transparent nav modification: #page-container's offset is set to 0. Modify et_header_offset's according to header height
                var waypoint_selector_offset = $waypoint_selector.offset();

                if (waypoint_selector_offset.top < et_header_offset) {
                  et_header_offset = 0 - (et_header_offset - waypoint_selector_offset.top);
                }

                return et_header_offset;
              }
            },
            handler: function handler(direction) {
              et_fix_logo_transition();

              if (direction === 'down') {
                if (checkIfScrolled && $et_window.scrollTop() === 0) {
                  return;
                }

                $main_header.addClass('et-fixed-header');
                $main_container_wrapper.addClass('et-animated-content');
                $top_header.addClass('et-fixed-header');

                if (!et_hide_nav && !window.et_is_transparent_nav && !$('.mobile_menu_bar_toggle').is(':visible')) {
                  var secondary_nav_height = $top_header.length ? parseInt($top_header.height()) : 0,
                      $clone_header,
                      clone_header_height,
                      fix_padding;
                  $clone_header = $main_header.clone().addClass('et-fixed-header, et_header_clone').css({
                    'transition': 'none',
                    'display': 'none'
                  });
                  clone_header_height = parseInt($clone_header.prependTo('body').height()); // Vertical nav doesn't need #page-container margin-top adjustment

                  if (!window.et_is_vertical_nav) {
                    fix_padding = parseInt($main_container_wrapper.css('padding-top')) - clone_header_height - secondary_nav_height + 1;
                    $main_container_wrapper.css('margin-top', -fix_padding + 'px');
                  }

                  $('.et_header_clone').remove();
                }
              } else {
                fix_padding = 1;
                $main_header.removeClass('et-fixed-header');
                $top_header.removeClass('et-fixed-header');
                $main_container_wrapper.css('margin-top', -fix_padding + 'px');
              } // Dispatch event when fixed header height transition starts


              window.dispatchEvent(new CustomEvent('ETDiviFixedHeaderTransitionStart', {
                detail: {
                  marginTop: -fix_padding
                }
              }));
              setTimeout(function () {
                et_set_search_form_css(); // Dispatch another event when fixed header height transition ends

                window.dispatchEvent(new CustomEvent('ETDiviFixedHeaderTransitionEnd', {
                  detail: {
                    marginTop: -fix_padding
                  }
                }));
              }, 400);
            }
          });
        }

        if (et_hide_nav) {
          et_hide_nav_transform();
        }
      }
    }

    $('a[href*="#"]:not([href="#"]), .mobile_nav').on('click', function (e) {
      var $this_link = $(this),
          has_closest_smooth_scroll_disabled = $this_link.closest('.et_smooth_scroll_disabled').length,
          has_closest_woocommerce_tabs = $this_link.closest('.woocommerce-tabs').length && $this_link.closest('.tabs').length,
          has_closest_timetable_tab = $this_link.closest('.tt_tabs_navigation').length,
          has_closest_eab_cal_link = $this_link.closest('.eab-shortcode_calendar-navigation-link').length,
          has_closest_ee_cart_link = $this_link.closest('.view-cart-lnk').length,
          has_acomment_reply = $this_link.hasClass('acomment-reply'),
          is_woocommerce_review_link = $this_link.hasClass('woocommerce-review-link'),
          disable_scroll = has_closest_smooth_scroll_disabled || has_closest_ee_cart_link || has_closest_woocommerce_tabs || has_closest_eab_cal_link || has_acomment_reply || is_woocommerce_review_link || has_closest_timetable_tab;

      if (($this_link.hasClass('mobile_nav') || location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) && !disable_scroll) {
        var target = $(this.hash); // Workaround for empty target in mobile menu.

        if ($this_link.hasClass('mobile_nav')) {
          target = $('#' + e.target.hash.slice(1)); // Workaround for Popup Maker plugin not working in mobile.

          if ($(e.target).parent().hasClass('pum-trigger')) {
            e.preventDefault();
            var temp_classes = $(e.target).parent().attr('class').split(' ');
            var pop_make_classes = temp_classes.filter(function (pop_make_class) {
              return pop_make_class.includes('popmake');
            });
            var id_slug = pop_make_classes[0].split('-')[1];
            $("#pum-".concat(id_slug)).css({
              'opacity': '1',
              'display': 'block'
            });
            $("#popmake-".concat(id_slug)).css({
              'opacity': '1',
              'display': 'block'
            });
          }
        }

        if (!target.length && this.hash) {
          target = $('[name=' + this.hash.slice(1) + ']');
        }

        if (target.length) {
          // Workaround for reviews tab in woo tabs.
          if ($(this).parents().hasClass('widget_recent_reviews')) {
            $('.reviews_tab').trigger('click').animate({
              scrollTop: target.offset().top
            }, 700);
          } // automatically close fullscreen menu if clicked from there


          if ($this_link.closest('.et_pb_fullscreen_menu_opened').length > 0) {
            et_pb_toggle_fullscreen_menu();
          }

          setTimeout(function () {
            et_pb_smooth_scroll(target, false, 800);
          }, 0);

          if (!$('#main-header').hasClass('et-fixed-header') && $('body').hasClass('et_fixed_nav') && $(window).width() > 980) {
            setTimeout(function () {
              et_pb_smooth_scroll(target, false, 40, 'linear');
            }, 780);
          }

          return false;
        }
      }
    });

    var et_pb_window_side_nav_get_sections = function et_pb_window_side_nav_get_sections() {
      var $postRoot = $('.et-l--post');
      var $inTBBody = $('.et-l--body .et_pb_section').not('.et-l--post .et_pb_section');
      var $inPost;

      if (builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"]) {
        $inPost = $postRoot.find('.et-fb-post-content > .et_pb_section');
      } else {
        $inPost = $postRoot.find('.et_builder_inner_content > .et_pb_section');
      }

      if (0 === $inTBBody.length || $inPost.length > 1) {
        return $inPost;
      }

      return $inTBBody;
    };

    window.et_pb_window_side_nav_scroll_init = function () {
      if (true === window.et_calculating_scroll_position || false === window.et_side_nav_links_initialized) {
        return;
      }

      var $sections = et_pb_window_side_nav_get_sections();
      window.et_calculating_scroll_position = true;
      var is_tb_layout_used = $('.et-l--header').length || $('.et-l--body').length || !$('#main-header').length;
      var add_offset_default = is_tb_layout_used ? 0 : -90;
      var add_offset = $('body').hasClass('et_fixed_nav') ? 20 : add_offset_default;
      var top_header_height = $('#top-header').length > 0 ? parseInt($('#top-header').height()) : 0;
      var main_header_height = $('#main-header').length > 0 ? parseInt($('#main-header').height()) : 0;
      var side_offset;

      if ($('#wpadminbar').length > 0 && parseInt($(window).width()) > 600) {
        add_offset += parseInt($('#wpadminbar').outerHeight());
      }

      if (window.et_is_vertical_nav) {
        side_offset = top_header_height + add_offset + 60;
      } else {
        side_offset = top_header_height + main_header_height + add_offset;
      }

      var window_height = parseInt($(window).height());
      var scroll_position = parseInt($(window).scrollTop());
      var document_height = parseInt($(document).height());
      var at_bottom_of_page = window_height + scroll_position === document_height;
      var total_links = $('.side_nav_item a').length - 1;

      for (var link = 0; link <= total_links; link++) {
        var $target_section = $sections.eq(link);
        var at_top_of_page = 'undefined' === typeof $target_section.offset();
        var current_active = $('.side_nav_item a.active').parent().index();
        var next_active = null;
        var target_offset = false === at_top_of_page ? $target_section.offset().top - side_offset : 0;

        if (at_top_of_page) {
          next_active = 0;
        } else if (at_bottom_of_page) {
          next_active = total_links;
        } else if (scroll_position >= target_offset) {
          next_active = link;
        }

        if (null !== next_active && next_active !== current_active) {
          $('.side_nav_item a').removeClass('active');
          $('a#side_nav_item_id_' + next_active).addClass('active');
        }
      }

      window.et_calculating_scroll_position = false;
    };

    window.et_pb_side_nav_page_init = function () {
      var $sections = et_pb_window_side_nav_get_sections();
      var total_sections = $sections.length;
      var side_nav_offset = parseInt((total_sections * 20 + 40) / 2);
      window.et_side_nav_links_initialized = false;
      window.et_calculating_scroll_position = false;

      if (total_sections > 1 && $('.et_pb_side_nav_page').length) {
        $('#main-content').append('<ul class="et_pb_side_nav"></ul>');
        $sections.each(function (index, element) {
          var active_class = 0 === index ? 'active' : '';
          $('.et_pb_side_nav').append('<li class="side_nav_item"><a href="#" id="side_nav_item_id_' + index + '" class= "' + active_class + '">' + index + '</a></li>');

          if (total_sections - 1 === index) {
            window.et_side_nav_links_initialized = true;
          }
        });
        $('ul.et_pb_side_nav').css('marginTop', '-' + side_nav_offset + 'px');
        $('.et_pb_side_nav').addClass('et-visible');
        $('.et_pb_side_nav a').on('click', function () {
          // We use the index position of the sections to locate them instead of custom classes so
          // that we have the same implementation for the frontend website and the Visual Builder.
          var index = parseInt($(this).text());
          var $target = $sections.eq(index);
          var top_section = $(this).text() == "0" && !$('.et-l--body').length;
          et_pb_smooth_scroll($target, top_section, 800);

          if (!$('#main-header').hasClass('et-fixed-header') && $('body').hasClass('et_fixed_nav') && parseInt($(window).width()) > 980) {
            setTimeout(function () {
              et_pb_smooth_scroll($target, top_section, 200);
            }, 500);
          }

          return false;
        });
        $(window).on('scroll', et_pb_window_side_nav_scroll_init);
      }
    };

    if ($('body').is('.et-fb, .et-bfb')) {
      // Debounce slow function
      window.et_pb_side_nav_page_init = et_debounce(window.et_pb_side_nav_page_init, 200);
    }

    et_pb_side_nav_page_init();

    if ($('.et_pb_scroll_top').length) {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 800) {
          $('.et_pb_scroll_top').show().removeClass('et-hidden').addClass('et-visible');
        } else {
          $('.et_pb_scroll_top').removeClass('et-visible').addClass('et-hidden');
        }
      }); //Click event to scroll to top

      $('.et_pb_scroll_top').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
      });
    }

    if ($('.comment-reply-link').length) {
      $('.comment-reply-link').addClass('et_pb_button');
    }

    $('#et_top_search').on('click', function () {
      var $search_container = $('.et_search_form_container');

      if ($search_container.hasClass('et_pb_is_animating')) {
        return;
      }

      $('.et_menu_container').removeClass('et_pb_menu_visible et_pb_no_animation').addClass('et_pb_menu_hidden');
      $search_container.removeClass('et_pb_search_form_hidden et_pb_no_animation').addClass('et_pb_search_visible et_pb_is_animating');
      setTimeout(function () {
        $('.et_menu_container').addClass('et_pb_no_animation');
        $search_container.addClass('et_pb_no_animation').removeClass('et_pb_is_animating');
      }, 1000);
      $search_container.find('input').trigger('focus');
      et_set_search_form_css();
    });

    function et_hide_search() {
      if ($('.et_search_form_container').hasClass('et_pb_is_animating')) {
        return;
      }

      $('.et_menu_container').removeClass('et_pb_menu_hidden et_pb_no_animation').addClass('et_pb_menu_visible');
      $('.et_search_form_container').removeClass('et_pb_search_visible et_pb_no_animation').addClass('et_pb_search_form_hidden et_pb_is_animating');
      setTimeout(function () {
        $('.et_menu_container').addClass('et_pb_no_animation');
        $('.et_search_form_container').addClass('et_pb_no_animation').removeClass('et_pb_is_animating');
      }, 1000);
    }

    function et_set_search_form_css() {
      var $search_container = $('.et_search_form_container');
      var $body = $('body');

      if ($search_container.hasClass('et_pb_search_visible')) {
        var header_height = $('#main-header').innerHeight(),
            menu_width = $('#top-menu').width(),
            font_size = $('#top-menu li a').css('font-size');
        $search_container.css({
          'height': header_height + 'px'
        });
        $search_container.find('input').css('font-size', font_size);

        if (!$body.hasClass('et_header_style_left')) {
          $search_container.css('max-width', menu_width + 60 + 'px');
        } else {
          $search_container.find('form').css('max-width', menu_width + 60 + 'px');
        }
      }
    }

    $('.et_close_search_field').on('click', function () {
      et_hide_search();
    });
    $(document).on('mouseup', function (e) {
      var $header = $('#main-header');

      if ($('.et_menu_container').hasClass('et_pb_menu_hidden')) {
        if (!$header.is(e.target) && $header.has(e.target).length === 0) {
          et_hide_search();
        }
      }
    }); // Detect actual logo dimension, used for tricky fixed navigation transition

    function et_define_logo_dimension() {
      var logo_src = $logo.is('img') ? $logo.attr('src') : $logo.find('img').attr('src'),
          is_svg = logo_src.substr(-3, 3) === 'svg' ? true : false,
          $logo_wrap,
          logo_width,
          logo_height; // Append invisible wrapper at the bottom of the page

      $('body').append($('<div />', {
        'id': 'et-define-logo-wrap',
        'style': 'position: fixed; bottom: 0; opacity: 0;'
      })); // Define logo wrap

      $logo_wrap = $('#et-define-logo-wrap');

      if (is_svg) {
        $logo_wrap.addClass('svg-logo');
      } // Clone logo to invisible wrapper


      $logo_wrap.html($logo.clone().css({
        'display': 'block'
      }).removeAttr('id')); // Get dimension

      logo_width = $logo_wrap.find('img').width();
      logo_height = $logo_wrap.find('img').height(); // Add data attribute to $logo

      $logo.attr({
        'data-actual-width': logo_width,
        'data-actual-height': logo_height
      }); // Destroy invisible wrapper

      $logo_wrap.remove(); // Init logo transition onload

      et_fix_logo_transition(true);
    }

    if ($logo.length) {
      var logo_src = $logo.is('img') ? $logo.attr('src') : $logo.find('img').attr('src'); // Wait until logo is loaded before performing logo dimension fix
      // This comes handy when the page is heavy due to the use of images or other assets

      et_preload_image(logo_src, et_define_logo_dimension);
    } // Set width for adsense in footer widget


    $('.footer-widget').each(function () {
      var $footer_widget = $(this),
          footer_widget_width = $footer_widget.width(),
          $adsense_ins = $footer_widget.find('.widget_adsensewidget ins');

      if ($adsense_ins.length) {
        $adsense_ins.width(footer_widget_width);
      }
    });
    /**
     * Visual Builder adjustment
     */

    function et_fb_side_nav_page_init() {
      $(window).off('scroll', window.et_pb_window_side_nav_scroll_init);
      $('#main-content .et_pb_side_nav').off('click', '.et_pb_side_nav a');
      $('#main-content .et_pb_side_nav').remove();
      et_pb_side_nav_page_init();
    }

    if ($('body').is('.et-fb')) {
      $(window).on('et_fb_root_did_mount', function () {
        et_fb_side_nav_page_init();
        et_all_elements_loaded();
      });
      $(window).on('et_fb_section_content_change', et_fb_side_nav_page_init);
    } else {
      window.addEventListener('load', et_all_elements_loaded);
    }
  }); // Fixing logo size transition in tricky header style

  function et_fix_logo_transition(is_onload) {
    var $body = $('body'),
        $logo = $('#logo'),
        logo_actual_width = parseInt($logo.attr('data-actual-width')),
        logo_actual_height = parseInt($logo.attr('data-actual-height')),
        logo_height_percentage = parseInt($logo.attr('data-height-percentage')),
        $top_nav = $('#et-top-navigation'),
        top_nav_height = parseInt($top_nav.attr('data-height')),
        top_nav_fixed_height = parseInt($top_nav.attr('data-fixed-height')),
        $main_header = $('#main-header'),
        is_header_split = $body.hasClass('et_header_style_split'),
        is_fixed_nav = $main_header.hasClass('et-fixed-header'),
        is_hide_primary_logo = $body.hasClass('et_hide_primary_logo'),
        is_hide_fixed_logo = $body.hasClass('et_hide_fixed_logo'),
        logo_height_base = is_fixed_nav ? top_nav_height : top_nav_fixed_height,
        logo_wrapper_width,
        logo_wrapper_height;
    is_onload = typeof is_onload === 'undefined' ? false : is_onload; // Fix for inline centered logo in horizontal nav

    if (is_header_split && !window.et_is_vertical_nav) {
      // On page load, logo_height_base should be top_nav_height
      if (is_onload) {
        logo_height_base = top_nav_height;
      } // Calculate logo wrapper height


      logo_wrapper_height = logo_height_base * (logo_height_percentage / 100) + 22; // Calculate logo wrapper width

      logo_wrapper_width = logo_actual_width * (logo_wrapper_height / logo_actual_height); // Override logo wrapper width to 0 if it is hidden

      if (is_hide_primary_logo && (is_fixed_nav || is_onload)) {
        logo_wrapper_width = 0;
      }

      if (is_hide_fixed_logo && !is_fixed_nav && !is_onload) {
        logo_wrapper_width = 0;
      } // Set fixed width for logo wrapper to force correct dimension


      $('.et_header_style_split .centered-inline-logo-wrap').css({
        'width': logo_wrapper_width + 'px'
      });
    }
  }

  function et_toggle_slide_menu(force_state) {
    var $slide_menu_container = $('.et_header_style_slide .et_slide_in_menu_container'),
        $page_container = $('.et_header_style_slide #page-container, .et_header_style_slide.et_fixed_nav #main-header'),
        $header_container = $('.et_header_style_slide #main-header'),
        is_menu_opened = $slide_menu_container.hasClass('et_pb_slide_menu_opened'),
        set_to = typeof force_state !== 'undefined' ? force_state : 'auto',
        is_boxed_layout = $('body').hasClass('et_boxed_layout'),
        page_container_margin = is_boxed_layout ? parseFloat($('#page-container').css('margin-left')) : 0,
        slide_container_width = $slide_menu_container.innerWidth(),
        is_rtl = $('body').hasClass('rtl');

    if ('auto' !== set_to && (is_menu_opened && 'open' === set_to || !is_menu_opened && 'close' === set_to)) {
      return;
    }

    if (is_menu_opened) {
      if (is_rtl) {
        $slide_menu_container.css({
          left: '-' + slide_container_width + 'px'
        });
        $page_container.css({
          right: '0px'
        });
      } else {
        $slide_menu_container.css({
          right: '-' + slide_container_width + 'px'
        });
        $page_container.css({
          left: '0px'
        });
      }

      if (is_boxed_layout && et_is_fixed_nav) {
        if (is_rtl) {
          $header_container.css({
            right: page_container_margin + 'px'
          });
        } else {
          $header_container.css({
            left: page_container_margin + 'px'
          });
        }
      } // hide the menu after animation completed


      setTimeout(function () {
        $slide_menu_container.css({
          'display': 'none'
        });
      }, 700);
    } else {
      $slide_menu_container.css({
        'display': 'block'
      }); // add some delay to make sure css animation applied correctly

      setTimeout(function () {
        if (is_rtl) {
          $slide_menu_container.css({
            left: '0px'
          });
          $page_container.css({
            right: '-' + (slide_container_width - page_container_margin) + 'px'
          });
        } else {
          $slide_menu_container.css({
            right: '0px'
          });
          $page_container.css({
            left: '-' + (slide_container_width - page_container_margin) + 'px'
          });
        }

        if (is_boxed_layout && et_is_fixed_nav) {
          var left_position = 0 > slide_container_width - page_container_margin * 2 ? Math.abs(slide_container_width - page_container_margin * 2) : '-' + (slide_container_width - page_container_margin * 2);

          if (left_position < slide_container_width) {
            if (is_rtl) {
              $header_container.css({
                right: left_position + 'px'
              });
            } else {
              $header_container.css({
                left: left_position + 'px'
              });
            }
          }
        }
      }, 50);
    }

    $('body').toggleClass('et_pb_slide_menu_active');
    $slide_menu_container.toggleClass('et_pb_slide_menu_opened');
  } // Scrolling to the correct place on page if Fixed Nav enabled


  function et_adjust_woocommerce_checkout_scroll() {
    if (!et_is_fixed_nav) {
      return;
    }

    var window_width = parseInt($et_window.width());

    if (980 >= window_width) {
      return;
    }

    var headerHeight = parseInt($('#main-header').length ? $('#main-header').innerHeight() : 0); // scroll to the top of checkout form taking into account fixed header height

    $('html, body').animate({
      scrollTop: $('form.checkout').offset().top - 100 - headerHeight
    }, 1000);
  }

  $('#main-header').on('click', '.et_toggle_slide_menu', function () {
    et_toggle_slide_menu();
  });

  if (et_is_touch_device) {
    // open slide menu on swipe left
    $et_window.on('swipeleft', function (event) {
      var window_width = parseInt($et_window.width()),
          swipe_start = parseInt(event.swipestart.coords[0]); // horizontal coordinates of the swipe start
      // if swipe started from the right edge of screen then open slide menu

      if (30 >= window_width - swipe_start) {
        et_toggle_slide_menu('open');
      }
    }); // close slide menu on swipe right

    $et_window.on('swiperight', function (event) {
      if ($('body').hasClass('et_pb_slide_menu_active')) {
        et_toggle_slide_menu('close');
      }
    });
  }

  $('#page-container').on('click', '.et_toggle_fullscreen_menu', function () {
    et_pb_toggle_fullscreen_menu();
  });

  function et_pb_toggle_fullscreen_menu() {
    var $menu_container = $('.et_header_style_fullscreen .et_slide_in_menu_container'),
        top_bar_height = $menu_container.find('.et_slide_menu_top').innerHeight();
    $menu_container.toggleClass('et_pb_fullscreen_menu_opened');
    $('body').toggleClass('et_pb_fullscreen_menu_active');
    et_pb_resize_fullscreen_menu();

    if ($menu_container.hasClass('et_pb_fullscreen_menu_opened')) {
      $menu_container.addClass('et_pb_fullscreen_menu_animated'); // adjust the padding in fullscreen menu

      $menu_container.css({
        'padding-top': top_bar_height + 20 + 'px'
      });
    } else {
      setTimeout(function () {
        $menu_container.removeClass('et_pb_fullscreen_menu_animated');
      }, 1000);
    }
  }

  function et_pb_resize_fullscreen_menu(e) {
    if (builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"]) {
      var $menu = jQuery('.et_header_style_fullscreen .et_slide_in_menu_container.et_pb_fullscreen_menu_opened');

      if ($menu.length > 0) {
        var height = jQuery(top_window).height(); // Account for padding

        height -= parseInt($menu.css('padding-top'), 10); // and AdminBar

        if ($menu.closest('.admin-bar').length > 0) {
          height -= 32;
        }

        $menu.find('.et_pb_fullscreen_nav_container').css('max-height', height + 'px');
      }
    }
  }

  $(window).on('visibilitychange', function () {
    /**
     * Fix the issue with Fullscreen menu, that remains open,
     * when back button is clicked in Firefox
     */
    if ($('body').hasClass('et_pb_fullscreen_menu_active')) {
      $('.et_toggle_fullscreen_menu').trigger('click');
    }
  });
  $('.et_pb_fullscreen_nav_container').on('click', 'li.menu-item-has-children > a', function () {
    var $this_parent = $(this).closest('li'),
        $this_arrow = $this_parent.find('>a .et_mobile_menu_arrow'),
        $closest_submenu = $this_parent.find('>ul'),
        is_opened_submenu = $this_arrow.hasClass('et_pb_submenu_opened'),
        sub_menu_max_height;
    $this_arrow.toggleClass('et_pb_submenu_opened');

    if (is_opened_submenu) {
      $closest_submenu.removeClass('et_pb_slide_dropdown_opened');
      $closest_submenu.slideToggle(700, 'easeInOutCubic');
    } else {
      $closest_submenu.slideToggle(700, 'easeInOutCubic');
      $closest_submenu.addClass('et_pb_slide_dropdown_opened');
    }

    return false;
  }); // define initial padding-top for fullscreen menu container

  if ($('body').hasClass('et_header_style_fullscreen')) {
    var $menu_container = $('.et_header_style_fullscreen .et_slide_in_menu_container');

    if ($menu_container.length) {
      var top_bar_height = $menu_container.find('.et_slide_menu_top').innerHeight();
      $menu_container.css({
        'padding-top': top_bar_height + 20 + 'px'
      });
    }
  } // adjust the scrolling position on Woocommerce checkout page in case of error


  $(document.body).on('checkout_error', function () {
    et_adjust_woocommerce_checkout_scroll();
  });
  $(document.body).on('updated_checkout', function (data) {
    if ('failure' !== data.result) {
      return;
    }

    et_adjust_woocommerce_checkout_scroll();
  }); // Override row selector in VB

  $et_window.on('et_fb_init', function () {
    var wp = top_window.wp;

    if (wp && wp.hooks && wp.hooks.addFilter) {
      var replacement = window.DIVI.row_selector;
      wp.hooks.addFilter('et.pb.row.css.selector', 'divi.et.pb.row.css.selector', function (selector) {
        return selector.replace('%%row_selector%%', replacement);
      });
    }
  });
})(jQuery);

/***/ }),

/***/ "./js/src/custom.unified.js":
/*!**********************************!*\
  !*** ./js/src/custom.unified.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var epanel_webpack_scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! epanel/.webpack/scripts.js */ "./epanel/.webpack/scripts.js");
/* harmony import */ var builder_webpack_scripts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! builder/.webpack/scripts.js */ "./includes/builder/.webpack/scripts.js");
/* harmony import */ var _src_smoothscroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/smoothscroll.js */ "./js/src/smoothscroll.js");
/* harmony import */ var _src_smoothscroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_smoothscroll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom.js */ "./js/src/custom.js");





/***/ }),

/***/ "./js/src/smoothscroll.js":
/*!********************************!*\
  !*** ./js/src/smoothscroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
* SmoothScroll for websites v1.2.1
* Licensed under the terms of the MIT license.
*
* People involved
* - Balazs Galambosi (maintainer)
* - Michael Herf     (Pulse Algorithm)
*/
(function () {
  // Scroll Variables (tweakable)
  var defaultOptions = {
    // Scrolling Core
    frameRate: 150,
    // [Hz]
    animationTime: 400,
    // [px]
    stepSize: 80,
    // [px]
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 8,
    pulseNormalize: 1,
    // Acceleration
    accelerationDelta: 20,
    // 20
    accelerationMax: 1,
    // 1
    // Keyboard Settings
    keyboardSupport: true,
    // option
    arrowScroll: 50,
    // [px]
    // Other
    touchpadSupport: true,
    fixedBackground: true,
    excluded: ""
  };
  var options = defaultOptions; // Other Variables

  var isExcluded = false;
  var isFrame = false;
  var direction = {
    x: 0,
    y: 0
  };
  var initDone = false;
  var root = document.documentElement;
  var activeElement;
  var observer;
  var deltaBuffer = [120, 120, 120];
  var key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  };
  /***********************************************
   * SETTINGS
   ***********************************************/

  var options = defaultOptions;
  /***********************************************
   * INITIALIZE
   ***********************************************/

  /**
   * Tests if smooth scrolling is allowed. Shuts down everything if not.
   */

  function initTest() {
    // Disable keyboard in VB/BFB
    var disableKeyboard = document.body.classList.contains('et-fb'); // disable keyboard support if anything above requested it

    if (disableKeyboard) {
      removeEvent("keydown", keydown);
    }

    if (options.keyboardSupport && !disableKeyboard) {
      addEvent("keydown", keydown);
    }
  }
  /**
   * Sets up scrolls array, determines if frames are involved.
   */


  function init() {
    if (!document.body) return;
    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;
    var scrollHeight = body.scrollHeight; // check compat mode for root element

    root = document.compatMode.indexOf('CSS') >= 0 ? html : body;
    activeElement = body;
    initTest();
    initDone = true; // Checks if this script is running in a frame

    if (top != self) {
      isFrame = true;
    }
    /**
     * This fixes a bug where the areas left and right to
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
        // DOMChange (throttle): fix height
        var pending = false;

        var refresh = function refresh() {
          if (!pending && html.scrollHeight != document.height) {
            pending = true; // add a new pending action

            setTimeout(function () {
              html.style.height = document.height + 'px';
              pending = false;
            }, 500); // act rarely to stay fast
          }
        };

        html.style.height = 'auto';
        setTimeout(refresh, 10); // clearfix

        if (root.offsetHeight <= windowHeight) {
          var underlay = document.createElement("div");
          underlay.style.clear = "both";
          body.appendChild(underlay);
        }
      } // disable fixed background


    if (!options.fixedBackground && !isExcluded) {
      body.style.backgroundAttachment = "scroll";
      html.style.backgroundAttachment = "scroll";
    }
  }
  /************************************************
   * SCROLLING
   ************************************************/


  var que = [];
  var pending = false;
  var lastScroll = +new Date();
  /**
   * Pushes scroll actions to the scrolling queue.
   */

  function scrollArray(elem, left, top, delay) {
    delay || (delay = 1000);
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
      var now = +new Date();
      var elapsed = now - lastScroll;

      if (elapsed < options.accelerationDelta) {
        var factor = (1 + 30 / elapsed) / 2;

        if (factor > 1) {
          factor = Math.min(factor, options.accelerationMax);
          left *= factor;
          top *= factor;
        }
      }

      lastScroll = +new Date();
    } // push a scroll command


    que.push({
      x: left,
      y: top,
      lastX: left < 0 ? 0.99 : -0.99,
      lastY: top < 0 ? 0.99 : -0.99,
      start: +new Date()
    }); // don't act if there's a pending queue

    if (pending) {
      return;
    }

    var scrollWindow = elem === document.body;

    var step = function step(time) {
      var now = +new Date();
      var scrollX = 0;
      var scrollY = 0;

      for (var i = 0; i < que.length; i++) {
        var item = que[i];
        var elapsed = now - item.start;
        var finished = elapsed >= options.animationTime; // scroll position: [0, 1]

        var position = finished ? 1 : elapsed / options.animationTime; // easing [optional]

        if (options.pulseAlgorithm) {
          position = pulse(position);
        } // only need the difference


        var x = item.x * position - item.lastX >> 0;
        var y = item.y * position - item.lastY >> 0; // add this to the total scrolling

        scrollX += x;
        scrollY += y; // update last values

        item.lastX += x;
        item.lastY += y; // delete and step back if it's over

        if (finished) {
          que.splice(i, 1);
          i--;
        }
      } // scroll left and top


      if (scrollWindow) {
        window.scrollBy(scrollX, scrollY);
      } else {
        if (scrollX) elem.scrollLeft += scrollX;
        if (scrollY) elem.scrollTop += scrollY;
      } // clean up if there's nothing left to do


      if (!left && !top) {
        que = [];
      }

      if (que.length) {
        requestFrame(step, elem, delay / options.frameRate + 1);
      } else {
        pending = false;
      }
    }; // start a new queue of actions


    requestFrame(step, elem, 0);
    pending = true;
  }
  /***********************************************
   * EVENTS
   ***********************************************/

  /**
   * Mouse wheel handler.
   * @param {Object} event
   */


  function wheel(event) {
    if (!initDone) {
      init();
    }

    var target = event.target;
    var overflowing = overflowingAncestor(target);
    var isVBTopWindowScroll = document.documentElement.className.split(' ').filter(function (className) {
      return className === 'et-fb-preview--tablet' || className === 'et-fb-preview--phone' || className === 'et-fb-preview--zoom';
    }).length > 0; // use default if there's no overflowing
    // element or default action is prevented

    if (!overflowing || event.defaultPrevented || isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src) || isVBTopWindowScroll) {
      return true;
    }

    var deltaX = event.wheelDeltaX || 0;
    var deltaY = event.wheelDeltaY || 0; // use wheelDelta if deltaX/Y is not available

    if (!deltaX && !deltaY) {
      deltaY = event.wheelDelta || 0;
    } // check if it's a touchpad scroll that should be ignored


    if (!options.touchpadSupport && isTouchpad(deltaY)) {
      return true;
    } // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes


    if (Math.abs(deltaX) > 1.2) {
      deltaX *= options.stepSize / 120;
    }

    if (Math.abs(deltaY) > 1.2) {
      deltaY *= options.stepSize / 120;
    }

    scrollArray(overflowing, -deltaX, -deltaY);
    event.preventDefault();
  }
  /**
   * Keydown event handler.
   * @param {Object} event
   */


  function keydown(event) {
    var target = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar; // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown

    if (/input|textarea|select|embed/i.test(target.nodeName) || target.isContentEditable || event.defaultPrevented || modifier) {
      return true;
    } // spacebar should trigger button press


    if (isNodeName(target, "button") && event.keyCode === key.spacebar) {
      return true;
    }

    var shift,
        x = 0,
        y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
      clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
      case key.up:
        y = -options.arrowScroll;
        break;

      case key.down:
        y = options.arrowScroll;
        break;

      case key.spacebar:
        // (+ shift)
        shift = event.shiftKey ? 1 : -1;
        y = -shift * clientHeight * 0.9;
        break;

      case key.pageup:
        y = -clientHeight * 0.9;
        break;

      case key.pagedown:
        y = clientHeight * 0.9;
        break;

      case key.home:
        y = -window.pageYOffset;
        break;

      case key.end:
        var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
        y = damt > 0 ? damt + 10 : 0;
        break;

      case key.left:
        x = -options.arrowScroll;
        break;

      case key.right:
        x = options.arrowScroll;
        break;

      default:
        return true;
      // a key we don't care about
    }

    scrollArray(elem, x, y);
    event.preventDefault();
  }
  /**
   * Mousedown event only for updating activeElement
   */


  function mousedown(event) {
    activeElement = event.target;
  }
  /***********************************************
   * OVERFLOW
   ***********************************************/


  var cache = {}; // cleared out every once in while

  setInterval(function () {
    cache = {};
  }, 10 * 1000);

  var uniqueID = function () {
    var i = 0;
    return function (el) {
      return el.uniqueID || (el.uniqueID = i++);
    };
  }();

  function setCache(elems, overflowing) {
    for (var i = elems.length; i--;) {
      cache[uniqueID(elems[i])] = overflowing;
    }

    return overflowing;
  }

  function overflowingAncestor(el) {
    var elems = [];
    var rootScrollHeight = root.scrollHeight;

    do {
      var cached = cache[uniqueID(el)];

      if (cached) {
        return setCache(elems, cached);
      }

      elems.push(el);

      if (rootScrollHeight === el.scrollHeight) {
        if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
          return setCache(elems, document.body); // scrolling root in WebKit
        }
      } else if (el.clientHeight + 10 < el.scrollHeight) {
        var overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");

        if (overflow === "scroll" || overflow === "auto") {
          return setCache(elems, el);
        }
      }
    } while (el = el.parentNode);
  }
  /***********************************************
   * HELPERS
   ***********************************************/


  function addEvent(type, fn, bubble) {
    window.addEventListener(type, fn, bubble || false);
  }

  function removeEvent(type, fn, bubble) {
    window.removeEventListener(type, fn, bubble || false);
  }

  function isNodeName(el, tag) {
    return (el.nodeName || "").toLowerCase() === tag.toLowerCase();
  }

  function directionCheck(x, y) {
    x = x > 0 ? 1 : -1;
    y = y > 0 ? 1 : -1;

    if (direction.x !== x || direction.y !== y) {
      direction.x = x;
      direction.y = y;
      que = [];
      lastScroll = 0;
    }
  }

  var deltaBufferTimer;

  function isTouchpad(deltaY) {
    if (!deltaY) return;
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    var allDivisable = isDivisible(deltaBuffer[0], 120) && isDivisible(deltaBuffer[1], 120) && isDivisible(deltaBuffer[2], 120);
    return !allDivisable;
  }

  function isDivisible(n, divisor) {
    return Math.floor(n / divisor) == n / divisor;
  }

  var requestFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback, element, delay) {
      window.setTimeout(callback, delay || 1000 / 60);
    };
  }();
  /***********************************************
   * PULSE
   ***********************************************/

  /**
   * Viscous fluid with a pulse for part and decay for the rest.
   * - Applies a fixed force over an interval (a damped acceleration), and
   * - Lets the exponential bleed away the velocity over a longer interval
   * - Michael Herf, http://stereopsis.com/stopping/
   */


  function pulse_(x) {
    var val, start, expx; // test

    x = x * options.pulseScale;

    if (x < 1) {
      // acceleartion
      val = x - (1 - Math.exp(-x));
    } else {
      // tail
      // the previous animation ended here:
      start = Math.exp(-1); // simple viscous drag

      x -= 1;
      expx = 1 - Math.exp(-x);
      val = start + expx * (1 - start);
    }

    return val * options.pulseNormalize;
  }

  function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
      options.pulseNormalize /= pulse_(1);
    }

    return pulse_(x);
  }

  var isChrome = /chrome/i.test(window.navigator.userAgent);
  var wheelEvent = null;
  if ("onwheel" in document.createElement("div")) wheelEvent = "wheel";else if ("onmousewheel" in document.createElement("div")) wheelEvent = "mousewheel";
  var isSmoothScrollActive = document.body.className.split(' ').filter(function (className) {
    return className === 'et_smooth_scroll';
  }).length > 0;

  if (wheelEvent && isChrome && isSmoothScrollActive) {
    window.addEventListener(wheelEvent, wheel, {
      passive: false
    });
    addEvent("mousedown", mousedown);
    addEvent("load", init);
  }
  /***********************************************
   * Interface for Divi Visual Builder
   ***********************************************/


  window.ET_SmoothScroll = {
    toggleKeydown: function toggleKeydown(enable) {
      if (enable) {
        addEvent("keydown", keydown);
      } else {
        removeEvent("keydown", keydown);
      }
    }
  };
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=custom.unified.js.map