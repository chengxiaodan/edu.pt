const $zq = $('#zq'),
	$title = $zq.find('.title'),
	body_w = $('body').width(),
	$zq_div = $zq.find('.j-hover');
export default {
	zq: () => {
		$zq_div.hover(function() {
			$(this).find('.mask').show();
		}, function() {
			$(this).find('.mask').hide();
		}).on('click', function() {
			if(body_w <= 768) { // 手机
				$zq_div.eq(0).animate({ top: '-50%' });
				$zq_div.eq(1).animate({ top: '100%' }, function() {
					setTimeout(()=>{
						$zq_div.eq(0).css({ top: 0 });
						$zq_div.eq(1).css({ top: '50%' });
						$title.hide();
					},500);
				});
			} else { // pc
				$zq_div.eq(0).animate({ left: '-50%' });
				$zq_div.eq(1).animate({ right: '-50%' }, function() {
					$zq_div.eq(0).animate({ left: 0 });
					$zq_div.eq(1).animate({ right: 0 });
					$title.hide();
				});
			}
			$title.hide();
			$.fn.pagepiling.moveTo($(this).data('page'));
		});
	},
	init: () => {
		$zq_div.eq(1).find('.mask').show();
	}
}