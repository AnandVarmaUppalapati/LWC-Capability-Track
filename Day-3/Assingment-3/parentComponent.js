import { LightningElement,api } from 'lwc';

export default class ParentComponent extends LightningElement {

    @api inputValue;

    handleChange(event) {
        this.inputValue = event.target.value;
    }
    
}  