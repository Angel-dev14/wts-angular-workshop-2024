import { Component } from '@angular/core';
import { FrameComponent } from '../frame/frame.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    FrameComponent,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
