import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceViewModel } from './DeviceViewModel';
import { AppConfig } from '../../AppConfig';
import { DeviceRelations } from './DeviceRelations';

@Injectable()
export class DeviceService {
  private baseUrl: string;
    constructor(private httpClient: HttpClient,
                private appConfig: AppConfig) {
                  this.baseUrl =  this.appConfig.webapiUrl + 'device/';
                 }

    getDeviceList(): Observable<DeviceViewModel[]>{
        return this.httpClient.get<DeviceViewModel[]>(this.appConfig.webapiUrl + 'device');
    }

    DeviceToggle(device: DeviceViewModel): Observable<Response>{
        let alias = device.isActive ? 'turnOn/' : 'turnOff/';
        return this.httpClient.get<Response>(this.baseUrl + 'turnOn/' + device.id);
    }


}
