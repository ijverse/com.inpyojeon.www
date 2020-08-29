function moveTo(title){
	var target = $('#'+title).offset().top-67;
	window.scrollTo({top:target, behavior:'smooth'});
}

function openPopup(id){
	$('.dim').css('display', 'block');
	$('.detail#'+id).css('display', 'block');
}

function closePopup(){
	$('.dim').css('display', 'none');
	$('.detail').css('display', 'none');
}

function changeLang(lang){
	$('body').removeClass().addClass('ver_'+lang);
}