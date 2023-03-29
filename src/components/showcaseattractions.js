import React, { useRef } from "react";
import {Link} from 'react-router-dom';
import "../components/style/showcaseattractions.css";
import Attractions from "./attractions.component";

const ShowcaseAttractions = () => {
    const ref = useRef(null);
    
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    };

  return (
    <section className='showcaseattractions'>
      <div className='showcase-overlayattractions'>
        <h1>Attractions</h1>
        <a href="#attraction-list">
            <button onClick={handleClick} className="btn btn-danger">
                Click Here to Scroll Down
            </button>
        </a>
        {/* <Attractions ref={ref}/> */}
        {/* <Link to="/attractions" className="btn btn-danger">
          Scroll Down
        </Link> */}
      </div>
    </section>
  );
};

export default ShowcaseAttractions;