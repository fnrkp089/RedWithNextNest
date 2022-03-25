import CustomSDKUI from "./CustomSDK.presenter";
import {useState, useContext, useEffect} from 'react'
import {useRouter} from 'next/router';
import { GlobalContext } from '../../../pages/_app'
import axios from 'axios'
const CustomSDK = () => {
  const [customSaveButton, setCustomSaveButton] = useState('');
  let customInfo = {} ; 
  const router = useRouter()
  const {accessToken, setAccessToken, refreshToken,setRefreshToken} = useContext(GlobalContext);
  const [flag, setFlag] = useState(false);
  
   
  const config = {
    token: localStorage.getItem('accessToken')
  };
  
  const options = {
    isDev: true, // default: false
    initializeTargetUrl: process.env.INTIAL // default: <운영> WebApp 
  }
  
  const platformSDK = new PlatformSDK(config, options);
   
  useEffect(() => {
    const loadBuilder = async () => {
      const loc = {
        selector: '#custom-product-area'
      }
      const builderOption = {
        includeDevProduct: false,
        isTemporary: false
      }
      const builderController =  await platformSDK.createProduct(loc, builderOption);
      setCustomSaveButton(builderController);
    }
    loadBuilder();
  }, []);

  const customSave = async () => {
    const response = await customSaveButton.save();
    if(response){
      fetch('/api/customMethod', {
        method: 'POST',
        body: JSON.stringify(response),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
        alert('커스텀 상품이 생성되었습니다');
        router.push(`/customList`);
    }
  }

  return (
    <CustomSDKUI
    customSave = {customSave}/>
  )
}
export default CustomSDK