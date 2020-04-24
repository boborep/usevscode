public with sharing class BoatSearchResults {
     @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        System.debug(boatTypeId);
        if (boatTypeId!=''){
            List<Boat__c> boats=[SELECT Id,Name, BoatType__c, Picture__c,Contact__r.Name 
                FROM Boat__c
                WHERE BoatType__c =: boatTypeId];
                System.debug(boats);
            return boats;
        }else {
            System.debug([SELECT Id,Name, BoatType__c, Picture__c,Contact__r.Name 
                FROM Boat__c]);
            return [SELECT Id,Name, BoatType__c, Picture__c,Contact__r.Name 
                FROM Boat__c];
        }
        
    }
}