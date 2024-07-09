import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema({
  timestamps: true,
})
export class Favorite extends Document {

  @Prop()
  userId: string;

  @Prop()
  movieId: string;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
