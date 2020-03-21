import { Component, OnInit, TemplateRef } from '@angular/core';
import { DeviceService } from '../shared/device.service';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { DeviceViewModel } from '../shared/DeviceViewModel';
import { DeviceModule } from '../device.module';
import { DeviceStatus } from '../shared/DeviceStatus.enum';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DeviceRelations } from '../shared/DeviceRelations';
import { KeyViewModel } from '../shared/KeyViewModel';
import { RelationsService } from '../shared/relations.service';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ParamKey } from '../shared/ParamKey';
import { SectionKeyViewModel } from '../shared/SectionKeyViewModel';
 

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  public devices: DeviceViewModel[];
  public relations: DeviceRelations[];
  public selectRelation: DeviceRelations = new DeviceRelations();
  public paramKey: ParamKey = new ParamKey();
  
  closeResult: string;
  public message: string;
  modalOptions:NgbModalOptions;


  constructor(private deviceService: DeviceService
             ,private relationsService: RelationsService
             , private modalService: NgbModal) {
              this.modalOptions = {
                backdrop:'static',
                backdropClass:'customBackdrop',
                size: "lg"
              }
             }
       
             open(content) {
              this.selectRelation.deviceOutId == null
              this.selectRelation.keyOutId = null;
              this.selectRelation.deviceInId = null;
              this.selectRelation.keyInId = null;

              this.modalService.open(content, this.modalOptions).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
                if(result == 'Save') this.createRelation();
                if(result == 'SaveKeyValue') this.sendParams();
              }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
              });               
            }
            
            private getDismissReason(reason: any): string {
              if (reason === ModalDismissReasons.ESC) {
                return 'by pressing ESC';
              } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
              } else {
                return  `with: ${reason}`;
              }
            }

      changeKeyValue(deviceId: number, sectionKey: SectionKeyViewModel,valumodal: any){
        this.paramKey.deviceId =  null;
        this.paramKey.sectionKey = null;
        this.paramKey.deviceId =  deviceId;
        this.paramKey.sectionKey = sectionKey;
        this.open(valumodal);
      }

      sendParams(){
        this.deviceService.sendParams(this.paramKey).subscribe(data =>{
              console.log(data);
          },
          error => {
              console.log(error);
          });
      }

  getDevices(){
    this.deviceService.getDeviceList().subscribe(data =>{
    this.devices = data;
    console.log(this.devices);
    },
    error => {
        console.log(error);
    });
  }


  createRelation(){
    this.relationsService.createRelation(this.selectRelation).subscribe(data =>{
          console.log(data);
      },
      error => {
          console.log(error);
      });
  }

  deleteRelation(id: number){
    this.relationsService.deleteRelationById(id).subscribe(data =>{
      console.log(data);
      this.relations = this.relations.filter(r => r.id != id);
    },
    error => {
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

  onChangeToggle(device: DeviceViewModel) {
    device.isActive = !device.isActive;
    if(device.isActive){
      this.deviceService.DeviceToggle(device).subscribe(data =>{
        console.log(data);
        },
        error => {
            console.log(error);
        });
    }
  }

  getRelations(){
    this.relationsService.getDeviceRelations().subscribe(data =>{  
      this.relations = data;
      console.log(this.relations);
      },
      error => {
          console.log(error);
      });
  }

  getDeviceRelationById(deviceId: number): DeviceRelations[]
  {
    return this.relations.filter(d => d.deviceOutId == deviceId || d.deviceInId == deviceId);
  }

  getDeviceKeys(deviceId: number): KeyViewModel[]{
    var keyList = [];

    var device = this.devices.find(d => d.id == deviceId);
    if(device != null){
    device.sectionKey.forEach(function(item, i, arr) {
      item.keys.forEach(function(key, i, keys) {
        keyList.push(key);
      });
    });
  }

    return keyList;
  }

  createDeviceRelation(){
    
  }

  test(){
    console.log(this.selectRelation);
  }

  onChange_DeviceOut(ev: any): void{
    this.selectRelation.deviceOutId = ev.target.value != "null" ? ev.target.value : null;
    if(this.selectRelation.deviceOutId == null){
      this.selectRelation.keyOutId = null;
      this.selectRelation.deviceInId = null;
      this.selectRelation.keyInId = null;
    }
  }

  onChange_keyOut(ev: any): void{
    this.selectRelation.keyOutId = ev.target.value != "null" ? ev.target.value : null;
    if(this.selectRelation.keyOutId == null){
      this.selectRelation.deviceInId = null;
      this.selectRelation.keyInId = null;
    }
  }

  onChange_DeviceIn(ev: any): void{
    this.selectRelation.deviceInId = ev.target.value != "null" ? ev.target.value : null;
    if(this.selectRelation.deviceInId == null){
      this.selectRelation.keyInId = null;
    }
  }

  onChange_keyIn(ev: any): void{
    this.selectRelation.keyInId = ev.target.value != "null" ? ev.target.value : null;
  }



  ngOnInit() {
    this.getDevices();
    this.getRelations();
  }

}
