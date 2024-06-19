import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import LoginForm from './components/LoginForm/index'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home/index'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound/index'

import Trending from './components/Trending/index'

import Gaming from './components/Gaming/index'

import SavedVideos from './components/SavedVideos/index'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideos: []}

  onChangeTheme = () => {
    this.setState(previousState => ({isDarkTheme: !previousState.isDarkTheme}))
  }

  onAddSavedVideos = video => {
    const {savedVideos} = this.state

    const isExisted = savedVideos.find(eachItem => eachItem.id === video.id)
    if (isExisted === undefined) {
      this.setState(previousState => ({
        savedVideos: [...previousState.savedVideos, video],
      }))
    }
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          onAddSavedVideos: this.onAddSavedVideos,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
