import Styled from 'styled-components/macro'

export const NotFoundContainer = Styled.div`
height:100vh;
padding:20px;
background-color:${props => (props.isDarkTheme ? 'black' : 'white')};

`

export const ImageEL = Styled.img`
height:50vh;
`

export const Heading = Styled.h1`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const Description = Styled.p`
color:${props => (props.isDarkTheme ? 'white' : 'black')};

`
