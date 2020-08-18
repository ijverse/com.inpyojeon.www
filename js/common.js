function moveTo(title){
	var target = $('#'+title).offset().top-69;
	window.scrollTo({top:target, behavior:'smooth'});
}