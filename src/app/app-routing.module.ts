import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AllTeamsComponent } from './admin/all-teams/all-teams.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { CreatecontestComponent } from './admin/createcontest/createcontest.component';
import { CreatenewteamComponent } from './admin/createnewteam/createnewteam.component';
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
  { path: 'admin/manageContest', component: CreatecontestComponent }, 
  { path: 'admin/allteams', component: AllTeamsComponent }, 
  { path: 'admin', component: CreatenewteamComponent },
  {path: '**', component: SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
