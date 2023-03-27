import React from "react";
import {Link} from 'react-router-dom'

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='showcase-overlay'>
        <h1>Queen City Tours</h1>

        <Link to="./attractions" className="btn btn-danger">
          Visit Us
        </Link>
      </div>
    </section>
  );
};

export default Showcase;
