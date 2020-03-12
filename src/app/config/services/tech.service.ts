import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TechService {

  TechNews() {
    return this.http.get(environment.techApi);
  }

  constructor(private http: HttpClient) { }
}
