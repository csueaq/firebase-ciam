/**
 * Created by x.jin on 21/06/2017.
 */
import { login, logout } from '../../services/user'
import { actions } from './actions'


export function loginAction() {
    return {
        type: actions.login.request
    }
}

export function loginSuccess(user) {
    return {
        type: actions.login.success,
        user,
    }
}

export function loginFailure() {
    return {
        type: actions.login.failure
    }
}

export function logoutAction() {
    return {
        type: actions.logout.request
    }
}

export function logoutSuccess() {
    return {
        type: actions.logout.success
    }
}

export function logoutFailure() {
    return {
        type: actions.logout.failure
    }
}

export function updateCredential(credential) {
    return {
        type: actions.credential.update,
        value : { credential }
    }
}

export function loginWithEmail() {
    return (dispatch) => {
        dispatch(loginAction())
        return login()
            .then((user) => dispatch(loginSuccess(user)))
            .catch((err) => dispatch(loginFailure()))
    }
}
