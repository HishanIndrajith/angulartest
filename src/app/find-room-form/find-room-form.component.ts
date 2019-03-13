import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Requirement } from '../requirement';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-find-room-form',
  templateUrl: './find-room-form.component.html',
  styleUrls: ['./find-room-form.component.css']
})
export class FindRoomFormComponent implements OnInit {

  requirement = new Requirement(new Date,4,[4,4]);
  readonly URL = "http://localhost:8080";
  posts: any;
  constructor(private http:HttpClient) {
    
  }
  //post request
  getPosts(){
    this.posts = this.http.post<Requirement>(this.URL+"/find",this.requirement,httpOptions);
  }
  condition :boolean =false;
  rooms = [ {rooms: 0, adults: 0}];
  onEnter() { 
    var rooms2 = [ {rooms: 0, adults: 0}];
    this.rooms = this.rooms.concat(rooms2);
  }
  findRoom(){
    this.getPosts();
    this.condition=true;
  }
  closeResultWindow(){
    this.condition=false;
  }
  ngOnInit() {
  }

}
