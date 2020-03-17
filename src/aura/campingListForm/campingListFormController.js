/**
 * Created by Kirsti on 16/03/2020.
 */

({
    clickCreateItem: function(component, event, helper) {
        console.log('in clickCreateItem');
        var validCamping = component.find('campingitemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validCamping) {
            console.log('validCamping is true');
            var newItem = component.get("v.newItem");
//            helper.createItem(component, newItem);
            helper.addItem(component, newItem);
        }
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
});