import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalSignComponent } from './modal-sign/modal-sign.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ModalCreateAlbumComponent } from './modal-create-album/modal-create-album.component';

@NgModule({
  declarations: [
    ModalLoginComponent,
    ModalSignComponent,
    ModalCreateAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    ButtonsModule
  ],
  exports: [
    ModalLoginComponent,
    ModalSignComponent,
    ModalCreateAlbumComponent
  ]
})
export class ModalModule { }
