import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FindRoomWindowComponent } from './find-room-window/find-room-window.component';
import { FindRoomFormComponent } from './find-room-form/find-room-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NewContractWindowComponent } from './new-contract-window/new-contract-window.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FindRoomWindowComponent,
    FindRoomFormComponent,
    NewContractWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
