import case1 from './case.es6.js';
import footer from './footer.es6.js';
$(document).ready(()=>{
	new WOW().init()
	case1.init()
	$('#pagepiling').pagepiling({
		onLeave: function(index, nextIndex, direction){
			new WOW().init()
			var li = $("#cxd-header").find("li")
			if(nextIndex == 1) {
//				$(li[0]).find("a").addClass('active')
//				$(li[1]).find("a").removeClass('active')
				$("#cxd-header").css('background-color','transparent')
			}else{
//				$(li[0]).find("a").removeClass('active')
//				$(li[1]).find("a").addClass('active')
				$("#cxd-header").css('background-color','rgba(20,22,17,0.7)')
			}
			if(index !== nextIndex){
				case1.lisScreen()
			}
		}
	})
	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.pagination',
		paginationClickable: true, //点击到具体那一页
		autoplay: 4000, //自动播放时间
		loop: true, //循环模式
		grabCursor: true, // 鼠标放上去swiper手掌
		onInit: function(mySwiper){ //Swiper2.x的初始化是onFirstInit
	    		swiperAnimateCache(mySwiper) //隐藏动画元素 
	    		swiperAnimate(mySwiper) //初始化完成开始动画
	  	}, 
	  	onSlideChangeEnd: function(mySwiper){ 
	    		swiperAnimate(mySwiper) //每个slide切换结束时也运行当前slide动画
	  	} 
	})
	
	swiperAnimate(mySwiper); //初始化完成开始动画
	var resize = function () {
		$('#cxd-bg-3 ul li').css({
			'height': $('#cxd-bg-3 ul li').width()+'px',
			'line-height': $('#cxd-bg-3 ul li').width()+'px'
		})
		$('.swiper-slide img').width($(window).width())
		$('.swiper-container').width($(window).width())
		$('.swiper-container').height($('.swiper-slide img').height())
	}
	resize();
	$(window).resize(function() {
		resize()
	})
	footer()
	
	$('.left').hover(function() {
		$(this).find('.cxd-mask').show();
		$('.right').find('.cxd-mask').hide();
	}, function() {
		$(this).find('.cxd-mask').hide();
		$('.right').find('.cxd-mask').show();
	})
	function IsPC() {
	    var userAgentInfo = navigator.userAgent;
	    var Agents = ["Android", "iPhone",
	                "SymbianOS", "Windows Phone",
	                "iPad", "iPod"];
	    var flag = true;
	    for (var v = 0; v < Agents.length; v++) {
	        if (userAgentInfo.indexOf(Agents[v]) > 0) {
	            flag = false;
	            break;
	        }
	    }
	    return flag;
	}
	if(IsPC()){
		$("#second-icon").attr('src','img/index/bg_2_down.png');
	}else{
		$("#second-icon").attr('src','img/index/m/2.png');
	}
})
