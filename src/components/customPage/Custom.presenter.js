import {MiddleContainer, Wrapper, BestHeader, BestContentContainer, 
  BestContentWrapper, BestContentItemImg, BestContentItemContainer,
  BestContentItemTitle} from './Custom.styled'

const CustomListUI = ({toCustomPage, customData}) => {
  
  return(
    <MiddleContainer>
      <Wrapper>
        <BestHeader>
        커스텀 아이템리스트
        </BestHeader>
        <BestContentWrapper>
          {customData.data?.map((list, index) => (
              <BestContentContainer key={list.customKey} id = {list.customKey} onClick={toCustomPage(list.customKey)}>
              <BestContentItemImg/>
              <BestContentItemTitle>
              {list.productName}
              </BestContentItemTitle>
              </BestContentContainer>
          ))}
        </BestContentWrapper>
      </Wrapper>
    </MiddleContainer>
  )
}

export default CustomListUI;