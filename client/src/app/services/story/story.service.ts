import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Story } from '@entities/story.entity';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(
    private _http: HttpClient,
  ) { }

  getAll(): Promise<Story[]> {
    const obs = this._http.get<Story[]>('api/stories');
    return firstValueFrom(obs);
  }
}
