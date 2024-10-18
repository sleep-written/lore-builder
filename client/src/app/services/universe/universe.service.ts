import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Universe } from '@entities/universe';
import { firstValueFrom } from 'rxjs';
import { GridView } from '@interfaces/grid-view';

import { QueryString } from '@tool/query-string';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  private _httpClient = inject(HttpClient);

  get(take?: number, skip?: number): Promise<GridView<Universe>> {
    const qs = new QueryString({ take, skip }).toString(true);
    const obs = this._httpClient.get<GridView<Universe>>(`api/universe${qs}`);
    return firstValueFrom(obs);
  }

  set(item: { id?: number; name: string; description: string; }): Promise<Universe> {
    const obs = this._httpClient.post<Universe>(`api/universe`, item, {
      headers: { 'content-type': 'application/json; charset=utf8' }
    });

    return firstValueFrom(obs);
  }

  delete(id: number): Promise<void> {
    const obs = this._httpClient.delete<void>(`api/universe/${id}`);
    return firstValueFrom(obs);
  }
}
