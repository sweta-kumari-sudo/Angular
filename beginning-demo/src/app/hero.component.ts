import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <button (click)="onClick($event)">
    Greet
    </button>
    <button (click)="greeting='Welcome Sweta'">
    Greet
    </button>
   <p> {{greeting}}</p>
   <input  #myInput type="text">
   <button (click)="logMessage(myInput.value)">Submit</button>
   <input [(ngModel)]="name" type="text">
   {{name}}
  `,
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  public greeting="Welcome to code-evolution"
  public name=""

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event) {
    console.log(event)
    
  }

  logMessage(value) {
    console.log(value)
    
  }

}
