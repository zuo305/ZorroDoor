import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FilmSearchResultComponent } from './film-search-result/film-search-result.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FilmSearchResultComponent,
    ReviewPageComponent,
    GlobalHeaderComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    DropdownModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
