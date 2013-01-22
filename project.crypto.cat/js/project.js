$(window).load(function() {

$('#map').scrollLeft(0);

$('#map').animate({
	
}, 20000);

mapbox.auto('map', 'kaepora.map-mf3ru1ma', function(map) {
	map.zoom(2, false);
	map.center({ lat: 25, lon: 140 });
	map.ease.location({ lat: 25, lon: 10 }).zoom(2, false).optimal(0.01);
});


});