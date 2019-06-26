import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

area = "johannesburg"; 
url = "http://api.openweathermap.org/data/2.5/weather?q="+this.area+",ZA&APPID=f6269cc27b506c16794e7b7cf8a69250";
message ="Enter a location in South Africa";  

constructor(public http: HttpClient,public ht:Http) {
    console.log('This Provider works');

  }

getmessage()
{
  this.message = "Enter A Loation In South Africa";
}

  getweather(aria)
  {
    if(aria !="johannesburg")
    {
    this.url = "http://api.openweathermap.org/data/2.5/weather?q="+this.area+",ZA&APPID=f6269cc27b506c16794e7b7cf8a69250";
   return this.ht.get(this.url).map(res=>res.json());
  }
else if(aria == undefined)
{

}
  
  }


}
