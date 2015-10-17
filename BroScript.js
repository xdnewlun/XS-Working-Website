

$(document).ready(function() {
	$("#brownies").text("Brownies: 0");

var brownies = 0;
var clickAmount = 1;
var maxUpgrade = false;
var grandma = 0;
var bakeSale = 0;
var girlScout = 0;
var factory = 0;
var tries = 0;
var code = "XS Projects";
var username = "XS Projects";

	$("#upgrade-max").text("False");
	$("#factory").text("0");
	$("#girl-scout").text("0");
	$("#bake-sale").text("0");
	$("#grandma").text("0");
	$("#winner").text("To Win you must have 10000000000000000 brownies! You need 10000000000000000 more to win!");
	$("#upgraded").text("Per-Click: 1");
	$("#boughtMax").text("TO USE UPGRADE MAX YOU NEED TO BUY IT");
	$("#cookie-clicker").click(function(){
		brownies += clickAmount;
		$("#brownies").text("Brownies: " + brownies);

		if(brownies >= 10000000000000000){
			$("#winner").text("YOU WIN YOU HAVE " + (brownies - 10000000000000000) + " MORE THAN THE GOAL OF 10000000000000000!");
		}else{
			$("#winner").text("To Win you must have 10000000000000000 brownies! You need " + (10000000000000000 - brownies) + " more to win!");
		}
	});

	$("#reset").click(function() {
		grandma = 0;
		bakeSale = 0;
		girlScout = 0;
		factory = 0;
		brownies = 0;
		clickAmount = 1;
		maxUpgrade = false;
		$("#winner").text("To Win you must have 10000000000000000 brownies! You need 10000000000000000 more to win!");
		$("#brownies").text("Brownies: 0");
		$("#upgraded").text("Per-Click: 1");
		$("#boughtMax").text("TO USE UPGRADE MAX YOU NEED TO BUY IT");
		$("#factory").text("0");
		$("#girl-scout").text("0");
		$("#bake-sale").text("0");
		$("#grandma").text("0");
	})

	$("#unlockMax").click(function(){
		if(brownies >= 100000){
			brownies -= 100000;
			maxUpgrade = true;
			$("#brownies").text("Brownies: " + brownies);
			$("#boughtMax").text("MAX UPGRADE HAS BEEN BOUGHT");
			$("#upgrade-max").text("True");
		}else{
			alert("You can not afford to buy the Max Upgrade! You need " + (100000 - brownies) + " more brownies");
		}
	});

	$("#upgrade1").click(function(){
		if(brownies >= 10){
			clickAmount += 1;
			brownies -= 10;
			grandma += 1;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#brownies").text("Brownies: " + brownies);
			$("#grandma").text(grandma);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 10. You need " + (10 - brownies) + " more brownies!");
		}
	});

	$("#upgrade10").click(function() {
		if(brownies >= 100){
			clickAmount += 10;
			brownies -= 100;
			bakeSale += 1;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#brownies").text("Brownies: " + brownies);
			$("#bake-sale").text(bakeSale);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 100. You need " + (100 - brownies) + " more brownies!");
		}
	});

	$("#upgrade100").click(function(){
		if(brownies >= 1000){
			girlScout += 1;
			clickAmount += 100;
			brownies -= 1000;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#girl-scout").text(girlScout);
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 1000. You need " + (1000 - brownies) + " more brownies!");
		}
	});

	$("#upgrade1000").click(function() {
		if(brownies >= 10000){
			factory += 1;
			clickAmount += 1000;
			brownies -= 10000;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#brownies").text("Brownies: " + brownies);
			$("#factory").text(factory);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 10000. You need " + (10000 - brownies) + " more brownies!");
		}
	});



	$("#upgradeMax").click(function() {
		if(maxUpgrade === true){
			if(brownies >= 10){
				var max = Math.floor(brownies / 10);
				clickAmount += max;
				brownies -= (max * 10);
				$("#brownies").text("Brownies: " + brownies);
				$("#upgraded").text("Per-Click: " + clickAmount);
			}else{
				alert("Sorry you do not have enough brownies. You need a atleast 10. You need " + (10 - brownies) + " more brownies!");
			}
		}else{
			alert("You need to unlock Upgrade Max first. You need " + (100000 - brownies) + " more brownies to unlock!");
		}	
	});

	$("#brownieSet").click(function(){
		var uName = prompt("Enter Admin UserName");
		if(uName === username){
			var uPassword = prompt("Enter Admin Password");
			if(uPassword === code){
				tries = 0;
				var act = prompt("What do you need to do?");
				var actLow = act.toLowerCase();
				if(actLow === "set brownies"){
					var brownieSetter = prompt("How many brownies do you need?");
					brownies = brownieSetter;
					$("#brownies").text("Brownies: " + brownies);	
					tries = 0;
				}else if(actLow === "set grandma"){
					var grandmaSetter = prompt("How many grandmas do you want?");
					grandma = grandmaSetter;
					clickAmount += (grandma);
					$("#upgraded").text("Per-Click: " + clickAmount);
					$("#brownies").text("Brownies: " + brownies);
					$("#grandma").text(grandma);
				}
			}else{
				alert("Password Incorrect!");
				tries ++;
				alert("You have " + (5 - tries) + " tries remaning before your brownies are deleted!");
				if(tries >= 5){
				grandma = 0;
				bakeSale = 0;
				girlScout = 0;
				factory = 0;
				brownies = 0;
				clickAmount = 1;
				maxUpgrade = false;
				$("#winner").text("To Win you must have 10000000000000000 brownies! You need 10000000000000000 more to win!");
				$("#brownies").text("Brownies: 0");
				$("#upgraded").text("Per-Click: 1");
				$("#boughtMax").text("TO USE UPGRADE MAX YOU NEED TO BUY IT");
				$("#factory").text("0");
				$("#girl-scout").text("0");
				$("#bake-sale").text("0");
				$("#grandma").text("0");
				alert("All Atempts Failed, All info deleted!");
				}
			}
		}else{
			alert("Username Incorrect");
			tries ++;
			alert("You have " + (5 - tries) + " tries remaning before your brownies are deleted!");
			if(tries >= 5){
				grandma = 0;
				bakeSale = 0;
				girlScout = 0;
				factory = 0;
				brownies = 0;
				clickAmount = 1;
				maxUpgrade = false;
				$("#winner").text("To Win you must have 10000000000000000 brownies! You need 10000000000000000 more to win!");
				$("#brownies").text("Brownies: 0");
				$("#upgraded").text("Per-Click: 1");
				$("#boughtMax").text("TO USE UPGRADE MAX YOU NEED TO BUY IT");
				$("#factory").text("0");
				$("#girl-scout").text("0");
				$("#bake-sale").text("0");
				$("#grandma").text("0");
				alert("All Atempts Failed, All info deleted!");
			}
		}
	});
});

