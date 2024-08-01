import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: "", redirectTo: "signin", pathMatch: "full" },
    { path: "signin", pathMatch: "full", component: LoginComponent },
    { path: "signup", pathMatch: "full", component: SignupComponent },
    { path: "dashboard", pathMatch: "full", component: LayoutComponent },
    { path: "**", redirectTo: "signin", pathMatch: "full" },
];
