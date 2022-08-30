import { Widget } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';

@Injectable()
export class WidgetsService {
  widgets: Widget[] = [
    {id:'1', title: 'Nest WIdget FTW 01', description: 'Pending...'},
    {id:'2', title: 'Nest WIdget FTW 02', description: 'Pending...'},
    {id:'3', title: 'Nest WIdget FTW 03', description: 'Pending...'}
  ];

  create(createWidgetDto: CreateWidgetDto) {
    return 'This action adds a new widget';
  }

  findAll() {
    return this.widgets;
  }

  findOne(id: number) {
    return `This action returns a #${id} widget`;
  }

  update(id: number, updateWidgetDto: UpdateWidgetDto) {
    return `This action updates a #${id} widget`;
  }

  remove(id: number) {
    return `This action removes a #${id} widget`;
  }
}
