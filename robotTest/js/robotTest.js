/**
 * 
 */

function process(){
	var width= parseInt($('#width').val());
	var height= parseInt($('#height').val());
	var x= parseInt($('#x').val());
	var y= parseInt($('#y').val());
	var direction = $('#direction').val().toLowerCase();
	var commands=$('#command').val().split("");
	$.each(commands,function(index,command){
		if (command.toLowerCase() == 'l'){
			switch (direction){
			case "n":
				direction = "w"
			break;
				
			case "w":
				direction = "s"
			break;
				
			case "s":
				direction = "e"
			break;
				
			case "e":
				direction = "n"
			break;
				default:
			}
		}
		
		if (command.toLowerCase() == 'r'){
			switch (direction){
			case "n":
				direction = "e"
			break;
				
			case "e":
				direction = "s"
			break;
				
			case "s":
				direction = "w"
			break;
				
			case "w":
				direction = "n"
			break;
				default:
			}
		}
		
		if(command.toLowerCase() == 'g'){
			switch(direction){
			case "n":
				y = y-1;
				if(y>height || y<0){
					alert("It hits the wall!");
				}
			break;
				
			case "e":
				x = x+1;
				if(x>width || x<0){
					alert("It hits the wall!");
				}
			break;
				
			case "s":
				y = y+1;
				if(y>height || y<0){
					alert("It hits the wall!");
				}
			break;
				
			case "w":
				x = x-1;
				if(x>width || x<0){
					alert("It hits the wall!");
				}
			break;
				default:
			}
		}
	});
	
	$("#report").text("Report: " + x + " " + y + " " + direction.toUpperCase() );
	
}