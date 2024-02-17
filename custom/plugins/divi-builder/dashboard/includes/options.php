<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

//Array of all sections. All sections will be added into sidebar navigation except for the 'header' section.
$all_sections = array(
	'updates'     => array(
		'title'    => esc_html__( 'Updates', 'et_builder_plugin' ),
		'contents' => array(
			'main' => esc_html__( 'Main', 'bloom' ),
		),
	),
	'api'         => array(
		'title'    => esc_html__( 'API Settings', 'et_builder_plugin' ),
		'contents' => array(
			'main' => esc_html__( 'Main', 'bloom' ),
		),
	),
	'performance' => array(
		'title'    => esc_html__( 'Performance', 'et_builder_plugin' ),
		'contents' => array(
			'main' => esc_html__( 'Main', 'bloom' ),
		),
	),
);

/**
 * Array of all options
 * General format for options:
 * '<option_name>' => array(
 *							'type' => ...,
 *							'name' => ...,
 *							'default' => ...,
 *							'validation_type' => ...,
 *							etc
 *						)
 * <option_name> - just an identifier to add the option into $assigned_options array
 * Array of parameters may contain diffrent attributes depending on option type.
 * 'type' is the required attribute for all options. All other attributes depends on the option type.
 * 'validation_type' and 'name' are required attribute for the option which should be saved into DataBase.
 *
 */

