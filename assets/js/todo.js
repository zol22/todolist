//Mark as Done Check
$("ul").on("click",".fa-check",function(){
	$(this).toggleClass("complete");

});


//Click in X to delete
$("ul").on("click", ".trash", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	}); // remove the parent li, not just span
	event.stopPropagation();
});

// Click on span to make it editable
$("ul").on("click","li",function(){
	$(".edit").attr('contenteditable','true');

});

// Everytime you press "enter", make span uneditable.
$("ul").on("keypress",".edit",function(event){


	if(event.which === 13){
		$(this).attr('contenteditable','false');
	}

	if ($(this).text().length === 40 && event.keyCode != 8) {	
    	event.preventDefault();
	}
});

//Input todo list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){ 

		var text = $(this).val(); //Getting new todo text from input
		$(this).val(""); //Clear input after typing

		//create a new li and add to ul
		$("ul").append("<li><i class='fa fa-trash trash'></i>"+"<span class='edit'>"+text+"</span>"+"<i class='fa fa-check done'></i>"+"</li>");

	}
});
