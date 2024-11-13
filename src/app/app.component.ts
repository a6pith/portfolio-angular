import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { VisionComponent } from './vision/vision.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VisionComponent, 
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
