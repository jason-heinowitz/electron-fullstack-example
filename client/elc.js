const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  if (process.env.NODE_ENV === 'production') mainWindow.loadURL('http://localhost:80');
  else mainWindow.loadURL('http://localhost:8080');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
