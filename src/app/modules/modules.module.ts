import { NgModule } from "@angular/core";
import { ModulesComponent } from "./modules.component";
import { ModulesRoutingModule } from "./modules-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ToDosComponent } from "../pages/to-dos/to-dos.component";
import { ToDosService } from "../services/to-dos.service";
import { StatusService } from "../services/status.service";
import { ServiceModule } from "../services/services.module";
import { DxModule } from "../dx.module";

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    ServiceModule,
    DxModule,
  ],
  declarations: [ModulesComponent, ToDosComponent],
})
export class ModulesModule {}
