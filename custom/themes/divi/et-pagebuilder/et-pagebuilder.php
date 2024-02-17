<?php

define( 'ET_BUILDER_THEME', true );
function et_setup_builder() {
	define( 'ET_BUILDER_DIR', get_template_directory() . '/includes/builder/' );
	define( 'ET_BUILDER_URI', get_template_directory_uri() . '/includes/builder' );
	define( 'ET_BUILDER_LAYOUT_POST_TYPE', 'et_pb_layout' );

	$theme_version = et_get_theme_version();
	define( 'ET_BUILDER_VERSION', $theme_version );

	load_theme_textdomain( 'et_builder', ET_BUILDER_DIR . 'languages' );
	require_once ET_BUILDER_DIR . 'framework.php';

	et_pb_register_posttypes();
}

/**
 * Setup builder based on the priority and context.
 *
 * WP CLI `admin` context execute some admin level stuff on `init` action with priority
 * PHP_INT_MIN. Due to this action and its priority, all admin related hooks are fired
 * so early and cause some fatal errors in builder due to some functions are not loaded
 * yet. The `et_setup_builder` method is responsible to load all builder functions. But,
 * it's fired too late after all those admin related hooks are fired. It's not possible
 * to call `et_setup_builder` with priority lower than PHP_INT_MIN. To fix this issue,
 * we need to increase the WP CLI `admin` context `init` action by one, then call the
 * `et_setup_builder` with priority PHP_INT_MIN. In that way, `et_setup_builder` will
 * be on top and called first.
 *
 * Note: The process above only run on WP CLI `admin` context.
 *
 * @since ??
 *
 * @see WP_CLI\Context\Admin
 * @see https://github.com/elegantthemes/Divi/issues/31631
 */
function et_setup_builder_based_on_priority() {
	global $wp_filter;

	$priority = 0;

	// Check WP CLI `admin` context `init` action if any.
	if ( defined( 'WP_CLI' ) && WP_CLI && is_admin() && ! empty( $wp_filter['init'] ) ) {
		// WP CLI `admin` context uses `init` action with priority PHP_INT_MIN and uses
		// -2147483648 as fallback. Otherwise, we can ignore it.
		$hook_priority = defined( 'PHP_INT_MIN' ) ? PHP_INT_MIN : -2147483648; // phpcs:ignore PHPCompatibility.Constants.NewConstants.php_int_minFound -- It's used by WP CLI `admin` context and already add constant check to make sure it exists.
		if ( ! empty( $wp_filter['init'][ $hook_priority ] ) ) {
			foreach ( $wp_filter['init'][ $hook_priority ] as $hook ) {
				$hook_function      = isset( $hook['function'] ) ? $hook['function'] : '';
				$hook_accepted_args = isset( $hook['accepted_args'] ) ? $hook['accepted_args'] : 0;

				// WP CLI `admin` context uses closure as callback. We can assume all hooks
				// with closure as callback on current priority should be moved.
				if ( is_a( $hook_function, 'Closure' ) && is_callable( $hook_function ) ) {
					$priority = $hook_priority;

					// Remove the action temporarily. Re-add the action and increase the priority
					// by one to ensure `et_setup_builder` is called first.
					remove_action( 'init', $hook_function, $hook_priority, $hook_accepted_args );
					add_action( 'init', $hook_function, $hook_priority + 1, $hook_accepted_args );
				}
			}
		}
	}

	// Setup builder based on the priority.
	add_action( 'init', 'et_setup_builder', $priority );
}
et_setup_builder_based_on_priority();

if ( ! function_exists( 'et_divi_maybe_adjust_row_advanced_options_config' ) ):
function et_divi_maybe_adjust_row_advanced_options_config( $advanced_options ) {
	// Row in Divi needs to be further wrapped
	$selector = array(
		'%%order_class%%',
		'body #page-container .et-db #et-boc .et-l %%order_class%%.et_pb_row',
		'body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l %%order_class%%.et_pb_row',
		'%%row_selector%%',
	);

	$selector = implode( ', ', $selector );

	et_()->array_set( $advanced_options, 'max_width.css.width', $selector );
	et_()->array_set( $advanced_options, 'max_width.css.max_width', $selector );
	et_()->array_set( $advanced_options, 'max_width.options.max_width.default', et_divi_get_content_width() . 'px' );

	if ( ! et_divi_is_boxed_layout() ) {
		return $advanced_options;
	}

	$selector = implode( ', ', array(
		'%%order_class%%',
		'body.et_boxed_layout #page-container %%order_class%%.et_pb_row',
		'body.et_boxed_layout.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l %%order_class%%.et_pb_row',
		'body.et_boxed_layout.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l %%order_class%%.et_pb_row',
		'body.et_boxed_layout.et_pb_pagebuilder_layout.single.et_full_width_portfolio_page #page-container #et-boc .et-l %%order_class%%.et_pb_row',
	) );

	et_()->array_set( $advanced_options, 'max_width.css.width', $selector );
	et_()->array_set( $advanced_options, 'max_width.css.max_width', $selector );
	et_()->array_set( $advanced_options, 'max_width.options.width.default', '90%' );

	return $advanced_options;
}
add_filter( 'et_pb_row_advanced_fields', 'et_divi_maybe_adjust_row_advanced_options_config' );
endif;

