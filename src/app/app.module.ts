import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { StateColumnModule } from './components/state-column/state-column.module';

import { DemoMaterialModule } from './material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TaskManagerService } from './services/task-manager.service';
import { EffectsModule } from '@ngrx/effects';

import * as TaskManagerReducer from './reducers/taskManager/task-manager.reducer';
import { TaskManagerEffects } from './effects/task-manager.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    DemoMaterialModule,
    StateColumnModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('taskManagerStore', TaskManagerReducer.reducer),
    EffectsModule.forRoot([TaskManagerEffects])
  ],
  providers: [TaskManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
