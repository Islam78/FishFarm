import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issuing-action',
  templateUrl: './issuing-action.component.html',
  styleUrls: ['./issuing-action.component.scss']
})
export class IssuingActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  SearchArr
  SearchHeader
  MakeSearchArr() {
    this.SearchHeader= 'Issuing Action'
    this.SearchArr = [
      { label: "Office Name", Type: "text" },
      { label: "Employee Name", Type: "text" },
      { label: "Employee Id", Type: "number" },
    ]
  }
}
