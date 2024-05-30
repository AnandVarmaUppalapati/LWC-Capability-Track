import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import getAccounts from '@salesforce/apex/AccountHandler.getAccounts';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CreateContact extends NavigationMixin(LightningElement) {

    @track accountvalue;
    @track contactLastName;
    @track contactTitle;
    @track contactEmail;
    @track contactPhone;
    @track accountOptions = [];

    connectedCallback(){
        console.log('line 17');
        getAccounts()
        .then(result => {
           let ar = result.map(acc => ({ label: acc.Name, value: acc.Id }));

            // this.accountOptions = result.map(acc => {
            //    {label : acc.Name, value: acc.Id};
            // });
            console.log('line 24 ' + JSON.stringify(ar));
            this.accountOptions = ar;
            console.log('line 25 ' + JSON.stringify(this.accountOptions));
        })
        
        .catch(error => {
            console.error('Error fetching account names', error);
        });
    }

    accounthandleChange(event) {
        this.accountvalue = event.detail.value;
    }

    handleLastNameChange(event) {
        this.contactLastName = event.target.value;
    }

    handleTitleChange(event) {
        this.contactTitle = event.target.value;
    }

    handleEmailChange(event) {
        this.contactEmail = event.target.value;
    }

    handlePhoneChange(event) {
        this.contactPhone = event.target.value;
    }
    
    saveContact(){

        const fields = {
            'LastName': this.contactLastName,
            'Title': this.contactTitle,
            'Email': this.contactEmail,
            'Phone': this.contactPhone,
            'AccountId': this.accountvalue
        };
        console.log('line 61 ' + JSON.stringify(fields));
        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(contact => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact "{0}" created! See it {1}.',
                        messageData: [
                            contact.fields.LastName.value,
                            {
                                url: '/lightning/r/Contact/' + contact.id + '/view',
                                label: 'here',
                                target: '_blank'
                            }
                        ],
                        variant: 'success',
                    }),
                );
                this.resetInputFields();
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }

    resetInputFields() {
        this.contactLastName = '';
        this.contactTitle = '';
        this.contactEmail = '';
        this.contactPhone = '';
        this.accountvalue = null;
    }
}