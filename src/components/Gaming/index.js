import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import Videos from '../Videos'

import Sidebar from '../SideBar'

import './index.css'

import {
  HeadingBottom,
  Description,
  RetryButton,
  MainBgContainer,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isPending: 'IS_PENDING',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.isPending})

    const token = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const option = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${token}`,
      },
    }

    const response = await fetch(apiUrl, option)
    const data = await response.json()

    console.log(data)

    if (response.ok) {
      const updatedVideosData = data.videos.map(eachObj => ({
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }))

      this.setState({
        videosData: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onRenderSuccess = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {videosData} = this.state

        return (
          <MainBgContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
            <ul>
              {videosData.map(eachItem => (
                <Videos videosData={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </MainBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onRenderFailure = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <MainBgContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
            <img src={failureImg} alt="failure " />
            <HeadingBottom isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </HeadingBottom>
            <Description isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </Description>
            <RetryButton type="button">Retry</RetryButton>
          </MainBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onRenderFinalView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.isPending:
        return this.onLoading()

      case apiStatusConstants.failure:
        return this.onRenderFailure()

      case apiStatusConstants.success:
        return this.onRenderSuccess()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <MainBgContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                <div className="list-container">
                  <div className="largeDeviceView">
                    <Sidebar />
                  </div>
                  <div data-testid="gaming">{this.onRenderFinalView()}</div>
                </div>
              </MainBgContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}

export default Gaming
