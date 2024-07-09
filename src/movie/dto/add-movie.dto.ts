import {
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Document } from 'mongoose';

export class CreateFavoriteMovieDto extends Document {

  @IsNotEmpty()
  @IsString()
  readonly Actors: string;

  @IsNotEmpty()
  @IsString()
  readonly Awards: string;

  @IsNotEmpty()
  @IsString()
  readonly Country: string;

  @IsNotEmpty()
  @IsString()
  readonly Director: string;

  @IsNotEmpty()
  @IsString()
  readonly Genre: string;

  @IsNotEmpty()
  @IsString()
  readonly Language: string;

  @IsNotEmpty()
  @IsString()
  readonly Metascore: string;

  @IsNotEmpty()
  @IsString()
  readonly Plot: string;

  @IsNotEmpty()
  @IsString()
  readonly Poster: string;
  
  @IsNotEmpty()
  @IsString()
  readonly Rated: string;

 @IsArray()
  readonly Ratings: Array<{ Source: string; Value: string }>;

  @IsNotEmpty()
  @IsString()
  readonly Released: string;

  @IsNotEmpty()
  @IsString()
  readonly Response: string;

  @IsNotEmpty()
  @IsString()
  readonly Runtime: string;

  @IsNotEmpty()
  @IsString()
  readonly Title: string;

  @IsNotEmpty()
  @IsString()
  readonly Type: string;
  
  @IsNotEmpty()
  @IsString()
  readonly Writer: string;

  @IsNotEmpty()
  @IsString()
  readonly Year: string;

  @IsNotEmpty()
  @IsString()
  readonly imdbID: string;

  @IsNotEmpty()
  @IsString()
  readonly imdbRating: string;

  @IsNotEmpty()
  @IsString()
  readonly imdbVotes: string;

  @IsNotEmpty()
  @IsString()
  readonly totalSeasons: string;
}
