const { app, protocol, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {

  // protocol.interceptFileProtocol('file', (request, callback) => {
  //     const url = request.url.substr(7);
  //     console.log(path.resolve(path.join('app/build/', url)));
  //     callback({path:  path.resolve(path.join('app/build/', url))});
  //   }, (error) => {
  //     if (error) {
  //       console.error('Failed to register protocol');
  //     }
  // });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 400, 
    height: 200, 
    backgroundColor: '#2e2c29'
  });

 // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    protocol: 'file', 
    slashes: true, 
    pathname: path.join(__dirname, 'index.html'),
  }));

  // Open the DevTools. 
		//mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
