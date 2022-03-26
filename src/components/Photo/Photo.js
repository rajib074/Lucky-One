import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Photo.css'

const Photo = ({photo, handleAddToCart}) => {
//    console.log(photo);
    const {name, picture, price} = photo;
    return (
        
        <div  className='photos-ditels'>
            <div>
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <p>Price: {price} taka</p>
            </div>
            <button  onClick={()=>handleAddToCart(photo)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                

            </button>

        </div>
    );
};

export default Photo;