import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'txs-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  email = localStorage.getItem('email');
}
