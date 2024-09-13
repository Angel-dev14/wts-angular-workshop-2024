import { Component, contentChild, inject, Injector, Input, signal, TemplateRef } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { HeaderDirective } from '../header.directive';
import { FrameHeaderDirective } from '../frame-header.directive';
import { FrameService } from '../frame.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [
    IconComponent,
    MatIcon,
    NgTemplateOutlet,
    AsyncPipe
  ],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {

  @Input() title!: string;
  toggle = signal(true);
  frameHeader = contentChild(FrameHeaderDirective)
  frameActionFooter = contentChild<TemplateRef<any>>("frameActionFooter")

  frameService = inject(FrameService);
  injector = inject(Injector);

  protected getDetails$() {
    return this.frameService.getDetails().pipe(
      map((res) => res.available)
    )
  }


}
