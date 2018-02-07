import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailybudgetPage } from './dailybudget';

@NgModule({
  declarations: [
    DailybudgetPage,
  ],
  imports: [
    IonicPageModule.forChild(DailybudgetPage),
  ],
})
export class DailybudgetPageModule {}
