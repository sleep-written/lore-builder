import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuService } from '@services/menu';
import { Menu } from '@entities/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {
  private _changeDet = inject(ChangeDetectorRef);
  private _menuServ = inject(MenuService);
  private _router = inject(Router);

  #subscription?: Subscription;
  menus: Menu[] = [];

  @Output()
  routerChange = new EventEmitter<NavigationEnd>();

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.#subscription = this._router.events
      .subscribe(this.onRouterEvent.bind(this));
  }

  ngOnDestroy(): void {
    this.#subscription?.unsubscribe();
  }

  async onRouterEvent(e: any): Promise<void> {
    if (!(e instanceof NavigationEnd)) { return; }
    
    try {
      this.routerChange.emit(e);
      this.menus = await this._menuServ.get();

    } catch (err) {
      console.error(err);

    } finally {
      this._changeDet.detectChanges();

    }
  }
  
  hasChildren(node: Menu): boolean {
    return (
      node.children != null &&
      node.children.length > 0
    );
  }
}
