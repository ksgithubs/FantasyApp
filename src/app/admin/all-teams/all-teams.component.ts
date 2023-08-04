import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss'],
})
export class AllTeamsComponent {
  constructor(
    private fb: FormBuilder,
    private sService: SharedService,
    private router: Router
  ) {}

  id: string;
  allTeams: any;
  teams: any;
  editStatus: boolean = true;
  editProductIndex: number;
  editTable: FormGroup;

  // teams: any;

  ngOnInit(): void {
    this.viewTeams();

    this.editTable = this.fb.group({
      name: '',
      logo: '',
    });
  }

  viewTeams() {
    this.sService.getAllTeams().subscribe({
      next: (res) => {
        this.teams = res;
      },
    });
  }

  createTeam() {
    this.router.navigateByUrl('admin/createNew');
  }
  save() {
    let modifiedTeam = this.editTable.value;
    modifiedTeam.id = this.id;

    this.sService.editTeam(modifiedTeam).subscribe({
      next: (res) => {
        alert(`User data of --${modifiedTeam.name}-- edited Successfully`);
        this.editStatus = true;
        this.viewTeams();
      },
    });
  }

 
  cancel() {
    this.editStatus = true;
  }

  edit(team: any) {
    this.editStatus = false;
    this.id = team.id;
    this.editTable.setValue({
      name: team.name,
      logo: team.logo
    });
  }

  delete(user: any) {
    this.id = user.id;
    if (
      confirm(`Are you sure you want to delete Player Data : ${user.name} ?`)
    ) {
      this.sService.deleteTeam(this.id).subscribe({
        next: (res) => {
          alert(`Player data of -- ${user.name}-- deleted Successfully`);
          this.viewTeams();
        },
      });
    }
  }
}
