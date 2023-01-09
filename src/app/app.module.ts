import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatDividerModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatMenuModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout'


@NgModule({
  imports:      [     BrowserModule,MatDividerModule,MatIconModule, 
    BrowserAnimationsModule, MatInputModule,MatSelectModule,
    MatFormFieldModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatCardModule,
    DragDropModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule, ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
