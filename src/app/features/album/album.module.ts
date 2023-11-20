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


@NgModule({
  declarations: [
    AlbumComponent,
    ListComponent,
    EditProfileComponent
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
  ]
})
export class AlbumModule { }
