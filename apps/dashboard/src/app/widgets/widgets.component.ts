import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
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

  constructor(private widgetService: WidgetsService) {

  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    //this.widgetService.all().subscribe(widgets => this.widgets = widgets);
    this.widgets$ = this.widgetService.all();
  }

  saveWidget(widget: Widget) {
    if(widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget)
    }
  }

  createWidget(widget: Widget) {
    //const newWidget = Object.assign({}, widget, { id: this.getRandomID()})
    //this.widgets = [...this.widgets, newWidget];
    this.widgetService.create(widget).subscribe(res => this.reset());
    //this.resetForm();
  }

  updateWidget(widget: Widget) {
    // this.widgets = this.widgets.map(w => {
    //   return (widget.id === w.id) ? widget : w;
    // });
    this.widgetService.update(widget).subscribe(res => this.reset());
    //this.resetForm();
  }

  deleteWidget(widget: Widget) {
    //this.widgets = this.widgets.filter(w => widget.id !== w.id);
    this.widgetService.delete(widget).subscribe(res => this.reset());
    //this.resetForm();
  }
}