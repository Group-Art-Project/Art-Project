import React, { useEffect } from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateCritique = (props) => {

    const {opinionList, setOpinionList} = props;
    const {culture, setCulture} = props;

    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [opinionContent, setOpinionContent] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const opinion = {
            author,
            email,
            opinionContent,
            rating
        }

        console.log('===opinion', opinion)
        const data = {opinion, culture: culture[0]}
        axios.post('http://localhost:5000/api/art/critique',
        {
            title: data.culture.title,
            artistDisplayName: data.culture.artistDisplayName,
            objectBeginDate: data.culture.objectBeginDate,
            objectEndDate: data.culture.objectEndDate,
            objectName: data.culture.objectName,
            culture: data.culture.culture,
            artistNationality: data.culture.artistNationality,
            creditLine:data.culture.creditLine,
            primaryImage: data.culture.primaryImage,
            author: data.opinion.author,
            email: data.opinion.email,
            opinionContent: data.opinion.opinionContent,
            rating: data.opinion.rating,
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setOpinionList([data.opinion, data.culture]);
            setAuthor("");
            setEmail("");
            setRating("");
            setOpinionContent("");
            navigate("/allcritiques");
            console.log(data);
        })
        .catch((err) => {
            console.log(err.response.status);
            setErrors(err.response.status);
        });
    }

    console.log(culture);
    

    return (
        <div className='container'>
            <div className='pageTitleButton' key={culture}>
                
                <h2 id='critique-header'>Give Your Critique of: {culture[0].title} </h2>
                <div className='button-spacer'>
                    <Link to="/allcritiques">
                        <button className="goToBlogButton"> Go to blog </button>
                    </Link>
                    <Link to="/">
                        <button className="goToBlogButton"> Go to home </button>
                    </Link>
                </div>
            </div>
            <div className='allArtData'>
                <div className='artData'>
                    <h6>Artist: {culture[0].artistDisplayName} </h6>
                    <h6>Object: {culture[0].objectName}</h6>
                    <h6>Time Period: {culture[0].objectBeginDate} to {culture[0].objectEndDate} </h6>
                    <h6>Region: {culture[0].culture}</h6>
                    <h6>Nationality: {culture[0].artistNationality}</h6>
                    <h6>Description: {culture[0].creditLine}</h6>
                </div>
                <div className='artData'>
                    <h6>This piece is housed in: {culture[0].department}</h6>
                    <img id='primaryImage' src={culture[0].primaryImage} alt="sorry there is no image available"/>
                </div>
            </div>
            <br/>
            <br/>
            <form>
            <div className="form-group">
                <div className="column">
                <label htmlFor="author">Author:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                />
    {/* {errors.author ? <p id='error-red'>{errors.author.message}</p> : null} */}
                <label htmlFor="authorEmail">Author Email:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <label htmlFor="rating">Rating:</label>
                <input name="rating"
                type="text"
                className="form-control"
                placeholder="Enter a rating from 1-10"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                ></input>


                <label htmlFor="content">Content:</label>
                <textarea name="content" cols="20" rows="12"
                type="textarea"
                className="form-control"
                placeholder="Write your critique here"
                onChange={(e) => setOpinionContent(e.target.value)}
                value={opinionContent}
                ></textarea>

                </div>
            </div>
            <span className='deletePost'>
            <button onClick={submitHandler} className="btn btn-primary">Add Critique </button>
            </span>
            </form>
        </div>
    )
}

export default CreateCritique;