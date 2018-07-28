import {Vehicle} from './7-modules-export';
import * as _ from 'lodash';

var veh = new Vehicle("12345T", "Opel", "Astra");
veh.printProps();

var indexArray : number[] = [1, 2, 3, 4, 5];
console.log(_.reverse(indexArray));
