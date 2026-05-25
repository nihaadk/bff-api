import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { UuidModule } from 'nestjs-uuid/dist/lib/uuid.module';

@Module({
  imports: [UuidModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
