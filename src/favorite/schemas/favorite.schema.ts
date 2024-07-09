import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



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
