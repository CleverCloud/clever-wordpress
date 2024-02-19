<?php 
/*
	Plugin Name: GA Google Analytics
	Plugin URI: https://perishablepress.com/google-analytics-plugin/
	Description: Adds your Google Analytics Tracking Code to your WordPress site.
	Tags: analytics, ga, google, google analytics, tracking, statistics, stats
	Author: Jeff Starr
	Author URI: https://plugin-planet.com/
	Donate link: https://monzillamedia.com/donate.html
	Contributors: specialk
	Requires at least: 4.6
	Tested up to: 6.4
	Stable tag: 20231101
	Version:    20231101
	Requires PHP: 5.6.20
	Text Domain: ga-google-analytics
	Domain Path: /languages
	License: GPL v2 or later
*/

/*
	This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 
	2 of the License, or (at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	with this program. If not, visit: https://www.gnu.org/licenses/
	
	Copyright 2023 Monzilla Media. All rights reserved.
*/

if (!defined('ABSPATH')) die();

if (!class_exists('GA_Google_Analytics')) {
	
	class GA_Google_Analytics {
		
		function __construct() {
			
			$this->constants();
			$this->includes();
			
			register_activation_hook(__FILE__, array($this, 'dismiss_notice_activate'));
			
			add_action('admin_menu',            array($this, 'add_menu'));
			add_filter('admin_init',            array($this, 'add_settings'));
			add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));
			add_filter('plugin_action_links',   array($this, 'action_links'), 10, 2);
			add_filter('plugin_row_meta',       array($this, 'plugin_links'), 10, 2);
			add_filter('admin_footer_text',     array($this, 'footer_text'),  10, 1);
			add_action('init',                  array($this, 'load_i18n'));
			add_action('admin_init',            array($this, 'dismiss_notice_save'));
			add_action('admin_init',            array($this, 'dismiss_notice_version'));
			add_action('admin_init',            array($this, 'check_version'));
			add_action('admin_init',            array($this, 'reset_options'));
			add_action('admin_notices',         array($this, 'admin_notices'));
			
		} 
		
		function constants() {
			
			if (!defined('GAP_VERSION')) define('GAP_VERSION', '20231101');
			if (!defined('GAP_REQUIRE')) define('GAP_REQUIRE', '4.6');
			if (!defined('GAP_AUTHOR'))  define('GAP_AUTHOR',  'Jeff Starr');
			if (!defined('GAP_NAME'))    define('GAP_NAME',    __('GA Google Analytics', 'ga-google-analytics'));
			if (!defined('GAP_HOME'))    define('GAP_HOME',    'https://perishablepress.com/ga-google-analytics/');
			if (!defined('GAP_PATH'))    define('GAP_PATH',    'options-general.php?page=ga-google-analytics');
			if (!defined('GAP_URL'))     define('GAP_URL',     plugin_dir_url(__FILE__));
			if (!defined('GAP_DIR'))     define('GAP_DIR',     plugin_dir_path(__FILE__));
			if (!defined('GAP_FILE'))    define('GAP_FILE',    plugin_basename(__FILE__));
			if (!defined('GAP_SLUG'))    define('GAP_SLUG',    basename(dirname(__FILE__)));
			
		}
		
		function includes() {
			
			require_once GAP_DIR .'inc/plugin-core.php';
			
		}
		
		function add_menu() {
			
			$title_page = esc_html__('GA Google Analytics', 'ga-google-analytics');
			$title_menu = esc_html__('Google Analytics',    'ga-google-analytics');
			
			add_options_page($title_page, $title_menu, 'manage_options', 'ga-google-analytics', array($this, 'display_settings'));
			
		}
		
		function add_settings() {
			
			register_setting('gap_plugin_options', 'gap_options', array($this, 'validate_settings'));
			
		}
		
		function admin_scripts($hook) {
			
			if ($hook === 'settings_page_ga-google-analytics') {
				
				wp_enqueue_style('ga-google-analytics', GAP_URL .'css/settings.css', array(), GAP_VERSION);
				
				wp_enqueue_script('ga-google-analytics', GAP_URL .'js/settings.js', array('jquery'), GAP_VERSION);
				
				$this->localize_scripts();
				
			}
			
		}
		
		function localize_scripts() {
			
			$script = array(
				'confirm_message' => esc_html__('Are you sure you want to restore all default options?', 'ga-google-analytics')
			);
			
			wp_localize_script('ga-google-analytics', 'ga_google_analytics', $script);
			
		}
		
		function action_links($links, $file) {
			
			if ($file === GAP_FILE && current_user_can('manage_options')) {
				
				$settings = '<a href="'. admin_url(GAP_PATH) .'">'. esc_html__('Settings', 'ga-google-analytics') .'</a>';
				
				array_unshift($links, $settings);
				
			}
			
			if ($file === GAP_FILE) {
				
				$pro_href   = 'https://plugin-planet.com/ga-google-analytics-pro/';
				$pro_title  = esc_attr__('Get GA Pro!', 'ga-google-analytics');
				$pro_text   = esc_html__('Go&nbsp;Pro', 'ga-google-analytics');
				$pro_style  = 'font-weight:bold;';
				
				$pro = '<a target="_blank" rel="noopener noreferrer" href="'. $pro_href .'" title="'. $pro_title .'" style="'. $pro_style .'">'. $pro_text .'</a>';
				
				array_unshift($links, $pro);
				
			}
			
			return $links;
			
		}
		
		function plugin_links($links, $file) {
			
			if ($file === GAP_FILE) {
				
				$home_href  = 'https://perishablepress.com/google-analytics-plugin/';
				$home_title = esc_attr__('Plugin Homepage', 'ga-google-analytics');
				$home_text  = esc_html__('Homepage', 'ga-google-analytics');
				
				$links[]    = '<a target="_blank" rel="noopener noreferrer" href="'. $home_href .'" title="'. $home_title .'">'. $home_text .'</a>';
				
				$rate_href  = 'https://wordpress.org/support/plugin/'. GAP_SLUG .'/reviews/?rate=5#new-post';
				$rate_title = esc_attr__('Click here to rate and review this plugin on WordPress.org', 'ga-google-analytics');
				$rate_text  = esc_html__('Rate this plugin', 'ga-google-analytics') .'&nbsp;&raquo;';
				
				$links[]    = '<a target="_blank" rel="noopener noreferrer" href="'. $rate_href .'" title="'. $rate_title .'">'. $rate_text .'</a>';
				
			}
			
			return $links;
			
		}
		
		function footer_text($text) {
			
			$screen_id = $this->screen_id();
			
			$ids = array('settings_page_ga-google-analytics');
			
			if ($screen_id && apply_filters('ga_google_analytics_admin_footer_text', in_array($screen_id, $ids))) {
				
				$text = __('Like this plugin? Give it a', 'ga-google-analytics');
				
				$text .= ' <a target="_blank" rel="noopener noreferrer" href="https://wordpress.org/support/plugin/ga-google-analytics/reviews/?rate=5#new-post">';
				
				$text .= __('★★★★★ rating&nbsp;&raquo;', 'ga-google-analytics') .'</a>';
				
			}
			
			return $text;
			
		}
		
		function screen_id() {
			
			if (!function_exists('get_current_screen')) require_once ABSPATH .'/wp-admin/includes/screen.php';
			
			$screen = get_current_screen();
			
			if ($screen && property_exists($screen, 'id')) return $screen->id;
			
			return false;
			
		}
		
		function check_version() {
			
			$wp_version = get_bloginfo('version');
			
			if (isset($_GET['activate']) && $_GET['activate'] == 'true') {
				
				if (version_compare($wp_version, GAP_REQUIRE, '<')) {
					
					if (is_plugin_active(GAP_FILE)) {
						
						deactivate_plugins(GAP_FILE);
						
						$msg  = '<strong>'. GAP_NAME .'</strong> '. esc_html__('requires WordPress ', 'ga-google-analytics') . GAP_REQUIRE;
						$msg .= esc_html__(' or higher, and has been deactivated! ', 'ga-google-analytics');
						$msg .= esc_html__('Please return to the', 'ga-google-analytics') .' <a href="'. admin_url() .'">';
						$msg .= esc_html__('WP Admin Area', 'ga-google-analytics') .'</a> '. esc_html__('to upgrade WordPress and try again.', 'ga-google-analytics');
						
						wp_die($msg);
						
					}
					
				}
				
			}
			
		}
		
		function load_i18n() {
			
			$domain = 'ga-google-analytics';
			
			$locale = apply_filters('gap_locale', get_locale(), $domain);
			
			$dir    = trailingslashit(WP_LANG_DIR);
			
			$file   = $domain .'-'. $locale .'.mo';
			
			$path_1 = $dir . $file;
			
			$path_2 = $dir . $domain .'/'. $file;
			
			$path_3 = $dir .'plugins/'. $file;
			
			$path_4 = $dir .'plugins/'. $domain .'/'. $file;
			
			$paths = array($path_1, $path_2, $path_3, $path_4);
			
			foreach ($paths as $path) {
				
				if ($loaded = load_textdomain($domain, $path)) {
					
					return $loaded;
					
				} else {
					
					return load_plugin_textdomain($domain, false, dirname(GAP_FILE) .'/languages/');
					
				}
				
			}
			
		}
		
		function admin_notices() {
			
			$screen_id = $this->screen_id();
			
			if ($screen_id === 'settings_page_ga-google-analytics') {
				
				if (isset($_GET['gap-reset-options'])) {
					
					if ($_GET['gap-reset-options'] === 'true') : ?>
						
						<div class="notice notice-success is-dismissible"><p><strong><?php esc_html_e('Default options restored.', 'ga-google-analytics'); ?></strong></p></div>
						
					<?php else : ?>
						
						<div class="notice notice-info is-dismissible"><p><strong><?php esc_html_e('No changes made to options.', 'ga-google-analytics'); ?></strong></p></div>
						
					<?php endif;
					
				}
				
				if (!$this->check_date_expired() && !$this->dismiss_notice_check()) {
					
					?>
					
					<div class="notice notice-success">
						<p>
							<strong><?php esc_html_e('Fall Sale!', 'ga-google-analytics'); ?></strong> 
							<?php esc_html_e('Save 25% on our', 'ga-google-analytics'); ?> 
							<a target="_blank" rel="noopener noreferrer" href="https://plugin-planet.com/"><?php esc_html_e('Pro WordPress plugins', 'ga-google-analytics'); ?></a> 
							<?php esc_html_e('and', 'ga-google-analytics'); ?> 
							<a target="_blank" rel="noopener noreferrer" href="https://books.perishablepress.com/"><?php esc_html_e('books', 'ga-google-analytics'); ?></a>. 
							<?php esc_html_e('Apply code', 'ga-google-analytics'); ?> <code>SEASONS</code> <?php esc_html_e('at checkout. Sale ends 12/30/23.', 'ga-google-analytics'); ?> 
							<?php echo $this->dismiss_notice_link(); ?>
						</p>
					</div>
					
					<?php
					
				}
				
			}
			
		}
		
		//
		
		function dismiss_notice_activate() {
			
			delete_option('ga-google-analytics-dismiss-notice');
			
		}
		
		function dismiss_notice_version() {
			
			$version_current = GAP_VERSION;
			
			$version_previous = get_option('ga-google-analytics-dismiss-notice');
			
			$version_previous = ($version_previous) ? $version_previous : $version_current;
			
			if (version_compare($version_current, $version_previous, '>')) {
				
				delete_option('ga-google-analytics-dismiss-notice');
				
			}
			
		}
		
		function dismiss_notice_check() {
			
			$check = get_option('ga-google-analytics-dismiss-notice');
			
			return ($check) ? true : false;
			
		}
		
		function dismiss_notice_save() {
			
			if (isset($_GET['dismiss-notice-verify']) && wp_verify_nonce($_GET['dismiss-notice-verify'], 'ga_google_analytics_dismiss_notice')) {
				
				if (!current_user_can('manage_options')) exit;
				
				$result = update_option('ga-google-analytics-dismiss-notice', GAP_VERSION, false);
				
				$result = $result ? 'true' : 'false';
				
				$location = admin_url('options-general.php?page=ga-google-analytics&dismiss-notice='. $result);
				
				wp_redirect($location);
				
				exit;
				
			}
			
		}
		
		function dismiss_notice_link() {
			
			$nonce = wp_create_nonce('ga_google_analytics_dismiss_notice');
			
			$href  = add_query_arg(array('dismiss-notice-verify' => $nonce), admin_url('options-general.php?page=ga-google-analytics'));
			
			$label = esc_html__('Dismiss', 'ga-google-analytics');
			
			echo '<a class="gap-dismiss-notice" href="'. esc_url($href) .'">'. esc_html($label) .'</a>';
			
		}
		
		function check_date_expired() {
			
			$expires = apply_filters('ga_google_analytics_check_date_expired', '2023-12-30');
			
			return (new DateTime() > new DateTime($expires)) ? true : false;
			
		}
		
		//
		
		function reset_options() {
			
			if (isset($_GET['gap-reset-options']) && wp_verify_nonce($_GET['gap-reset-options'], 'gap_reset_options')) {
				
				if (!current_user_can('manage_options')) exit;
				
				$update = update_option('gap_options', $this->default_options());
				
				$result = $update ? 'true' : 'false';
				
				$location = add_query_arg(array('gap-reset-options' => $result), admin_url(GAP_PATH));
				
				wp_redirect(esc_url_raw($location));
				
				exit;
				
			}
			
		}
		
		function __clone() {
			
			_doing_it_wrong(__FUNCTION__, esc_html__('Cheatin&rsquo; huh?', 'ga-google-analytics'), GAP_VERSION);
			
		}
		
		function __wakeup() {
			
			_doing_it_wrong(__FUNCTION__, esc_html__('Cheatin&rsquo; huh?', 'ga-google-analytics'), GAP_VERSION);
			
		}
		
		function default_options() {
			
			$options = array(
				
				'gap_id'          => '',
				'gap_location'    => 'header',
				'gap_enable'      => 2,
				'gap_display_ads' => 0,
				'link_attr'       => 0,
				'gap_anonymize'   => 0,
				'gap_force_ssl'   => 0,
				'admin_area'      => 0,
				'disable_admin'   => 0,
				'gap_custom_loc'  => 0,
				'tracker_object'  => '',
				'gap_custom_code' => '',
				'gap_custom'      => '',
				//
				'gap_universal'   => 1,
				'version_alert'   => 0,
				'default_options' => 0
				
			);
			
			return apply_filters('gap_default_options', $options);
			
		}
		
		function validate_settings($input) {
			
			$input['gap_id'] = wp_filter_nohtml_kses($input['gap_id']);
			
			if (isset($input['gap_id']) && preg_match("/^GTM-/i", $input['gap_id'])) {
				
				$input['gap_id'] = '';
				
				$message  = esc_html__('Error: your tracking code begins with', 'ga-google-analytics') .' <code>GTM-</code> ';
				$message .= esc_html__('(for Google Tag Manager), which is not supported. Please try again with a supported tracking code.', 'ga-google-analytics');
				
				add_settings_error('gap_id', 'invalid-tracking-code', $message, 'error');
				
			}
			
			if (!isset($input['gap_location'])) $input['gap_location'] = null;
			if (!array_key_exists($input['gap_location'], $this->options_locations())) $input['gap_location'] = null;
			
			if (!isset($input['gap_enable'])) $input['gap_enable'] = null;
			if (!array_key_exists($input['gap_enable'], $this->options_libraries())) $input['gap_enable'] = null;
			
			if (!isset($input['gap_display_ads'])) $input['gap_display_ads'] = null;
			$input['gap_display_ads'] = ($input['gap_display_ads'] == 1 ? 1 : 0);
			
			if (!isset($input['link_attr'])) $input['link_attr'] = null;
			$input['link_attr'] = ($input['link_attr'] == 1 ? 1 : 0);
			
			if (!isset($input['gap_anonymize'])) $input['gap_anonymize'] = null;
			$input['gap_anonymize'] = ($input['gap_anonymize'] == 1 ? 1 : 0);
			
			if (!isset($input['gap_force_ssl'])) $input['gap_force_ssl'] = null;
			$input['gap_force_ssl'] = ($input['gap_force_ssl'] == 1 ? 1 : 0);
			
			if (!isset($input['admin_area'])) $input['admin_area'] = null;
			$input['admin_area'] = ($input['admin_area'] == 1 ? 1 : 0);
			
			if (!isset($input['disable_admin'])) $input['disable_admin'] = null;
			$input['disable_admin'] = ($input['disable_admin'] == 1 ? 1 : 0);
			
			if (!isset($input['gap_custom_loc'])) $input['gap_custom_loc'] = null;
			$input['gap_custom_loc'] = ($input['gap_custom_loc'] == 1 ? 1 : 0);
			
			if (isset($input['tracker_object'])) $input['tracker_object'] = wp_strip_all_tags(trim($input['tracker_object']));
			
			if (isset($input['gap_custom_code'])) $input['gap_custom_code'] = wp_strip_all_tags(trim($input['gap_custom_code']));
			
			if (isset($input['gap_custom'])) $input['gap_custom'] = stripslashes($input['gap_custom']);
			
			return $input;
			
		}
		
		function options_locations() {
			
			$label_header  = esc_html__('Include tracking code in page head', 'ga-google-analytics') .' <span class="gap-note">'. esc_html__('(via', 'ga-google-analytics');
			$label_header .= ' <span class="gap-code">wp_head</span>'. esc_html__(')', 'ga-google-analytics') .'</span>';
			
			$label_footer  = esc_html__('Include tracking code in page footer', 'ga-google-analytics') .' <span class="gap-note">'. esc_html__('(via', 'ga-google-analytics');
			$label_footer .= ' <span class="gap-code">wp_footer</span>'. esc_html__(')', 'ga-google-analytics') .'</span>';
			
			return array(
				
				'header' => array(
					'value' => 'header',
					'label' => $label_header
				),
				'footer' => array(
					'value' => 'footer',
					'label' => $label_footer
				)
			);
			
		}
		
		function options_libraries() {
			
			$url1 = 'https://developers.google.com/analytics/devguides/collection/analyticsjs/';
			$url2 = 'https://developers.google.com/analytics/devguides/collection/gtagjs/';
			$url3 = 'https://developers.google.com/analytics/devguides/collection/gajs/';
			
			$link1 = '<a target="_blank" rel="noopener noreferrer" href="'. $url1 .'">'. esc_html__('Universal Analytics', 'ga-google-analytics') .'</a> ';
			$link2 = '<a target="_blank" rel="noopener noreferrer" href="'. $url2 .'">'. esc_html__('Google Tag', 'ga-google-analytics') .'</a> ';
			$link3 = '<a target="_blank" rel="noopener noreferrer" href="'. $url3 .'">'. esc_html__('Legacy', 'ga-google-analytics') .'</a> ';
			
			$urlUA = 'https://wordpress.org/support/topic/note-about-google-changes/';
			
			$linkUA = ' <a target="_blank" rel="noopener noreferrer" href="'. $urlUA .'">'. esc_html__('learn more', 'ga-google-analytics') .'</a>';
			
			// do not change numeric keys or values (order only)
			return array(
				
				2 => array(
					'value' => 2,
					'label' => $link2 .' <span class="gap-note"> / <span class="gap-code">gtag.js</span> '. esc_html__('(default)', 'ga-google-analytics') .'</span>',
				), 
				1 => array(
					'value' => 1,
					'label' => $link1 .' <span class="gap-note"> / <span class="gap-code">analytics.js</span> '. esc_html__('(deprecated,', 'ga-google-analytics') . $linkUA . esc_html__(')', 'ga-google-analytics') .'</span>',
				),
				3 => array(
					'value' => 3,
					'label' => $link3 .' <span class="gap-note"> / <span class="gap-code">ga.js</span> '. esc_html__('(deprecated)', 'ga-google-analytics') .'</span>',
				)
			);
			
		}
		
		function display_settings() {
			
			$gap_options = get_option('gap_options', $this->default_options());
			
			require_once GAP_DIR .'inc/settings-display.php';
			
		}
		
		function select_menu($items, $menu) {
			
			$options = get_option('gap_options', $this->default_options());
			
			$universal = isset($options['gap_universal']) ? $options['gap_universal'] : 1;
			
			$tracking = isset($options['gap_enable']) ? $options['gap_enable'] : 1;
			
			$checked = '';
			
			$output = '';
			
			$class = '';
			
			foreach ($items as $item) {
				
				$key = isset($options[$menu]) ? $options[$menu] : '';
				
				$value = isset($item['value']) ? $item['value'] : '';
				
				if ($menu === 'gap_enable') {
					
					if ($tracking == 0) $key = 1;
					
					if (!$universal && $tracking == 1) $key = 3;
					
					$class = ' gap-select-method';
					
				}
				
				$checked = ($value == $key) ? ' checked="checked"' : '';
				
				$output .= '<div class="gap-radio-inputs'. esc_attr($class) .'">';
				$output .= '<input type="radio" name="gap_options['. esc_attr($menu) .']" value="'. esc_attr($item['value']) .'"'. $checked .'> ';
				$output .= '<span>'. $item['label'] .'</span>'; //
				$output .= '</div>';
				
			}
			
			return $output;
			
		}
		
		function callback_reset() {
			
			$nonce = wp_create_nonce('gap_reset_options');
			
			$href  = add_query_arg(array('gap-reset-options' => $nonce), admin_url(GAP_PATH));
			
			$label = esc_html__('Restore default plugin options', 'ga-google-analytics');
			
			return '<a class="gap-reset-options" href="'. esc_url($href) .'">'. esc_html($label) .'</a>';
			
		}
		
	}
	
	$GLOBALS['GA_Google_Analytics'] = $GA_Google_Analytics = new GA_Google_Analytics(); 
	
	ga_google_analytics_init($GA_Google_Analytics);
	
}
