import { Body, Controller,Post,Request } from "@nestjs/common";
import { FeedService } from "../services/feed.service";
import { Observable } from "rxjs";
import { FeedPost } from "../models/post.interface";

@Controller("feed")
export class FeedController {
    constructor(private feedService: FeedService){}
    @Post()
    create(@Body() feedPost: FeedPost,@Request() req): Observable<FeedPost>{
        console.log(feedPost)
        return this.feedService.createPost(feedPost)
    }
}
