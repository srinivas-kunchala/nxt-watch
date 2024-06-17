import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'

import {FiLogOut} from 'react-icons/fi'

import {FaRegLightbulb, FaLightbulb} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  TopNav,
  MobileViewContainer,
  HeaderContainer,
  Logo,
  MobileViewListContainer,
  ListContent,
  LogoutButton,
} from './StyledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickLogout = () => {
        const {history} = props

        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <TopNav isDarkTheme={isDarkTheme}>
          <HeaderContainer>
            <img src={imgUrl} alt="logo" className="logo" />
            <div className="mobileView">
              <MobileViewListContainer>
                <ListContent isDarkTheme={isDarkTheme}>
                  {isDarkTheme ? (
                    <FaLightbulb size="40" onClick={onChangeTheme} />
                  ) : (
                    <FaRegLightbulb size="40" onClick={onChangeTheme} />
                  )}
                </ListContent>
                <ListContent isDarkTheme={isDarkTheme}>
                  <GiHamburgerMenu size="40" />
                </ListContent>
                <ListContent isDarkTheme={isDarkTheme} onClick={onClickLogout}>
                  <FiLogOut size="40" />
                </ListContent>
              </MobileViewListContainer>
            </div>
            <div className="LargeMobileView">
              <MobileViewContainer>
                <MobileViewListContainer>
                  <ListContent isDarkTheme={isDarkTheme}>
                    {isDarkTheme ? (
                      <FaLightbulb size="40" onClick={onChangeTheme} />
                    ) : (
                      <FaRegLightbulb size="40" onClick={onChangeTheme} />
                    )}
                  </ListContent>

                  <ListContent>
                    <Logo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </ListContent>
                </MobileViewListContainer>
                <LogoutButton
                  isDarkTheme={isDarkTheme}
                  type="button"
                  onClick={onClickLogout}
                >
                  Logout
                </LogoutButton>
              </MobileViewContainer>
            </div>
          </HeaderContainer>
        </TopNav>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
