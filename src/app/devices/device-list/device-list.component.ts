import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../shared/device.service';
import { NgModule } from '@angular/core';
import { DeviceViewModel } from '../shared/DeviceViewModel';
import { DeviceModule } from '../device.module';
import { DeviceStatus } from '../shared/DeviceStatus.enum';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  public devices: DeviceViewModel[];

  constructor(private deviceService: DeviceService) { }

  getDevices(){
    this.deviceService.getDeviceList('https://localhost:44319/api/device').subscribe(data =>{
    // value - результат
    
    this.devices = data;
    console.log(this.devices);
    },
    error => {
        // error - объект ошибки
        console.log(error);
    });
  }

  getDeviceStatus(device: DeviceViewModel): DeviceStatus 
  {
    if(device.isActive && device.isConnected) return DeviceStatus.Connected;
    if(device.isActive && !device.isConnected) return DeviceStatus.NoConnected;
    if(!device.isActive) return DeviceStatus.PowerOff;
  }

  getColorStatus(device: DeviceViewModel): any
  {
    let status = this.getDeviceStatus(device);
    if(status == DeviceStatus.Connected) return {'panel-success': true};
    if(status == DeviceStatus.NoConnected) return {'panel-warning': true};
    if(status == DeviceStatus.PowerOff) return {'panel-danger': true};
  }

  ngOnInit() {
    this.getDevices();
  }

}
