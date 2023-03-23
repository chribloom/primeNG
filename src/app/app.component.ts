import { Component} from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import { TableComponent } from './table/table.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome';
  value: Date = new Date()
  minDate = new Date ('16/03/2023');
  value4 = ''

  upper() {
    this.title = this.title.toUpperCase();
  }
}
