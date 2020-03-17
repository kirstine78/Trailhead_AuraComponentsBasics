/**
 * Created by Kirsti on 15/03/2020.
 */

({
    packItem: function(component, event, helper) {
        var btnClicked = event.getSource();         // the button
        component.set("v.item.Packed__c", true);
        btnClicked.set("v.disabled", true);
    }
})