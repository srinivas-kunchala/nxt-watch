import Styled from 'styled-components/macro'

export const CustomLikeButton = Styled.button`
border:none;
color:${props => (props.isDarkTheme ? 'white' : 'black')};
cursor:pointer;
display:flex;
align-items:center;
background-color:transparent;

color:${props => (props.likeBtn ? '#2563eb' : '#64748b')};

color:${props => (props.dislikeBtn ? '#2563eb' : '#64748b')};

color:${props => (props.saveBtn ? '#2563eb' : '#64748b')};




`

export const RetryButton = Styled(CustomLikeButton)`
background-color:'orange';
padding:10px;
color:white;

`

export const InfoAndButtonContainer = Styled.div`
display:flex;

justify-content:space-between;
background-color:${props => (props.isDarkTheme ? 'black' : 'white')};


`

export const SidebarListContainer = Styled.ul`
list-style-type:none;
padding-left:0px;


`

export const ListItems = Styled.li`



`

export const ProfileContainer = Styled.div`
display:flex;



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
margin-top:20px;
margin-right:20px;

`

export const LogoIcon = Styled(Logo)`
margin-right:10px;

`

export const ContentContainer = Styled.div`




`

export const Heading = Styled.h1`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
font-family:'Roboto';
`

export const Description = Styled.p`
color:${props => (props.isDarkTheme ? 'white' : 'black')};
font-family:'Roboto';
margin-right:${props => (props.rightMargin ? '10px' : '')};
margin-left:${props => (props.leftMargin ? '10px' : '')};
color:${props => (props.likeBtn ? 'blue' : '')};

color:${props => (props.dislikeBtn ? 'blue' : '')};

color:${props => (props.saveBtn ? 'blue' : '')};

`

export const MainBgContainer = Styled.div`
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
height:115vh;
width:100%;


`
