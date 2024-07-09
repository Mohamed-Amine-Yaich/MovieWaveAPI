import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Query } from 'express-serve-static-core';
import { Movie } from './schemas/movie.schema';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name)
    private Movie: mongoose.Model<Movie>,
  ) { }

  async findAll(query: Query): Promise<Movie[]> {
    // find all favorite movies for login user
    const favMovies = []
    return favMovies;
  }

  async create(movie: Movie): Promise<Movie> {

    const res = await this.Movie.create(movie);
    return res;
  }

  async findById(id: string): Promise<Movie> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }

    const movie = await this.Movie.findById(id);

    if (!movie) {
      throw new NotFoundException('movie not found.');
    }

    return movie;
  }

  async updateById(id: string, movie: Movie): Promise<Movie> {
    return await this.Movie.findByIdAndUpdate(id, movie, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Movie> {
    //delete from movie collection and from favMovie arry in user document

    return await this.Movie.findByIdAndDelete(id);
  }
}
