import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.scss'],
})
export class EditplayerComponent {
  editForm: FormGroup;
  id: number;


  constructor(
    private playerService: PlayerService,
    private fB: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editForm = this.fB.group({
      name: '',
      points: 0,
      team_name: '',
      skills: '',
    });
  }

  onFormSubmit() {
    this.playerService.editPlayer(this.editForm.value).subscribe({
      next: (res) => {
        console.log('success');

        alert('Player Edited Successfully');
        this.router.navigateByUrl('admin/players');
      },
    });
  }

  cancel() {
    this.router.navigateByUrl('admin/players');
  }
}
