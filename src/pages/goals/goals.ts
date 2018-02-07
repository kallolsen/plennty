import { BuildwealthPage } from './../buildwealth/buildwealth';
import { CreditcardsPage } from './../creditcards/creditcards';
import { DailybudgetPage } from './../dailybudget/dailybudget';
import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html'
})
export class GoalsPage {

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public auth: AuthProvider) {

  }

  logout() {
    console.log("Logout clicked");
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  gotoDailyBudget() {
    this.navCtrl.push(DailybudgetPage);
  }

  gotoCreditCards() {
    this.navCtrl.push(CreditcardsPage);
  }

  gotoBuildWealth() {
    this.navCtrl.push(BuildwealthPage);
  }

}
