import {useRouter} from 'next/router';
import {useState} from 'react'
import CustomItemUI from './CustomItem.presenter';


const CustomItem = () => {
  const router = useRouter();
  const itemName = router.query.id
  const [isKey, setIsKey] = useState('');

  return(
    <CustomItemUI/>
  )
}
export default CustomItem;