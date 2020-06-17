import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormComponent } from './components/form/form.component';
import { EmojiParserPipe } from './pipes/emoji-parser.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APIToken } from './tokens/api';
import { APISettings } from './interfaces/api-settings';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FormComponent,
    EmojiParserPipe,
    KelvinToCelsiusPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    {
      provide: APIToken,
      useValue: {
        apiKey: '7b1b92bdcf3ed7519fc95e3e8dd320d4',
        baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
      } as APISettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
