import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private httpClient: HttpClient) {}

    getGrids(){
      let url = environment.GRIDS_BASE_URL+environment.GRID.GET_ALL_GRIDS;
      return this.httpClient.get(url);  
    }

    addGrid(gridObj: any){
      let url = environment.GRIDS_BASE_URL+environment.GRID.ADD_GRID;
      // let heading = gridObj.heading;
      // let subheading = gridObj.subheading;
      // let type = gridObj.type;
      // let x = gridObj.x;
      // let y =gridObj.y;
      // let rows =gridObj.rows;
      // let cols =gridObj.cols;
      return this.httpClient.post(url, gridObj ).subscribe(response => console.log(response));
    }

    editGrid(gridObj: any){
      let url = environment.GRIDS_BASE_URL+environment.GRID.UPDATE_GRID;
      console.log(url);
      let gridObj2 = {
        "gridId": gridObj.id,
        "heading": gridObj.heading,
        "subheading": gridObj.subheading,
        "type": gridObj.type,
        "x": gridObj.x,
        "y": gridObj.y,
        "rows": gridObj.rows,
        "cols": gridObj.cols
    }
      return this.httpClient.put(url, gridObj2 ).subscribe(response => console.log(response)); 
    }

    deleteGrid(id: string){
      let url = environment.GRIDS_BASE_URL+environment.GRID.DELETE_GRID+'?gridId='+id;
      console.log(url);
      return this.httpClient.delete(url).subscribe(response => console.log(response));
    }

   
}
