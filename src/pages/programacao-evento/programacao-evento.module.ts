import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramacaoEventoPage } from './programacao-evento';

@NgModule({
  declarations: [
    ProgramacaoEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramacaoEventoPage),
  ],
})
export class ProgramacaoEventoPageModule {}
