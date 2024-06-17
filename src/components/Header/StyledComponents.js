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
margin-top:20px;
`

export const MobileViewContainer = Styled.div`



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

export const LargeDeviceViewContainer = Styled.div`




`
