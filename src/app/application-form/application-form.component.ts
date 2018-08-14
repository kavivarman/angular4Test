import { Component, OnInit } from '@angular/core';
import { monthList } from '../modalProperty';
import { yearList } from '../modalProperty';
import { Ptype } from '../modalProperty';
import { ToastrService } from 'ngx-toastr';
import { validationApplicationForm } from '../modalProperty';
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  months = monthList;
  years = yearList;
  formElement = {};
  errorElement = {};
  constructor(private toastr: ToastrService) {
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
      let dataList;
      dataList = JSON.parse(localStorage.getItem('data'));
      if (dataList) {
        dataList.push(this.formElement);
      } else {
        dataList = this.formElement;
      }
      localStorage.setItem('data', JSON.stringify(dataList));
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
}
