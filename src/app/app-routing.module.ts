import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { CreatecontestComponent } from './admin/createcontest/createcontest.component';
import { CreatenewteamComponent } from './admin/createnewteam/createnewteam.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { MyteamComponent } from './myteam/myteam.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myTeam', component: MatchesComponent },
  { path: 'matches', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/createNew', component: CreatenewteamComponent },
  { path: 'admin/allusers', component: AllusersComponent },
  { path: 'admin/createContest', component: CreatecontestComponent },
  { path: 'admin', component: AdminComponent },
  {path: '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
