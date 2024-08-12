import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'client';
  opened = false;

  constructor(
    private _changeDet: ChangeDetectorRef,
  ) {}

  onRouteChange(): void {
    this.opened = false;
    this._changeDet.detectChanges();
  }
}
