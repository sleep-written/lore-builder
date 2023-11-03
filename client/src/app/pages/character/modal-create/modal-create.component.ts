import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})
export class ModalCreateComponent {
  form = new FormBuilder().nonNullable.group({
    tag:          [ '', [ Validators.required, Validators.minLength(1) ] ],
    name:         [ '', [ Validators.required, Validators.minLength(3) ] ],
    description:  [ '', [ Validators.required, Validators.minLength(3) ] ]
  });

  
}
