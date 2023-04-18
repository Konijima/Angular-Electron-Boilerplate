import { contextBridge } from 'electron';
import { Test } from './API/test';

// Expose the Test object to the renderer process
contextBridge.exposeInMainWorld('Test', Test);
