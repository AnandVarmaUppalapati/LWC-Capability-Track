import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    myName = 'Anand Varma';

    showMe = false;

    handlechange(event){
      this.showMe = event.target.checked;
    }
}