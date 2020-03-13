var loader = '<img src="/static/images/loading.gif" class="loader_gif" />';

$(".enlace_grabacion").click(function(e){
	var uniqueid = $(this).attr('attr-uniqueid');
	var system = $(this).attr('attr-system');
	var audiofile = $(this).attr('attr-audiofile');
	var hash = $(this).attr('attr-hash');
	var url = "";
	url = URL_GRABACIONES+"?uid="+uniqueid+"&audio="+audiofile+"&hash="+hash+"&system="+system;
	//alert("Iniciando la descarga, por favor espere. \n(Presione Aceptar para continuar)");
	//alert($(this).html().append("lala"));
	$(this).append("<br>"+loader);
	var grab = $.get(url, function(){
		window.location.href=url;
		$(".loader_gif").hide();
	}).fail(function(){
		alert("No se pudo encontrar la grabacion");
		$(".loader_gif").hide();
	});
});