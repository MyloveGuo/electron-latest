'use strict'

import { app, protocol, BrowserWindow,ipcMain } from 'electron'
import {
  createProtocol,
} from 'vue-cli-plugin-electron-builder/lib'
import os from 'os'
import path from 'path'
import LocalFile from './utils/main/LocalFile'
import windowControl from "./utils/main/windowControl";
import ca from "element-ui/src/locale/lang/ca";
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

const isDevelopment = process.env.NODE_ENV !== 'production'


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let LoadingWindow,
    LoginWindow,
    MainWindow,
    SettingWindow

let CloudSystem = {
  LoginWindow: flag => {
    if (LoginWindow) {
      return windowControl.active(LoginWindow, flag);
    }
    LoginWindow = windowControl.create({
      url: 'login',
      data: flag,
      title: 'Cloud-欢迎',
      width: 850,
      height: 550,
      maximizable: false,
      resizable: false,
      onclose: () => {
        LoginWindow = null;
      }
    });
  }
}

/*初始化ipc*/
function bindIpc(){
  /*系统操作事件*/
  ipcMain.on('system', (event, type, data) => {
    switch (type) {
      case 'close':break;
      case 'minimizable':break;
      }
  });
}

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    //这里是单例模式，当已经存在窗口仍然打开的处理
    if (MainWindow) {
      MainWindow.show();
      MainWindow.restore();
      MainWindow.focus();
    }
  });

  app.on('ready', async () => {
    // 加载 Vue-devtools -- development模式
    if (isDevelopment && !process.env.IS_TEST) {
      try {
        // devtron.install()
        // Install Vue Devtools
        // 根据chrome扩展程序本地文件安装
        await BrowserWindow.addDevToolsExtension(
            path.join(os.homedir(), '/AppData/Local/Google/Chrome/User Data/Default/Extensions/ljjemllljcmogpfapbkkighbhhppjdbg/5.0.0.6_0')
        )
      } catch (e) {
        console.error('Vue Devtools failed to install:', e.toString())
      }
    }
    bindIpc(); //初始化ipc
    createProtocol('app');
    app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
    // 读取ClientID并初始化客户端
    LocalFile.read(
        'client',
        (data, err) => {
          if (err) {
            CloudSystem.LoginWindow({
              clientId:''
            });
          } else {
            if (!data.clientId) {
              return CloudSystem.LoginWindow(data);
            } else {
              CloudSystem.LoadingWindow(data);
            }
          }
        }
    );
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
