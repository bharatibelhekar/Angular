import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
   {{ header }}
  </h1>
  <h2>
    {{ subHeader }}
   </h2>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Marvellous Infosystems';
  subHeader = 'Educating for better tomorrow';
}
