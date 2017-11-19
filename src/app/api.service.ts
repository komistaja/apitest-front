import { Observable } from "rxjs/Observable";
import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Params } from './params';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
    constructor(
        private http:HttpClient
    ){

    }
    getData(params):Observable<any> {
        let getURI = 'http://heroku.com/?source=' + params.sourceSystem + "&number=" + params.resultNumber;
        return this.http.get(getURI)
            .map(this.extractData)
            .catch(this.handleError);
    }

    extractData(res:Response){
        let body = res.json;
        return body || [];
    }

    handleError(err: any){
        let error = err.message;
        return Observable.throw(error);
    }
}
