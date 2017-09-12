/**
 * Created by x.jin on 20/06/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import createStore from '../store/store'
import { BrowserRouter } from 'react-router-dom'
import domready from 'domready'
import { createBrowserHistory } from 'history'
import App from '../components/app'
import { initFirebase } from '../util/thirdParty'
const store = createStore();

domready(function() {

    initFirebase()

    render(
        <BrowserRouter>
            <App  store={store} history={createBrowserHistory()}/>
        </BrowserRouter>
        ,
        document.getElementById("content")
    );
});