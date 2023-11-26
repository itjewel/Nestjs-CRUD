import { Module } from '@nestjs/common';
import { FeedController } from './controllers/feed.controller';

@Module({
  controllers: [FeedController],
})
export class FeedModule {}
