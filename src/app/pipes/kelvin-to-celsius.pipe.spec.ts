import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';

describe('KelvinToCelsiusPipe', () => {
  it('create an instance', () => {
    const pipe = new KelvinToCelsiusPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 30 degrees', () => {
    const p = new KelvinToCelsiusPipe();
    expect(p.transform(303.15)).toBe(30);
  });
});
