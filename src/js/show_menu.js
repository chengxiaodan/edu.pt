export default ()=>{
	const $open = $('#openMenu'),
		$menu = $('#menu');
	$open.on('click',()=>{
		$menu.show(100);
	});
	$menu.find('.close').on('click',()=>{
		$menu.hide(100);
	});
}
