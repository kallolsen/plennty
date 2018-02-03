import { AngularFirestore } from 'angularfire2/firestore';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

export interface User {
  id: string,
  name: string,
  phone: string,
  email: string,
  role: string
}

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username: string;
  userphone: string;
  useremail: string;
  userpassword: string;
  activationcode: string;
  newuser: User;

  constructor(
    public afAuth: AngularFireAuth,
    public fs: AngularFirestore,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.useremail, this.userpassword)
      .then(user => {
        if (user != null) {
          console.log(user);
          console.log("Trying to add new user to FS: ", user.uid);
          this.newuser = {
            id: user.uid,
            name: this.username,
            phone: this.userphone,
            email: this.useremail,
            role: "master"
          };
          this.fs.collection('users').doc(user.uid).set(this.newuser)
          .then(d => {
            console.log("User added to FS");
            this.navCtrl.setRoot(TabsPage, {'userid': user.uid});
          })
          .catch(function(error) {
            console.log(error.errormessage);
          });
        }
      })
      .catch(function(error) {
        console.log(error.errormessage);
      });
    //this.navCtrl.setRoot(TabsPage);
  }

}
