import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  //server_address: string =  'api';
  server_address: string = "http://localhost:3000/api";

  bookingdtls = {
    UserName: '',
    UserMailId: '',
    HallName: '',
    DateOfBooking: '',
    TimeSlot: '',
    Status: ''
  }
  constructor(private http: HttpClient) { }

  getEvents(username: any) {
    return this.http.get(`${this.server_address}/booking/events/` + username);
  }
  getDetails(username: any) {
    return this.http.get(`${this.server_address}/booking/userbookings/` + username);
  }

  deleteDetails(id: any) {
    return this.http.delete(`${this.server_address}/booking/remove_booking/` + id)
  }

  getdate(dt: any) { }

  Bookhall(Bookings: any) {
    return this.http.post(`${this.server_address}/booking/newBooking`, { "BookingDetails": Bookings })
      .subscribe(data => { console.log(data) })
  }

  getAllDetails() {
    return this.http.get(`${this.server_address}/booking/bookingdtls`)
  }

  getTime(Hall: any, Date: any, Timeslot: any, Username: any) {
    return this.http.get(`${this.server_address}/booking/timeslot/` + Hall + "/" + Date + "/" + Timeslot + "/" + Username);
  }
}




