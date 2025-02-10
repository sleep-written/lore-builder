import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CharacterModalService } from './character-modal';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrl: './character.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacterComponent {
    private _characterModal = inject(CharacterModalService);
    private _changeDet = inject(ChangeDetectorRef);

    async createCharacter(): Promise<void> {
        await this._characterModal.open();
        this._changeDet.detectChanges();
    }
}
