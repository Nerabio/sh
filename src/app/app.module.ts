import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { DataService } from './data.service';
import { UserModule } from './user/user.module';
import { DeviceModule } from './devices/device.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './AppConfig';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    DeviceModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    HttpClientModule,
    NgbModule,
    DxButtonModule
  ],
  providers: [DataService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
