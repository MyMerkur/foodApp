import { useState,useEffect } from "react";
import axios from "axios";
const useFetch =(url)=>{
    const [data,setData] = useState([]);

    const fetchData = async ()=>{
        try{
            const {data:responseData} = await axios.get(url);
            setData(responseData)
        }catch(err){
            console.log('Bir hata oluştu',err.message)
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
    return {data}
}
export default useFetch;