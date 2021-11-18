import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/actions/productActions';

const AddProduct = () => {

  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImgUrl, setProductImgUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSub = (e) => {
    e.preventDefault()
    dispatch(addProduct({
      productName,
      productDescription,
      productImgUrl,
      price
    }))
    console.log("test");
    setProductName("");
    setProductDescription("");
    setProductImgUrl("");
    setPrice("");
  }

  return (
    <div className="container card w-75 bg-primary text-white mt-5">
      <div className="card-header text-center">
        <h1>ADD PRODUCT</h1>
      </div>
      <div className="card-body p-4">
        <form id="addProductForm" onSubmit={handleSub}>
          <div className="mb-3">
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" className="form-control" value={productName} onChange={e => setProductName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription">Product Description:</label>
            <input type="text" id="productDescription" className="form-control" value={productDescription} onChange={e => setProductDescription(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="productImgUrl">Image Url for Product:</label>
            <input type="text" id="productImgUrl" className="form-control" value={productImgUrl} onChange={e => setProductImgUrl(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-white btn-block w-50 mt-3">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
