function las_llamadas() {
        var fecha = new Date().getTime();
        var url = URL_LLAMADAS+"/"+fecha;
        $.get(url, function(res){
                items = [];
                $.each(res, function(cola, val) {
                        $.each(val.agentes, function(agente, info){
                                var linea = "<tr id='"+cola+""+agente+"'><td>"+info.usuario_apodo+"</td><td>"+agente+"</td><td>"+info.estado+"</td><td>"+info.nocalls+"</td><td>"+info.ultima+" segundos</td></tr>";
                                items.push(linea);
                        });
                        $("#espera").html(val.espera);
                        $("#ns").html(val.nsr+"%");
                        $("#na").html(val.na+"%");
                        $("#tespera").html(val.tespera);
                        $("#tmo").html(val.tmo);
                        $("#abandonadas").html(val.unanswered);
                        $("#total").html(val.total);
                });
                $("#lista_llamadas").html(items.join(''));
                $("#cargalista").remove();
        });
        setTimeout("las_llamadas()", 3000);
}
las_llamadas();
