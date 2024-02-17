<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
 * Theme Compatibility for evolve theme
 * @since 1.0
 */
class ET_Builder_Theme_Compat_evolve {
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

		// Fixing v3.4.4 and below issue
		// @todo once this issue is fixed in future version, run version_compare() to limit the scope of this fix
		add_action( 'wp_enqueue_scripts', array( $this, 'add_styling_fix' ), 12 );

		// Fix missing theme page container when TB is enabled.
		add_action( 'et_theme_builder_template_after_header', array( $this, 'theme_builder_after_header' ) );
		add_action( 'et_theme_builder_template_before_footer', array( $this, 'theme_builder_before_footer' ) );
	}

	/**
	 * Add inline styling for fixing design quirks on evolve theme
	 * @return void
	 */
	function add_styling_fix() {
		$style = '.et-boc .widget-content{ margin: 0 0px 35px 0px; padding: 10px 0 21px 0; } \n';
		$style .= '.et-boc input[type="submit"], .et-boc button, .et-boc .button, .et-boc input#submit { color: inherit !important; }';
		wp_add_inline_style( 'et-builder-modules-style', $style );
	}

	/**
	 * Display theme opening container.
	 *
	 * Provide the opening container tag only to ensure TB layout works smoothly.
	 *
	 * @since ??
	 */
	public function theme_builder_after_header() {
		// Remove things related to default header.
		remove_action( 'evolve_header_area', 'evolve_sticky_header_open', 20 );
		remove_action( 'evolve_header_area', 'evolve_header_block_above', 30 );
		remove_action( 'evolve_header_area', 'evolve_header_type', 40 );
		remove_action( 'evolve_header_area', 'evolve_sticky_header_close', 50 );
		remove_action( 'evolve_header_area', 'evolve_header_block_below', 60 );

		do_action( 'evolve_header_area' );
	}

	/**
	 * Display theme closing container.
	 *
	 * Provide the closing container tag only to ensure TB layout works smoothly.
	 *
	 * @since ??
	 */
	public function theme_builder_before_footer() {
		// Remove things related to default footer.
		remove_action( 'evolve_footer_area', 'evolve_footer_container_open', 20 );
		remove_action( 'evolve_footer_area', 'evolve_footer_widgets', 30 );
		remove_action( 'evolve_footer_area', 'evolve_custom_footer', 40 );
		remove_action( 'evolve_footer_area', 'evolve_footer_container_close', 50 );
		remove_action( 'evolve_footer_area', 'evolve_back_to_top', 60 );

		do_action( 'evolve_footer_area' );
	}
}
ET_Builder_Theme_Compat_evolve::init();
