// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBFOWbfIX95dX0Qb1QGomeZKME_XR9dTok",
    authDomain: "rsschool-angular.firebaseapp.com",
    databaseURL: "https://rsschool-angular.firebaseio.com",
    projectId: "rsschool-angular",
    storageBucket: "rsschool-angular.appspot.com",
    messagingSenderId: "924422201633"   
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
