import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrameService {

  getDetails() {
    return of({
      price: '99,99$',
      available: true
    })
  }

}
