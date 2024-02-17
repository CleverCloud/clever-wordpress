<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Bridge theme
 * @see http://bridgelanding.qodeinteractive.com/
 * @since ??
 */
class ET_Builder_Theme_Compat_Bridge {
	/**
	 * Unique instance of class
	 */
	public static $instance;

	/**
	 * @var ET_Core_Data_Utils
	 */
	protected static $_ = null;

	/**
	 * Constructor
	 */
	private function __construct(){
		if ( null === self::$_ ) {
			self::$_ = ET_Core_Data_Utils::instance();
		}

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

		add_action( 'wp_enqueue_scripts', array( $this, 'fix_conflicting_waypoints' ) );
	}

	/**
	 * Deregister Bridge's waypoint (outdated, v2.0.4) script so Divi Builder's waypoint script
	 * (v4.0.0) will be registered and equeued so builder animation work as expected since v2.0.4
	 * script can't run Divi's waypoint callback properly. Theme compat is only processed on builder
	 * page, builder preview, layout block preview, and administrator code. Bridge's waypoint seems
	 * to be used on Visual Composer-based page only. Since VC and builder will be used on the same
	 * page, this fix theoretically should be okay.
	 *
	 * Bridge theme version: 18.0.9
	 *
	 * @todo Once theme's waypoint is updated to v4.x, limit the scope of this fix to prior theme version
	 *
	 * @since ??
	 */
	function fix_conflicting_waypoints() {
		global $wp_scripts;

		$registered_waypoints = self::$_->array_get( $wp_scripts->registered, 'waypoints', '' );
		$is_bridge_waypoints  = strpos( $registered_waypoints->src, '/wp-content/themes/bridge/' );

		// Deregister waypoints script registered by Bridge theme on builder-related page so Divi's
		// waypoint script can be registered and enqueued
		if ( $is_bridge_waypoints ) {
			wp_deregister_script( 'waypoints' );
		}
	}
}
ET_Builder_Theme_Compat_Bridge::init();
