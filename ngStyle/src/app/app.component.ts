import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent
{

    title: string = 'ngStyle Example' ;
    size: number = 12;
    color: string= 'red';
    styleClass: StyleClass = new StyleClass();
}

class StyleClass {
  color: string= 'blue';
  'font-size.%': number= 150;
  'font-weight': string= 'bold';

}


