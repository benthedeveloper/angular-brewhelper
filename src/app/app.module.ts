import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBrewsComponent } from './components/my-brews/my-brews.component';
import { BrewListComponent } from './components/brew-list/brew-list.component';
import { BrewDetailsComponent } from './components/brew-details/brew-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBrewsComponent,
    BrewListComponent,
    BrewDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
