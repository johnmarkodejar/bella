Template.menu.helpers({
 	products: function(){
		return Products.find();
	}
});
Template.menu.events({
 	'click .item-divider':function(event){
		var datac = $(event.currentTarget).attr("data");
		$("."+datac).toggle(100);
	} 
});
