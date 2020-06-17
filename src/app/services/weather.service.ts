import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIToken } from '../tokens/api';
import { APISettings } from '../interfaces/api-settings';
import { CityWeather, GetByCityNameResponse } from '../interfaces/weather';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    @Inject(APIToken) private readonly settings: APISettings,
    private readonly http: HttpClient,
  ) {}

  public getCityByName(name: string): Observable<CityWeather> {
    const options = {
      params: new HttpParams()
        .set('q', name)
        .set('appid', this.settings.apiKey),
    };
    return this.http
      .get<GetByCityNameResponse>(this.settings.baseUrl, options)
      .pipe(
        map((response) => {
          return {
            name: response.name,
            country: response.sys.country,
            temperature: response.main.temp,
            weather: response.weather[0].main,
          };
        }),
      );
  }
}
