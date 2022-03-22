import { Html, Head, Main, NextScript } from 'next/document'
import { MiddleContainer, Wrapper } from './CustomSDK.styled'
import { useEffect } from 'react';

const CustomSDKUI = ({platformSDK}) => {
  const platformCreate= platformSDK;
  const loc = {
    selector: '#custom-product-area'
  }

  const builderOption = {
    includeDevProduct: false,
    isTemporary: false
  }
  const BuilderController = platformCreate.createProduct(loc, builderOption)
  
  return (
    <>
    <MiddleContainer>
      <Wrapper>
      <div id= 'custom-product-area'></div>
      </Wrapper>
    </MiddleContainer>
    </>
  )
}

export default CustomSDKUI