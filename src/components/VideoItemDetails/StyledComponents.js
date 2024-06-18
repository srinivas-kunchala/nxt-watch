import Styled from 'styled-components/macro'

export const MainBgContainer = Styled.div`
background-color:${props => (props.isDarkTheme ? 'black' : 'white')}
height:100vh;
`

export const SuccessBgContainer = Styled.div`
background-color:${props => (props.isDarkTheme ? 'black' : 'white')}
height:100vh;
`

export const Description = Styled.p`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const ProfileContainer = Styled.div`
display:flex;
`

export const About = Styled.p``

export const Profile = Styled.img`
height:40px;
border-radius:80px;
`

export const RetryButton = Styled.button`


background-color:blue;
color:white;
border:none;
border-radius:10px;
padding:10px;
cursor:pointer;
height:40px;
width:80px;
`
export const Heading = Styled.h1`
color:${props => (props.isDarkTheme ? 'white' : 'black')};

`

export const Container = Styled.div``
