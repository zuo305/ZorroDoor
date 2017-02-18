
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FilmSearchResultComponent} from './film-search-result/film-search-result.component'
import { ReviewPageComponent } from './review-page/review-page.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'reviews/:movieID/:type',
    component: ReviewPageComponent
  },  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'fileSearchResult/:searchText',
    component: FilmSearchResultComponent
  },

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
