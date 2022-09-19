import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsFacade } from '@fem/core-state';
import { Observable } from 'rxjs';

const mockWidgets: Widget[] = [
  { id: '1', title: 'Widget 01', description: 'Pending' },
  { id: '2', title: 'Widget 02', description: 'Pending' },
  { id: '3', title: 'Widget 03', description: 'Pending' },
];

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
}

@Component({
  selector: 'fem-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  //widgets: Widget[];
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(private widgetsFacade: WidgetsFacade) {

  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(emptyWidget);
  }

  resetForm() {
    this.selectWidget(emptyWidget);
  }

  selectWidget(widget: Widget) {
    this.selectWidget(emptyWidget);
  }

  loadWidgets() {
    //this.widgetService.all().subscribe(widgets => this.widgets = widgets);
    this.widgets$ = this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    const result$ = this.widgetsFacade.saveWidget(widget);
    result$.subscribe((result) => this.reset());
    //this.resetForm();
  }

  deleteWidget(widget: Widget) {
    //this.widgets = this.widgets.filter(w => widget.id !== w.id);
    const result$ = this.widgetsFacade.deleteWidget(widget)
    result$.subscribe((result) => this.reset());
    //this.resetForm();
  }
}