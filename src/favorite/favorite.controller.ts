import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  Req
} from '@nestjs/common';

import { Request } from 'express';

import { AuthGuard } from '@nestjs/passport';
import { FavoriteService } from './favorite.service';

@Controller('favorite')
export class FavoriteController {
  constructor(private favoriteService: FavoriteService) { }

  @Post(':movieId')
  @UseGuards(AuthGuard())
  async addFavorite(@Req() req: Request, @Param('movieId') movieId: string) {
    const userId = req?.user._id;
    return this.favoriteService.addFavorite(userId, movieId);
  }


  @Get()
  @UseGuards(AuthGuard())
  async getFavorites(@Req() req: Request) {
    const userId = req?.user._id;
    return this.favoriteService.findFavoritesByUser(userId);
  }


  @Delete(':movieId')
  @UseGuards(AuthGuard())
  async removeFavorite(@Req() req: Request, @Param('movieId') movieId: string) {
    const userId = req.user._id;
    return this.favoriteService.removeFavorite(userId, movieId);
  }
}