<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Avada theme
 * @see https://avada.theme-fusion.com/
 * @since 1.3.10
 */
class ET_Builder_Theme_Compat_Avada {
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


		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ), 15 );
		add_action( 'et_pb_shop_before_print_shop', array( $this, 'register_shop_thumbnail' ) );
		add_action( 'et_builder_wc_product_before_render_layout_registration', array( $this, 'remove_builder_wc_product_elements' ) );
	}

	/**
	 * Adding patch for to fix module's output which is affected by JS-based modification
	 *
	 * @since ??
	 */
	function enqueue_scripts() {
		// WooCommerce module can be used on all CPT, hence WooCommerce module fix should be
		// available on any CPT. ET_Builder_Theme_Compat_Loader->has_theme_compat() already
		// check whether pagebuilder is used or not
		if ( et_is_woocommerce_plugin_active() && ! et_fb_is_enabled() ) {
			wp_enqueue_script(
				'et_pb_wc_theme_avada',
				ET_BUILDER_PLUGIN_URI . '/theme-compat/js/avada-frontend-woocommerce.js',
				array( 'fusion-scripts' ),
				ET_BUILDER_VERSION,
				true
			);
		}
	}

	/**
	 * Remove Avada's product thumbnail on shop module and add Divi's product thumbnail
	 * @since 1.3.10
	 * @return void
	 */
	function register_shop_thumbnail() {
		remove_action( 'woocommerce_before_shop_loop_item_title', 'avada_woocommerce_thumbnail', 10 );
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
		global $avada_woocommerce;

		// Remove unwanted custom WooCommerce elements added by Avada
		remove_action(
			'woocommerce_single_product_summary',
			array( $avada_woocommerce, 'template_single_title' ),
			5
		);

		remove_action(
			'woocommerce_single_product_summary',
			array( $avada_woocommerce, 'stock_html' ),
			10
		);

		remove_action(
			'woocommerce_single_product_summary',
			array( $avada_woocommerce, 'add_product_border' ),
			19
		);

		// Remove related products element added by Avada on the bottom of page if builder
		// is used on `product` page
		remove_action(
			'woocommerce_after_single_product_summary',
			array( $avada_woocommerce, 'output_related_products' ),
			15
		);

		// Remove sharing links added by Avada on the bottom of page if builder is used
		// on `product` page
		remove_action(
			'woocommerce_after_single_product_summary',
			array( $avada_woocommerce, 'after_single_product_summary' ),
			15
		);
	}
}
ET_Builder_Theme_Compat_Avada::init();