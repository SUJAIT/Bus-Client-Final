/* eslint-disable react/prop-types */

import BusSeats from './BusSeats'

const Destination = ({data}) => {

    const { 
        seatPrice,
        availableSeat,
        journeyStartDate,
        journeyEndDate,
        seatType,
        journeyStartTime,
        journeyEndTime,
        destinationFrom,
        destinationTo 
      } = data || {}


console.log(destinationTo)

  return (
 <div>

<div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md border border-gray-200">
  <div className="info space-y-2">
    <p className="text-gray-700 font-semibold">Seat Price: <span className="text-green-600">{seatPrice}</span></p>
    <p className="text-gray-700 font-semibold">Journey Start Date: <span className="text-green-600">{journeyStartDate}</span></p>
    <p className="text-gray-700 font-semibold">Journey End Date: <span className="text-green-600">{journeyEndDate}</span></p>
    <p className="text-gray-700 font-semibold">Seat Type: <span className="text-green-600">{seatType}</span></p>
    <p className="text-gray-700 font-semibold">Journey Start Time: <span className="text-green-600">{journeyStartTime}</span></p>
    <p className="text-gray-700 font-semibold">Journey End Time: <span className="text-green-600">{journeyEndTime}</span></p>
    <p className="text-gray-700 font-semibold">From: <span className="text-green-600">{destinationFrom}</span></p>
    <p className="text-gray-700 font-semibold">To: <span className="text-green-600">{destinationTo}</span></p>
  </div>
</div>


    <BusSeats 
        seatPrice={seatPrice}
        availableSeat={availableSeat}
        journeyStartDate={journeyStartDate}
        journeyEndDate={journeyEndDate}
        seatType={seatType}
        journeyStartTime={journeyStartTime}
        journeyEndTime={journeyEndTime}
        destinationFrom={destinationFrom}
        destinationTo={destinationTo}
    />
 </div>
  )
}

export default Destination
