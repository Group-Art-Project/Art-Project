import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateCritique = () => {

    const [authorEmail, setAuthorEmail] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [content, setContent] = useState("");


    return (
        <div className='container'>
            <div className='pageTitleButton'>
                
                <h1>Give Your Critique of title</h1>
                <Link to="/allcritiques">
                    <button className="goToBlogButton"> Go to blog </button>
                </Link>
                <Link to="/">
                    <button className="goToBlogButton"> Go to home </button>
                </Link>
            </div>
            <div className='allArtData'>
                <div className='artData'>
                    <h6>Artist:</h6>
                    <h6>Time Period:</h6>
                    <h6>Region:</h6>
                </div>
                <div className='artData'>
                    <h4>Image of Art: </h4>
                </div>
            </div>
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

                <label htmlFor="authorEmail">Author Email:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setAuthorEmail(e.target.value)}
                value={authorEmail}
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
                <textarea name="content" cols="20" rows="25"
                type="textarea"
                className="form-control"
                placeholder="Write your critique here"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                ></textarea>

                </div>
            </div>
            <span className='deletePost'>
            <button className="btn btn-primary" type="submit">Add Critique </button>
            </span>
            </form>
        </div>
    )
}

export default CreateCritique