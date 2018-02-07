import { AngularFirestore } from 'angularfire2/firestore';
import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;

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

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          labels: ["Spent", "Unspent"],
          datasets: [{
              label: 'How much spent',
              data: [10, 90],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ]
          }]
      }

  });

  }

  logout() {
    console.log("Logout clicked");
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
