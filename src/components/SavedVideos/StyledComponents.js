import Styled from 'styled-components/macro'

export const SavedVideosContainer = Styled.div`

height:115vh;

background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

`

export const Img = Styled.img`

height:50vh;
height : ${props => (props.height ? '150px' : '')};
margin-right:${props => (props.height ? '10px' : '')};
`
export const Heading = Styled.h1`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const ContentContainer = Styled.div`
display:flex;
margin-bottom:10px;

`

export const Description = Styled.p`


`
