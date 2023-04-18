# Angular Electron Boilerplate
![AngularElectronBoilerplateImage](https://repository-images.githubusercontent.com/629258752/ceb9dbcd-0afd-4cda-84bf-5b5ed62fe65d)
A starter template that combines Angular and Electron for building cross-platform desktop apps. It provides a clean structure and pre-configured settings for Angular and Electron, so you can focus on building your app. Create desktop apps for Windows, macOS, and Linux with web technologies you know.

| [Wiki](https://github.com/Konijima/Angular-Electron-Boilerplate/wiki) | [Discussions](https://github.com/Konijima/Angular-Electron-Boilerplate/discussions) | [Issues](https://github.com/Konijima/Angular-Electron-Boilerplate/issues) |
| - | - | - |

<br>

## Usage
1. Clone the repository:   
    ```git clone https://github.com/Konijima/Angular-Electron-Boilerplate.git```
2. Run npm install:   
    ```npm install```
3. Run in dev mode:  
    ```npm run electron-dev```
4. Build the application:  
    ```npm run electron-build```

<br>

## Scripts 
The `"ng"` script runs the `ng` command, which is used to create new projects, generate components, and more. 

The `"ng-serve"` script runs the `ng serve` command, which starts a local development server for testing purposes. 

The `"ng-build"` script runs the `ng build` command, which builds the project for production. 

The `"ng-watch"` script runs the `ng build --watch --configuration development` command, which watches for changes in the development configuration and rebuilds the project accordingly. 

The `"ng-test"` script runs the `ng test` command, which runs unit tests on the project. 

The `"electron-declaration"` script runs the `node apiDeclaration.js` command, which generates an API declaration file for Electron. 

The `"electron-declaration-watch"` script runs the `nodemon --watch electron/API --ext .ts --exec node apiDeclaration.js` command, which watches for changes in the API directory and regenerates the API declaration file accordingly. 

The `"electron-compile"` script runs the `tsc --project electron && npm run electron-declaration` command, which compiles the Electron project and generates the API declaration file. 

The `"electron-compile-watch"` script runs the `tsc --watch --project electron` command, which watches for changes in the Electron project and recompiles it accordingly. 

The `"electron-start"` script runs the `cross-env NODE_ENV=development electron .` command, which starts the Electron application in development mode. 

The `"electron-watch"` script runs the `cross-env NODE_ENV=development nodemon --watch dist --exec electron .` command, which watches for changes in the dist directory and restarts the Electron application accordingly. 

The `"electron-dev"` script runs the concurrently `"npm run ng-serve" "npm run electron-compile-watch" "npm run electron-declaration-watch" "npm run electron-watch"` command, which runs all of the necessary commands for developing with both Angular and Electron simultaneously. 

Finally, the `"electron-build"` script runs the `npm run ng-build && npm run electron-compile && electron-builder` command, which builds the Angular project, compiles the Electron project, and builds the Electron application.

<br>