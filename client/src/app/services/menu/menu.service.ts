import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Menu } from '@entities/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(
    private _httpClient: HttpClient
  ) { }

  get(): Promise<Menu[]> {
    const obs = this._httpClient.get<Menu[]>('/api/menu');
    return firstValueFrom(obs);
  }
}
