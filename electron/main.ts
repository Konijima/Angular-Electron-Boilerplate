import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow | null;

// Create the browser window.
function createWindow() {

    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            sandbox: false,
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    });

    // Emitted when the window is ready to show.
    win.webContents.on('did-finish-load', () => {
        win?.webContents.setVisualZoomLevelLimits(1, 1);
        win?.webContents.setZoomFactor(1);

        // Reload the window when the electron app is recompiled.
        if (process.env.NODE_ENV === 'development') {
            // Open the devtools in development mode.
            win?.webContents.openDevTools({ mode: 'detach' });
        }
        else {
            // disable menu in production mode
            win?.removeMenu();
        }
    });

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null;
    });

    // Load the angular app in development mode.
    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:4200');
    }
    // Load the index.html of the angular app.
    else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, '..', 'dist', 'angular-frontend', 'index.html'),
            protocol: 'file:',
            slashes: true,
        }));
    }
}

// Create window on electron intialization
app.on('ready', createWindow);

// Emitted when all windows have been closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Emitted when the application is activated.
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
