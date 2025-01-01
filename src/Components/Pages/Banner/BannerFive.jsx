
import './BannerFive.css'
import { FaLocationDot } from "react-icons/fa6";

const BannerFive = () => {
  return (
    <div  className='w2'>
      <div className='destinationImg'>
        <img src="https://ticket.jatri.co/_nuxt/img/route.be1968e.svg" alt="" />
      </div>
      <p>Our most popular routes</p>

      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <tbody>
      {/* row 1 */}
      <tr>
      
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span> Dhaka</span></td>
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span>Chattogram</span></td>
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span>Rajshahi</span></td>
      </tr>
      {/* row 2 */}
      <tr>
      
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span>Khulna</span></td>
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span>Barishal</span></td>
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span>Sylhet</span></td>
      </tr>
      {/* row 3 */}
      <tr>
      
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span> Rangpur</span></td>
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span>Mymensingh</span></td>
      <td><span   className='flex items-center gap-2 cursor-pointer'><span className='iconLocation'><FaLocationDot /></span>Cox-Bazar</span></td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default BannerFive
