({
    doInit : function(component, event, helper) {
        var isEnabled = $A.get("event.force:createRecord");

        //check if isEnabled is truthy
        if (isEnabled) {
        //we have a truthy reference from the get() method, that means we're good to go
        component.set("v.showNewButton", true);
        }
        // Create the action
        var action = component.get("c.getboatTypes");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
            component.set("v.boatTypes", response.getReturnValue());
        } else {
            console.log("Failed with state: " + state);
        }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    handleClickNew: function(component, event, helper) {
        var creatEvt = $A.get("e.force:createRecord");
        creatEvt.setParams({ 
            entityApiName: "Boat__c" 
        });
        if (component.get("v.BTselectedValue") != "") {
          console.log("是否获取到了已选中的boottype,若有:"+component.get("v.BTselectedValue"));
          creatEvt.setParams({
            defaultFieldValues: { BoatType__c: component.get("v.BTselectedValue") }
          });          
        }
        creatEvt.fire();
    },
    onFormSubmit: function(component, event, helper) {
        var getId=component.find("typeSelect").get("v.value");
        console.log("Search Button selct Id With:"+getId);
        var SearchEvent=component.getEvent("formsubmit");
        SearchEvent.setParams({
          "formData":{
            "boatTypeId" : getId
          }
        });
        SearchEvent.fire();
    },
})