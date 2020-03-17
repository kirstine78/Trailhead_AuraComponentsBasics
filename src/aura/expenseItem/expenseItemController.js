/**
 * Created by Kirsti on 15/03/2020.
 */

({
    doInit : function(component, event, helper) {
        var mydate = component.get("v.expense.Date__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
    clickReimbursed: function(component, event, helper) {
        var expense = component.get("v.expense");
         var updateEvent = component.getEvent("updateExpense");  //updateExpense is a custom event
         updateEvent.setParams({ "expense": expense });
         updateEvent.fire();
    }
})