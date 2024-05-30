import { LightningElement } from 'lwc';

export default class ParentComponentA extends LightningElement {
    receivedValue = '';

    handleValueChange(event) {
        this.receivedValue = event.detail.value;
    }
}