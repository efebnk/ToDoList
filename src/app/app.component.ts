import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  title = "ToDoList";
  isAutorized() {
    return this.authService.loggedIn();
  }

  onLogOutClick(args) {
    this.authService.logOut();
  }
}
