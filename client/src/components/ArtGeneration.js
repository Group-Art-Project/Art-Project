import React from 'react';
import { Link } from "react-router-dom";

const ArtGeneration = () => {
    return (
        <div className='container'>
            <div className='logoLink'>
                <p>Logo will go here on left hand side in line with link back to home</p>
                <Link to="/allcritiques">
                    <button className="goToBlogButton"> Go to blog </button>
                </Link>
            </div>
            <div>
                Hello
                World
            </div>
        </div>
    )
}

export default ArtGeneration;