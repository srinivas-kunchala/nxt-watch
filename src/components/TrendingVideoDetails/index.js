import {Component} from 'react'

import {Link} from 'react-router-dom'

import {} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

class TrendingVideoDetails extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const {trendingVideos} = this.props
          const {
            id,
            channelName,

            publishedAt,
            thumbnailUrl,
            title,
            viewCount,
          } = trendingVideos

          return (
            <Link to={`/trending/${id}`}>
              <div>
                <div>
                  <img src={thumbnailUrl} alt="profile" />
                  <div>
                    <h1>{title}</h1>
                    <p>{channelName}</p>
                    <div>
                      <p>{viewCount}</p>
                      <p>{publishedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingVideoDetails
