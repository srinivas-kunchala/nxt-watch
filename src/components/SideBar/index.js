import {Link} from 'react-router-dom'

import {FaFire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {HiOutlineSaveAs} from 'react-icons/hi'

import {GoHome} from 'react-icons/go'

import {
  SidebarContainer,
  SidebarListContainer,
  ListItemContainer,
  ListTextContent,
  ListItems,
  HeadingBottom,
  Description,
  BottomSectionNavContainer,
  LogoIcon,
  MainBgContainer,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <MainBgContainer isDarkTheme={isDarkTheme}>
          <SidebarContainer isDarkTheme={isDarkTheme}>
            <SidebarListContainer>
              <Link to="/">
                <ListItems>
                  <ListItemContainer>
                    <GoHome size="30" color="red" />

                    <ListTextContent isDarkTheme={isDarkTheme}>
                      Home
                    </ListTextContent>
                  </ListItemContainer>
                </ListItems>
              </Link>
              <Link to="/trending">
                <ListItemContainer>
                  <FaFire size="30" color="red" />
                  <ListTextContent isDarkTheme={isDarkTheme}>
                    Trending
                  </ListTextContent>
                </ListItemContainer>
              </Link>
              <Link to="gaming">
                <ListItems>
                  <ListItemContainer>
                    <SiYoutubegaming size="30" color="red" />
                    <ListTextContent isDarkTheme={isDarkTheme}>
                      Gaming
                    </ListTextContent>
                  </ListItemContainer>
                </ListItems>
              </Link>
              <Link to="/saved-videos">
                <ListItems>
                  <ListItemContainer>
                    <HiOutlineSaveAs size="30" color="red" />
                    <ListTextContent isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </ListTextContent>
                  </ListItemContainer>
                </ListItems>
              </Link>
            </SidebarListContainer>
            <BottomSectionNavContainer>
              <HeadingBottom isDarkTheme={isDarkTheme}>
                Contact Us
              </HeadingBottom>

              <LogoIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />

              <LogoIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />

              <LogoIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
              <Description isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your <br />
                channels
                <br /> and recommendations!
              </Description>
            </BottomSectionNavContainer>
          </SidebarContainer>
        </MainBgContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
