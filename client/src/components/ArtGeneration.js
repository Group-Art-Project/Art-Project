import {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const ArtGeneration = () => {

    const [art, setArt] = useState([]);
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            const {art} = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]', {
            headers: {
                Accept: 'application/json',
        },
        });

        console.log('art piece: ', JSON.stringify(art, null, 4));
        setArt(art.id);
    } 
        catch (error) {
            setError(error.message);
    } 
    };
    console.log(art.id);

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
                <button onClick={handleClick}>African Art</button>
                <button onClick={handleClick}>American Art</button>
                <button onClick={handleClick}>Asian Art</button>
                <button onClick={handleClick}>European Art</button>
            </div>
            <div>
                <p>Another day another div for testing purposes</p>
            </div>
            <div>
        {error && <h2>{error}</h2>}

        {art.map(art => {
            return (
            <div key={art.id}>
                <h2>{art.title}</h2>
                <h2>{art.region}</h2>
                <h2>{art.primaryImage}</h2>
                <br />
            </div>
            );
        })}
        </div>
        </div>
    )
}

export default ArtGeneration;