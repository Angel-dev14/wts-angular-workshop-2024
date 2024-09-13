import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[frameHeader]',
  standalone: true
})
export class FrameHeaderDirective {

  templateRef = inject(TemplateRef);

}
