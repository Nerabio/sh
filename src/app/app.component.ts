import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title = "newApp";

  public message: string;

  constructor(private dataService: DataService) {
    this.message = "sefsefsefs";
  }

  changeMessage(): string[] {
    this.onChange(this.message);
    let data = this.dataService.getData();
    console.log(data);
    return data;
  }

  onChange(message: string) {
    this.dataService.addData(message);
  }
}
