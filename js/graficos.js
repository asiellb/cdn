$(function(){
$("#flot-1ine").length && $.plot($("#flot-1ine"), lineas, 
      {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: false,
                
            },
            points: {
                radius: 3,
                show: true
            },
            grow: {
              active: true,
              steps: 50
            },
            shadowSize: 2
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#f0f0f0",
            borderWidth: 1,
            color: '#000000'
        },
        xaxis:{
        	ticks: [[0,"0' a 2'"],[1,"2' a 4'"],[2,"4' a 6'"],[3,"6' a 8'"],[4,"8' a 10'"],[5,"10' a 12'"],[6,"12' a 14'"],[7,"14' a 16'"],[8,"16'+"],]
        },
        yaxis: {
          ticks: 5
        },
        tooltip: true,
        tooltipOpts: {
          content: "%y.4%",
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
          }
        }
      }
  );
});