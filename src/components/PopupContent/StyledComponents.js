import Styled from 'styled-components/macro'

export const LogoutButton = Styled.button`
height:40px;
width:100px;
background-color:transparent;
border:${props => (props.isDarkTheme ? 'white' : '#3b82f6')} 2px solid;
cursor:pointer;
color:${props => (props.isDarkTheme ? 'white' : '#3b82f6')};
`

export const PopupInfo = Styled.div`
background-color:${props => (props.isDarkTheme ? 'black' : 'white')};
padding:20px;

`

export const Heading = Styled.h1`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const ButtonContainer = Styled.div`
display:flex;
`
