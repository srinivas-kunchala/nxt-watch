import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import LoginForm from './components/LoginForm/index'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home/index'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  onChangeTheme = () => {
    this.setState(previousState => ({isDarkTheme: !previousState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{isDarkTheme, onChangeTheme: this.onChangeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
