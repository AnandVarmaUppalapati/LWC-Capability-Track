import { LightningElement,api,wire,track } from 'lwc';
import getRelatedContacts from '@salesforce/apex/ContactHandler.getRelatedContacts';


export default class DisplayContactsOnAccount extends LightningElement {

    @api recordId;

    @track columns = [
        { label: 'Contact Name', fieldName: 'Name' },
        { label: 'Title', fieldName: 'Title' },
        { label: 'Phone', fieldName: 'Phone' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Contact Owner', fieldName: 'OwnerName' }
    ];

    @track contactData;

    @wire(getRelatedContacts,{accountId : '$recordId'})
    wiredContacts({data,error}){
        if(data){
            this.contactData = data.map(con => {
                let contactCopy = Object.assign({}, con);
                contactCopy.OwnerName = con.Owner.Name;
                return contactCopy;
            });

        }else{
            this.contactData = undefined;
            console.error('Error:', error);
        }
    }
}