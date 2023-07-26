import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  userForm: FormGroup | undefined;
  errMessage: string;

  errStatus = false;

  constructor(
    private fB: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fB.group({
      username: '',
      password: '',
    });
  }


  onFormSubmit() {
  
    let userObj = this.userForm.value;

    this.adminService.loginAdmin(userObj).subscribe({
      next: (res) => {
        console.log(typeof res.id);
        console.log(res);

        if (res.id  == 0) {
          this.errStatus=true
        } 
        
        else {
          this.errStatus=false;
          this.adminService.currentUser = res;
          console.log(this.adminService.currentUser);

          this.router.navigateByUrl('admin/createNew');
        }
      },
      error: (err) => {
        console.log('user login error', err);
      },
    })
  }
}
