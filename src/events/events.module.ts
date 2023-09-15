import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barcode } from './barcode.entity';
import { EventsGateway } from './events.gateway';
import { EventsService } from './events.service';

@Module({
  imports: [TypeOrmModule.forFeature([Barcode])],
  providers: [EventsGateway, EventsService],
})
export class EventsModule {}
