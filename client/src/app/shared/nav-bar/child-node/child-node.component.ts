import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrl: './child-node.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildNodeComponent {
  @Input()
  name!: string;

  @Input()
  icon?: string | null;

  @Input()
  path?: string | null;
}
