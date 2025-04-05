import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'posts', 
    loadComponent: () => import('./pages/post-list/post-list.component').then(m => m.PostListComponent) 
  },
  { 
    path: 'create', 
    loadComponent: () => import('./pages/post-create/post-create.component').then(m => m.PostCreateComponent) 
  },
  { 
    path: 'sobre', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) 
  },
  { path: '**', redirectTo: '' }
];