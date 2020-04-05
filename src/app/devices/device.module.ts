import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceRoutes } from './device.routing';
import { DeviceService } from './shared/device.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DeviceRelationsComponent } from './device-relations/device-relations.component';
import { RelationsService } from './shared/relations.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  DevExtremeModule,
  DxDataGridModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxDropDownBoxModule,
  DxCheckBoxModule,
  DxTextAreaModule,
  DxDateBoxModule,
  DxFileUploaderModule,
  DxSchedulerModule,
  DxPopupModule,
  DxButtonModule,
} from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DeviceRoutes,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    DevExtremeModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFileUploaderModule,
    DxSchedulerModule,
    DxPopupModule,
    DxButtonModule
  ],
  providers: [DeviceService, RelationsService],
  declarations: [DeviceListComponent,DeviceRelationsComponent]
})
export class DeviceModule { }
