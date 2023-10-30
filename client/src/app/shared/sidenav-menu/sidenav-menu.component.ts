import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuService } from '@services/menu';
import { Menu } from '@entities/menu.entity';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavMenuComponent implements OnInit, OnDestroy {
  #sub!: Subscription;
  menus: Menu[] = [];

  @Output()
  routeChanges = new EventEmitter<void>();

  constructor(
    private _changeDet: ChangeDetectorRef,
    private _menuServ: MenuService,
    private _router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    this.#sub = this._router
      .events
      .subscribe(this.onRouterChanges.bind(this));
  }

  ngOnDestroy(): void {
    this.#sub?.unsubscribe();
  }

  async onRouterChanges(e: any): Promise<void> {
    if (e instanceof NavigationEnd) {
      this.menus = await this._menuServ.get();
      this._changeDet.detectChanges();
      this.routeChanges.emit();
    }
  }
}
