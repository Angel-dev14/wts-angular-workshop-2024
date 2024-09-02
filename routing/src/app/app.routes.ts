import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';

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
  },
  {
    path: 'destinations',
    component: DestinationsComponent,
  }
];

//   this will be child routes for trip-details
//todo reviews nested route
// { path: 'reviews', component: ReviewsComponent },
//todo photo gallery nested route
// { path: 'gallery', component: GalleryComponent },
