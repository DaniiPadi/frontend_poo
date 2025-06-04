import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://backend-notifications-production.up.railway.app/notifications'; 

  constructor(private http: HttpClient) {}

  sendNotification(message: string, type: string): Observable<any> {
    return this.http.post(this.apiUrl, { message, type });
  }

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
