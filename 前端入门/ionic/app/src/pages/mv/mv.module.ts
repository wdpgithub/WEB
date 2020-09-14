import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MvPage } from './mv';

@NgModule({
  declarations: [
    MvPage,
  ],
  imports: [
    IonicPageModule.forChild(MvPage),
  ],
})
export class MvPageModule {}
