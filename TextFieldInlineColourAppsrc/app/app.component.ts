import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center">
    <h1>
     {{ title }}
    </h1>
    <input type="text">
  </div>
  
  `,
  styles: [`input{
    color: red;
    background-color: paleturquoise;
    border-color: orchid
}`]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
