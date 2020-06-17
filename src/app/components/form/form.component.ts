import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CityWeather } from '../../interfaces/weather';

@Component({
  selector: 'w-form',
  template: `
    <form [formGroup]="form" class="form">
      <input formControlName="cityName" class="form_input" />
      <button class="form_button" [disabled]="form.invalid" (click)="getCity()">
        Search!
      </button>
      <ng-content></ng-content>
    </form>
  `,
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  @Output() cityWeather = new EventEmitter<CityWeather>();
  @Output() cityNotFound = new EventEmitter<void>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly weather: WeatherService,
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      cityName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-zÑñÁÉÍÓÚáéíóú\s]{3,20}$/),
        ],
      ],
    });
  }

  public getCity() {
    this.weather.getCityByName(this.form.value.cityName as string).subscribe(
      (response) => {
        this.cityWeather.emit(response);
      },
      () => {
        this.cityNotFound.emit();
      },
    );
  }
}
