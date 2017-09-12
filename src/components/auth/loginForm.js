/**
 * Created by x.jin on 12/09/2017.
 */
import React from "react";
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';

export default ({handleEmailInput, handlePasswordInput, error}) => {

    return (

            <Form>
                <Input type='email' label="Email" invalid={error.email} hint="Login email here"  onChange={(e)=>handleEmailInput(e.target.value)}/>
                <Input type='password' label="Password" invalid={error.password} hint="Login password here"  onChange={(e)=>handlePasswordInput(e.target.value)}/>
            </Form>
    )
}