import { Injectable } from "@angular/core";

@Injectable()
export class StatusService {
  getStatus() {
    return status;
  }
}

let status: any[] = [
  {
    Id: 1,
    Name: "Draft",
  },
  {
    Id: 2,
    Name: "Completed",
  },
];
