import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Menu } from '@entities/menu';

@Component({
  selector: 'app-nested-container',
  templateUrl: './nested-container.component.html',
  styleUrl: './nested-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedContainerComponent {
  @Input()
  node!: Menu;
}
