import { Injectable } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable()

  constructor(private widgetsService: WidgetsService) {}

  selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }

  loadWidgets() {
    return this.widgetsService
    .all()
    .subscribe((widgets: Widget[]) => this.allWidgets.next(widgets));
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      return this.updateWidget(widget);
    } else {
      return this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    return this.widgetsService.create(widget);
  }

  updateWidget(widget: Widget) {
    return this.widgetsService.update(widget);
  }

  deleteWidget(widget: Widget) {
    return this.widgetsService.delete(widget);
  }
}
