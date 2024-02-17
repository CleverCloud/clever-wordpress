<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Impreza theme
 * @see http://impreza.us-themes.com/
 *
 * @since ??
 */
class ET_Builder_Theme_Compat_Impreza {
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
	 * @return void
	 */
	function init_hooks() {
		$theme   = wp_get_theme();
		$version = isset( $theme['Version'] ) ? $theme['Version'] : false;

		// Bail if no theme version found
		if ( ! $version ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', array( $this, 'layout_block_preview_dequeue_scripts' ) );
	}

	/**
	 * Dequeue external and on-page scripts that causes layout block preview rendering breaks
	 * because expected object that is rendered on page doesn't exist on layout block preview
	 *
	 * Impreza Theme Version: 6.0.4
	 *
	 * @todo Once this issue no longer exist, limit the scope of this fix using version_compare
	 *
	 * @since ??
	 */
	function layout_block_preview_dequeue_scripts() {
		if ( ! ET_GB_Block_Layout::is_layout_block_preview() ) {
			return;
		}

		// This action hook removal can be done on init_hooks() (doesn't have to be done here)
		// but it is better for it to be grouped with the script removal
		remove_action( 'wp_footer', 'us_pass_header_settings_to_js', - 2 );

		wp_dequeue_script( 'us-core' );
	}
}
ET_Builder_Theme_Compat_Impreza::init();
