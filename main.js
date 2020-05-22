const {app, BrowserWindow, shell} = require('electron')


let mainWindow

// 创建主窗口，设置了宽高等信息
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 650,
        height: 500,
        webPreferences: {
            // node集成，即是否注入node能力
            nodeIntegration: true
        }
    })

    // 加载主页面内容 index.html
    mainWindow.loadFile('index.html')
    mainWindow.webContents.on('did-finish-load', () => {

    })

    // mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)
