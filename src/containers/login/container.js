/**
 * Created by x.jin on 04/09/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../components/auth/loginForm'
import { loginWithEmail, updateCredential } from './actionCreator'
import { validateEmail, validatePassword } from '../../util/utils'
class Login extends Component {

    constructor(props) {
        super(props)
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
    }

    handleEmailInput( email ) {

        let { credential } = this.props.login
        let { updateCredential } = this.props

        let emailValid = validateEmail(email)

        if(emailValid)
            updateCredential({
                ...credential,
                ...{
                    email : email,
                    error : {
                        ...credential.error,
                        ...{email: false}
                    }
                }
            })
        else {

            let error = {
                ...credential.error,
                ...{
                    email : true
                }
            }

            updateCredential({
                ...credential,
                ...{ error }
            })
        }

    }

    handlePasswordInput( password ) {

        let { credential } = this.props.login
        let { updateCredential } = this.props

        let passwordValid = validatePassword(password)

        if(passwordValid)
            updateCredential({
                ...credential,
                ...{
                    password : password,
                    error : {
                        ...credential.error,
                        ...{password: false}
                    }
                }
            })
        else {

            let error = {
                ...credential.error,
                ...{
                    password : true
                }
            }
            updateCredential({
                ...credential,
                ...{ error }
            })
        }

    }

    render() {

        let { credential } = this.props.login;

        return (
            <LoginForm handleEmailInput={this.handleEmailInput} handlePasswordInput={this.handlePasswordInput} error={credential.error}/>
        )
    }

}

function mapStateToProps(state) {
    return {
        login:state.login,
        router:state.router
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loginWithEmail: () => dispatch(loginWithEmail()),
        updateCredential: (data) => dispatch(updateCredential(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)