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
  widgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidget$;

  constructor(private widgetsFacade: WidgetsFacade) {

  }

  ngOnInit(): void {
    this.reset();
    this.widgetsFacade.mutations$.subscribe((_) => this.reset())
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectWidget(null);
  }

  selectWidget(widget: Widget) {
    this.widgetsFacade.selectWidget(widget);
  }

  loadWidgets() {
    //this.widgetService.all().subscribe(widgets => this.widgets = widgets);
    this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    // const result$ = this.widgetsFacade.saveWidget(widget);
    // result$.subscribe((result) => this.reset());
    //this.resetForm();
    this.widgetsFacade.saveWidget(widget);
  }

  deleteWidget(widget: Widget) {
    //this.widgets = this.widgets.filter(w => widget.id !== w.id);
    // const result$ = this.widgetsFacade.deleteWidget(widget)
    // result$.subscribe((result) => this.reset());
    //this.resetForm();
    this.widgetsFacade.deleteWidget(widget);
  }
}