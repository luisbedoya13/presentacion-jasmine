import { EmojiParserPipe } from './emoji-parser.pipe';

describe('EmojiNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new EmojiParserPipe();
    expect(pipe).toBeTruthy();
  });
});
