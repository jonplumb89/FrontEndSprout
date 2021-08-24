import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReuseService {

  constructor(
    private _http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this._http.get('https://www.reddit.com/r/Reuse/.json');
}
};

