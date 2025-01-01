import Destination from "./Destination"
import './BusCard.css'
import NavBar from "@/Components/Shareds/NavBar/NavBar"
import Footer from "@/Components/Shareds/Footer/Footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BusCard = () => {

const {id} = useParams()
const [busData, setBusData] = useState([])
console.log(id)
useEffect(()=>{
  const fetchBusData = async () =>{
  try{
    const response = await fetch(`https://backend-ten-lac.vercel.app/businfo/${id}`)
    const data = await response.json();
    setBusData(data)
  }catch(error){
    console.log(error)
  }
  };
  fetchBusData()
},[id])

const {
  busName,
  seatPrice,
  availableSeat,
  busUrl,
  journeyStartDate,
  journeyEndDate,
  seatType,
  journeyStartTime,
  journeyEndTime,
  destinationFrom,
  destinationTo,
} = busData;

  return (
    <div>
      <NavBar></NavBar>
      <div className="allHW flex justify-between">
 <div>
          <div>
        <img src={busUrl} alt="" />
      </div>
   
    <h2 className="font-bold  text-3xl grid justify-items-center m-5">{busName}</h2>
    {/* carousel start */}
      <div className="carouselParent">

      <div className="carousel ratingCaroselWidth text">
  <div id="sl1" className="carousel-item relative w-full">


  <div className="ratingText ratinTextW text-center">
   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<div>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe excepturi delectus aperiam eveniet. Unde esse dolorem laboriosam ipsam, ullam obcaecati aliquam veritatis molestiae fugiat at dolore blanditiis ad, non saepe deleniti eum officia possimus vel accusamus ut quaerat, recusandae vitae? Deserunt temporibus cumque at, consequatur maiores aperiam ipsum repudiandae placeat.</p>
</div>
  
   </div>
    <div className="absolute left-0.5 rightCSS top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl4" className="btn btn-circle">❮</a>
      <a href="#sl2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="sl2" className="carousel-item relative w-full">
  <div className="ml-32 text-center">
   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <p>This Is Review</p>
   </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl1" className="btn btn-circle">❮</a>
      <a href="#sl3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="sl3" className="carousel-item relative w-full">
  <div className="ml-32 text-center">
   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <p>This Is Review</p>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl2" className="btn btn-circle">❮</a>
      <a href="#sl4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="sl4" className="carousel-item relative w-full">
   <div className="ml-32 text-center">
   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <p>This Is Review</p>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#sl3" className="btn btn-circle">❮</a>
      <a href="#sl1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    </div>
    {/* carousel end */}
  


 </div>
{/* Destination start */}
<div className=" ">
  <Destination data={{ 
    seatPrice,
    availableSeat,
    journeyStartDate,
    journeyEndDate,
    seatType,
    journeyStartTime,
    journeyEndTime,
    destinationFrom,
    destinationTo 
  }}></Destination>
</div>
{/* Destination end */}
    </div> 

    <Footer></Footer>
    </div>
   
  )
}

export default BusCard
