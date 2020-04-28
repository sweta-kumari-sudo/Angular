import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h3>Student List</h3>
            <table class="table">
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            </tr>
            <tr *ngFor="let student of list">
            <td>{{student.name}}</td>
            <td>{{student.age}}</td>
            <td>{{student.contact}}</td>
            </tr>
            </table>
            `,
  styles: [`
          table {
            border-collapse: collapse;
          }
          td {
            padding: 1em;
            border: 1px solid black;
          }`]
})
export class AppComponent {
  public list 
   = [
       { name: "Sweta", age: 21 , contact: 9893470215 },
       { name: "Anshu" , age: 20 , contact: 8770925879 },
       { name: "Sakshi" , age: 23 , contact: 6652366021 },
       { name: "Riya" , age: 20 , contact: 1234569870 },
       { name: "Ankita" , age: 19 , contact: 8876589114 }
  ]

}
