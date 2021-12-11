const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");

let mainWindow = null;
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 900,
    title: "mp3quran",
    icon: "./mp3quran.png",
  });
  mainWindow.loadURL("http://www.mp3quran.net/ar");
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });
}
