public with sharing class AccountHandler {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id,Name,Type,Rating,Industry,AnnualRevenue FROM Account];
    }
}