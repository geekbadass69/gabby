import { RenderMode, ServerRoute } from '@angular/ssr';

// Define server routes, including those imported from feature modules

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: '',
    renderMode: RenderMode.Server
    // Add other supported properties here, such as 'component' if needed:
    // component: Home
  },
   {
    path: 'contact', // This page requires user-specific data, so we use SSR
    renderMode: RenderMode.Server,
  },
];
