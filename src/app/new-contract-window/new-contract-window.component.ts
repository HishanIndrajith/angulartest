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
  roomTypeArray = [new RoomType("",0.00,0,0,0)];
  contract = new Contract(new Date,new Date,this.roomTypeArray,this.hotel);
  readonly URL = "http://localhost:8080";
  posts: any;

  isError:boolean=false;
  isSucess:boolean=false;

  constructor(private http : HttpClient) { }
  
  rooms = [ {rooms: 0, adults: 0}];

  //post request
  getPosts(){
    this.posts = this.http.post<Contract>(this.URL+"/contracts",this.contract,httpOptions).subscribe(response => console.log(response));
  }

  types = [ {typeName: "", price: 0.00,noOfRooms: 0,maxadults:0 }];
  onEnter(i:number) { 
    var types2 = [ {typeName: "", price: 0.00,noOfRooms: 0,maxadults:0 }];
    this.types = this.types.concat(types2);
    var roomTypeArray = [new RoomType("",0.00,0,0,0)];
    this.contract.roomTypes=this.contract.roomTypes.concat(roomTypeArray);
  }
  clearRow(i : number){
    if (this.types.length>1) {
      this.contract.roomTypes.splice(i, 1);
      this.types.splice(i, 1);
    }
  }

  saveContract(){
    this.getPosts();
  }
  

  ngOnInit() {
  }

}
