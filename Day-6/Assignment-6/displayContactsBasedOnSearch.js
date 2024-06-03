import { LightningElement,track,wire } from 'lwc';
import getContactListBasedOnSearch from '@salesforce/apex/ContactHandler.getContactListBasedOnSearch';

export default class DisplayContactsBasedOnSearch extends LightningElement {

    @track searchTerm = '';
    @track contacts;
    @track columns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    ];

    @wire(getContactListBasedOnSearch, { searchTerm: '$searchTerm' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            this.contacts = undefined;
        }
    }

    handleSearch(event){
       this.searchTerm = event.target.value;
    }
}