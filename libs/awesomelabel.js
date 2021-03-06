(function($) {
    $.fn.awesomelabel = function(data) {

    	data = data || {};

 		var margin 	=	data.margin 	||	null,
 			width 	=	data.width 		||	null,
 			height 	=	data.height 	||	null,
 			padding	=	data.padding 	||	null,
 			float 	= 	data.float 		||	null,
 			left	=	data.left		||	0,
 			ease	=	data.ease		||	null;

 			if(padding == null) {
 				var left = left;
 			}else {
 				var left = padding;
 			}

		var className = this.attr('class');

    	this.each(function(){

			$(this).wrap('<div class="'+className+'-input-group"></div>').after('<label>'+$(this).data("label")+'</label>');

			$('.'+className+'-input-group').css({
				position: 'relative',
				margin: margin
			});

			$('.'+className+'-input-group').each(function(){
				$(this).children().first().css({
					padding: padding,
					width: width,
					height: height,
					'box-sizing': 'border-box'
				}).focus(function(){
					$(this).next('label').css({
						top: 0,
						'font-size': '0.8em'
					});
				}).focusout(function(){
					$(this).next('label').css({
						top: '50%',
						'font-size': '1em'
					});
					
					var text_val = $(this).val();
					if(text_val == '') {
						$(this).removeClass('has-value');
					}else {
						$(this).addClass('has-value');
					}

					$('.has-value').next('label').css({
						top: 0,
						'font-size': '0.8em'
					});
				});
			});

			var first_children = $('.'+className+'-input-group').children().first();
			
			var child_width = first_children.outerWidth(),
				child_height = first_children.outerHeight();

			$('.'+className+'-input-group').css({
				width: child_width,
				height: child_height,
				float: float
			});

			$('.'+className+'-input-group label').css({
				position: 'absolute',
				top: '50%',
				left: left,
				transform: 'translateY(-50%)',
				width: child_width,
				cursor: 'text',
				'pointer-events': 'none',
				transition: ease + 's ease all'
			}).click(function(){
				$(this).prev().focus();
			});

		});
    };
}(jQuery));