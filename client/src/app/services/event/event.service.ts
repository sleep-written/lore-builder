import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  #headers = {
    'Content-Type': 'Application/json; charset=utf-8'
  };

  constructor(
    private _http: HttpClient,
  ) { }

  create(
    data: {
      tag:          string;
      title:        string;
      date:         Date;
      description:  string;
      details:      string;
    }
  ): Promise<void> {
    const obs = this._http.post<void>(`api/event`, data, {
      headers: this.#headers
    });

    return firstValueFrom(obs);
  }
}
