import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'

import {HiSaveAs} from 'react-icons/hi'

import Sidebar from '../SideBar'

import './index.css'

import {
  MainBgContainer,
  Heading,
  Description,
  RetryButton,
  ProfileContainer,
  CustomLikeButton,
  InfoAndButtonContainer,
  Logo,
  ContentContainer,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isPending: 'IS_PENDING',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosData: [],
    likeBtn: false,
    dislikeBtn: false,
    saveBtn: false,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.isPending})

    const token = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

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
      const updatedVideosData = {
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        subscribers: data.video_details.subscriber_count,
        channelName: data.video_details.channel.name,
        profileImgUrl: data.video_details.channel.profile_image_url,
      }
      console.log(updatedVideosData)

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

  onRenderFailure = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <MainBgContainer
            isDarkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <img src={failureImg} alt="failure " />
            <Heading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </Heading>
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

  onClickLikeBtn = () => {
    this.setState(previousState => ({
      likeBtn: !previousState.likeBtn,
      dislikeBtn: false,
    }))
  }

  onClickDisLikeBtn = () => {
    this.setState(previousState => ({
      dislikeBtn: !previousState.dislikeBtn,
      likeBtn: false,
    }))
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, onAddSavedVideos} = value

        const {videosData, likeBtn, dislikeBtn, saveBtn} = this.state

        const onClickSaveBtn = () => {
          onAddSavedVideos(videosData)
          this.setState(previousState => ({saveBtn: !previousState.saveBtn}))
        }

        const text = saveBtn ? 'Saved' : 'Save'
        return (
          <MainBgContainer
            isDarkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <ReactPlayer url={videosData.videoUrl} controls />
            <Heading isDarkTheme={isDarkTheme}>{videosData.title}</Heading>

            <InfoAndButtonContainer isDarkTheme={isDarkTheme}>
              <ProfileContainer>
                <Description isDarkTheme={isDarkTheme} rightMargin>
                  {videosData.viewCount}
                </Description>
                <Description isDarkTheme={isDarkTheme}>
                  {videosData.publishedAt}
                </Description>
              </ProfileContainer>
              <ProfileContainer>
                <ProfileContainer>
                  <CustomLikeButton
                    isDarkTheme={isDarkTheme}
                    onClick={this.onClickLikeBtn}
                    likeBtn={likeBtn}
                  >
                    <BiLike />
                    <Description
                      isDarkTheme={isDarkTheme}
                      leftMargin
                      likeBtn={likeBtn}
                    >
                      Like
                    </Description>
                  </CustomLikeButton>
                </ProfileContainer>
                <ProfileContainer>
                  <CustomLikeButton
                    isDarkTheme={isDarkTheme}
                    onClick={this.onClickDisLikeBtn}
                    dislikeBtn={dislikeBtn}
                  >
                    <BiDislike />
                    <Description
                      isDarkTheme={isDarkTheme}
                      leftMargin
                      dislikeBtn={dislikeBtn}
                    >
                      DisLike
                    </Description>
                  </CustomLikeButton>
                </ProfileContainer>
                <ProfileContainer>
                  <CustomLikeButton
                    isDarkTheme={isDarkTheme}
                    onClick={onClickSaveBtn}
                    saveBtn={saveBtn}
                  >
                    <HiSaveAs />

                    <Description
                      isDarkTheme={isDarkTheme}
                      leftMargin
                      saveBtn={saveBtn}
                    >
                      {text}
                    </Description>
                  </CustomLikeButton>
                </ProfileContainer>
              </ProfileContainer>
            </InfoAndButtonContainer>

            <hr />
            <ProfileContainer>
              <Logo src={videosData.profileImgUrl} />
              <ContentContainer>
                <Heading isDarkTheme={isDarkTheme}>{videosData.title}</Heading>
                <Description isDarkTheme={isDarkTheme}>
                  {videosData.subscribers}
                </Description>
                <Description isDarkTheme={isDarkTheme}>
                  {videosData.description}
                </Description>
              </ContentContainer>
            </ProfileContainer>
          </MainBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.isPending:
        return this.onLoading()

      case apiStatusConstants.failure:
        return this.onRenderFailure()

      case apiStatusConstants.success:
        return this.renderSuccessView()

      default:
        return null
    }
  }

  render() {
    return (
      <div data-testid="videoItemDetails">
        <Header />
        <div className="content-container">
          <Sidebar />
          <div data-testid="videoItemDetails">{this.renderFinalView()}</div>
        </div>
      </div>
    )
  }
}

export default VideoItemDetails
