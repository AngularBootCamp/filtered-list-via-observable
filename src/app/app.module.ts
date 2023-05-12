import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail-view/employee-detail-view.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListTableViewComponent } from './employee-list-table-view/employee-list-table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    EmployeeListTableViewComponent
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
