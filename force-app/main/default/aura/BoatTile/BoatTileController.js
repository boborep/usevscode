({
    onBoatClick: function(component, event, helper) {
      //fire BoatSelect event
      var boatId = component.get("v.boat.Id");
      console.log(boatId);
      var highlightEvent = component.getEvent("boatselect");
      highlightEvent.setParams({
        boatId: boatId
      });
      highlightEvent.fire();
  
      //fire BoatSelected event
      var boat = component.get("v.boat");
      console.log("The boat is:(In BoatTileController)" + boat);
      console.log("The boatId is:(In BoatTileController)" + boat.Id);
      var boatSelectedEvent = $A.get("e.c:BoatSelected");
      boatSelectedEvent.setParams({
        boat: boat
      });
      boatSelectedEvent.fire();
  
      //send geolocation to map.cmp through the PlotMapMarker Application event
      var lat = boat.Geolocation__Latitude__s;
      var long = boat.Geolocation__Longitude__s;
      var label = boat.Name;
      var sObjectId;
      var PlotMapMarker = $A.get("e.c:PlotMapMarker");
      PlotMapMarker.setParams({
        lat: lat,
        long: long,
        label: label,
        SObjectId: boat.Id
      });
      PlotMapMarker.fire();
    }
  });