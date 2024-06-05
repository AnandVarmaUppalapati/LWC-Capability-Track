import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = ['Account.Name' , 'Account.Industry' , 'Account.Rating']

export default class GetAccountData extends LightningElement {
    @api recordId;
    accountName;
    accountIndustry;
    accountRating;

    account;

    @wire(getRecord , {recordId : '$recordId' , fields : FIELDS})
    wiredAccounts({data,error}){
        if(data){
          this.account = data;
          this.accountName = this.account.fields.Name.value;
          this.accountIndustry = this.account.fields.Industry.value;
          this.accountRating = this.account.fields.Rating.value;
        }
        else if(error){
           this.account = undefined;
        }
    }
   
}