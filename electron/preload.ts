/**
 * PRELOAD SCRIPT
 * 
 * Expose any other API objects you want to the renderer process
 * Make sure to place them into the API folder and import them here
 * Everything you expose here will be available in the renderer process via the global Window object.
 * For example, if you expose the Test object, you can access it in the renderer process via the global Window object like this:
 * ```window.Test;``` or ```window.Test.hello();```
 * 
 * The `electron-declaraction` script will automatically add objects found in the API folder into the global Window object in the renderer process.
 * You can find the generated file in the `src` folder named `electron.d.ts`.
 * This is done to allow intellisense to work in your angular project.
 */

import { contextBridge } from 'electron';
import { Test } from './API/test';

// Expose the Test object to the renderer process
contextBridge.exposeInMainWorld('Test', Test);
