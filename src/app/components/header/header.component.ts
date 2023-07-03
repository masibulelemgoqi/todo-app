import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InfoService } from 'src/app/services/info.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private infoService: InfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
    this.title = this.infoService.getAppInfo().name;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleAddTask() {
    this.uiService.toggleTask();
  }

  hasRouter(router: string) {
    return this.router.url == router;
  }
}
