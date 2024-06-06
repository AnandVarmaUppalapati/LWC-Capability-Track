import { LightningElement } from 'lwc';

export default class ParentUrlAssignment extends LightningElement {
    show='';

    AbsyzMethod(event){
      this.show = event.detail;
    }
    TrailheadMethod(event){
      this.show = event.detail;
    }
}