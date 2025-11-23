import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>BookStore</h5>
            <p>Your favorite online bookstore for all genres of books.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
              <li><Link to="/cart" className="text-white-50 text-decoration-none">Shopping Cart</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p className="mb-1"><i className="bi bi-envelope"></i> 52231356@students.liu.edu.lb</p>
            <p className="mb-1"><i className="bi bi-phone"></i> +961 71 868913</p>
            <p><i className="bi bi-geo-alt"></i> Bakhoun,Danniyeh</p>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 BookStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;