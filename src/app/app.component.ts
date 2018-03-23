import { Component , Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      
    


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var config = {
        apiKey: "AIzaSyBBU6mXZ3e9hF2wcPJ2ulGVT98m_A_z8qo",
        authDomain: "privatecontent-7090b.firebaseapp.com",
        databaseURL: "https://privatecontent-7090b.firebaseio.com",
        projectId: "privatecontent-7090b",
        storageBucket: "privatecontent-7090b.appspot.com",
        messagingSenderId: "871299620470"
      };
      firebase.initializeApp(config);
    });
  }

}

