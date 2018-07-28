"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _7_modules_export_1 = require("./7-modules-export");
var _ = __importStar(require("lodash"));
var veh = new _7_modules_export_1.Vehicle("12345T", "Opel", "Astra");
veh.printProps();
var indexArray = [1, 2, 3, 4, 5];
console.log(_.reverse(indexArray));
