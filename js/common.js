function moveTo(title){
	var target = $('#'+title).offset().top-67;
	window.scrollTo({top:target, behavior:'smooth'});
}