import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieSchema } from './schemas/favoriteMovie.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule { }
