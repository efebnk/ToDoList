import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./services/auth.service";
import { AppInfoService } from "./services/app-info.service";
import { DxModule } from "./dx.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginFormComponent],
  imports: [BrowserModule, AppRoutingModule, DxModule],
  providers: [AuthService, AppInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
