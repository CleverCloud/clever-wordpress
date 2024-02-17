<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
 * Theme Compatibility for Raindrops theme
 * @since 1.0
 */
class ET_Builder_Theme_Compat_Raindrops {
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
	 * Latest theme version: 1.326
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

		// Removing prepended featured image on title on blog module
		if ( et_pb_is_pagebuilder_used( get_the_ID() ) ) {
			remove_filter( 'the_title', 'raindrops_fallback_title', 10 );
		}

		// Fix missing theme page container when TB is enabled.
		add_action( 'et_theme_builder_template_after_header', array( $this, 'theme_builder_after_header' ) );
		add_action( 'et_theme_builder_template_before_footer', array( $this, 'theme_builder_before_footer' ) );
	}

	/**
	 * Display theme opening container.
	 *
	 * Provide the opening container tag only to ensure TB layout works smoothly.
	 *
	 * @since ??
	 */
	public function theme_builder_after_header() {
		$page_container_id    = '';
		$page_container_class = '';

		if ( function_exists( 'raindrops_warehouse' ) ) {
			$page_container_id    = raindrops_warehouse( 'raindrops_page_width' );
			$page_container_class = 'yui-' . raindrops_warehouse( 'raindrops_col_width' );
		}
		?>
		<div id="<?php echo esc_attr( $page_container_id ); ?>" class="<?php echo esc_attr( $page_container_class ); ?> hfeed">
			<div id="bd" class="clearfix">
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
			</div><!-- #bd -->
		</div><!-- #doc -->
		<?php
	}
}
ET_Builder_Theme_Compat_Raindrops::init();