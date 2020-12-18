console.log('from main.js');

const BrowserWindow=require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
const newWindowBtn = document.getElementById('newWindowBtn');

let winnew=new BrowserWindow({
        webPreferences: {         
                nativeWindowOpen: true,
                nodeIntegration: true,
                enableRemoteModule: true
            },
      });

  winnew.loadURL(url.format({
    pathname:path.join(__dirname,'index0.html'),
    protocol:'file',
    slashes:true
  }));

newWindowBtn.addEventListener('click', function (event) {
    let winThree = new BrowserWindow({
      webPreferences: {
              nativeWindowOpen: true,
              nodeIntegration: true
          },
    });
    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'threeWindow.html'),
        protocol: 'file:',
        slashes: true
      }));
    winThree.webContents.openDevTools();
    });