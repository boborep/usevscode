({
    onInit: function(component, event) {
        // Create the action
        var action = component.get("c.getAll");
        action.setParams({
          "boatId": component.get("v.boat.Id")
        });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
          var state = response.getState();
          if (state === "SUCCESS") {
            component.set("v.boatReviews", response.getReturnValue());
          } else {
            console.log("Failed with state: " + state);
          }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})
