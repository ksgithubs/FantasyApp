import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss'],
})
export class AllusersComponent {
  constructor(private userService: UserService, private fb: FormBuilder) {}
  
  allUsers: any;
  editStatus: boolean;
  editProductIndex: number;
  id: string;

  editTable: FormGroup;

 

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.allUsers = res;

      },
    });


    this.editTable = this.fb.group({
      username: '',
      email: '',
      password: '',
      mobile: '',
    });
  }



  viewUsers(){
    
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.allUsers = res;

      },
    });
  }

  edit(index: any, user: any) {
    this.editStatus = true;
    this.editProductIndex = index;
    this.id = user.id;

    this.editTable.setValue({
      username: user.username,
      email: user.email,
      password: user.password,
      phonenumber: user.mobile,
    });
  }
  save() {
    this.editStatus = false;
    this.editProductIndex = undefined;
    let modifiedUser = this.editTable.value;
    modifiedUser.id = this.id;


    this.userService.editUser(this.editTable.value).subscribe({
      next:(res)=>{
        this.viewUsers();      }
    })


  }

  delete(index: any, user: any){
    
    this.id = user.id;

    this.userService.deleteUser(this.id).subscribe(
      {
        next:(res)=>{
          this.viewUsers();      }
      }
    )
   
  }



}
