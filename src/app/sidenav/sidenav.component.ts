import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import WidgetsData from './widgets.json';
import { DashboardComponent } from '../dashboard/dashboard.component';

interface ExampleWidget {
  type: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() addEvent  = new EventEmitter<string>();
  examples: Array<ExampleWidget>;


  constructor() { }

  ngOnInit(): void {
    this.examples= WidgetsData;
  }

  

  onAddTable(){
    console.log("hi");  
    this.addEvent.emit('table');
  }

  onAddGraph(){
    this.addEvent.emit('graph');
  }

  onAdd(type: string){
    this.addEvent.emit(type);
  }

}
