import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms"
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isName: boolean = false;
  isNumber: boolean = false;
  isEmail: boolean = false;
  isPass: boolean = false;

  data: string = '';
  text: string = '';
  num: string = '';
  pas: string = '';




  watchLabelName(): void {
    this.isName = true
  }
  watchLabelAge(): void {
    this.isNumber = true
    console.log(typeof this.num);

  }
  watchLabelEmail(): void {
    this.isEmail = true
  }
  watchLabelPAss(): void {
    this.isPass = true
  }




}
