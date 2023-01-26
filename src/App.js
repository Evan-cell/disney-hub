import React from 'react'
import {BrowserRouter  as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path ='/'>
                    <Login />
                </Route>
            </Switch>
        </Router>
        <h1>Hello welcome to the disney build</h1>
    </div>
  )
}

export default App