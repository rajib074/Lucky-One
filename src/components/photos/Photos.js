import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import './Photos.css'


const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [cart, setCart]=useState([]);

    useEffect( () => {
        fetch('photos.json')
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, []);

    const handleAddToCart=(photo)=>{
        console.log(photo);
        const newCart = [...cart, photo];
        setCart(newCart)
    }

    return (
        <div className='photos-sell'>
            <div className="photos-container">
                {
                    photos.map(photo=><Photo 
                        key={photo.id}
                        photo={photo}
                        handleAddToCart={handleAddToCart}
                        ></Photo>)
                }
            </div>
            <div className="cart-container">
                <h1>card{cart.length}</h1>
                
            </div>
        </div>
    );
};

export default Photos;