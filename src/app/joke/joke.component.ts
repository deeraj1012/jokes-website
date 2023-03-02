import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
   
})
export class JokeComponent implements OnInit {
  joke: any;

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.getJoke().subscribe(joke => {
      this.joke = joke;
    });
  }
}
