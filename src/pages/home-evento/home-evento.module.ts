import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeEventoPage } from './home-evento';

@NgModule({
  declarations: [
    HomeEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeEventoPage),
  ],
})
export class HomeEventoPageModule {}
