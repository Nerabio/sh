import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceRelationsComponent } from './device-relations/device-relations.component';


const routes: Routes = [
    { path: 'device/list', component: DeviceListComponent},
    { path: 'device/relations', component: DeviceRelationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DeviceRoutes { 


}
