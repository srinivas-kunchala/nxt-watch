import {
  NotFoundContainer,
  ImageEL,
  Heading,
  Description,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

import './index.css'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      console.log(isDarkTheme)

      const getImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div className="container">
          <Header />
          <>
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <ImageEL src={getImgUrl} />
              <Heading isDarkTheme={isDarkTheme}>Page Not Found</Heading>
              <Description isDarkTheme={isDarkTheme}>
                We are sorry,the page you requested could not found
              </Description>
            </NotFoundContainer>
          </>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
