import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditcardsPage } from './creditcards';

@NgModule({
  declarations: [
    CreditcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditcardsPage),
  ],
})
export class CreditcardsPageModule {}
