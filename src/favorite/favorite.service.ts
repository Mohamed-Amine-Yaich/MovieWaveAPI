import {
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


import { Favorite } from './schemas/favorite.schema';
@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite.name)
    private readonly favorite: mongoose.Model<Favorite>,
  
  ) {}

  async addFavorite(userId: string, movieId: string): Promise<Favorite> {
    const favorite = this.favorite.create({ userId, movieId });
    return (await favorite).save()
  }

  async findFavoritesByUser(userId: string): Promise<Favorite[]> {
    return this.favorite.find({ where: { userId } }).exec();
  }

  async removeFavorite(userId: string, movieId: string): Promise<void> {
    await this.favorite.deleteOne({ userId, movieId }).exec();
  }
}