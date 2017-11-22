import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Params } from './params';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ) {

    }
  static extractData(res: Response) {
    const body = res;
    return body;
  }
  static handleError(err: any) {
    const error = err.message;
    return Observable.throw(error);
  }
  getData(params?, number?): Observable<any> {
    let getURI;
    if (params != null) {
      getURI = '/hello?name=' + params + '&number=' + number;
    }
    return this.http.get(getURI)
        .map(ApiService.extractData)
        .catch(ApiService.handleError);
  }
}
