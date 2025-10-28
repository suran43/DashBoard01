import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '../Shared/side-bar/side-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard');
}
