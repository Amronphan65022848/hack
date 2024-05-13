import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-texttospeach',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './texttospeach.component.html',
  styleUrl: './texttospeach.component.css'
})
export class TexttospeachComponent {
   speech = [
    {
      img : '../../../assets/img/voice.png',
      Category : '100+ Voices',
      title : 'Natural Sound Voices' ,
      description: 'BOTNOI VOICE Provides natural sounds with real time conversions  '
   },
   {
    img : '../../../assets/img/Group.png',
    Category : 'AUTOSAVING',
    title : 'Your current projects' ,
    description: 'Effortless project management'
  }

  ]
}
