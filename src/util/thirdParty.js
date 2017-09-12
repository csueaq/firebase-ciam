/**
 * Created by x.jin on 12/09/2017.
 */

import * as firebase from 'firebase';

export function initFirebase () {

    const config = {
        apiKey: "AIzaSyBiAPmOivwv4mta6vKd9C_Yc6DauMOoCKc",
        authDomain: "ciam-poc-e920a.firebaseapp.com",
        databaseURL: "https://ciam-poc-e920a.firebaseio.com",
        projectId: "ciam-poc-e920a",
        storageBucket: "ciam-poc-e920a.appspot.com",
        messagingSenderId: "155107861912"
    };
    firebase.initializeApp(config);

}
