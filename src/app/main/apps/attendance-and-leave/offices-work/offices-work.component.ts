import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offices-work',
  templateUrl: './offices-work.component.html',
  styleUrls: ['./offices-work.component.scss']
})
export class OfficesWorkComponent implements OnInit {
  public contentHeader: object

  constructor(private modalService: NgbModal) { }

  DeleteModalDialog() { }
  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'adminOffices.officeWork',
      actionButton: false
    };
  }
  ReviewDisplayModal: boolean
  ShowData: boolean
  ViewDisplayModal: boolean
  ViewPhoto:boolean
  showReviewModalDialog(event) {
    if (event == 'Show') {
      this.ViewDisplayModal = true
      return
    }
    this.ReviewDisplayModal = true;
  }
  SearchArr
  SearchHeader
  MakeSearchArr() {
    this.SearchHeader = 'Offic Work'
    this.SearchArr = [
      { label: "Office Name", Type: "text" },
    ]
  }

  // modal Open Small
  modalOpenSM(modalSM) {
    this.modalService.open(modalSM, {
      centered: true,
      size: 'sm' // size: 'xs' | 'sm' | 'lg' | 'xl'
    });
  }

}
