<?php
/**
 * Handles the dynamic assets list logic for Divi theme.
 *
 * @package Divi
 */

/**
 * Gets a list of global asset files.
 *
 * @param array $global_list List of globally needed assets.
 *
 * @since ??
 *
 * @return array
 */
function et_divi_get_global_assets_list( $global_list ) {
	$post_id                = get_the_ID();
	$post_data              = get_post( $post_id );
	$post_content           = isset( $post_data ) ? $post_data->post_content : '';
	$assets_list            = array();
	$assets_prefix          = get_template_directory() . '/css/dynamic-assets';
	$js_assets_prefix       = get_template_directory() . '/js/src/dynamic-assets';
	$shared_assets_prefix   = get_template_directory() . '/includes/builder/feature/dynamic-assets/assets';
	$is_page_builder_used   = et_pb_is_pagebuilder_used( $post_id );
	$side_nav               = get_post_meta( $post_id, '_et_pb_side_nav', true );
	$has_tb_header          = false;
	$has_tb_body            = false;
	$has_tb_footer          = false;
	$layouts                = et_theme_builder_get_template_layouts();
	$is_blank_page_tpl      = is_page_template( 'page-template-blank.php' );
	$vertical_nav           = et_get_option( 'vertical_nav', false );
	$header_style           = et_get_option( 'header_style', 'left' );
	$color_scheme           = et_get_option( 'color_schemes', 'none' );
	$page_custom_gutter     = get_post_meta( $post_id, '_et_pb_gutter_width', true );
	$customizer_gutter      = et_get_option( 'gutter_width', '3' );
	$gutter_width           = ! empty( $page_custom_gutter ) ? $page_custom_gutter : $customizer_gutter;
	$back_to_top            = et_get_option( 'divi_back_to_top', 'false' );
	$et_secondary_nav_items = et_divi_get_top_nav_items();
	$et_top_info_defined    = $et_secondary_nav_items->top_info_defined;
	$et_slide_header        = 'slide' === et_get_option( 'header_style', 'left' ) || 'fullscreen' === et_get_option( 'header_style', 'left' ) ? true : false;
	$button_icon            = et_get_option( 'all_buttons_selected_icon', '5' );
	$page_layout            = get_post_meta( $post_id, '_et_pb_page_layout', true );

	if ( ! empty( $layouts ) ) {
		if ( $layouts[ ET_THEME_BUILDER_HEADER_LAYOUT_POST_TYPE ]['override'] ) {
			$has_tb_header = true;
		}
		if ( $layouts[ ET_THEME_BUILDER_BODY_LAYOUT_POST_TYPE ]['override'] ) {
			$has_tb_body = true;
		}
		if ( $layouts[ ET_THEME_BUILDER_FOOTER_LAYOUT_POST_TYPE ]['override'] ) {
			$has_tb_footer = true;
		}
	}

	if ( '5' !== $button_icon ) {
		$assets_list['et_icons'] = array(
			'css' => "{$shared_assets_prefix}/css/icons_all.css",
		);
	}

	if ( ! $has_tb_header && ! $is_blank_page_tpl ) {
		$assets_list['et_divi_header'] = array(
			'css' => array(
				"{$assets_prefix}/header.css",
				"{$shared_assets_prefix}/css/header_animations.css",
				"{$shared_assets_prefix}/css/header_shared.css",
			),
		);

		if ( et_divi_is_transparent_primary_nav() ) {
			$assets_list['et_divi_transparent_nav'] = array(
				'css' => "{$assets_prefix}/transparent_nav.css",
			);
		}

		if ( $et_top_info_defined && ! $et_slide_header ) {
			$assets_list['et_divi_secondary_nav'] = array(
				'css' => "{$assets_prefix}/secondary_nav.css",
			);
		}

		switch ( $header_style ) {
			case 'slide':
				$assets_list['et_divi_header_slide_in'] = array(
					'css' => "{$assets_prefix}/slide_in_menu.css",
				);
				break;

			case 'fullscreen':
				$assets_list['et_divi_header_fullscreen'] = array(
					'css' => array(
						"{$assets_prefix}/slide_in_menu.css",
						"{$assets_prefix}/fullscreen_header.css",
					),
				);
				break;

			case 'centered':
				$assets_list['et_divi_header_centered'] = array(
					'css' => "{$assets_prefix}/centered_header.css",
				);
				break;

			case 'split':
				$assets_list['et_divi_header_split'] = array(
					'css' => array(
						"{$assets_prefix}/centered_header.css",
						"{$assets_prefix}/split_header.css",
					),
				);
				break;

			default:
				break;
		}

		if ( $vertical_nav ) {
			$assets_list['et_divi_vertical_nav'] = array(
				'css' => "{$assets_prefix}/vertical_nav.css",
			);
		}
	}

	if ( ! $has_tb_footer && ! $is_blank_page_tpl ) {
		$assets_list['et_divi_footer'] = array(
			'css' => "{$assets_prefix}/footer.css",
		);

		$assets_list['et_divi_gutters_footer'] = array(
			'css' => "{$assets_prefix}/gutters{$gutter_width}_footer.css",
		);
	}

	if ( ( ! $has_tb_header || ! $has_tb_footer ) && ! $is_blank_page_tpl ) {
		$assets_list['et_divi_social_icons'] = array(
			'css' => "{$assets_prefix}/social_icons.css",
		);
	}

	if ( et_divi_is_boxed_layout() ) {
		$assets_list['et_divi_boxed_layout'] = array(
			'css' => "{$assets_prefix}/boxed_layout.css",
		);
	}

	if ( is_singular( 'project' ) ) {
		$assets_list['et_divi_project'] = array(
			'css' => "{$assets_prefix}/project.css",
		);
	}

	if ( $is_page_builder_used && is_single() ) {
		$assets_list['et_divi_pagebuilder_posts'] = array(
			'css' => "{$assets_prefix}/pagebuilder_posts.css",
		);
	}

	if
	(	// Sidebar exists on the homepage blog feed.
		( is_home() ) || 
		// Sidebar exists on all non-singular pages, such as categories, except when using a theme builder template.
		( ! is_singular() && ! $has_tb_body ) || 
		// Sidebar exists on posts, except when using a theme builder body template or a page template that doesn't include a sidebar.
		( is_single() && ! $has_tb_body && ! in_array( $page_layout, array( 'et_full_width_page', 'et_no_sidebar' ), true ) ) ||
		// Sidebar is used on pages when the builder is disabled.
	 	( ( is_page() || is_front_page() ) && ! $has_tb_body && ! $is_page_builder_used && ! in_array( $page_layout, array( 'et_full_width_page', 'et_no_sidebar' ), true ) )
	) {
		$assets_list['et_divi_sidebar'] = array(
			'css' => "{$assets_prefix}/sidebar.css",
		);
	}

	if ( ( is_single() || is_page() || is_home() ) && comments_open( $post_id ) ) {
		$assets_list['et_divi_comments'] = array(
			'css' => array(
				"{$assets_prefix}/comments.css",
				"{$shared_assets_prefix}/css/comments_shared.css",
			),
		);
	}

	if ( et_pb_are_widgets_used() ) {
		$assets_list['et_divi_widgets_shared'] = array(
			'css' => "{$shared_assets_prefix}/css/widgets_shared.css",
		);
	}

	if ( is_active_widget( false, false, 'calendar', true ) || et_is_active_block_widget( 'core/calendar' ) ) {
		$assets_list['et_divi_widget_calendar'] = array(
			'css' => "{$assets_prefix}/widget_calendar.css",
		);
	}

	if ( is_active_widget( false, false, 'search', true ) || et_is_active_block_widget( 'core/search' ) ) {
		$assets_list['et_divi_widget_search'] = array(
			'css' => "{$assets_prefix}/widget_search.css",
		);
	}

	if ( is_active_widget( false, false, 'tag_cloud', true ) || et_is_active_block_widget( 'core/tag-cloud' ) ) {
		$assets_list['et_divi_widget_tag_cloud'] = array(
			'css' => "{$assets_prefix}/widget_tag_cloud.css",
		);
	}

	if ( is_active_widget( false, false, 'media_gallery', true ) || et_is_active_block_widget( 'core/gallery' ) ) {
		$assets_list['et_divi_widget_gallery'] = array(
			'css' => array(
				"{$shared_assets_prefix}/css/wp_gallery.css",
				"{$shared_assets_prefix}/css/magnific_popup.css",
			),
		);
	}

	if ( is_active_widget( false, false, 'aboutmewidget', true ) ) {
		$assets_list['et_divi_widget_about'] = array(
			'css' => "{$assets_prefix}/widget_about.css",
		);
	}

	if ( ( is_singular() || is_home() || is_front_page() ) && 'on' === $side_nav && $is_page_builder_used ) {
		$assets_list['et_divi_side_nav'] = array(
			'css' => "{$assets_prefix}/side_nav.css",
		);
	}

	if ( 'on' === $back_to_top ) {
		$assets_list['et_divi_back_to_top'] = array(
			'css' => "{$assets_prefix}/back_to_top.css",
		);
	}

	if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
		$assets_list['et_divi_woocommerce'] = array(
			'css' => array(
				"{$assets_prefix}/woocommerce.css",
				"{$shared_assets_prefix}/css/woocommerce_shared.css",
			),
		);
	}

	if ( ! is_customize_preview() && 'none' !== $color_scheme ) {
		$assets_list['et_color_scheme'] = array(
			'css' => "{$assets_prefix}/color_scheme_{$color_scheme}.css",
		);
	}

	if ( is_rtl() ) {
		$assets_list['et_divi_rtl'] = array(
			'css' => "{$assets_prefix}/rtl.css",
		);
	}

	return array_merge( $global_list, $assets_list );
}

add_filter( 'et_global_assets_list', 'et_divi_get_global_assets_list' );
