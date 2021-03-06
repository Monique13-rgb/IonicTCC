import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { MyApp } from './app.component';

import { OpenPage } from '../pages/open/open';

import { credentials } from './credentials';
import { FirestoreProvider } from '../providers/firestore/firestore';
import { FirestoreProgramacaoProvider } from '../providers/firestore-programacao/firestore-programacao';
import { FirestorePalestrantesProvider } from '../providers/firestore-palestrantes/firestore-palestrantes';
import {RouterModule} from '@Angular/router';




@NgModule({
  declarations: [
    MyApp,
    OpenPage,

  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(credentials.firebaseConfig),
    AngularFirestoreModule,
    RouterModule,



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OpenPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirestoreProvider,
    FirestoreProgramacaoProvider,
    FirestorePalestrantesProvider
  ]
})
export class AppModule {}
