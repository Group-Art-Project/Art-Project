import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const ArtGeneration = () => {

    const [culture, setCulture] = useState([]);
    // const [objectDate, setObjectDate] = useState([]);
    const [error, setError] = useState('');

    const handleClick = async(searchCriteria) => {
        try {
            const culture = await axios.get('http://localhost:5000/api/art/'+ searchCriteria);

        console.log('art piece: ', JSON.stringify(culture, null, 4));
        setCulture([culture.data]);
    } 
        catch (error) {
            setError(error.message);
    } 
    };
    console.log(culture);

    return (
        <div className='container'>
            <div className='pageTitleButton'>
                <h1>Welcome!</h1>
                <Link to="/allcritiques">
                    <button className="goToBlogButton"> Go to blog </button>
                </Link>
            </div>
            <div>
                <p>
                    This site functions as an art education and creative exercise tool. We are proud to offer a randomly generated piece of art for you to critique and leave your impressions of.
                </p>
                <p>
                    Subsequently, leave your impressions on our blog site, where your analysis will be presented for other artistically interested folks to peruse.
                </p>
            </div>
            <br/>

            {/* working on functional section, buttons, onClick = filter with axios, 
            waiting on San w/ routes to actually hook up */}

            <div className='timePeriod'>
                <p>Generate a piece of art from one of the below centuries</p>
                <button onClick={handleClick}>18th Century</button>
                <button onClick={handleClick}>19th Century</button>
                <button onClick={handleClick}>20th Century</button>
                <button onClick={handleClick}>21st Century</button>
            </div>
            <div className='artRegion'>
                <p>Generate a piece of art from one of the below world regions</p>
                <button onClick={e => {handleClick("african")}}>African Art</button>
                <button onClick={e => {handleClick("american")}}>American Art</button>
                <button onClick={e => {handleClick("asian")}}>Asian Art</button>
                <button onClick={e => {handleClick("european")}}>European Art</button>
            </div>
            <div>
                <p>Another day another div for testing purposes</p>
            </div>
            <div>

        {culture.map(culture => {
            return (
            <div key={culture}>
                <h2>{culture.artistDisplayName}</h2>
                <h2>{culture.title}</h2>
                <h2>{culture.culture}</h2>
                <h2>{culture.artistNationality}</h2>
                <h2>{culture.objectBeginDate} to {culture.objectEndDate}</h2>
                <img src={culture.primaryImage} alt="sorry! there is no image available for this request"/>
                <br />
            </div>
            );
        })} 
        </div>
        </div>
    )
}

export default ArtGeneration;