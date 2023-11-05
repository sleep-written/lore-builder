import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@entities/character.entity';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private _http: HttpClient,
  ) { }

  async create(
    data: {
      tag: string;
      name: string;
      description: string;
    }
  ): Promise<void> {
    const res = this._http.post<void>('api/character', data, {
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });

    return firstValueFrom(res);
  }

  get(): Promise<Character[]> {
    const res = this._http.get<Character[]>('api/character');
    return firstValueFrom(res);
  }
}
