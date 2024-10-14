import { Address } from "./Address";
import { ECity } from "./Enum";
import { Movie } from "./Movie";
import { Show } from "./Show";
import { Theather } from "./Theather";

export interface ITheatherMovieMapper {
    movie: Movie;
    address: Address;
    theather: Theather;
    price: number;
    showList: Show[];
}

type TMovieShows = {
    [key: string]: Show[]
}

type TIdName = {
    id: string;
    name: string
}

export class TheatherMovieController {
    mapper: ITheatherMovieMapper[]

    constructor() {
        this.mapper = []
    }

    addMapping(obj: ITheatherMovieMapper) {
        this.mapper.push(obj);
    }

    getMoviesByCity(city: ECity): TIdName[] {
        const movies: TIdName[] = [];
        for (const obj of this.mapper) {
            if (obj.address.city === city) {
                movies.push({
                    id: obj.movie.id,
                    name: obj.movie.name
                });
            }
        }
        return movies;
    }

    getTheatherByCity(address: Address): string[] {
        const theather: string[] = [];
        for (const obj of this.mapper) {
            if (obj.address.city === address.city) theather.push(obj.theather.name);
        }
        return theather;
    }

    getTheathersByMovieName(movieName: string): TIdName[] {
        const theather: TIdName[] = [];
        for (const obj of this.mapper) {
            if (obj.movie.name === movieName) theather.push({
                id: obj.theather.id,
                name: obj.theather.name
            });
        }
        return theather;
    }

    getAllMoviesAndShowsFromTheather(theatherId: string): TMovieShows {
        const moviesAndShow: TMovieShows = {};
        for (const obj of this.mapper) {
            if (obj.theather.id === theatherId) moviesAndShow[obj.movie.name] = obj.showList;
        }

        return moviesAndShow;
    }

    getMovieScheduleFromTheather(theatherId: string, movieId: string): Show[] {
        let shows: Show[] = [];
        for (const obj of this.mapper) {
            if (obj.theather.id === theatherId && obj.movie.id === movieId) {
                shows = obj.showList;
            }
        }

        return shows;
    }

}