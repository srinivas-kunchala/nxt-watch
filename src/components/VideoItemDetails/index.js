import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import Sidebar from '../SideBar'

import {
  MainBgContainer,
  ProfileContainer,
  Description,
  Profile,
  Heading,
  RetryButton,
  SuccessBgContainer,
  Container,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isPending: 'IS_PENDING',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoDetails: {}}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.isPending})

    const token = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${token}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideoDetails = {
        channelName: data.video_details.channel.name,
        subscribers: data.video_details.channel.subscriber_count,
        profileImg: data.video_details.channel.profile_image_url,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedVideoDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingPart = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailurePart = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <MainBgContainer isDarkTheme={isDarkTheme}>
            <img src={failureImg} alt="failure " />
            <Heading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </Heading>
            <Description isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request please try
              again.
            </Description>
            <RetryButton type="button">Retry</RetryButton>
          </MainBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videoDetails} = this.state

        const {
          channelName,
          subscribers,
          profileImg,
          title,
          videoUrl,
          viewCount,

          publishedAt,
          description,
        } = videoDetails

        return (
          <SuccessBgContainer isDarkTheme={isDarkTheme}>
            <MainBgContainer>
              <ReactPlayer url={videoUrl} controls />
            </MainBgContainer>
            <Description isDarkTheme={isDarkTheme}>{title}</Description>
            <ProfileContainer>
              <Description isDarkTheme={isDarkTheme}>{viewCount}</Description>
              <Description isDarkTheme={isDarkTheme}>{publishedAt}</Description>
            </ProfileContainer>
            <hr />
            <ProfileContainer>
              <Profile src={profileImg} />
              <Container>
                <Description isDarkTheme={isDarkTheme}>
                  {channelName}
                </Description>
                <Description isDarkTheme={isDarkTheme}>
                  {subscribers}
                </Description>
                <Description isDarkTheme={isDarkTheme}>
                  {description}
                </Description>
              </Container>
            </ProfileContainer>
          </SuccessBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.isPending:
        return this.renderLoadingPart()

      case apiStatusConstants.failure:
        return this.renderFailurePart()

      case apiStatusConstants.success:
        return this.renderSuccessView()

      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <div className="largeView">
            <Sidebar />
          </div>
          {this.renderFinalView()}
        </div>
      </div>
    )
  }
}
export default VideoItemDetails
