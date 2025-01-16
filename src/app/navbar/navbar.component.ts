import { Component,HostListener  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
      if (window.scrollY > 10) { 
        navbar.classList.remove('py-4');
        navbar.classList.add('py-2');
      } else {
        navbar.classList.remove('py-2');
        navbar.classList.add('py-4');
      }
    }
  }

  isOpen:boolean = false;

  btnNavbar() {
    this.isOpen = true;
  }


  chooseLink() {
    this.isOpen = false;
  }
}
  

