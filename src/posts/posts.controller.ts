import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  index() {
    return this.postService.findAll();
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.postService.find(id);
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.postService.create(title, description);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.postService.update(id, title, description);
  }

  @Delete(':id')
  destroy(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }
}
