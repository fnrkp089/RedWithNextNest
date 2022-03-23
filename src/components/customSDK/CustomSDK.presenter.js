import { Html, Head, Main, NextScript } from 'next/document'
import { MiddleContainer, Wrapper, ButtonWrapper, SubmitButton } from './CustomSDK.styled'
import { useEffect } from 'react';

const CustomSDKUI = ({customSave}) => {
  
  return (
    <>
    <MiddleContainer>
      <Wrapper>
        <ButtonWrapper>
          <SubmitButton onClick={customSave}>커스텀저장</SubmitButton>
        </ButtonWrapper>
      <div id= 'custom-product-area'/>
      </Wrapper>
    </MiddleContainer>
    </>
  )
}

export default CustomSDKUI