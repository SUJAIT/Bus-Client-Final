// /* eslint-disable react/prop-types */
// import { useState } from 'react';
// import { MdOutlineChair } from 'react-icons/md'; // Import the chair icon
// import './BusSeat.css'; // Link to the CSS file
// import 'sweetalert2/dist/sweetalert2.min.css';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// import {loadStripe} from '@stripe/stripe-js';
// import useAuth from '@/hooks/useAuth';
// // import { useBooking } from '@/hooks/BookingContext';



// const BusSeats = ({availableSeat,  seatPrice,  journeyStartDate,
//   journeyEndDate,
//   seatType,
//   journeyStartTime,
//   journeyEndTime,
//   destinationFrom,
//   destinationTo }) => {

//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const { user,loading} = useAuth()

//   const userEmail = user?.email
//   const userName = user?.displayName
//     console.log(userEmail)
//     console.log(userName)
//     console.log(loading)

//   const totalPrice = selectedSeats.length * seatPrice;

//   // const journeyData = [
//   //   { userEmail,userName,totalPrice,journeyStartDate, journeyEndDate, seatType, journeyStartTime, journeyEndTime, destinationFrom, destinationTo }
//   // ];

//   const journeyData = {
//     userEmail,
//     userName,
//     selectedSeats,
//     totalPrice,
//     journeyStartDate,
//     journeyEndDate,
//     seatType,
//     journeyStartTime,
//     journeyEndTime,
//     destinationFrom,
//     destinationTo,
//   };

//   console.log(journeyData);

// console.log(totalPrice)
//   console.log(selectedSeats)
//   console.log(seatPrice)
//   console.log(journeyData)

//   //db Data payment send
//   // Function to save payment details
//   const savePaymentDetails = async (payment) => {
//     const response = await fetch('https://backend-ten-lac.vercel.app/payments', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payment),
//     });
//     const data = await response.json();
//     console.log(data.message);
//   };

//   //

//   //Make a payment ok
// // const makePayment = async () => {
// //   const stripe =await loadStripe('pk_test_51L27WdEDv8zcGvWbYzuDy6QQSdupXYLRnGNNBTCkNqEfA0TVQM1CZ02r7lwEgUKNqev0ZLzesQh1MOtW1SD5Q2T700Ss8F1XTf')
// // const body = {
// //   products: journeyData
// // }
// // const headers = {
// //   "Content-Type": "application/json"
// // }
// // const response = await fetch('https://backend-ten-lac.vercel.app/create-checkout-session',{
// //   method: "POST",
// //   headers:headers,
// //   body: JSON.stringify(body)
// // })
// // const session = await response.json();
// // const result = await stripe.redirectToCheckout({
// //   sessionId: session.id
// // });



// // if(result.error){
// //   console.log(result.error)
// // }

// // }
//   //pay

//   //pay
//   // Make a payment
//   const makePayment = async () => {
//     const stripe = await loadStripe('pk_test_51L27WdEDv8zcGvWbYzuDy6QQSdupXYLRnGNNBTCkNqEfA0TVQM1CZ02r7lwEgUKNqev0ZLzesQh1MOtW1SD5Q2T700Ss8F1XTf');

//     const body = {
//       products: [journeyData],
//     };

//     const headers = {
//       'Content-Type': 'application/json',
//     };

//     try {
//       const response = await fetch('https://backend-ten-lac.vercel.app/create-checkout-session', {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(body),
//       });

