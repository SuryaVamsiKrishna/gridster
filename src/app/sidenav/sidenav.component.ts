import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() addEvent  = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  

  onAddTable(){
    this.addEvent.emit('table');
  }

  onAddGraph(){
    this.addEvent.emit('graph');
  }

}
