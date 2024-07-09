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
    const movies = await this.Movie.find();
    return movies;
  }

  async create(movie: Movie): Promise<Movie> {
    const   movieExist  = await this.Movie.findOne({imdbID:movie.imdbID}) 
    if(movieExist) {
      return movieExist
    }
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
    const updatedMovie = await this.Movie.findByIdAndUpdate(id, movie, {
      new: true,
      runValidators: true,
    });
    return updatedMovie
  }

  async deleteById(id: string): Promise<Movie> {
    return await this.Movie.findByIdAndDelete(id);
  }
}
