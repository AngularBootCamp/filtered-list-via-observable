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
  styleUrl: './employee-list-table-view.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class EmployeeListTableViewComponent {
  @Input({ required: true }) list!: Employee[];
  @Input({ required: true }) selectedId!: number | null;
  @Output() selectId = new EventEmitter<number>();
}
