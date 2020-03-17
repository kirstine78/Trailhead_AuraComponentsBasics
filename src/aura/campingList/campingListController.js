/**
 * Created by Kirsti on 15/03/2020.
 */

({
    // Load camping items from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        /*$A.enqueueAction(action) adds the server call that we’ve just configured to the Aura component framework request queue.
        It, along with other pending server requests, will be sent to the server in the next request cycle.*/
        $A.enqueueAction(action);
    },
    handleAddItem: function(component, event, helper) {
        console.log('in handleAddItem');
        // to implement
        // The handleAdditem method saves the record to the database and adds the record to the items value provider
        var newItem = event.getParam("item");
        var action = component.get("c.saveItem");
        action.setParams({"campingItem": newItem});
        action.setCallback(this, function(response){
            console.log('in callback');
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                console.log('state is Success');
                var items = component.get("v.items");
                items.push(newItem);
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);
    },

//    clickCreateItem: function(component, event, helper) {
//        var validCampingItem = component.find('campingitemform').reduce(function (validSoFar, inputCmp) {
//            // Displays error messages for invalid fields
//            inputCmp.showHelpMessageIfInvalid();
//            return validSoFar && inputCmp.get('v.validity').valid;
//        }, true);
//        // If we pass error checking, do some real work
//        if(validCampingItem){
//            // Create the new expense
//            helper.createItem(component);
//
//            // resets the newItem value provider with a blank sObjectType of Camping_Item__c
//            component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
//                                        'Name': '',
//                                        'Quantity__c': 0,
//                                        'Price__c': 0,
//                                        'Packed__c': false });
//        }
//    }

})