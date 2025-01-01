
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../.././Components/Pages/Search/Search.css';
import { Button } from '@/components/ui/button';

const Search = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busType, setBusType] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = async () => {
    setFrom('');
    setTo('');
    setBusType('');
    try {
      setError(null);

      // Construct the query parameters
      const queryParams = new URLSearchParams({
        destinationFrom: from,
        destinationTo: to,
        seatType: busType,
      });

      // Send the API request
      const response = await fetch(`https://backend-ten-lac.vercel.app/search?${queryParams.toString()}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      // Parse results
      const data = await response.json();

      // Redirect to /bus-results with results
      navigate('/search-results', { state: { results: data } });
    } catch (err) {
      console.error('Error fetching search results:', err);
      setError(err.message);

    }
  };

  return (
    <div className="allHW">
      <div className="search">
        <div className="inputParent">
          <div className="inputBox form__group-fast">
            <p className="text-sm">FROM</p>
            <input
              type="text"
              placeholder="Choose a location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="inputBox form__group-fast">
            <p className="text-sm">TO</p>
            <input
              type="text"
              placeholder="Choose a location"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="inputBox form__group-fast">
            <p className="text-sm">BUS TYPE</p>
            <input
              type="text"
              placeholder="ALL"
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
            />
          </div>

          <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="text-center mt-4">
          
          {error && <p className="error text-red-500">{error}</p>}
        </div>

      </div>
    </div>
  );
};

export default Search;
