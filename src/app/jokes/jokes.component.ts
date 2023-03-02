import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes',
  template: `
    // <h2>Jokes</h2>
    // <ul>
    //   <li *ngFor="let joke of jokes">{{ joke.setup }} - {{ joke.punchline }}</li>
    // </ul>
  `,
})
export class JokesComponent implements OnInit {
  jokes: any[] | undefined;

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.getJoke().subscribe(jokes => {
      //this.jokes = jokes;
    });
  }
}
