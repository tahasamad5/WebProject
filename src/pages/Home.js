import { Link } from 'react-router-dom';
import { booksData } from '../data/books';

function Home() {
  const featuredBooks = booksData.slice(0, 6);

  return (
    <div>
      
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Welcome to BookStore</h1>
              <p className="lead">Discover your next favorite book from our vast collection</p>
              <Link to="/about" className="btn btn-light btn-lg">Learn More</Link>
            </div>
            <div className="col-lg-6">
              <img 
  src="/images/hero-books.jpg" 
  alt="Books" 
  className="img-fluid rounded"
/>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Books</h2>
        <div className="row">
          {featuredBooks.map(book => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={book.image} 
                  className="card-img-top" 
                  alt={book.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text text-muted">by {book.author}</p>
                  <p className="card-text">{book.category}</p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0 text-primary">${book.price}</span>
                      <Link to={`/book/${book.id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

          <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose BookStore?</h2>
          <div className="row">
            <div className="col-md-4 text-center mb-3">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-truck fs-2"></i>
              </div>
              <h4 className="mt-3">Fast Delivery</h4>
              <p>Get your books delivered within 2-3 business days</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-shield-check fs-2"></i>
              </div>
              <h4 className="mt-3">Secure Payment</h4>
              <p>100% secure payment with money-back guarantee</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-headset fs-2"></i>
              </div>
              <h4 className="mt-3">24/7 Support</h4>
              <p>Round the clock customer support for all your queries</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;