({
    getQuoteAtion : function(component, event, helper) {
        var age = component.get("v.age");
        var weight = component.get("v.weight");
        var coverage = component.get("v.coverage");
        var action = component.get("c.getQuote");
        action.setParams({
            "age": age,
            "weight": weight,
            "coverageAmt": coverage
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.quote",response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
        
	},
    showSpinner: function(component, event, helper) {
       // make Spinner attribute true for display loading spinner 
        component.set("v.Spinner", true); 
   },
    
 // this function automatic call by aura:doneWaiting event 
    hideSpinner : function(component,event,helper){
     // make Spinner attribute to false for hide loading spinner    
       component.set("v.Spinner", false);
    }
})