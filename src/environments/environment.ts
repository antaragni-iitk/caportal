// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCDqG_OzK9b-YaQ0rpzoOxkDP11U-X9zmE',
    authDomain: 'espalda-fin.firebaseapp.com',
    databaseURL: 'https://espalda-fin.firebaseio.com',
    projectId: 'espalda-fin',
    storageBucket: 'gs://espalda-fin.appspot.com/',
    messagingSenderId: '74163403274'
  },
  contentCollectionName: '_contents_',
  fbAppID: '266808170392437',
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
