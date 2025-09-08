import { Routes, provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then(m => m.Contact)
  }
];

export const routingProviders = provideRouter(routes);
