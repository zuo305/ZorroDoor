import { Component, OnInit } from '@angular/core';
import { HttpComServiceService} from './../http-com-service/http-com-service.service'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private searchText  : string;

  constructor(private httpComServiceService : HttpComServiceService) { }

  ngOnInit() {
  }

  searchButton()
  {
  	this.httpComServiceService.navigateToSearchFilm(this.searchText);
  }

}
