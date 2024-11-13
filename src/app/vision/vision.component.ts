import { Component } from '@angular/core';
import { trigger,  style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css',
  // animations: [
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({ opacity: 0 }), // Initial state
  //       animate('1s ease-in', style({ opacity: 1 })) // Animate to final state
  //     ]), transition(':leave', [
  //       animate('1s ease-out', style({ opacity: 0 })) // Animate out
  //     ])
  //   ])
  // ]
})
export class VisionComponent {

}
