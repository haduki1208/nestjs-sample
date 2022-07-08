import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  public findAll() {
    return this.postRepository.find();
  }

  public find(id: number) {
    return this.postRepository.findOne({ where: { id } });
  }

  public create(title: string, description: string) {
    const post = this.postRepository.create({ title, description });
    return this.postRepository.save(post);
  }

  async update(id: number, title: string, description: string) {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new HttpException('エラー', 500);
    }
    post.title = title;
    post.description = description;
    return this.postRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    return this.postRepository.remove(post);
  }
}
