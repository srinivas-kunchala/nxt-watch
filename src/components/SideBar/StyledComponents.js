import Styled from 'styled-components/macro'

export const CloseButton = Styled.button`
border:none;
background-color:transparent;
cursor:pointer;
font-family:'roboto';


`

export const GetButton = Styled(CloseButton)`
border:1px solid black;
padding:10px;
color:black;
font-size:12px;

font-weight:600;
`

export const RetryButton = Styled(CloseButton)`
background-color:'orange';
padding:10px;
color:white;

`

export const SidebarContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
background-color:${props => (props.isDarkTheme ? 'black' : 'white')};
padding-left:20px;
padding-right:20px;
height:115vh;


min-width:100%;

`

export const SideAndContentContainer = Styled.div`





`

export const SidebarListContainer = Styled.ul`
list-style-type:none;
padding-left:0px;
display:flex;
flex-direction:column;



`

export const ListItems = Styled.li`





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
font-size:15px;
font-weight:600;
margin-bottom:20px;
`

export const BannerContainer = Styled.div`

height:35vh;
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

export const LogoIcon = Styled(Logo)`
margin-right:10px;
height:20px;

`

export const BottomSectionNavContainer = Styled.div`




`

export const HeadingBottom = Styled.h1`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
font-family:'Roboto';
font-size:20px;
`

export const Description = Styled.p`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
font-family:'Roboto';
font-size:14px;
`

export const MainBgContainer = Styled.div`
background-color:${props => (props.isDarkTheme ? 'black' : 'white')};
height:110vh;


`
