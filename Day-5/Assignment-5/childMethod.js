import { LightningElement,api } from 'lwc';

export default class ChildMethod extends LightningElement {
    
    message;
    @api
    childMethod() {
        this.message = 'Hello from child';
        console.log('Method in child component called');
    }

}