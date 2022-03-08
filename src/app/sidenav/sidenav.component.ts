import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  

  onAddTable(){
    let temp = new DashboardComponent();
    DashboardComponent.addItem('table');
  }

  onAddGraph(){
    let temp = new DashboardComponent();
    DashboardComponent.addItem('graph');
  }

}
