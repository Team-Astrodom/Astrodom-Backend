import { FortuneController } from './fortune.controller';
import { FortuneService } from './fortune.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [FortuneController],
  providers: [FortuneService],
})
export class FortuneModule {}
