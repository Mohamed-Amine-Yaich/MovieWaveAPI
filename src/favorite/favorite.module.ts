import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { FavoriteSchema } from './schemas/favorite.schema';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Favorite', schema: FavoriteSchema}]),
  ],
  controllers: [FavoriteController],
  providers: [FavoriteService],
})
export class FavoriteModule { }
