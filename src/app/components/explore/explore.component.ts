import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';




@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [FooterComponent,],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
  changeColor(event: any) {
    const slider = event.target;
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, skyblue ${value}%, #d3d3d3 ${value}%)`;
  }
}
