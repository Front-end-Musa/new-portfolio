import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
 { path: '', component: MainPageComponent },
 { path: 'about-me', component: AboutMeComponent },
 { path: 'projects', component: ProjectsComponent }, 
 { path: 'services', component: ServicesComponent },
];
