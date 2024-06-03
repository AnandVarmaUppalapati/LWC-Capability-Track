import { LightningElement } from 'lwc';

export default class ParentMethod extends LightningElement {

    callChildMethod() {
        const childComponent = this.template.querySelector('c-child-method');
        if(childComponent) {
            childComponent.childMethod();
        }
    }
}