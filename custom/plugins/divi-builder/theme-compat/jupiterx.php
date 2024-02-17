<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
 * Theme Compatibility for JupiterX theme
 * @since ??
 */
class ET_Builder_Theme_Compat_JupiterX {
	/**
	 * Unique instance of class
	 */
	public static $instance;

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->init_hooks();
	}

	/**
	 * Gets the instance of the class
	 */
	public static function init() {
		if ( null === self::$instance ) {
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

		// The callback is hooked into `template_redirect` because that's where JupiterX registers
		// its callback. See: `jupiterx_add_smart_action( 'template_redirect', 'jupiterx_load_global_fragments', 1 );`
		add_action( 'template_redirect', array( $this, 'remove_builder_wc_product_elements' ) );
	}


	/**
	 * Remove unwanted WC products element added by theme; builder's WooCommerce module
	 * will render these element (if added to the layout)
	 *
	 * @since ??
	 *
	 * @return void
	 */
	function remove_builder_wc_product_elements() {
		remove_action( 'woocommerce_single_product_summary', 'jupiterx_product_page_badges', 4 );
		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 12 );
	}
}
ET_Builder_Theme_Compat_JupiterX::init();
