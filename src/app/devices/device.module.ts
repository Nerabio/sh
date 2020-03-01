import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceRoutes } from './device.routing';
import { DeviceService } from './shared/device.service';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  imports: [
    CommonModule,
    DeviceRoutes,
    MatSliderModule,
  ],
  providers: [DeviceService],
  declarations: [DeviceListComponent]
})
export class DeviceModule { }
