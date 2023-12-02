import { Body, Controller, Post, Get } from "@nestjs/common";
import { FeedService } from "../services/feed.service";
import { Observable } from "rxjs";
import { FeedPost } from "../models/post.interface";

@Controller("feed")
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Post()
  create(@Body() feedPost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feedPost);
  }

  @Get()
  findAllPost(): Observable<FeedPost[]> {
    return this.feedService.findAllPost();
  }
  @Get("testget")
  findAllPostTest(): Observable<FeedPost[]> {
    return this.feedService.findAllPost();
  }
}
