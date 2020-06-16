import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormComponent } from './components/form/form.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { EmojiNumbersPipe } from './pipes/emoji-numbers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FormComponent,
    CityListComponent,
    EmojiNumbersPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
