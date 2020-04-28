import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h2 [class]="styleClass">
            {{message}}
            </h2>


            <h1>
            Student Login Form
            </h1>
            <div>
            <label>UserName: </label>
            <input [(ngModel)]="name" #userName type="text" placeholder="Enter Username" name="username">
            <br><br>
            <label>Password: </label>
            <input [(ngModel)]="pwd" #password type="password" placeholder="Enter Password" name="password">
            <br><br>
            <button [disabled]="!name || !pwd" (click)="logMessage(userName.value, password.value)">Submit</button>
            </div>`,
  styles: [`
          .text-success {
           color: green;
           }
          .text-danger {
          color: red;
        }`

  ]
})
export class AppComponent {
  public userName = "Sweta"
  public password = "admin";
  // public successClass = "text-success";
  public styleClass = ""
  public name = ""
  public pwd = ""
  public message;

 
  
  
  logMessage(userName,password){
    console.log(userName);
    console.log(password);
    if(userName === this.userName && password === this.password){
      this.styleClass="text-success"
      this.message = "Successfully Logged in"
    console.log("Login successfull");
    // this.isDisplayed = true
    }
    else if(userName === this.userName && password !== this.password){
      this.styleClass="text-danger"
      this.message="Incorrect password"
      // this.isDisplayed = false
      console.log("Incorrect password");
    }
    else if(userName !== this.userName && password === this.password){
      this.styleClass="text-danger"
      this.message="Incorrect userName"
      // this.isDisplayed = false
      console.log("Incorrect UserName");
    }
     }

    //  <div *ngIf="isDisplayed; then thenBlock; else elseBlock"></div>
    //  <ng-template #thenBlock>
    // <h2 [class]="successClass">
    //   Successfull Login
    // </h2>
    // </ng-template>

    // <ng-template #elseBlock>
    // <h2 [class]="dangerClass">Unsuccessfull</h2>
    // </ng-template>

     
     
}
