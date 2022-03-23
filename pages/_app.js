import '../styles/globals.css'
import Layout from '../src/common/index'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import Head from "next/head";
import Script from 'next/script'

export const GlobalContext = createContext({//관리할 State 들을 객체 형태로 
  accessToken : '',
  setAccessToken : () => {},
  refreshToken : '',
  setRefreshToken : () => {}
})

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    //토큰 존재시
    if(localStorage.getItem('accessToken')){
      return;
    }
    
    //토큰 없을 경우 발급
      const getToken = async () => {
        try{
          const response = await axios.post(process.env.TOKENAUTH, {}, {
            headers : {
              'Authorization' : process.env.SERVER
            }
          })
          localStorage.setItem('accessToken', response.data.result.token)
          localStorage.setItem('refreshToken', response.data.result.refreshToken);
          setAccessToken(localStorage.getItem('accessToken'));
          setRefreshToken(localStorage.getItem('refreshToken'));
          console.log(`토큰: ${accessToken} 리프레시토큰 : ${refreshToken}`)
        } catch(err) {
          console.log("Error >>", err);
        };
      };
      getToken();
  }, []);
  return ( 
    <>
       <GlobalContext.Provider value={{accessToken, setAccessToken, refreshToken, setRefreshToken}}>
        <Script src="https://platform-cdn.redprinting.co.kr/sdk/RedPlatformSDK.min.js"/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp
