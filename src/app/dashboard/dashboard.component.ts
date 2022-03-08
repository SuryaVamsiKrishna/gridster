import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import { Tiles } from './tiles.model';
import DashboardData from './dahboard.json';

interface DashboardItemsData {
  heading: string;
  subheading: string;
  type: string;
  x: number;
  y: number;
  rows: number;
  cols: number;
}
 
export interface DialogData {
  heading: string;
  subheading: string;
  type: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   options: GridsterConfig;
   static items: Array<Tiles>;
   tempitems: Array<Tiles>;
  //  Dashboarditems: DashboardItemsData[] = DashboardData ;

   itemChange(item:any, itemComponent:any) {
     console.info('itemChanged', item, itemComponent);
   }
 
   itemResize(item:any, itemComponent:any) {
     console.info('itemResized', item, itemComponent);
   }

   constructor() { }
 
   ngOnInit() {
     this.options = {
       itemChangeCallback: this.itemChange,
       itemResizeCallback: this.itemResize,
       resizable:{enabled:true},
       draggable:{enabled:true},
       swap:true
     };
 
     DashboardComponent.items = DashboardData;
     this.tempitems = DashboardComponent.items;
   }
 
   changedOptions() {
    //  this.options.api.optionsChanged();
   }
 
   removeItem($event:any,item:any) {
    DashboardComponent.items.splice(DashboardComponent.items.indexOf(item), 1);
   }
 
   static addItem(currtype: string) {
     console.log('Hi2');
    //  this.tempitems = DashboardComponent.items;
     this.items.push({heading:'abc', subheading:'xyz',type: currtype,cols: 1, rows: 1, y: 0, x: 0});
     console.log(DashboardComponent.items);
     
   }

   pseudaddItem(currtype: string){
     console.log(this.tempitems);
     DashboardComponent.addItem(currtype);
   }

  

}
