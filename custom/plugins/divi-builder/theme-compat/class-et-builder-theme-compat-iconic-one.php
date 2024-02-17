<?php
/**
 * ET_Builder_Theme_Compat_Iconic_One class file.
 *
 * @class   ET_Builder_Theme_Compat_Iconic_One
 * @package Divi Builder
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Theme Compatibility for Iconic One theme.
 *
 * @see https://wordpress.org/themes/iconic-one/
 *
 * @since ??
 */
class ET_Builder_Theme_Compat_Iconic_One {
	/**
	 * Unique instance of class.
	 *
	 * @since ??
	 *
	 * @var ET_Builder_Theme_Compat_Iconic_One
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
		?>
		<div id="page" class="site">
			<div id="main" class="wrapper">
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
		</div><!-- #page -->
		<?php
	}
}

ET_Builder_Theme_Compat_Iconic_One::init();
