import { LightningElement } from 'lwc';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';
import NAME from '@salesforce/schema/Contact.Name';
import EMAIL from '@salesforce/schema/Contact.Email';
import PHONE from '@salesforce/schema/Contact.Phone';

export default class CreateContactToShowToastMessages extends LightningElement {

    objectApiName = 'Contact';
    fields = [NAME,EMAIL,PHONE];

    handlesuccess(event){
      const evet = new ShowToastEvent({
          title : 'Contact Created',
          message : 'Newly Created contact is : ' + event.detail.id,
          variant : 'success',
      });
      this.dispatchEvent(evet);
    }

    handleError(event){
        const evet = new ShowToastEvent({
            title : 'Contact does not Created',
            message : 'Error has occured' ,
            variant : 'error',
        });
        this.dispatchEvent(evet); 
    }
}