import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { UniverseModalService } from './universe-modal';
import { UniverseService } from '@services/universe';
import { ModalService } from '@shared/modal';
import { Universe } from '@entities/universe';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrl: './universe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniverseComponent implements OnInit {
  private _universeModalServ = inject(UniverseModalService);
  private _universeServ = inject(UniverseService);
  private _changeDet = inject(ChangeDetectorRef);
  private _modalServ = inject(ModalService);

  dataSource = new MatTableDataSource<Universe>();
  loading = false;
  cols = [
    'name',
    'actions'
  ];

  async ngOnInit(): Promise<void> {
    try {
      this.loading = true;
      this._changeDet.detectChanges();

      const resp = await this._universeServ.get();
      this.dataSource.data = resp.data;
      
    } catch (err: any) {
      await this._modalServ.openError(err);

    } finally {
      this.loading = false;
      this._changeDet.detectChanges();

    }
  }

  async setUniverse(universe?: Universe): Promise<void> {
    this.loading = true;
    this._changeDet.detectChanges();

    await this._universeModalServ.open(universe);
    this.ngOnInit();
  }

  async deleteUniverse(universe: Universe): Promise<void> {
    const confirm = await this._modalServ.openConfirm(
      `Are you sure about delete the universe "${universe.name}"?`
    );

    if (!confirm) {
      return;
    }

    this.loading = true;
    this._changeDet.detectChanges();

    await this._universeServ.delete(universe.id);
    this.ngOnInit();
  }
}
