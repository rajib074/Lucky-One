import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        const newCart = [...cart, photo];
        // console.log(newCart);
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
                
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Photos;