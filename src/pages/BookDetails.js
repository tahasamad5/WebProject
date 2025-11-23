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

      

    </div>)
}

export default BookDetails;