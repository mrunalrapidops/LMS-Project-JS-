import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

users: Object;
station: object;

  h1Style: boolean = false; 
  /* constructor(private data :DataService) { } */
  constructor(private stationBeanList :DataService) { }
  

  ngOnInit() {
  /*this.data.getUsers().subscribe(data => {
    this.users = data;
    console.log(this.users);  
   }) */
   //#API start
   this.stationBeanList.getstationBeanList().subscribe(station => {
    this.station = station;
    console.log(this.station);  
    //#API end
   })
  }
  
   firstClick(){
     console.log('clicked');
     this.h1Style = true;
     //this.data.firstClick();
   } 
}
  