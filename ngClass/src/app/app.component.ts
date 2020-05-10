import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent
{
    title: string = 'ngClass Example' ;
    cssStringVar: string= 'red size20';
    cssClass: CssClass = new CssClass();
}

class CssClass {
  red: boolean= true;
  size20: boolean= true;
}


