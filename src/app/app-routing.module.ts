import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutingModule: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/album/album.module').then((m) => m.AlbumModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
      }
  ]}
];
