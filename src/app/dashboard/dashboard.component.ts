import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import { Tiles } from './tiles.model';
import { GridService } from '../services/grid.service';

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
   items: Array<Tiles>;
   tempitems: Array<Tiles>;
   gridResult: any;
   gridList: any;
   tempitem : Tiles;
   itemids: any[];
   snakbar: boolean = false;

  //  Dashboarditems: DashboardItemsData[] = DashboardData ;

   itemChange(item:any, itemComponent:any) {
    //  console.info('itemChanged', item, itemComponent);
    //  console.log(this.items);
    //  this.updateGrids();
   }
 
   itemResize(item:any, itemComponent:any) {
    //  console.info('itemResized', item, itemComponent);
    //  console.log(this.items);
    //  this.updateGrids();
   }

   constructor(private gridService: GridService) {}
    
 
   ngOnInit() { 
     this.options = {
       itemChangeCallback: this.itemChange,
       itemResizeCallback: this.itemResize,
       resizable:{enabled:true},
       draggable:{enabled:true},
       swap:true
     };
     this.getGridList();
    //  console.group('Hi');
    //  this.items=[];
    //  this.items = DashboardData;
    //  this.tempitems = DashboardComponent.items;
   }

   updateGrids(){
    
      console.log(this.items.length);
      for(let i=0;i< this.items.length; i++){
      //console.log("Hi4");
      // this.items[i].cols = 2;
      //console.log(this.items[i]);
      this.gridService.editGrid(this.items[i]);
    }
     
    //  this.getGridList();
    // for(let i=0;i< this.items.length+1; i++){
    //   console.log("Hi4");
    //   this.items[i].cols = 2;
    //   console.log(this.items[i].cols);
    //   this.gridService.editGrid(this.items[i]);
    // }
   }

   
  //  getGridList(){
  //   setTimeout(() => {this.items=[];
  //     this.gridService.getGrids().subscribe((data) => {
  //     this.gridResult = data;
  //     this.gridList = this.gridResult.results; 
      
  //     for(let i=0; i<this.gridList.length; i++){
  //       let tempitem={_id:'1', heading:'abc', subheading:'xyz',type: "table",cols: 1, rows: 1, y: 0, x: 0};
  //       tempitem._id = this.gridList[i]._id;
  //       tempitem.heading = this.gridList[i].heading;
  //       tempitem.subheading = this.gridList[i].subheading;
  //       tempitem.type = this.gridList[i].type;
  //       tempitem.x = this.gridList[i].x;
  //       tempitem.y = this.gridList[i].y;
  //       tempitem.rows = this.gridList[i].rows;
  //       tempitem.cols = this.gridList[i].cols;
        
  //       this.items.push(tempitem);
        
  //     }
      
  //    });
  //  }, 1000);
  //  }
 
  getGridList(){
    
      this.gridService.getGrids().subscribe((responseTiles : Tiles[]) => {
      this.items = responseTiles;
      this.itemids = [];

      this.items.forEach((item:any)=>{
        this.itemids.push(item.itemId)
      });
      //console.log(responseTiles);
      //console.log("HI");
      //console.log(this.items);
     });
   
   }

   changedOptions() {
    //  this.options.api.optionsChanged();
   }
 
   removeItem($event:any,id:string) {
     this.gridService.deleteGrid(id);
     this.getGridList();
    // this.items.splice(this.items.indexOf(item), 1);
   }
 
   addItem(currobj: any) {
    //console.log('Hi2');
    if(this.itemids.indexOf(currobj.itemId)> -1)
    {
      this.snakbar = true;
      return;
    }
    this.gridService.addGrid({ "heading":currobj.heading, "subheading":currobj.subheading, "itemId": currobj.itemId, "type": currobj.type,"x": 0, "y": 0, "rows": 1, "cols": 1});
    // console.log(this.items);
    // console.log(this.items[0]);
    // console.log(this.items.length);
    // console.log(this.items);
    // this.updateGrids();
    this.getGridList();
    
    // this.items.forEach(this.updateGrids);
    // for(let x in this.items){
    //   console.log(this.items[x]);
    // }
    
    var that = this;
    // setTimeout(this.getGridList, 3000);

    
    
    //  this.items.push({id:'1', heading:'abc', subheading:'xyz',type: currtype,cols: 1, rows: 1, y: 0, x: 0});
    //  console.log(this.items);
     
   }

  onAddEvent($event:any){
    // console.log($event);
    this.addItem($event);
  }
  

}