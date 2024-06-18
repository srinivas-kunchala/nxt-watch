import Styled from 'styled-components/macro'

export const ListContainer = Styled.li`
list-style-type:none;
margin-bottom:20px;
margin-right:20px;
`

export const Title = Styled.h1`
width: 180px;
font-size:20px;

color:${props => (props.isDarkTheme ? 'white' : 'black')};

`

export const ProfileContainer = Styled.div`
display:flex;
`

export const ProfileImg = Styled.img`
height:40px;
border-radius:80px;
margin-top:20px;

margin-right:10px;
`

export const About = Styled.p`

color:${props => (props.isDarkTheme ? 'white' : 'black')};

`

export const ThumbnailImg = Styled.img`
height:200px;
`

export const ProfileItems = Styled.div``
