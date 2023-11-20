import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottomBarModule } from 'src/app/shared/componets/bottom-bar/bottom-bar.module';
import { HeaderModule } from 'src/app/shared/componets/header/header.module';
import { AlbumRouting } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AlbumComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AlbumRouting),
    BottomBarModule,
    HeaderModule,
  ]
})
export class AlbumModule { }
