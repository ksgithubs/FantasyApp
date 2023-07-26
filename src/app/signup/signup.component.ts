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
      firstname:'',
      lastname:'',
      username: '',
      password: '',
      email: '',
      mobile: 0
    });
  }

  
  onFormSubmit() {

    console.log(this.userForm.value)
    this.uService.createUser(this.userForm.value).subscribe({
      next: (res) => {
        console.log('success');

        alert(`${this.userForm.value.firstname}` + ' User Added Successfully');
        this.router.navigateByUrl('login');

      },
    });
  }

  login(){
    this.router.navigateByUrl("/login")
  }

}
