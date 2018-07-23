jQuery(document).ready(function($) {
	$('button.btimprimir').on('click', function(event) {
		event.preventDefault();
		$(window)[0].print();
	});
});