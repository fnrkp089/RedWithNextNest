import HeaderNaviUI from './HeaderNavi.presenter'
import{useRouter} from "next/router";

const HeaderNavi = () => {
  const router = useRouter();

  const handleCustom= () => {
    router.push(`/custom`);
  }

  const handleGoodsList = () => {
    router.push(`/goodsList`);
  }
  
  const handleFavorite = () => {
    router.push('/favorite')
  }

  const handleOrder = () => {
    router.push('/order')
  }
  return(
    <HeaderNaviUI
    handleCustom = {handleCustom}
    handleGoodsList ={handleGoodsList}
    handleFavorite = {handleFavorite}
    handleOrder = {handleOrder}/>
  )
}

export default HeaderNavi