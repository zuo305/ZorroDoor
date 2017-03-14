import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

	radioModel: string = 'Middle';

	menuArray = ['Home','Playing','People','Friends'];


  constructor() { }


  ngOnInit() {
  }

}
