import {Wrapper, HeaderWrapperContainer, BoardButton, MarketButton, MyPageButton} from './HeaderNavi.styled'

const HeaderNaviUI = ({handleCustom, handleGoodsList, handleFavorite, handleOrder}) => {
  return(
    <Wrapper>
      <HeaderWrapperContainer>
        <BoardButton onClick={handleCustom}>
        	커스텀 상품생산
        </BoardButton>

        <MarketButton onClick={handleGoodsList}>
        	상품 리스트
        </MarketButton>

				<MarketButton onClick={handleOrder}>
          주문
        </MarketButton>

        <MyPageButton onClick={handleFavorite}>
          장바구니?
        </MyPageButton>
      </HeaderWrapperContainer>
    </Wrapper>
  )
}

export default HeaderNaviUI