import { NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list-table-view',
  templateUrl: './employee-list-table-view.component.html',
  styleUrls: ['./employee-list-table-view.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class EmployeeListTableViewComponent {
  @Input() list: Employee[] = [];
  @Input() selectedId: number | null = null;
  @Output() selectId = new EventEmitter<number>();
}
