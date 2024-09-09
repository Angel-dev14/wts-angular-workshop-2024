import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    path: 'trip-detail',
    loadComponent: () => import('./trip-detail/trip-detail.component')
      .then(c => c.TripDetailComponent),
      children: [
        { path: 'reviews', component: ReviewsComponent },
        { path: 'gallery', component: GalleryComponent }
      ]
  },
  {
    path: 'destinations',
    component: DestinationsComponent,
  }
];
