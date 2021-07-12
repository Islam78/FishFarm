import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-genrate-user',
  templateUrl: './edit-genrate-user.component.html',
  styleUrls: ['./edit-genrate-user.component.scss']
})
export class EditGenrateUserComponent implements OnInit {
  constructor(  public modal: NgbActiveModal,) { }
  onSubmit(f) {
    console.log("f", f.value);
  }
  ngOnInit(): void {
    // alert('bool')
  }


}
