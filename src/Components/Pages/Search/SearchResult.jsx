import { useLocation } from 'react-router-dom';

import SearchCardDesign from './SearchCardDesign';
import NavBar from '@/Components/Shareds/NavBar/NavBar';
import Footer from '@/Components/Shareds/Footer/Footer';

const SearchResult = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  return (
    <div>
      <NavBar></NavBar>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 allHW">
          {results.map((bus) => (
            <SearchCardDesign
              key={bus._id}
              id={bus._id}
              busName={bus.busName}
              busUrl={bus.busUrl} // Ensure `imageUrl` exists in your API response
              availableSeat={bus.availableSeat}
              destinationFrom={bus.destinationFrom}
              destinationTo={bus.destinationTo}
              journeyStartDate={bus.journeyStartDate}
              journeyStartTime={bus.journeyStartTime}
              journeyEndDate={bus.journeyEndDate}
              journeyEndTime={bus.journeyEndTime}
              seatType={bus.seatType}
              seatPrice={bus.seatPrice}
            />
          ))}
        </div>
      ) : (
        <p>No results found. Try different search.</p>
      )}
      <Footer></Footer>
    </div>
  );
};

export default SearchResult;
