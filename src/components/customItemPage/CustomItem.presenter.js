import {MiddleContainer, Wrapper, CustomHeader, CustomContentWrapper,
  CustomContentContainer, HeaderNamePlace, HeaderNamePlace_Name, SubmitButton} from './CustomItem.styled'


const CustomItemUI = ({totalCost, orderSave}) => {

  return(
    <MiddleContainer>
       <CustomHeader>
          상품을 주문합니다
        </CustomHeader>
      <Wrapper id='platform-product-area'>
        
      </Wrapper>
     
      <HeaderNamePlace>
        <HeaderNamePlace_Name>
        상품가격: {totalCost.product}
        </HeaderNamePlace_Name>
      </HeaderNamePlace>

      <HeaderNamePlace>
        <HeaderNamePlace_Name>
        총가격: {totalCost.total}(부가세 : {totalCost.vat})
        </HeaderNamePlace_Name>
      </HeaderNamePlace>
      <SubmitButton onClick={orderSave}>장바구니 추가</SubmitButton>
      <div id='red-platform-area'></div>
    </MiddleContainer>
  )
}

export default CustomItemUI;