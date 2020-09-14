import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherwebPage } from './otherweb';

@NgModule({
  declarations: [
    OtherwebPage,
  ],
  imports: [
    IonicPageModule.forChild(OtherwebPage),
  ],
})
export class OtherwebPageModule {}
