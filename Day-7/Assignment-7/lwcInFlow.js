import { LightningElement,api } from 'lwc';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LwcInFlow extends LightningElement { 

    @api titleinput;
    @api messageinput;
    @api recordId;
    @api availabelAction = [];

    connectedCallback(){
        console.log('RecordId ' + this.recordId);
        const toastEvent = new ShowToastEvent({
            title : this.titleinput,
            message : this.messageinput,
            variant : 'Success'
        });
        this.dispatchEvent(toastEvent);
        //this.handleSave();
    }

    // handleSave(){
    //     if(this.availabelAction.find(action)){

    //     }
    // }
}