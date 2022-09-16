import React from 'react';
import { Link } from "react-router-dom";

const CreateCritique = (props) => {
  return (
        <div className='container'>
            <div className='pageTitleButton'>
                <h1>Give Your Critique of Art.title</h1>
                <Link to="/allcritiques">
                    <button className="goToBlogButton"> Go to blog </button>
                </Link>
                <Link to="/">
                    <button className="goToBlogButton"> Go to home </button>
                </Link>
            </div>
            <div className='artData'>
                <h4>Artist:</h4>
                <h4>Time Period:</h4>
                <h4>Region:</h4>
            </div>
            <div>
                <h4>Image of Art: </h4>
            </div>
        </div>
  )
}

export default CreateCritique