import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './bottom-bar.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icons/icon.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { ModalModule } from '../modal/modal.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [BottomBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    ButtonsModule,
    ModalModule,
    MatMenuModule
  ],
  exports: [BottomBarComponent]
})
export class BottomBarModule { }
