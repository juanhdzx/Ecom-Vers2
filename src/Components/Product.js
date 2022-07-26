import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import videoJDM from '../mp4/jdm_meet.mp4';


     
     const FeaturedProducts = () => {
        const [products, setProducts] = useState([]);
            //products are the values in database

            useEffect(() => {
                fetchProducts();
            }, []);

        const fetchProducts = () => {
            axios
                .get('./Data.json') //moved to public folder
                .then((res) => {
                    console.log(res);
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        return(
            <div>
                <h1>Fitment Only</h1>
                <h3>Featured collection...</h3>
    
                                    {/* Jdm Video  */}
                    <div className="jdm">
                        <video src={videoJDM} autoPlay loop muted>
                            <div className="video-title">
                                <h2>`This is... Fitment Only</h2>
                            </div>
                        </video>
                    </div>
                    <div className="items-contain">
                        {products.map((product) => (
                            <div className="cardd">
                                
                                <h3>{product.title}</h3>
                                <img id="prod-img"src={product.img} alt='' />
                                <p>{product.desc}</p>
                                <p><strong>{product.price}</strong></p>
                                {/*<p>$ Range: {product.cost}</p>*/} <br/>
                                <p>Type:{product.type}</p>
                                <button id="prod-button">Add to Cart</button>
                            </div>
                        ))}
                    </div>
            </div>
        )
     }

export default FeaturedProducts;
