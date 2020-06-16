import { EmojiNumbersPipe } from './emoji-numbers.pipe';

describe('EmojiNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new EmojiNumbersPipe();
    expect(pipe).toBeTruthy();
  });
});
