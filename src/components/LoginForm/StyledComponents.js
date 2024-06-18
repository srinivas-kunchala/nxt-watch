import Styled from 'styled-components/macro'

export const AppContainer = Styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;

background-color:${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};


`

export const LoginContainer = Styled.form`
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
padding:20px;
box-shadow:5px;
height:450px;
width:400px;




`
export const ImgContainer = Styled.div`
text-align:center;
margin-bottom:20px;
`

export const ImgEl = Styled.img`
height:40px;
text-align:center;
`

export const LoginCard = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom:25px;
`

export const LabelEl = Styled.label`
color:${props => (props.isDarkTheme ? 'white' : '#94a3b8')};
width:100%;
margin-bottom:10px;
font-weight:600;
`
export const InputEl = Styled.input`
height:40px;
padding:10px;
color:${props => (props.isDarkTheme ? 'white' : '#94a3b8')};
background-color:transparent;
border:${props => (props.isDarkTheme ? 'white' : 'black')} 1px solid;
font-size:20px;
`

export const CheckboxContainer = Styled.div`
display:flex;
align-items:center;

margin-bottom:20px;
`

export const Checkbox = Styled.input`
height:20px;
width:20px;
margin-right:10px;
`
export const CheckboxLabel = Styled.label`
font-size:18px;
color:${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const LoginButton = Styled.button`
width:100%;
height:40px;
padding:10px;
font-size:18px;
background-color:#3b82f6;
color:white;
border:none;
outline:none;
cursor:pointer;
border-radius:10px;
`

export const ErrorMsg = Styled.p`

color:' #ff0b37';
`
