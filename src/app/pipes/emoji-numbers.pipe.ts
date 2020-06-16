import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiNumbers'
})
export class EmojiNumbersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
