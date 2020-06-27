import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  logIn(model: any) {
    localStorage.setItem("isLogged", "yes");
  }

  loggedIn() {
    if (localStorage.getItem("isLogged") == "yes") {
      return true;
    } else {
      false;
    }
  }

  logOut() {
    localStorage.setItem("isLogged", "no");
    this.router.navigateByUrl("/login-form");
    console.log("logged out!");
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.loggedIn();
    const isLoginForm = route.routeConfig.path === "login-form";

    if (isLoggedIn && isLoginForm) {
      this.router.navigate(["/"]);
      return false;
    }

    if (!isLoggedIn && !isLoginForm) {
      this.router.navigate(["/login-form"]);
    }

    return isLoggedIn || isLoginForm;
  }
}
