/**
 * Created by x.jin on 20/06/2017.
 */
import { actions } from './actions'
let initialState ={
    credential: {
        email: null,
        password : null,
        error: {
            email: false,
            password: false
        }
    },
    loading: false,
    error: false

};



export default function (state = initialState, action={}) {
    switch (action.type) {
        case actions.login.request:
            return {...state, ...{loading : true}}
        case actions.login.failure:
            return {...state, ...{loading : false, error: true}}
        case actions.login.success:
            return {...state, ...{ loading : false, error: false}}
        case actions.credential.update:
            return {...state, ...action.value}

        default:
            return state
    }
}