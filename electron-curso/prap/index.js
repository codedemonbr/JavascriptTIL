const electron = require('electron');
const sizeOf = require('image-size');
// import electron from 'electron';

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('obterDimensoesDaImagem', (event, path) => {
    sizeOf(path, function (err, dimensions) {
        console.log(dimensions);
        mainWindow.webContents.send('dimensoesDaImagem', dimensions);
    });
});
