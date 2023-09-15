// event.gateway.ts
import { EventsService } from './events.service';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  constructor(private readonly eventsService: EventsService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  async findAll(@MessageBody() data: any): Promise<any> {
    return data;
  }

  @SubscribeMessage('scanBarcode')
  async handleBarcodeScan(@MessageBody() data: any): Promise<any> {
    const newBarcode = await this.eventsService.addBarcode(data.barcode);
    console.log(`Barcode saved: ${JSON.stringify(newBarcode)}`);
    return 'Barcode Saved';
  }
}
