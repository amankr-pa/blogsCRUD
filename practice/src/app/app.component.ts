import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 loadedFeature ='blog';

  ngOnInit(){
    firebase.initializeApp({ 
      apiKey: "AIzaSyDMUXX-V0mnl0DFAOiLlWUcrHkDJIl9QkQ",
      authDomain: "ng-blog-f9323.firebaseapp.com"
     });
}

onNavigate(feature: string) {
  this.loadedFeature = feature;
}
}
