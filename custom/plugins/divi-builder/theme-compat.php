<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Some themes are conflicting with Divi Builder beyond generalized solution
 * Load theme-based compatibility fix until theme author makes it compatible with Divi Builder
 * @since 1.0
 */
class ET_Builder_Theme_Compat_Loader {
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
	 * Hooking methods into WordPress actions and filters
	 * @return void
	 */
	private function init_hooks() {
		// load after $post is initiated. Cannot load before `init` hook
		if ( is_admin() ) {
			$priority = defined( 'DOING_AJAX' ) && DOING_AJAX ? 10 : 1000;

			// Adding script for UX enhancement in dashboard needs earlier hook registration
			add_action( 'wp_loaded', array( $this, 'load_theme_compat' ), $priority );
		} else {
			// Add after $post object has been set up so it can only load theme compat on page
			// which uses Divi Builder only
			add_action( 'wp', array( $this, 'load_theme_compat' ) );

			// Load compatibility scripts
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ), 15 );
		}
	}

	/**
	 * Get theme data
	 * @param string data name
	 * @return string|bool
	 */
	function get_theme( $name ) {
		$theme = wp_get_theme();

		return $theme->get( $name );
	}

	/**
	 * List of themes with available compatibility
	 * @return array
	 */
	function theme_list() {
		return apply_filters( 'et_builder_theme_compat_loader_list', array(
			'Make',
			'Virtue',
			'evolve',
			'raindrops',
			'Weblizar',
			'Zerif Lite',
			'Flatsome',
			'Enfold',
			'Avada',
			'X',
			'SmartMag',
			'Betheme',
			'The7',
			'Salient',
			'Foxy',
			'Bridge',
			'Jupiter',
			'Impreza',
			'Twenty Sixteen',
			'Twenty Seventeen',
			'Twenty Nineteen',
			'Twenty Twenty',
			'JupiterX',
			'Portfolio Press',
			'Astra',
			'Iconic One',
		) );
	}

	/**
	 * Check whether current page should load theme compatibility file or not
	 * @return bool
	 */
	function has_theme_compat() {
		global $wp_query;

		// On non-singular page, get_the_ID() returns post ID of the first post in the main loop
		// Thus explicitly set as null if current page isn't singular to avoid inaccurate check
		$post_id = is_singular() ? get_the_ID() : null;

		// in dashboard, layout block preview,  and preview, always load theme-compat file
		$load_compat_file     = is_admin() || is_et_pb_preview() || has_block( 'divi/layout', $post_id );
		$is_using_pagebuilder = $load_compat_file  ? true : isset( $post_id ) && et_pb_is_pagebuilder_used( $post_id );

		// Check if current page is not singular but one of its main loop's post use builder
		$not_singular_posts_has_builder = ! $is_using_pagebuilder && ! is_singular() && et_dbp_is_query_has_builder( $wp_query );

		// Check if TB overrides header and footer layout.
		$is_tb_override_header  = et_theme_builder_overrides_layout( ET_THEME_BUILDER_HEADER_LAYOUT_POST_TYPE );
		$is_tb_override_footer  = et_theme_builder_overrides_layout( ET_THEME_BUILDER_FOOTER_LAYOUT_POST_TYPE );
		$is_tb_overrides_layout = $is_tb_override_header || $is_tb_override_footer;

		// Check whether: 1) current page uses builder or current page is not singular but  one of
		// its post use builder 2) current theme has compatibility file
		if ( ( $is_using_pagebuilder || $not_singular_posts_has_builder || $is_tb_overrides_layout ) && in_array( $this->get_theme( 'Name' ), $this->theme_list(), true ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Load theme compatibility file, if there's any
	 *
	 * @since ?? Handle theme compatibility file that starts with `class-` prefix.
	 *
	 * @return void
	 */
	function load_theme_compat() {
		if ( $this->has_theme_compat() ) {
			// Get theme-compat file at /theme-compat/ directory
			$theme_compat_path = ET_BUILDER_PLUGIN_DIR . 'theme-compat/' . sanitize_title( $this->get_theme( 'Name' ) ) . '.php';

			// Match theme compatibility file that starts with `class-` prefix.
			if ( ! file_exists( $theme_compat_path ) ) {
				$theme_compat_path = ET_BUILDER_PLUGIN_DIR . 'theme-compat/class-et-builder-theme-compat-' . sanitize_title( $this->get_theme( 'Name' ) ) . '.php';
			}

			require_once apply_filters( 'et_builder_theme_compat_loader_list_path', $theme_compat_path, $this->get_theme( 'Name' ) );
		}
	}

	/**
	 * Load compatibility style & scripts
	 * @return void
	 */
	function enqueue_scripts() {
		// Add Elegant Shortcode Support
		$shortcode_file_path = get_template_directory() . '/epanel/shortcodes/shortcodes.php';

		if ( 'Elegant Themes' === $this->get_theme( 'Author' ) && file_exists( $shortcode_file_path ) ) {
			// Dequeue standard Elegant Shortcode styling
			wp_dequeue_style( 'et-shortcodes-css' );

			// Enqueue modified (more-specific) Elegant Shortcode styling
			wp_enqueue_style(
				'et-builder-compat-elegant-shortcodes',
				ET_BUILDER_PLUGIN_URI . '/theme-compat/css/elegant-shortcodes.css',
				array( 'et-builder-modules-style' ),
				ET_BUILDER_PLUGIN_VERSION
			);
		}
	}
}

ET_Builder_Theme_Compat_Loader::init();
