function formValidator(){

	if($('[name="firstname"]').val().length < 2){
		$('[name= "firstname"]').css('border', '2px solid #CF2F2FFF');
    } else $('[name= "firstname"]').css('border', '2px solid #30EF0FFF');
    
	if($('[name="lastname"]').val().length < 2){
        $('[name= "lastname"]').css('border', '2px solid #CF2F2FFF');
    } else $('[name= "lastname"]').css('border', '2px solid #30EF0FFF');
    
	if($('[name="age"]').val() < 16 || $('[name="age"]').val() > 70){
        $('[name= "age"]').css('border', '2px solid #CF2F2FFF');    
    } else $('[name= "age"]').css('border', '2px solid #30EF0FFF');
    
	if(!isEmail($('[name= "email"]').val())){
        $('[name= "email"]').css('border', '2px solid #CF2F2FFF');    
    } else $('[name= "email"]').css('border', '2px solid #30EF0FFF');
    
	if($('[name="phone"]').val().length < 10 || $('[name="phone"]').val().length > 13){
        $('[name= "phone"]').css('border', '2px solid #CF2F2FFF');    
    } else $('[name= "phone"]').css('border', '2px solid #30EF0FFF');
    
	if($('[name="comment"]').val().length < 3){
		$('[name= "comment"]').css('border', '2px solid #CF2F2FFF');
    } else $('[name= "comment"]').css('border', '2px solid #30EF0FFF');
    
	if($('[name="firstname"]').val().length > 1 && $('[name="lastname"]').val().length > 1 && $('[name="age"]').val() > 15 && $('[name="age"]').val() < 71 && isEmail($('[name="email"]').val()) && $('[name="phone"]').val().length > 9 && $('[name="phone"]').val().length < 14 && $('[name="comment"]').val().length > 2){
		$('#zoo-modal').modal();
    }
}

function textValid() {
	$('.form-control').keyup(function() {
		if($(this).val() == "" || $(this).val().length < 2){
				$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}

function phoneValid() {
	$('.form-control').keyup(function() {
		if($(this).val().length < 11 || $(this).val().length > 11){
				$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}

function isEmail(email) {
	var isValid = false;
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(regex.test(email)) {
		isValid = true;
	}
	return isValid;
}

function emailValid() {
	$('.form-control').keyup(function() {
		var email = $(this).val();
		if(!isEmail(email)){
			$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}


