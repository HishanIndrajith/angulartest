import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-room-form',
  templateUrl: './find-room-form.component.html',
  styleUrls: ['./find-room-form.component.css']
})
export class FindRoomFormComponent implements OnInit {

  constructor() { }
  condition :boolean =false;
  rooms = [ {rooms: 0, adults: 0}];
  onEnter() { 
    var rooms2 = [ {rooms: 0, adults: 0}];
    this.rooms = this.rooms.concat(rooms2);
  }
  findRoom(){
    this.condition=true;
  }
  closeResultWindow(){
    this.condition=false;
  }
  ngOnInit() {
  }

}
