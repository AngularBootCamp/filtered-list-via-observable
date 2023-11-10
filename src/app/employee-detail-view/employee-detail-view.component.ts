import { Component, Input } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  standalone: true
})
export class EmployeeDetailComponent {
  @Input() employee: Employee | undefined;
}
