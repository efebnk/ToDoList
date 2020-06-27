import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ModulesComponent } from "./modules.component";
import { ToDosComponent } from "../pages/to-dos/to-dos.component";

const routes: Routes = [
  {
    path: "",
    component: ModulesComponent,
    children: [{ path: "to-dos", component: ToDosComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
