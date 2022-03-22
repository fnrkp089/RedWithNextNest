import '../styles/globals.css'
import Layout from '../src/common/index'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import Head from "next/head";
import Script from 'next/script'

export const GlobalContext = createContext({
  accessToken: '',
  setAccessToken: () => {},
  refreshToken : '',
  setRefreshToken: () => {}
})

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    //토큰 존재시
    if(accessToken) return;
      const getToken = async () => {
        try{
          const response = await axios.post(process.env.TOKENAUTH, {}, {
            headers : {
              'Authorization' : process.env.SERVER
            }
          })
          setAccessToken(response.data.result.token);
          setRefreshToken(response.data.result.refreshToken);
          console.log(`토큰: ${accessToken} 리프레시토큰 : ${refreshToken}`)
        } catch(err) {
          console.log("Error >>", err);
        };
      };
      getToken();
  }, [])
  return ( 
    <>
        <Script src="https://platform-cdn.redprinting.co.kr/sdk/RedPlatformSDK.min.js" strategy="beforeInteractive"/>
        <GlobalContext.Provider value={{accessToken, setAccessToken, refreshToken, setRefreshToken}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp
