<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme Compatibility for Foxy theme
 * @see https://www.elegantthemes.com/gallery/foxy/
 * @since 2.2.7
 */
class ET_Builder_Theme_Compat_Foxy {
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

		// Fixing quirks on shop module loop
		add_action( 'et_pb_shop_before_print_shop', array( $this, 'deregister_woocommerce_adjustments' ) );
		add_action( 'et_pb_shop_after_print_shop', array( $this, 'reregister_woocommerce_adjustments' ) );

		// Fixing styling quirks
		add_action( 'wp_enqueue_scripts', array( $this, 'add_styling_fix' ), 12 );

		// Modify shop module's advanced options
		add_filter( 'et_pb_shop_advanced_options', array( $this, 'modify_shop_advanced_options' ), 10, 3 );
	}

	/**
	 * Deregister changes made by Foxy theme on WooCommerce commerce component inside shop module
	 * @since 2.2.7
	 * @return void
	 */
	function deregister_woocommerce_adjustments() {
		add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );

		// Foxy overwrites woocommerce_template_loop_price() which causes shop module appearance to
		// be unexpected. Remove initial hook and replace it with compatibility hook which replicate
		// the original woocommerce_template_loop_price() content
		remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
		add_action( 'woocommerce_after_shop_loop_item_title', array( $this, 'default_woocommerce_template_loop_price' ), 10 );
	}

	/**
	 * Re-register changes made by Foxy theme on WooCommerce commerce component after shop module is
	 * done so it doesn't affect WooCommerce component outside shop module
	 * @since 2.2.7
	 * @return void
	 */
	function reregister_woocommerce_adjustments() {
		remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );

		// Deregister compatibility hook and re-register original hook to avoid WooCommerce output
		// outside shop module
		add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
		remove_action( 'woocommerce_after_shop_loop_item_title', array( $this, 'default_woocommerce_template_loop_price' ), 10 );
	}

	/**
	 * Provide default WooCommerce woocommerce_template_loop_price() which is overwritten by Foxy theme
	 * @since 2.2.7
	 * @return void
	 */
	function default_woocommerce_template_loop_price() {
		if ( function_exists( 'wc_get_template') ) {
			wc_get_template( 'loop/price.php' );
		}
	}

	/**
	 * Modify shop module's advanced options configuration
	 * @param array  $options default toggle module option
	 * @param string $slug module slug
	 * @param string $main_css_element main css selector
	 * @return array modified option
	 */
	function modify_shop_advanced_options( $options, $slug, $main_css_element ) {
		// Add important tag to shop module's title CSS
		$options['fonts']['title']['css']['important'] = array( 'size' );

		return $options;
	}

	/**
	 * Add inline styling for fixing design quirks on Foxy theme
	 * @since 2.2.7
	 * @return void
	 */
	function add_styling_fix() {
		global $post;
		$is_fb = et_fb_enabled();

		// Added styling adjustment for shop module
		$has_shop_module = isset( $post->post_content ) && has_shortcode( $post->post_content, 'et_pb_shop' );

		if ( $has_shop_module || $is_fb ) {
			$shop_compat_style = '
				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .woocommerce ul.products li.product {
					margin: 0 3.05% 2.992em 0 !important;
					width: 22.05% !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .woocommerce.columns-1 ul.products li.product {
					width: 100% !important;
					margin-right: 0;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .woocommerce.columns-2 ul.products li.product {
					width: 48% !important;
					margin: 0 2% 2.992em 0 !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .woocommerce.columns-3 ul.products li.product {
					width: 30.75% !important;
					margin-right: 2.5% !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .woocommerce.columns-4 ul.products li.product {
					margin-right: 2.9% !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .woocommerce.columns-5 ul.products li.product {
					width: 16.95% !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .woocommerce-page.columns-6 ul.products li.product,
				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .woocommerce.columns-6 ul.products li.product {
					width: 13.5% !important;
					margin: 0 3.8% 2.992em 0 !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .onsale {
					right: auto !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop .woocommerce ul.products li.product h3 {
					font-size: 1em !important;
					padding: .3em 0 !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_shop  .woocommerce ul.products li.product .star-rating {
					margin: 4px 0 0.7em 0 !important;
				}
			';
			wp_add_inline_style( 'et-builder-modules-style', $shop_compat_style );
		}

		// Added styling adjustment for comments module
		$has_comments_module = isset( $post->post_content ) && has_shortcode( $post->post_content, 'et_pb_comments' );

		if ( $has_comments_module || $is_fb ) {
			$comments_compat_style = '
				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_comments_module .comment-body {
					padding: 40px 40px 90px;
					min-height: 110px;
					margin-bottom: 80px;
					background: white;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_comments_module .comment-reply-link.et_pb_button {
					bottom: -60px;
					top: auto;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_comments_module .testimonial-author {
					padding-left: 40px;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_comments_module .testimonial-author .et-avatar:before {
					box-shadow: none !important;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_comments_module .testimonial-author .et-avatar {
					padding: 5px;
					border-radius: 50%;
					box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
					margin-right: 25px;
					background: white;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_comments_module .testimonial-author .avatar {
					border-radius: 50%;
					display: block;
				}

				' . ET_BUILDER_CSS_LAYOUT_PREFIX . ' .et_pb_comments_module .testimonial-author strong {
					padding: 18px 0 0;
				}

				@media (max-width: 767px) {
					' . ET_BUILDER_CSS_PREFIX . ' #comment-wrap li.comment article {
						padding-right: 40px;
					}
				}
			';
			wp_add_inline_style( 'et-builder-modules-style', $comments_compat_style );
		}
	}
}
ET_Builder_Theme_Compat_Foxy::init();
