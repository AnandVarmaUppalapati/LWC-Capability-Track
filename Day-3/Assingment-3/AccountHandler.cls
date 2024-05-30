public with sharing class AccountHandler {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name FROM Account];
    }
}