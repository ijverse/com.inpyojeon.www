function moveTo(title){
	var target = $('#'+title).offset().top-72;
	window.scrollTo({top:target, behavior:'smooth'});
}