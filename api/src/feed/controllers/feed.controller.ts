import { Body, Param, Controller, Post, Get, Put } from "@nestjs/common";
import { FeedService } from "../services/feed.service";
import { Observable } from "rxjs";
import { FeedPost } from "../models/post.interface";
import { UpdateResult } from "typeorm";

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
  @Put(":id")
  updateFeed(
    @Param("id") id: number,
    @Body() feedPost: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }
}
