import { Component, Inject, OnInit } from '@angular/core';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  constructor(public service: UserListService) {}

  ngOnInit(): void {
    this.service.loadUsers();
  }
}
