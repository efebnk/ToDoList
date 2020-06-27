import { NgModule } from "@angular/core";
import { StatusService } from "./status.service";
import { ToDosService } from "./to-dos.service";

const SERVICES = [StatusService, ToDosService];

@NgModule({
  providers: [SERVICES],
})
export class ServiceModule {}
