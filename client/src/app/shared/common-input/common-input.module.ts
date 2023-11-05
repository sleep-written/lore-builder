import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrimDirective } from './trim';
import { RegexBlurDirective } from './regex-blur';
import { UppercaseDirective } from './uppercase';
import { LowercaseDirective } from './lowercase';

@NgModule({
  declarations: [
    TrimDirective,
    RegexBlurDirective,
    UppercaseDirective,
    LowercaseDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrimDirective,
    RegexBlurDirective,
    UppercaseDirective,
    LowercaseDirective,
  ]
})
export class CommonInputModule { }
