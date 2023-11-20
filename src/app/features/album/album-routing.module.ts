import { Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListComponent } from './list/list.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { ActualAlbumComponent } from './actual-album/actual-album.component';

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
      },
      {
        path: 'meus-albuns',
        component: MyAlbumsComponent,
      },
      {
        path: 'album-atual/:id',
        component: ActualAlbumComponent,
      }
    ]
  },
];


