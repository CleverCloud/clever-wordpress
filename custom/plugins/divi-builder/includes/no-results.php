<?php 
global $et_no_results_heading_tag;
if ( empty( $et_no_results_heading_tag ) ){
	$et_no_results_heading_tag = 'h1';
}
?>
<div class="entry">
<!--If no results are found-->
	<<?php echo $et_no_results_heading_tag; ?> class="not-found-title"><?php esc_html_e('No Results Found','et_builder_plugin'); ?></<?php echo $et_no_results_heading_tag; ?>>
	<p><?php esc_html_e('The page you requested could not be found. Try refining your search, or use the navigation above to locate the post.','et_builder_plugin'); ?></p>
</div>
<!--End if no results are found-->