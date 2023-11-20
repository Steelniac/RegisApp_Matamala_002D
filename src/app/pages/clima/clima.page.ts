import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ClimaService } from 'src/app/services/clima.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const API_KEY = environment.apiKey;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage {

  weatherData: any;

  climanow = {
    name: "",
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0
  }

  constructor(private menuController: MenuController,
              private climaService: ClimaService) { }

  ngOnInit() {
    this.climaService.getWeather().subscribe(resp =>{
      this.weatherData = resp;
      console.log(this.weatherData)
      this.climanow ={
        name : this.weatherData.name,
        temp : Math.trunc(this.weatherData.main.temp-273.15),
        feels_like: Math.trunc(this.weatherData.main.feels_like-273.15),
        temp_min: Math.trunc(this.weatherData.main.temp_min-273.15),
        temp_max: Math.trunc(this.weatherData.main.temp_max-273.15),
        pressure: this.weatherData.main.pressure,
        humidity: this.weatherData.main.humidity
      }
    })
  }
  

  DispMenu(){
    this.menuController.open('first')
  }
}
