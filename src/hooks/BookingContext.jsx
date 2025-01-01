/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

// Create Context
const BookingContext = createContext();

// Provider Component
export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState([]);

  // Add booking to array
  const addBooking = (data) => {
    setBookingData((prevData) => [...prevData, data]);
  };

  return (
    <BookingContext.Provider value={{ bookingData, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

// Hook to use the context
export const useBooking = () => useContext(BookingContext);
