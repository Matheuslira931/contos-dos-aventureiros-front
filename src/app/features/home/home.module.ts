import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'src/app/shared/componets/buttons/buttons.module';
import { ModalModule } from 'src/app/shared/componets/modal/modal.module';
import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(HomeRouting),
    ButtonsModule
  ]
})
export class HomeModule { }
