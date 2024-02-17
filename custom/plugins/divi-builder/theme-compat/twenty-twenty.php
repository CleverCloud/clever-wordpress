<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Twenty Twenty theme
 * @see https://wordpress.org/themes/twentytwenty/
 *
 * @since ??
 */
class ET_Builder_Theme_Compat_Twentytwenty {
	/**
	 * Unique instance of class
	 *
	 * @since ??
	 */
	public static $instance;

	/**
	 * Constructor
	 *
	 * @since ??
	 */
	private function __construct(){
		$this->init_hooks();
	}

	/**
	 * Gets the instance of the class
	 *
	 * @since ??
	 */
	public static function init(){
		if ( null === self::$instance ){
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Hook methods to WordPress
	 *
	 * @since ??
	 */
	function init_hooks() {
		$theme   = wp_get_theme();
		$version = isset( $theme['Version'] ) ? $theme['Version'] : false;

		// Bail if no theme version found
		if ( ! $version ) {
			return;
		}

		add_action(
			'wp_enqueue_scripts',
			array( $this, 'enqueue_non_singular_builder_inline_style' ),
			20
		);
	}

	/**
	 * Enqueue inline style needed to fix style glitch due to main query's loop being wrapped
	 * when one of the post use builder
	 *
	 * @since ??
	 */
	function enqueue_non_singular_builder_inline_style() {
		global $wp_query;

		if ( ! et_dbp_should_wrap_content_has_builder( $wp_query ) ) {
			return;
		}

		$inline_styles = <<<EOT
body:not(.singular) .et_builder_outer_content > article:first-of-type {
	padding: 4rem 0 0;
}

@media ( min-width: 700px ) {
	body:not(.singular) .et_builder_outer_content > article:first-of-type {
		padding: 8rem 0 0;
	}
}
EOT;

		wp_add_inline_style( 'et-builder-modules-style', $inline_styles );
	}
}
ET_Builder_Theme_Compat_Twentytwenty::init();
