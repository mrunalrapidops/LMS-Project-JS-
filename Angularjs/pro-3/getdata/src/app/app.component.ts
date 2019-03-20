import { Component } from '@angular/core';
import { RecordsService } from './records.service'
//Decorator 
function log(target, name,descriptor){
  console.log(target, name, descriptor);
  //store the original function in a vartiable
  const original = descriptor.value
  //do  manipulations with descriptor.value
  /* descriptor.value = function(){
    console.log("This function was hacked!");  
  } */
  //original()
  //return the descriptor
  return descriptor
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records = {}
  title = 'getdata';
  constructor(private myFirstService : RecordsService){
    this.aSimpleMethod();
   }
  @log
  aSimpleMethod(){
    console.log("Hiii");
  }
  ngOnInit(){
    this.myFirstService.getData().subscribe(res=>{
      console.log(res);
    });
  }
}