$dashboard_options_all = array(
	'updates'                                           => array(
		'section_start' => array(
			'type'     => 'section_start',
			'title'    => esc_html__( 'Enable Updates', 'et_builder' ),
			'subtitle' => sprintf( esc_html__( 'Keeping your plugins updated is important. To %1$s for the Divi Builder, you must first authenticate your Elegant Themes account by inputting your account Username and API Key below. Your username is the same username you use when logging into your Elegant Themes account, and your API Key can be found by logging into your account and navigating to the Account > API Key page.', 'et_builder' ),
				sprintf( '<a href="%1$s" target="_blank">%2$s</a>',
					esc_attr( 'http://www.elegantthemes.com/plugins/divi-builder/documentation/update/' ),
					esc_html__( 'enable updates', 'et_builder' )
				)
			),
			'no_escape' => true,
		),
		'option_1'      => array(
			'type'            => 'input_field',
			'subtype'         => 'text',
			'placeholder'     => '',
			'title'           => esc_html__( 'Username:', 'et_builder_plugin' ),
			'name'            => 'updates_username',
			'class'           => 'updates_option updates_option_username',
			'validation_type' => 'simple_text',
			'hide_contents'   => true,
			'hint_text'       => esc_html__( 'Please enter your ElegantThemes.com username', 'et_builder_plugin' ),
		),
		'option_2'      => array(
			'type'            => 'input_field',
			'subtype'         => 'text',
			'placeholder'     => '',
			'title'           => esc_html__( 'API Key:', 'et_builder_plugin' ),
			'name'            => 'updates_api_key',
			'class'           => 'updates_option updates_option_api_key',
			'validation_type' => 'simple_text',
			'hide_contents'   => true,
			'hint_text'       => sprintf(
				esc_html__( 'Enter your %1$s here.', 'Monarch' ),
				sprintf( '<a href="%1$s" target="_blank">%2$s</a>',
					esc_attr( 'https://www.elegantthemes.com/members-area/api-key.php' ),
					esc_html__( 'Elegant Themes API Key', 'Monarch' )
				)
			),
		),
		'update_button' => array(
			'type'      => 'button',
			'title'     => esc_html__( 'Save', 'et_builder_plugin' ),
			'link'      => '#',
			'authorize' => false,
			'class'     => 'et_dashboard_updates_save',
		),
	),
	'google_api'                                        => array(
		'section_start'              => array(
			'type'  => 'section_start',
			'title' => esc_html__( 'Google API', 'et_builder' ),
		),
		'option'                     => array(
			'type'            => 'input_field',
			'subtype'         => 'text',
			'placeholder'     => '',
			'title'           => esc_html__( 'Google API Key:', 'et_builder_plugin' ),
			'name'            => 'google_api_key',
			'class'           => 'google_api_key',
			'validation_type' => 'simple_text',
			'hide_contents'   => true,
			'hint_text'       => et_get_safe_localization( sprintf( __( 'The Maps module uses the Google Maps API and requires a valid Google API Key to function. Before using the map module, please make sure you have added your API key here. Learn more about how to create your Google API Key <a target="_blank" href="%1$s">here</a>.', 'et_builder_plugin' ), 'http://www.elegantthemes.com/gallery/divi/documentation/map/#gmaps-api-key' ) ),
		),
		'option_maps_script_enqueue' => array(
			'type'            => 'checkbox',
			'default'         => 'on',
			'value'           => 'on',
			'title'           => esc_html__( 'Enqueue Google Maps Script', 'et_builder_plugin' ),
			'name'            => 'enqueue_google_maps_script',
			'class'           => 'enqueue_google_maps_script',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( sprintf( __( 'Disable this option to remove the Google Maps API script from your Divi Builder Pages. This may improve compatibility with third party plugins that also enqueue this script. Please Note: Modules that rely on the Google Maps API in order to function properly, such as the Maps and Fullwidth Maps Modules, will still be available but will not function while this option is disabled (unless you manually add Google Maps API script).', 'et_builder_plugin' ), 'http://www.elegantthemes.com/gallery/divi/documentation/map/#gmaps-api-key' ) ),
		),
		'option_use_google_fonts'    => array(
			'type'            => 'checkbox',
			'default'         => 'on',
			'value'           => 'on',
			'title'           => esc_html__( 'Use Google Fonts', 'et_builder_plugin' ),
			'name'            => 'use_google_fonts',
			'class'           => 'use_google_fonts',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'Disable this option to remove the Google Fonts from your Divi Builder Pages.', 'et_builder_plugin' ) ),
		),
		'update_button'              => array(
			'type'      => 'button',
			'title'     => esc_html__( 'Save', 'et_builder_plugin' ),
			'link'      => '#',
			'authorize' => false,
			'class'     => 'et_google_api_save',
		),
	),
	'dynamic_module_framework'                          => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => 'on',
			'title'           => esc_html__( 'Dynamic Module Framework', 'et_builder_plugin' ),
			'name'            => 'dynamic_module_framework',
			'class'           => 'dynamic_module_framework',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'Enable this to allow the Divi Framework to only load the modules that are used on the page, and process the logic for the features in use.', 'et_builder_plugin' ) ),
		),
	),
	'dynamic_css'                                       => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => 'on',
			'title'           => esc_html__( 'Dynamic CSS', 'et_builder_plugin' ),
			'name'            => 'dynamic_css',
			'class'           => 'dynamic_css',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'Dynamic CSS greatly reduces CSS file size by dynamically generating only the assets necessary for the features and modules you use. This eliminates all file bloat and greatly improves load times.', 'et_builder_plugin' ) ),
		),
	),
	'critical_css'                                       => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => 'on',
			'title'           => esc_html__( 'Critical CSS', 'et_builder_plugin' ),
			'name'            => 'critical_css',
			'class'           => 'critical_css',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'Critical CSS greatly improves website load times and Google PageSpeed scores by deferring non-critical styles and eliminating render-blocking CSS requests.', 'et_builder_plugin' ) ),
		),
	),
	'critical_threshold_height'                                       => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'select',
			'options'         => array(
				'high'   => __( 'High', 'et_builder' ),
				'medium' => __( 'Medium', 'et_builder' ),
				'low'    => __( 'Low', 'et_builder' ),
			),
			'default'         => 'medium',
			'title'           => esc_html__( 'Critical Threshold Height', 'et_builder_plugin' ),
			'name'            => 'critical_threshold_height',
			'class'           => 'critical_threshold_height',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'When Critical CSS is enabled, Divi determines an "above the fold threshold" and defers all styles for elements below the fold. However, this threshold is just a estimate and can vary on different devices. Increasing threshold height will deffer fewer styles, resulting in slightly slower load times but less of a chance for Cumulative Layout Shifts to occur. If you are experiencing CLS issues you can increase the threshold height.', 'et_builder_plugin' ) ),
		),
	),
	'inline_stylesheet'                                 => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => 'on',
			'title'           => esc_html__( 'Load Dynamic Stylesheet In-line', 'et_builder_plugin' ),
			'name'            => 'inline_stylesheet',
			'class'           => 'inline_stylesheet',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'This option dequeues the Divi Builder style.css file and prints the contents in-line. This removes a render blocking request and improves the PageSpeed scores of individual pages. However, it also prevents the style.css file from being cached. Since the stylesheet is small, it\'s recommended to keep this option enabled.', 'et_builder_plugin' ) ),
		),
	),
	'dynamic_js_libraries'                              => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => 'on',
			'title'           => esc_html__( 'Dynamic JavaScript Libraries', 'et_builder_plugin' ),
			'name'            => 'dynamic_js_libraries',
			'class'           => 'dynamic_js_libraries',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'Only load external JavaScript libraries when they are needed by a specific Divi modules on the page. This removes unused JavaScript from the main scripts bundle and improves load times.', 'et_builder_plugin' ) ),
		),
	),
	'dynamic_icons'                                     => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => et_dynamic_icons_default_value(),
			'title'           => esc_html__( 'Dynamic Icons', 'et_builder_plugin' ),
			'name'            => 'dynamic_icons',
			'class'           => 'dynamic_icons',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'The Divi icon font is broken up into various subsets. These subsets are loaded only when needed based on the modules and features used on each page. If you need access to the entire icon font on all pages (for example, if you are using our icon font in your child theme), then you can disable this option and load the entire icon font library on all pages.', 'et_builder_plugin' ) ),
		),
	),
	'google_fonts_inline'                            => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => 'off',
			'title'           => esc_html__( 'Improve Google Fonts Loading', 'et_builder_plugin' ),
			'name'            => 'google_fonts_inline',
			'class'           => 'google_fonts_inline',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'Enable caching of Google Fonts and load them inline. This reduces render-blocking requests and improves page load times.', 'et_builder_plugin' ) ),
		),
	),
	'limit_google_fonts_support_for_legacy_browsers' => array(
		'section_start' => array(
			'type' => 'section_start',
		),
		'option'        => array(
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => __( 'On', 'et_builder' ),
				'off' => __( 'Off', 'et_builder' ),
			),
			'default'         => 'off',
			'title'           => esc_html__( 'Limit Google Fonts Support For Legacy Browsers', 'et_builder_plugin' ),
			'name'            => 'limit_google_fonts_support_for_legacy_browsers',
			'class'           => 'limit_google_fonts_support_for_legacy_browsers',
			'validation_type' => 'simple_text',
			'hint_text'       => et_get_safe_localization( __( 'Enabling this option will lower the size of Google Fonts and improve load times, however it will limit Google Fonts support in some very old browsers. You can turn this off to increase support for older browsers at a slight cost to performance.', 'et_builder_plugin' ) ),
		),
	),
	'end_of_section'                                    => array(
		'type' => 'section_end',
	),
	'end_of_sub_section'                                => array(
		'type'        => 'section_end',
		'sub_section' => 'true',
	),
);

