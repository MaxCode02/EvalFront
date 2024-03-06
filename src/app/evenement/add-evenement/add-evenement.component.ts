import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/services/evenement/evenement.service';


@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.scss']
})
export class AddEvenementComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(
    private eventService: EventService,
    private router: Router) {  
    }

  ngOnInit() {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      date: new FormControl('', Validators.required),
      location: new FormControl('')
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.eventService.addEvent(this.eventForm.value).subscribe(
        (newEvent) => {
          console.log(newEvent)
          this.router.navigate(['/evenement']); 
        },
        (error) => {
          console.error(error);
        }
      );
}
  }
}
  