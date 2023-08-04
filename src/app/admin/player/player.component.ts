import { Component, OnInit, PlatformRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private router: Router
  ) {}

  allplayers: any;
  editStatus: boolean = true;
  editProductIndex: number;
  id: string;
  editTable: FormGroup;

  ngOnInit(): void {
    this.viewPlayers();

    this.editTable = this.fb.group({
      name: '',
      points: '',
      team_name: '',
      skills: '',
    });
  }

  viewPlayers() {
    this.playerService.getAllPlayers().subscribe({
      next: (res) => {
        this.allplayers = res;
      },
    });
  }

  createPlayer() {
    this.router.navigateByUrl('admin/newplayer');
  }

  edit(user: any) {
    this.editStatus = false;
    this.id = user.id;
    this.editTable.setValue({
      name: user.name,
      team_name: user.team_name,
      points: user.points,
      skills: user.skills,
    });
  }
  cancel() {
    this.editStatus = true;
  }

  save() {
    let modifiedUser = this.editTable.value;
    modifiedUser.id = this.id;

    this.playerService.editPlayer(modifiedUser).subscribe({
      next: (res) => {
        alert(`User data of --${modifiedUser.name}-- edited Successfully`);
        this.editStatus = true;
        this.viewPlayers();
      },
    });
  }

  delete(user: any) {
    this.id = user.id;
    if (
      confirm(`Are you sure you want to delete Player Data : ${user.name} ?`)
    ) {
      this.playerService.deletePlayer(this.id).subscribe({
        next: (res) => {
          alert(`Player data of ---- deleeted Successfully`);
          this.viewPlayers();
        },
      });
    }
  }
}
