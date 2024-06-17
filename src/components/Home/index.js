import Cookies from 'js-cookie'

import {IoMdClose} from 'react-icons/io'

import {FaFire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {HiOutlineSaveAs} from 'react-icons/hi'

import {GoHome} from 'react-icons/go'

import {Component} from 'react'

import {
  SideAndContentContainer,
  SidebarContainer,
  SidebarListContainer,
  ListItemContainer,
  ListTextContent,
  ListItems,
  Icon,
  BannerContainer,
  BannerCard,
  Logo,
  CloseButton,
  GetButton,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

const img =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Home extends Component {
  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const token = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/all?search='

    const option = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${token}`,
      },
    }

    const response = await fetch(apiUrl, option)
    const data = await response.json()
    console.log(data)
  }

  renderPremiumBanner = () => (
    <BannerContainer>
      <BannerCard>
        <Icon>
          <CloseButton type="button">
            <IoMdClose size="30" />
          </CloseButton>
        </Icon>
        <Logo src={img} alt="logo" />
        <h1>Buy Nxt Watch Premium</h1>
        <GetButton type="button">GET IT NOW</GetButton>
      </BannerCard>
    </BannerContainer>
  )

  render() {
    return (
      <>
        <Header />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <SideAndContentContainer>
                <SidebarContainer isDarkTheme={isDarkTheme}>
                  <SidebarListContainer>
                    <ListItems>
                      <ListItemContainer>
                        <GoHome size="30" color="red" />

                        <ListTextContent isDarkTheme={isDarkTheme}>
                          Home
                        </ListTextContent>
                      </ListItemContainer>
                      <ListItemContainer>
                        <FaFire size="30" color="red" />
                        <ListTextContent isDarkTheme={isDarkTheme}>
                          Trending
                        </ListTextContent>
                      </ListItemContainer>
                      <ListItemContainer>
                        <SiYoutubegaming size="30" color="red" />
                        <ListTextContent isDarkTheme={isDarkTheme}>
                          Gaming
                        </ListTextContent>
                      </ListItemContainer>
                      <ListItemContainer>
                        <HiOutlineSaveAs size="30" color="red" />
                        <ListTextContent isDarkTheme={isDarkTheme}>
                          Saved Videos
                        </ListTextContent>
                      </ListItemContainer>
                    </ListItems>
                  </SidebarListContainer>
                </SidebarContainer>
                {this.renderPremiumBanner()}
              </SideAndContentContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}

export default Home
