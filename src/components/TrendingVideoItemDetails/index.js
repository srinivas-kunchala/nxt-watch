import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isPending: 'IS_PENDING',
}

class TrendingVideoItemDetails extends Component {
  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const token = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/trending/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${token}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
  }

  render() {
    return <div>555</div>
  }
}

export default TrendingVideoItemDetails
