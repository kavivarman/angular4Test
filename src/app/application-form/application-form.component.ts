import { Component, OnInit } from '@angular/core';
import { monthList } from '../modalProperty';
import { yearList } from '../modalProperty';
import { Ptype } from '../modalProperty';
import { ToastrService } from 'ngx-toastr';
import { validationApplicationForm } from '../modalProperty';
import {  Router, ActivatedRoute, ParamMap  } from '@angular/router';
@Component({
  selector: 'app-router-outlet',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  months = monthList;
  years = yearList;
  formElement = {};
  errorElement = {};
  enableViewList: boolean;
  constructor(private toastr: ToastrService, private router: Router) {
    let dataList;
      dataList = JSON.parse(localStorage.getItem('data'));
      if (dataList) {
        this.enableViewList = true;
      } else {
        this.enableViewList = false;
      }
  }
  ngOnInit() {
    this.formElement['monthSelected'] = null;
    this.formElement['yearSelected'] = null;

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
    let errorCount;
    errorCount = 0;
    for (const i of validationApplicationForm) {
      if (!this.formElement[i.field]) {
        errorCount++;
        this.errorElement[i.field] = true;
      }
    }
    if (errorCount > 1) {
      this.toastr.error('Please enter all the mandatory fields', 'Error');
      return;
    }
    if (errorCount === 1) {
      for (const i of validationApplicationForm) {
        if (!this.formElement[i.field]) {
          this.toastr.error(i.errorMessage, 'Error');
          this.errorElement[i.field] = true;
        }
      }
      return;
    }
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]*\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
    if (!emailValidation.test(this.formElement['email'])) {
      this.toastr.error('Please enter valid email', 'Error');
      this.errorElement['email'] = true;
      return;
    }
    // tslint:disable-next-line:no-debugger
    debugger;
      let dataList;
      dataList = [];
      if (JSON.parse(localStorage.getItem('data')) != null) {
        dataList.push(JSON.parse(localStorage.getItem('data')));
        dataList.push(this.formElement);
      } else {
        dataList.push(this.formElement);
      }
      localStorage.setItem('data', JSON.stringify(dataList));
      this.enableViewList = true;
      this.formElement = {};
      this.formElement['monthSelected'] = null;
      this.formElement['yearSelected'] = null;
      this.toastr.success('Form saved successfully..!', 'Notification');
      return;
  }
  onClickClear($event) {
    this.formElement = {};
    this.formElement['monthSelected'] = null;
    this.formElement['yearSelected'] = null;
    this.toastr.success('Form cleared successfully..!', 'Notification');
  }
  onClickViewList() {
    this.router.navigate(['applicationList']);
    return;
  }
}
