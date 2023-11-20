import { Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListComponent } from './list/list.component';

export const AlbumRouting: Routes = [
  {
    path: '',
    component: AlbumComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'editar-perfil',
        component: EditProfileComponent,
      }
    ]
  },
];


