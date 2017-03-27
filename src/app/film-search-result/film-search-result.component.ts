import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpComServiceService} from './../http-com-service/http-com-service.service'


@Component({
  selector: 'app-film-search-result',
  templateUrl: './film-search-result.component.html',
  styleUrls: ['./film-search-result.component.css']
})
export class FilmSearchResultComponent implements OnInit {

  private searchText : string ;
  private resultdouban ;
  private resultimdb;
  constructor(private activatedRoute : ActivatedRoute,
  	private httpComServiceService : HttpComServiceService) { 

      this.searchText = this.activatedRoute.snapshot.params['searchText'];

      this.getHotelList();
  }


  getHotelList()
  {

    let url1 = 'http://localhost:5632/blog/api/douban/' + this.searchText;
  	this.httpComServiceService.searchFilms(url1)
  	.timeout(120000)
  	.subscribe(result => {
  		this.resultdouban = result;
  	});


    let url2 = 'http://localhost:5632/blog/api/imdb/' + this.searchText;
    this.httpComServiceService.searchFilms(url2)
    .timeout(120000)
    .subscribe(result => {
      this.resultimdb = result;
    });


  }

  selectFilm(name : string ,type : number)
  {
    var movieID=''; 
    if(type==1)
    {
    let arr = name.split('/title/');
    if (arr.length>1)
    {
      movieID = arr[1];
      arr = movieID.split('/?')
      if ( arr.length>0)
      {
        movieID=arr[0];
        console.log(movieID);
      }
      this.httpComServiceService.navigateToReviewPage(movieID,type);
    }
    }
    else if(type==0)
    {
      let arr = name.split('subject/')
      if(arr.length>1)
      {
        movieID = arr[1];
        movieID = movieID.slice(0, -1);
        console.log(movieID);
      }
      this.httpComServiceService.navigateToReviewPage(movieID,type);
    }
  }

  ngOnInit() {
  }

}
