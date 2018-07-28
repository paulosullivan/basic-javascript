import {a} from './7-modules-export';
console.log(a); 

// Compiling the import file also compiles the export file
// node 7-modules-import.js -> prints the console output from both files
// It printed the console output from the exported file first.
// So be careful about putting commands into export files