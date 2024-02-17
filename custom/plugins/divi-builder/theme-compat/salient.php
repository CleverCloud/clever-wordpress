<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
 * Theme Compatibility for Salient theme
 * @since 1.0
 */
class ET_Builder_Theme_Compat_Salient {
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

		// Enqueue custom script to fix the audio module init ( on actual fronend only )
		if ( ! et_fb_is_enabled() ) {
			wp_enqueue_script( 'et_pb_theme_salient', ET_BUILDER_PLUGIN_URI . '/theme-compat/js/salient-frontend.js', array( 'jquery' ), ET_BUILDER_VERSION, true );
		}

		add_action( 'et_pb_shop_before_print_shop', array( $this, 'et_pb_fix_shop_module' ) );
	}

	function et_pb_fix_shop_module() {
		add_action( 'woocommerce_before_shop_loop_item_title', 'et_divi_builder_template_loop_product_thumbnail', 10);
		remove_action( 'woocommerce_before_shop_loop_item_title', 'product_thumbnail_with_cart', 10 );
		remove_action( 'woocommerce_before_shop_loop_item_title', 'product_thumbnail_with_cart_alt', 10 );
		remove_action( 'woocommerce_before_shop_loop_item_title', 'product_thumbnail_material', 10 );
	}
}
ET_Builder_Theme_Compat_Salient::init();