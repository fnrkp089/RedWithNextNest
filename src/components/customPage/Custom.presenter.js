import {MiddleContainer, Wrapper, BestHeader, BestContentContainer, 
  BestContentWrapper, BestContentItemImg, BestContentItemContainer,
  BestContentItemTitle} from './Custom.styled'

const CustomWriteUI = ({toCustomPage}) => {
  return(
    <MiddleContainer>
      <Wrapper>
        <BestHeader>
        커스텀 상품생산
        </BestHeader>
        <BestContentWrapper>
            <BestContentContainer id = 'gg' onClick={toCustomPage('gg')}>
              <BestContentItemImg/>
              <BestContentItemTitle>
              각대봉투
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              광목파우치 - 부분
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              광목필름 - 부분
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              네임 스티커
              </BestContentItemTitle>
              </BestContentContainer>
        </BestContentWrapper>
  
        <BestContentWrapper>
        <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              디자인 X베너
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              디자인 슬로건
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              디자인 명함
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              뜯어쓰는 노트
              </BestContentItemTitle>
              </BestContentContainer>
        </BestContentWrapper>

        <BestContentWrapper>
        <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              레더커버 사철노트
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              마그네틱클립
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              상장
              </BestContentItemTitle>
              </BestContentContainer>

              <BestContentContainer>
              <BestContentItemImg/>
              <BestContentItemTitle>
              스케치북
              </BestContentItemTitle>
              </BestContentContainer>
        </BestContentWrapper>
      </Wrapper>
    </MiddleContainer>
  )
}

export default CustomWriteUI;