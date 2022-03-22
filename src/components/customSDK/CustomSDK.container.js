import CustomSDKUI from "./CustomSDK.presenter";
import {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../../../pages/_app'

const CustomSDK = () => {
  const {accessToken, setAccessToken, refreshToken,setRefreshToken} = useContext(GlobalContext);
  
  
    const config = {
      token: {accessToken}
    };
    
    const options = {
      isDev: true, // default: false
      initializeTargetUrl: process.env.INTIAL // default: <운영> WebApp 
    }
  
    const platformSDK = new PlatformSDK(config, options)
    console.log(platformSDK)
    const loc = {
      selector: '.Wrapper'
    }
  
    const builderOption = {
      includeDevProduct: false,
      isTemporary: false
    }
    const BuilderController = platformSDK.createProduct(loc, builderOption)

   
  return (
    <>
      <CustomSDKUI
      accessToken = {accessToken}
      BuilderController = {BuilderController}/>
    </>
  )
}
export default CustomSDK