/**
 * Array of options assigned to sections. Format of option key is following:
 * 	<section>_<sub_section>_options
 * where:
 *	<section> = $all_sections -> $key
 *	<sub_section> = $all_sections -> $value['contents'] -> $key
 *
 * Note: name of this array shouldn't be changed. $assigned_options variable is being used in ET_Dashboard class as options container.
 */
$assigned_options = array(
	'updates_main_options' => array(
		$dashboard_options_all['updates']['section_start'],
		$dashboard_options_all['updates']['option_1'],
		$dashboard_options_all['updates']['option_2'],
		$dashboard_options_all['updates']['update_button'],
		$dashboard_options_all['end_of_section'],
	),
	'api_main_options' => array(
		$dashboard_options_all['google_api']['section_start'],
		$dashboard_options_all['google_api']['option'],
		$dashboard_options_all['google_api']['option_maps_script_enqueue'],
		$dashboard_options_all['google_api']['option_use_google_fonts'],
		$dashboard_options_all['google_api']['update_button'],
		$dashboard_options_all['end_of_section'],
	),
	'performance_main_options' => array(
		$dashboard_options_all['dynamic_module_framework']['section_start'],
		$dashboard_options_all['dynamic_module_framework']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['dynamic_css']['section_start'],
		$dashboard_options_all['dynamic_css']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['critical_css']['section_start'],
		$dashboard_options_all['critical_css']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['critical_threshold_height']['section_start'],
		$dashboard_options_all['critical_threshold_height']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['inline_stylesheet']['section_start'],
		$dashboard_options_all['inline_stylesheet']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['dynamic_js_libraries']['section_start'],
		$dashboard_options_all['dynamic_js_libraries']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['dynamic_icons']['section_start'],
		$dashboard_options_all['dynamic_icons']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['google_fonts_inline']['section_start'],
		$dashboard_options_all['google_fonts_inline']['option'],
		$dashboard_options_all['end_of_section'],
		$dashboard_options_all['limit_google_fonts_support_for_legacy_browsers']['section_start'],
		$dashboard_options_all['limit_google_fonts_support_for_legacy_browsers']['option'],
		$dashboard_options_all['end_of_section'],
	),
);
