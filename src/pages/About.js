
function About() {
  return (
    <div className="container my-5">
      
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-primary">About BookStore</h1>
          <p className="lead text-muted">Your Trusted Online Book Destination Since 2020</p>
        </div>
      </div>

      
      <div className="row mb-5">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Our Story</h2>
              <p className="text-center">
                Founded in 2020, BookStore has grown from a small startup to one of the leading online bookstores.
                We started with a simple mission: to make books accessible to everyone, everywhere. 
              </p>
              <p className="text-center">
                Our passion for literature and commitment to customer service has helped us build a community 
                of over 100,000 book lovers. Today, we offer thousands of titles across all genres, 
                from bestselling novels to academic textbooks.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <div className="card h-100 border-primary">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Our Mission</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                To inspire and enable people to read more by providing easy access to a vast collection 
                of books at affordable prices, delivered right to their doorstep.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100 border-success">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Our Vision</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                To become the world's most customer-centric online bookstore where readers can discover 
                and purchase any book they desire while fostering a global community.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Why Choose BookStore?</h2>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <div className="text-primary mb-3">
                <i className="bi bi-truck fs-1"></i>
              </div>
              <h5 className="card-title">Fast Delivery</h5>
              <p className="card-text">Get your books delivered within 2-3 business days</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <div className="text-success mb-3">
                <i className="bi bi-shield-check fs-1"></i>
              </div>
              <h5 className="card-title">Secure Payment</h5>
              <p className="card-text">100% secure payment with money-back guarantee</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <div className="text-info mb-3">
                <i className="bi bi-headset fs-1"></i>
              </div>
              <h5 className="card-title">24/7 Support</h5>
              <p className="card-text">Round the clock customer support for all queries</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="row">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="text-center mb-4">Our Achievements</h2>
              <div className="row text-center">
                <div className="col-6 col-md-3 mb-3">
                  <h3 className="text-primary fw-bold">50K+</h3>
                  <p className="mb-0">Books</p>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <h3 className="text-success fw-bold">100K+</h3>
                  <p className="mb-0">Customers</p>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <h3 className="text-warning fw-bold">500+</h3>
                  <p className="mb-0">Authors</p>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <h3 className="text-info fw-bold">4.8/5</h3>
                  <p className="mb-0">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
