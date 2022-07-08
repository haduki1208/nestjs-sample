import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { options } from './dataSource';

@Module({
  imports: [TypeOrmModule.forRoot(options), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
