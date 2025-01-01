/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import NavBar from "@/Components/Shareds/NavBar/NavBar";
import Footer from "@/Components/Shareds/Footer/Footer";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";

const Ticket = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    console.log(userEmail);
    const [paymentData, setPaymentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                const response = await axios.get(`https://backend-ten-lac.vercel.app/payment/${userEmail}`);
                setPaymentData(response.data);
                setLoading(false);
            } catch (err) {
                setError("There are no tickets found for this email.");
                setLoading(false);
            }
        };

        fetchPaymentData();
    }, [userEmail]);

    const handleDownloadPDF = (payment) => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text("Bus Ticket", 20, 20);
        doc.setFontSize(12);

        doc.text(`Passenger: ${payment.userName}`, 20, 40);
        doc.text(`Email: ${payment.userEmail}`, 20, 50);
        doc.text(`Seats: ${payment.selectedSeats}`, 20, 60);
        doc.text(`Seat Type: ${payment.seatType}`, 20, 70);
        doc.text(`From: ${payment.destinationFrom}`, 20, 80);
        doc.text(`To: ${payment.destinationTo}`, 20, 90);
        doc.text(`Start Date: ${payment.journeyStartDate}`, 20, 100);
        doc.text(`End Date: ${payment.journeyEndDate}`, 20, 110);
        doc.text(`Start Time: ${payment.journeyStartTime}`, 20, 120);
        doc.text(`End Time: ${payment.journeyEndTime}`, 20, 130);
        doc.text(`Total Price: $${payment.totalPrice}`, 20, 140);

        doc.save(`ticket_${payment._id}.pdf`);
    };

    if (loading) return <span className="loading loading-dots loading-lg"></span>;
    if (error) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <div className="card-actions justify-end">
                 <Link to="/">
                 <button
                    className="btn btn-square btn-sm"
                    onClick={() => setError(null)} // Optional: Clear the error on button click
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                 </Link>
                </div>
                <p className="text-center text-red-500 font-semibold">{error}</p>
              </div>
            </div>
          </div>
        );
      }
      

    return (
        <div>
            <NavBar />
            <div className="payment-details">
                {paymentData.length > 0 ? (
                    paymentData.map((payment) => (
                        <div key={payment._id}>
                            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                                <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
                                    <div className="p-6">
                                        <div className="grid place-content-center">
                                            <img src="https://i.ibb.co.com/wNMGSBL/Untitled-design.png" alt="" />
                                        </div>
                                        <h1 className="text-2xl font-bold text-center text-orange-400 mb-4">
                                            Bus - Ticket
                                        </h1>
                                        <div className="border-t border-b border-gray-300 py-4">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">Passenger:</span>
                                                <span>{payment.userName}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">Email:</span>
                                                <span>{payment.userEmail}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">Seats:</span>
                                                <span>{payment.selectedSeats}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">Seat Type:</span>
                                                <span>{payment.seatType}</span>
                                            </div>
                                        </div>

                                        <div className="border-t border-b border-gray-300 py-4">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">From:</span>
                                                <span>{payment.destinationFrom}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">To:</span>
                                                <span>{payment.destinationTo}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">Start Date:</span>
                                                <span>{payment.journeyStartDate}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">End Date:</span>
                                                <span>{payment.journeyEndDate}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">Start Time:</span>
                                                <span>{payment.journeyStartTime}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">End Time:</span>
                                                <span>{payment.journeyEndTime}</span>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-300 py-4">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold text-gray-700">Total Price:</span>
                                                <span className="font-bold text-green-500">${payment.totalPrice}</span>
                                            </div>
                                        </div>

                                        <div className="text-center mt-6">
                                            <button
                                                onClick={() => handleDownloadPDF(payment)}
                                                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500"
                                            >
                                                Download Ticket
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No payment data found for this email.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Ticket;
