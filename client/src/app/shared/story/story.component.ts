import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { CommonInputModule } from '@shared/common-input';

import { Story } from '@entities/story.entity';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,

    CommonInputModule,
  ],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  form = this._fb.nonNullable.group({
    id:           [ undefined as number | undefined ],
    title:        [ '', [ Validators.required ] ],
    description:  [ '', [ Validators.required ] ],
  });

  constructor(
    private _fb: FormBuilder
  ) {}

  getData(story: Story): void {
    this.form.setValue(story);
  }
}
