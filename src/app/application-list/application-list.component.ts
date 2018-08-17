import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-router-outlet',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  constructor() { }
  dataList;
  ngOnInit() {
    this.dataList = (JSON.parse(localStorage.getItem('data')));
    console.log(this.dataList);
  }
}
