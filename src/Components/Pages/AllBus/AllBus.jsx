import { useEffect, useState } from 'react'

// import './BusInfoCard.css'
import BusCardDesign from './BusCardDesign';
import NavBar from '@/Components/Shareds/NavBar/NavBar';
import Footer from '@/Components/Shareds/Footer/Footer';

const BusInfo = () => {
    
    const [datas,setData] = useState([]); //store fetched data
    const [loading,setLoding] = useState(true); //Track Loading State
    const [error,setError] = useState(null); // Track errors

    //backend GET data fetch
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('http://localhost:5000/businfo')
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);//saved data to state
            }catch(err){
                setError(err.message);//handle error
            } finally{
                setLoding(false)//Stop loading indicate
            }
        };
        fetchData();
    },[]) 

    if(loading) return <span className="loading loading-infinity loading-lg"></span>
    if(error) return <p className='text-rose-600'>Error:{error}</p>
console.log(datas)
  return (
    <div className='allHW'>
        <NavBar></NavBar>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
      {
      datas.map(data=><BusCardDesign key={data._id} data={data} setData={setData}></BusCardDesign>)
      }
    </div>
    <Footer></Footer>
    </div>
   
  )
}

export default BusInfo
