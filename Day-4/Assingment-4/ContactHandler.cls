public with sharing class ContactHandler {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id accountId) {
        return [
            SELECT Name, Title, Phone, Email, Owner.Name
            FROM Contact
            WHERE AccountId = :accountId
        ];
    }
    
}