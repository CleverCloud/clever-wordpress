// External dependencies
import $ from 'jquery';

/**
 * Toggle background-layout classname of current module and/or its child modules.
 *
 * @since 4.6.0
 *
 * @param {object} $module
 * @param {bool} status
 */
export const toggleAllBackgroundLayoutClassnameOnSticky = ($module, status) => {
  // Toggle background-layout classname if it is on current $module
  if ($module.is($('[data-background-layout-sticky]'))) {
    toggleBackgroundLayoutClassnameOnSticky($module, status);
  }

  // Toggle background-layout classname if it is child module of current module
  if ($module.find('[data-background-layout-sticky]').length > 0) {
    $module.find('[data-background-layout-sticky]').each(function() {
      toggleBackgroundLayoutClassnameOnSticky($(this), status);
    });
  }
};

/**
 * Toggle background-layout classname of current module.
 *
 * @since 4.6.0
 *
 * @param {object} $module
 * @param {bool} status
 */
export const toggleBackgroundLayoutClassnameOnSticky = ($module, status) => {
  const attrPrefix      = status ? '-sticky' : '';
  const allClassnames   = 'et_pb_bg_layout_dark et_pb_bg_layout_light';
  const layoutColor     = $module.attr(`data-background-layout${attrPrefix}`);
  const layoutClassname = `et_pb_bg_layout_${layoutColor}`;

  let $target = $module;

  // Switch the target element for some modules.
  if ($module.hasClass('et_pb_slide')) {
    $target = $module.closest('.et_pb_slider');
  }

  $target.removeClass(allClassnames).addClass(layoutClassname);
};
