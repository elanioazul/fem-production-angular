import { Component } from '@angular/core';
import { WidgetsService } from '@fem/core-data';
@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private widgetService: WidgetsService) {}
}
