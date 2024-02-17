<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Twenty Nineteen theme
 * @see https://wordpress.org/themes/twentynineteen/
 * @since ??
 */
class ET_Builder_Theme_Compat_Twentynineteen {
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

		add_action( 'wp_enqueue_scripts', array( $this, 'dequeue_scripts' ) );
	}

	/**
	 * Dequeue touch keyboard navigation js in visual builder since it is not used on visual builder
	 * (cannot builder layout via keyboard only afterall) and it triggers error due to document
	 * referencing which cannot be overwritten
	 *
	 * @since ??
	 * @return void
	 */
	function dequeue_scripts() {
		if ( has_nav_menu( 'menu-1' ) && et_core_is_fb_enabled() ) {
			wp_dequeue_script( 'twentynineteen-touch-navigation' );
		}
	}
}
ET_Builder_Theme_Compat_Twentynineteen::init();
