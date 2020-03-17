/**
 * Created by Kirsti on 15/03/2020.
 */

public with sharing class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        // Perform isAccessible() checking first, then
        return [SELECT Id, Name, Packed__c, Price__c, Quantity__c
                FROM Camping_Item__c];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem) {
        // Perform isUpdateable() checking first, then
        upsert campingItem;
        return campingItem;
    }

}