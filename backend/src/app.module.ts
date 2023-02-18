import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [RoutesModule, MongooseModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
