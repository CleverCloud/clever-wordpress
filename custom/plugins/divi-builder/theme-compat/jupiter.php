<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Jupiter theme
 * @see https://jupiter.artbees.net/
 * @since ??
 */
class ET_Builder_Theme_Compat_Jupiter {
	/**
	 * Unique instance of class
	 */
	public static $instance;

	/**
	 * Constructor
	 */
	private function __construct(){
		$this->init_hooks();
	}

	/**
	 * Gets the instance of the class
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
	 * @return void
	 */
	function init_hooks() {
		$theme   = wp_get_theme();
		$version = isset( $theme['Version'] ) ? $theme['Version'] : false;

		// Bail if no theme version found
		if ( ! $version ) {
			return;
		}

        // Remove prev/next nav on layout block preview page
        if ( ET_GB_Block_Layout::is_layout_block_preview() ) {
            remove_action('wp_footer', 'mk_get_single_post_prev_next');
        }
	}
}
ET_Builder_Theme_Compat_Jupiter::init();
