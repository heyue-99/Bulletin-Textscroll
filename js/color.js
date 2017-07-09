(function($){
	$.fn.myLink = function(options){
		var defaults = {
			'color' : '#333',
			'fontSize' : '14px'
		};
		var settings = $.extend({},defaults,options);

		this.each(function(){
			$(this).append(' ' + $(this).attr('href'));
		});

		return this.css({
			'color': settings['color'],
			'fontSize': settings['fontSize']
		});
		
	};
})(jQuery);