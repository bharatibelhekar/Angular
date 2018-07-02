import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public msg="Marvellous Infosystems";
  public funBtnClick()
  {    
    this.msg="Button Clicked";
    console.log("Done");
   }
}
