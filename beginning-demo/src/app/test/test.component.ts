import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2 class="text-success">
            Welcome {{name}}
            </h2>
            <h2 [class]="successClass">
            Welcome {{name}}
            </h2>
            <h2 class="text-special" [class]="successClass">
            Welcome {{name}}
            </h2>
            <h2 [class.text-danger]="hasError">
            Welcome {{name}}
            </h2>
            <h2 [class]="messageClasses">
            Welcome {{name}}
            </h2>
            <input [id]="myId" type="text" value="Vishwas">
            <input  [disabled]="isDisabled" id="{{myId}}" type="text" value="Vishwas">
            <h2 [style.color]="hasError ? 'red' : 'green'">
            Welcome {{name}}
            </h2>
            <h2 [style.color]="highlightColor">
            Welcome {{name}}
            </h2>
            <h2 [ngStyle]="multiStyle">
            Sweta
            </h2>
              `,
  styles: [`
          .text-success {
            color: green;
          }
          .text-danger {
            color: red;
          }
          .text-special {
            font-style: italic;
          }
          `
        ]
})
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public myId = "testId";
  public isDisabled = true
  public successClass = "text-success"
  public hasError = false
  public isSpecial = true;
  public highlightColor = "orange"
  public multiStyle = {
    color: "Blue",
    fontStyle: "italic"
  }
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
