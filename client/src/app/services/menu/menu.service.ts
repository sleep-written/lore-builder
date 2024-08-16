import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Menu } from '@entities/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _httpClient = inject(HttpClient);

  get(): Promise<Menu[]> {
    const obs = this._httpClient.get<Menu[]>('/api/menu');
    return firstValueFrom(obs);
  }
}
