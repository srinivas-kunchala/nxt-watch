import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  onAddSavedVideos: () => {},
  savedVideos: [],
})

export default NxtWatchContext
