import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from './componets/icons/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    IconModule
  ]
})
export class SharedModule {}
