import { Input, Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div [ngClass]="{green: event?.time ==='8:00 am', bold: event?.time === '10:00 am'}" [ngSwitch]="event?.time">Time: {{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>    
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>            
            <div>Price: \${{event.price}}</div>            
            <div *ngIf="event.location">
                <span>Location: {{ event.location.address}}</span>
                <span>&nbsp;</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL: {{ event?.onlineUrl}}
            </div>
        </div>        
    `,
    styles:[`
        .green { color: green}
        .bold { font-weight: bolder}
        .pad-left { margin-left: 10px }
        .thumbnail { min-height: 210px;}
    `]
})
export class EventThumbnailComponent{
    @Input() event: any;

    getStartTimeClass(){
        if(this.event.time ==='8:00 am')
            return {green: true};
            
        if(this.event.time === '10:00 am')  
            return {bold: true};
    }
}


