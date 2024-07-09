import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema({
  timestamps: true,
})
export class Movie extends Document{

  @Prop()
  readonly Awards: string;

  @Prop()
  readonly Country: string;

  @Prop()
  readonly Director: string;

  @Prop()
  readonly Genre: string;

  @Prop()
  readonly Language: string;

  @Prop()
  readonly Metascore: string;

  @Prop()
  readonly Plot: string;

  @Prop()
  readonly Poster: string;
  
  @Prop()
  readonly Rated: string;

  @Prop()
  readonly Ratings: Array<{ Source: string; Value: string }>;

  @Prop()
  readonly Released: string;

  @Prop()
  readonly Response: string;

  @Prop()
  readonly Runtime: string;

  @Prop()
  readonly Title: string;

  @Prop()
  readonly Type: string;

  @Prop()
  readonly Writer: string;

  @Prop()
  readonly Year: string;

  @Prop()
  readonly imdbID: string;

  @Prop()
  readonly imdbRating: string;

  @Prop()
  readonly imdbVotes: string;

  @Prop()
  readonly totalSeasons: string;
   

}

export const MovieSchema = SchemaFactory.createForClass(Movie);
