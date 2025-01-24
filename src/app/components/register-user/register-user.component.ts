import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styles: [
    `
      .close-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 1;
      }
    `,
  ],
})
export class RegisterUserComponent implements OnInit {
  userForm!: FormGroup;
  isEditMode: boolean = false;
  isViewMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<RegisterUserComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { user: User; isViewMode: boolean; title: string }
  ) {}

  ngOnInit(): void {
    this.isViewMode = this.data?.isViewMode || false;
    this.isEditMode = !!this.data?.user;

    // Initialize form
    this.userForm = this.fb.group({
      id: [this.data?.user?.id],
      firstName: [this.data?.user?.firstName || '', Validators.required],
      lastName: [this.data?.user?.lastName || '', Validators.required],
      email: [
        this.data?.user?.email || '',
        [Validators.required, Validators.email],
      ],
      phone: [this.data?.user?.phone || '', Validators.required],
      country: [this.data?.user?.country || '', Validators.required],
      gender: [this.data?.user?.gender || '', Validators.required],
    });

    if (this.isViewMode) {
      this.userForm.disable();
    }
  }

  submitForm(): void {
    if (this.userForm.valid && !this.isViewMode) {
      if (this.isEditMode) {
        this.userService.updateUser(this.userForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.userService.addUser(this.userForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
