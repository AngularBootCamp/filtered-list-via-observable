import { Component } from '@angular/core';

import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  template: '<app-employee-list/>',
  standalone: true,
  imports: [EmployeeListComponent]
})
export class AppComponent {}
