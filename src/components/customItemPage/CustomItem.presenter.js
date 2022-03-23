import {MiddleContainer, Wrapper, CustomHeader, CustomContentWrapper,
  CustomContentContainer} from './CustomItem.styled'


const CustomItemUI = () => {

  return(
    <MiddleContainer>
       <CustomHeader>
          상품을 주문합니다
        </CustomHeader>
      <Wrapper>
        <CustomContentWrapper id='platform-product-area'/>
      </Wrapper>
    </MiddleContainer>
  )
}

export default CustomItemUI;