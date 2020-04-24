({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker : function(component, event, helper) {
		var lat = event.getParam("lat");
		var long = event.getParam("long");
		console.log("onPlotMapMarker.lat: " + lat);
		console.log("onPlotMapMarker.long: " + long);
		component.set("v.location", {'lat' : lat, 'long' : long}); 
    },
})
