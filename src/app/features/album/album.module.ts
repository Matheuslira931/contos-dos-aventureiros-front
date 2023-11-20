import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottomBarModule } from 'src/app/shared/componets/bottom-bar/bottom-bar.module';
import { HeaderModule } from 'src/app/shared/componets/header/header.module';
import { AlbumRouting } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { ListComponent } from './list/list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ButtonsModule } from 'src/app/shared/componets/buttons/buttons.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/componets/card/card.module';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { UpdateListService } from 'src/app/core/services/feature/album/updateList.service';
import { ActualAlbumComponent } from './actual-album/actual-album.component';


@NgModule({
  declarations: [
    AlbumComponent,
    ListComponent,
    EditProfileComponent,
    MyAlbumsComponent,
    ActualAlbumComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AlbumRouting),
    BottomBarModule,
    HeaderModule,
    ButtonsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    CardModule
  ],
  providers: [UpdateListService],
})
export class AlbumModule { }
