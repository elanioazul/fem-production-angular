import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  widgets: Widget[] /*= [
    { id: '1', title: 'Widget 01', description: 'Pending' },
    { id: '2', title: 'Widget 02', description: 'Pending' },
    { id: '3', title: 'Widget 03', description: 'Pending' },
  ];*/
  constructor( private widgetService: WidgetsService) {
    
  }

  ngOnInit(): void {
    this.widgetService.all().subscribe(widgets => this.widgets = widgets);
  }
}