import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '/about-me', component: AboutMeComponent },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MainPageComponent,
    AboutMeComponent,
    FooterComponent,
    ProjectsComponent,
    ServicesComponent,
    BlogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