function et_divi_get_row_advanced_options_selector_replacement() {
	static $replacement;

	if ( empty( $replacement ) ) {
		$post_type = get_post_type();

		if ( 'project' !== $post_type ) {
			// Builder automatically adds `#et-boc` on selector on non official post type; hence
			// alternative selector wrapper for non official post type
			if ( et_builder_is_post_type_custom( $post_type ) ) {
				$replacement = 'body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container %%order_class%%.et_pb_row';
			} else {
				$replacement = 'body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l %%order_class%%.et_pb_row';
			}
		} else {
			// `project` post type has its own specific selector
			$replacement = 'body.et_pb_pagebuilder_layout.single.et_full_width_portfolio_page #page-container #et-boc .et-l %%order_class%%.et_pb_row';
		}
	}

	return $replacement;
}

function et_divi_maybe_adjust_row_advanced_options_selector( $selector ) {
	if ( ! is_string( $selector ) ) {
		return $selector;
	}

	return str_replace( '%%row_selector%%', et_divi_get_row_advanced_options_selector_replacement(), $selector );
}
add_filter( 'et_pb_row_css_selector', 'et_divi_maybe_adjust_row_advanced_options_selector' );

if ( ! function_exists( 'et_divi_maybe_adjust_section_advanced_options_config' ) ):
function et_divi_maybe_adjust_section_advanced_options_config( $advanced_options ) {
	$is_post_type = is_singular( 'post' ) || ( 'et_fb_update_builder_assets' === et_()->array_get( $_POST, 'action' ) && 'post' === et_()->array_get( $_POST, 'et_post_type' ) );

	if ( ! $is_post_type ) {
		$is_tax          = is_tag() || is_category() || is_tax();
		$is_saving_cache = function_exists( 'et_core_is_saving_builder_modules_cache' ) && et_core_is_saving_builder_modules_cache();

		if ( $is_tax && $is_saving_cache ) {
			// If this is a taxonomy request and builder modules cache is being generated, we have to consider
			// `is_post_type` true because the same cached data will be also used for regular posts.
			// This already happens when generating definitions via the AJAX request (see the `et_fb_update_builder_assets`
			// check in the first conditional) and the reason why, before this patch, VB would always reload
			// when loaded for a taxonomy after clearing the cache.
			$is_post_type = true;
		}
	}

	et_()->array_set( $advanced_options, 'max_width.extra.inner.options.max_width.default', et_divi_get_content_width() . 'px' );

	if ( et_divi_is_boxed_layout() ) {
		$selector = implode( ', ', array(
			'%%order_class%% > .et_pb_row',
			'body.et_boxed_layout #page-container %%order_class%% > .et_pb_row',
			'body.et_boxed_layout.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l %%order_class%% > .et_pb_row',
			'body.et_boxed_layout.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l %%order_class%% > .et_pb_row',
			'body.et_boxed_layout.et_pb_pagebuilder_layout.single.et_full_width_portfolio_page #page-container #et-boc .et-l %%order_class%% > .et_pb_row',
		) );

		et_()->array_set( $advanced_options, 'max_width.extra.inner.options.width.default', '90%' );
		et_()->array_set( $advanced_options, 'max_width.extra.inner.css.main', $selector );
	} else if ( $is_post_type ) {
		$selector = implode( ', ', array(
			'%%order_class%% > .et_pb_row',
			'body #page-container .et-db #et-boc .et-l %%order_class%% > .et_pb_row',
			'body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l %%order_class%% > .et_pb_row',
			'body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l %%order_class%% > .et_pb_row',
			'body.et_pb_pagebuilder_layout.single.et_full_width_portfolio_page #page-container #et-boc .et-l %%order_class%% > .et_pb_row',
		) );
		et_()->array_set( $advanced_options, 'max_width.extra.inner.css.main', $selector );
	}

	et_()->array_set( $advanced_options, 'margin_padding.css.main', '%%order_class%%.et_pb_section' );

	return $advanced_options;
}
add_filter( 'et_pb_section_advanced_fields', 'et_divi_maybe_adjust_section_advanced_options_config' );
endif;

