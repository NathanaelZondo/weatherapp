import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit  {
  iweatherID:any;
  temp:any;
  humidity:any;
  speed:any;
  pic:any;
  sho:any ={};
  city =[];
  warn ;
  ss1 = "soweto"
  constructor(public navCtrl: NavController,private we:WeatherProvider) {
    
    this.we.getweather(this.ss1).subscribe(weather=>{weather;
     this.iweatherID = weather.name;
     this.temp = Math.round(weather.main.temp- 273);
     this.humidity = weather.main.humidity;
     this.speed = weather.wind.speed;
     this.pic = weather.weather[0].icon+'.png';
    
    }); 
    
  }
  ngOnInit() {}
  
save()
{
this.city.push(this.sho);
this.sho ={};
this.we.area =this.city[0].search;

this.we.getweather(this.we.area).subscribe(weather=>{
 
  this.iweatherID = weather.name;
  this.temp = Math.round(weather.main.temp- 273);
  this.humidity = weather.main.humidity;
  this.speed = weather.wind.speed;
  
 
 }); 


 
this.city.splice(0,1);


}
 
}
