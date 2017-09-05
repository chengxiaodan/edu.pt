export default ()=>{
	const $footer_mask = $('#footer_mask'),
		$footer_list = $('#footer_list');
	$footer_list.children('li').hover(function(){
		const type = $(this).data('type');
		if(type == 3){
			$footer_mask.animate({opacity:0});
		}else if(type == 1){
			$(this).children('div').show();
		}
	},function(){
		const type = $(this).data('type');
		if(type == 3){
			$footer_mask.animate({opacity:0.4});
		}else if(type == 1){
			$(this).children('div').hide();
		}
	});
}
