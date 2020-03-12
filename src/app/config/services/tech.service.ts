import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from '../models/NewsDetails';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(private http: HttpClient) { }

  TechNews(): Observable<NewsModel> {
    return this.http.get<NewsModel>(environment.techApi).pipe(
      map((response) => {
      console.log(response);
      sessionStorage.setItem('token',  JSON.stringify(response));
      return response;
    })
    );
  }
}
