import {MiddleContainer, Wrapper, CustomHeader, CustomContentWrapper,
  CustomContentContainer} from './CustomItem.styled'


const CustomItemUI = () => {

  return(
    <MiddleContainer>
       <CustomHeader>
          커스텀 상품을 생성합니다
        </CustomHeader>
      <Wrapper>
       
        <CustomContentWrapper>
          <CustomContentContainer>박스</CustomContentContainer>
        </CustomContentWrapper>

        <CustomContentWrapper>
          123
        </CustomContentWrapper>

      </Wrapper>
    </MiddleContainer>
  )
}

export default CustomItemUI;