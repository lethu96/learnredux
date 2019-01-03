import React, { Component } from 'react'
import {BrowserRouter , Switch, Route, withRouter} from 'react-router-dom'
import { createHashHistory } from 'history'
import ListUser from './User/ListUser'
import Home from './layout/Home'
import AddUser from './User/AddUser'
import { Provider } from 'react-redux'
import store from '../store/store'

const history = createHashHistory()

export default class App extends Component {

    render() {
        return (
            <Provider  store = {store}>
                <BrowserRouter>
                <Switch>
                        <Home> 
                            <Route exact path = '/create-user' component = {AddUser} />
                            <Route exact path = '/list-user' component = {ListUser} />
                        </Home>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
