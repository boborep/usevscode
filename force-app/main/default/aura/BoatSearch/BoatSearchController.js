({
    onFormSubmit : function(component, event, helper) {
        var data = event.getParam("formData");
        data = JSON.parse(JSON.stringify(data));
        console.log("Get data form BoatSearch:   "+data.boatTypeId);
        // helper.formSubmit(component, data);
        var chldComp = component.find("ResultComp");
        chldComp.search(data.boatTypeId);  //   Hitting aura method
    },
})