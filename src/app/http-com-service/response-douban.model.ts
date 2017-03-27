export class DouBanFilmSearcWrap {
  count : number;
  start : number;
  total : number;
  subjects : {
  	title : string;
  	images : {
  		small : string;
  	}
  }[];

}

export class NowPlayingMovieInfo{
	id : string;
	image : string;
	postUrl : string;
	title : string;
		
}


export class NowPlayingMoviesWrap {
	article : NowPlayingMovieInfo[];
}