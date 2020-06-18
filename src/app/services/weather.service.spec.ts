import { flush, TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { APIToken } from '../tokens/api';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CityWeather } from '../interfaces/weather';

describe('WeatherService', () => {
  let service: WeatherService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APIToken,
          useValue: {
            apiKey: '7b1b92bdcf3ed7519fc95e3e8dd320d4',
            baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get Panamá's data from API", () => {
    service.getCityByName('Panama').subscribe((response) => {
      expect(response.name).toBe('Panama');
    });
    const rq = http.expectOne(
      'https://api.openweathermap.org/data/2.5/weather?q=Panama&appid=7b1b92bdcf3ed7519fc95e3e8dd320d4',
    );
    expect(rq.request.method).toEqual('GET');
    const a: CityWeather = {
      name: 'Panama',
      temperature: 303.15,
      weather: 'Rain',
      country: 'PA',
    };
    rq.flush(a);
    http.verify();
  });
});
