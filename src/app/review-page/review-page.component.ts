import { ActivatedRoute } from '@angular/router';
import { HttpComServiceService} from './../http-com-service/http-com-service.service'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

	private movieID ='';
	private movieType = 0;
	private resultlove;
	private resulthate;
   constructor(private activatedRoute : ActivatedRoute,
  	private httpComServiceService : HttpComServiceService) { 

      this.movieID = this.activatedRoute.snapshot.params['movieID'];
      this.movieType = this.activatedRoute.snapshot.params['type'];
      this.getReviewlList();
  }


  getReviewlList()
  {
  	if(this.movieType == 1)
  	{
	    let url1 = 'http://localhost:5632/blog/api/imdb/reviews/' + this.movieID +'/love';
	  	this.httpComServiceService.getFilms(url1)
	  	.timeout(120000)
	  	.subscribe(result => {
	  		this.resultlove = result;
	  	});


	    let url2 = 'http://localhost:5632/blog/api/imdb/reviews/' + this.movieID + '/hate';
	  	this.httpComServiceService.getFilms(url2)
	  	.timeout(120000)
	  	.subscribe(result => {
	  		this.resulthate = result;
	  	});
  	}
  	else if(this.movieType == 0)
  	{
	    let url1 = 'http://localhost:5632/blog/api/douban/reviews/' + this.movieID +'/5';
	  	this.httpComServiceService.getFilms(url1)
	  	.timeout(120000)
	  	.subscribe(result => {
	  		this.resultlove = result;
	  	});


	    let url2 = 'http://localhost:5632/blog/api/douban/reviews/' + this.movieID + '/1';
	  	this.httpComServiceService.getFilms(url2)
	  	.timeout(120000)
	  	.subscribe(result => {
	  		this.resulthate = result;
	  	});  		
  	}

  }

  ngOnInit() {

 

  }

}
