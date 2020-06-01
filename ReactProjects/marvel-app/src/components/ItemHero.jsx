import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ItemHero = () => {
    console.log('oda!');
    const params = useParams();
    const id = params.id;
    const count = params.count;
    const [post, postsState] = useState([]);
    const [img, imageState] = useState('no image');
    const [series, seriesState] = useState([]);
    const [comics, comicsState] = useState([]);

    const results = async () => {
        const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=02f4bcadf5e462fa78574ba01280cebc&hash=52a1acd1fff4dc2b99f9189a760b31b5`;
        const response = await fetch(url);
        const map = await response.json();
        const heroInfo = map['data']['results'][0];
        postsState(heroInfo);
        imageState(heroInfo.thumbnail.path + '.' + heroInfo.thumbnail.extension);
        seriesState(heroInfo.series.items);
        comicsState(heroInfo.comics.items);
    }

    useEffect(() => {
        results();
    }, []);

    return (
        <div>
            <div className="container bg-faded py-3 text-white">
                <div className="row">
                    <div className="col-xs-12 col-md-11 text-left">
                        <Link to={`/`}>&laquo; Back</Link>
                    </div>
                    <div className="col-xs-12 col-md-1 text-right">
                        <span> {count} </span>
                    </div>
                </div>
                <hr style={{ backgroundColor: 'white' }} />
                <div className="col-md-8 mx-auto card text-white border-light special-card">
                    <div className="row card-body">
                        <div className="col-xs-6 col-md-6">
                            <img className="img-fluid rounded" alt="Responsive" src={img} />
                            <div className="p-3 text-center">
                                <h1> {post.name} </h1>
                            </div>
                        </div>
                        <div className="col-xs-5 col-md-6">
                            <h4>Description</h4>
                            <p> {post.description === '' ? 'Description not found' : post.description} </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-md-8 mx-auto card text-white border-light special-card">
                    <div className="row card-body">
                        <div className="col-xs-6 col-md-12">
                            <h4>Comics</h4>
                            <ul>
                                {
                                    comics.length === 0 ?
                                        'Comics not found'
                                        :
                                        comics.map((comic, index) => {
                                            return <li key={index}>
                                                {comic.name}
                                            </li>
                                        })

                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-md-8 mx-auto card text-white border-light special-card">
                    <div className="row card-body">
                        <div className="col-xs-6 col-md-12">
                            <h4>Series</h4>
                            <ul>
                                {
                                    series.length === 0 ?
                                        'Series not found'
                                        :
                                        series.map((serie, index) => {
                                            return <li key={index}>
                                                {serie.name}
                                            </li>
                                        })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ItemHero;
