<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for X theme
 * @see http://theme.co/x/
 * @since 1.3.10
 */
class ET_Builder_Theme_Compat_X {
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

		add_action( 'et_pb_shop_before_print_shop', array( $this, 'register_shop_thumbnail' ) );
		add_action( 'et_builder_wc_product_before_render_layout', array( $this, 'remove_builder_wc_product_elements' ) );
	}

	/**
	 * Remove X's product thumbnail on shop module and add Divi's product thumbnail
	 * @since 1.3.10
	 * @return void
	 */
	function register_shop_thumbnail() {
		remove_action( 'woocommerce_before_shop_loop_item_title', 'x_woocommerce_shop_product_thumbnails', 10 );
		add_action( 'woocommerce_before_shop_loop_item_title', 'et_divi_builder_template_loop_product_thumbnail', 10);
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
		// Remove related products element outside builder
		remove_action( 'woocommerce_after_single_product_summary', 'x_woocommerce_output_related_products', 20 );
	}
}
ET_Builder_Theme_Compat_X::init();