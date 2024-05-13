import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-fqa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fqa.component.html',
  styleUrl: './fqa.component.css'
})
export class FqaComponent {
  
  data = [
    {
      icon : '+' ,
       isopen : true ,
      quation : 'What is text to speech (TTS)?',
      discription : ''
    },
    {
      icon : '+' ,
       isopen : false ,
      quation : 'How to convert text to speech?',
      discription : 'Botnoi Voice is the simplest way to convert textinto speech. Simply type the text to be spoken orread aloud, and then select your voiceover from theavailable languages or categories. After customization and generation, it is now available fordownload and sharing. '
    },
    {
      icon : '+' ,
       isopen : false ,
      quation : 'Do I have to subscribe to a monthly plan?',
      discription : "There's no need to. Botnoi voice allows you to choose and pay for only the features and services that meet your needs."
    },
    {
      icon : '+' ,
       isopen : true ,
      quation : 'Do you have an API for Developer? ',
      discription : ''
    },
    {
      icon : '+' ,
       isopen : false ,
      quation : 'Can I try out Botnoi Voice before making a payment? ',
      discription : `Botnoi Voice is the simplest way to convert text into speech. 
      Simply type the text to be spoken or read aloud, andthen select your 
      voiceover from the available languages or categories. After customization and generation, it isnow 
      available for download and sharing.`
    }
  ]
    plus( i:number ){
        this.data[i].isopen = !this.data[i].isopen
        if(this.data[i].isopen) {
          this.data[i].icon = '-'
        }
        else{
          this.data[i].icon = '+'
        }
    }
}
