import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.scss'],
})
export class NewplayerComponent implements OnInit {
  playerForm: FormGroup;

  constructor(
    private playerService: PlayerService,
    private fB: FormBuilder,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.playerForm = this.fB.group({
      name: '',
      points: 0, 
      team_name: '',
      skills: '',
    });
  }

  onFormSubmit() {
    this.playerService.createPlayers(this.playerForm.value).subscribe({
      next: (res) => {
        console.log('success');

        alert('Player Added Successfully');
        this.router.navigateByUrl('admin/players');
      },
    });
  }


  cancel() {
    this.router.navigateByUrl('admin/players');
  }


}
