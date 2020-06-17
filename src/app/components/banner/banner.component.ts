import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CityWeather } from '../../interfaces/weather';

@Component({
  selector: 'w-banner',
  template: `
    <section class="banner">
      <ng-template [ngIf]="notFound" [ngIfElse]="weather">
        <span [innerText]="notFoundMessage"></span>
      </ng-template>
      <ng-template #weather>
        <div class="banner_info">
          <span
            class="banner_info_description"
            [innerText]="cityDescription"
          ></span>
          <span
            class="banner_info_temperature"
            [innerHTML]="temp | kelvinToCelsius | emojiParser"
          ></span>
        </div>
      </ng-template>
      <span class="banner_close" (click)="dismiss.emit()">X</span>
    </section>
  `,
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  @Input() notFound: boolean;
  @Input() cityWeather: CityWeather;
  @Output() dismiss = new EventEmitter<void>();
  public get cityDescription() {
    return (
      `${this.cityWeather.name}, ${this.cityWeather.country} - ` +
      this.cityWeather.weather
    );
  }
  public get temp() {
    return this.cityWeather.temperature;
  }
  public notFoundMessage = `We can't find the city you're looking for`;
}
