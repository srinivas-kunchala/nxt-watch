import {
  SavedVideosContainer,
  Img,
  Heading,
  ContentContainer,
  Description,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

import Sidebar from '../SideBar'

import './index.css'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      console.log(savedVideos)

      const img =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

      const isSavedVideosExist = savedVideos.length > 0

      return (
        <>
          <Header />
          <div className="container" data-testid="savedVideos">
            <Sidebar />

            {isSavedVideosExist ? (
              <SavedVideosContainer
                isDarkTheme={isDarkTheme}
                data-testid="savedVideos"
              >
                <Heading isDarkTheme={isDarkTheme}>Saved Videos</Heading>
                <ul>
                  {savedVideos.map(eachItem => (
                    <li key={eachItem.id}>
                      <ContentContainer>
                        <div>
                          <Img src={eachItem.thumbnailUrl} height />
                        </div>
                        <div>
                          <Description isDarkTheme={isDarkTheme}>
                            {eachItem.description}
                          </Description>
                          <Description isDarkTheme={isDarkTheme}>
                            {eachItem.channelName}
                          </Description>
                          <ContentContainer>
                            <Description isDarkTheme={isDarkTheme}>
                              {eachItem.viewCount}
                            </Description>
                            <Description isDarkTheme={isDarkTheme}>
                              {eachItem.publishedAt}
                            </Description>
                          </ContentContainer>
                        </div>
                      </ContentContainer>
                    </li>
                  ))}
                </ul>
              </SavedVideosContainer>
            ) : (
              <SavedVideosContainer isDarkTheme={isDarkTheme}>
                <Img src={img} alt="no videos" />
                <Heading isDarkTheme>No Saved Videos Found</Heading>
                <Description isDarkTheme>
                  You can save your videos while watching them
                </Description>
              </SavedVideosContainer>
            )}
          </div>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
