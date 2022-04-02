import {GridsterItem} from 'angular-gridster2';

export interface Tiles extends GridsterItem{
    id: string;
    heading: string;
    subheading: string;
    type: string;
}