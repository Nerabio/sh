import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeviceViewModel } from "./DeviceViewModel";
import { AppConfig } from "../../AppConfig";
import { DeviceRelations } from "./DeviceRelations";

@Injectable()
export class RelationsService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {
    this.baseUrl = this.appConfig.webapiUrl + "Relations/";
  }

  getDeviceRelations(): Observable<DeviceRelations[]> {
    return this.httpClient.get<DeviceRelations[]>(this.baseUrl + "list");
  }

  createRelation(relation: DeviceRelations): Observable<DeviceRelations> {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.post<DeviceRelations>(
      this.baseUrl + "create",
      relation,
      options
    );
  }

  deleteRelationById(id: number): Observable<Response>{
    return this.httpClient.get<Response>(this.baseUrl + "delete/" + id);
  }
}
