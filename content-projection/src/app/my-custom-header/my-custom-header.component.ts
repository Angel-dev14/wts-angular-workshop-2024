import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-custom-header',
  standalone: true,
  imports: [],
  templateUrl: './my-custom-header.component.html',
  styleUrl: './my-custom-header.component.scss'
})
export class MyCustomHeaderComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('[MyCustomHeaderComponent] init')
  }

  ngOnDestroy(): void {
    console.log('[MyCustomHeaderComponent] destroy')
  }


}
