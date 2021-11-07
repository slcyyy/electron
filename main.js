/*
 * @Description: 
 * @Author: CeciRo
 * @Date: 2021-11-07 16:34:52
 * @LastEditTime: 2021-11-07 17:59:46
 */
/*
 * @Date: 2021-11-04 21:51:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 11:32:01
 * @Description: 
 */
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron') //使用nodejs的commonjs模块
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { //webpage的属性
      nodeIntegration:true, //使用nodejs的功能
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // require('devtron').install()
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
