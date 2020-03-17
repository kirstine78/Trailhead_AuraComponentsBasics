/**
 * Created by Kirsti on 16/03/2020.
 */

({
    addItem : function(component, newCampingItem) {
        var createEvent = component.getEvent("addItem");
        console.log('newCampingItem: ' + newCampingItem);
        createEvent.setParams({ "item": newCampingItem });
        createEvent.fire();
        component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                                   'Name': '',
                                   'Quantity__c': 0,
                                   'Price__c': 0,
                                   'Packed__c': false });
    }
//    createItem: function(component) {
//        var newItem = component.get("v.newItem");
//
//        var action = component.get("c.saveItem");
//        action.setParams({
//            "campingItem": newItem
//        });
//        action.setCallback(this, function(response){
//            var state = response.getState();
//            if (state === "SUCCESS") {
//                var items = component.get("v.items");
//                items.push(response.getReturnValue());
//                component.set("v.items", items);
//            }
//        });
//        $A.enqueueAction(action);
//    }
});