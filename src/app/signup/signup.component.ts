import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
}) 
export class SignupComponent {
  userForm: FormGroup | undefined;

  constructor(
    private fB: FormBuilder,
    private http: HttpClient,
    private uService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fB.group({
      username: '',
      password: '',
      email: '',
      phonenumber: '',
    });
  }

  
  onFormSubmit() {
    this.uService.createUser(this.userForm.value).subscribe({
      next: (res) => {
        console.log('success');

        alert(`${this.userForm.value.username}` + ' User Added Successfully');
        this.router.navigateByUrl('matches');

      },
    });
  }

  login(){
    this.router.navigateByUrl("/login")
  }

}
