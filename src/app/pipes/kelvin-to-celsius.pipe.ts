import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
})
export class KelvinToCelsiusPipe implements PipeTransform {
  public transform(value: number): number {
    return Math.round(value - 273.15);
  }
}