//       const session = await response.json();
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (!result.error) {
//         // Save payment details after successful payment
//         savePaymentDetails({
//           userEmail: journeyData.userEmail,
//           userName: journeyData.userName,
//           totalPrice: journeyData.totalPrice,
//           selectedSeats: journeyData.selectedSeats,
//           transactionId: session.id,
//           paymentStatus: 'Succeeded',
//           timestamp: new Date().toISOString(),
//         });
//       } else {
//         console.error(result.error.message);
//       }
//     } catch (error) {
//       console.error('Payment failed:', error);
//     }
//   };
//   // Function to make payment


//   const toggleSeat = (seatNumber) => {
//     if (selectedSeats.includes(seatNumber)) {
//       setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//     } else if (selectedSeats.length < 4) {
//       setSelectedSeats([...selectedSeats, seatNumber]);
//     } else {
//       Swal.fire('You can only select up to 4 seats!');
      
//     }

//   };



//   return (
//     <div className="bus-container">
//       <h2>Select up to 4 seats</h2>
//       <div className="seats-grid">
//         {Array.from({ length: availableSeat }, (_, index) => (
//           <div 
//             key={index}
//             className={`seat-icon ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
//             onClick={() => toggleSeat(index + 1)}
//           >
//             <MdOutlineChair size={40} />
//             <span className="seat-number">{index + 1}</span>
//           </div>
//         ))}
//       </div>
//       <div className="selected-info">
//         <p>Selected Seats: {selectedSeats.join(',') || 'Not Select you any seat'}</p>
//       </div>
//       <Link>
//       <button disabled={!selectedSeats.length} className='btn btn-error' onClick={makePayment}>Payment</button>
//       </Link>
//     </div>
//   );
// };

// export default BusSeats;



////////////////////////////////////////////////////////////////////////



/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MdOutlineChair } from 'react-icons/md'; // Import the chair icon
import './BusSeat.css'; // Link to the CSS file
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import useAuth from '@/hooks/useAuth';
import useRequireAuth from '@/hooks/userValid';

const BusSeats = ({ availableSeat, seatPrice, journeyStartDate, journeyEndDate, seatType, journeyStartTime, journeyEndTime, destinationFrom, destinationTo }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { user, loading } = useAuth();

  useRequireAuth();

  const userEmail = user?.email;
  const userName = user?.displayName;

  const totalPrice = selectedSeats.length * seatPrice;

  const journeyData = {
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
  };

  console.log(journeyData);

  // Function to save payment details
  const savePaymentDetails = async (payment) => {
    console.log('Attempting to save payment:', payment);
    try {
        const response = await fetch('https://backend-ten-lac.vercel.app/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payment),
        });

        if (!response.ok) {
            throw new Error(`Failed to save payment. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Payment saved successfully:', data);
    } catch (error) {
        console.error('Error during savePaymentDetails:', error);
    }
};

  

  // Make a payment
  const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51L27WdEDv8zcGvWbYzuDy6QQSdupXYLRnGNNBTCkNqEfA0TVQM1CZ02r7lwEgUKNqev0ZLzesQh1MOtW1SD5Q2T700Ss8F1XTf');

    const body = {
      products: [journeyData],
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch('https://backend-ten-lac.vercel.app/create-checkout-session', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (!result.error) {
        // Save payment details after successful payment
        console.log('Payment successful:', result);
        savePaymentDetails({
          userEmail: journeyData.userEmail,
          userName: journeyData.userName,
          totalPrice: journeyData.totalPrice,
          selectedSeats: journeyData.selectedSeats,
          transactionId: session.id,
          paymentStatus: 'Succeeded',
          timestamp: new Date().toISOString(),
        });
      } else {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  // Toggle seat selection
  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < 4) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      Swal.fire('You can only select up to 4 seats!');
    }
  };

  return (
    <div className="bus-container">
      <h2>Select up to 4 seats</h2>
      <div className="seats-grid">
        {Array.from({ length: availableSeat }, (_, index) => (
          <div
            key={index}
            className={`seat-icon ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => toggleSeat(index + 1)}
          >
            <MdOutlineChair size={40} />
            <span className="seat-number">{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="selected-info">
        <p>Selected Seats: {selectedSeats.join(',') || 'No seats selected'}</p>
      </div>
      <Link>
        <button disabled={!selectedSeats.length} className="btn btn-error" onClick={makePayment}>
          Payment
        </button>
      </Link>
    </div>
  );
};

export default BusSeats;
