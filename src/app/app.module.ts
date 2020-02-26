import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyBrewsComponent } from './components/my-brews/my-brews.component';
import { BrewListComponent } from './components/brew-list/brew-list.component';
import { BrewDetailsComponent } from './components/brew-details/brew-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'my-brews', component: MyBrewsComponent },
  { path: '',   redirectTo: '/my-brews', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyBrewsComponent,
    BrewListComponent,
    BrewDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
