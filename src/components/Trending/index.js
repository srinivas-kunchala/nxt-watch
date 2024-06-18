import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TrendingVideoDetails from '../TrendingVideoDetails'

import Sidebar from '../SideBar'

import Videos from '../Videos'

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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.isPending})

    const token = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/trending`

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
        channelName: eachObj.channel.name,
        profileImgUrl: eachObj.channel.profile_image_url,
      }))

      this.setState({
        trendingVideos: updatedVideosData,
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

  onRenderFailure = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <MainBgContainer isDarkTheme={isDarkTheme}>
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

  onRenderSuccess = () => {
    const {trendingVideos} = this.state

    return (
      <div>
        <ul>
          {trendingVideos.map(eachItem => (
            <Videos videoDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderFinalView = () => {
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
              <MainBgContainer isDarkTheme={isDarkTheme}>
                <div className="list-container">
                  <div className="largeDeviceView">
                    <Sidebar />
                  </div>
                  <div>{this.renderFinalView()}</div>
                </div>
              </MainBgContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}

export default Trending
