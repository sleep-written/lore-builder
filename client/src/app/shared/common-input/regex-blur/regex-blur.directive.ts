import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appRegexBlur]'
})
export class RegexBlurDirective implements OnInit {
  @Input('appRegexBlur')
  regex!: string;

  @Input()
  onInput = false;

  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    private _ngControl: NgControl,
    private _renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    if (typeof this.regex !== 'string') {
      throw new Error('You must set the regex to use');
    }

    let htmlInput = this
      ._elementRef
      .nativeElement as HTMLInputElement | HTMLTextAreaElement;

    if (
      !(htmlInput instanceof HTMLInputElement) &&
      !(htmlInput instanceof HTMLTextAreaElement)
    ) {
      htmlInput = (htmlInput as HTMLElement).querySelector('input,textarea') as any;
      if (!htmlInput) {
        throw new Error('input or textarea not found');
      }
    }

    this._renderer.listen(
      htmlInput,
      'blur',
      () => this.launch(htmlInput)
    );
    
    if (this.onInput) {
      this._renderer.listen(
        htmlInput,
        'input',
        () => this.launch(htmlInput)
      );
    }
  }

  launch(htmlInput: HTMLInputElement | HTMLTextAreaElement): void {
    // Capture input
    let value = this._ngControl?.control
      ? this._ngControl.control.value
      : htmlInput.value;

    // Create regex
    if (typeof value === 'string') {
      const regex = new RegExp(this.regex, 'gi');
      value = value.replace(regex, '');
    }

    htmlInput.value = value ?? '';
    this._ngControl?.control?.setValue(value);
  }
}
