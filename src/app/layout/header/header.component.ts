import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'txs-header',
  templateUrl: './header.component.html',
  imports: [RouterModule, CommonModule],

  standalone: true,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  email = localStorage.getItem('email');

  onLogOut(): void{
    localStorage.clear();
  }

}

