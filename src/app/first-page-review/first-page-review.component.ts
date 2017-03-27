import { Component, OnInit } from '@angular/core';
import { HttpComServiceService} from './../http-com-service/http-com-service.service'
import { NowPlayingMovieInfo }  from './../http-com-service/response-douban.model';

@Component({
  selector: 'app-first-page-review',
  templateUrl: './first-page-review.component.html',
  styleUrls: ['./first-page-review.component.scss']
})
export class FirstPageReviewComponent implements OnInit {

  nowPlayingMoviesList : NowPlayingMovieInfo[] = [];

  constructor(private httpComServiceService : HttpComServiceService) { 
  	this.getNowPlayingMovies();
  }	

  ngOnInit() {
  }

  getNowPlayingMovies() {
	
	let url = 'http://localhost:5632/blog/api/douban/nowplaying';
    this.httpComServiceService.getNowPlayingMovies(url)
    .timeout(120000)
    .subscribe(result => {
    	this.nowPlayingMoviesList = result.article;
    });

  }

}
