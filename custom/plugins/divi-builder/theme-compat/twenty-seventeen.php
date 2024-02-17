<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Twenty Seventeen theme
 * @see https://wordpress.org/themes/twentyseventeen/
 *
 * @since ??
 */
class ET_Builder_Theme_Compat_Twentyseventeen {
	/**
	 * Unique instance of class.
	 *
	 * @var self
	 */
	public static $instance;

	/**
	 * Constructor.
	 */
	private function __construct(){
		$this->init_hooks();
	}

	/**
	 * Gets the instance of the class.
	 *
	 * @since ??
	 *
	 * @return self
	 */
	public static function init() {
		if ( null === self::$instance ){
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Hook methods to WordPress.
	 *
	 * @since ??
	 */
	function init_hooks() {
		$theme   = wp_get_theme();
		$version = isset( $theme['Version'] ) ? $theme['Version'] : false;

		// Bail if no theme version found
		if ( ! $version ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', array( $this, 'dequeue_scripts' ) );
		add_filter( 'body_class', array( $this, 'remove_body_class_in_theme_builder' ) );
	}

	/**
	 * Dequeue conflicting scripts
	 *
	 * @since ??
	*
	 * @return void
	 */
	function dequeue_scripts() {
		// Dequeue twentyseventeen-global script on layout block preview screen. It expects
		// #secondary to be exist while on layout block preview, header and footer content is
		// cleaned up for previewing purpose. The absence of #seconday triggers broken object element
		// which breaks layout block previewing on block editor. Thus, this script dequeueing
		if ( ET_GB_Block_Layout::is_layout_block_preview() ) {
			wp_dequeue_script( 'twentyseventeen-global' );
		}
	}

	/**
	 * Remove classes that trigger special JS functionality which does not apply
	 * while using the Theme Builder.
	 *
	 * @param string[] $classes
	 *
	 * @return string[]
	 *
	 * @since ??
	 */
	function remove_body_class_in_theme_builder( $classes ) {
		if ( ! et_builder_tb_enabled() ) {
			return $classes;
		}

		$blocklist = array( 'has-sidebar' );
		$filtered  = array();

		foreach ( $classes as $class ) {
			if ( ! in_array( $class, $blocklist, true ) ) {
				$filtered[] = $class;
			}
		}

		return $filtered;
	}
}
ET_Builder_Theme_Compat_Twentyseventeen::init();
