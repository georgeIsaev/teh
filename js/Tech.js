$(function() {
	var tech = $('.technology > .row');
	var techItems = [];

	function createTechItem(id, title, img, description){
		tech.append(
			'<div id="'+ id +'" class="tech-item col-lg-6">'+
				'<div class="row">'+
	        '<img src="'+ img +'" alt="" class="col-lg-3 img-responsive">'+
	        '<div class="desc col-lg-9">'+
		        '<h2>'+ title +'</h2>'+
		        '<p class="lead">'+ description +'</p>'+
		      '</div>'+
		    '</div>'+
      '</div>'
    )
	}; 

	jQuery.getJSON('js/dataTech.json', function(data) {

	  for (var i = 0; i < data.length; i++) {
	  	techItems.push(data[i]);
	  }

	  for (var i = 0; i < techItems.length; i++) {
	  	createTechItem(techItems[i].id, techItems[i].title, techItems[i].img, techItems[i].description);
	  }
	});
});