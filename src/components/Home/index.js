import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoMdClose, IoMdSearch} from 'react-icons/io'

import {Component} from 'react'

import Videos from '../Videos'

import Sidebar from '../SideBar'

import './index.css'

import {
  Icon,
  BannerContainer,
  BannerCard,
  Logo,
  CloseButton,
  GetButton,
  HeadingBottom,
  Description,
  RetryButton,
  MainBgContainer,
  SearchInput,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

const img =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isPending: 'IS_PENDING',
}

class Home extends Component {
  state = {
    closeIcon: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.isPending})

    const token = Cookies.get('jwt_token')

    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const option = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${token}`,
      },
    }

    const response = await fetch(apiUrl, option)
    const data = await response.json()

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

        const isVideoExist = videosData.length > 1

        return isVideoExist ? (
          <MainBgContainer isDarkTheme={isDarkTheme}>
            <ul>
              {videosData.map(eachItem => (
                <Videos videosData={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </MainBgContainer>
        ) : (
          <MainBgContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HeadingBottom isDarkTheme={isDarkTheme}>
              No Search Result results found
            </HeadingBottom>
            <Description isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </Description>
            <RetryButton type="button">Retry</RetryButton>
          </MainBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickBtn = () => {
    this.getAllVideos()
  }

  renderSearchInput = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {searchInput} = this.state

        return (
          <div>
            <SearchInput
              isDarkTheme={isDarkTheme}
              onChange={this.onChangeSearch}
              value={searchInput}
              placeholder="Search"
              type="search"
            />
            <button
              data-testid="searchButton"
              type="button"
              onClick={this.onClickBtn}
            >
              <IoMdSearch label />
            </button>
          </div>
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

  onClickCloseIcon = () => {
    this.setState({closeIcon: false})
  }

  renderPremiumBanner = () => {
    const {closeIcon} = this.state

    return (
      closeIcon && (
        <BannerContainer data-testid="banner">
          <BannerCard>
            <Icon>
              <CloseButton
                data-testid="close"
                type="button"
                onClick={this.onClickCloseIcon}
              >
                <IoMdClose size="30" />
              </CloseButton>
            </Icon>
            <Logo src={img} alt="nxt watch logo" />
            <h1>Buy Nxt Watch Premium</h1>
            <GetButton type="button">GET IT NOW</GetButton>
          </BannerCard>
        </BannerContainer>
      )
    )
  }

  render() {
    return (
      <>
        <Header />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <MainBgContainer isDarkTheme={isDarkTheme} data-testid="home">
                <div className="list-container">
                  <div className="largeDeviceView">
                    <Sidebar />
                  </div>
                  <div>
                    {this.renderPremiumBanner()}
                    {this.renderSearchInput()}
                    {this.onRenderFinalView()}
                  </div>
                </div>
              </MainBgContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}

export default Home
