import { Component, OnInit } from '@angular/core';
import { monthList } from '../modalProperty';
import { yearList } from '../modalProperty';
import { Ptype } from '../modalProperty';
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  months = monthList;
  years = yearList;
  yearSelected = {};
  monthSelected: object = {};
  constructor() {
   }
  ngOnInit() {
  }
  onMonthSelect(event) {
    console.log(event.target.value);
    console.log(event.target.options[event.target.selectedIndex].value);
  }
  onYearSelect(event) {
    console.log(event);
    console.log(event.target.value);
  }
  onClickSubmit($event) {
    console.log('$event - ', $event);
    console.log('$event - ', this.monthSelected);

  }
}
