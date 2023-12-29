import { AboutMeComponent } from './../about-me/about-me.component';
import { Component } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '/about-me', component: AboutMeComponent },
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
}) 
export class HeaderComponent {
  constructor(
    // private router :Router
  ) {}


}
