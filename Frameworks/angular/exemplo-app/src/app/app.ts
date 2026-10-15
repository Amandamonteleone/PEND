import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Porta } from './components/porta/porta';

@Component({
  imports: [RouterOutlet, Home, Porta],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exemplo-app');
}
