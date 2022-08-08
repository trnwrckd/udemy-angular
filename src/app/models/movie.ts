export interface Movie {
    adult : boolean,
    backdrop_path : string,
    genre_ids : number[],
    genres : Genre[],
    id : number,
    original_language : string,
    original_title : string, 
    overview : string, 
    popularity: number ,
    poster_path : string, 
    release_date  : string,
    title : string,
    video : false, 
    revenue : number, 
    status : string, 
    runtime : number, 
    vote_average : number,
    vote_count : number
}

export interface Genre{
    id : number,
    name : string 
} 

export interface VideoDTO{
    id: number , 
    results : MovieVideo[]
}

export interface MovieVideo{
    site : string,
    key : string
}

export interface MovieImages{
    backdrops : {
        file_path : string
    }[]
}

export interface MovieCasts{
    cast:{
        name : string,
        profile_path : string
    }[]
}
