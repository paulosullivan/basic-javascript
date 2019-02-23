JAVASCRIPT
 
Interpreted -> no compilation step for developer, but JS engines do run a compilation step (e.g. assigning objects to scopes) before executing/interpreting the code  
Object Oriented -> obj.function() -> console.log("hello")  
First class functions -> functions can be treated like variables. Passed as params, returned from functions, assigned to variables  
Weakly Typed -> var x = 10; x = "10"; x = true;  
Single Threaded -> hence the importance of async operations (like call backs and promises)  
Function Scoped -> as opposed to Java which is block scoped.  

Simple Dev Environments  
    FireFox Console  
    Firefox Scratchpad  
    
Preferred  
	Intellij Ultimate - Can run/debug JS files directly in IDE
    
References  
https://www.youtube.com/user/koushks/playlists?shelf_id=1&sort=dd&view=50  
https://github.com/getify/You-Dont-Know-JS  

======================================================================================================================================

TYPESCRIPT  

Founded by Microsoft  
TS gets transpiled into JS  
Transpiling is a simple form of compilation (where the source and target languages are at a similar level of abstraction)  
It is a typed superset of JS. The flip side is that all JS can also be classed as valid TS  
Transpiles newer JS features (such as ES6 features) into older JS versions  
Runs on all environments that support ECMAScript3 and above (including all browsers and NodeJS) 
Obviously, it is the compilation step that catches any type errors before the code is run.
It also provides a lot of support for IDEs, which can show up errors as you type and give you proper code completion.

Some JS Issues  
We now have classes in JS, but everything is still a var, and so we don't have any type checking  
You can pass any # of parameters to a function  
No final objects  
Newer JS features are not supported by all browsers  

Installation / Running
Download NodeJS which comes with NPM  
Run npm install typescript -g  // -g installs typescript globally as opposed to simply installing it into the current folder  
Write your .ts file  
Compile your .ts file -> tsc myFile.ts  
The compiler will generate a file called myFile.js  
To compile and run your file -> tsc myFile.ts && node myFile.js  

High-level View    
TypeScript	->	NodeJS compiler	->	JavaScript	-> Browser  
												-> NodeJS Runtime  
												-> ...  

Recommended Dev Environment - Visual Studio Code  

Compile Options  
Define name of JS file  
	tsc myFile.ts --out blah.js  
Watch for changes (when ts file is saved) 
	tsc myFile.ts --watch  
More options  
	tsc -help  
Generate tsconfig.json file and compile all ts files  
This gives you a json file with some of the settings uncommented
	tsc --init  
	tsc  
	
// Create Node project  
npm init  -> creates a package.json file  
Add a start command to the script section (e.g. "start" : "tsc && node js/index.js")
npm start

// Download js project from NPM (updates package.json file)  
Collection Utilities  
npm install lodash --save  
Download its type definitions for auto-completion  
npm install @types/lodash --save-dev  
Import files from package as opposed to a folder
import * as _ from 'lodash';