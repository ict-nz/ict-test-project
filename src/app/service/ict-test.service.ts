import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IctTestService {

  private heroesUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
  ) { }

}