/**
 * Modify blog module's advanced options configuration
 *
 * @since ??
 *
 * @param array $advanced_options
 *
 * @return array
 */
function et_divi_maybe_adjust_blog_advanced_options_config( $advanced_options ) {
	// Adding more specific selector for post meta
	$meta_selectors = et_()->array_get( $advanced_options, 'fonts.meta.css' );

	// Main post meta selector
	if ( isset( $meta_selectors['main'] ) ) {
		$main_selectors = explode( ', ', $meta_selectors['main'] );

		$main_selectors[] = '#left-area %%order_class%% .et_pb_post .post-meta';
		$main_selectors[] = '#left-area %%order_class%% .et_pb_post .post-meta a';

		et_()->array_set( $advanced_options, 'fonts.meta.css.main', implode( ', ', $main_selectors ) );
	}

	// Hover post meta selector
	if ( isset( $meta_selectors['hover'] ) ) {
		$hover_selectors = explode( ', ', $meta_selectors['hover'] );

		$hover_selectors[] = '#left-area %%order_class%% .et_pb_post .post-meta:hover';
		$hover_selectors[] = '#left-area %%order_class%% .et_pb_post .post-meta:hover a';
		$hover_selectors[] = '#left-area %%order_class%% .et_pb_post .post-meta:hover span';

		et_()->array_set( $advanced_options, 'fonts.meta.css.hover', implode( ', ', $hover_selectors ) );
	}

	return $advanced_options;
}
add_filter( 'et_pb_blog_advanced_fields', 'et_divi_maybe_adjust_blog_advanced_options_config' );

/**
 * Added custom data attribute to builder's section
 * @param array  initial custom data-* attributes for builder's section
 * @param array  section attributes
 * @param int    section order of appearances. zero based
 * @return array modified custom data-* attributes for builder's section
 */
function et_divi_section_data_attributes( $attributes, $atts, $num ) {
	$custom_padding        = isset( $atts['custom_padding'] ) ? $atts['custom_padding'] : '';
	$custom_padding_tablet = isset( $atts['custom_padding_tablet'] ) ? $atts['custom_padding_tablet'] : '';
	$custom_padding_phone  = isset( $atts['custom_padding_phone'] ) ? $atts['custom_padding_phone'] : '';
	$is_first_section      = 0 === $num;
	$is_transparent_nav    = et_divi_is_transparent_primary_nav();

	// Custom data-* attributes for transparent primary nav support.
	// Note: in customizer, the data-* attributes have to be printed for live preview purpose
	if ( $is_first_section && ( $is_transparent_nav || is_customize_preview() ) ) {
		if ( '' !== $custom_padding && 4 === count( explode( '|', $custom_padding ) ) ) {
			$attributes['padding'] = $custom_padding;
		}

		if ( '' !== $custom_padding_tablet && 4 === count( explode( '|', $custom_padding_tablet ) ) ) {
			$attributes['padding-tablet'] = $custom_padding_tablet;
		}

		if ( '' !== $custom_padding_phone && 4 === count( explode( '|', $custom_padding_phone ) ) ) {
			$attributes['padding-phone'] = $custom_padding_phone;
		}
	}

	return $attributes;
}
add_filter( 'et_pb_section_data_attributes', 'et_divi_section_data_attributes', 10, 3 );

/**
 * Switch the translation of Visual Builder interface to current user's language
 * @return void
 */
if ( ! function_exists( 'et_fb_set_builder_locale' ) ) :
function et_fb_set_builder_locale( $locale ) {
	// apply translations inside VB only
	if ( empty( $_GET['et_fb'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.NoNonceVerification
		return $locale;
	}

	$user = get_user_locale();

	if ( $user === $locale ) {
		return $locale;
	}

	if ( ! function_exists( 'switch_to_locale' ) ) {
		return $locale;
	}

	switch_to_locale( $user );

	return $user;
}
endif;
add_filter( 'theme_locale', 'et_fb_set_builder_locale' );

/**
 * Added custom post class
 * @param array $classes array of post classes
 * @param array $class   array of additional post classes
 * @param int   $post_id post ID
 * @return array modified array of post classes
 */
function et_pb_post_class( $classes, $class, $post_id ) {
	global $post;

	// Added specific class name if curent post uses comment module. Use global $post->post_content
	// instead of get_the_content() to retrieve the post's unparsed shortcode content
	if ( is_single() && has_shortcode( $post->post_content, 'et_pb_comments' ) ) {
		$classes[] = 'et_pb_no_comments_section';
	}

	return $classes;
}
add_filter( 'post_class', 'et_pb_post_class', 10, 3 );
