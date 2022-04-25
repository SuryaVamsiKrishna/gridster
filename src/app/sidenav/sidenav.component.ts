import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import WidgetsData from './widgets.json';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';


import { DashboardComponent } from '../dashboard/dashboard.component';

interface ExampleWidget {
  type: string;
  heading: string;
  subheading: string;
  poster: string;
  itemId: string;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})



export class SidenavComponent implements OnInit {

  @Output() addEvent  = new EventEmitter<any>();
  @Input() timevalue: boolean;
  @Input() passvalue: string;
  examples: Array<ExampleWidget>;
  isValid: boolean;

  

  constructor() { 
    console.log("Hi");
  }

  ngOnInit(): void {
    this.examples= WidgetsData;
    console.log(this.timevalue);
    
  }


  // onAddTable(){
  //   console.log("hi");  
  //   this.addEvent.emit('table');
  // }

  // onAddGraph(){
  //   this.addEvent.emit('graph');
  // }

  onAdd(type: any){
    this.addEvent.emit(type);
    console.log(this.timevalue);
    if (this.timevalue == undefined) {
      console.log("Hi10");
    }
    else if(!this.timevalue) {
      console.log("this.timevalue");
      window.setTimeout(() => this.timevalue = false, 3000) // the time you want 
      this.timevalue = true;
    }
   }

  

   movies = [
    {
      title: 'Episode I - The Phantom Menace',
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
    },
    {
      title: 'Episode II - Attack of the Clones',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
    },
    {
      title: 'Episode III - Revenge of the Sith',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
    },
    {
      title: 'Episode IV - A New Hope',
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
    },
    {
      title: 'Episode V - The Empire Strikes Back',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg',
    },
    {
      title: 'Episode VI - Return of the Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
    },
    {
      title: 'Episode VII - The Force Awakens',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg',
    },
    {
      title: 'Episode VIII - The Last Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg',
    },
    {
      title: 'Episode IX – The Rise of Skywalker',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg',
    },
  ];
  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  

}


