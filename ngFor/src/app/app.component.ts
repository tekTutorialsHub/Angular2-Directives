import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{ 
    title: string ="Top 6 Movies" ;


    movies: Movie[] =[
   
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
    {title:'Avengers: Age of Ultron',director:'Joss Whedon',cast:'Robert Downey Jr., Chris Evans, Mark Ruffalo',releaseDate:'May 1, 2015'},
    
    /*{title:'Star Wars: The Force Awakens',director:'Colin Trevorrow',cast:'Chris Pratt, Bryce Dallas Howard, Jake M. Johnson',releaseDate:'Dec 12, 2015'},
    {title:'The Hunger Games: Mockingjay - Part 2',director:'Francis Lawrence',cast:'Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth',releaseDate:'November 20, 2015'},
    {title:'Jurassic World',director:'Colin Trevorrow',cast:' Chris Pratt, Bryce Dallas Howard, Jake M. Johnson',releaseDate:'June 12, 2015'},
    {title:'Furious 7',director:'James Wan',cast:' Vin Diesel, Paul Walker, Dwayne Johnson',releaseDate:'April 3, 2015'},
    {title:'Terminator: Genisys',director:'Alan Taylor',cast:'Arnold Schwarzenegger, Emilia Clarke, Jai Courtney',releaseDate:'July 1, 2015'},
    {title:'Ant-Man',director:'Peyton Reed',cast:'Paul Rudd, Evangeline Lilly, Michael Douglas, Corey Stoll',releaseDate:'July 17, 2015'},
    {title:'Mission: Impossible 5 Rogue Nation',director:'Christopher McQuarrie',cast:'Tom Cruise, Jeremy Renner, Simon Pegg, Alec Baldwin',releaseDate:'July 31, 2015'},
    {title:'Tomorrowland',director:'Brad Bird',cast:'Britt Robertson, George Clooney, Judy Greer, Hugh Laurie',releaseDate:'May 22, 2015'},
    {title:'Mad Max: Fury Road',director:'George Miller',cast:'om Hardy, Charlize Theron, Zoë Kravitz',releaseDate:'May 15, 2015'},*/

  ]

  CompositeKey (index,item){
      return item.title + item.director ; 
     }
}


class Movie {

  title : string;
  director : string;
  cast : string;
  releaseDate : string;

}
