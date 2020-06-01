import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Catalog = () => {
    const maxResults = 1450;
    let [count, countState] = useState(1);
    const [offset, offsetState] = useState(0);
    const [posts, postsState] = useState([]);

    const results = async () => {
        const url = `https://gateway.marvel.com:443/v1/public/characters?limit=30&offset=${offset}&ts=1&apikey=02f4bcadf5e462fa78574ba01280cebc&hash=52a1acd1fff4dc2b99f9189a760b31b5`;
        const response = await fetch(url);
        const map = await response.json();
        postsState(map['data']['results']);
    }

    useEffect(() => {
        results();
    }, [offset]);

    const incrementPageResults = () => {
        if (offset + 30 < maxResults) {
            offsetState(offset => offset + 30);
            countState(count => count + 30);
        }
    }

    const decrementPageResults = () => {
        if (offset >= 30) {
            offsetState(offset => offset - 30); 
            countState(count => count - 30);
        }
    }

    return (
        <div>
            <div className="col-md-1 mx-auto">
                <ul className="pagination text-white">
                    <li className="page-item">
                        <a className="page-link bg-dark" href='#' onClick={decrementPageResults} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link bg-dark" href='#' onClick={incrementPageResults} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
                {
                    posts.map(post => {
                        return <div key={post.id} className="col-md-4 text-white">
                            <div className="card special-card">
                                <div className="card-body">
                                    <Link to={`/post/${post.id}/${count++}`}>
                                        <img className="card-img-top img-thumbnail" src={`${post['thumbnail']['path']}.${post['thumbnail']['extension']}`} />
                                        <h3 className="card-title">{post.name}</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="col-md-1 mx-auto">
                <ul className="pagination text-white">
                    <li className="page-item">
                        <a className="page-link bg-dark" href='#' onClick={decrementPageResults} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link bg-dark" href='#' onClick={incrementPageResults} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Catalog;
