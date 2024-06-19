import {MainBgContainer, Logo, Heading, Description} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

import Sidebar from '../SideBar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const getImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div>
          <Header />
          <div className="container">
            <div>
              <Sidebar />
            </div>
            <MainBgContainer isDarkTheme={isDarkTheme}>
              <Logo src={getImgUrl} />
              <Heading isDarkTheme={isDarkTheme}>Page Not Found</Heading>
              <Description isDarkTheme={isDarkTheme}>
                We are sorry,the page you requested could not found
              </Description>
            </MainBgContainer>
          </div>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
