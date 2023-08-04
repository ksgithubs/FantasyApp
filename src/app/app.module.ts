import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyteamComponent } from './myteam/myteam.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CreatenewteamComponent } from './admin/createnewteam/createnewteam.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { CreatecontestComponent } from './admin/createcontest/createcontest.component';
import { AllTeamsComponent } from './admin/all-teams/all-teams.component';
import { UserComponent } from './user/user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PlayerComponent } from './admin/player/player.component';
import { NewplayerComponent } from './admin/newplayer/newplayer.component';
import { FixturesComponent } from './admin/fixtures/fixtures.component';
import { ResultComponent } from './admin/result/result.component';
import { ChangepasswordComponent } from './admin/changepassword/changepassword.component';
import { RulesComponent } from './admin/rules/rules.component';
import { LivematchComponent } from './admin/livematch/livematch.component';
import { EditplayerComponent } from './admin/editplayer/editplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchesComponent,
    LoginComponent,
    SignupComponent,
    MyteamComponent,
    AdminComponent,
    CreatenewteamComponent,
    AllusersComponent,
    CreatecontestComponent,
    AllTeamsComponent,
    UserComponent,
    AdminLoginComponent,
    PlayerComponent,
    NewplayerComponent,
    FixturesComponent,
    ResultComponent,
    ChangepasswordComponent,
    RulesComponent,
    LivematchComponent,
    EditplayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
