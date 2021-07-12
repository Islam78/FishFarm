import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss']
})
export class AdminGroupsComponent implements OnInit {

  contentHeader: object
  groups: any[];
  loading: boolean = true;
  constructor(
    
  ) {
    // private _serv: GroupsService,
    // private messageService: MessageService,
    // private _coreTranslationService: CoreTranslationService
  }

  ngOnInit(): void {
    this.getGroups()
    this.Header()
  }
  getGroups() {
    // this._serv.getGroups().subscribe((res: any) => {
    //   this.groups = res.data
    //   this.loading = false;
    // })
  }

  addDisplayModal: boolean;
  editDisplayModal: boolean
  showAddModalDialog() {
    this.addDisplayModal = true;
  }
  showEditModalDialog() {
    this.editDisplayModal = true;
  }

  add(i) {
    // console.log(i.value);
    // this._serv.addGroup({ "group_name": i.value }).subscribe(
    //   (res: any) => {
    //     if (res.status === true) {
    //       this.messageService.add({ severity: "info", summary: "Confirmed", detail: "You have accepted" });
    //       this.getGroups();
    //     }
    //   }
    // )
    this.addDisplayModal = false
  }
  GroupsPermissions: any[] = []
  SelectedGroupsPermissions
  OpenEdit(item) {
    this.SelectedGroupsPermissions = item
    // this._serv.getGroupsPermissions({ group_id: item.id }).subscribe((res: any) => {
    //   if (res.status === true) {
    //     this.showEditModalDialog();
    //     this.GroupsPermissions = res.data;
    //     this.GroupsPermissions.map(res => res.edit = false);
    //   }
    // })
  }
  AddGroupPermision() {
    let item: any = {
      action: "",
      edit: true,
      id: this.GroupsPermissions.length,
      permission_name: "",
      selected: true,
      add: true
    }
    this.GroupsPermissions.unshift(item)
  }
  SaveNewPerm(item) {
    if (item.permission_name) item.edit = false
    if (item.add = true) {
      item.action = "s"
      // this._serv.addGroupPermissions(item).subscribe(res => { item.add = false })
    } else {
      // this._serv.editGroupPermissions(item).subscribe()
    }
  }
  DeleteNewPerm(item) {
    if (item.add = true) {
      this.GroupsPermissions.shift()
      item.edit = false;
      return
    }
    item.edit = false;
  }
  UpdateGroupPermisions() {
    let GetItems = this.GroupsPermissions.filter((date: any) => date.selected == true),
      idOfItems = [...GetItems.map(res => res.id)],
      role = { group_id: this.SelectedGroupsPermissions.id, roles: idOfItems }
    // this._serv.editGroupPermissions(role).subscribe(fun => this.editDisplayModal = false)
  }
  remove(item: any) {
    // this._serv.removeGroups({ "id": item.id }).subscribe((res: any) => {
    //   if (res.status === true) {
    //     this.getGroups();
    //   }
    // })
  }
  Header() {
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
    this.SearchHeader= 'Admin Group'
    this.SearchArr = [
      { label: "Admin Name", Type: "text" },
      { label: "Code", Type: "text" },
    ]
  }

}
