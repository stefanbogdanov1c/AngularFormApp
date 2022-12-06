import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="center">
      <h1>Oops! Something went wrong.</h1>
      <p>Take me <a routerLink="/home">home</a>.</p>
    </div>
  `,
  styles: [
    `
      p,
      h1 {
        color: white;
      }
    `,
  ],
})
export class NotFoundComponent {}
