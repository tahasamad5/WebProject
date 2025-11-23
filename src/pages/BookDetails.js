import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { booksData } from '../data/books';

function BookDetails({ addToCart }) {
  const { id } = useParams();
  const book = booksData.find(b => b.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  if (!book) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          Book not found!
        </div>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(book);
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

 return (
    <div className="container my-5">
         {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <i className="bi bi-check-circle me-2"></i>
          Book added to cart successfully!
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}
    <div className="row">
        <div className="col-md-5">
          <img 
            src={book.image} 
            alt={book.title}
            className="img-fluid rounded shadow"
          />
        </div>
        
        <div className="col-md-7">
          <h1 className="mb-3">{book.title}</h1>
          <p className="text-muted fs-5">by {book.author}</p>
          
          <div className="mb-3">
            <span className="badge bg-primary me-2">{book.category}</span>
            <span className="text-warning">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`bi bi-star${i < Math.floor(book.rating) ? '-fill' : ''}`}></i>
              ))}
              <span className="text-dark ms-2">({book.rating})</span>
            </span>
          </div>
          
          <h3 className="text-primary mb-4">${book.price}</h3>
          
          <p className="lead mb-4">{book.description}</p>
          
          <div className="alert alert-success" role="alert">
            <i className="bi bi-check-circle me-2"></i>
            <strong>In Stock</strong> - {book.stock} copies available
          </div>
          
          <div className="d-flex align-items-center mb-4">
            <label className="me-3 fw-bold">Quantity:</label>
            <div className="input-group w-25">
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input 
                type="text" 
                className="form-control text-center" 
                value={quantity}
                readOnly
              />
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.min(book.stock, quantity + 1))}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="d-flex gap-2">
            <button 
              className="btn btn-primary btn-lg"
              onClick={handleAddToCart}
            >
              <i className="bi bi-cart-plus me-2"></i>Add to Cart
            </button>
            <Link to="/" className="btn btn-outline-secondary btn-lg">
              <i className="bi bi-arrow-left me-2"></i>Continue Shopping
            </Link>
          </div>
        </div>
      </div>


    </div>)
}

export default BookDetails;