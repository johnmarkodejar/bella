Template.product.events({
 	'change input[type=range]':function(event){
		var data = $(event.currentTarget).val();
		var holder = $(event.currentTarget).attr("data-holder");
		$("#"+holder).html(data);
	} 
});
