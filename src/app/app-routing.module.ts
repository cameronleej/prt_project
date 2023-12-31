import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GraphsComponent } from './graphs/graphs.component';
import { UsersComponent } from './users/users.component';
import { LogsComponent } from './logs/logs.component';
import { ContributorsComponent } from './contributors/contributors.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'graphs', component: GraphsComponent },     
  { path: 'users', component: UsersComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'contributors', component:ContributorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
