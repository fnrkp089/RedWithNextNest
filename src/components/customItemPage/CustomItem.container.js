import {useRouter} from 'next/router';
import {useEffect, useState} from 'react'
import CustomItemUI from './CustomItem.presenter';


const CustomItem = () => {
  const router = useRouter();
  const itemName = router.query.id
  const [isKey, setIsKey] = useState('');

  const config = {
    token: localStorage.getItem('accessToken')
  };
  
  const options = {
    isDev: true, // default: false
    initializeTargetUrl: process.env.INTIAL // default: <운영> WebApp 
  }
  const platformSDK = new PlatformSDK(config, options);

  useEffect(() => {
    const widget = async() => {
      const config = {
        productCode: "MEPKDFT",
        selector: '#platform-product-area'
      }
      
      const options = {
        isTemporary: false,
        customKey: router.query.id
      }
      const widgetController = await platformSDK.createWidget(config, options)
    }
    widget();
  },[])

  return(
    <CustomItemUI/>
  )
}
export default CustomItem;