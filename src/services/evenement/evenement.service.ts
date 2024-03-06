import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private ApiUrl = 'http://localhost:7210/api'; 

  constructor(private http: HttpClient) {}


  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.ApiUrl}/Add`, event);
  }


  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.ApiUrl}/Events`);
  }


  updateEvent(id: string, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.ApiUrl}/Events/${id}`, event);
  }


  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.ApiUrl}/DeleteEvents/${id}`);
  }
}