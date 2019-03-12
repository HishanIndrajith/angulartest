import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-find-room-form',
  templateUrl: './find-room-form.component.html',
  styleUrls: ['./find-room-form.component.css']
})
export class FindRoomFormComponent implements OnInit {

  readonly URL = "http://localhost:8080";
  posts: any;
  constructor(private http:HttpClient) {
    
  }
  //post request
  getPosts(){
    this.posts = this.http.get(this.URL+ '/contracts');
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
