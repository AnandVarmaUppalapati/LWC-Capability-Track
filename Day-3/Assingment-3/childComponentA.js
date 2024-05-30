import { LightningElement,api } from 'lwc';

export default class ChildComponentA extends LightningElement {

    @api inputValue;

    handleChange(event){
        
        this.inputValue = event.target.value;

        const valueChangeEvent = new CustomEvent('valuechange', {
            detail: { value: this.inputValue }
        });
        this.dispatchEvent(valueChangeEvent);
    }

}