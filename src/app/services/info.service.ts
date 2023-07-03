import { Injectable } from '@angular/core';
import { AppInfo } from '@types';
import { default as app } from '../../../package.json';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private appInfo: AppInfo;
  constructor() {
    this.appInfo = {
      name: 'Todo App',
      version: app.version,
    };
  }

  getAppInfo() {
    return this.appInfo;
  }
}
