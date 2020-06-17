import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';

describe('KelvinToCelsiusPipe', () => {
  it('create an instance', () => {
    const pipe = new KelvinToCelsiusPipe();
    expect(pipe).toBeTruthy();
  });
});
