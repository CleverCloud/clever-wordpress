<?php
/**
 * ET_Builder_Theme_Compat_Astra class file.
 *
 * @class   ET_Builder_Theme_Compat_Astra
 * @package Divi Builder
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Theme Compatibility for Astra theme.
 *
 * @see https://wordpress.org/themes/astra/
 *
 * @since ??
 */
class ET_Builder_Theme_Compat_Astra {
	/**
	 * Unique instance of class.
	 *
	 * @since ??
	 *
	 * @var ET_Builder_Theme_Compat_Astra
	 */
	public static $instance;

	/**
	 * Constructor.
	 *
	 * @since ??
	 */
	private function __construct() {
		$this->init_hooks();
	}

	/**
	 * Gets the instance of the class.
	 *
	 * @since ??
	 */
	public static function init() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Hook methods to WordPress.
	 *
	 * @since ??
	 */
	public function init_hooks() {
		$theme   = wp_get_theme();
		$version = isset( $theme['Version'] ) ? $theme['Version'] : false;

		// Bail if no theme version found.
		if ( ! $version ) {
			return;
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
		// Method `astra_attr()` generates HTML attributes and already runs escaping process
		// on each of the attribute values.
		// @see {Astra_Attr::astra_attr()}.
		$page_container_attrs = astra_attr(
			'site',
			array(
				'id'    => 'page',
				'class' => 'hfeed site',
			)
		);
		?>
		<div <?php echo et_core_esc_previously( $page_container_attrs ); ?>>
			<div id="content" class="site-content">
				<div class="ast-container">
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
				</div>
			</div><!-- #content -->
		</div><!-- #page -->
		<?php
	}
}

ET_Builder_Theme_Compat_Astra::init();
