import { LightningElement,wire,api } from 'lwc';
import getContacts from '@salesforce/apex/ContactHandler.getContacts';

export default class DisplayContactNames extends LightningElement {

    @api recordId;

    @wire(getContacts)
    contact;

}