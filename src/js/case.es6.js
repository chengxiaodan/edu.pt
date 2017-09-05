const list = $('#cxd-bg-6 .btn a');
export default {
	lisScreen: ()=> {
		$('.bg-mask').hide();
	},
	init: ()=> {
		$('.close-box').click(()=> {
			$('.bg-mask').hide()	
			$.fn.pagepiling.setAllowScrolling(true);
		})
		for(var i = 0; i < list.length; i++) {
				(function(Index) {
					list[Index].addEventListener('click', function(e) {
						$('#anli-box-'+(Index+1)).show()
						$(".cxd-context").scrollTop(4);
						$.fn.pagepiling.setAllowScrolling(false);
					}, false)
				})(i)
		};
		var li = $('#cxd-bg-6 li');
		for(var j = 0; j < li.length; j++) {
				(function(Index) {
					if($(window).width() <=1024) {
						$(li[Index]).click(function (event) {  
					         //取消事件冒泡  
					         event.stopPropagation();  
					         //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。
					         li.find('.item_hover').hide();
					         $(this).find('.item_hover').show();
							 return false;
					     });  
					     //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
						 $(document).click(function(event){
							  var _con = $(li[Index]).find('.item_hover');   // 设置目标区域
							  if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
								_con.hide();          //淡出消失
							  }
						});
					}else {
						$(li[Index]).hover(function(){
							$(this).find('.item_hover').show();
						},function(){
							$(this).find('.item_hover').hide();
						})
					}
				})(j)
		};
//		$(".cxd-context").scroll(function(){
//			const scrollTop = $(this).scrollTop();
//			const scrollHeight = $(this).children('div').eq(0).height();
//			const scrollHeight1 = $(this).height();
//			if(scrollTop + scrollHeight1 >= scrollHeight){
//		　　　　$.fn.pagepiling.setAllowScrolling(true);
//		　　}else if(scrollTop <=0){
//				$.fn.pagepiling.setAllowScrolling(true);
//			}
//	     });
	}
}
