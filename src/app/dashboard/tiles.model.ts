import {GridsterItem} from 'angular-gridster2';

export interface Tiles extends GridsterItem{
    heading: string;
    subheading: string;
    type: string;
}