({
    onBoatSelected: function(component, event, helper) {
            var boat = event.getParam("boat");
            console.log("The boat in BoatDetails is:" + boat);
            component.set("v.id", boat.Id);
            console.log("The boat Id in BoatDetails is:" + boat.Id);
            var service = component.find("service");
            service.reloadRecord();
    },
    onRecordUpdated : function(component, event, helper) {
        var reviewsComp=component.find("ReviewsComp");
        console.log(reviewsComp);
        reviewsComp.refresh();
    },
    onBoatReviewAdded: function(component, event, helper) {
        var boatReviewAdded = event.getParam("BoatReviewAdded");
        component.set("v.selectedTabId", "boatreviewtab");
        var reviewsComp=component.find("ReviewsComp");
        console.log(reviewsComp);
        reviewsComp.refresh();
      }
})
