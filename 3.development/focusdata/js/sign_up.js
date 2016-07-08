$(function(){
	
	$("#sele_user").change(function(){
			//alert("选中的中文为"+$(this).val());
			if($(this).val() == "Personal User"){
				$("#personal").show();
				$("#clinic").hide();
			}else if($(this).val() == "User Clinic"){
				$("#personal").hide();
				$("#clinic").show();
			}
	});

});