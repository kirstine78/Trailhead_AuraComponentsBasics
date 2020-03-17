<!--
 - Created by Kirsti on 15/03/2020.

 The extends="force:slds" attribute activates SLDS in this app, by including the same Lightning Design System styles
 provided by Lightning Experience and the Salesforce app.
 But note that this harness app is just a wrapper, a shell. The real app is the expenses component, c:expenses
 -->

<aura:application extends="force:slds" description="expensesApp">

    <!-- This component is the real "app" -->
    <c:expenses/>
</aura:application>