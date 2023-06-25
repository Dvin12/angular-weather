import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  currentWeather: any;
  temperature: number = 0;
  weatherImage: string = '';
  weatherDescription: string = '';
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe({
      next: (result) => {
        this.currentWeather = result;
        this.temperature = Math.round(this.currentWeather.main.temp);

        const weatherIcon = this.currentWeather.weather[0].icon;
        this.weatherImage = `assets/weather-icons/${weatherIcon}.png`;
        this.weatherDescription = this.currentWeather.weather[0].description;
      },

      error: (error) => console.log(error.message),
    });
  }
}
