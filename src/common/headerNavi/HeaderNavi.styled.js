import styled from '@emotion/styled'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 64px;
background: #FFD600;
box-shadow: 0px 5px 20px;
`

export const HeaderWrapperContainer = styled.div`
display:flex;
flex-direction: row;
width:500px;
height:28px;
`

export const BoardButton = styled.div`
display: flex;
width:150px;
height:28px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
text-align: center;
:hover{font-weight: bold};
cursor: pointer;
`

export const MarketButton = styled.div`
display: flex;
justify-content:space-around;
width:150px;
height:28px;
font-style: normal;
font-size: 18px;
line-height: 27px;
align-items: center;
text-align: center;
border-left: 1px solid #FFFFFF;
border-right: 1px solid #FFFFFF;
:hover{font-weight: bold};
cursor: pointer;
`

export const MyPageButton = styled.div`
display: flex;
justify-content:space-around;
width:150px;
height:28px;
font-style: normal;
font-size: 18px;
line-height: 27px;
align-items: center;
text-align: center;
:hover{font-weight: bold};
cursor: pointer;
`