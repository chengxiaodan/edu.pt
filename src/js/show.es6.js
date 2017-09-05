import menu from './show_menu.js';
import zq from './zq.es6.js';
import footer from './footer.es6.js';
import case1 from './case.es6.js';
const $zqmenu = $('#zqmenu');
$(document).ready(()=>{
	case1.init();
	$('#pagepiling').pagepiling({
		onLeave:(index, nextIndex)=>{
			new WOW().init();
			if(index !== nextIndex){
				case1.lisScreen()
			}
		},
		afterLoad:(anchorLink,index)=>{
			if(index == 3){ // 智趣
				zq.init();
			}else if(index > 3 && index < 9){
				$zqmenu.show();
				if(index > 5){
					$zqmenu.find('a').eq(0).removeClass('on');
					$zqmenu.find('a').eq(1).addClass('on');
				}else {
					$zqmenu.find('a').eq(1).removeClass('on');
					$zqmenu.find('a').eq(0).addClass('on');
				}
			}else{
				$zqmenu.hide()
			} 			
		}   
	});
	new WOW().init();
	menu(); 
	zq.zq(); 
	footer();
	$zqmenu.on('click','a',function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		$.fn.pagepiling.moveTo($(this).data('page'));
	});
});
