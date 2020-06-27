import { NgModule } from "@angular/core";

import {
  DxDataGridModule,
  DxSelectBoxModule,
  DxButtonModule,
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule,
  DxPopupModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxTreeListModule,
  DxDateBoxModule,
  DxScrollViewModule,
} from "devextreme-angular";

const DX_MODULES = [
  DxDataGridModule,
  DxSelectBoxModule,
  DxButtonModule,
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule,
  DxPopupModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxTreeListModule,
  DxDateBoxModule,
  DxScrollViewModule,
];
@NgModule({
  imports: [...DX_MODULES],
  exports: [...DX_MODULES],
})
export class DxModule {}
