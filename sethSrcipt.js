$(document).ready(function(){

	$("#swag").click(function(){
		var swagy = confirm("WARNING YOU MIGHT BE COME TO SWAGGY. ARE YOU SURE YOU WANT TO CONTINUE?");
		if(swagy === true){
			alert("Your swagginess is OVER 9000");
		}else{
			alert("Skrub!");
		}
	});

});
