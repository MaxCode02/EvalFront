import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/services/evenement/evenement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.scss']
})
export class UpdateEvenementComponent implements OnInit {
  eventForm!: FormGroup;
  //currentEventId: string;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //this.currentEventId = this.route.snapshot.params['id'];
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      date: new FormControl('', Validators.required),
      location: new FormControl('')
    });

    this.loadEventDetails();
  }

  loadEventDetails() {
  //   if (this.currentEventId) {
  //     this.eventService.getEventById(this.currentEventId).subscribe(
  //       (eventData) => {
  //         this.eventForm.patchValue(eventData);
  //       },
  //       (error) => {
  //         console.error('Error fetching event details', error);
  //       }
  //     );
  //   }
   }

  onSubmit() {
    // if (this.eventForm.valid) {
    //  // this.eventService.updateEvent(this.currentEventId, this.eventForm.value).subscribe(
    //     (updatedEvent) => {
    //       console.log(updatedEvent);
    //       this.router.navigate(['/evenement']);
    //     },
    //     (error) => {
    //       console.error('Error updating event', error);
    //     }
    //   );
    // }
  }
}
