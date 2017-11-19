import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResultComponent } from './result.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ ResultComponent ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
