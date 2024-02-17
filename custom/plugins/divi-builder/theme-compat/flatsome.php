<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Flatsome theme
 * @see http://flatsome.uxthemes.com/
 * @since 1.0
 */
class ET_Builder_Theme_Compat_Flatsome {
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

		add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ), 10 );
		add_action( 'et_pb_shop_before_print_shop', array( $this, 'register_shop_thumbnail' ) );
		add_action( 'et_builder_wc_product_before_render_layout_registration', array( $this, 'remove_builder_wc_product_elements' ) );

		// Fix missing theme page container when TB is enabled.
		add_action( 'et_theme_builder_template_after_header', array( $this, 'theme_builder_after_header' ) );
		add_action( 'et_theme_builder_template_before_footer', array( $this, 'theme_builder_before_footer' ) );
	}

	/**
	 * Description
	 * @since 1.0
	 * @return void
	 */
	function admin_enqueue_scripts() {
		if ( ! function_exists( 'get_current_screen' ) ) {
			return;
		}

		$current_screen = get_current_screen();

		// Only load in post-editing screen
		if ( isset( $current_screen->base ) && 'post' === $current_screen->base ) {
			wp_enqueue_script( 'et_pb_theme_flatsome_editor', ET_BUILDER_PLUGIN_URI . '/theme-compat/js/flatsome-editor.js', array( 'et_pb_admin_js', 'jquery' ), ET_BUILDER_VERSION, true );
		}
	}

	/**
	 * Remove Flatsome's product thumbnail on shop module and add Divi's product thumbnail
	 * @since 1.3.10
	 * @return void
	 */
	function register_shop_thumbnail() {
		remove_action( 'flatsome_woocommerce_shop_loop_images', 'woocommerce_template_loop_product_thumbnail', 10 );
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
		// Remove custom breadcrumb added by Flatsome
		remove_action( 'flatsome_breadcrumb' , 'woocommerce_breadcrumb', 20 );
	}

	/**
	 * Display theme opening container.
	 *
	 * Provide the opening container tag only to ensure TB layout works smoothly.
	 *
	 * @since ??
	 */
	public function theme_builder_after_header() {
		$main_classes = '';

		// Ensure `flatsome_main_classes` exists to avoid fatal error if it's removed.
		if ( function_exists( 'flatsome_main_classes' ) ) {
			ob_start();
			flatsome_main_classes();
			$main_classes = ob_get_clean();
		}
		?>
		<div id="wrapper">
			<main id="main" class="<?php echo esc_attr( $main_classes ); ?>">
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
			</main><!-- #main -->
		</div><!-- #wrapper -->
		<?php
	}
}
ET_Builder_Theme_Compat_Flatsome::init();