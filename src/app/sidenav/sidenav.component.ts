import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import WidgetsData from './widgets.json';
import { DashboardComponent } from '../dashboard/dashboard.component';

interface ExampleWidget {
  type: string;
  heading: string;
  subheading: string;
  itemId: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() addEvent  = new EventEmitter<any>();
  examples: Array<ExampleWidget>;
  isValid: boolean;



  constructor() { 
  
  }

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

  onAdd(type: any){
    this.addEvent.emit(type);

   }

  

}
