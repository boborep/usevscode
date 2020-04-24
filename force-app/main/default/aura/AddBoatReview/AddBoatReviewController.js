({
    doInit: function(component, event, helper) {
        helper.onInit(component, event);
    },
    onSave: function(component, event, helper) {
        component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
        component.find("service").saveRecord(function(saveResult) {
        if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
            // record is saved successfully
            var resultsToast = $A.get("e.force:showToast");
            if (resultsToast) {
                resultsToast.setParams({
                    title: "Saved",
                    message: "Boat Review Created."
                });
                resultsToast.fire();
            } else {
                alert('Boat Review Created.');
            }
        } else if (saveResult.state === "INCOMPLETE") {
            // handle the incomplete state
            console.log("User is offline, device doesn't support drafts.");
        } else if (saveResult.state === "ERROR") {
            // handle the error state
            var errMsg = "";
            console.log(
            "Problem saving record, error: " + JSON.stringify(saveResult.error)
            );
            for (var i = 0; i < saveResult.error.length; i++) {
            errMsg += saveResult.error[i].message + "\n";
            }
            component.set("v.recordError", errMsg);
        } else {
            console.log(
            "Unknown problem, state: " +
                saveResult.state +
                ", error: " +
                JSON.stringify(saveResult.error)
            );
        }
        var boatReviewAddedEvnt=component.getEvent("boatReviewAdded");
        boatReviewAddedEvnt.fire();
        helper.onInit(component, event);
        });
    },
    onRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if (eventParams.changeType === "CHANGED") {
        // get the fields that are changed for this record
        var changedFields = eventParams.changedFields;
        console.log("Fields that are changed: " + JSON.stringify(changedFields));
        // record is changed so refresh the component (or other component logic)
        var resultsToast = $A.get("e.force:showToast");
        if (resultsToast) {
            resultsToast.setParams({
            title: "Saved",
            message: "The record was updated."
            });
            resultsToast.fire();
        }
        else{
            alert('The record was updated.');
        }
        } else if (eventParams.changeType === "LOADED") {
        // record is loaded in the cache
        } else if (eventParams.changeType === "REMOVED") {
        // record is deleted and removed from the cache
        } else if (eventParams.changeType === "ERROR") {
        console.log("Error: " + component.get("v.error"));
        }
    }
})
