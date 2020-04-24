({
    doInit: function(component, event, helper) {
    	helper.onSearch(component,'');
    },
    doSearch: function(component, event, helper) {
        var formData = event.getParam('arguments');
        if (formData) {
                var boatTypeId = formData.boatTypeId;
                // add your code here
                console.log(boatTypeId);
        }
        helper.onSearch(component,boatTypeId);
    },
    onBoatSelect:function(component, event, helper){
        var boatId=event.getParam("boatId");
        component.set("v.selectedBoatId",boatId);
    }
})