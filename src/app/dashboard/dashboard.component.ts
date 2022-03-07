import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import { Tiles } from './tiles.model';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
 
     this.items = [
       {heading:'abc', subheading:'xyz', type:'table', cols: 3, rows: 1, y: 0, x: 0},
       {heading:'abc', subheading:'xyz', type:'graph', cols: 3, rows: 1, y: 0, x: 3},
       {heading:'abc', subheading:'xyz', type:'table',cols: 3, rows: 1, y: 0, x: 6},
       {heading:'abc', subheading:'xyz', type:'graph',cols: 3, rows: 1, y: 0, x: 9},
       {heading:'abc', subheading:'xyz', type:'table',cols: 4, rows: 1, y: 1, x: 0},
       {heading:'abc', subheading:'xyz', type:'graph',cols: 4, rows: 1, y: 1, x: 4},
       {heading:'abc', subheading:'xyz', type:'table',cols: 4, rows: 1, y: 1, x: 8}
     ];
   }
 
   changedOptions() {
    //  this.options.api.optionsChanged();
   }
 
   removeItem($event:any,item:any) {
     this.items.splice(this.items.indexOf(item), 1);
   }
 
   addItem() {
     console.log(this.items);
     this.items.push({heading:'abc', subheading:'xyz',type:'graph',cols: 1, rows: 1, y: 0, x: 0});
   }

  

}


export class DialogOverviewExample {

  heading: string;
  subheading: string;
  type: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {heading: this.heading, subheading: this.subheading, type: this.type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.heading = result[0];
      this.subheading = result[1];
      this.type = result[2];
    });
  }

}

@Component({
  selector: 'model',
  templateUrl: './model.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}