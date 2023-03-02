import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesService } from './jokes.service';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
