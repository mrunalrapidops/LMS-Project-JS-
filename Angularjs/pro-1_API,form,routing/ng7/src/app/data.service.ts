import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
  
})
export class DataService {

  constructor(private http: HttpClient) { }
  firstClick(){
    return console.log('click globly');
  }
  getUsers(){
      //code for Enable Google plugin in chome
      return this.http.get('http://citibikenyc.com/stations/json');
    }
    //#API start
    getstationBeanList(){
      //code for Enable Google plugin in chome
      //https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
      return this.http.get('http://citibikenyc.com/stations/json');
    }
    //#API End
  }

