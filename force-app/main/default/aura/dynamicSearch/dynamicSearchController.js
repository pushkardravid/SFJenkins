({
    init: function (component, event, helper) {
        var items = [];
        var action = component.get("c.getObjects");
       
        action.setCallback(this, function(data) {
            var objects =data.getReturnValue();
            for (var i = 0; i < objects.length; i++) {
            var item = {
                "label": objects[i],
                "value": objects[i],
            };
            items.push(item);
            }
            component.set("v.options", items);
        });
         
        $A.enqueueAction(action);
    },
    handleChange: function (component, event) {
        var selectedOptionValue = event.getParam("value");
        component.set("v.obj", selectedOptionValue);
        
        var action = component.get("c.getFields");
        action.setParams({
            objectName: selectedOptionValue
        });
        action.setCallback(this, function(data) {
            console.log(data.getReturnValue());
            });
         
        $A.enqueueAction(action);
        
    }
})