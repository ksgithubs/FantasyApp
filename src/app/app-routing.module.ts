import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AllTeamsComponent } from './admin/all-teams/all-teams.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { ChangepasswordComponent } from './admin/changepassword/changepassword.component';
import { CreatecontestComponent } from './admin/createcontest/createcontest.component';
import { CreatenewteamComponent } from './admin/createnewteam/createnewteam.component';
import { EditplayerComponent } from './admin/editplayer/editplayer.component';
import { FixturesComponent } from './admin/fixtures/fixtures.component';
import { LivematchComponent } from './admin/livematch/livematch.component';
import { NewplayerComponent } from './admin/newplayer/newplayer.component';
import { PlayerComponent } from './admin/player/player.component';
import { ResultComponent } from './admin/result/result.component';
import { RulesComponent } from './admin/rules/rules.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/user', component: UserComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'admin/createNew', component: CreatenewteamComponent },
  { path: 'admin/allusers', component: AllusersComponent },
  { path: 'admin/createContest', component: CreatecontestComponent },
  { path: 'admin/allteams', component: AllTeamsComponent }, 
  { path: 'admin/rules', component: RulesComponent }, 
  { path: 'admin/changeadminpassword', component: ChangepasswordComponent }, 
  { path: 'admin/livematches', component: LivematchComponent }, 
  { path: 'admin/fixtures', component: FixturesComponent }, 
  { path: 'admin/result', component: ResultComponent },
  { path: 'admin/players', component: PlayerComponent }, 
  { path: 'admin/password', component: ChangepasswordComponent }, 
  { path: 'admin/newplayer', component: NewplayerComponent }, 
  { path: 'admin/editplayer', component: EditplayerComponent }, 
  { path: 'admin', component: CreatenewteamComponent },
  {path: '**', component: SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
