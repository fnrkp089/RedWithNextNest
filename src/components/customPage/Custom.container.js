import {useRouter} from 'next/router';
import {useState, useRef, useEffect} from 'react'
import CustomListUI from './Custom.presenter';


const CustomList = () => {
  const [customData, setCustomData] = useState('');
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const toCustomPage = (id) => {
    return (e) => {
      setIsKey(e.target.id);
      router.push(`../customPage/${id}`);
  }
}
useEffect(() => {
  const fetched = fetch('/api/customMethod', {
    method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {
      setCustomData(data)
      isLoading(true)
    }) 
      
},[])
  return(
    <CustomListUI
    toCustomPage = {toCustomPage}
    loading = {loading}
    customData = {customData}/>
  )
}
export default CustomList;