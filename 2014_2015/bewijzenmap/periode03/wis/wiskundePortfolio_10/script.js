jQuery(document).ready(function(){
	$("#isInteger_form").submit(function(e){
		e.preventDefault();
		var input = $("#isInteger_in").val();
		var result = isInteger(input);
		$("#isInteger_out").html(""+result);	
	});

	$("#isNatural_form").submit(function(e){
		e.preventDefault();
		var input = $("#isNatural_in").val();
		var result = isNatural(input);
		$("#isNatural_out").html(""+result);	
	});	
	
	$("input").focus(function(){
		$(this).select();
	}); 
	
})