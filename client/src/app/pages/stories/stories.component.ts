import { Component } from '@angular/core';

import { FlexGridTileModule } from '@shared/flex-grid-tile';
import { StoryComponent } from '@shared/story';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [
    FlexGridTileModule,
    StoryComponent,
  ],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss'
})
export class StoriesComponent {

}
