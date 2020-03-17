/**
 * Created by Kirsti on 16/03/2020.
 */

({
    createExpense: function(component, newExpense) {
        var createEvent = component.getEvent("createExpense");
        createEvent.setParams({ "expense": newExpense });
        createEvent.fire();
    },


});