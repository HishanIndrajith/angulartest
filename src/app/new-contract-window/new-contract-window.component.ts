import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { print } from 'util';

@Component({
  selector: 'app-new-contract-window',
  templateUrl: './new-contract-window.component.html',
  styleUrls: ['./new-contract-window.component.css']
  
})
export class NewContractWindowComponent implements OnInit {

  constructor() { }
  
  rooms = [ {rooms: 0, adults: 0}];
  onEnter() { 
    //document.getElementById('addr1').innerHTML = "<td>1</td><td><input type=\"text\" name='name0'  placeholder='Name' class=\"form-control\"/></td><td><input (keyup.enter)=\"onEnter()\" type=\"text\" name='mail0' placeholder='Mail' class=\"form-control\"/></td>"
    //let myContainer = document.getElementById('addr1') as HTMLInputElement;
    //myContainer.value = "<td>1</td><td><input type=\"text\" name='name0'  placeholder='Name' class=\"form-control\"/></td><td><input (keyup.enter)=\"onEnter()\" type=\"text\" name='mail0' placeholder='Mail' class=\"form-control\"/></td>";
    var rooms2 = [ {rooms: 0, adults: 0}];
    this.rooms = this.rooms.concat(rooms2);
  }
  

  ngOnInit() {
  }

}
