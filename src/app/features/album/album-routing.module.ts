import { Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const AlbumRouting: Routes = [
  {
    path: '',
    component: AlbumComponent,
    children: [
      {
        path: 'editar-perfil',
        component: EditProfileComponent,
      }
    ]
  },
];


