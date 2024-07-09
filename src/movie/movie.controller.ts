import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateFavoriteMovieDto } from './dto/add-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-movie.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) { }

  @Get()
  async getAllMovies(@Query() query: ExpressQuery): Promise<Movie[]> {
    return this.movieService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard()) 
  async createMovie(
    @Body()
    movie: CreateFavoriteMovieDto,
  ): Promise<Movie> {
    return this.movieService.create(movie);
  }

  @Get(':id')
  async getMovie(
    @Param('id')
    id: string,
  ): Promise<Movie> {
    return this.movieService.findById(id);
  }

  @Put(':id')
  async updateMovie(
    @Param('id')
    id: string,
    @Body()
    book: UpdateFavoriteMovieDto,
  ): Promise<Movie> {
    return this.movieService.updateById(id, book);
  }

  @Delete(':id')
  async deleteMovie(
    @Param('id')
    id: string,
  ): Promise<Movie> {
    return this.movieService.deleteById(id);
  }
}
