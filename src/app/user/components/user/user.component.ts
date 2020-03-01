import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public isHide: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isHide = !this.isHide;
  }

}
