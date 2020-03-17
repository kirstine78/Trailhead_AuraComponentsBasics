/**
 * Created by Kirsti on 15/03/2020.
 */

({
    createItem: function(component) {
        var newItem = component.get("v.newItem");

        var action = component.get("c.saveItem");
        action.setParams({
            "campingItem": newItem
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);
    }
});