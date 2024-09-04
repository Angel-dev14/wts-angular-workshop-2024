import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { MatIcon } from '@angular/material/icon';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [
    IconComponent,
    MatIcon,
    NgTemplateOutlet
  ],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {

  @Input() imageName!: string;
  @Input() title!: string;


}
