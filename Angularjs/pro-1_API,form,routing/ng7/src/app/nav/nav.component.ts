import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit { //Actual Logic

  App_Title:String = 'My First App';
  constructor() { }

  ngOnInit() {
  }

}
