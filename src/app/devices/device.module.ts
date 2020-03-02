import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceRoutes } from './device.routing';
import { DeviceService } from './shared/device.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    DeviceRoutes,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [DeviceService],
  declarations: [DeviceListComponent]
})
export class DeviceModule { }
