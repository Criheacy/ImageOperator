var electron = require('electron')

var app = electron.app	//APP
var BrowserWindow = electron.BrowserWindow	//WINDOW

var mainWindow = null

app.on('ready', ()=>{
	mainWindow = new BrowserWindow({
		width:800,
		height:600
	})
	mainWindow.loadFile('index.html')

	mainWindow.on('closed',()=>{
		mainWindow = null
	})
})