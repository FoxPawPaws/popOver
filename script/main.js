$(document).ready(function(){

	/*Function for pop over fade in*/
	if(localStorage["closeWindow"] != 1){
		setTimeout( function(){
			$("#popOver").fadeIn(500);
		},3000);
	}

	/*click event for close button*/
	$( "#buttonClose" ).click(function(){
		localStorage["closeWindow"] = "1";
		$("#popOver").css("display","none")
	});

	/*parallax effect for wood chip and chisel*/
	$(window).scroll(function(){
		$("#chisel").css("margin-top",  $(this).scrollTop()*-0.4 + "px");
		$("#wood").css("margin-top", $(this).scrollTop()*0.4 + "px");
	}).scroll();
	
});