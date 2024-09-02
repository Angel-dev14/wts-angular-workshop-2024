import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trip-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss'
})
export class TripDetailComponent {

  readonly trip = {
    title: "Tropical Paradise in Bali",
    location: "Bali, Indonesia",
    description: `Escape to the serene island of Bali, where turquoise waters meet pristine beaches and lush green landscapes.
    Enjoy a perfect blend of relaxation and adventure as you explore hidden waterfalls, ancient temples, and vibrant local markets.
    Whether you're looking to unwind in a luxury resort, experience the rich culture, or embark on thrilling outdoor activities, Bali has something for everyone.`,
    imageUrl: "/assets/bali.webp",
    photos: [
      "https://example.com/bali-photo1.jpg",
      "https://example.com/bali-photo2.jpg",
      "https://example.com/bali-photo3.jpg",
      "https://example.com/bali-photo4.jpg"
    ],
    reviews: [
      {
        user: "John Doe",
        comment: "An unforgettable experience! Bali is truly a paradise on earth.",
        rating: 5
      },
      {
        user: "Jane Smith",
        comment: "The beaches were stunning, and the culture was fascinating. Highly recommend!",
        rating: 4
      },
      {
        user: "Sam Wilson",
        comment: "A bit crowded during the peak season, but still a fantastic place to visit.",
        rating: 4
      }
    ]
  };

}
