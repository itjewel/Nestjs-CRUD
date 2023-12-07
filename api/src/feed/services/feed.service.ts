import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable, from } from "rxjs";
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
  findAllPost(): Observable<FeedPost[]>{
    return from(this.feedPostRepository.find());
  }
  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id))
  }

}
