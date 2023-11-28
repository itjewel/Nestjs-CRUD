import { Injectable,NotFoundException  } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable,from } from "rxjs";
import { FeedPost } from "../models/post.interface";
import { FeedPostEntity } from "../models/post.entity";
@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  createPost(feedPost: FeedPost): Observable<FeedPost> {
    
    return from(this.feedPostRepository.save(feedPost));
  }
}