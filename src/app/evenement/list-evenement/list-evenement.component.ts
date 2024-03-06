import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/evenement/evenement.service';


@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.scss']
})
export class ListEvenementComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }

  editEvent(event: Event) {
    console.log('Edit event', event);
  }

  deleteEvent(id: string) {
    this.eventService.deleteEvent(id).subscribe(
      () => {
        this.events = this.events.filter(event => event.id !== id);
      },
      (error) => {
        console.error('Error deleting event', error);
      }
    );
  }
}
