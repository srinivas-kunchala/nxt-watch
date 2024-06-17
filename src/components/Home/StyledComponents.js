import Styled from 'styled-components/macro'

export const CloseButton = Styled.button`
border:none;
background-color:transparent;
cursor:pointer;


`

export const GetButton = Styled(CloseButton)`
border:1px solid black;
padding:10px;
color:black;
font-size:12px;

font-weight:600;
`

export const SidebarContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
background-color:${props => (props.isDarkTheme ? 'black' : 'white')};
padding-left:20px;
padding-right:20px;
`

export const SideAndContentContainer = Styled.div`
display:flex;
min-height:100vh;

`

export const SidebarListContainer = Styled.ul`
list-style-type:none;
padding-left:0px;

`

export const ListItems = Styled.li`
margin-bottom:10px;

`

export const ListItemContainer = Styled.div`
display:flex;
justify-content:flex-start;
align-items:center;


`

export const Icon = Styled.div`
display:flex;
justify-content:flex-end;
width:80%;


`

export const ListTextContent = Styled.p`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
margin-left:15px;
font-size:20px;
font-weight:600;
margin-bottom:20px;
`

export const BannerContainer = Styled.div`

height:50vh;
width:100%;

padding-left:20px;

`

export const BannerCard = Styled.div`
background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
background-size:cover;
height:40vh;
min-width:50%;


`

export const Logo = Styled.img`
height:40px;
`
