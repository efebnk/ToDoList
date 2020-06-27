import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AuthGuardService } from "./services/auth.service";

const routes: Routes = [
  {
    path: "modules",
    loadChildren: () =>
      import("./modules/modules.module").then((m) => m.ModulesModule),
    canActivate: [AuthGuardService],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "login-form",
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "**",
    redirectTo: "home",
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
