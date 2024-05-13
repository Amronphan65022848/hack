import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CorporateComponent } from './components/corporate/corporate.component';
import { TexttospeachComponent } from './components/texttospeach/texttospeach.component';
import { FqaComponent } from './components/fqa/fqa.component';
import { ExploreComponent } from './components/explore/explore.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CorporateComponent,TexttospeachComponent,FqaComponent,ExploreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hackthon';
}
