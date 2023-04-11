// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  STRIPE_PUBLISHABLE_KEY:
    'pk_live_51Mv6N6KV4ia5PwUL3iaZkqQteyVyxtJX6HN5TZi1U50BDcatAl8AAdZShQyFb2p2v19a7OgFFiEa9ZwOJL1VwyyL0077nALaYl',
  contentfulVolidaEvents: {
    spaceId: 'dt4p1vme6bp9',
    token: 'GmuP75B48SiWSBu9fY6Nw9l826e8NYwjc2x0jllo9qw',
    contentTypeIds: {
      product: 'volidaEvents',
    },
  },
  contentfulVolidaNews: {
    spaceId: 'dt4p1vme6bp9',
    token: 'eLild2TUl5z-Sj3dA7FO1lBS8Fm6tZtG8pyHsuXTwcI',
    contentTypeIds: {
      product: 'news',
    },
  },
  contentfulVolidaFilms: {
    spaceId: 'dt4p1vme6bp9',
    token: 'a5avuDqcJhzqnH63A-L_iTUAMPdEFuSlRggn5Kt2KXw',
    contentTypeIds: {
      product: 'volidaFilms',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
