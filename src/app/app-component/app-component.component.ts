import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app-component.component.css']
})
export class AppComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
