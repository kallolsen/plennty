import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-track',
  templateUrl: 'track.html'
})
export class TrackPage {

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  logout() {
    console.log("Logout clicked");
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
