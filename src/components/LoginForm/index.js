import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  AppContainer,
  LoginContainer,
  ImgEl,
  LoginCard,
  LabelEl,
  InputEl,
  ImgContainer,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitBtn = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(previousState => ({
      showPassword: !previousState.showPassword,
    }))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      errorMsg,
      showErrorMsg,
    } = this.state
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const imgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <AppContainer isDarkTheme={isDarkTheme}>
              <LoginContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.onSubmitBtn}
              >
                <ImgContainer>
                  <ImgEl src={imgUrl} alt="logo" />
                </ImgContainer>
                <LoginCard>
                  <LabelEl isDarkTheme={isDarkTheme} htmlFor="username">
                    USERNAME
                  </LabelEl>
                  <InputEl
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                    isDarkTheme={isDarkTheme}
                  />
                </LoginCard>
                <LoginCard>
                  <LabelEl isDarkTheme={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </LabelEl>
                  {showPassword ? (
                    <InputEl
                      isDarkTheme={isDarkTheme}
                      value={password}
                      placeholder="Password"
                    />
                  ) : (
                    <InputEl
                      id="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      value={password}
                      isDarkTheme={isDarkTheme}
                    />
                  )}
                </LoginCard>
                <CheckboxContainer>
                  <Checkbox
                    id="showPassword"
                    type="checkbox"
                    onChange={this.onShowPassword}
                    value={showPassword}
                  />
                  <CheckboxLabel
                    isDarkTheme={isDarkTheme}
                    htmlFor="showPassword"
                  >
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </LoginContainer>
            </AppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
