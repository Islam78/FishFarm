import { Component, OnInit, NgModule, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-genrate-user',
  templateUrl: './add-genrate-user.component.html',
  styleUrls: ['./add-genrate-user.component.scss']
})
export class AddGenrateUserComponent implements OnInit {

  @Input() id: any;
  Type
  constructor(public modal: NgbActiveModal, private router: ActivatedRoute,
    private Router: Router) {
      console.log(this.id);
  }
  onSubmitAdmin(f) {
    console.log("f", f.value);
  }
  onSubmitUser(f) {
    console.log("f", f.value);
  }
  onSubmit(f) {
    console.log("f", f.value);
  }
  ngOnInit(): void {
    // alert('bool')
    console.log(this.id);

  }

}
