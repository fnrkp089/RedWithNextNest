import {useRouter} from 'next/router';
import {useEffect, useState} from 'react'
import CustomItemUI from './CustomItem.presenter';


const CustomItem = () => {
  const router = useRouter();
  const itemName = router.query.id
  const proCode = itemName.split('.');
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
        productCode: proCode[1],
        selector: '#platform-product-area'
      }
      
      const options = {
        isTemporary: false,
        customKey: itemName
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