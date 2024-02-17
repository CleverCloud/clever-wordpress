<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
 * Theme Compatibility for The7 theme
 * @since 1.3.10
 */
class ET_Builder_Theme_Compat_The7 {
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
	 * Note: once this issue is fixed in future version, run version_compare() to limit the scope of the hooked fix
	 * @return void
	 */
	function init_hooks() {
		$theme   = wp_get_theme();
		$version = isset( $theme['Version'] ) ? $theme['Version'] : false;

		// Bail if no theme version found
		if ( ! $version ) {
			return;
		}

		// Up to: latest theme version
		add_filter( 'et_fb_bundle_dependencies', array( $this, 'add_fb_bundle_dependencies' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_fb_compat_script' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'fix_woocommerce_styling' ), 20 );
		add_action( 'et_pb_get_shop_html_before', array( $this, 'fix_shortcode_object' ) );
	}

	/**
	 * Fix WooCommerce styling
	 */
	function fix_woocommerce_styling() {
		$style = '
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .featured { display: block !important; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .product { padding: 10px; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .product .woo-buttons-on-img img { display: block; width: 100%; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .woocommerce.columns-1 .wf-cell  { width: 100%; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .woocommerce.columns-2 .wf-cell  { width: 49%; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .woocommerce.columns-3 .wf-cell  { width: 33.33%; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .woocommerce.columns-4 .wf-cell  { width: 25%; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .woocommerce.columns-5 .wf-cell  { width: 20%; }
			' . ET_BUILDER_CSS_PREFIX . ' .et_pb_shop .woocommerce.columns-6 .wf-cell  { width: 16.4%; }
		';

		wp_add_inline_style( 'dt-main', $style );
	}

	/**
	 * Register theme compat script as bundle.js' dependency so it is being loaded before bundle.js
	 */
	function add_fb_bundle_dependencies( $deps ) {

		$deps[] = 'et_fb_theme_the7';

		return $deps;
	}

	/**
	 * Enqueueing scripts for FB
	 */
	function enqueue_fb_compat_script() {
		if ( et_fb_is_enabled() ) {
			wp_enqueue_script( 'et_fb_theme_the7', ET_BUILDER_PLUGIN_URI . '/theme-compat/js/the7-fb.js', array( 'jquery' ), ET_BUILDER_VERSION, true );
		}
	}

	/*
	 * Modify the7's option to make it outputs correct shop HTML data
	 */
	function fix_shortcode_object() {
		if ( function_exists( 'presscore_get_config' ) && function_exists( 'of_get_option' ) ) {
			$config = presscore_get_config();

			$config->set( 'post.preview.description.style', of_get_option( 'woocommerce_display_product_info', 'under_image' ) );
			$config->set( 'show_titles', of_get_option( 'woocommerce_show_product_titles', true ) );
			$config->set( 'product.preview.show_price', of_get_option( 'woocommerce_show_product_price', true ), true );
			$config->set( 'product.preview.show_rating', of_get_option( 'woocommerce_show_product_rating', true ), true );
			$config->set( 'product.preview.icons.show_cart', of_get_option( 'woocommerce_show_cart_icon', true ), true );
			$config->set( 'product.preview.add_to_cart.position', of_get_option( 'woocommerce_add_to_cart_position', 'on_image' ) );
		}
	}
}
ET_Builder_Theme_Compat_The7::init();
