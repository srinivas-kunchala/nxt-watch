import Styled from 'styled-components/macro'

export const TopNav = Styled.nav`
padding-right:20px;
background-color:${props => (props.isDarkTheme ? 'black' : 'white')}};
padding-left:20px;


`

export const HeaderContainer = Styled.div`
display:flex;
justify-content:space-between;
padding:10px;
`

export const Logo = Styled.img`
height:40px;


`

export const MobileViewContainer = Styled.div`
display:flex;



`

export const MobileViewListContainer = Styled.ul`
list-style-type:none;
padding-left:0px;
display:flex;
`

export const ListContent = Styled.li`
margin-right:10px;
color:${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const LogoutButton = Styled.button`
height:40px;
width:100px;
background-color:transparent;
border:${props => (props.isDarkTheme ? 'white' : '#3b82f6')} 2px solid;
cursor:pointer;
color:${props => (props.isDarkTheme ? 'white' : '#3b82f6')};


`
