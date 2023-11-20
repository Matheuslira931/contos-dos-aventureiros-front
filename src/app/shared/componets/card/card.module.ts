import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { AlbumCardComponent } from './album-card/album-card.component';



@NgModule({
  declarations: [
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    AlbumCardComponent
  ]
})
export class CardModule { }
