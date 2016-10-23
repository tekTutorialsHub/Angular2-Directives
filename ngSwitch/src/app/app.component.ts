import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent 
{ 
    title: string ="ngSwitch Example" ;
    Num:number=0; 

    items: item[] = [{name: 'One', val:1}, {name: 'Two',val:2}, {name: 'Three',val:3}];
    selectedItem: item =this.items[0];
    selectedValue:string="One";
    selectedValue1="One";
  

    buttonClicked() {
        this.Num= this.Num + 1;
        if (this.Num  > 6) {
            this.Num= 0;
        }
    }


}

class item {
  name:string;
  val:number;
}


