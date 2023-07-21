import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({ 
  selector: 'app-createnewteam',
  templateUrl: './createnewteam.component.html',
  styleUrls: ['./createnewteam.component.scss'],
})
export class CreatenewteamComponent {
  teamForm: FormGroup | undefined; 



  constructor(
    private fB: FormBuilder,
    private sService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teamForm = this.fB.group({
      team: '',
      players: '',
      image: '',
    });
  }

  

  open(){
    this.router.navigateByUrl("/admin")  
  }




  onFormSubmit() {

    this.sService.postTeam(this.teamForm.value).subscribe({
      next: (res) => {
        console.log('success');

        alert('Team Added Successfully');
        this.router.navigateByUrl('matches');
      },

    });
  }

}
