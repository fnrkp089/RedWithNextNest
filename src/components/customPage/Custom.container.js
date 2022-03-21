import {useRouter} from 'next/router';
import {useState, useRef} from 'react'
import CustomWriteUI from './Custom.presenter';


const CustomWrite = () => {
  const [isKey, setIsKey] = useState('');
  const router = useRouter();

  const toCustomPage = (id) => {
    return (e) => {
      setIsKey(e.target.id);
      router.push(`../customPage/${id}`);
  }
}

  const customItemList = []
  return(
    <CustomWriteUI
    toCustomPage = {toCustomPage}
    />
  )
}
export default CustomWrite;