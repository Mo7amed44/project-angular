import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {

  img: string = '';

  isLightboxOpen:boolean=false
  
  findImg(img: string): void {
    this.img = img;
    this.isLightboxOpen =true;
  }



clear():void{
  this.img='';
  
}


stopPropagation(event:Event):void{
  event.stopPropagation();
}

closeLightbox(): void {
  this.isLightboxOpen = false;
}

}


