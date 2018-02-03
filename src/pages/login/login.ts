import { RegisterPage } from './../register/register';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  useremail: string;
  userpassword: string;

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.useremail = "";
    this.userpassword = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log(this.useremail, this.userpassword);
    this.afAuth.auth.signInWithEmailAndPassword(this.useremail, this.userpassword)
      .then(user => {
        if (user != null) {
          console.log(user.uid);
          this.navCtrl.setRoot(TabsPage, {
            userid: user.uid
          });
        }
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }

  goToRegisterPage() {
    this.navCtrl.setRoot(RegisterPage);
  }

}
