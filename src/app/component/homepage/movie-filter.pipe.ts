// import { movies } from 'src/app/files/movies.json';
import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from '../../dto/movies.model';

@Pipe({
    name:'movieFilter'
})

export class MovieFilterPipe implements PipeTransform{
    
    transform(movies: Movie[], searchTerm: string) : Movie[]{

        if (!movies || !searchTerm){
            return movies;
        }

        return movies.filter(movie => movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}