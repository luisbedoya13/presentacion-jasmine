import { Pipe, PipeTransform } from '@angular/core';
import { emojis } from '../utils/emojis';

@Pipe({
  name: 'emojiParser',
})
export class EmojiParserPipe implements PipeTransform {
  public transform(value: number): string {
    const parsedEmojis: string[] = [];
    for (const v of value.toString()) {
      parsedEmojis.push(emojis.get(v));
    }
    return '&#127777;&#65039; ' + parsedEmojis.join('') + ' °C';
  }
}
