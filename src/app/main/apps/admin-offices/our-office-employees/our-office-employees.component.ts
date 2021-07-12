import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-office-employees',
  templateUrl: './our-office-employees.component.html',
  styleUrls: ['./our-office-employees.component.scss']
})
export class OurOfficeEmployeesComponent implements OnInit {

  
  contentHeader: object
  editDisplayModal: boolean
  constructor() { }
  showEditModalDialog() {
    this.editDisplayModal = true;
  }
  UpdateEmployeeOffices() {
    this.editDisplayModal = false
  }
  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: '',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: '',
            isLink: true,
            link: '/'
          },
          {
            name: '',
            isLink: false
          }
        ]
      }
    }
  }
  SearchArr
  SearchHeader
  MakeSearchArr() {
    this.SearchHeader= 'Recommend Employee'
    this.SearchArr = [
      { label: "empolyeee name", Type: "text" },
      { label: "office name ", Type: "text" },
    ]
  }

}
