import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(appRoutes), CommonModule],
  providers: [LoginComponent],
})
export class AuthenticationModule {}
