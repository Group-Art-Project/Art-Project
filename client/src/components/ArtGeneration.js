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
            <br/>

            {/* working on functional section, buttons, onClick = filter with axios, 
            waiting on San w/ routes to actually hook up */}

            <div>
                <button onClick={handleClick}>18th Century</button>
                <button onClick={handleClick}>19th Century</button>
                <button onClick={handleClick}>20th Century</button>
                <button onClick={handleClick}>21st Century</button>
            </div>
            <div>
                <button onClick={handleClick}>African Art</button>
                <button onClick={handleClick}>American Art</button>
                <button onClick={handleClick}>Asian Art</button>
                <button onClick={handleClick}>European Art</button>
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