import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  ImagePath: string;

  constructor() {
  this.ImagePath = '/assets/graph.jpg';
   }


  ngOnInit(): void {
    
    }

}
