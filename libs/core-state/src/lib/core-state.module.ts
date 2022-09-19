import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWidgets from './widgets/widgets.reducer';
import { WidgetsEffects } from './widgets/widgets.effects';
import { WidgetsFacade } from './widgets/widgets.facade';
import { CoreDataModule } from '@fem/core-data';

export const coreStateRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule
  ],
  providers: [WidgetsFacade],
})
export class CoreStateModule {}
