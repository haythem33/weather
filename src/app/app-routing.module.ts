import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
   {
  path: 'login',
  component: LoginComponent,
},

{
  path: 'home',
  component: HomeComponent,
},

{
  path: 'register',
  component: RegisterComponent,
},
{
  path: 'dashbord',
  component: DashbordComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
