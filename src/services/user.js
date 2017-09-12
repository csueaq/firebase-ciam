/**
 * Created by x.jin on 12/09/2017.
 */
import * as firebase from 'firebase';


export function create(email, password) {

    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function login(email, password) {

    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function logout() {

    return firebase.auth().signOut()
}

export function update(user, updates) {

    return user.update(updates)
}