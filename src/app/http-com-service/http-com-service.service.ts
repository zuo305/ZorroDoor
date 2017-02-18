import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Headers, RequestOptions ,Http, Response } from '@angular/http';
import { DouBanFilmSearcWrap } from './response-douban.model';


import 'rxjs/Rx'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpComServiceService {

  private baseUrl: string= 'http://api.douban.com';


  constructor(private http: Http,private router: Router  ) {
  }


  ngOnInit () {
  }


  getFilms(url : string) : Observable<DouBanFilmSearcWrap>{

  let headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Accept','application/json');
  let options = new RequestOptions({ headers: headers });

//  let url = 'http://localhost:5632/blog/api/articles/' + searchText;
//  let url = `${this.baseUrl}/v2/movie/search?q=${searchText}`;
  console.log(url);
  return this.http.get(url, options)
              .map(this.extractData)
              .catch(this.handleError);
  }



  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }


  private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message

  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(error);
}

  navigateToSearchFilm(searchText : string)
  {
     let link = ['/fileSearchResult',searchText];
     this.router.navigate(link);
  }

  navigateToReviewPage(movieID : string,type : number)
  {
     let link = ['/reviews',movieID,type];
     this.router.navigate(link);
  }

}

