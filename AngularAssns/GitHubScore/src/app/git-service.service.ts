import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Users } from './users';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  retrieveGithubUser(username: string): Observable<Users> {
    return this.http.get(`https://api.github.com/users/${ username }`)
      .map(response => response.json());
  }
}