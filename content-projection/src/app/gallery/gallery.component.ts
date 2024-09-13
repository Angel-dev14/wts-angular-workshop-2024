import { Component } from '@angular/core';
import { FrameComponent } from '../frame/frame.component';
import { HeaderDirective } from '../header.directive';
import { FrameHeaderDirective } from '../frame-header.directive';
import { MyCustomHeaderComponent } from '../my-custom-header/my-custom-header.component';
import { FrameActionFooterComponent } from '../frame-action-footer/frame-action-footer.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    FrameComponent,
    HeaderDirective,
    FrameHeaderDirective,
    MyCustomHeaderComponent,
    FrameActionFooterComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
