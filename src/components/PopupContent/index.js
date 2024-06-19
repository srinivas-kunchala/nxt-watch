import Popup from 'reactjs-popup'

import {
  LogoutButton,
  PopupInfo,
  Heading,
  ButtonContainer,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const PopupContent = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {onClickLogout} = props

      return (
        <div>
          <Popup
            modal
            trigger={
              <LogoutButton isDarkTheme={isDarkTheme}>Logout</LogoutButton>
            }
            className="popup-content"
          >
            {close => (
              <PopupInfo isDarkTheme={isDarkTheme}>
                <Heading isDarkTheme={isDarkTheme}>
                  Are you Sure You want to Logout?
                </Heading>
                <ButtonContainer>
                  <LogoutButton
                    isDarkTheme={isDarkTheme}
                    type="button"
                    onClick={() => close()}
                  >
                    Cancel
                  </LogoutButton>

                  <LogoutButton
                    isDarkTheme={isDarkTheme}
                    type="button"
                    onClick={onClickLogout}
                  >
                    Confirm
                  </LogoutButton>
                </ButtonContainer>
              </PopupInfo>
            )}
          </Popup>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default PopupContent
