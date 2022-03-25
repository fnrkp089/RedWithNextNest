import {useRouter} from 'next/router';
import {useEffect, useState} from 'react'
import CustomItemUI from './CustomItem.presenter';


const CustomItem = () => {
  const [widgetSaveBtn, setWidgetSaveBtn] = useState('');
  const router = useRouter();
  const itemName = router.query.id
  const proCode = itemName.split('.');
  const [totalCost, setTotalCost] = useState({
    product: 0,
    total: 0,
    vat: 0
  })
  
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
        customKey: itemName,
        onChangePrice: (changePrice => {
          setTotalCost((prev) => {
            return {...prev, 
              product: changePrice.product,
              total: changePrice.total,
              vat: changePrice.vat}
          })

        })
      }
      const widgetController = await platformSDK.createWidget(config, options);
      setWidgetSaveBtn(widgetController)
      //console.log(widgetSaveBtn)
    }
    widget();
  },[])

  const orderSave = async() => {
    const response = await widgetSaveBtn.save(options)
    if(response){
      fetch('/api/customFavorite', {
        method: 'POST',
        body: JSON.stringify(response),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
      alert('상품이 장바구니에 담겼습니다.')
      router.push(`/favorite`);
    }
    console.log(response);

    //주문 위젯 불러오기...
    // const config = {
    //   widgetId: '20220324.MEPKDFT.feUgRSEcaMbPQe1R',
    //   selector: '#red-platform-area',
      
    // };
    
    // const options = {
    //   onLoad: ((report) => console.log(report)),
    //   hide: true
    // };
    // await platformSDK.openWidget(config, options);
  }

  return(
    <CustomItemUI
    totalCost = {totalCost}
    orderSave = {orderSave}/>
   
  )
}
export default CustomItem;