import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceViewModel } from './DeviceViewModel';
import { AppConfig } from '../../AppConfig';
import { DeviceRelations } from './DeviceRelations';
import { ParamKey } from './ParamKey';

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

    sendParams(prms: ParamKey): Observable<Response>{
      //https://localhost:44319/api/device/1/input?vals=sd //generalKey:num:777
      let keys = [];

      prms.sectionKey.keys.forEach(function(item, i, arr) {
        keys.push(prms.sectionKey.name+":"+item.name+":"+item.value);
      });
      
      let params = new HttpParams();

      keys.forEach(function(item, i, arr) {
        params = params.append('vals', item);
      });
      

        return this.httpClient.get<Response>(this.baseUrl + prms.deviceId + '/input', { params: params });
    }

}
