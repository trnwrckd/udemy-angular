import { Movie } from "./movie";

export interface MovieDTO {
    page : number ,
    results : Movie[]
    total_results : number ,
    total_pages : number 
}