import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountHandler.getAccounts'; 
import NAME from '@salesforce/schema/Account.Name';
import TYPE from '@salesforce/schema/Account.Type';
import RATING from '@salesforce/schema/Account.Rating';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue';
const COLUMNS = [
    {label: 'Name', fieldName: 'Name'},

    {type: "button",typeAttributes:{
         label: 'Show',
         name: 'Show',
         title: 'Show',
         value: 'Show',
       }
   }
];

export default class ShowAccountsWithFiveFields extends LightningElement {

   recordId;
   tenAccounts;
   columns = COLUMNS;
   showpopup = false;
   fields = [NAME,TYPE,RATING,INDUSTRY,ANNUALREVENUE];

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.tenAccounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.tenAccounts = undefined;
        }
    }

    popupchange(){
        this.showpopup = false;
    }

    rowactionmethod(event){
        this.recordId = event.detail.row.Id;
        this.showpopup = true;
    }

    closeModal() {
        this.showpopup = false;
    }

}