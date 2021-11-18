import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    console.log(product);
    console.log(product.productImgUrl)
  return (
    <div className="col">
      <div className="card h-100 p-3">
        <img src={ product.productImgUrl } alt="..." className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{ product.productName }</h5>
          <p className="card-text">{ product.productDescription }</p>
          <p className="card-text text-danger"> Price: { product.price } SEK</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Link to={`/products/${product.id}`} type="button" className="btn btn-primary">Show Product</Link>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Product
