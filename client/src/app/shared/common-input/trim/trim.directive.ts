import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    private _ngControl: NgControl,
    private _renderer: Renderer2,
  ) { }

  ngOnInit(): void {
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
      'input',
      () => this.onInput(htmlInput)
    );

    this._renderer.listen(
      htmlInput,
      'blur',
      () => this.onBlur(htmlInput)
    );
  }

  onInput(htmlInput: HTMLInputElement | HTMLTextAreaElement): void {
    // Capture input
    let value = this._ngControl?.control
      ? this._ngControl.control.value
      : htmlInput.value;

    // Create regex
    if (typeof value === 'string') {
      value = value.trimStart();
    }

    htmlInput.value = value ?? '';
    this._ngControl?.control?.setValue(value);
  }

  onBlur(htmlInput: HTMLInputElement | HTMLTextAreaElement): void {
    // Capture input
    let value = this._ngControl?.control
      ? this._ngControl.control.value
      : htmlInput.value;

    // Create regex
    if (typeof value === 'string') {
      value = value.trim();
    }

    htmlInput.value = value ?? '';
    this._ngControl?.control?.setValue(value);
  }
}
