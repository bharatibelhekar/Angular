import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sname:String;
  public showInfo(event)
  {
    console.log(this.sname);
    event.preventDefault();
  }
}
