import { Component, inject } from '@angular/core';
import { FrameComponent } from '../frame/frame.component';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-frame-action-footer',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './frame-action-footer.component.html',
  styleUrl: './frame-action-footer.component.scss'
})
export class FrameActionFooterComponent {

  frameCompRef = inject(FrameComponent);

  getDetails$() {
    return this.frameCompRef.frameService.getDetails().pipe(
      map((res) => res.price)
    )
  }

}
