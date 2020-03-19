import { Component, OnInit } from '@angular/core';
import { DeviceRelations } from '../shared/DeviceRelations';
import { RelationsService } from '../shared/relations.service';

@Component({
  selector: 'app-device-relations',
  templateUrl: './device-relations.component.html',
  styleUrls: ['./device-relations.component.css']
})
export class DeviceRelationsComponent implements OnInit {

  public relations: DeviceRelations[];

  constructor(private relationsService: RelationsService) { }

  ngOnInit() {
    this.getRelations();
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

}
