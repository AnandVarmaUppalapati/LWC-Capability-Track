import { LightningElement } from 'lwc';

export default class ChildUrlAssignment extends LightningElement {

    link1 = 'https://absyz.com/';
    link2 = 'https://trailhead.salesforce.com/';

    AbsyzhandleClick(){
        const absyzChangeEvent = new CustomEvent('absyz', { 
            detail : this.link1
        });
        this.dispatchEvent(absyzChangeEvent);
    }

    TrialheadhandleClick(){
        const trailheadChangeEvent = new CustomEvent('trailhead', { 
            detail : this.link2 
        });
        this.dispatchEvent(trailheadChangeEvent);
    }

}