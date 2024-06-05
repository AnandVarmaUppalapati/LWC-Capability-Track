import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/Account.Name';
import RATING from '@salesforce/schema/Account.Rating';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
const OPTIONS = [{label : 'Hot' , value : 'Hot'},
                 {label : 'Warm' , value : 'Warm'},
                 {label : 'cold' , value : 'cold'}];


export default class CreateAccount extends LightningElement {

    options = OPTIONS;
    accountValue;
    ratingvalue;

    handleChange(event) {
        this.accountValue = event.target.value;
    }
    dataChange(event){
        this.ratingvalue = event.target.value;
    }

    createAccounthandleChange(){
        const fields = {};
        fields[NAME.fieldApiName] = this.accountValue;
        fields[RATING.fieldApiName] = this.ratingvalue;
        const recordInput = {apiName : ACCOUNT_OBJECT.objectApiName, fields};
        createRecord(recordInput)
            this.accountValue = '';
            this.ratingvalue = '';
        
    }

}