import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())    ,
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-tou","appId":"1:431505372611:web:dcb8126e6a2e9c5198f976","storageBucket":"friendlychat-tou.firebasestorage.app","apiKey":"AIzaSyA2a-8v1wlwytrzAFlDNP4Ag3bTrzw0AFo","authDomain":"friendlychat-tou.firebaseapp.com","messagingSenderId":"431505372611"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-tou","appId":"1:431505372611:web:dcb8126e6a2e9c5198f976","storageBucket":"friendlychat-tou.firebasestorage.app","apiKey":"AIzaSyA2a-8v1wlwytrzAFlDNP4Ag3bTrzw0AFo","authDomain":"friendlychat-tou.firebaseapp.com","messagingSenderId":"431505372611"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-tou","appId":"1:431505372611:web:dcb8126e6a2e9c5198f976","storageBucket":"friendlychat-tou.firebasestorage.app","apiKey":"AIzaSyA2a-8v1wlwytrzAFlDNP4Ag3bTrzw0AFo","authDomain":"friendlychat-tou.firebaseapp.com","messagingSenderId":"431505372611"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
