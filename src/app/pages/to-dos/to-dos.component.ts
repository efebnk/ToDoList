import { Component, ViewChild, Input } from "@angular/core";
import { ToDosService } from "src/app/services/to-dos.service";
import { StatusService } from "src/app/services/status.service";

@Component({
  selector: "to-dos",
  templateUrl: "./to-dos.component.html",
  styleUrls: ["./to-dos.component.scss"],
})
export class ToDosComponent {
  dataSource: any[];
  status: any[];
  constructor(
    private toDosService: ToDosService,
    private statusService: StatusService
  ) {
    this.dataSource = toDosService.getToDos();
    this.status = statusService.getStatus();
  }
}
