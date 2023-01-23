import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  getData(): Observable<[]>{
    return this.http.get<[]>("../../../assets/data.json")
  }
}
