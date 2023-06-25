import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData() {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=klaipeda&appid=df64afae23fae2a3b41d8fb056651f17&units=metric'
    );
  }
}
