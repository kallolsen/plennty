import { AngularFirestore } from 'angularfire2/firestore';
import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dateTimeNow: Date;
  uid: string;
  userName: string;

  constructor(public afAuth: AngularFireAuth, public fs: AngularFirestore, public navCtrl: NavController, public navParams: NavParams) {
    this.uid = this.navParams.get('id');
    this.dateTimeNow = new Date();
    fs.collection('users').doc(this.uid).valueChanges().subscribe(user => {
      console.log(user);
      this.userName = user['name'];
      console.log(this.userName);
    })
  }

  logout() {
    console.log("Logout clicked");
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
