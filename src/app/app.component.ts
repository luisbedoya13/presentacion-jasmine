import { Component } from '@angular/core';
import { CityWeather } from './interfaces/weather';

@Component({
  selector: 'w-root',
  template: `
    <h1 [innerText]="title"></h1>
    <h3 [innerText]="description"></h3>
    <w-form
      (cityWeather)="displayWeather($event)"
      (cityNotFound)="displayNotFoundMessage()"
    >
      <w-banner
        *ngIf="showBanner"
        [notFound]="cityNotFound"
        [cityWeather]="cityWeather"
        (dismiss)="dismissBanner()"
      ></w-banner>
    </w-form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'City weather';
  public description = 'Enter the name of your city to see its conditions';
  public showBanner = false;
  public cityNotFound: boolean;
  public cityWeather: CityWeather;
  public displayWeather(weather: CityWeather) {
    this.showBanner = true;
    this.cityNotFound = false;
    this.cityWeather = {
      ...weather,
    };
  }
  public displayNotFoundMessage() {
    this.showBanner = true;
    this.cityNotFound = true;
  }
  public dismissBanner() {
    this.showBanner = false;
  }
}
