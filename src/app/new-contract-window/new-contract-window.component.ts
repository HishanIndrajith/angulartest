import { Component, OnInit} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Contract } from '../contract';
import { RoomType } from '../room-type';
import { Hotel } from '../hotel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-new-contract-window',
  templateUrl: './new-contract-window.component.html',
  styleUrls: ['./new-contract-window.component.css']
  
})
export class NewContractWindowComponent implements OnInit {
  hotel = new Hotel("","");
  room_type = new RoomType("",0.00,0,0,0);
  contract = new Contract(new Date,new Date,[this.room_type],this.hotel);
  readonly URL = "http://localhost:8080";
  posts: any;

  constructor(private http : HttpClient) { }
  
  rooms = [ {rooms: 0, adults: 0}];

  //post request
  getPosts(){
    console.log("begin to send");
    this.posts = this.http.post<Contract>(this.URL+"/contracts",this.contract,httpOptions).subscribe();
  }

  types = [ {typeName: "", price: 0.00,noOfRooms: 0,maxadults:0 }];
  onEnter() { 
    var types2 = [ {typeName: "", price: 0.00,noOfRooms: 0,maxadults:0 }];
    this.types = this.types.concat(types2);
  }

  saveContract(){
    this.getPosts();
  }
  

  ngOnInit() {
  }

}
