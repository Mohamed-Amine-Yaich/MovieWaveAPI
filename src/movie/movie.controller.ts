import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
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
  @UseGuards(AuthGuard())
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
  @UseGuards(AuthGuard())
  async getMovie(
    @Param('id')
    id: string,
  ): Promise<Movie> {
    return this.movieService.findById(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  async updateMovie(
    @Param('id')
    id: string,
    @Body()
    movie: UpdateFavoriteMovieDto,
  ): Promise<Movie> {
    return this.movieService.updateById(id, movie);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteMovie(
    @Param('id')
    id: string,
  ): Promise<Movie> {
    return this.movieService.deleteById(id);
  }
}
