import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '@services/character';
import { Character } from '@entities/character.entity';
import { Event } from '@entities/event.entity';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;
  events: Event[] = [];
  tag!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _characterServ: CharacterService,
    private _changeDet: ChangeDetectorRef,
  ) {}

  async ngOnInit(): Promise<void> {
    this.tag = this._activatedRoute.snapshot.params['tag'];
    const { character, events } = await this._characterServ.getCharacter(this.tag);
    this.character = character;
    this.events = events;

    await this._characterServ.get();
    this._changeDet.detectChanges();
  }
}
