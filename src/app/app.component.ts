import { Component, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import { AppConfig } from './AppConfig';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title = "newApp";

  public message: string;

  constructor(private elementRef: ElementRef,
              private appConfig: AppConfig) {
    //Date.prototype.toJSON = function(){ return moment(this).format("YYYY-MM-DDTHH:mm:ss"); }

    const webapiUrl = this.elementRef.nativeElement.getAttribute(
      'webapiUrl'
    );
    this.appConfig.webapiUrl = webapiUrl;
  }


}
