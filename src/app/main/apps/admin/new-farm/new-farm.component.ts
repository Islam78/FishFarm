import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-farm',
  templateUrl: './new-farm.component.html',
  styleUrls: ['./new-farm.component.scss']
})
export class NewFarmComponent implements OnInit {

  constructor() { }
  onSubmit(f) {
    console.log("f", f.value);
  }
  ngOnInit(): void {
    // alert('bool')
  }
}
