({
    onSearch : function(component,boatTypeId) {
        var action = component.get("c.getBoats");
        console.log(boatTypeId);
        action.setParams({
            "boatTypeId":boatTypeId
            });
        action.setCallback(this, function(response){
        var status = response.getState();
        console.log("The status is:"+status);
        console.log(response.getReturnValue());
            if(status === "SUCCESS"){
                if(! $A.util.isEmpty(response.getReturnValue())){
                       component.set("v.boats",response.getReturnValue()); 
                   }
               }
        });
        $A.enqueueAction(action);
    },
    onBoatSelect:function(component, event, helper){
        var boatId=event.getParam("boatId");
        component.set("v.selectedBoatId",boatId);
    }
})