// events.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barcode } from './barcode.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Barcode)
    private barcodeRepository: Repository<Barcode>,
  ) {}

  async addBarcode(barcodeString: string): Promise<Barcode> {
    const newBarcode = this.barcodeRepository.create({
      barcode: barcodeString,
    });
    return await this.barcodeRepository.save(newBarcode);
  }
}
