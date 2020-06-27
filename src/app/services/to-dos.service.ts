import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class ToDosService {
  getToDos() {
    return toDos;
  }
}

let toDos: any[] = [
  {
    Id: 1,
    Do: "Go Home",
    Date: "2020/11/08",
    StatusId: 1,
  },
  {
    Id: 2,
    Do: "Go Shop",
    Date: "2019/05/06",
    StatusId: 2,
  },
  {
    Id: 3,
    Do: "Go Hotel",
    Date: "2021/09/04",
    StatusId: 2,
  },
];
