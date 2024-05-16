import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    apiUrl = 'https://localhost:7197/api';
    

    constructor(private http: HttpClient) { }

    getBKValues(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/BKTest`);
      }
}
