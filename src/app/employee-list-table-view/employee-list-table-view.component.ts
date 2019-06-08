import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'employee-list-table-view',
  templateUrl: './employee-list-table-view.component.html',
  styleUrls: ['./employee-list-table-view.component.css']
})
export class EmployeeListTableViewComponent {
  @Input() list: Employee[] = [];
  @Input() selectedId = 0;
  @Output() selectId = new EventEmitter<number>();
}
