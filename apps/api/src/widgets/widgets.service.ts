import { Widget } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class WidgetsService {
  widgets: Widget[] = [
    {id:'1', title: 'Nest WIdget FTW 01', description: 'Pending...'},
    {id:'2', title: 'Nest WIdget FTW 02', description: 'Pending...'},
    {id:'3', title: 'Nest WIdget FTW 03', description: 'Pending...'}
  ];

  create(widget: Widget) {
    this.widgets = [...this.widgets, Object.assign({}, widget, {id: uuidv4()})];
    return this.widgets;
  }

  findAll() {
    return this.widgets;
  }

  findOne(id: string) {
    return this.widgets.find((widget) => widget.id === id);
  }

  update(id: string, widgetToBeUpdated: Widget) {
    this.widgets = this.widgets.map((w)=> (w.id === id ? widgetToBeUpdated : w))
    return this.widgets;
  }

  remove(id: string) {
    this.widgets = this.widgets.filter((w) => {w.id !== id});
    return this.widgets;
  }
}
