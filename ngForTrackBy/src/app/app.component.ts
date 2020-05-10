import { Component, ɵAPP_ID_RANDOM_PROVIDER, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  items=[];
  mItem="";
  
  removeItem(i) {
    this.items.splice(i,1);
  }

  addItem() {
    this.items.push(this.mItem)
    this.mItem=""
  }


  title: string = "Top 5 Movies";
  
  movies=[];
  

  mTitle:string="";
  mDirector:string="";


  ngOnInit() {
    this.Refresh();
  }

  remove(i) {
    this.movies.splice(i,1);
  }

  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }


  Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]

    this.items=[
      "PC","Laptop","Mobile","Monitor"
    ];
  }

  trackByFn(index, item) {
    return item.title;
  }

  trackByFnMultipleFields(index, item) {
    return item.title + item.director;
  }
}

class Movie {
  title: string;
  director: string;
}