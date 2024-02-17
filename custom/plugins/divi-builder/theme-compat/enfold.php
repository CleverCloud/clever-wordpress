<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
 * Theme Compatibility for Enfold theme
 * @since 1.3.10
 */
class ET_Builder_Theme_Compat_Enfold {
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
	 * Latest theme version: 3.8
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

		// Fixing styling quirks on visual builder
		if ( function_exists( 'et_fb_is_enabled' ) && et_fb_is_enabled() ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'add_fb_styling_fix' ), 12 );
		}

		add_filter( 'avf_enqueue_wp_mediaelement', array( $this, 'force_load_mediaelement_on_visual_builder' ), 10, 2 );

		add_action( 'et_pb_shop_before_print_shop', array( $this, 'reset_shop_onsale_position') );
		add_action( 'et_pb_shop_after_print_shop', array( $this, 'return_shop_onsale_position') );
		add_action( 'et_pb_shop_before_print_shop', array( $this, 'register_shop_thumbnail' ) );
		add_action( 'et_builder_wc_product_before_render_layout_registration', array( $this, 'remove_builder_wc_product_elements' ) );

		// Fix missing theme page container when TB is enabled.
		add_action( 'et_theme_builder_template_after_header', array( $this, 'theme_builder_after_header' ) );
		add_action( 'et_theme_builder_template_before_footer', array( $this, 'theme_builder_before_footer' ) );
	}

	/**
	 * Add inline styling for fixing visual builder's design quirks on enfold theme
	 * @return void
	 */
	function add_fb_styling_fix() {
		// Avoid module settings modal to be overlapped by header, footer, and sidebar. The z-index has to be higher than #scroll-top-link.avia_pop_class (1030)
		$style = '.et-fb #main .container > main { z-index: 1040; }';

		wp_add_inline_style( 'avia-dynamic', $style );
	}

	function reset_shop_onsale_position() {
		add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10);
		remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10);
	}

	function return_shop_onsale_position() {
		remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10);
		add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10);
	}

	/**
	 * Remove Enfold's product thumbnail on shop module and add Divi's product thumbnail
	 * @since 1.3.10
	 * @return void
	 */
	function register_shop_thumbnail() {
		remove_action( 'woocommerce_before_shop_loop_item_title', 'avia_woocommerce_thumbnail', 10 );
		add_action( 'woocommerce_before_shop_loop_item_title', 'et_divi_builder_template_loop_product_thumbnail', 10);
	}

	/**
	 * Force load mediaelement on visual builder. Enfold has theme option at `Dashboard > Enfold >
	 * Performance > Disable Features > Self hosted videos and audio features (WP-Mediaelement
	 * scripts` which disable mediaelement in certain occassion for performance and it causes visual
	 * builder scripts not being loaded because `wp-mediaelement` is one of its dependency
	 *
	 * Enfold Theme version: 4.5.6
	 *
	 * @todo Once this issue no longer exist, limit the scope of this fix using version_compare
	 *
	 * @since ??
	 *
	 * @param bool  $condition
	 * @param array $options
	 *
	 * @return bool modified $condition
	 */
	function force_load_mediaelement_on_visual_builder( $condition, $options ) {
		if ( et_core_is_fb_enabled() ) {
			return true;
		}

		return $condition;
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
		// Remove product data tabs which causes builder layout to be rendered twice
		remove_action(
			'woocommerce_after_single_product_summary',
			'woocommerce_output_product_data_tabs',
			1
		);

		// Remove the related products and upsells
		remove_action(
			'woocommerce_after_single_product_summary',
			'avia_woocommerce_display_output_upsells',
			30
		);
	}

	/**
	 * Display theme opening container.
	 *
	 * Provide the opening container tag only to ensure TB layout works smoothly.
	 *
	 * @since ??
	 */
	public function theme_builder_after_header() {
		$scroll_offset = '';

		if ( function_exists( 'avia_header_setting' ) ) {
			$scroll_offset = avia_header_setting( 'header_scroll_offset' );
		}
		?>
		<!-- Additional wrapper to fix sidebar issue because they locate id 'top' on body. -->
		<div id="top">
			<div id="wrap_all">
				<div id="main" class="all_colors" data-scroll-offset="<?php echo esc_attr( $scroll_offset ); ?>"">
		<?php
	}

	/**
	 * Display theme closing container.
	 *
	 * Provide the closing container tag only to ensure TB layout works smoothly.
	 *
	 * @since ??
	 */
	public function theme_builder_before_footer() {
		?>
				</div><!-- #main -->
			</div><!-- #wrap_all -->
		</div><!-- #top -->
		<?php
	}
}
ET_Builder_Theme_Compat_Enfold::init();