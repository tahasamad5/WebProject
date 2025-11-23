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

      
    </div>
  );
}

export default Home;