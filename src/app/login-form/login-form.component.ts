import { Component, OnInit } from "@angular/core";
import { AppInfoService } from "../services/app-info.service";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  constructor(
    private authService: AuthService,
    private appInfo: AppInfoService,
    private router: Router
  ) {}
  onLoginClick(args) {
    this.authService.logIn(this.model);
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {}
}
