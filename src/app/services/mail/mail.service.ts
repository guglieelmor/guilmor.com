import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  host = 'http://localhost:2000/send';

  constructor(private http: HttpClient) { }

  send(data: any): Observable<any>{
    return this.http.post(this.host, data);
  }
}
