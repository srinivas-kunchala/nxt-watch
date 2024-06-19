import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'

import {FiLogOut} from 'react-icons/fi'

import {FaRegLightbulb, FaLightbulb} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'

import PopupContent from '../PopupContent'

import './index.css'

import {
  TopNav,
  MobileViewContainer,
  HeaderContainer,
  Logo,
  MobileViewListContainer,
  ListContent,
  Button,
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
            <Link to="/">
              <img src={imgUrl} alt="logo" className="logo" />
            </Link>
            <div className="mobileView">
              <MobileViewListContainer>
                <ListContent isDarkTheme={isDarkTheme}>
                  {isDarkTheme ? (
                    <Button
                      type="button"
                      onClick={onChangeTheme}
                      data-testid="theme"
                      isDarkTheme={isDarkTheme}
                    >
                      <FaLightbulb size="40" label />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={onChangeTheme}
                      data-testid="theme"
                    >
                      <FaRegLightbulb size="40" label />
                    </Button>
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
                      <Button
                        type="button"
                        onClick={onChangeTheme}
                        data-testid="theme"
                      >
                        <FaLightbulb size="40" label />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={onChangeTheme}
                        data-testid="theme"
                      >
                        <FaRegLightbulb size="40" label />
                      </Button>
                    )}
                  </ListContent>

                  <ListContent>
                    <Logo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </ListContent>
                </MobileViewListContainer>
                <PopupContent onClickLogout={onClickLogout} />
              </MobileViewContainer>
            </div>
          </HeaderContainer>
        </TopNav>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
