import { useState, useEffect } from 'react';
import CustomFavoriteUI from './CustomFavorite.presenter';
import {useRouter} from 'next/router';

export default function CustomFavorite() {
  const [favoriteData, setFavoriteData] = useState({});
  const [flag, setFlag] = useState(false)
  const [total, setTotal] = useState(0);
  const [targetWidget, setTargetWidget] = useState();
  const router = useRouter();
  let widgetIdList = []
  const config = {
    token: localStorage.getItem('accessToken')
  };
  
  const options = {
    isDev: true, // default: false
    initializeTargetUrl: process.env.INTIAL // default: <운영> WebApp 
  }
  
  const platformSDK = new PlatformSDK(config, options);

  if(flag === true){
    let sum = 0;
    favoriteData.data.map(list => {
      sum = sum + list.priceInfo.total
    })
    setTotal(sum)
    setFlag(false) 
  }

  const handleOrderChange = async(e) => {
    const targetOrder = e.target.id;
    const targetOrderValue = e.target.value; 
    const config = {
      widgetId: targetOrder,
      selector: '#red-platform-area'
    };
    
    const options = {
      hide: true,
      onLoad: ((report) => console.log(report))
    };

    const setValue = {
      value: Number(targetOrderValue)
    }
    
    const opendWidget = await platformSDK.openWidget(config, options);
    const response = await opendWidget.setAmount(setValue);
    console.log(response)
    const responseSave = await opendWidget.getWidgetData();
    // if(responseSave){
    //   fetch('/api/customFavorite', {
    //     method: 'PUT',
    //     body: JSON.stringify(responseSave),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //   alert('해당 상품의 수량을 수정했습니다')
    // }

    // fetch('/api/customFavorite', {
    //   method: 'GET'
    //   })
    //   .then(response => response.json())
    //   .then((data) => {
    //     setFavoriteData(data)
    //     setFlag(true);
    //     console.log(data)
    // })
    
  }


  useEffect(() => {
    const showFavoriteList = async() => {
      fetch('/api/customFavorite', {
        method: 'GET'
        })
        .then(response => response.json())
        .then((data) => {
          setFavoriteData(data)
          setFlag(true);
          console.log(data)
      })
      // const config = {
      //   widgetId: '20220325.GSNTBND.C8mzgCcuxbd3p3WU',
      //   selector: '#red-platform-area'
      // };
      
      // const options = {
      //   onLoad :(report) => {console.log(report)},
      //   //hide: true
      // };
      
      // await platformSDK.openWidget(config, options)
      //await platformSDK.getproductOptionWithWidgetIDs(widgetIdList)
    }
    showFavoriteList()
},[])
  return (
    <CustomFavoriteUI
    favoriteData = {favoriteData}
    total = {total}
    handleOrderChange = {handleOrderChange}/>
  )
}