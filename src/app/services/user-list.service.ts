import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ToastService } from '../common/toast.service';
import { RegisterUserComponent } from '../components/register-user/register-user.component';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  users: User[] = [];
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
    'country',
    'gender',
    'actions',
  ];
  constructor(
    public userService: UserService,
    private toastService: ToastService,
    private dialog: MatDialog
  ) {}
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        this.toastService.showSuccess('Users loaded successfully!');
      },
      (error: any) => {
        this.toastService.showError(error.message);
      }
    );
  }

  addUser(): void {
    const dialogRef = this.dialog.open(RegisterUserComponent, {
      width: '50vw',
      data: { title: 'Add User' },
    });

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        if (result) {
          this.loadUsers();
          this.toastService.showSuccess('User added successfully!');
        }
      },
      (error: any) => {
        this.toastService.showError(error.message);
      }
    );
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(RegisterUserComponent, {
      width: '50vw',
      data: { user, isViewMode: false, title: 'Edit User' },
    });

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        if (result) {
          this.loadUsers();
          this.toastService.showSuccess('User updated successfully!');
        }
      },
      (error: any) => {
        this.toastService.showError(error.message);
      }
    );
  }

  viewUser(user: User): void {
    const dialogRef = this.dialog.open(RegisterUserComponent, {
      width: '50vw',
      data: { user, isViewMode: true, title: 'View User' },
    });
  }
}
