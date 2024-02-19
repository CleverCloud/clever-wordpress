/* GA Google Analytics */

jQuery(document).ready(function($) {
	
	$('.default-hidden').hide();
	
	$('h2').click(function() { $(this).next().slideToggle(300); });
	
	$('.gap-toggle-all a').click(function(e) { e.preventDefault(); $('.toggle').slideToggle(300); });
	
	$('.gap-toggle').click(function(e) { e.preventDefault(); $('.toggle').slideUp(300); $('#gap-panel-'+ $(this).data('target') +' .toggle').slideDown(300); });
	
	$('.gap-reset-options').click(function() { return confirm(ga_google_analytics.confirm_message); });
	
	$('.gap-select-method:nth-child(2) input, .gap-select-method:nth-child(3) input').click(function() { $('.gap-info-universal').slideDown(300); });
	
	$('.gap-select-method:nth-child(1) input').click(function() { $('.gap-info-universal').slideUp(300); });
	
	$('.toggle-data').css('display', 'none');
	$('.toggle-link').on('click', function() {
		if ($('.toggle-link').text() === 'Show info') {
			$('.toggle-link').text('Hide info');
			$('.toggle-data').css('display', 'inline');
		} else {
			$('.toggle-link').text('Show info');
			$('.toggle-data').css('display', 'none');
		}
	});
	
});