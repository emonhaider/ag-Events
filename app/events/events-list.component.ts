import { Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import {ActivatedRoute} from '@angular/router';
@Component({    
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr>
        <event-thumbnail *ngFor="let event of events" [event]="event" class="col-md-5"></event-thumbnail>    
    </div>
    `   
})
export class EventsListComponent implements OnInit{
    events:any;
    constructor(private eventService:EventService, private route: ActivatedRoute){}

    ngOnInit(){
        this.events = this.route.snapshot.data['events'];
    }
}