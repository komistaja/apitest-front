import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Input } from '@angular/core';

import { ApiService } from './api.service';

import { Params } from './params';

@Component({
    selector: 'result-component',
    templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    constructor(private _apiService:ApiService){}

    @Input() params: Params;

    ngOnInit() {
        this.getData();
    }


    private images = [];
    private errorMessage;

    getData() {
        this._apiService.getData(this.params)
            .subscribe(
                posts => this.images = posts,
                error => this.errorMessage = <any>error);
    }
}