import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() Show
  @Input() SearchArr
  @Input() SearchHeader
  ShowSidPar() {
    setTimeout(() => {
      console.log(this.SearchArr);
    }, 5);
  }
  constructor() { }
  display
  ngOnInit(): void { }
}
