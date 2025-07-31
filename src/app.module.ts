import { AppService } from './app.service';
import { FortuneModule } from './modules/fortune/fortune.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [FortuneModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
