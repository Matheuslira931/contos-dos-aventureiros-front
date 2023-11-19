import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IconModule } from './componets/icons/icon.module';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    IconModule
  ],
  declarations: [
    BottomBarComponent
  ]
})
export class SharedModule {}
