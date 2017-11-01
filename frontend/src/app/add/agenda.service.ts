import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Agenda } from './agenda';

@Injectable()
export class AgendaService {

  private agendasUrl = 'http://localhost:4200/api/cadaluno';

  constructor(private http: Http) { }

  public addAgenda(body: Object): Observable<Agenda[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.agendasUrl, body, options)
      .map((res: Response) => res.json());
  }





}
