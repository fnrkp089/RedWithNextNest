import {MiddleContainer, Wrapper, CustomHeader, CustomContentWrapper,
  CustomContentContainer, SubmitButton} from './CustomItem.styled'


const CustomItemUI = () => {

  return(
    <MiddleContainer>
       <CustomHeader>
          상품을 주문합니다
        </CustomHeader>
      <Wrapper id='platform-product-area'>
        
       
      </Wrapper>
      <SubmitButton>주문하기</SubmitButton>
    </MiddleContainer>
  )
}

export default CustomItemUI;