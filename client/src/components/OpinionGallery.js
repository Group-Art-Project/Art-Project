import React from 'react';
import { Link } from "react-router-dom";

const OpinionGallery = () => {
    return (
        <div className="container">
            <div className="font-link">
            <div className="col-12">
                <div className='pageTitleButton'>
                    <h1>Art Critique Blog</h1>
                    <Link to="/">
                        <button className="goToBlogButton"> Go to Art Generation </button>
                    </Link>
                </div>
                <div className="body">
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        );
}

export default OpinionGallery