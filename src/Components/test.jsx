/* eslint-disable react/prop-types */


const BusTicket = ({
  userEmail,
  userName,
  selectedSeats,
  totalPrice,
  journeyStartDate,
  journeyEndDate,
  seatType,
  journeyStartTime,
  journeyEndTime,
  destinationFrom,
  destinationTo,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Jabo.com - Bus Ticket
          </h1>
          <div className="border-t border-b border-gray-300 py-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Passenger:</span>
              <span>{userName}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Email:</span>
              <span>{userEmail}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Seats:</span>
              <span>{selectedSeats}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Seat Type:</span>
              <span>{seatType}</span>
            </div>
          </div>

          <div className="border-t border-b border-gray-300 py-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">From:</span>
              <span>{destinationFrom}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">To:</span>
              <span>{destinationTo}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Start Date:</span>
              <span>{journeyStartDate}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">End Date:</span>
              <span>{journeyEndDate}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Start Time:</span>
              <span>{journeyStartTime}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">End Time:</span>
              <span>{journeyEndTime}</span>
            </div>
          </div>

          <div className="border-t border-gray-300 py-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Total Price:</span>
              <span className="font-bold text-green-500">${totalPrice}</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTicket;
