import '../styles/globals.css'
import Layout from '../src/common/index'

function MyApp({ Component, pageProps }) {
  return ( 
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
