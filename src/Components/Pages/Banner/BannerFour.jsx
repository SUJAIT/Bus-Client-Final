import { FaBusSimple } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";

const BannerFour = () => {

//bus one 
const handleButtonClick = () => {
  Swal.fire({
    title: "GREEN BUS",
    text: "Sleeper Bus",
    imageUrl: "https://i.ibb.co.com/0tgqqKn/coche-de-pasajeros-azul-bus-viajes-ilustraci-n-de-dibujos-animados-dibujado-a-mano-ilustraci-n-festi.png",
    imageWidth: 500,
    imageHeight: 300,
    imageAlt: "Custom image", confirmButtonText: "CLOSE",confirmButtonColor: "#FF7F50"
  });
};
//

  return (
    <div className="allHW operators">
      <p className="text-xl text-center">Plenty of options to choose</p>
      <p className="text-4xl text-center">Available bus operators</p>
      <div className="grid grid-rows-4 grid-flow-col gap-4 mt-5">
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p> GREEN BUS A </p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS B</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS C</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS D</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS E</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS F</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS G</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS H</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS I</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS J</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS L</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS M</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS N</p>
            <IoIosArrowForward />
          </span>
        </button>
        <button onClick={handleButtonClick}>
          <span className='myButton items-center'>
            <span className='iconColor'> <FaBusSimple /></span>
            <p>GREEN BUS O</p>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  )
}

export default BannerFour
