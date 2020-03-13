function las_llamadas() {
	var fecha = new Date().getTime();
	var url = URL_LLAMADAS+"/"+fecha;
	
	$.get(url, function(res){
		items = [];
		
		$.each(res, function(cola, val) {
			$.each(val.agentes, function(agente, info){
				//alert(agente);
			//	var linea = "<tr id='"+agente+"'><td>"+key+"</td><td>"+val.estado+"</td><td>usuario</td><td>"+val.llamadas+"</td><td>"+val.ultima+"</td></tr>";
			//	alert(linea);
			//	items.push(linea);
				//var linea = "<tr id='"+cola+"_"+agente+"'><td>"+cola+"</td><td>"+agente+"</td><td>"+info.estado+"</td><td>"+info.info.usuario_apodo+"</td><td>"+info.llamadas+"</td><td>"+info.ultima+"</td> segundos</tr>";
				//items.push(linea);
			});
			//alert(val.agentes);
			$("#espera").html(val.espera);
			$("#ns").html(val.nsr+"%");
			$("#tespera").html(val.tespera);
			$("#tmo").html(val.tmo);
		});
	});
	
	setTimeout("las_llamadas()", 3000);
	
}

las_llamadas();
