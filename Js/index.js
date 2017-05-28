
if(localStorage.sesion == "true"){
	$('#login').addClass('hidden-xl-down');
	$('#h3Usuario').removeClass('hidden-xl-down');
	$('#salir').removeClass('hidden-xl-down');
}
$('#login').click(() =>{
	$('#login').addClass('hidden-xl-down');
	$('#formulario').removeClass('hidden-xl-down')
})
$('#formulario').submit((ev)=>{
	ev.preventDefault()

	var usuario = $('#usuario').val()
	var contraseña = $('#contraseña').val()
	
	if(usuario == "" | contraseña == ""){
		alert("Debes llenar ambos campos")
	}
	else if (usuario == "usuario" && contraseña == "1234") {
		$('#superOferta').modal()
		$('#formulario').addClass('hidden-xl-down');
		$('#h3Usuario').removeClass('hidden-xl-down');
		$('#salir').removeClass('hidden-xl-down');
		localStorage.sesion = true;
	}
	else{
		alert("Datos incorrectos");
	}
})
$('#salir').click(()=>{
	$('#login').removeClass('hidden-xl-down');
	$('#h3Usuario').addClass('hidden-xl-down');
	$('#salir').addClass('hidden-xl-down');
	localStorage.sesion = false;
})
$("#zapatos").click(()=>{
	$("#zapatos").addClass("active");
	$("#remeras").removeClass("active");
	$("#vestidos").removeClass("active");
	$("#todos").removeClass("active");
	filtros("zapatos");
})
$("#vestidos").click(()=>{
	$("#vestidos").addClass("active");
	$("#remeras").removeClass("active");
	$("#zapatos").removeClass("active");
	$("#todos").removeClass("active");
	filtros("vestido");
})
$("#remeras").click(()=>{
	$("#remeras").addClass("active");
	$("#zapatos").removeClass("active");
	$("#vestidos").removeClass("active");
	$("#todos").removeClass("active");
	filtros("remera");
})
$("#todos").click(()=>{
	$("#todos").addClass("active");
	$("#remeras").removeClass("active");
	$("#vestidos").removeClass("active");
	$("#zapatos").removeClass("active");
	$(".remera").removeClass("none");
	$(".vestido").removeClass("none");
	$(".zapatos").removeClass("none");
})
var carta = $(".carta").find("div");
function filtros(arg){

	for (i of carta){
		if ($(i).hasClass(arg) == false) {
			$(i).addClass("none");
		}
		else{
			$(i).removeClass("none");
		}
	}
}