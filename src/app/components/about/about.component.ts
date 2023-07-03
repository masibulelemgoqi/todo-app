import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  appName: string;
  version: string;
  constructor(private infoService: InfoService) {}
  ngOnInit(): void {
    const info = this.infoService.getAppInfo();
    this.appName = info.name;
    this.version = info.version;
  }
}
