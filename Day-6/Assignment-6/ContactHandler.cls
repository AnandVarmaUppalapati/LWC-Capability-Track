public with sharing class ContactHandler {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id accountId) {
        return [
            SELECT Name, Title, Phone, Email, Owner.Name
            FROM Contact
            WHERE AccountId = :accountId
        ];
    }
    

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id,Name FROM Contact];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactListBasedOnSearch(String searchTerm) {

        searchTerm = '%' + searchTerm + '%';
        return [SELECT Id, Name, Email, Phone FROM Contact WHERE Name LIKE :searchTerm];
    }
}