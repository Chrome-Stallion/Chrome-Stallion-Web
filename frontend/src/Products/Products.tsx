import React from 'react';
import data from './data';

<div className = "content">
    <ul className = "products">
        {
            // missing an arrow below => I didnt know how to add the arrow
            data.products.map(product 
                <li>
                    <div className ="Product">
                        <img className="product-image" src={product.imageUrl} alt="product"/>
                        <div className="product-name">
                            <a href="product.html">{product.name}</a>

                         </div>
                        <div className="product-brand">{product.brand}</div>
                         <div className="product-price">{product.price}</div>
                         <div className="product-rating">{product.rating} Stars ({product.numberOfReviews} Reviews)</div>
                    </div>
                </li> )
        }
    
     </ul>
</div>
    