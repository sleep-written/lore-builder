import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Menu } from '@entities/menu.entity';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private _http: HttpClient,
  ) { }

  get(): Promise<Menu[]> {
    const res = this._http.get<Menu[]>('api/menu', {
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });

    return firstValueFrom(res);
  }
}
