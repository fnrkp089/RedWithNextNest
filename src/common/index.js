import HeaderNavi from './headernavi/HeaderNavi.container'
import {useRouter} from 'next/router'


const Layout = ({children}) => {
  const router = useRouter();
  return(
    <>
   <HeaderNavi/>
   <div>{children}</div>
    </>
  )
}

export default Layout