import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  About,
  ListContainer,
  Title,
  ProfileContainer,
  ProfileImg,
  ThumbnailImg,
  ProfileItems,
} from './StyledComponents'

const Videos = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videosData} = props

      const {
        title,
        publishedAt,
        viewCount,
        thumbnailUrl,
        channelName,
        profileImgUrl,
        id,
      } = videosData

      return (
        <Link to={`/videos/${id}`}>
          <ListContainer>
            <ThumbnailImg src={thumbnailUrl} alt={title} />
            <ProfileContainer>
              <ProfileImg src={profileImgUrl} alt="profile" />
              <ProfileItems>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <About isDarkTheme={isDarkTheme}>{channelName}</About>
                <ProfileContainer>
                  <About isDarkTheme={isDarkTheme}>{viewCount}</About>
                  <About isDarkTheme={isDarkTheme}>{publishedAt}</About>
                </ProfileContainer>
              </ProfileItems>
            </ProfileContainer>
          </ListContainer>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Videos
