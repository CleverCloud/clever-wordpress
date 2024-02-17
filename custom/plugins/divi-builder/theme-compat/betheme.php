<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Betheme theme
 * @see http://themes.muffingroup.com/betheme
 * @since 1.3.10
 */
class ET_Builder_Theme_Compat_Betheme {
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

		add_action( 'et_pb_shop_before_print_shop', array( $this, 'add_option_betheme_modification' ) );
	}

	/**
	 *
	 * @since 1.3.10
	 * @return void
	 */
	function add_option_betheme_modification() {
		add_filter( 'option_betheme', array( $this, 'option_betheme_modification' ) );
	}

	/**
	 *
	 * @since 1.3.10
	 * @return void
	 */
	function option_betheme_modification( $options ) {

		if ( is_array( $options ) ) {
			$options['shop-images'] = 'plugin';
		}

		return $options;
	}
}
ET_Builder_Theme_Compat_Betheme::init();