import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { ProfilePage } from './../profile/profile';
import { GoalsPage } from '../goals/goals';
import { TrackPage } from '../track/track';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GoalsPage;
  tab3Root = TrackPage;
  tab4Root = ProfilePage;
  tabParams = {};
  uid: string;

  constructor(public navParams: NavParams) {
    this.uid = this.navParams.get('userid');
    console.log(this.uid);
    this.tabParams = { id: this.uid };
  }
}
