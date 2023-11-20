import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAdComponent } from './card-ad/card-ad.component';
import { IconModule } from '../icons/icon.module';
import { AlbumCardComponent } from './album-card/album-card.component';



@NgModule({
  declarations: [
    CardAdComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    CardAdComponent,
    AlbumCardComponent
  ]
})
export class CardModule { }
