import {useRouter} from 'next/router';
import {useState, useRef, useEffect} from 'react'
import CustomListUI from './Custom.presenter';


const CustomList = () => {
  const [customData, setCustomData] = useState({});
  const [isKey, setIsKey] = useState('');
  const router = useRouter();

  const toCustomPage = (id) => {
    return (e) => {
      setIsKey(e.target.id);
      router.push(`../customPage/${id}`);
  }
}
useEffect(() => {
    fetch('/api/customMethod', {
    method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {
      setCustomData(data)
      console.log(data)
      console.log(customData)
    }) 
      
},[])
  return(
    <CustomListUI
    toCustomPage = {toCustomPage}
    customData = {customData}/>
  )
}
export default CustomList;