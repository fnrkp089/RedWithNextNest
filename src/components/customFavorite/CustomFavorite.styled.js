import styled from '@emotion/styled'

export const MiddleContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width:1200px;
  width:100%;
  height: 1000px;
  margin-top: 250px;
`

export const SearchCotainer = styled.div`
display: flex;
width: 100%;
height: 60px;
justify-content: space-between;
align-items:center;
`

export const SellingState = styled.div`
display: flex;
width: 180px;
height: 27px;
justify-content: space-between;
`

export const NowSelling = styled.div`
width: 165px;
height:27px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
border-bottom: 1px solid #FFD600;
cursor: pointer;
`

export const ListScrollBar = styled.div`
width:auto;
height: auto;
overflow-y: scroll;
margin-top: 80px;
& ::-webkit-scrollbar-thumb{
  color: #FFD600;
}
`

export const ListWrapper = styled.div`
display:flex;
flex-direction: column;
width: 100%;
height: auto;
margin-top: 40px;
//overflow-y: auto;
`
export const ListInfinite = styled.div`
width: 100%;
height: auto;
overflow-y:scroll;

`

export const ListItemWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 200px;
border-top: 1px solid;
`
export const ListItemInnerWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 160px;
`

export const ListItemdiv = styled.div`
display: flex;
width: 160px;
height: 160px;
background: gray;
`
export const ListImg = styled.div`
width:160px;
height:160px;
`

export const ListContextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width:750px;
height:auto;
`

export const ItemInformation = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 700px;
height: auto;
`

export const ItemHeader = styled.div`
width: 100%;
height: 36px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
`

export const ItemExplain = styled.div`
width: 100%;
height:50px;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
overflow: hidden;
`

export const ItemTag = styled.div`
width: 100%;
height:32px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #69ABCE;
`

export const Select = styled.select`
padding: 16px 32px;
width: 30px
outline: none;
border-radius: 4px;
`
export const ItemFooterContainer = styled.div`
display: flex;
width: 700px;
height: 24px;
`

export const ItemSellerImgTextContainer = styled.div`
display:flex;
width: auto;
height: 24px;
`

export const ItemSellerImgContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
width: 24px;
height: 24px;
`

export const ItemSellerImg = styled.img`
width:20px;
height:20px;
margin-right: 6px;
`

export const ItemSeller = styled.div`
width: auto;
height: 24px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #4F4F4F;
`

export const ItemRemarkImgTextContainer = styled.div`
display:flex;
width: auto;
height: 24px;
margin-left: 22px;
`

export const ItemRemarkImgContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
width: 24px;
height: 24px;
`

export const ItemRemarkImg = styled.img`
width:20px;
height:20px;
`

export const ItemRemark = styled.div`
width: auto;
height: 24px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #4F4F4F;
`

export const PriceContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 100%;
`

export const PriceImgContainer = styled.div`
width: 20px;
height: 20px;
`

export const PriceImg = styled.img`
width: 18px;
height: 18px;
`

export const PriceText = styled.div`
width:auto;
height: 36px;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
text-align: right;
`

export const WriteDiv = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
width: auto;
height: 100px;
`

export const WriterButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 124px;
height: 52px;
outline:none;
border: 1px solid #000000;
padding: 14px 16px;
outline: none;
border: none;
cursor: pointer;
`