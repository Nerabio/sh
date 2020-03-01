import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceViewModel } from './DeviceViewModel';

@Injectable()
export class DeviceService {
    constructor(private httpClient: HttpClient) { }

    getDeviceList(url: string): Observable<DeviceViewModel[]>{
        return this.httpClient.get<DeviceViewModel[]>(url);
    }
}